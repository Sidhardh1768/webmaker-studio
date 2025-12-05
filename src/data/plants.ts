export interface Plant {
  id: string;
  commonName: string;
  scientificName: string;
  family: string;
  category: string;
  description: string;
  medicinalProperties: string[];
  ayurvedicBenefits: string[];
  growingConditions: {
    soil: string;
    temperature: string;
    rainfall: string;
    sunlight: string;
    watering: string;
  };
  regions: string[];
  image: string;
}

export const categories = [
  { id: "all", name: "All Plants", icon: "🌿" },
  { id: "medicinal", name: "Medicinal", icon: "💊" },
  { id: "aromatic", name: "Aromatic", icon: "🌸" },
  { id: "culinary", name: "Culinary", icon: "🍃" },
  { id: "ayurvedic", name: "Ayurvedic", icon: "🕉️" },
];

export const plants: Plant[] = [
  {
    id: "tulsi",
    commonName: "Tulsi (Holy Basil)",
    scientificName: "Ocimum tenuiflorum",
    family: "Lamiaceae",
    category: "ayurvedic",
    description: "Tulsi, also known as Holy Basil, is a sacred plant in Hindu tradition and one of the most important herbs in Ayurvedic medicine. It is revered for its spiritual significance and powerful healing properties.",
    medicinalProperties: ["Antimicrobial", "Anti-inflammatory", "Adaptogenic", "Antioxidant", "Immunomodulatory"],
    ayurvedicBenefits: ["Balances Kapha and Vata doshas", "Promotes respiratory health", "Enhances mental clarity", "Supports digestion", "Boosts immunity"],
    growingConditions: {
      soil: "Well-drained, fertile soil with pH 6-7",
      temperature: "20-35°C",
      rainfall: "Moderate rainfall, 70-100cm annually",
      sunlight: "Full sun to partial shade (6-8 hours)",
      watering: "Regular watering, keep soil moist but not waterlogged"
    },
    regions: ["Throughout India", "Uttar Pradesh", "Madhya Pradesh", "Karnataka"],
    image: "https://images.unsplash.com/photo-1629157606597-24acc4fb1261?w=800"
  },
  {
    id: "ashwagandha",
    commonName: "Ashwagandha",
    scientificName: "Withania somnifera",
    family: "Solanaceae",
    category: "ayurvedic",
    description: "Ashwagandha, known as Indian Ginseng, is one of the most powerful herbs in Ayurvedic healing. It has been used for over 3,000 years to relieve stress, increase energy levels, and improve concentration.",
    medicinalProperties: ["Adaptogenic", "Anti-stress", "Neuroprotective", "Anti-inflammatory", "Rejuvenating"],
    ayurvedicBenefits: ["Balances Vata and Kapha", "Promotes strength and vitality", "Supports reproductive health", "Enhances memory", "Calms the mind"],
    growingConditions: {
      soil: "Sandy loam, well-drained soil",
      temperature: "20-38°C",
      rainfall: "Low to moderate, 60-75cm annually",
      sunlight: "Full sun (6-8 hours daily)",
      watering: "Low water requirement, drought tolerant"
    },
    regions: ["Rajasthan", "Gujarat", "Madhya Pradesh", "Maharashtra", "Punjab"],
    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=800"
  },
  {
    id: "neem",
    commonName: "Neem",
    scientificName: "Azadirachta indica",
    family: "Meliaceae",
    category: "medicinal",
    description: "Neem is often called the 'Village Pharmacy' in India due to its incredible range of medicinal applications. Every part of the neem tree—leaves, bark, seeds, and oil—has therapeutic value.",
    medicinalProperties: ["Antibacterial", "Antifungal", "Antiviral", "Blood purifier", "Insecticidal"],
    ayurvedicBenefits: ["Detoxifies blood", "Supports skin health", "Promotes oral hygiene", "Balances Pitta and Kapha", "Natural pest control"],
    growingConditions: {
      soil: "Grows in almost all soil types, prefers well-drained",
      temperature: "21-32°C",
      rainfall: "Tolerates 400-1200mm annually",
      sunlight: "Full sun",
      watering: "Minimal once established, drought resistant"
    },
    regions: ["Throughout India", "Tamil Nadu", "Karnataka", "Andhra Pradesh", "Uttar Pradesh"],
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=800"
  },
  {
    id: "turmeric",
    commonName: "Turmeric (Haldi)",
    scientificName: "Curcuma longa",
    family: "Zingiberaceae",
    category: "culinary",
    description: "Turmeric is the golden spice of India, used extensively in cooking and medicine. Its active compound, curcumin, has powerful anti-inflammatory and antioxidant effects.",
    medicinalProperties: ["Anti-inflammatory", "Antioxidant", "Antiseptic", "Hepatoprotective", "Wound healing"],
    ayurvedicBenefits: ["Balances all three doshas", "Purifies blood", "Supports joint health", "Enhances complexion", "Aids digestion"],
    growingConditions: {
      soil: "Loamy or alluvial soil rich in organic matter",
      temperature: "20-30°C",
      rainfall: "High rainfall, 150-250cm annually",
      sunlight: "Partial shade to full sun",
      watering: "Regular watering, requires consistent moisture"
    },
    regions: ["Andhra Pradesh", "Tamil Nadu", "Odisha", "Karnataka", "West Bengal"],
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800"
  },
  {
    id: "brahmi",
    commonName: "Brahmi",
    scientificName: "Bacopa monnieri",
    family: "Plantaginaceae",
    category: "ayurvedic",
    description: "Brahmi is a legendary Ayurvedic herb known for enhancing brain function. It has been used for centuries to improve memory, reduce anxiety, and treat neurological disorders.",
    medicinalProperties: ["Nootropic", "Anxiolytic", "Antioxidant", "Neuroprotective", "Memory enhancing"],
    ayurvedicBenefits: ["Enhances intellect", "Calms mind", "Supports nervous system", "Balances Vata and Pitta", "Promotes longevity"],
    growingConditions: {
      soil: "Moist, marshy soil",
      temperature: "22-35°C",
      rainfall: "High moisture areas",
      sunlight: "Partial shade",
      watering: "Requires constant moisture, can grow in water"
    },
    regions: ["Throughout India", "Kerala", "West Bengal", "Tamil Nadu"],
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800"
  },
  {
    id: "aloe-vera",
    commonName: "Aloe Vera (Ghritkumari)",
    scientificName: "Aloe barbadensis miller",
    family: "Asphodelaceae",
    category: "medicinal",
    description: "Aloe Vera is known as the 'Plant of Immortality'. Its gel is used extensively for skin care, digestive health, and wound healing. It's one of the most versatile medicinal plants.",
    medicinalProperties: ["Wound healing", "Moisturizing", "Anti-inflammatory", "Laxative", "Antioxidant"],
    ayurvedicBenefits: ["Cools Pitta", "Supports skin health", "Aids digestion", "Detoxifies body", "Promotes hair growth"],
    growingConditions: {
      soil: "Sandy, well-drained soil",
      temperature: "18-30°C",
      rainfall: "Low rainfall, drought tolerant",
      sunlight: "Bright indirect light to full sun",
      watering: "Infrequent, allow soil to dry between watering"
    },
    regions: ["Rajasthan", "Gujarat", "Andhra Pradesh", "Tamil Nadu", "Maharashtra"],
    image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800"
  },
  {
    id: "mint",
    commonName: "Mint (Pudina)",
    scientificName: "Mentha spicata",
    family: "Lamiaceae",
    category: "aromatic",
    description: "Mint is a refreshing aromatic herb used in cuisines worldwide. It's known for its cooling properties and is commonly used to aid digestion and freshen breath.",
    medicinalProperties: ["Digestive aid", "Cooling", "Antimicrobial", "Analgesic", "Carminative"],
    ayurvedicBenefits: ["Cools Pitta", "Relieves nausea", "Freshens breath", "Aids digestion", "Soothes headaches"],
    growingConditions: {
      soil: "Rich, moist soil",
      temperature: "15-25°C",
      rainfall: "Moderate",
      sunlight: "Partial shade to full sun",
      watering: "Regular, keep soil consistently moist"
    },
    regions: ["Throughout India", "Himachal Pradesh", "Uttarakhand", "Punjab"],
    image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=800"
  },
  {
    id: "lemongrass",
    commonName: "Lemongrass",
    scientificName: "Cymbopogon citratus",
    family: "Poaceae",
    category: "aromatic",
    description: "Lemongrass is a fragrant tropical plant with a citrusy aroma. It's widely used in teas, soups, and aromatherapy for its calming and therapeutic properties.",
    medicinalProperties: ["Antibacterial", "Antifungal", "Analgesic", "Febrifuge", "Insect repellent"],
    ayurvedicBenefits: ["Reduces Kapha", "Aids digestion", "Relieves fever", "Calms nerves", "Purifies air"],
    growingConditions: {
      soil: "Well-drained, loamy soil",
      temperature: "20-35°C",
      rainfall: "High rainfall areas",
      sunlight: "Full sun (6+ hours)",
      watering: "Regular, keep soil moist"
    },
    regions: ["Kerala", "Karnataka", "Tamil Nadu", "Maharashtra", "Assam"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
  }
];
