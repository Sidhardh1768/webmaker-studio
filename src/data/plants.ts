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
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=800"
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
  },
  {
    id: "ginger",
    commonName: "Ginger (Adrak)",
    scientificName: "Zingiber officinale",
    family: "Zingiberaceae",
    category: "culinary",
    description: "Ginger is a flowering plant whose rhizome is widely used as a spice and folk medicine. It has been used for thousands of years to treat nausea, digestive issues, and inflammation.",
    medicinalProperties: ["Anti-nausea", "Anti-inflammatory", "Digestive stimulant", "Analgesic", "Thermogenic"],
    ayurvedicBenefits: ["Kindles digestive fire (Agni)", "Reduces Kapha and Vata", "Relieves cold symptoms", "Improves circulation", "Supports respiratory health"],
    growingConditions: {
      soil: "Rich, moist, well-drained loamy soil",
      temperature: "20-30°C",
      rainfall: "High rainfall, 150-300cm annually",
      sunlight: "Partial shade",
      watering: "Regular, keep soil consistently moist"
    },
    regions: ["Kerala", "Karnataka", "Assam", "West Bengal", "Meghalaya"],
    image: "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800"
  },
  {
    id: "amla",
    commonName: "Amla (Indian Gooseberry)",
    scientificName: "Phyllanthus emblica",
    family: "Phyllanthaceae",
    category: "ayurvedic",
    description: "Amla is one of the richest natural sources of Vitamin C. It's a cornerstone of Ayurvedic medicine, used in Triphala and Chyawanprash, known for its rejuvenating properties.",
    medicinalProperties: ["Antioxidant", "Immunomodulatory", "Hepatoprotective", "Anti-aging", "Cardioprotective"],
    ayurvedicBenefits: ["Balances all three doshas", "Promotes longevity", "Strengthens immunity", "Supports hair health", "Enhances digestion"],
    growingConditions: {
      soil: "Light to heavy soils, prefers well-drained",
      temperature: "18-35°C",
      rainfall: "Moderate, 60-80cm annually",
      sunlight: "Full sun",
      watering: "Moderate, drought tolerant once established"
    },
    regions: ["Uttar Pradesh", "Madhya Pradesh", "Tamil Nadu", "Rajasthan", "Gujarat"],
    image: "https://images.unsplash.com/photo-1580281656488-22c6da0a4e9b?w=800"
  },
  {
    id: "shatavari",
    commonName: "Shatavari",
    scientificName: "Asparagus racemosus",
    family: "Asparagaceae",
    category: "ayurvedic",
    description: "Shatavari, meaning 'she who possesses a hundred husbands', is the primary female rejuvenative in Ayurveda. It supports reproductive health and hormonal balance.",
    medicinalProperties: ["Adaptogenic", "Galactagogue", "Demulcent", "Immunomodulatory", "Antioxidant"],
    ayurvedicBenefits: ["Nourishes female reproductive system", "Balances Pitta and Vata", "Promotes lactation", "Supports digestion", "Calms the mind"],
    growingConditions: {
      soil: "Sandy loam to red laterite soil",
      temperature: "20-35°C",
      rainfall: "Moderate to high, 70-150cm annually",
      sunlight: "Partial shade to full sun",
      watering: "Regular during growth, reduce when mature"
    },
    regions: ["Himalayas", "Karnataka", "Kerala", "Maharashtra", "Rajasthan"],
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800"
  },
  {
    id: "giloy",
    commonName: "Giloy (Guduchi)",
    scientificName: "Tinospora cordifolia",
    family: "Menispermaceae",
    category: "ayurvedic",
    description: "Giloy is known as 'Amrita' meaning divine nectar. It's a powerful immunomodulator and is used extensively for fever, diabetes, and boosting immunity.",
    medicinalProperties: ["Immunomodulatory", "Antipyretic", "Anti-diabetic", "Hepatoprotective", "Anti-inflammatory"],
    ayurvedicBenefits: ["Balances all three doshas", "Boosts immunity", "Purifies blood", "Supports liver function", "Reduces fever"],
    growingConditions: {
      soil: "Grows in various soil types",
      temperature: "20-40°C",
      rainfall: "Moderate",
      sunlight: "Partial shade to full sun",
      watering: "Moderate, tolerates some drought"
    },
    regions: ["Throughout India", "Bihar", "Uttar Pradesh", "Karnataka", "Maharashtra"],
    image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=800"
  },
  {
    id: "curry-leaf",
    commonName: "Curry Leaf (Kadi Patta)",
    scientificName: "Murraya koenigii",
    family: "Rutaceae",
    category: "culinary",
    description: "Curry leaves are aromatic leaves used extensively in South Indian cuisine. They have numerous medicinal properties and are excellent for hair and digestive health.",
    medicinalProperties: ["Digestive aid", "Anti-diabetic", "Antioxidant", "Hair growth promoter", "Hepatoprotective"],
    ayurvedicBenefits: ["Kindles digestive fire", "Supports eye health", "Promotes hair growth", "Balances Kapha", "Aids nutrient absorption"],
    growingConditions: {
      soil: "Well-drained, fertile soil",
      temperature: "20-37°C",
      rainfall: "Moderate to high",
      sunlight: "Full sun to partial shade",
      watering: "Regular, keep soil moist"
    },
    regions: ["Throughout India", "Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh"],
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800"
  },
  {
    id: "coriander",
    commonName: "Coriander (Dhania)",
    scientificName: "Coriandrum sativum",
    family: "Apiaceae",
    category: "culinary",
    description: "Coriander is an essential herb in Indian cooking, used both as fresh leaves (cilantro) and dried seeds. It has cooling properties and aids digestion.",
    medicinalProperties: ["Digestive aid", "Cooling", "Carminative", "Anti-inflammatory", "Blood sugar regulator"],
    ayurvedicBenefits: ["Cools Pitta", "Aids digestion", "Relieves urinary problems", "Purifies blood", "Reduces inflammation"],
    growingConditions: {
      soil: "Well-drained, fertile soil",
      temperature: "17-27°C",
      rainfall: "Moderate",
      sunlight: "Full sun to partial shade",
      watering: "Regular, keep soil consistently moist"
    },
    regions: ["Rajasthan", "Gujarat", "Madhya Pradesh", "Uttar Pradesh", "Tamil Nadu"],
    image: "https://images.unsplash.com/photo-1596097635121-14b63a7b0f9b?w=800"
  },
  {
    id: "fenugreek",
    commonName: "Fenugreek (Methi)",
    scientificName: "Trigonella foenum-graecum",
    family: "Fabaceae",
    category: "culinary",
    description: "Fenugreek is used as both herb (leaves) and spice (seeds) in Indian cuisine. It's known for managing diabetes, promoting lactation, and enhancing digestion.",
    medicinalProperties: ["Anti-diabetic", "Galactagogue", "Digestive aid", "Anti-inflammatory", "Cholesterol lowering"],
    ayurvedicBenefits: ["Kindles digestive fire", "Balances Vata and Kapha", "Supports lactation", "Strengthens body", "Promotes hair health"],
    growingConditions: {
      soil: "Well-drained loamy soil",
      temperature: "10-27°C",
      rainfall: "Low to moderate",
      sunlight: "Full sun",
      watering: "Moderate, avoid overwatering"
    },
    regions: ["Rajasthan", "Gujarat", "Madhya Pradesh", "Uttar Pradesh", "Maharashtra"],
    image: "https://images.unsplash.com/photo-1599021456807-25db0f974333?w=800"
  },
  {
    id: "fennel",
    commonName: "Fennel (Saunf)",
    scientificName: "Foeniculum vulgare",
    family: "Apiaceae",
    category: "aromatic",
    description: "Fennel is an aromatic herb with a sweet, anise-like flavor. It's commonly used as a mouth freshener and digestive aid after meals in India.",
    medicinalProperties: ["Digestive aid", "Carminative", "Galactagogue", "Anti-spasmodic", "Expectorant"],
    ayurvedicBenefits: ["Cools Pitta", "Aids digestion", "Freshens breath", "Supports lactation", "Relieves gas and bloating"],
    growingConditions: {
      soil: "Well-drained, fertile soil",
      temperature: "15-25°C",
      rainfall: "Moderate",
      sunlight: "Full sun",
      watering: "Regular, keep soil moist but not waterlogged"
    },
    regions: ["Gujarat", "Rajasthan", "Uttar Pradesh", "Karnataka", "Punjab"],
    image: "https://images.unsplash.com/photo-1528750717929-32abb73d3bd9?w=800"
  },
  {
    id: "cumin",
    commonName: "Cumin (Jeera)",
    scientificName: "Cuminum cyminum",
    family: "Apiaceae",
    category: "culinary",
    description: "Cumin is one of the most important spices in Indian cooking. Its distinctive warm, earthy flavor is essential in curries, and it's renowned for its digestive benefits.",
    medicinalProperties: ["Digestive aid", "Carminative", "Iron-rich", "Antimicrobial", "Antioxidant"],
    ayurvedicBenefits: ["Kindles digestive fire", "Balances all doshas", "Aids nutrient absorption", "Supports lactation", "Purifies blood"],
    growingConditions: {
      soil: "Well-drained, sandy loam soil",
      temperature: "25-30°C",
      rainfall: "Low, 25-50cm annually",
      sunlight: "Full sun",
      watering: "Low, drought tolerant"
    },
    regions: ["Gujarat", "Rajasthan", "Uttar Pradesh", "Punjab", "Madhya Pradesh"],
    image: "https://images.unsplash.com/photo-1591203635628-78dabb9aae27?w=800"
  },
  {
    id: "cardamom",
    commonName: "Cardamom (Elaichi)",
    scientificName: "Elettaria cardamomum",
    family: "Zingiberaceae",
    category: "aromatic",
    description: "Cardamom is known as the 'Queen of Spices'. It has a strong, unique flavor and is used in both sweet and savory dishes, as well as in traditional medicine.",
    medicinalProperties: ["Digestive aid", "Breath freshener", "Diuretic", "Anti-spasmodic", "Expectorant"],
    ayurvedicBenefits: ["Balances Kapha and Vata", "Freshens breath", "Aids digestion", "Supports respiratory health", "Improves appetite"],
    growingConditions: {
      soil: "Rich, loamy, well-drained acidic soil",
      temperature: "10-35°C",
      rainfall: "High, 150-400cm annually",
      sunlight: "Partial shade (under canopy)",
      watering: "Consistent moisture required"
    },
    regions: ["Kerala", "Karnataka", "Tamil Nadu", "Sikkim"],
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?w=800"
  },
  {
    id: "black-pepper",
    commonName: "Black Pepper (Kali Mirch)",
    scientificName: "Piper nigrum",
    family: "Piperaceae",
    category: "culinary",
    description: "Black pepper is the 'King of Spices', one of the most traded spices in the world. Its pungent flavor enhances food and it has powerful medicinal properties.",
    medicinalProperties: ["Digestive stimulant", "Bioavailability enhancer", "Thermogenic", "Antimicrobial", "Antioxidant"],
    ayurvedicBenefits: ["Kindles digestive fire", "Reduces Kapha", "Enhances nutrient absorption", "Clears respiratory congestion", "Stimulates metabolism"],
    growingConditions: {
      soil: "Well-drained, rich loamy soil",
      temperature: "20-30°C",
      rainfall: "High, 200-300cm annually",
      sunlight: "Partial shade",
      watering: "Regular, requires high humidity"
    },
    regions: ["Kerala", "Karnataka", "Tamil Nadu", "Andaman & Nicobar"],
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800"
  },
  {
    id: "clove",
    commonName: "Clove (Laung)",
    scientificName: "Syzygium aromaticum",
    family: "Myrtaceae",
    category: "aromatic",
    description: "Cloves are aromatic flower buds with a strong, pungent flavor. They're used extensively in cooking, medicine, and dentistry for their analgesic properties.",
    medicinalProperties: ["Analgesic", "Antiseptic", "Antimicrobial", "Digestive aid", "Anti-inflammatory"],
    ayurvedicBenefits: ["Kindles digestive fire", "Relieves toothache", "Supports respiratory health", "Balances Kapha", "Freshens breath"],
    growingConditions: {
      soil: "Rich, loamy, well-drained soil",
      temperature: "20-30°C",
      rainfall: "High, 150-250cm annually",
      sunlight: "Partial shade when young, full sun when mature",
      watering: "Regular, requires consistent moisture"
    },
    regions: ["Kerala", "Tamil Nadu", "Karnataka"],
    image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800"
  },
  {
    id: "cinnamon",
    commonName: "Cinnamon (Dalchini)",
    scientificName: "Cinnamomum verum",
    family: "Lauraceae",
    category: "aromatic",
    description: "Cinnamon is derived from the inner bark of trees. It has a warm, sweet flavor and is used in both cooking and traditional medicine for blood sugar regulation.",
    medicinalProperties: ["Blood sugar regulator", "Antimicrobial", "Anti-inflammatory", "Antioxidant", "Warming"],
    ayurvedicBenefits: ["Kindles digestive fire", "Balances Kapha and Vata", "Supports metabolism", "Improves circulation", "Freshens breath"],
    growingConditions: {
      soil: "Sandy loam with good drainage",
      temperature: "20-30°C",
      rainfall: "High, 200-250cm annually",
      sunlight: "Partial shade",
      watering: "Regular, requires humid conditions"
    },
    regions: ["Kerala", "Tamil Nadu", "Karnataka"],
    image: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=800"
  },
  {
    id: "moringa",
    commonName: "Moringa (Drumstick)",
    scientificName: "Moringa oleifera",
    family: "Moringaceae",
    category: "medicinal",
    description: "Moringa is called the 'Miracle Tree' due to its exceptional nutritional value. Every part of the tree is used, and it's one of the most nutrient-dense plants on Earth.",
    medicinalProperties: ["Nutritional powerhouse", "Anti-inflammatory", "Antioxidant", "Blood sugar regulator", "Antimicrobial"],
    ayurvedicBenefits: ["Balances Vata and Kapha", "Promotes strength", "Supports bone health", "Aids digestion", "Nourishes tissues"],
    growingConditions: {
      soil: "Well-drained sandy or loamy soil",
      temperature: "25-35°C",
      rainfall: "Low to moderate, drought tolerant",
      sunlight: "Full sun",
      watering: "Low, very drought tolerant"
    },
    regions: ["Throughout India", "Tamil Nadu", "Karnataka", "Andhra Pradesh", "Odisha"],
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=800"
  },
  {
    id: "hibiscus",
    commonName: "Hibiscus (Gudhal)",
    scientificName: "Hibiscus rosa-sinensis",
    family: "Malvaceae",
    category: "medicinal",
    description: "Hibiscus is known for its beautiful flowers and numerous health benefits. It's used for hair care, blood pressure management, and as a refreshing tea.",
    medicinalProperties: ["Antihypertensive", "Antioxidant", "Hair growth promoter", "Cooling", "Cholesterol lowering"],
    ayurvedicBenefits: ["Cools Pitta", "Promotes hair health", "Supports heart health", "Aids menstrual health", "Purifies blood"],
    growingConditions: {
      soil: "Well-drained, fertile soil",
      temperature: "15-35°C",
      rainfall: "Moderate to high",
      sunlight: "Full sun to partial shade",
      watering: "Regular, keep soil moist"
    },
    regions: ["Throughout India", "West Bengal", "Kerala", "Tamil Nadu", "Maharashtra"],
    image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=800"
  },
  {
    id: "jasmine",
    commonName: "Jasmine (Mogra)",
    scientificName: "Jasminum sambac",
    family: "Oleaceae",
    category: "aromatic",
    description: "Jasmine is one of the most fragrant flowers, used in perfumery, religious ceremonies, and traditional medicine. Its essential oil is prized for aromatherapy.",
    medicinalProperties: ["Calming", "Antidepressant", "Aphrodisiac", "Antiseptic", "Skin tonic"],
    ayurvedicBenefits: ["Cools Pitta", "Calms the mind", "Supports skin health", "Promotes restful sleep", "Uplifts mood"],
    growingConditions: {
      soil: "Well-drained, fertile loamy soil",
      temperature: "15-35°C",
      rainfall: "Moderate",
      sunlight: "Full sun to partial shade",
      watering: "Regular, avoid waterlogging"
    },
    regions: ["Throughout India", "Tamil Nadu", "Karnataka", "Andhra Pradesh", "West Bengal"],
    image: "https://images.unsplash.com/photo-1568696342600-e9e949f3e8a2?w=800"
  },
  {
    id: "rose",
    commonName: "Rose (Gulab)",
    scientificName: "Rosa damascena",
    family: "Rosaceae",
    category: "aromatic",
    description: "The Damask Rose is prized for its fragrance and medicinal properties. Rose water and rose oil are used extensively in cooking, skincare, and traditional medicine.",
    medicinalProperties: ["Cooling", "Antidepressant", "Anti-inflammatory", "Astringent", "Skin tonic"],
    ayurvedicBenefits: ["Cools Pitta", "Supports heart health", "Promotes skin radiance", "Calms the mind", "Balances emotions"],
    growingConditions: {
      soil: "Well-drained, rich loamy soil",
      temperature: "15-28°C",
      rainfall: "Moderate",
      sunlight: "Full sun (6+ hours)",
      watering: "Regular, avoid wetting leaves"
    },
    regions: ["Rajasthan", "Uttar Pradesh", "Himachal Pradesh", "Karnataka"],
    image: "https://images.unsplash.com/photo-1518882605630-8b00322a39e8?w=800"
  },
  {
    id: "lavender",
    commonName: "Lavender",
    scientificName: "Lavandula angustifolia",
    family: "Lamiaceae",
    category: "aromatic",
    description: "Lavender is famous for its calming fragrance and is widely used in aromatherapy, skincare, and natural remedies for anxiety and sleep disorders.",
    medicinalProperties: ["Calming", "Anxiolytic", "Antiseptic", "Analgesic", "Sleep promoting"],
    ayurvedicBenefits: ["Calms Vata and Pitta", "Promotes restful sleep", "Relieves headaches", "Soothes skin", "Reduces stress"],
    growingConditions: {
      soil: "Well-drained, alkaline, sandy soil",
      temperature: "15-25°C",
      rainfall: "Low to moderate",
      sunlight: "Full sun",
      watering: "Low, drought tolerant"
    },
    regions: ["Kashmir", "Himachal Pradesh", "Uttarakhand"],
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=800"
  },
  {
    id: "vetiver",
    commonName: "Vetiver (Khus)",
    scientificName: "Chrysopogon zizanioides",
    family: "Poaceae",
    category: "aromatic",
    description: "Vetiver is known for its cooling, earthy fragrance. Its roots are used in traditional cooling systems (khus curtains) and its essential oil is valued in perfumery.",
    medicinalProperties: ["Cooling", "Antioxidant", "Anti-inflammatory", "Calming", "Skin tonic"],
    ayurvedicBenefits: ["Cools Pitta", "Calms the mind", "Purifies blood", "Supports skin health", "Refreshes body"],
    growingConditions: {
      soil: "Grows in various soils, tolerates waterlogging",
      temperature: "25-40°C",
      rainfall: "Moderate to high",
      sunlight: "Full sun",
      watering: "Moderate, tolerates wet conditions"
    },
    regions: ["Uttar Pradesh", "Rajasthan", "Kerala", "Tamil Nadu", "Bihar"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
  },
  {
    id: "sandalwood",
    commonName: "Sandalwood (Chandan)",
    scientificName: "Santalum album",
    family: "Santalaceae",
    category: "aromatic",
    description: "Sandalwood is one of the most precious aromatic woods in the world. Its oil and paste are used in religious ceremonies, skincare, and traditional medicine.",
    medicinalProperties: ["Cooling", "Antiseptic", "Anti-inflammatory", "Calming", "Skin tonic"],
    ayurvedicBenefits: ["Cools Pitta", "Promotes mental clarity", "Supports skin health", "Calms the mind", "Used in meditation"],
    growingConditions: {
      soil: "Red sandy loam soil",
      temperature: "12-35°C",
      rainfall: "Moderate, 60-160cm annually",
      sunlight: "Partial shade when young, full sun when mature",
      watering: "Moderate, semi-parasitic plant"
    },
    regions: ["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh"],
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
  },
  {
    id: "henna",
    commonName: "Henna (Mehndi)",
    scientificName: "Lawsonia inermis",
    family: "Lythraceae",
    category: "medicinal",
    description: "Henna is famous for its use in body art, but it also has cooling and medicinal properties. It's used for hair care, skin conditions, and in traditional medicine.",
    medicinalProperties: ["Cooling", "Antifungal", "Antibacterial", "Hair conditioner", "Wound healing"],
    ayurvedicBenefits: ["Cools Pitta", "Promotes hair health", "Conditions scalp", "Supports skin health", "Natural colorant"],
    growingConditions: {
      soil: "Dry, arid conditions, various soil types",
      temperature: "25-45°C",
      rainfall: "Low, drought tolerant",
      sunlight: "Full sun",
      watering: "Low, very drought tolerant"
    },
    regions: ["Rajasthan", "Gujarat", "Madhya Pradesh", "Punjab"],
    image: "https://images.unsplash.com/photo-1571689936114-b16146c9570a?w=800"
  },
  {
    id: "saffron",
    commonName: "Saffron (Kesar)",
    scientificName: "Crocus sativus",
    family: "Iridaceae",
    category: "culinary",
    description: "Saffron is the world's most expensive spice by weight. It's prized for its color, flavor, and medicinal properties, used in cooking, medicine, and skincare.",
    medicinalProperties: ["Antidepressant", "Antioxidant", "Memory enhancer", "Aphrodisiac", "Complexion enhancer"],
    ayurvedicBenefits: ["Balances all doshas", "Enhances complexion", "Promotes mental clarity", "Supports heart health", "Improves mood"],
    growingConditions: {
      soil: "Well-drained, sandy loam soil",
      temperature: "Cool climate, -10 to 35°C",
      rainfall: "Low, 40-100cm annually",
      sunlight: "Full sun",
      watering: "Low, requires dry periods"
    },
    regions: ["Kashmir"],
    image: "https://images.unsplash.com/photo-1624797432677-6f803a98acb3?w=800"
  },
  {
    id: "bhringraj",
    commonName: "Bhringraj (False Daisy)",
    scientificName: "Eclipta prostrata",
    family: "Asteraceae",
    category: "ayurvedic",
    description: "Bhringraj is called the 'King of Hair' in Ayurveda. It's renowned for promoting hair growth, preventing premature graying, and supporting liver health.",
    medicinalProperties: ["Hair growth promoter", "Hepatoprotective", "Antimicrobial", "Anti-inflammatory", "Rejuvenating"],
    ayurvedicBenefits: ["Promotes hair growth", "Prevents graying", "Supports liver health", "Balances Vata and Kapha", "Calms the mind"],
    growingConditions: {
      soil: "Moist, fertile soil",
      temperature: "25-35°C",
      rainfall: "Moderate to high",
      sunlight: "Partial shade to full sun",
      watering: "Regular, keep soil moist"
    },
    regions: ["Throughout India", "Kerala", "Tamil Nadu", "West Bengal", "Assam"],
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800"
  },
  {
    id: "triphala",
    commonName: "Triphala Components (Haritaki)",
    scientificName: "Terminalia chebula",
    family: "Combretaceae",
    category: "ayurvedic",
    description: "Haritaki is one of the three fruits in Triphala. Known as the 'King of Medicines' in Tibet, it's valued for digestive health and rejuvenation.",
    medicinalProperties: ["Digestive aid", "Laxative", "Rejuvenating", "Antioxidant", "Antimicrobial"],
    ayurvedicBenefits: ["Balances all three doshas", "Promotes regular elimination", "Supports eye health", "Enhances intellect", "Nourishes tissues"],
    growingConditions: {
      soil: "Wide range of soils, prefers well-drained",
      temperature: "20-35°C",
      rainfall: "Moderate to high",
      sunlight: "Full sun",
      watering: "Moderate, established trees are drought tolerant"
    },
    regions: ["Throughout India", "Himalayas", "Madhya Pradesh", "West Bengal"],
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"
  },
  {
    id: "guggul",
    commonName: "Guggul",
    scientificName: "Commiphora wightii",
    family: "Burseraceae",
    category: "ayurvedic",
    description: "Guggul resin has been used for thousands of years in Ayurveda. It's particularly valued for supporting healthy cholesterol levels and joint health.",
    medicinalProperties: ["Cholesterol lowering", "Anti-inflammatory", "Thyroid support", "Weight management", "Antimicrobial"],
    ayurvedicBenefits: ["Reduces Kapha", "Supports joint health", "Promotes healthy weight", "Purifies blood", "Kindles digestive fire"],
    growingConditions: {
      soil: "Rocky, dry soil",
      temperature: "25-40°C",
      rainfall: "Very low, arid regions",
      sunlight: "Full sun",
      watering: "Minimal, extremely drought tolerant"
    },
    regions: ["Rajasthan", "Gujarat", "Karnataka", "Madhya Pradesh"],
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800"
  },
  {
    id: "arjuna",
    commonName: "Arjuna",
    scientificName: "Terminalia arjuna",
    family: "Combretaceae",
    category: "ayurvedic",
    description: "Arjuna bark is the premier heart tonic in Ayurveda. It has been used for centuries to support cardiovascular health and maintain healthy blood pressure.",
    medicinalProperties: ["Cardiotonic", "Antioxidant", "Blood pressure regulator", "Anti-inflammatory", "Wound healing"],
    ayurvedicBenefits: ["Supports heart health", "Balances Pitta and Kapha", "Promotes healthy circulation", "Strengthens heart muscle", "Calms emotions"],
    growingConditions: {
      soil: "Alluvial soil near water bodies",
      temperature: "20-35°C",
      rainfall: "Moderate to high",
      sunlight: "Full sun",
      watering: "Prefers moist conditions, grows near rivers"
    },
    regions: ["Throughout India", "Uttar Pradesh", "Madhya Pradesh", "West Bengal", "Karnataka"],
    image: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800"
  },
  {
    id: "manjistha",
    commonName: "Manjistha (Indian Madder)",
    scientificName: "Rubia cordifolia",
    family: "Rubiaceae",
    category: "ayurvedic",
    description: "Manjistha is the premier blood-purifying herb in Ayurveda. It's used for skin conditions, wound healing, and maintaining clear, radiant skin.",
    medicinalProperties: ["Blood purifier", "Anti-inflammatory", "Antioxidant", "Wound healing", "Lymphatic cleanser"],
    ayurvedicBenefits: ["Purifies blood", "Cools Pitta", "Supports skin health", "Promotes clear complexion", "Aids lymphatic drainage"],
    growingConditions: {
      soil: "Well-drained, fertile soil",
      temperature: "15-35°C",
      rainfall: "Moderate",
      sunlight: "Partial shade to full sun",
      watering: "Moderate, avoid waterlogging"
    },
    regions: ["Himalayas", "Kashmir", "Nilgiris", "Western Ghats"],
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800"
  },
  {
    id: "licorice",
    commonName: "Licorice (Mulethi)",
    scientificName: "Glycyrrhiza glabra",
    family: "Fabaceae",
    category: "ayurvedic",
    description: "Licorice root is one of the most widely used herbs in Ayurveda. It's known for its sweet taste and is used for respiratory, digestive, and adrenal support.",
    medicinalProperties: ["Expectorant", "Demulcent", "Adaptogenic", "Anti-inflammatory", "Antimicrobial"],
    ayurvedicBenefits: ["Balances Vata and Pitta", "Supports respiratory health", "Soothes digestion", "Nourishes adrenals", "Supports voice quality"],
    growingConditions: {
      soil: "Deep, fertile, sandy loam soil",
      temperature: "15-30°C",
      rainfall: "Moderate",
      sunlight: "Full sun",
      watering: "Regular during growth, reduce in winter"
    },
    regions: ["Jammu & Kashmir", "Punjab", "Himachal Pradesh"],
    image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800"
  },
  {
    id: "vacha",
    commonName: "Vacha (Sweet Flag)",
    scientificName: "Acorus calamus",
    family: "Acoraceae",
    category: "ayurvedic",
    description: "Vacha is highly valued in Ayurveda for enhancing memory, speech, and intelligence. It's used for neurological conditions and as a rejuvenative for the mind.",
    medicinalProperties: ["Memory enhancer", "Digestive aid", "Expectorant", "Antispasmodic", "Nervine"],
    ayurvedicBenefits: ["Enhances speech and memory", "Clears mental fog", "Balances Vata and Kapha", "Supports digestion", "Promotes clarity"],
    growingConditions: {
      soil: "Marshy, waterlogged areas",
      temperature: "15-35°C",
      rainfall: "High moisture areas",
      sunlight: "Partial shade",
      watering: "Requires constantly wet conditions"
    },
    regions: ["Himalayas", "Kashmir", "Manipur", "Naga Hills"],
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800"
  },
  {
    id: "kutki",
    commonName: "Kutki",
    scientificName: "Picrorhiza kurroa",
    family: "Plantaginaceae",
    category: "ayurvedic",
    description: "Kutki is a powerful bitter herb used for liver protection and digestive disorders. It's one of the most important herbs for liver health in Ayurveda.",
    medicinalProperties: ["Hepatoprotective", "Digestive bitter", "Immunomodulatory", "Anti-inflammatory", "Cholagogue"],
    ayurvedicBenefits: ["Detoxifies liver", "Kindles digestive fire", "Cools Pitta", "Purifies blood", "Supports bile flow"],
    growingConditions: {
      soil: "Rocky, alpine soil",
      temperature: "5-20°C (high altitude)",
      rainfall: "Moderate",
      sunlight: "Full sun to partial shade",
      watering: "Moderate, good drainage essential"
    },
    regions: ["Himalayas", "Kashmir", "Himachal Pradesh", "Uttarakhand"],
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800"
  },
  {
    id: "punarnava",
    commonName: "Punarnava",
    scientificName: "Boerhavia diffusa",
    family: "Nyctaginaceae",
    category: "ayurvedic",
    description: "Punarnava means 'one that renews the body'. It's a powerful rejuvenative herb particularly useful for kidney and urinary health, and reducing edema.",
    medicinalProperties: ["Diuretic", "Anti-inflammatory", "Hepatoprotective", "Rejuvenating", "Cardioprotective"],
    ayurvedicBenefits: ["Removes excess Kapha", "Supports kidney function", "Reduces swelling", "Rejuvenates tissues", "Balances all doshas"],
    growingConditions: {
      soil: "Grows in various soils, including poor soil",
      temperature: "25-40°C",
      rainfall: "Low to moderate",
      sunlight: "Full sun",
      watering: "Low, drought tolerant"
    },
    regions: ["Throughout India", "Uttar Pradesh", "Maharashtra", "Karnataka"],
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800"
  },
  {
    id: "trikatu",
    commonName: "Trikatu (Three Peppers)",
    scientificName: "Zingiber officinale + Piper nigrum + Piper longum",
    family: "Mixed (Zingiberaceae/Piperaceae)",
    category: "ayurvedic",
    description: "Trikatu is a powerful warming formula combining ginger, black pepper, and long pepper. It's the premier digestive and metabolic enhancer in Ayurveda.",
    medicinalProperties: ["Digestive stimulant", "Metabolic enhancer", "Thermogenic", "Bioavailability enhancer", "Expectorant"],
    ayurvedicBenefits: ["Kindles digestive fire", "Reduces Kapha", "Enhances absorption", "Clears congestion", "Supports metabolism"],
    growingConditions: {
      soil: "Varies by component",
      temperature: "20-35°C",
      rainfall: "Moderate to high",
      sunlight: "Varies by component",
      watering: "Varies by component"
    },
    regions: ["Throughout India (components grown in different regions)"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800"
  },
  {
    id: "ajwain",
    commonName: "Ajwain (Carom Seeds)",
    scientificName: "Trachyspermum ammi",
    family: "Apiaceae",
    category: "culinary",
    description: "Ajwain has a distinctive thyme-like flavor and is widely used in Indian cooking. It's particularly valued for its digestive and carminative properties.",
    medicinalProperties: ["Digestive aid", "Carminative", "Antispasmodic", "Antimicrobial", "Expectorant"],
    ayurvedicBenefits: ["Kindles digestive fire", "Relieves gas and bloating", "Reduces Vata and Kapha", "Supports respiratory health", "Eases colic"],
    growingConditions: {
      soil: "Well-drained, sandy loam soil",
      temperature: "15-25°C",
      rainfall: "Low to moderate",
      sunlight: "Full sun",
      watering: "Moderate, avoid overwatering"
    },
    regions: ["Rajasthan", "Gujarat", "Madhya Pradesh", "Uttar Pradesh", "Bihar"],
    image: "https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?w=800"
  },
  {
    id: "bael",
    commonName: "Bael (Wood Apple)",
    scientificName: "Aegle marmelos",
    family: "Rutaceae",
    category: "ayurvedic",
    description: "Bael is a sacred tree with excellent medicinal properties. Its fruit is particularly valued for digestive disorders and is offered to Lord Shiva.",
    medicinalProperties: ["Digestive aid", "Antidiarrheal", "Laxative", "Antimicrobial", "Cardioprotective"],
    ayurvedicBenefits: ["Balances all doshas", "Supports digestive health", "Heals intestinal ulcers", "Promotes heart health", "Sacred offering"],
    growingConditions: {
      soil: "Grows in various soils, prefers dry conditions",
      temperature: "25-45°C",
      rainfall: "Low to moderate, drought tolerant",
      sunlight: "Full sun",
      watering: "Low once established"
    },
    regions: ["Throughout India", "Uttar Pradesh", "Bihar", "West Bengal", "Madhya Pradesh"],
    image: "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800"
  },
  {
    id: "kokum",
    commonName: "Kokum",
    scientificName: "Garcinia indica",
    family: "Clusiaceae",
    category: "culinary",
    description: "Kokum is a tropical fruit from the Western Ghats. It's used as a souring agent in cooking and has cooling properties, popular in Konkani and Gujarati cuisine.",
    medicinalProperties: ["Digestive aid", "Cooling", "Antioxidant", "Anti-obesity", "Cardioprotective"],
    ayurvedicBenefits: ["Cools Pitta", "Aids digestion", "Reduces heat in body", "Supports weight management", "Refreshing in summer"],
    growingConditions: {
      soil: "Laterite soil, well-drained",
      temperature: "20-35°C",
      rainfall: "High, 250-500cm annually",
      sunlight: "Partial shade to full sun",
      watering: "Regular in dry season"
    },
    regions: ["Western Ghats", "Konkan", "Goa", "Maharashtra", "Karnataka"],
    image: "https://images.unsplash.com/photo-1546548970-71785318a17b?w=800"
  },
  {
    id: "tamarind",
    commonName: "Tamarind (Imli)",
    scientificName: "Tamarindus indica",
    family: "Fabaceae",
    category: "culinary",
    description: "Tamarind is a tangy fruit used extensively in Indian cuisine. Its pulp is used in chutneys, curries, and drinks, and it has laxative properties.",
    medicinalProperties: ["Digestive aid", "Laxative", "Antioxidant", "Antimicrobial", "Cooling"],
    ayurvedicBenefits: ["Cools Pitta", "Aids digestion", "Natural laxative", "Relieves heat", "Supports liver health"],
    growingConditions: {
      soil: "Grows in various soils, prefers deep alluvial",
      temperature: "25-40°C",
      rainfall: "Low to moderate, drought tolerant",
      sunlight: "Full sun",
      watering: "Low once established"
    },
    regions: ["Throughout India", "Tamil Nadu", "Karnataka", "Andhra Pradesh", "Maharashtra"],
    image: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?w=800"
  },
  {
    id: "mango-leaf",
    commonName: "Mango (Aam)",
    scientificName: "Mangifera indica",
    family: "Anacardiaceae",
    category: "culinary",
    description: "The King of Fruits, mango is beloved for its sweet flesh. Its leaves are also medicinal and are used in traditional treatments for diabetes and respiratory health.",
    medicinalProperties: ["Antidiabetic (leaves)", "Antioxidant", "Digestive aid", "Immunomodulatory", "Vitamin-rich"],
    ayurvedicBenefits: ["Balances Vata and Pitta", "Promotes strength", "Supports skin health", "Aids digestion", "Nourishes tissues"],
    growingConditions: {
      soil: "Deep, well-drained loamy soil",
      temperature: "24-30°C",
      rainfall: "Moderate, 75-250cm annually",
      sunlight: "Full sun",
      watering: "Regular when young, less when mature"
    },
    regions: ["Throughout India", "Maharashtra", "Uttar Pradesh", "Andhra Pradesh", "Karnataka", "Bihar"],
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=800"
  },
  {
    id: "papaya",
    commonName: "Papaya (Papita)",
    scientificName: "Carica papaya",
    family: "Caricaceae",
    category: "medicinal",
    description: "Papaya is known for its digestive enzyme papain. All parts of the plant have medicinal uses, from the fruit to leaves, which are used for dengue treatment.",
    medicinalProperties: ["Digestive enzyme", "Anti-inflammatory", "Wound healing", "Antimicrobial", "Platelet enhancer (leaves)"],
    ayurvedicBenefits: ["Kindles digestive fire", "Supports wound healing", "Promotes healthy skin", "Aids digestion", "Anti-parasitic"],
    growingConditions: {
      soil: "Well-drained, fertile loamy soil",
      temperature: "25-30°C",
      rainfall: "Moderate, 100-150cm annually",
      sunlight: "Full sun",
      watering: "Regular, avoid waterlogging"
    },
    regions: ["Throughout India", "Andhra Pradesh", "Karnataka", "Gujarat", "West Bengal"],
    image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=800"
  },
  {
    id: "stevia",
    commonName: "Stevia",
    scientificName: "Stevia rebaudiana",
    family: "Asteraceae",
    category: "medicinal",
    description: "Stevia is a natural sweetener that's 200-300 times sweeter than sugar with zero calories. It's increasingly used as a healthy sugar substitute.",
    medicinalProperties: ["Natural sweetener", "Zero calorie", "Antidiabetic", "Antioxidant", "Antimicrobial"],
    ayurvedicBenefits: ["Suitable for diabetics", "Doesn't raise blood sugar", "Supports weight management", "Natural sweet taste", "Cooling"],
    growingConditions: {
      soil: "Well-drained, sandy loam soil",
      temperature: "15-30°C",
      rainfall: "Moderate",
      sunlight: "Full sun to partial shade",
      watering: "Regular, keep soil moist"
    },
    regions: ["Madhya Pradesh", "Maharashtra", "Gujarat", "Karnataka", "Rajasthan"],
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800"
  },
  {
    id: "oregano",
    commonName: "Oregano (Ajwain ke Patte)",
    scientificName: "Origanum vulgare",
    family: "Lamiaceae",
    category: "aromatic",
    description: "Oregano is a fragrant herb popular in Mediterranean and now Indian cuisine. It has strong antimicrobial properties and is rich in antioxidants.",
    medicinalProperties: ["Antimicrobial", "Antioxidant", "Digestive aid", "Respiratory support", "Anti-inflammatory"],
    ayurvedicBenefits: ["Kindles digestive fire", "Supports respiratory health", "Reduces Kapha", "Natural preservative", "Aromatic"],
    growingConditions: {
      soil: "Well-drained, moderately fertile soil",
      temperature: "15-25°C",
      rainfall: "Low to moderate",
      sunlight: "Full sun",
      watering: "Low, drought tolerant"
    },
    regions: ["Himachal Pradesh", "Uttarakhand", "Kashmir"],
    image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=800"
  },
  {
    id: "bay-leaf",
    commonName: "Bay Leaf (Tej Patta)",
    scientificName: "Cinnamomum tamala",
    family: "Lauraceae",
    category: "culinary",
    description: "Indian bay leaf is essential in Indian cooking, particularly in biryanis and curries. It has a distinctive cinnamon-like aroma and digestive benefits.",
    medicinalProperties: ["Digestive aid", "Antimicrobial", "Anti-inflammatory", "Blood sugar regulator", "Aromatic"],
    ayurvedicBenefits: ["Kindles digestive fire", "Supports respiratory health", "Reduces Kapha", "Enhances flavor", "Promotes appetite"],
    growingConditions: {
      soil: "Well-drained, rich loamy soil",
      temperature: "15-25°C",
      rainfall: "Moderate to high",
      sunlight: "Partial shade",
      watering: "Regular, keep soil moist"
    },
    regions: ["Himalayas", "Uttarakhand", "Sikkim", "Arunachal Pradesh", "Meghalaya"],
    image: "https://images.unsplash.com/photo-1486328228599-85db4443971f?w=800"
  },
  {
    id: "asafoetida",
    commonName: "Asafoetida (Hing)",
    scientificName: "Ferula assa-foetida",
    family: "Apiaceae",
    category: "culinary",
    description: "Asafoetida is a pungent spice used in Indian cooking, especially in lentil dishes. Despite its strong smell, it becomes mellow and enhances flavor when cooked.",
    medicinalProperties: ["Digestive aid", "Carminative", "Antispasmodic", "Antimicrobial", "Expectorant"],
    ayurvedicBenefits: ["Kindles digestive fire", "Relieves gas and bloating", "Reduces Vata", "Supports respiratory health", "Enhances food flavor"],
    growingConditions: {
      soil: "Sandy, well-drained soil",
      temperature: "15-25°C",
      rainfall: "Low, arid conditions",
      sunlight: "Full sun",
      watering: "Low, drought conditions preferred"
    },
    regions: ["Kashmir", "Punjab (cultivated)", "Originally from Afghanistan/Iran"],
    image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800"
  }
];
