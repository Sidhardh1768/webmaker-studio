import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM = `You are an expert Ayurvedic herbalist. Given a user's symptoms or health concern, recommend 3-5 medicinal/Ayurvedic herbs that may help. Return STRICT JSON only:
{
  "summary": "1-2 sentence overview of the concern",
  "remedies": [
    {
      "plant": "Common name",
      "scientificName": "...",
      "whyItHelps": "Short explanation",
      "preparation": "How to prepare/consume",
      "dosage": "Typical dosage guidance",
      "cautions": "Warnings, interactions, contraindications"
    }
  ],
  "disclaimer": "Standard medical disclaimer"
}
No markdown, no commentary.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const { symptoms } = await req.json();
    if (!symptoms || typeof symptoms !== "string") {
      return new Response(JSON.stringify({ error: "symptoms is required" }), {
        status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!KEY) throw new Error("LOVABLE_API_KEY not configured");

    const r = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM },
          { role: "user", content: `Symptoms/concern: "${symptoms}". Return JSON now.` },
        ],
      }),
    });
    if (!r.ok) {
      if (r.status === 429) return new Response(JSON.stringify({ error: "Rate limit, try again." }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (r.status === 402) return new Response(JSON.stringify({ error: "AI credits exhausted." }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      throw new Error(`gateway ${r.status}`);
    }
    const data = await r.json();
    const content = data.choices?.[0]?.message?.content ?? "";
    let result;
    try {
      result = JSON.parse(content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim());
    } catch {
      result = { error: "Could not parse AI response" };
    }
    return new Response(JSON.stringify(result), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
