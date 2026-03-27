import { useState, useRef, useEffect, useCallback } from "react";
import { Camera, X, Loader2, Leaf, Sparkles, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import PlantResult from "@/components/PlantResult";

export interface PlantInfo {
  identified: boolean;
  confidence?: string;
  commonName?: string;
  scientificName?: string;
  family?: string;
  category?: string;
  description?: string;
  medicinalProperties?: string[];
  ayurvedicBenefits?: string[];
  growingConditions?: {
    soil?: string;
    temperature?: string;
    sunlight?: string;
    watering?: string;
  };
  usageTips?: string;
  message?: string;
}

const SCAN_INTERVAL_MS = 5000; // scan every 5 seconds

const PlantScanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [isIdentifying, setIsIdentifying] = useState(false);
  const [plantInfo, setPlantInfo] = useState<PlantInfo | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { toast } = useToast();

  const stopCamera = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    setIsScanning(false);
  }, []);

  const captureFrame = useCallback((): string | null => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.readyState < 2) return null;

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;

    ctx.drawImage(video, 0, 0);
    return canvas.toDataURL("image/jpeg", 0.7);
  }, []);

  const identifyPlant = useCallback(async (imageData: string) => {
    if (isIdentifying) return; // skip if still processing previous frame
    setIsIdentifying(true);

    try {
      const { data, error } = await supabase.functions.invoke("identify-plant", {
        body: { image: imageData },
      });

      if (error) throw error;
      if (data.error) throw new Error(data.error);

      if (data.identified) {
        setPlantInfo(data);
        // Stop scanning once we get a result
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        toast({
          title: "Plant Identified!",
          description: `Found: ${data.commonName}`,
        });
      }
    } catch (error) {
      console.error("Error identifying plant:", error);
      // Don't stop scanning on error, just log it
    } finally {
      setIsIdentifying(false);
    }
  }, [isIdentifying, toast]);

  const startCamera = useCallback(async () => {
    setCameraError(null);
    setPlantInfo(null);

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment", width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }

      setIsScanning(true);

      // Auto-scan every N seconds
      intervalRef.current = setInterval(() => {
        const frame = captureFrame();
        if (frame) identifyPlant(frame);
      }, SCAN_INTERVAL_MS);

      // Also do an immediate first scan after 1.5s to give camera time to focus
      setTimeout(() => {
        const frame = captureFrame();
        if (frame) identifyPlant(frame);
      }, 1500);
    } catch (err) {
      console.error("Camera error:", err);
      setCameraError("Could not access camera. Please allow camera permissions.");
    }
  }, [captureFrame, identifyPlant]);

  const handleOpen = () => {
    setIsOpen(true);
    setPlantInfo(null);
    setCameraError(null);
  };

  const handleClose = useCallback(() => {
    stopCamera();
    setIsOpen(false);
    setPlantInfo(null);
    setCameraError(null);
  }, [stopCamera]);

  const handleRescan = useCallback(() => {
    setPlantInfo(null);
    // Restart the interval
    intervalRef.current = setInterval(() => {
      const frame = captureFrame();
      if (frame) identifyPlant(frame);
    }, SCAN_INTERVAL_MS);
    // Immediate scan
    const frame = captureFrame();
    if (frame) identifyPlant(frame);
  }, [captureFrame, identifyPlant]);

  // Start camera when dialog opens
  useEffect(() => {
    if (isOpen) {
      startCamera();
    }
    return () => stopCamera();
  }, [isOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Button
        onClick={handleOpen}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 p-0"
        size="icon"
      >
        <Camera className="h-6 w-6" />
      </Button>

      <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0">
          <DialogHeader className="p-4 pb-0">
            <DialogTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              Live Plant Scanner
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-0">
            {/* Live camera feed */}
            <div className="relative bg-black">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full h-[50vh] object-cover"
              />
              <canvas ref={canvasRef} className="hidden" />

              {/* Scanning overlay */}
              {isScanning && !plantInfo && (
                <div className="absolute inset-0 pointer-events-none">
                  {/* Corner brackets */}
                  <div className="absolute inset-8 border-2 border-primary/50 rounded-xl" />
                  
                  {/* Scanning line animation */}
                  <div className="absolute inset-8 overflow-hidden rounded-xl">
                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-scan-line" />
                  </div>

                  {/* Status indicator */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <div className="bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 flex items-center gap-2">
                      {isIdentifying ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin text-primary" />
                          <span className="text-sm font-medium">Analyzing...</span>
                        </>
                      ) : (
                        <>
                          <ScanLine className="h-4 w-4 text-primary" />
                          <span className="text-sm font-medium">Point at a plant</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Camera error */}
              {cameraError && (
                <div className="absolute inset-0 flex items-center justify-center bg-background">
                  <div className="text-center p-6">
                    <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                    <p className="text-muted-foreground">{cameraError}</p>
                    <Button onClick={startCamera} className="mt-4">
                      Try Again
                    </Button>
                  </div>
                </div>
              )}
            </div>

            {/* Result panel */}
            {plantInfo && plantInfo.identified && (
              <div className="p-4">
                <PlantResult plantInfo={plantInfo} />
                <div className="flex gap-2 mt-4">
                  <Button onClick={handleRescan} className="flex-1">
                    <ScanLine className="h-4 w-4 mr-2" />
                    Scan Another
                  </Button>
                  <Button variant="ghost" onClick={handleClose}>
                    <X className="h-4 w-4 mr-2" />
                    Close
                  </Button>
                </div>
              </div>
            )}

            {/* Close button when no result */}
            {!plantInfo && (
              <div className="p-4 pt-2">
                <Button variant="ghost" onClick={handleClose} className="w-full">
                  <X className="h-4 w-4 mr-2" />
                  Close Scanner
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PlantScanner;
