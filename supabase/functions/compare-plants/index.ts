import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM = `You are an expert herbalist. Given 2-3 plants, return a comparison as STRICT JSON only:
{
  "verdict": "1-2 sentence summary of how they compare",
  "rows": [
    { "trait": "Primary use", "values": ["...", "..."] },
    { "trait": "Dosha balance", "values": ["...", "..."] },
    { "trait": "Best preparation", "values": ["...", "..."] },
    { "trait": "Onset of effect", "values": ["...", "..."] },
    { "trait": "Safety profile", "values": ["...", "..."] },
    { "trait": "Best paired with", "values": ["...", "..."] }
  ],
  "winner": { "category": "Best for stress", "plant": "..." }
}
The values arrays must match the order of input plants. No markdown.`;

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const { plants } = await req.json();
    if (!Array.isArray(plants) || plants.length < 2) {
      return new Response(JSON.stringify({ error: "Provide 2-3 plant names" }), {
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
          { role: "user", content: `Compare these plants in order: ${plants.join(", ")}. Return JSON now.` },
        ],
      }),
    });
    if (!r.ok) {
      if (r.status === 429) return new Response(JSON.stringify({ error: "Rate limit." }), { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      if (r.status === 402) return new Response(JSON.stringify({ error: "AI credits exhausted." }), { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } });
      throw new Error(`gateway ${r.status}`);
    }
    const data = await r.json();
    const content = data.choices?.[0]?.message?.content ?? "";
    let result;
    try {
      result = JSON.parse(content.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim());
    } catch {
      result = { error: "Could not parse" };
    }
    return new Response(JSON.stringify(result), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e) {
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
