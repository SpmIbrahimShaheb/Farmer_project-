// Comprehensive Agricultural Intelligence Data Repository
// Powers:
// 1. Mandi Price Arbitrage & Best Market Logistics Engine
// 2. Soil & Plant Photo Visual Diagnostics + Lab Testing Directory
// 3. Harvest Weather Forecast & Small-Plot Micro-Farming Planner
// 4. Pesticide & Crop Disease Prescription Center

export const mandiArbitrageData = {
  onion: {
    cropNameEn: "Red Onion",
    cropNameHi: "लाल प्याज",
    baseLocalMandi: {
      name: "Lasalgaon APMC (Local)",
      state: "Maharashtra",
      priceKg: 19.5,
      priceQuintal: 1950,
      distanceKm: 12,
      transitHours: 0.5,
      freightCostPerQtl: 25
    },
    destinations: [
      {
        id: "pune",
        name: "Pune APMC Market Yard",
        state: "Maharashtra",
        priceKg: 23.0,
        priceQuintal: 2300,
        distanceKm: 210,
        transitHours: 5.0,
        freightCostPerQtl: 110,
        tollCostPerTrip: 280,
        demandLevel: "HIGH (+18% deficit)",
        recommendation: "WORTH TRAVELING"
      },
      {
        id: "vashi",
        name: "Vashi APMC Yard-2 (Navi Mumbai)",
        state: "Maharashtra",
        priceKg: 24.5,
        priceQuintal: 2450,
        distanceKm: 235,
        transitHours: 5.5,
        freightCostPerQtl: 125,
        tollCostPerTrip: 320,
        demandLevel: "VERY HIGH (Port export demand)",
        recommendation: "HIGHEST PROFIT APMC"
      },
      {
        id: "azadpur",
        name: "Azadpur Mandi, Delhi",
        state: "Delhi NCR",
        priceKg: 26.5,
        priceQuintal: 2650,
        distanceKm: 1180,
        transitHours: 24.0,
        freightCostPerQtl: 380,
        tollCostPerTrip: 1450,
        demandLevel: "EXTREME (North winter demand)",
        recommendation: "BULK ONLY (>50 Quintals)"
      },
      {
        id: "direct_consumer",
        name: "KisanSetu Direct Supermarket / FPO Hub",
        state: "Direct Doorstep Pickup",
        priceKg: 27.0,
        priceQuintal: 2700,
        distanceKm: 0,
        transitHours: 0,
        freightCostPerQtl: 0,
        tollCostPerTrip: 0,
        demandLevel: "INSTANT (Zero Mandi Tax & 0 Middleman)",
        recommendation: "BEST TAKE-HOME NET PROFIT"
      }
    ]
  },
  tomato: {
    cropNameEn: "Hybrid Tomato",
    cropNameHi: "हाइब्रिड टमाटर",
    baseLocalMandi: {
      name: "Pimpalgaon APMC (Local)",
      state: "Maharashtra",
      priceKg: 14.0,
      priceQuintal: 1400,
      distanceKm: 18,
      transitHours: 0.6,
      freightCostPerQtl: 30
    },
    destinations: [
      {
        id: "vashi_tomato",
        name: "Vashi Fresh Yard (Navi Mumbai)",
        state: "Maharashtra",
        priceKg: 19.5,
        priceQuintal: 1950,
        distanceKm: 190,
        transitHours: 4.5,
        freightCostPerQtl: 105,
        tollCostPerTrip: 260,
        demandLevel: "HIGH (City retail surge)",
        recommendation: "WORTH TRAVELING"
      },
      {
        id: "surat",
        name: "Surat APMC Vegetable Yard",
        state: "Gujarat",
        priceKg: 21.0,
        priceQuintal: 2100,
        distanceKm: 240,
        transitHours: 5.5,
        freightCostPerQtl: 130,
        tollCostPerTrip: 340,
        demandLevel: "VERY HIGH",
        recommendation: "HIGHEST PROFIT APMC"
      },
      {
        id: "direct_consumer_tomato",
        name: "KisanSetu Direct Society Buying Network",
        state: "Doorstep Pickup (Nashik/Mumbai)",
        priceKg: 22.5,
        priceQuintal: 2250,
        distanceKm: 0,
        transitHours: 0,
        freightCostPerQtl: 0,
        tollCostPerTrip: 0,
        demandLevel: "INSTANT (Direct Consumer Societies)",
        recommendation: "BEST TAKE-HOME NET PROFIT"
      }
    ]
  },
  wheat: {
    cropNameEn: "Sharbati Wheat",
    cropNameHi: "शरबती गेहूं",
    baseLocalMandi: {
      name: "Bhatinda Grain Market (Local)",
      state: "Punjab",
      priceKg: 24.25,
      priceQuintal: 2425,
      distanceKm: 10,
      transitHours: 0.4,
      freightCostPerQtl: 20
    },
    destinations: [
      {
        id: "delhi_wheat",
        name: "Lawrence Road Foodgrain Terminal, Delhi",
        state: "Delhi NCR",
        priceKg: 28.5,
        priceQuintal: 2850,
        distanceKm: 310,
        transitHours: 7.0,
        freightCostPerQtl: 130,
        tollCostPerTrip: 350,
        demandLevel: "VERY HIGH (Flour millers demand)",
        recommendation: "WORTH TRAVELING"
      },
      {
        id: "jaipur",
        name: "Kukas APMC, Jaipur",
        state: "Rajasthan",
        priceKg: 27.8,
        priceQuintal: 2780,
        distanceKm: 380,
        transitHours: 8.5,
        freightCostPerQtl: 150,
        tollCostPerTrip: 410,
        demandLevel: "HIGH",
        recommendation: "PROFITABLE"
      },
      {
        id: "direct_consumer_wheat",
        name: "KisanSetu Direct Atta Chakki & FPO Network",
        state: "Bulk Procurement Hub",
        priceKg: 30.0,
        priceQuintal: 3000,
        distanceKm: 0,
        transitHours: 0,
        freightCostPerQtl: 0,
        tollCostPerTrip: 0,
        demandLevel: "INSTANT (Zero deduction)",
        recommendation: "BEST TAKE-HOME NET PROFIT"
      }
    ]
  }
};

// Transport Vehicle Profiles for Logistics Cost Estimation
export const transportVehicles = [
  {
    id: "tata_ace",
    nameEn: "Mini Truck (Tata Ace)",
    nameHi: "छोटा हाथी (टाटा ऐस)",
    capacityQuintals: 15,
    ratePerKm: 14,
    baseFare: 450,
    idealForEn: "Local and regional runs (up to 150 km)",
    idealForHi: "स्थानीय और मध्यम दूरी (150 किमी तक)"
  },
  {
    id: "bolero_maxi",
    nameEn: "Pickup Truck (Bolero Maxi / Dost)",
    nameHi: "बोलेरो पिकअप (2.5 टन)",
    capacityQuintals: 25,
    ratePerKm: 18,
    baseFare: 650,
    idealForEn: "Fast inter-district transit (up to 300 km)",
    idealForHi: "तेज अंतर-जिला परिवहन (300 किमी तक)"
  },
  {
    id: "tractor_trolley",
    nameEn: "Tractor Trolley (Double Axle)",
    nameHi: "ट्रैक्टर ट्रॉली",
    capacityQuintals: 40,
    ratePerKm: 22,
    baseFare: 500,
    idealForEn: "Heavy rural mandi shuttle (up to 80 km)",
    idealForHi: "ग्रामीण मंडियों के लिए भारी लोड (80 किमी तक)"
  },
  {
    id: "eicher_truck",
    nameEn: "Commercial Truck (10 Wheeler / Eicher)",
    nameHi: "बड़ा ट्रक (10 चक्का / आयशर)",
    capacityQuintals: 100,
    ratePerKm: 32,
    baseFare: 1500,
    idealForEn: "Long distance interstate trade (>300 km)",
    idealForHi: "लंबी दूरी व अंतर-राज्यीय व्यापार (300+ किमी)"
  }
];

// Soil & Plant Visual Diagnostic Sample Library
export const visualDiagnosticSamples = [
  {
    id: "sample_soil_black",
    type: "soil",
    nameEn: "Black Cotton Soil (Regur Clay)",
    nameHi: "काली कपास मिट्टी (रेगुर)",
    img: "/assets/soil_black.png",
    thumbIcon: "🌑",
    phRange: "7.5 - 8.2 (Moderately Alkaline)",
    organicCarbon: "Medium (0.55%)",
    waterHolding: "Very High (Clay 50%+)",
    suitabilityScore: 94,
    bestCropsEn: ["Cotton (कपास)", "Soybean (सोयाबीन)", "Red Onion (प्याज)", "Wheat (गेहूं)"],
    bestCropsHi: ["कपास (उत्तम)", "सोयाबीन", "लाल प्याज", "शरबती गेहूं"],
    drawbacksEn: "Prone to waterlogging during heavy rainfall; cracking when completely dry.",
    drawbacksHi: "भारी बारिश में जलभराव का खतरा; सूखने पर गहरी दरारें पड़ती हैं।",
    soilTreatmentEn: "Apply 2 tons/acre well-rotted FYM (गोबर खाद) + Gypsum 200 kg/acre to improve porosity.",
    soilTreatmentHi: "मिट्टी भुरभुरी बनाने के लिए 2 टन सड़ी गोबर खाद और 200 किग्रा जिप्सम प्रति एकड़ डालें।"
  },
  {
    id: "sample_soil_red_loam",
    type: "soil",
    nameEn: "Red Loamy Soil (Lal Dumt)",
    nameHi: "लाल दोमट मिट्टी",
    img: "/assets/soil_red.png",
    thumbIcon: "🟤",
    phRange: "6.2 - 6.8 (Slightly Acidic to Neutral)",
    organicCarbon: "Low to Moderate (0.42%)",
    waterHolding: "Moderate (Well Drained)",
    suitabilityScore: 91,
    bestCropsEn: ["Tomato (टमाटर)", "Groundnut (मूंगफली)", "Pulses/Gram (चना)", "Millets (बाजरा)"],
    bestCropsHi: ["टमाटर (शानदार पैदावार)", "मूंगफली", "चना व दालें", "बाजरा"],
    drawbacksEn: "Deficient in Nitrogen, Phosphorus, and Boron. Rapid moisture loss under direct sun.",
    drawbacksHi: "नाइट्रोजन और फास्फोरस की कमी; तेज धूप में नमी जल्दी उड़ती है।",
    soilTreatmentEn: "Incorporate green manuring (Dhaincha/Sanai) + 50 kg SSP (Single Super Phosphate) per acre.",
    soilTreatmentHi: "ढैंचा की हरी खाद पलटें तथा 50 किग्रा सिंगल सुपर फास्फेट (SSP) प्रति एकड़ दें।"
  },
  {
    id: "sample_plant_leaf_curl",
    type: "plant",
    nameEn: "Tomato Leaf Curl Virus (TLCV) Symptoms",
    nameHi: "टमाटर में पत्ती मरोड़ (लीफ कर्ल) रोग",
    img: "/assets/leaf_curl.png",
    thumbIcon: "🍃",
    severity: "High (Yield loss 40-70%)",
    vector: "Transmitted by Silverleaf Whitefly (सफेद मक्खी)",
    detectedSymptomsEn: "Upward curling of leaves, thick leathery texture, stunting of terminal shoots, no fruit setting.",
    detectedSymptomsHi: "पत्तियों का ऊपर की ओर मुड़ना (मरोड़िया), डंठल का छोटा होना और नए फूल-फल न लगना।",
    prescriptionEn: "1. Uproot heavily infected plants. 2. Spray Diafenthiuron 50% WP @ 1.2 g/liter OR Acetamiprid 20% SP @ 0.5 g/liter. 3. Hang Yellow Sticky Traps @ 15/acre.",
    prescriptionHi: "1. ज्यादा ग्रसित पौधे उखाड़कर नष्ट करें। 2. सफेद मक्खी नियंत्रण हेतु डाइफेंथियूरोन 50% WP (1.2 ग्राम/लीटर) या एसिटामिप्रिड 20% SP (0.5 ग्राम/लीटर) का छिड़काव करें। 3. खेत में 15 पीले चिपचिपे ट्रैप लगाएं।"
  },
  {
    id: "sample_plant_purple_blotch",
    type: "plant",
    nameEn: "Onion Purple Blotch & Thrips Damage",
    nameHi: "प्याज में बैंगनी धब्बा (पर्पल ब्लॉच) व थ्रिप्स",
    img: "/assets/onion_blotch.png",
    thumbIcon: "🧅",
    severity: "Moderate to High",
    vector: "Fungus Alternaria porri + Onion Thrips",
    detectedSymptomsEn: "Sunken purple lesions with yellow halo on outer leaves; silvery white feeding streaks from thrips.",
    detectedSymptomsHi: "पत्तियों पर बैंगनी धब्बे और नोक का पीला पड़ना; थ्रिप्स के कारण पत्तियों पर सफेद धारियां।",
    prescriptionEn: "Fipronil 5% SC @ 2 ml/liter + Mancozeb 75% WP @ 2.5 g/liter mixed with sticker (spreader) 0.5 ml/liter.",
    prescriptionHi: "फिप्रोनिल 5% SC (2 मिली/लीटर) + मैंकोजेब 75% WP (2.5 ग्राम/लीटर) के साथ चिपकू (स्टीकर) मिलाकर छिड़कें।"
  },
  {
    id: "sample_plant_healthy",
    type: "plant",
    nameEn: "Healthy Vigor Crop Foliage",
    nameHi: "स्वस्थ एवं पुष्ट फसल (सामान्य अवस्था)",
    img: "/assets/healthy_plant.png",
    thumbIcon: "✨",
    severity: "Optimal Condition",
    vector: "None",
    detectedSymptomsEn: "Broad deep-green chlorophyll foliage, active root capillary network, balanced N-P-K uptake.",
    detectedSymptomsHi: "गहरा हरा रंग, मजबूत तना और संतुलित पोषक तत्व। कोई बीमारी या कीट नहीं।",
    prescriptionEn: "Maintain soil moisture. Foliar spray 19:19:19 NPK @ 5 g/liter every 15 days for bumper flowering.",
    prescriptionHi: "नमी संतुलित रखें। बेहतर बढ़वार के लिए 15 दिन के अंतराल पर 19:19:19 एनपीके (5 ग्राम/लीटर) का पर्णीय छिड़काव करें।"
  }
];

// Accredited Soil Testing Labs for Appointment Booking
export const certifiedSoilLabs = [
  {
    id: "lab_kvk_nashik",
    nameEn: "ICAR Krishi Vigyan Kendra Soil Testing Lab",
    nameHi: "भाकृअनुप कृषि विज्ञान केंद्र मिट्टी परीक्षण प्रयोगशाला",
    districtEn: "Nashik (Pimpalgaon Yard)",
    districtHi: "नासिक (पिंपलगांव परिसर)",
    accreditation: "NABL & ICAR Certified",
    pickupAvailable: true,
    turnaroundDays: 3,
    sampleCostGovernment: "₹0 (KisanSetu Subsidized Pass)",
    parametersTested: "12 Parameters (N, P, K, Organic Carbon, pH, EC, S, Zn, Fe, Cu, Mn, B)"
  },
  {
    id: "lab_state_dept_pune",
    nameEn: "State Agri Dept Soil Health Diagnostic Lab",
    nameHi: "राज्य कृषि विभाग मृदा स्वास्थ्य परीक्षण केंद्र",
    districtEn: "Pune / Shivajinagar",
    districtHi: "पुणे संभाग",
    accreditation: "Govt Soil Health Card Accredited",
    pickupAvailable: true,
    turnaroundDays: 4,
    sampleCostGovernment: "₹50 (Nominal Fee)",
    parametersTested: "Macronutrients & Micronutrients complete breakdown"
  },
  {
    id: "lab_iari_delhi",
    nameEn: "IARI Pusa National Soil Testing Center",
    nameHi: "पूसा राष्ट्रीय मृदा परीक्षण केंद्र",
    districtEn: "New Delhi & NCR North Hub",
    districtHi: "नई दिल्ली व उत्तर भारत केंद्र",
    accreditation: "National Apex Agri Institute",
    pickupAvailable: true,
    turnaroundDays: 5,
    sampleCostGovernment: "₹0 (Free Digital Pass)",
    parametersTested: "Complete Micro-biome & Micro-nutrient Mapping"
  }
];

// Weather Harvesting Advisory & Small-Plot Micro-Farming Models
export const weatherHarvestAdvisory = {
  forecast7d: [
    { dayEn: "Today", dayHi: "आज", temp: "30°C / 19°C", rainProb: "10%", rainMm: 0, condition: "Sunny & Dry", icon: "☀️", riskLevel: "LOW" },
    { dayEn: "Tomorrow", dayHi: "कल", temp: "29°C / 18°C", rainProb: "20%", rainMm: 2, condition: "Partly Cloudy", icon: "⛅", riskLevel: "LOW" },
    { dayEn: "Day 3 (Wed)", dayHi: "बुधवार", temp: "26°C / 17°C", rainProb: "85%", rainMm: 42, condition: "Heavy Rain & Squall", icon: "⛈️", riskLevel: "HIGH_ALERT" },
    { dayEn: "Day 4 (Thu)", dayHi: "गुरुवार", temp: "25°C / 17°C", rainProb: "70%", rainMm: 28, condition: "Moderate Showers", icon: "🌧️", riskLevel: "ELEVATED" },
    { dayEn: "Day 5 (Fri)", dayHi: "शुक्रवार", temp: "28°C / 18°C", rainProb: "30%", rainMm: 5, condition: "Clearing Skies", icon: "🌤️", riskLevel: "MODERATE" },
    { dayEn: "Day 6 (Sat)", dayHi: "शनिवार", temp: "30°C / 19°C", rainProb: "10%", rainMm: 0, condition: "Clear & Breezy", icon: "☀️", riskLevel: "LOW" },
    { dayEn: "Day 7 (Sun)", dayHi: "रविवार", temp: "31°C / 20°C", rainProb: "5%", rainMm: 0, condition: "Optimal Sunshine", icon: "☀️", riskLevel: "LOW" }
  ],
  harvestAlertEn: "⚠️ CRITICAL WEATHER WARNING: 42 mm heavy rainfall and convective squalls forecasted on Day 3 (Wednesday). If you have mature onion, wheat, or tomato ready for harvest, complete harvesting within 48 hours or store produce on elevated crates covered with plastic tarpaulins to avoid moisture rotting.",
  harvestAlertHi: "⚠️ महत्वपूर्ण मौसम चेतावनी: बुधवार (तीसरे दिन) को 42 मिमी भारी बारिश और तेज हवाओं का अनुमान है। यदि आपकी प्याज, गेहूं या टमाटर की फसल पक चुकी है, तो अगले 48 घंटों में तुड़ाई/कटाई पूरी कर लें या कटी हुई फसल को पक्के तिरपाल से ढककर ऊंचे स्थान पर रखें ताकि सड़न न हो।",

  // Small-Scale / Micro-Plot High-Yield Models (<2 Acres)
  smallPlotModels: [
    {
      id: "multi_tier_intercrop",
      titleEn: "Multi-Tier High-Density Intercropping",
      titleHi: "बहुमंजिला सघन सह-फसली मॉडल (Multi-Tier)",
      landSize: "0.25 to 1.0 Acre",
      yieldMultiplier: "2.4x Gross Output",
      layoutEn: "Tomato / Papaya (Top Canopy) + Red Onion (Mid Ground) + Coriander / Fenugreek (Ground Cover)",
      layoutHi: "ऊपरी स्तर: टमाटर/पपीता + मध्यम स्तर: प्याज/लहसुन + भूमि स्तर: धनिया/मेथी",
      benefitEn: "3 incomes from the same plot of land; weed growth drops by 70%; continuous weekly cash flow.",
      benefitHi: "एक ही जमीन से 3 फसलें; खरपतवार 70% कम; हर हफ्ते मंडी में बिकने लायक नियमित नकद आय।"
    },
    {
      id: "raised_bed_drip_mulch",
      titleEn: "Broad Bed & Furrow with Silver-Black Mulch",
      titleHi: "उठी हुई क्यारी (Raised Bed) + सिल्वर-ब्लैक मल्चिंग",
      landSize: "0.5 to 2.0 Acres",
      yieldMultiplier: "1.8x Yield + 40% Water Saving",
      layoutEn: "3-foot wide raised beds, inline drip line at center, 25-micron reflective mulch film",
      layoutHi: "3 फीट चौड़ा बेड, बीच में ड्रिप लाइन और 25 माइक्रोन की मल्चिंग फिल्म",
      benefitEn: "Prevents soil crusting; root zone remains aerated; soil temperature stays balanced even during sudden rains.",
      benefitHi: "जड़ों को पूरी हवा मिलती है; भारी बारिश में भी पानी जड़ों में नहीं रुकता; 40% पानी व खाद की बचत।"
    },
    {
      id: "high_value_short_cycle",
      titleEn: "Short-Duration High-Value Cash Crop Rotation",
      titleHi: "कम अवधि की नकदी फसल चक्र (45 से 60 दिन)",
      landSize: "Any Small Fraction Plot (10-20 Gunthas)",
      yieldMultiplier: "High Cash Velocity (₹40,000 net / 0.5 acre)",
      layoutEn: "Coriander (35 days) -> Hybrid Cucumber / Zucchini (45 days) -> Green Chilly (Long bearing)",
      layoutHi: "देशी धनिया (35 दिन) -> हाइब्रिड खीरा (45 दिन) -> हरी मिर्च",
      benefitEn: "Quick turnaround minimizes crop weather risk and supplies daily fresh green market demand.",
      benefitHi: "कम समय में फसल तैयार होने से मौसम का जोखिम घटता है और स्थानीय हाट-बाजार में तुरंत नकद मिलता है।"
    }
  ]
};

// Pesticide & Crop Disease Prescription Center
export const pesticidePrescriptions = [
  {
    id: "pest_thrips_onion",
    crop: "Onion",
    cropHi: "प्याज",
    cropId: "onion",
    pestNameEn: "Onion Thrips",
    pestNameHi: "प्याज के थ्रिप्स (चूसक कीड़े)",
    symptomsEn: "Silvery patches on leaves, curled leaf tips, stunted bulb development.",
    symptomsHi: "पत्तियों पर चांदी जैसी सफेद धारियां, पत्तियों का मुड़ना और कंद का छोटा रह जाना।",
    organicSolutionEn: "Neem Oil 10,000 PPM @ 3 ml/liter + Verticillium lecanii @ 5 g/liter spray.",
    organicSolutionHi: "नीम तेल 10,000 PPM (3 मिली/लीटर) + वर्टिसिलियम लेकानी (5 ग्राम/लीटर)।",
    chemicalSolutionEn: "Fipronil 5% SC (Regent) @ 2 ml/liter OR Spinetoram 11.7% SC (Delegate) @ 0.9 ml/liter.",
    chemicalSolutionHi: "फिप्रोनिल 5% SC (2 मिली/लीटर) अथवा स्पाइनेटोरम 11.7% SC (0.9 मिली/लीटर)।",
    dosageKnapsackPump: "30 ml in 15-liter knapsack sprayer tank",
    preHarvestInterval: "7 Days",
    safetyGearEn: "Wear gloves & mask. Spray early morning before 9 AM or after 5 PM.",
    safetyGearHi: "मास्क व दस्ताने पहनें। सुबह 9 बजे से पहले या शाम 5 बजे के बाद ही छिड़काव करें।"
  },
  {
    id: "pest_fruit_borer_tomato",
    crop: "Tomato",
    cropHi: "टमाटर",
    cropId: "tomato",
    pestNameEn: "Fruit Borer",
    pestNameHi: "टमाटर की फल छेदक इल्ली",
    symptomsEn: "Circular holes bored in unripe and ripe tomatoes, premature fruit rot.",
    symptomsHi: "फलों में गोल छेद, फलों का अंदर से सड़ना और गिरना।",
    organicSolutionEn: "Pheromone Traps (Helilure) @ 8 traps/acre + Bacillus thuringiensis (Bt) @ 2 g/liter.",
    organicSolutionHi: "फेरोमोन ट्रैप (8 प्रति एकड़) + बैसिलस थुरिंजिएंसिस (Bt) 2 ग्राम/लीटर।",
    chemicalSolutionEn: "Chlorantraniliprole 18.5% SC (Coragen) @ 0.35 ml/liter OR Emamectin Benzoate 5% SG @ 0.5 g/liter.",
    chemicalSolutionHi: "कोराजन (क्लोरएंट्रानिलिप्रोल 18.5% SC) 0.35 मिली/लीटर या इमामेक्टिन बेंजोएट 5% SG (0.5 ग्राम/लीटर)।",
    dosageKnapsackPump: "5 ml Coragen OR 8 g Emamectin per 15L tank",
    preHarvestInterval: "3 Days",
    safetyGearEn: "Do not spray during peak honeybee foraging hours.",
    safetyGearHi: "मधुमक्खियों के परागण समय (दोपहर) में छिड़काव न करें।"
  },
  {
    id: "pest_yellow_rust_wheat",
    crop: "Wheat",
    cropHi: "गेहूं",
    cropId: "wheat",
    pestNameEn: "Yellow / Stripe Rust",
    pestNameHi: "गेहूं का पीला रतुआ (फफूंद रोग)",
    symptomsEn: "Yellow powder stripes along leaf veins; powder rubs off on fingers.",
    symptomsHi: "पत्तियों पर पीली हल्दी जैसी धारियां; छूने पर हाथ में पीला पाउडर लगना।",
    organicSolutionEn: "Spray cow urine extract fermented with neem leaves at 10% solution at initial onset.",
    organicSolutionHi: "10% नीम-गोमूत्र का अर्क शुरुआती अवस्था में छिड़कें।",
    chemicalSolutionEn: "Propiconazole 25% EC (Tilt) @ 1 ml/liter OR Tebuconazole 25.9% EC @ 1.25 ml/liter.",
    chemicalSolutionHi: "प्रोपिकोनाजोल 25% EC (टिल्ट) 1 मिली/लीटर अथवा टेबुकोनाजोल 25.9% EC (1.25 मिली/लीटर)।",
    dosageKnapsackPump: "15 ml Propiconazole per 15-liter pump",
    preHarvestInterval: "21 Days",
    safetyGearEn: "Spray immediately on observing the first yellow pustule in the field.",
    safetyGearHi: "खेत में पहली पीली धारी दिखते ही पूरे खेत में तुरंत छिड़काव करें।"
  },
  {
    id: "pest_pink_bollworm_cotton",
    crop: "Cotton",
    cropHi: "कपास",
    cropId: "cotton",
    pestNameEn: "Pink Bollworm",
    pestNameHi: "कपास की गुलाबी सुंडी",
    symptomsEn: "Rosette flowers, stained lint, drilled cotton bolls.",
    symptomsHi: "फूलों का आपस में जुड़कर गुलाब जैसा बनना, टिंडों में छेद और रुई का काला पड़ना।",
    organicSolutionEn: "Install Pink Bollworm Pheromone Traps @ 8/acre + Release Trichogramma @ 60,000 eggs/acre.",
    organicSolutionHi: "गुलाबी सुंडी फेरोमोन ट्रैप (8/एकड़) + ट्राइकोग्रामा परजीवी कार्ड लगाएं।",
    chemicalSolutionEn: "Profenofos 50% EC @ 2 ml/liter OR Chlorpyriphos 20% EC @ 2.5 ml/liter.",
    chemicalSolutionHi: "प्रोफेनोफॉस 50% EC (2 मिली/लीटर) या क्लोरपायरीफॉस 20% EC (2.5 मिली/लीटर)।",
    dosageKnapsackPump: "30 ml in 15-liter pump",
    preHarvestInterval: "14 Days",
    safetyGearEn: "Rotate insecticide chemical groups to prevent pest resistance buildup.",
    safetyGearHi: "कीटनाशक बदल-बदल कर छिड़कें ताकि कीड़ों में प्रतिरोधक क्षमता न बने।"
  }
];
