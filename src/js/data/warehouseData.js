// Regional Mandi, Warehouse, Cold Storage & Consumer Demand Data
// Pan-India Agricultural Market Network

export const clusterMapData = {
  nashik_onion_belt: {
    center: [20.1444, 74.2272], // Lasalgaon / Niphad coords
    zoom: 11,
    demandHotspots: [
      {
        id: "d-mum",
        nameEn: "Vashi APMC & Mumbai Consumer Belt",
        nameHi: "वाशी एपीएमसी एवं मुंबई उपभोक्ता बाजार",
        lat: 19.0760,
        lng: 72.8777,
        demandLevel: "Very High",
        demandLevelHi: "अत्यधिक मांग",
        cropEn: "Red Onion & Tomato",
        cropHi: "लाल प्याज व टमाटर",
        willingRate: "₹42 - ₹46 / kg",
        distanceKm: 185,
        transitHours: "4.5 hrs via Samruddhi Corridor",
        transitHoursHi: "समृद्धि महामार्ग से 4.5 घंटे",
        noteEn: "Bulk purchases by wholesale chains (D-Mart, BigBasket). Low current inventory.",
        noteHi: "थोक खरीदारों द्वारा भारी खरीद। वर्तमान स्टॉक काफी कम।",
        transportAdvice: {
          vehicleEn: "Mini-Truck (Tata Ace) for 1-2.5 MT | 6-Wheeler Lorry for 5-9 MT",
          vehicleHi: "छोटा हाथी (टाटा ऐस) 1-2.5 टन | 6-पहिया लॉरी 5-9 टन",
          busOptionEn: "Bus Cargo: ₹45/crate (Daily express delivery)",
          busOptionHi: "बस कार्गो: ₹45/क्रेट (दैनिक सीधी सेवा)",
          freightRate: "₹85 / Qtl (~₹0.85/kg)",
          netProfitGain: "+₹15.50/kg extra net profit over local mandi",
          netProfitGainHi: "स्थानीय मंडी से +₹15.50/किग्रा अधिक शुद्ध मुनाफा"
        }
      },
      {
        id: "d-pune",
        nameEn: "Pune Gultekdi Market Yard",
        nameHi: "पुणे गुलटेकड़ी मार्केट यार्ड",
        lat: 18.5204,
        lng: 73.8567,
        demandLevel: "High",
        demandLevelHi: "उच्च मांग",
        cropEn: "Red Onion",
        cropHi: "लाल प्याज",
        willingRate: "₹38 - ₹42 / kg",
        distanceKm: 210,
        transitHours: "5 hrs",
        transitHoursHi: "5 घंटे",
        noteEn: "Hotel and restaurant supplies creating steady weekday demand.",
        noteHi: "होटल व रेस्टोरेंट से नियमित दैनिक मांग।",
        transportAdvice: {
          vehicleEn: "Mini-Truck (Bolero Maxi / Tata Ace) or 6-Wheeler Eicher",
          vehicleHi: "छोटा हाथी (बोलेरो मैक्सी) या 6-पहिया आयशर लॉरी",
          busOptionEn: "Bus Cargo: ₹40/crate (Morning departure, noon arrival)",
          busOptionHi: "बस कार्गो: ₹40/क्रेट (सुबह रवानगी, दोपहर पहुंच)",
          freightRate: "₹75 / Qtl (~₹0.75/kg)",
          netProfitGain: "+₹13.00/kg extra net profit over local mandi",
          netProfitGainHi: "स्थानीय मंडी से +₹13.00/किग्रा अधिक शुद्ध मुनाफा"
        }
      }
    ],
    mandis: [
      {
        id: "m-lasalgaon",
        nameEn: "APMC Lasalgaon Main Yard",
        nameHi: "लासलगांव एपीएमसी मुख्य मंडी",
        lat: 20.1444,
        lng: 74.2272,
        type: "APMC Mandi",
        todayArrivals: "14,200 Quintals (68 Trucks)",
        todayArrivalsHi: "14,200 क्विंटल (68 गाड़ियां)",
        gateQueueTime: "25 mins",
        gateQueueTimeHi: "25 मिनट गेट समय",
        modalPrice: "₹1,950 / Qtl",
        timing: "08:00 AM - 05:30 PM",
        contact: "+91 2550 266225"
      },
      {
        id: "m-pimpalgaon",
        nameEn: "APMC Pimpalgaon Baswant (Tomato & Onion)",
        nameHi: "पिंपलगांव बसवंत एपीएमसी (टमाटर व प्याज)",
        lat: 20.1706,
        lng: 73.9856,
        type: "APMC Mandi",
        todayArrivals: "18,400 Crates Tomato",
        todayArrivalsHi: "18,400 क्रेट टमाटर",
        gateQueueTime: "40 mins",
        gateQueueTimeHi: "40 मिनट",
        modalPrice: "₹1,400 / Qtl",
        timing: "07:30 AM - 06:00 PM",
        contact: "+91 2550 250012"
      }
    ],
    warehouses: [
      {
        id: "w-las-cold",
        nameEn: "Lasalgaon Agro Cold Storage & Solar Silo",
        nameHi: "लासलगांव कृषि कोल्ड स्टोरेज एवं सोलर साइलो",
        lat: 20.1380,
        lng: 74.2410,
        type: "Cold Storage (WDRA Registered)",
        typeHi: "कोल्ड स्टोरेज (डब्ल्यूडीआरए पंजीकृत)",
        totalCapacityMt: 5000,
        vacantSpaceMt: 780,
        storageRatePerMonth: "₹18 / bag (50kg)",
        storageRatePerMonthHi: "₹18 / 50 किग्रा बोरी प्रति माह",
        enwrLoanAvailable: true,
        temperature: "1°C - 2°C (Controlled Humidity)",
        temperatureHi: "1°C - 2°C (नियंत्रित नमी)",
        contact: "+91 98224 55102"
      },
      {
        id: "w-niphad-coop",
        nameEn: "Niphad Sahakari Warehousing Complex",
        nameHi: "निफाड़ सहकारी गोदाम परिसर",
        lat: 20.0811,
        lng: 74.1128,
        type: "Dry Grain & Onion Shed",
        typeHi: "सूखा अनाज व प्याज गोदाम",
        totalCapacityMt: 8500,
        vacantSpaceMt: 2150,
        storageRatePerMonth: "₹14 / bag (50kg)",
        storageRatePerMonthHi: "₹14 / 50 किग्रा बोरी प्रति माह",
        enwrLoanAvailable: true,
        temperature: "Ambient ventilated (Draft aerated)",
        temperatureHi: "प्राकृतिक हवादार शेड",
        contact: "+91 94231 88901"
      }
    ]
  },

  bhatinda_wheat_belt: {
    center: [30.2110, 74.9455],
    zoom: 11,
    demandHotspots: [
      {
        id: "d-delhi",
        nameEn: "Delhi Lawrence Road & Narela Food Hub",
        nameHi: "दिल्ली लॉरेंस रोड एवं नरेला फूड हब",
        lat: 28.7041,
        lng: 77.1025,
        demandLevel: "Very High",
        demandLevelHi: "अत्यधिक मांग",
        cropEn: "Sharbati Wheat & Cotton",
        cropHi: "शरबती गेहूं व कपास",
        willingRate: "₹38 - ₹42 / kg",
        distanceKm: 320,
        transitHours: "6.5 hrs",
        transitHoursHi: "6.5 घंटे",
        noteEn: "Flour mills actively seeking dry lot grain under 11.5% moisture.",
        noteHi: "कम नमी वाले साफ गेहूं के लिए मिलों की सीधी मांग।",
        transportAdvice: {
          vehicleEn: "10-Wheeler Freight Truck (16 MT) or 6-Wheeler Lorry",
          vehicleHi: "10-पहिया मालवाहक ट्रक (16 टन) या 6-पहिया लॉरी",
          busOptionEn: "Railway Kisan Parcel: ₹55/quintal subsidized",
          busOptionHi: "रेलवे किसान पार्सल: ₹55/क्विंटल रियायती दर",
          freightRate: "₹110 / Qtl (~₹1.10/kg)",
          netProfitGain: "+₹380/Quintal extra realization vs farmgate",
          netProfitGainHi: "खेत से बेचने की तुलना में +₹380/क्विंटल अतिरिक्त लाभ"
        }
      }
    ],
    mandis: [
      {
        id: "m-bhatinda-main",
        nameEn: "Bhatinda New Grain Market (Dana Mandi)",
        nameHi: "बठिंडा नई दाना मंडी",
        lat: 30.2110,
        lng: 74.9455,
        type: "APMC Mandi",
        todayArrivals: "22,000 Quintals Wheat",
        todayArrivalsHi: "22,000 क्विंटल गेहूं",
        gateQueueTime: "15 mins",
        gateQueueTimeHi: "15 मिनट",
        modalPrice: "₹2,425 / Qtl",
        timing: "08:00 AM - 07:00 PM",
        contact: "+91 164 221234"
      }
    ],
    warehouses: [
      {
        id: "w-cwc-bhatinda",
        nameEn: "Central Warehousing Corporation (CWC) Malwa Silos",
        nameHi: "केंद्रीय भंडारण निगम (CWC) मालवा साइलो",
        lat: 30.1980,
        lng: 74.9600,
        type: "Steel Silos & Covered Shed",
        typeHi: "स्टील साइलो एवं पक्का गोदाम",
        totalCapacityMt: 35000,
        vacantSpaceMt: 8200,
        storageRatePerMonth: "₹12 / Qtl / month",
        storageRatePerMonthHi: "₹12 प्रति क्विंटल/माह",
        enwrLoanAvailable: true,
        temperature: "Temperature controlled steel silos",
        temperatureHi: "तापमान नियंत्रित साइलो",
        contact: "+91 164 225670"
      }
    ]
  },

  mandya_cauvery_belt: {
    center: [12.5244, 76.8958],
    zoom: 11,
    demandHotspots: [
      {
        id: "d-blr",
        nameEn: "Bengaluru HOPCOMS & Yeshwanthpur Market",
        nameHi: "बेंगलुरु हॉपकॉम्प्स व यशवंतपुर मंडी",
        lat: 12.9716,
        lng: 77.5946,
        demandLevel: "Very High",
        demandLevelHi: "अत्यधिक मांग",
        cropEn: "Fresh Tomato & Shallots",
        cropHi: "ताजा टमाटर व सांभर प्याज",
        willingRate: "₹42 / kg",
        distanceKm: 98,
        transitHours: "2.5 hrs via Mysuru Expressway",
        transitHoursHi: "मैसूर एक्सप्रेसवे से 2.5 घंटे",
        noteEn: "Supermarkets and retail stores with daily replenishment orders.",
        noteHi: "सुपरमार्केट द्वारा दैनिक आपूर्ति मांग।",
        transportAdvice: {
          vehicleEn: "Mini-Truck (Tata Ace) or KSRTC Bus Cargo",
          vehicleHi: "छोटा हाथी (पिकअप) या केएसआरटीसी बस कार्गो",
          busOptionEn: "Bus Roof Cargo: ₹35/crate (2.5 hrs via Mysuru Expressway)",
          busOptionHi: "बस कार्गो: ₹35/क्रेट (मैसूर एक्सप्रेसवे से 2.5 घंटे)",
          freightRate: "₹50 / Qtl (~₹0.50/kg)",
          netProfitGain: "+₹18.50/kg extra net profit on tomato",
          netProfitGainHi: "टमाटर पर +₹18.50/किग्रा अधिक शुद्ध मुनाफा"
        }
      }
    ],
    mandis: [
      {
        id: "m-mandya-apmc",
        nameEn: "Mandya APMC Market Yard",
        nameHi: "मांड्या एपीएमसी मार्केट यार्ड",
        lat: 12.5244,
        lng: 76.8958,
        type: "APMC Mandi",
        todayArrivals: "9,600 Crates",
        todayArrivalsHi: "9,600 क्रेट",
        gateQueueTime: "20 mins",
        gateQueueTimeHi: "20 मिनट",
        modalPrice: "₹1,650 / Qtl",
        timing: "07:00 AM - 04:00 PM",
        contact: "+91 8232 220015"
      }
    ],
    warehouses: [
      {
        id: "w-mandya-kswe",
        nameEn: "Karnataka State Warehousing Corp (Maddur Unit)",
        nameHi: "कर्नाटक राज्य भंडारण निगम (मद्दूर इकाई)",
        lat: 12.5840,
        lng: 77.0420,
        type: "Agri Warehouse & Cold Chamber",
        typeHi: "कृषि गोदाम व शीत कक्ष",
        totalCapacityMt: 6000,
        vacantSpaceMt: 1450,
        storageRatePerMonth: "₹16 / crate / mo",
        storageRatePerMonthHi: "₹16 प्रति क्रेट/माह",
        enwrLoanAvailable: true,
        temperature: "Multi-commodity cold rooms",
        temperatureHi: "बहु-उत्पाद शीत कक्ष",
        contact: "+91 8232 233400"
      }
    ]
  },

  varanasi_gangetic_belt: {
    center: [25.3176, 82.9739],
    zoom: 11,
    demandHotspots: [
      {
        id: "d-patna",
        nameEn: "Patna Bazaar Samiti",
        nameHi: "पटना बाजार समिति",
        lat: 25.5941,
        lng: 85.1376,
        demandLevel: "High",
        demandLevelHi: "उच्च मांग",
        cropEn: "Tomato & Wheat",
        cropHi: "टमाटर व गेहूं",
        willingRate: "₹36 / kg",
        distanceKm: 240,
        transitHours: "5 hrs",
        transitHoursHi: "5 घंटे",
        noteEn: "Bulk purchases by institutional caterers.",
        noteHi: "थोक व्यापारियों द्वारा सीधी खरीद।",
        transportAdvice: {
          vehicleEn: "6-Wheeler Lorry (5-8 MT) or Express Bus Cargo",
          vehicleHi: "6-पहिया लॉरी (5-8 टन) या एक्सप्रेस बस कार्गो",
          busOptionEn: "Bus Cargo: ₹40/basket/crate (Direct overnight route)",
          busOptionHi: "बस कार्गो: ₹40/क्रेट (सीधा रात्रि मार्ग)",
          freightRate: "₹80 / Qtl (~₹0.80/kg)",
          netProfitGain: "+₹12.00/kg extra net profit over local mandi",
          netProfitGainHi: "स्थानीय मंडी से +₹12.00/किग्रा अधिक शुद्ध मुनाफा"
        }
      }
    ],
    mandis: [
      {
        id: "m-rajatalab",
        nameEn: "Raja Talab Subzi Mandi Varanasi",
        nameHi: "राजा तालाब सब्जी मंडी वाराणसी",
        lat: 25.2750,
        lng: 82.8550,
        type: "APMC Mandi",
        todayArrivals: "12,800 Quintals",
        todayArrivalsHi: "12,800 क्विंटल",
        gateQueueTime: "30 mins",
        gateQueueTimeHi: "30 मिनट",
        modalPrice: "₹1,520 / Qtl",
        timing: "06:00 AM - 03:00 PM",
        contact: "+91 542 263411"
      }
    ],
    warehouses: [
      {
        id: "w-varanasi-cwc",
        nameEn: "Central Warehouse Ramnagar Industrial Area",
        nameHi: "केंद्रीय भंडारण रामनगर औद्योगिक क्षेत्र",
        lat: 25.2810,
        lng: 83.0310,
        type: "State Agri Warehouse",
        typeHi: "राज्य कृषि गोदाम",
        totalCapacityMt: 14000,
        vacantSpaceMt: 3200,
        storageRatePerMonth: "₹13 / Qtl / month",
        storageRatePerMonthHi: "₹13 प्रति क्विंटल/माह",
        enwrLoanAvailable: true,
        temperature: "Scientific pest-proof storage",
        temperatureHi: "वैज्ञानिक कीट-रहित भंडारण",
        contact: "+91 542 258890"
      }
    ]
  },

  guntur_chilli_belt: {
    center: [16.3067, 80.4365],
    zoom: 11,
    demandHotspots: [
      {
        id: "d-hyd",
        nameEn: "Hyderabad Bowenpally & Kothapet Yard",
        nameHi: "हैदराबाद बोवेनपल्ली व कोठापेट यार्ड",
        lat: 17.3850,
        lng: 78.4867,
        demandLevel: "Very High",
        demandLevelHi: "अत्यधिक मांग",
        cropEn: "Cotton & Chillies",
        cropHi: "कपास व मिर्च",
        willingRate: "Premium Export Rates",
        willingRateHi: "प्रीमियम निर्यात दर",
        distanceKm: 275,
        transitHours: "5.5 hrs",
        transitHoursHi: "5.5 घंटे",
        noteEn: "Export packaging units buying clean staple lots.",
        noteHi: "निर्यात इकाइयां अच्छे रेशे की सीधी खरीद कर रही हैं।",
        transportAdvice: {
          vehicleEn: "Commercial Goods Lorry (6-10 Wheeler) or Bolero Pickup",
          vehicleHi: "व्यावसायिक मालवाहक लॉरी (6-10 पहिया) या बोलेरो पिकअप",
          busOptionEn: "APSRTC Logistics Parcel: ₹60/bag parcel",
          busOptionHi: "आरटीसी लॉजिस्टिक्स पार्सल: ₹60/बोरी",
          freightRate: "₹120 / Qtl (~₹1.20/kg)",
          netProfitGain: "+₹1,150/Quintal premium for dry export quality",
          netProfitGainHi: "सूखे निर्यात माल पर +₹1,150/क्विंटल अतिरिक्त लाभ"
        }
      }
    ],
    mandis: [
      {
        id: "m-guntur-yard",
        nameEn: "Guntur Market Yard (Asia's Largest Yard)",
        nameHi: "गुंटूर मार्केट यार्ड (एशिया का सबसे बड़ा यार्ड)",
        lat: 16.3067,
        lng: 80.4365,
        type: "Commercial APMC",
        todayArrivals: "38,000 Bags",
        todayArrivalsHi: "38,000 बोरी",
        gateQueueTime: "25 mins",
        gateQueueTimeHi: "25 मिनट",
        modalPrice: "₹7,420 / Qtl (Cotton)",
        timing: "07:30 AM - 06:00 PM",
        contact: "+91 863 222145"
      }
    ],
    warehouses: [
      {
        id: "w-guntur-cold",
        nameEn: "AP State Warehousing Corporation Guntur Cold Hub",
        nameHi: "आंध्र प्रदेश राज्य भंडारण निगम शीत गृह",
        lat: 16.3150,
        lng: 80.4510,
        type: "High-Tech Cold Chain Silo",
        typeHi: "हाई-टेक कोल्ड चेन साइलो",
        totalCapacityMt: 22000,
        vacantSpaceMt: 4100,
        storageRatePerMonth: "₹22 / bag (cotton/chilli)",
        storageRatePerMonthHi: "₹22 प्रति बोरी/माह",
        enwrLoanAvailable: true,
        temperature: "Humidity controlled 65% RH",
        temperatureHi: "नमी नियंत्रित 65% आरएच",
        contact: "+91 863 234120"
      }
    ]
  }
};
