import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { image } = await req.json();
    
    if (!image) {
      throw new Error('No image data provided');
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('Identifying plant from image...');

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          {
            role: 'system',
            content: `You are an expert botanist and herbalist specializing in medicinal and ayurvedic plants. When shown an image of a plant, identify it and provide detailed information in the following JSON format:

{
  "identified": true/false,
  "confidence": "high/medium/low",
  "commonName": "Common name of the plant",
  "scientificName": "Scientific name",
  "family": "Plant family",
  "category": "medicinal/aromatic/culinary/ayurvedic",
  "description": "Brief description of the plant",
  "medicinalProperties": ["property1", "property2", ...],
  "ayurvedicBenefits": ["benefit1", "benefit2", ...],
  "growingConditions": {
    "soil": "Soil requirements",
    "temperature": "Temperature range",
    "sunlight": "Sunlight needs",
    "watering": "Watering requirements"
  },
  "usageTips": "How to use this plant medicinally or in cooking"
}

If you cannot identify the plant or the image doesn't show a plant, return:
{
  "identified": false,
  "message": "Explanation of why identification failed"
}

Always respond with valid JSON only, no additional text.`
          },
          {
            role: 'user',
            content: [
              {
                type: 'text',
                text: 'Please identify this plant and provide detailed information about it, including its medicinal properties and ayurvedic benefits.'
              },
              {
                type: 'image_url',
                image_url: {
                  url: image
                }
              }
            ]
          }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded, please try again later.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'Payment required, please add credits.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error('No response from AI');
    }

    console.log('Plant identification complete');

    // Parse the JSON response
    let plantInfo;
    try {
      // Remove any markdown code blocks if present
      const cleanContent = content.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
      plantInfo = JSON.parse(cleanContent);
    } catch (parseError) {
      console.error('Failed to parse AI response:', content);
      plantInfo = {
        identified: false,
        message: 'Unable to parse plant information. Please try again with a clearer image.'
      };
    }

    return new Response(JSON.stringify(plantInfo), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in identify-plant function:', error);
    return new Response(JSON.stringify({ 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
