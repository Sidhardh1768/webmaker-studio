import { useState, useRef } from "react";
import { Camera, X, Loader2, Leaf, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface PlantInfo {
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

const PlantScanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [plantInfo, setPlantInfo] = useState<PlantInfo | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Convert file to base64
    const reader = new FileReader();
    reader.onload = async (e) => {
      const base64Image = e.target?.result as string;
      setCapturedImage(base64Image);
      await identifyPlant(base64Image);
    };
    reader.readAsDataURL(file);
  };

  const identifyPlant = async (imageData: string) => {
    setIsLoading(true);
    setPlantInfo(null);

    try {
      const { data, error } = await supabase.functions.invoke('identify-plant', {
        body: { image: imageData }
      });

      if (error) {
        throw error;
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setPlantInfo(data);

      if (data.identified) {
        toast({
          title: "Plant Identified!",
          description: `Found: ${data.commonName}`,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Could not identify plant",
          description: data.message || "Try with a clearer image",
        });
      }
    } catch (error) {
      console.error('Error identifying plant:', error);
      toast({
        variant: "destructive",
        title: "Identification failed",
        description: error instanceof Error ? error.message : "Please try again",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenScanner = () => {
    setIsOpen(true);
    setCapturedImage(null);
    setPlantInfo(null);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCapturedImage(null);
    setPlantInfo(null);
  };

  const handleRetake = () => {
    setCapturedImage(null);
    setPlantInfo(null);
    fileInputRef.current?.click();
  };

  return (
    <>
      <Button
        onClick={handleOpenScanner}
        className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg bg-primary hover:bg-primary/90 p-0"
        size="icon"
      >
        <Camera className="h-6 w-6" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              Plant Scanner
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            {!capturedImage ? (
              <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-muted-foreground/25 rounded-lg">
                <Camera className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4 text-center">
                  Take a photo or upload an image of a plant to identify it
                </p>
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleFileSelect}
                  ref={fileInputRef}
                  className="hidden"
                />
                <Button onClick={() => fileInputRef.current?.click()}>
                  <Camera className="h-4 w-4 mr-2" />
                  Capture or Upload Photo
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative">
                  <img
                    src={capturedImage}
                    alt="Captured plant"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  {isLoading && (
                    <div className="absolute inset-0 bg-background/80 flex items-center justify-center rounded-lg">
                      <div className="flex flex-col items-center gap-2">
                        <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        <p className="text-sm text-muted-foreground">Identifying plant...</p>
                      </div>
                    </div>
                  )}
                </div>

                {plantInfo && plantInfo.identified && (
                  <div className="bg-muted/50 rounded-lg p-4 space-y-4">
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-5 w-5 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg">{plantInfo.commonName}</h3>
                        <p className="text-sm text-muted-foreground italic">
                          {plantInfo.scientificName}
                        </p>
                        {plantInfo.family && (
                          <p className="text-xs text-muted-foreground">
                            Family: {plantInfo.family}
                          </p>
                        )}
                        {plantInfo.confidence && (
                          <span className={`inline-block mt-1 text-xs px-2 py-0.5 rounded-full ${
                            plantInfo.confidence === 'high' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : plantInfo.confidence === 'medium'
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                          }`}>
                            {plantInfo.confidence} confidence
                          </span>
                        )}
                      </div>
                    </div>

                    {plantInfo.description && (
                      <p className="text-sm">{plantInfo.description}</p>
                    )}

                    {plantInfo.medicinalProperties && plantInfo.medicinalProperties.length > 0 && (
                      <div>
                        <h4 className="font-medium text-sm mb-2">Medicinal Properties</h4>
                        <div className="flex flex-wrap gap-1">
                          {plantInfo.medicinalProperties.map((prop, idx) => (
                            <span key={idx} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                              {prop}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {plantInfo.ayurvedicBenefits && plantInfo.ayurvedicBenefits.length > 0 && (
                      <div>
                        <h4 className="font-medium text-sm mb-2">Ayurvedic Benefits</h4>
                        <ul className="text-sm list-disc list-inside space-y-1">
                          {plantInfo.ayurvedicBenefits.map((benefit, idx) => (
                            <li key={idx} className="text-muted-foreground">{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {plantInfo.growingConditions && (
                      <div>
                        <h4 className="font-medium text-sm mb-2">Growing Conditions</h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          {plantInfo.growingConditions.soil && (
                            <div>
                              <span className="text-muted-foreground">Soil:</span>{" "}
                              {plantInfo.growingConditions.soil}
                            </div>
                          )}
                          {plantInfo.growingConditions.temperature && (
                            <div>
                              <span className="text-muted-foreground">Temp:</span>{" "}
                              {plantInfo.growingConditions.temperature}
                            </div>
                          )}
                          {plantInfo.growingConditions.sunlight && (
                            <div>
                              <span className="text-muted-foreground">Sunlight:</span>{" "}
                              {plantInfo.growingConditions.sunlight}
                            </div>
                          )}
                          {plantInfo.growingConditions.watering && (
                            <div>
                              <span className="text-muted-foreground">Water:</span>{" "}
                              {plantInfo.growingConditions.watering}
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {plantInfo.usageTips && (
                      <div>
                        <h4 className="font-medium text-sm mb-1">Usage Tips</h4>
                        <p className="text-sm text-muted-foreground">{plantInfo.usageTips}</p>
                      </div>
                    )}
                  </div>
                )}

                {plantInfo && !plantInfo.identified && (
                  <div className="bg-destructive/10 rounded-lg p-4 text-center">
                    <p className="text-destructive font-medium">Could not identify plant</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {plantInfo.message || "Try with a clearer image of the plant"}
                    </p>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button variant="outline" onClick={handleRetake} className="flex-1">
                    <Camera className="h-4 w-4 mr-2" />
                    Try Another
                  </Button>
                  <Button variant="ghost" onClick={handleClose}>
                    <X className="h-4 w-4 mr-2" />
                    Close
                  </Button>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PlantScanner;
