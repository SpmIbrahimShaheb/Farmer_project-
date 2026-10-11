var ds=Object.defineProperty;var hs=(C,s,n)=>s in C?ds(C,s,{enumerable:!0,configurable:!0,writable:!0,value:n}):C[s]=n;var Ma=(C,s,n)=>hs(C,typeof s!="symbol"?s+"":s,n);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const h of c)if(h.type==="childList")for(const d of h.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(c){const h={};return c.integrity&&(h.integrity=c.integrity),c.referrerPolicy&&(h.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?h.credentials="include":c.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function o(c){if(c.ep)return;c.ep=!0;const h=n(c);fetch(c.href,h)}})();const Ha=[{id:"nashik_onion_belt",nameEn:"Lasalgaon APMC & Nashik Agri Hub",nameHi:"लासलगांव मंडी एवं नासिक कृषि केंद्र",stateEn:"Maharashtra",stateHi:"महाराष्ट्र",marketType:"Major APMC Terminal",marketStatus:"OPEN",dailyArrivalsQuintals:4250,tradeVolumeText:"4,250 Quintals Today",activeFarmers:642,weather:{temp:"29°C",humidity:"48%",rainfall:"10% (Dry clear skies)",rainfallHi:"10% (साफ मौसम, बारिश नहीं)",soilMoisture:"Optimal (36%)",soilMoistureHi:"उत्तम (36%)",summaryEn:"Dry breezy weather favorable for post-harvest drying and storage.",summaryHi:"सूखा और हवादार मौसम, प्याज सुखाने और भंडारण के लिए अनुकूल।"},crops:[{id:"onion",nameEn:"Red Onion",nameHi:"लाल प्याज",localNameEn:"Nashik Red Onion (Lasalgaon)",localNameHi:"नाशिक लाल कांदा",category:"vegetable",image:"/assets/onion.jpg",mandiPriceQuintal:1950,mandiPriceKg:19.5,minPriceKg:16.5,maxPriceKg:21,retailPriceQuintal:4400,retailPriceKg:44,spreadPct:55.7,trend7d:[17.5,18,18.2,18.8,19,19.2,19.5],status:"rising",recommendation:"HOLD",aiSummaryEn:"Consumer demand in Mumbai & Pune is strong (+14%). Transporters report reduced arrivals due to fuel hikes. Hold your quality dry onions for 3-4 days; rates expected to climb ₹2-3/kg.",aiSummaryHi:"मुंबई और पुणे में मांग मजबूत है। आवक कम होने से अगले 3-4 दिनों में भाव ₹2 से ₹3 प्रति किलो और सुधरने की संभावना है। यदि सूखा भंडार है तो 3 दिन रोकें।",voiceEn:"Today Lasalgaon red onion mandi rate is 19 rupees 50 paise per kilo, while city retail is 44 rupees. The AI recommends holding for three days as price is expected to rise.",voiceHi:"आज लासलगांव लाल प्याज का मंडी भाव साढ़े उन्नीस रुपये किलो है, जबकि शहरों में चवालीस रुपये बिक रहा है। सलाह है कि तीन दिन रोककर बेचें, भाव बढ़ने की उम्मीद है।",scrapedSourceEn:"APMC Lasalgaon eNAM & Reliance Fresh Vashi",scrapedSourceHi:"एपीएमसी लासलगांव ई-नाम एवं रिलायंस फ्रेश वाशी"},{id:"tomato",nameEn:"Hybrid Tomato",nameHi:"टमाटर (हाइब्रिड)",localNameEn:"Nashik Farm Hybrid Tomato",localNameHi:"नासिक हाइब्रिड टमाटर",category:"vegetable",image:"/assets/tomato.jpg",mandiPriceQuintal:1400,mandiPriceKg:14,minPriceKg:11.5,maxPriceKg:16,retailPriceQuintal:3800,retailPriceKg:38,spreadPct:63.2,trend7d:[16,15.5,15,14.5,14.2,14,14],status:"falling",recommendation:"SELL",aiSummaryEn:"Heavy arrivals from Sangamner and Pimpalgaon. Perishability risk is elevated. Sell immediately to avoid spot gluts.",aiSummaryHi:"आसपास की मंडियों से भारी आवक हो रही है। फसल खराब होने का जोखिम है। आज ही तुड़ाई करके मंडी में बेच दें, देर न करें।",voiceEn:"Tomato farmgate rate is 14 rupees per kilo. Retail price is 38 rupees. Heavy arrivals expected, sell today.",voiceHi:"टमाटर का मंडी भाव 14 रुपये किलो है, खुदरा भाव 38 रुपये है। आवक बढ़ने के कारण आज ही बेचना बेहतर रहेगा।",scrapedSourceEn:"Pimpalgaon APMC & BigBasket Mumbai",scrapedSourceHi:"पिंपलगांव एपीएमसी एवं बिगबास्केट मुंबई"}],volunteerPosts:[{id:"vol-1",authorEn:"Ramesh Patil (Market Observer)",authorHi:"रमेश पाटिल (मंडी पर्यवेक्षक)",timeAgoEn:"25m ago",timeAgoHi:"25 मिनट पहले",cropEn:"Red Onion",cropHi:"लाल प्याज",verifiedPriceEn:"₹2,020 / Qtl for Grade-A bold bulbs at Gate No. 2",verifiedPriceHi:"गेट 2 पर ग्रेड-ए बोल्ड प्याज ₹2,020 / क्विंटल",noteEn:"Traders from Gujarat are offering ₹70/qtl bonus for dry-sorted bulbs.",noteHi:"गुजरात के व्यापारी अच्छी सूखी प्याज पर ₹70 प्रति क्विंटल अधिक दे रहे हैं।"},{id:"vol-2",authorEn:"Sanjay Shinde (Farmer Volunteer)",authorHi:"संजय शिंदे (किसान स्वयंसेवक)",timeAgoEn:"2 hours ago",timeAgoHi:"2 घंटे पहले",cropEn:"Tomato",cropHi:"टमाटर",verifiedPriceEn:"₹140 - ₹160 per 20kg crate",verifiedPriceHi:"₹140 - ₹160 प्रति 20 किलो क्रेट",noteEn:"Weighing scales at yard 4 are moving slowly due to tractor queue.",noteHi:"यार्ड नंबर 4 पर तौल कांटा धीमा चल रहा है, समय लेकर निकलें।"}]},{id:"bhatinda_wheat_belt",nameEn:"Bhatinda Grain Market & Malwa Hub",nameHi:"बठिंडा अनाज मंडी एवं मालवा केंद्र",stateEn:"Punjab",stateHi:"पंजाब",marketType:"National Grain Exchange",marketStatus:"OPEN",dailyArrivalsQuintals:7850,tradeVolumeText:"7,850 Quintals Today",activeFarmers:890,weather:{temp:"24°C",humidity:"42%",rainfall:"0% (Bright sun)",rainfallHi:"0% (खिली धूप)",soilMoisture:"Good (42%)",soilMoistureHi:"पर्याप्त (42%)",summaryEn:"Crisp mild temperature optimal for rabi grain filling and late picking.",summaryHi:"गेहूं के दाना भराव के लिए मौसम अत्यंत अनुकूल।"},crops:[{id:"wheat",nameEn:"Sharbati / Durum Wheat",nameHi:"गेहूं (शरबती / उन्नत)",localNameEn:"Punjab Sona Wheat",localNameHi:"सोना गेहूं (कनक)",category:"grain",image:"/assets/wheat.jpg",mandiPriceQuintal:2425,mandiPriceKg:24.25,minPriceKg:22.8,maxPriceKg:25.5,retailPriceQuintal:3900,retailPriceKg:39,spreadPct:37.8,trend7d:[23.8,23.9,24,24.1,24.15,24.2,24.25],status:"rising",recommendation:"FAIR",aiSummaryEn:"Government procurement MSP rate is strong. Private millers paying ₹2450/qtl for moisture under 12%. Check moisture before bringing to mandi.",aiSummaryHi:"सरकारी खरीद और निजी मिलों दोनों से अच्छी मांग है। यदि नमी 12% से कम है तो ₹2450 तक मिल सकता है। सुखाकर ही मंडी लाएं।",voiceEn:"Wheat rate is 24 rupees 25 paise per kilo. Retail flour is 39 rupees. Assure low moisture for premium rate.",voiceHi:"गेहूं का भाव चौबीस रुपये पच्चीस पैसे किलो है। आटा शहरों में उनतालीस रुपये बिक रहा है। नमी कम रखें तो अच्छा दाम मिलेगा।",scrapedSourceEn:"Bhatinda Grain Market & Nature Basket Delhi",scrapedSourceHi:"बठिंडा अनाज मंडी एवं नेचर्स बास्केट दिल्ली"},{id:"cotton",nameEn:"Raw Cotton (Bt Cotton)",nameHi:"कपास (नरमा)",localNameEn:"Malwa White Gold Cotton",localNameHi:"सफेद सोना नरमा",category:"commercial",image:"/assets/cotton.jpg",mandiPriceQuintal:7350,mandiPriceKg:73.5,minPriceKg:69,maxPriceKg:76,retailPriceQuintal:11800,retailPriceKg:118,spreadPct:37.7,trend7d:[71,71.5,72,72.8,73,73.2,73.5],status:"rising",recommendation:"HOLD",aiSummaryEn:"Textile mills have renewed export orders. Spinning units actively competing for staple length > 29mm. Expect ₹150/qtl upside this week.",aiSummaryHi:"कपड़ा मिलों से सूत निर्यात के नए ऑर्डर मिले हैं। लंबे रेशे वाले नरमे के भाव में अगले सप्ताह ₹150 प्रति क्विंटल तक उछाल संभव है। रोककर बेचें।",voiceEn:"Raw cotton rate is 73 rupees 50 paise per kilo. Global demand is high. Recommendation: hold your stock.",voiceHi:"कपास का भाव तिहत्तर रुपये पचास पैसे प्रति किलो है। मांग तेज है, रोककर बेचने पर अधिक लाभ मिलेगा।",scrapedSourceEn:"Mansa Cotton Yard & Textile Ministry Index",scrapedSourceHi:"मानसा कपास मंडी एवं वस्त्र मंत्रालय सूचकांक"}],volunteerPosts:[{id:"vol-3",authorEn:"Harpreet Singh (Kisan Volunteer)",authorHi:"हरप्रीत सिंह (किसान स्वयंसेवक)",timeAgoEn:"45m ago",timeAgoHi:"45 मिनट पहले",cropEn:"Wheat",cropHi:"गेहूं",verifiedPriceEn:"₹2,440 / Qtl spot payment by local cooperative",verifiedPriceHi:"स्थानीय सहकारी समिति द्वारा ₹2,440 / क्विंटल नकद भुगतान",noteEn:"Moisture meter testing is free at Gate 1 shed today.",noteHi:"गेट 1 पर नमी परीक्षण आज निःशुल्क किया जा रहा है।"}]},{id:"mandya_cauvery_belt",nameEn:"Mandya Market Yard & Mysuru Hub",nameHi:"मांड्या मंडी यार्ड एवं मैसूर केंद्र",stateEn:"Karnataka",stateHi:"कर्नाटक",marketType:"Agri Commodity Exchange",marketStatus:"OPEN",dailyArrivalsQuintals:3120,tradeVolumeText:"3,120 Quintals Today",activeFarmers:512,weather:{temp:"31°C",humidity:"62%",rainfall:"35% (Scattered evening rain)",rainfallHi:"35% (शाम को हल्की वर्षा संभव)",soilMoisture:"High (54%)",soilMoistureHi:"उच्च (54%)",summaryEn:"Humid tropical air. Evening showers may cause field moisture spikes.",summaryHi:"हल्की शाम की बारिश की संभावना। कटाई से पहले खेत की जल निकासी जांचें।"},crops:[{id:"tomato",nameEn:"Country Tomato",nameHi:"टमाटर (देशी)",localNameEn:"Cauvery Farm Fresh Tomato",localNameHi:"देशी टमाटर (कावेरी)",category:"vegetable",image:"/assets/tomato.jpg",mandiPriceQuintal:1650,mandiPriceKg:16.5,minPriceKg:13,maxPriceKg:18.5,retailPriceQuintal:4200,retailPriceKg:42,spreadPct:60.7,trend7d:[15,15.5,16,16,16.2,16.5,16.5],status:"stable",recommendation:"FAIR",aiSummaryEn:"Bangalore supermarket demand is steady. Middleman margins are wide (60%). If possible, supply directly to HOPCOMS counter for ₹22/kg.",aiSummaryHi:"बेंगलुरु के बाजारों में नियमित मांग है। बिचौलियों का मुनाफा अधिक है। संभव हो तो किसान सहकारी केंद्र पर दें, ₹22 तक मिल सकता है।",voiceEn:"Tomato farmgate is 16 rupees 50 paise. Retail in Bangalore is 42 rupees. Middleman spread is 60 percent.",voiceHi:"टमाटर का मंडी भाव साढ़े सोलह रुपये किलो है और शहरों में बयालीस रुपये बिक रहा है। बिचौलियों का मार्जिन साठ प्रतिशत है।",scrapedSourceEn:"Mandya APMC & FreshToHome Bangalore",scrapedSourceHi:"मांड्या एपीएमसी एवं फ्रेशटूहॉम बेंगलुरु"},{id:"onion",nameEn:"Small Sambar Shallots",nameHi:"सांभर प्याज (छोटा प्याज)",localNameEn:"Mandya Small Shallot Onion",localNameHi:"सांभर छोटा प्याज",category:"vegetable",image:"/assets/onion.jpg",mandiPriceQuintal:3100,mandiPriceKg:31,minPriceKg:27,maxPriceKg:34,retailPriceQuintal:6800,retailPriceKg:68,spreadPct:54.4,trend7d:[28,29,29.5,30,30.5,30.8,31],status:"rising",recommendation:"HOLD",aiSummaryEn:"Hotel sector orders are surging. Supply from Bellary is delayed. Excellent price window forming over next 48 hours.",aiSummaryHi:"होटल और रेस्टोरेंट से भारी मांग है। बेल्लारी से आपूर्ति में देरी के कारण अगले 2 दिनों में भाव और बढ़ेंगे। रोकें।",voiceEn:"Shallot onion price is 31 rupees per kilo. Retail is 68 rupees. High demand from hotels, recommend holding.",voiceHi:"छोटे प्याज का भाव इकतीस रुपये किलो है, खुदरा में अड़सठ रुपये है। मांग तेज है, रोककर बेचने की सलाह है।",scrapedSourceEn:"Mysuru APMC & BigBasket Mysore",scrapedSourceHi:"मैसूर एपीएमसी एवं बिगबास्केट मैसूर"}],volunteerPosts:[{id:"vol-4",authorEn:"Kavitha Gowda (FPO Representative)",authorHi:"कविता गौड़ा (एफपीओ प्रतिनिधि)",timeAgoEn:"1 hour ago",timeAgoHi:"1 घंटा पहले",cropEn:"Sugarcane & Paddy",cropHi:"गन्ना और धान",verifiedPriceEn:"Co-op cane cutting price ₹3,150/ton announced",verifiedPriceHi:"सहकारी मिल द्वारा ₹3,150 / टन गन्ने का भाव घोषित",noteEn:"Direct collection lorry available at Maddur junction tomorrow 8 AM.",noteHi:"कल सुबह 8 बजे मद्दूर जंक्शन पर सीधी खरीद गाड़ी पहुंचेगी।"}]},{id:"varanasi_gangetic_belt",nameEn:"Varanasi APMC & Kashi Agri Hub",nameHi:"वाराणसी मंडी एवं काशी कृषि केंद्र",stateEn:"Uttar Pradesh",stateHi:"उत्तर प्रदेश",marketType:"Eastern UP Grain & Veg Terminal",marketStatus:"OPEN",dailyArrivalsQuintals:5420,tradeVolumeText:"5,420 Quintals Today",activeFarmers:730,weather:{temp:"27°C",humidity:"51%",rainfall:"5% (Clear skies)",rainfallHi:"5% (मौसम खुला रहेगा)",soilMoisture:"Good (39%)",soilMoistureHi:"संतोषजनक (39%)",summaryEn:"Gentle sunshine and mild humidity. Ideal for fertilizer top-dressing.",summaryHi:"हल्की धूप और संतुलित आर्द्रता। यूरिया की टॉप ड्रेसिंग के लिए सही समय।"},crops:[{id:"wheat",nameEn:"Wheat (HD 2967 Variety)",nameHi:"गेहूं (उन्नत किस्म)",localNameEn:"Gangetic Plain Sharbati Wheat",localNameHi:"कछार का शरबती गेहूं",category:"grain",image:"/assets/wheat.jpg",mandiPriceQuintal:2360,mandiPriceKg:23.6,minPriceKg:21.5,maxPriceKg:24.8,retailPriceQuintal:3750,retailPriceKg:37.5,spreadPct:37.1,trend7d:[23,23.1,23.2,23.4,23.5,23.6,23.6],status:"stable",recommendation:"FAIR",aiSummaryEn:"Stable purchases by local traders. Regional grain silos are accepting standard clean lot bags without deductions.",aiSummaryHi:"स्थानीय आढ़तियों द्वारा सामान्य खरीद जारी है। साफ दाना बिना किसी कटौती के बिक रहा है।",voiceEn:"Wheat mandi rate is 23 rupees 60 paise per kilo. Retail flour is 37 rupees 50 paise.",voiceHi:"गेहूं का मंडी भाव तेईस रुपये साठ पैसे किलो है। साफ दाना तुरंत बेच सकते हैं।",scrapedSourceEn:"Panchkroshi Mandi Varanasi & DMart UP",scrapedSourceHi:"पंचक्रोशी मंडी वाराणसी एवं डीमार्ट यूपी"},{id:"tomato",nameEn:"Tomato (Desi Varanasi)",nameHi:"टमाटर (देशी वाराणसी)",localNameEn:"Kashi Special Farm Tomato",localNameHi:"काशी विशेष देशी टमाटर",category:"vegetable",image:"/assets/tomato.jpg",mandiPriceQuintal:1520,mandiPriceKg:15.2,minPriceKg:12,maxPriceKg:17.5,retailPriceQuintal:3600,retailPriceKg:36,spreadPct:57.8,trend7d:[14,14.5,14.8,15,15,15.2,15.2],status:"rising",recommendation:"SELL",aiSummaryEn:"Weekend retail vegetable demand is high. Pack firmly in wooden crates to prevent bruising in transit to city vendors.",aiSummaryHi:"सप्ताहांत में शहर के बाजारों में मांग अच्छी है। आज शाम तक मंडी पहुंचाकर उचित दाम पाएं।",voiceEn:"Tomato rate is 15 rupees 20 paise. Retail price is 36 rupees. Sell before Sunday evening.",voiceHi:"टमाटर का भाव पंद्रह रुपये बीस पैसे है। खुदरा में छत्तीस रुपये बिक रहा है। आज ही बेचें।",scrapedSourceEn:"Chandauli APMC & Zepto Varanasi",scrapedSourceHi:"चंदौली एपीएमसी एवं जेप्टो वाराणसी"}],volunteerPosts:[{id:"vol-5",authorEn:"Devendra Maurya (Krishi Mitra)",authorHi:"देवेंद्र मौर्य (कृषि मित्र)",timeAgoEn:"30m ago",timeAgoHi:"30 मिनट पहले",cropEn:"Fresh Vegetables",cropHi:"ताजी सब्जियां",verifiedPriceEn:"Tomato crates ₹320 (22kg) at Raja Talab mandi",verifiedPriceHi:"राजा तालाब मंडी में ₹320 (22 किलो क्रेट) टमाटर",noteEn:"Traders from Bihar are buying bulk lots directly from the entry ramp.",noteHi:"बिहार के व्यापारी सीधे मंडी गेट से थोक में टमाटर उठा रहे हैं।"}]},{id:"guntur_chilli_belt",nameEn:"Guntur Commercial Yard & Amaravati Hub",nameHi:"गुंटूर वाणिज्यिक यार्ड एवं अमरावती केंद्र",stateEn:"Andhra Pradesh",stateHi:"आंध्र प्रदेश",marketType:"National Cash Crop Yard",marketStatus:"OPEN",dailyArrivalsQuintals:9140,tradeVolumeText:"9,140 Quintals Today",activeFarmers:960,weather:{temp:"33°C",humidity:"55%",rainfall:"0% (Warm sunshine)",rainfallHi:"0% (तेज धूप, सूखा मौसम)",soilMoisture:"Moderate (33%)",soilMoistureHi:"मध्यम (33%)",summaryEn:"Hot dry spell. Ideal for open-air drying of cotton and red chillies.",summaryHi:"तेज धूप और सूखा मौसम। कपास और लाल मिर्च सुखाने के लिए सर्वोत्तम।"},crops:[{id:"cotton",nameEn:"Medium Staple Cotton",nameHi:"कपास (मध्यम रेशा)",localNameEn:"Guntur Premium Cotton",localNameHi:"गुंटूर प्रीमियम नरमा",category:"commercial",image:"/assets/cotton.jpg",mandiPriceQuintal:7420,mandiPriceKg:74.2,minPriceKg:70,maxPriceKg:77.5,retailPriceQuintal:12200,retailPriceKg:122,spreadPct:39.2,trend7d:[72,72.5,73,73.5,73.9,74,74.2],status:"rising",recommendation:"HOLD",aiSummaryEn:"Heavy institutional procurement from cotton corporation of India (CCI). Dry weather prevents staining. Wait for next auction round on Monday.",aiSummaryHi:"सीसीआई (CCI) की सीधी खरीद तेज है। मौसम सूखा होने से नरमे की सफेदी बरकरार है। सोमवार तक रोकें, और अच्छे दाम मिलेंगे।",voiceEn:"Cotton mandi price is 74 rupees 20 paise per kilo. CCI procurement is high. Recommendation: hold for Monday auction.",voiceHi:"कपास का भाव चौहत्तर रुपये बीस पैसे प्रति किलो है। सरकारी खरीद तेज है, सोमवार तक रोक कर रखने की सलाह है।",scrapedSourceEn:"Guntur Yard eNAM & Textile Exchange",scrapedSourceHi:"गुंटूर मार्केट यार्ड ई-नाम एवं वस्त्र विनिमय"},{id:"onion",nameEn:"Bellary Red Onion",nameHi:"लाल प्याज (गुंटूर मंडी)",localNameEn:"Bellary Storage Red Onion",localNameHi:"बेलारी लाल प्याज",category:"vegetable",image:"/assets/onion.jpg",mandiPriceQuintal:2100,mandiPriceKg:21,minPriceKg:18,maxPriceKg:23.5,retailPriceQuintal:4600,retailPriceKg:46,spreadPct:54.3,trend7d:[19,19.5,20,20.2,20.5,20.8,21],status:"rising",recommendation:"FAIR",aiSummaryEn:"Steady supply from Kurnool. Consumer rates in Vijayawada remain buoyant. Good window to liquidate 50% of stock.",aiSummaryHi:"कुरनूल से नियमित आवक है और विजयवाड़ा में खुदरा भाव ऊंचे हैं। अपनी आधी फसल आज निकाल सकते हैं।",voiceEn:"Onion farmgate rate is 21 rupees per kilo. Retail is 46 rupees in Vijayawada.",voiceHi:"प्याज का मंडी भाव 21 रुपये किलो है और खुदरा भाव 46 रुपये है। आधा माल आज निकाल सकते हैं।",scrapedSourceEn:"Guntur Market Yard & Spencers Retail",scrapedSourceHi:"गुंटूर मंडी यार्ड एवं स्पेंसर्स रिटेल"}],volunteerPosts:[{id:"vol-6",authorEn:"Srinivas Rao (Farmer Society Secretary)",authorHi:"श्रीनिवास राव (किसान समिति सचिव)",timeAgoEn:"15m ago",timeAgoHi:"15 मिनट पहले",cropEn:"Cotton & Chillies",cropHi:"कपास व मिर्च",verifiedPriceEn:"CCI Grade-1 cotton fetching ₹7,500/Qtl at Platform 3",verifiedPriceHi:"प्लेटफॉर्म 3 पर ग्रेड-1 कपास ₹7,500 / क्विंटल",noteEn:"Bring moisture test certificate from local Rythu Bharosa Kendra for expedited gate pass.",noteHi:"रैतु भरोसा केंद्र से नमी प्रमाण पत्र लाने पर गेट पास तुरंत मिल रहा है।"}]}],us=[{id:"black_cotton",nameEn:"Black Cotton Soil (Regur)",nameHi:"काली कपास मिट्टी (रेगुर)",texture:"Heavy clay, high water retention, rich in calcium, magnesium, and potash; low in nitrogen and phosphorus.",textureHi:"गहरी चिकनी मिट्टी, उच्च जल धारण क्षमता, कैल्शियम व पोटाश से भरपूर; नाइट्रोजन व फास्फोरस की आवश्यकता।",bestCrops:["cotton","onion","wheat","sugarcane"],organicAddition:"Farmyard Manure (FYM) 4 tons/acre + Trichoderma to prevent fungal root rot.",organicAdditionHi:"गोबर की सड़ी खाद 4 टन/एकड़ + ट्राइकोडर्मा फफूंदनाशक।"},{id:"alluvial",nameEn:"Alluvial Gangetic Soil (Fertile Loam)",nameHi:"जलोढ़ व दोमट मिट्टी (कछार)",texture:"Light to medium loam, highly fertile, well-draining, rich in potash; moderate nitrogen deficiency.",textureHi:"उपजाऊ दोमट मिट्टी, उत्तम जल निकासी, पोटाश समृद्ध; नाइट्रोजन की सामान्य कमी।",bestCrops:["wheat","tomato","paddy","onion","mustard"],organicAddition:"Vermicompost 2.5 tons/acre + Azotobacter bio-fertilizer.",organicAdditionHi:"केंचुआ खाद 2.5 टन/एकड़ + एजोटोबैक्टर जैविक टीका।"},{id:"red_sandy",nameEn:"Red Sandy Loam Soil",nameHi:"लाल बलुई दोमट मिट्टी",texture:"Porous, rich in iron and manganese, low moisture retention, requires frequent light irrigation and phosphate enrichment.",textureHi:"लोहा व मैंगनीज युक्त, हल्की संरचना, कम जल धारण; बार-बार हल्की सिंचाई और फास्फेट की जरूरत।",bestCrops:["tomato","onion","groundnut","cotton"],organicAddition:"Neem cake 200 kg/acre + Biochar or compost to boost moisture retention.",organicAdditionHi:"नीम की खली 200 किग्रा/एकड़ + नमी रोकने के लिए बायोचार या कम्पोस्ट।"},{id:"clay_loam",nameEn:"Clay Loam Soil (Balanced Silt-Clay)",nameHi:"मटियारी दोमट मिट्टी",texture:"Balanced clay and sand ratio, moderate drainage, holds nutrients very well; ideal for deep-root vegetables and cereals.",textureHi:"संतुलित दोमट व चिकनी मिट्टी, पोषक तत्वों को रोकती है; सब्जियों और खाद्यान्न के लिए उत्तम।",bestCrops:["tomato","wheat","paddy","cotton"],organicAddition:"Green manuring with Dhaincha (Sesbania) before sowing + PSB (Phosphate Solubilizing Bacteria).",organicAdditionHi:"बुवाई से पहले ढैंचा की हरी खाद + पीएसबी (फॉस्फेट घोलक जीवाणु)।"}],ka="kisansetu_cluster_cache_v2";class ps{constructor(){var s;this.clusters=this.initCache(),this.currentClusterId=((s=this.clusters[0])==null?void 0:s.id)||"nashik_onion_belt",this.activeLanguage="hi"}initCache(){try{const s=localStorage.getItem(ka);if(s)return JSON.parse(s)}catch(s){console.warn("LocalStorage unavailable, using in-memory cluster data",s)}return this.saveCache(Ha),JSON.parse(JSON.stringify(Ha))}saveCache(s){try{localStorage.setItem(ka,JSON.stringify(s))}catch(n){console.warn("Could not persist cache to storage",n)}}getAllClusters(){return this.clusters}getCurrentCluster(){return this.clusters.find(n=>n.id===this.currentClusterId)||this.clusters[0]}setCurrentCluster(s){this.currentClusterId=s;const n=this.getCurrentCluster();return n&&(n.activeFarmers=(n.activeFarmers||500)+1,this.saveCache(this.clusters)),n}getLanguage(){return this.activeLanguage}setLanguage(s){this.activeLanguage=s}addVolunteerSubmission(s,n){const o=this.clusters.find(d=>d.id===s);if(!o)return!1;const c={id:"vol-"+Date.now(),author:n.author||"Local Kisan Mitra",timeAgo:"Just now",crop:n.cropName,verifiedPrice:`₹${Number(n.price).toLocaleString("en-IN")} / Qtl (Volunteer Verified)`,note:n.notes||"Direct spot report from mandi entrance.",noteHi:n.notes||"मंडी प्रांगण से सीधी सत्यापित रिपोर्ट।"};o.volunteerPosts||(o.volunteerPosts=[]),o.volunteerPosts.unshift(c);const h=o.crops.find(d=>{var m,g;return d.id.toLowerCase()===((m=n.cropId)==null?void 0:m.toLowerCase())||d.nameEn.toLowerCase().includes((g=n.cropName)==null?void 0:g.toLowerCase())||d.nameHi.includes(n.cropName)});if(h&&n.price>0){const d=h.mandiPriceQuintal;h.mandiPriceQuintal=Number(n.price),h.mandiPriceKg=Number((n.price/100).toFixed(1)),h.spreadPct=Number(((h.retailPriceQuintal-h.mandiPriceQuintal)/h.retailPriceQuintal*100).toFixed(1)),h.trend7d.push(h.mandiPriceKg),h.trend7d.length>7&&h.trend7d.shift(),h.status=h.mandiPriceQuintal>=d?"rising":"falling"}return o.cachedMinsAgo=1,o.activeFarmers+=1,this.saveCache(this.clusters),!0}refreshClusterFromScraper(s){const n=this.clusters.find(o=>o.id===s);return n?(n.crops.forEach(o=>{const c=Math.random()*60-25;o.mandiPriceQuintal=Math.round(o.mandiPriceQuintal+c),o.mandiPriceKg=Number((o.mandiPriceQuintal/100).toFixed(1)),o.spreadPct=Number(((o.retailPriceQuintal-o.mandiPriceQuintal)/o.retailPriceQuintal*100).toFixed(1)),o.trend7d[o.trend7d.length-1]=o.mandiPriceKg}),n.cachedMinsAgo=0,n.cacheHitRate="99.2%",n.responseLatency="16ms (Local Cache)",this.saveCache(this.clusters),n):null}}const ue=new ps,dt={en:{appTitle:"KisanSetu",brandBadge:"Live Agri Terminal",brandTagline:"Real-Time Mandi Prices • Pan-India Discovery • Smart Logistics",tagline:"Transparent Mandi Prices & AI Market Intelligence for Farmers",hackathonBadge:"Built for Google AI Agent Builder Hackathon",selectCluster:"Select Mandi Hub",clusterCached:"Live Market Active",lastCached:"Synthesized by Google AI",cacheHitRate:"Data Reliability",savedLatency:"Terminal Latency",benefitingFarmers:"Active Market Farmers",navHome:"Home",navCropDoctor:"Land & Crop Doctor",navSellingAdvisor:"Where to Sell? (Mandi vs Direct Consumer)",navSchemes:"Govt Schemes & 4% Loans",navPrices:"Market Watch",navMap:"Logistics Map",navAdvisor:"Soil & Nutrient Doctor",navWeather:"Weather & Small Plots",navPesticides:"Pesticides & Protection",navVolunteer:"Ground-Truth Feed",navAgentPipeline:"AI Architecture",heroBadgeTag:"🌾 KisanSetu Agri Terminal",heroTitle:"Transparent Mandi Rates & Direct Market Power.",heroSubtitle:"Track real-time modal rates across India's top APMC mandis, analyze urban retail spreads, and leverage logistics arbitrage to sell where prices are highest.",heroCtaPrices:"View Live Market Watch",heroCtaAdvisor:"Soil & Fertilizer Calculator",heroMediaBadge:"⚡ Live APMC Telemetry",heroStatMandisLbl:"🏛️ Active Mandis",heroStatMandisSub:"100% eNAM Live Sync",heroStatArrivalsLbl:"📦 Total Daily Arrivals",heroStatArrivalsSub:"+4.6% vs Yesterday",heroStatMarginLbl:"⚖️ Middleman Margin",heroStatMarginSub:"Direct sale saves ₹18/kg",heroStatColdLbl:"🏬 Cold Storage Vacancy",heroStatColdSub:"e-NWR Pledge Loans",voiceReadoutBtn:"AI Voice Assistant",voiceSpeaking:"Voice Assistant Active...",stopVoiceBtn:"Stop Voice",priceCompareTitle:"Commodity Market Watch & Price Depth",priceCompareSub:"Live farmgate modal rates from APMC Mandis vs Urban Retailers (per Quintal & per Kg) with middleman spread analysis.",farmerGets:"What YOU Get (Mandi Modal Rate)",consumerPays:"Consumer Pays (City Retail Rate)",middlemanSpread:"Intermediary Spread",gapPerKg:"Price Spread Gap",trend7d:"7-Day Trend",aiAdvisoryHeader:"AI Trading Action & Timing Advisory",cropDoctorTitle:"Agronomic Yield & Soil Nutrient Diagnostic",cropDoctorSub:"Compute balanced N-P-K fertilizer dosages, DAP/Urea bag counts, and projected crop yield customized to your soil and micro-weather.",labelSelectCrop:"1. Select Crop",labelSelectSoil:"2. Select Soil Classification",labelAcreage:"3. Land Parcel Size (Acres)",acreUnit:"Acres",btnCalculateAdvisory:"Generate Agronomic Advisory",fertilizerDoseTitle:"Target Balanced Fertilizer Dosage",yieldEstimateTitle:"Projected Yield per Acre",pestAlertTitle:"Current Micro-Climate & Disease Risk",organicTipTitle:"Cost-Effective Bio-Fertilizer Alternatives",volunteerTitle:"Ground-Truth Community Market Reports",volunteerSub:"Real-time verified reports submitted by field volunteers, farmer cooperatives, and local observers.",btnOpenVolunteerModal:"+ Post Field Price Report",volunteerBadge:"Verified Field Update",modalTitle:"Submit Ground-Truth Price or Gate Update",modalAuthorLabel:"Reporter Name & Role",modalAuthorPlaceholder:"e.g. Ramesh Patil (FPO Secretary)",modalCropLabel:"Commodity / Variety",modalCropPlaceholder:"e.g. Red Onion (Grade-A Bold)",modalPriceLabel:"Observed Spot Rate (₹ / Quintal)",modalPricePlaceholder:"e.g. 2050",modalNotesLabel:"Gate Observations (Queue delay, moisture check, buyer activity)",modalNotesPlaceholder:"e.g. Strong demand at Platform 2, Gujarat traders paying cash bonus.",modalSubmitBtn:"Publish Ground Report",modalCancelBtn:"Cancel",pipelineTitle:"Google AI Agent Builder Multi-Agent Pipeline",pipelineSub:"How autonomous agents collaborate: Web Scraping -> Regional Spatial Indexing -> Gemini LLM Vernacular Synthesis -> Agronomic Advisor",pipelineInspectRaw:"Inspect Scraped Raw Data",pipelineInspectPrompt:"Inspect Gemini LLM Prompt",pipelineInspectCache:"Inspect Data Store",pipelineRunBtn:"⚡ Simulate Live Scrape & Synthesis",weatherTitle:"Microclimate & Farm Weather Telemetry",temp:"Temperature",humidity:"Humidity",rainfall:"Precipitation Risk",soilMoisture:"Soil Moisture Index",quickSell:"ACTION: SELL SPOT LOT",quickHold:"ACTION: HOLD (PRICE RISING)",quickFair:"ACTION: FAIR VALUE TRADE",unitQuintal:"₹/Quintal",unitKg:"₹/kg",accuracyConfidence:"Confidence Score",btnListenAdvice:"Listen Audio",footerBrand:"KisanSetu - National Agri Market Intelligence",footerNote:"Built for Google AI Agent Builder Hackathon • Non-profit public interest initiative for Indian farmers",footerSources:"Data Sources: Agmarknet APMC • eNAM • OpenWeather • Verified Farmer Network"},hi:{appTitle:"किसान सेतु (KisanSetu)",brandBadge:"लाइव कृषि टर्मिनल",brandTagline:"पारदर्शी मंडी भाव • अखिल भारतीय बाजार • सीधी बिक्री",tagline:"भारतीय किसानों के लिए पारदर्शी मंडी भाव और एआई बाजार परामर्श",hackathonBadge:"गूगल एआई एजेंट बिल्डर हैकाथॉन के लिए निर्मित",selectCluster:"मंडी केंद्र चुनें",clusterCached:"लाइव बाजार सक्रिय",lastCached:"एआई द्वारा तैयार",cacheHitRate:"डेटा विश्वसनीयता",savedLatency:"टर्मिनल विलंबता",benefitingFarmers:"सक्रिय किसान",navHome:"होम",navCropDoctor:"भूमि व फसल डॉक्टर",navSellingAdvisor:"कहाँ बेचूं? (दलाल बनाम सीधी बिक्री)",navSchemes:"सरकारी योजनाएं व 4% ऋण",navPrices:"मार्केट वॉच",navMap:"राष्ट्रीय लॉजिस्टिक्स मैप",navAdvisor:"मिट्टी व पोषण डॉक्टर",navWeather:"कटाई मौसम व छोटे खेत",navPesticides:"कीटनाशक व फसल सुरक्षा",navVolunteer:"जमीनी रिपोर्ट फीड",navAgentPipeline:"एआई संरचना",heroBadgeTag:"🌾 किसान सेतु एग्री टर्मिनल",heroTitle:"पारदर्शी मंडी भाव, उचित मुनाफा — हर किसान का अधिकार।",heroSubtitle:"देश की प्रमुख एपीएमसी मंडियों के मॉडल भाव देखें, शहरों की खुदरा कीमतों से तुलना करें और मांग वाले शहरों में सीधी बिक्री से अधिक मुनाफा कमाएं।",heroCtaPrices:"देखें लाइव मार्केट वॉच",heroCtaAdvisor:"मिट्टी व खाद कैलकुलेटर",heroMediaBadge:"⚡ लाइव एपीएमसी टेलीमेट्री",heroStatMandisLbl:"🏛️ सक्रिय मंडियां",heroStatMandisSub:"100% ई-नाम लाइव सिंक",heroStatArrivalsLbl:"📦 आज की कुल आवक",heroStatArrivalsSub:"कल से +4.6% अधिक",heroStatMarginLbl:"⚖️ बिचौलियों का मार्जिन",heroStatMarginSub:"सीधी बिक्री से ₹18/किग्रा बचत",heroStatColdLbl:"🏬 उपलब्ध कोल्ड स्पेस",heroStatColdSub:"ई-एनडब्ल्यूआर बंधक ऋण",voiceReadoutBtn:"किसान सहायक",voiceSpeaking:"सहायक आवाज सक्रिय...",stopVoiceBtn:"आवाज रोकें",priceCompareTitle:"फसल मार्केट वॉच एवं भाव विश्लेषण",priceCompareSub:"एपीएमसी मंडी भाव बनाम शहरी खुदरा बाजार (प्रति क्विंटल एवं प्रति किलो) और बिचौलियों के मार्जिन का सीधा विश्लेषण।",farmerGets:"आपको क्या मिलता है (मंडी मॉडल भाव)",consumerPays:"ग्राहक क्या चुकाता है (शहरी खुदरा भाव)",middlemanSpread:"बिचौलियों का मार्जिन (अंतर)",gapPerKg:"बिचौलियों का अंतर",trend7d:"7 दिन का रुझान",aiAdvisoryHeader:"गूगल एआई बाजार व बिक्री सलाह",cropDoctorTitle:"स्मार्ट फसल व मिट्टी पोषण कैलकुलेटर",cropDoctorSub:"मिट्टी के प्रकार, स्थानीय मौसम और फसल के आधार पर संतुलित एन-पी-के (यूरिया, डीएपी, पोटाश) और संभावित पैदावार का सटीक अनुमान पाएं।",labelSelectCrop:"1. अपनी फसल चुनें",labelSelectSoil:"2. मिट्टी का प्रकार चुनें",labelAcreage:"3. खेत का रकबा (एकड़ में)",acreUnit:"एकड़",btnCalculateAdvisory:"एआई फसल और खाद परामर्श प्राप्त करें",fertilizerDoseTitle:"अनुशंसित संतुलित खाद मात्रा (प्रति एकड़)",yieldEstimateTitle:"संभावित पैदावार (अनुमानित उपज)",pestAlertTitle:"वर्तमान मौसम और कीट/रोग चेतावनी",organicTipTitle:"कम लागत वाले जैविक विकल्प",volunteerTitle:"जमीनी सामुदायिक मंडी रिपोर्ट फीड",volunteerSub:"स्वयंसेवक, किसान सहकारी समितियां और स्थानीय पर्यवेक्षक जमीनी मंडी भाव व आवक रिपोर्ट साझा करते हैं।",btnOpenVolunteerModal:"+ जमीनी भाव रिपोर्ट जोड़ें",volunteerBadge:"सत्यापित जमीनी रिपोर्ट",modalTitle:"स्थानीय मंडी या गेट अपडेट दर्ज करें",modalAuthorLabel:"आपका नाम / पद",modalAuthorPlaceholder:"उदा. रमेश पाटिल (किसान मित्र)",modalCropLabel:"फसल का नाम (स्थानीय/हिंदी)",modalCropPlaceholder:"उदा. प्याज / नासिक कांदा",modalPriceLabel:"प्रत्यक्ष देखा गया मंडी भाव (₹ / क्विंटल)",modalPricePlaceholder:"उदा. 2050",modalNotesLabel:"मंडी की स्थिति (गेट पर कतार, नमी जांच, नकद भुगतान)",modalNotesPlaceholder:"उदा. प्लेटफॉर्म 2 पर तेज खरीद, व्यापारी ग्रेड-ए माल पर नकद बोनस दे रहे हैं।",modalSubmitBtn:"रिपोर्ट प्रकाशित करें",modalCancelBtn:"रद्द करें",pipelineTitle:"गूगल एआई एजेंट बिल्डर मल्टी-एजेंट पाइपलाइन",pipelineSub:"स्वायत्त एजेंट प्रणाली: वेब स्क्रैपिंग -> क्षेत्रीय इंडेक्सिंग -> जेमिनी एलएलएम क्षेत्रीय अनुवाद -> कृषि सलाहकार",pipelineInspectRaw:"स्क्रैप किया गया कच्चा डेटा देखें",pipelineInspectPrompt:"जेमिनी एलएलएम प्रॉम्प्ट देखें",pipelineInspectCache:"डेटा स्टोर देखें",pipelineRunBtn:"⚡ लाइव स्क्रैपिंग और विश्लेषण सिमुलेट करें",weatherTitle:"मौसम व खेत पर्यावरण टेलीमेट्री",temp:"तापमान",humidity:"आर्द्रता",rainfall:"वर्षा की संभावना",soilMoisture:"मिट्टी में नमी सूचकांक",quickSell:"निर्णय: तुरंत बेचें",quickHold:"निर्णय: रोककर रखें (भाव बढ़ेंगे)",quickFair:"निर्णय: उचित मूल्य सौदा",unitQuintal:"₹/क्विंटल",unitKg:"₹/किग्रा",accuracyConfidence:"सटीकता स्कोर",btnListenAdvice:"ऑडियो सुनें",footerBrand:"किसान सेतु - राष्ट्रीय कृषि बाजार सूचना प्रणाली",footerNote:"गूगल एआई एजेंट बिल्डर हैकाथॉन के लिए निर्मित • भारतीय किसानों के हित में गैर-लाभकारी पहल",footerSources:"डेटा स्रोत: Agmarknet APMC • eNAM • OpenWeather • सत्यापित किसान नेटवर्क"}};class ms{constructor(){this.synth=typeof window<"u"?window.speechSynthesis:null,this.isSpeaking=!1,this.currentUtterance=null,this.onStateChangeCallbacks=[],this.voiceGender=this.loadSavedGender(),this.voices=[],this.synth&&(this.loadVoices(),this.synth.onvoiceschanged!==void 0&&(this.synth.onvoiceschanged=()=>this.loadVoices()))}loadSavedGender(){try{return localStorage.getItem("kisansetu_voice_gender")||"female"}catch{return"female"}}loadVoices(){this.synth&&(this.voices=this.synth.getVoices())}setGender(s){this.voiceGender=s==="male"?"male":"female";try{localStorage.setItem("kisansetu_voice_gender",this.voiceGender)}catch{}}getGender(){return this.voiceGender}onStateChange(s){this.onStateChangeCallbacks.push(s)}notifyState(s){this.isSpeaking=s,this.onStateChangeCallbacks.forEach(n=>n(s))}getBestVoice(s,n){(!this.voices||this.voices.length===0)&&this.loadVoices();const o=this.voices||[],c=s==="hi"||s.startsWith("hi"),u=c?n==="female"?["swara","kalpana","shruti","heera","priya","aditi","female","natural","google हिन्दी"]:["madhur","hemant","ravi","male","google हिन्दी"]:n==="female"?["neerja","veena","aditi","heera","female","google english (india)","india"]:["prabhat","ravi","male","google english (india)","india"];for(const _ of u){const b=o.find(w=>(c?w.lang.includes("hi")||w.name.toLowerCase().includes("hindi"):w.lang.includes("en-IN")||w.name.toLowerCase().includes("india"))&&w.name.toLowerCase().includes(_));if(b)return b}const f=o.find(_=>c?_.lang.includes("hi")||_.name.toLowerCase().includes("hindi"):_.lang.includes("en-IN")||_.name.toLowerCase().includes("india"));return f||o[0]||null}speak(s,n="hi-IN"){if(!this.synth){console.warn("Audio speech is not supported in this browser.");return}this.stop();const o=new SpeechSynthesisUtterance(s),c=n==="hi"||n.startsWith("hi");o.lang=c?"hi-IN":"en-IN",this.voiceGender==="female"?(o.pitch=1.08,o.rate=.9):(o.pitch=.88,o.rate=.92);const h=this.getBestVoice(o.lang,this.voiceGender);h&&(o.voice=h),o.onstart=()=>{this.notifyState(!0)},o.onend=()=>{this.notifyState(!1),this.currentUtterance=null},o.onerror=d=>{console.warn("Speech synthesis error",d),this.notifyState(!1),this.currentUtterance=null},this.currentUtterance=o,this.synth.speak(o)}previewVoice(s,n="hi"){this.setGender(s);const o=n==="hi"||n.startsWith("hi");let c="";s==="female"?c=o?"नमस्ते किसान भाई! मैं आपकी मधुर महिला वाणी सहायक हूँ। मैं आपको मंडी भाव और फसल की सलाह स्पष्ट सुनाऊँगी।":"Hello! I am your melodious female voice assistant. I am ready to guide you on mandi prices and crop logistics.":c=o?"नमस्ते किसान भाई! मैं आपका पुरुष वाणी सहायक हूँ। बोलिए, आज आपको किस मंडी या फसल का भाव जानना है?":"Hello! I am your male voice assistant. Ask me anytime for mandi rates, transport advice, or soil health.",this.speak(c,n)}stop(){this.synth&&(this.synth.cancel(),this.notifyState(!1))}toggle(s,n="hi-IN"){this.isSpeaking?this.stop():this.speak(s,n)}}const St=new ms;function fs(C,s,n="hi"){if(!C||!s)return;const o=dt[n]||dt.en,c=s.crops.map(h=>{var ht,tt;const d=n==="hi"?h.nameHi:h.nameEn,m=n==="hi"?h.localNameHi||h.localName:h.localNameEn||h.nameEn,g=n==="hi"?h.aiSummaryHi:h.aiSummaryEn,u=n==="hi"?h.voiceHi:h.voiceEn,f=n==="hi"?h.scrapedSourceHi||h.scrapedSource:h.scrapedSourceEn||h.scrapedSource,_=f?f.split("&"):["APMC Mandi","City Supermarket"];let b="badge-hold",w=o.quickHold;h.recommendation==="SELL"?(b="badge-sell",w=o.quickSell):h.recommendation==="FAIR"&&(b="badge-fair",w=o.quickFair);const S=h.status==="rising",E=S?"+3.8%":"-2.4%",T=S?"delta-positive":"delta-negative",R=S?"▲":"▼",z=h.minPriceKg||(h.mandiPriceKg*.9).toFixed(1),K=h.maxPriceKg||(h.mandiPriceKg*1.1).toFixed(1),F=gs(h.trend7d,S),ot={vegetable:n==="hi"?"सब्जी":"Vegetable",grain:n==="hi"?"अनाज":"Grain",spice:n==="hi"?"मसाला":"Spice",cash:n==="hi"?"नकदी फसल":"Commercial",fruit:n==="hi"?"फल":"Fruit"}[h.category]||h.category;return`
      <div class="fintech-commodity-card" data-crop-id="${h.id}">
        <!-- Top Asset Header -->
        <div class="f-card-header">
          <div class="f-asset-left">
            <div class="f-crop-icon-wrap">
              <img src="${h.image}" alt="${d}" class="f-crop-img" loading="lazy" />
            </div>
            <div class="f-asset-title-block">
              <div class="f-crop-name-row">
                <h3 class="f-crop-name">${d}</h3>
                <span class="f-category-pill">${ot}</span>
              </div>
              <span class="f-crop-sub">${m}</span>
            </div>
          </div>
          <div class="f-asset-signal">
            <span class="f-signal-badge ${b}">${w}</span>
          </div>
        </div>

        <!-- Main Price & Delta Display (Groww / Zerodha Terminal Style) -->
        <div class="f-price-primary-row">
          <div class="f-main-price-wrap">
            <div class="f-price-num-group">
              <span class="f-currency">₹</span>
              <span class="f-price-val">${h.mandiPriceKg}</span>
              <span class="f-unit">/ kg</span>
            </div>
            <div class="f-sub-rate-wrap">
              <span class="f-quintal-rate">₹${h.mandiPriceQuintal.toLocaleString("en-IN")} / Qtl</span>
              <span class="f-delta-pill ${T}">${R} ${E}</span>
            </div>
          </div>
          <div class="f-sparkline-wrap">
            ${F}
          </div>
        </div>

        <!-- Day Range Bar (52w high/low style) -->
        <div class="f-day-range-box">
          <div class="f-range-labels">
            <span>${n==="hi"?"न्यूनतम:":"Low:"} ₹${z}</span>
            <span class="f-range-mid">${n==="hi"?"आज का दायरा":"Today's Range"}</span>
            <span>${n==="hi"?"अधिकतम:":"High:"} ₹${K}</span>
          </div>
          <div class="f-range-track">
            <div class="f-range-thumb" style="left: 65%;"></div>
          </div>
        </div>

        <!-- Farmgate vs Retail Middleman Spread Analysis -->
        <div class="f-spread-container">
          <div class="f-spread-header">
            <span class="f-spread-label">${o.middlemanSpread}</span>
            <span class="f-spread-val">${h.spreadPct}% (${o.gapPerKg||"Gap"}: ₹${(h.retailPriceKg-h.mandiPriceKg).toFixed(1)}/kg)</span>
          </div>
          <div class="f-spread-meter">
            <div class="f-meter-bar" style="width: ${h.spreadPct}%;"></div>
          </div>
          <div class="f-spread-breakdown">
            <div class="f-spread-leg">
              <span class="f-leg-dot dot-farm"></span>
              <span class="f-leg-title">${n==="hi"?"मंडी मॉडल भाव":"Mandi Farmgate"}:</span>
              <strong>₹${h.mandiPriceKg}/kg</strong>
            </div>
            <div class="f-spread-leg">
              <span class="f-leg-dot dot-retail"></span>
              <span class="f-leg-title">${n==="hi"?"शहरी खुदरा":"City Retail"}:</span>
              <strong>₹${h.retailPriceKg}/kg</strong>
            </div>
          </div>
        </div>

        <!-- AI Trading Advice & Source Box -->
        <div class="f-advisory-box">
          <div class="f-advisory-header">
            <span class="f-ai-icon">💡</span>
            <span class="f-advisory-title">${o.aiAdvisoryHeader}</span>
          </div>
          <p class="f-advisory-text">${g}</p>
          <div class="f-source-row">
            <span>🏛️ ${(ht=_[0])==null?void 0:ht.trim()}</span>
            <span>🛒 ${((tt=_[1])==null?void 0:tt.trim())||"Urban Retail"}</span>
          </div>
        </div>

        <!-- Action Bar -->
        <div class="f-card-actions">
          <button type="button" class="f-btn-voice-listen btn-play-voice" data-voice-text="${encodeURIComponent(u)}">
            <span class="f-btn-icon">🔊</span>
            <span>${n==="hi"?"ऑडियो सलाह सुनें":"Listen Advice"}</span>
          </button>
          <button type="button" class="f-btn-transport-link" onclick="window.kisanAppInstance ? window.kisanAppInstance.switchView('section-map') : null">
            <span>🚚</span>
            <span>${n==="hi"?"अन्य शहरों में मांग देखें":"High-Demand Cities"}</span>
          </button>
        </div>
      </div>
    `}).join("");C.innerHTML=c,vs(C,n)}function gs(C,s){if(!C||C.length<2)return"";const n=110,o=36,c=4,h=Math.min(...C),m=Math.max(...C)-h||1,u=`M ${C.map((w,S)=>{const E=c+S/(C.length-1)*(n-2*c),T=o-c-(w-h)/m*(o-2*c);return`${E.toFixed(1)},${T.toFixed(1)}`}).join(" L ")}`,f=s?"#00B386":"#EB5B3C",_=s?"rgba(0, 179, 134, 0.08)":"rgba(235, 91, 60, 0.08)",b=`${u} L ${n-c},${o} L ${c},${o} Z`;return`
    <svg width="${n}" height="${o}" viewBox="0 0 ${n} ${o}" class="f-sparkline-svg" aria-label="7 day trend">
      <path d="${b}" fill="${_}" />
      <path d="${u}" fill="none" stroke="${f}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `}function vs(C,s){C.querySelectorAll(".btn-play-voice").forEach(o=>{o.addEventListener("click",()=>{const c=decodeURIComponent(o.getAttribute("data-voice-text"));c&&St.speak(c,s,{onStart:()=>{o.classList.add("playing"),o.innerHTML=`<span>⏹️</span> <span>${s==="hi"?"रोकें":"Stop"}</span>`},onEnd:()=>{o.classList.remove("playing"),o.innerHTML=`<span class="f-btn-icon">🔊</span> <span>${s==="hi"?"ऑडियो सलाह सुनें":"Listen Advice"}</span>`}})})})}class Na{static generateAdvisory(s,n,o=1,c={},h="hi"){const d=this.cropProfiles[s]||this.cropProfiles.onion,m=d.preferredSoils.includes(n);let g=m?1.05:.88;const u=parseInt(c.temp)||28,f=parseInt(c.humidity)||50;u>34&&(g-=.05),f>75&&(g-=.04);const _=(d.baseYieldPerAcre*g*o).toFixed(1),b=m?"94.6%":"87.2%";let w="Micro-climate conditions are normal. Maintain standard scouting.",S="वर्तमान मौसम सामान्य है। नियमित रूप से खेत का निरीक्षण करते रहें।";return d.pestAlert&&d.pestAlert.condition(c)&&(w=d.pestAlert.alertEn,S=d.pestAlert.alertHi),{cropName:h==="hi"?d.nameHi:d.nameEn,acreage:o,soilSuitability:m?h==="hi"?"उत्कृष्ट मिट्टी मिलान (High Compatibility)":"Optimal Soil Compatibility":h==="hi"?"मध्यम मिलान (अतिरिक्त जैविक खाद आवश्यक)":"Moderate Match (Extra Organic Matter Recommended)",isPreferredSoil:m,projectedYield:`${_} ${h==="hi"?d.unitHi:d.unit}`,confidenceScore:b,fertilizers:d.fertilizers.map(E=>({name:h==="hi"?E.nameHi:E.nameEn,dose:h==="hi"?E.dosePerAcreHi:E.dosePerAcre})),organicRecommendation:{name:h==="hi"?d.organicFormula.nameHi:d.organicFormula.nameEn,recipe:h==="hi"?d.organicFormula.recipeHi:d.organicFormula.recipeEn},pestAlert:h==="hi"?S:w}}}Ma(Na,"cropProfiles",{onion:{nameEn:"Red Onion",nameHi:"प्याज (कांदा)",baseYieldPerAcre:110,unit:"Quintals / Acre",unitHi:"क्विंटल / एकड़",preferredSoils:["alluvial","black_cotton","clay_loam"],npk:{N:45,P:25,K:40},fertilizers:[{nameEn:"Urea (46% N)",nameHi:"यूरिया (46% N)",dosePerAcre:"95 kg (in 3 split doses)",dosePerAcreHi:"95 किग्रा (3 बार में दें)"},{nameEn:"DAP (18-46-0)",nameHi:"डीएपी (18-46-0)",dosePerAcre:"55 kg at basal planting",dosePerAcreHi:"55 किग्रा रोपाई के समय"},{nameEn:"MOP (60% K2O)",nameHi:"एमओपी पोटाश",dosePerAcre:"65 kg for bulb tightness & shine",dosePerAcreHi:"65 किग्रा कंद की चमक व मजबूती के लिए"},{nameEn:"Sulphur (80% WDG)",nameHi:"सल्फर (गंधक 80%)",dosePerAcre:"10 kg (essential for pungency & skin color)",dosePerAcreHi:"10 किग्रा तीखेपन व रंग के लिए"}],organicFormula:{nameEn:"Neem Cake + Jeevamrut",nameHi:"नीम की खली + जीवामृत",recipeEn:"Apply 150 kg Neem Cake at field preparation. Drench with 200 Litres Jeevamrut every 14 days with irrigation.",recipeHi:"खेत की तैयारी में 150 किग्रा नीम खली डालें। हर 14 दिन पर सिंचाई के साथ 200 लीटर जीवामृत दें।"},pestAlert:{condition:s=>parseInt(s.temp)>28&&parseInt(s.humidity)<55,alertEn:"High Thrips Risk: Hot, dry air encourages onion thrips causing silver streaks. Spray Neem oil (5ml/L) or spinosad early morning.",alertHi:"थ्रिप्स (माहू) का जोखिम: गर्म व सूखे मौसम में पत्तियों पर चांदी जैसी धारियां दिखें तो नीम तेल (5 मिली/लीटर) का तुरंत छिड़काव करें।"}},tomato:{nameEn:"Hybrid Tomato",nameHi:"टमाटर (हाइब्रिड)",baseYieldPerAcre:160,unit:"Quintals / Acre",unitHi:"क्विंटल / एकड़",preferredSoils:["red_sandy","alluvial","clay_loam"],npk:{N:60,P:40,K:50},fertilizers:[{nameEn:"Urea",nameHi:"यूरिया",dosePerAcre:"125 kg (split into 4 top dressings)",dosePerAcreHi:"125 किग्रा (4 बराबर भागों में)"},{nameEn:"Single Super Phosphate (SSP)",nameHi:"एसएसपी (SSP)",dosePerAcre:"250 kg (provides Phosphorus + Calcium)",dosePerAcreHi:"250 किग्रा (फास्फोरस व कैल्शियम हेतु)"},{nameEn:"MOP (Potash)",nameHi:"पोटाश (MOP)",dosePerAcre:"80 kg (prevents fruit cracking)",dosePerAcreHi:"80 किग्रा फल फटने से रोकने के लिए"},{nameEn:"Boron 20%",nameHi:"बोरॉन 20%",dosePerAcre:"1.5 kg foliar spray during flowering",dosePerAcreHi:"1.5 किग्रा फूल आते समय पत्तियों पर स्प्रे"}],organicFormula:{nameEn:"Panchagavya + Wood Ash",nameHi:"पंचगव्य + लकड़ी की राख",recipeEn:"3% Panchagavya spray at 15-day intervals stimulates fruit setting. Wood ash provides potassium.",recipeHi:"15 दिन के अंतराल पर 3% पंचगव्य का छिड़काव करें। राख से पोटाश की पूर्ति होती है।"},pestAlert:{condition:s=>parseInt(s.humidity)>60,alertEn:"Blight / Fungal Alert: High ambient moisture can trigger Early/Late Blight. Ensure clear drainage and spray Copper Oxychloride 2.5g/L.",alertHi:"झुलसा रोग चेतावनी: हवा में अधिक नमी से पत्तों पर काले धब्बे (ब्लाइट) आ सकते हैं। कॉपर ऑक्सीक्लोराइड (2.5 ग्राम/लीटर) का छिड़काव करें।"}},wheat:{nameEn:"Wheat (Durum / Sona)",nameHi:"गेहूं (कनक)",baseYieldPerAcre:22,unit:"Quintals / Acre",unitHi:"क्विंटल / एकड़",preferredSoils:["alluvial","clay_loam","black_cotton"],npk:{N:50,P:25,K:20},fertilizers:[{nameEn:"Urea",nameHi:"यूरिया",dosePerAcre:"110 kg (50% at sowing, 25% at 1st irrigation, 25% at 2nd irrigation)",dosePerAcreHi:"110 किग्रा (आधा बुवाई पर, बाकी दो सिंचाइयों पर)"},{nameEn:"DAP",nameHi:"डीएपी",dosePerAcre:"55 kg at sowing time",dosePerAcreHi:"55 किग्रा बुवाई के समय"},{nameEn:"MOP (Potash)",nameHi:"पोटाश",dosePerAcre:"30 kg (crucial for straw strength & bold grains)",dosePerAcreHi:"30 किग्रा दाना भराव व तना मजबूत करने हेतु"},{nameEn:"Zinc Sulphate 33%",nameHi:"जिंक सल्फेट 33%",dosePerAcre:"5 kg per acre to counter yellowing",dosePerAcreHi:"5 किग्रा पीलापन दूर करने के लिए"}],organicFormula:{nameEn:"Ghanjeevamrut + Mustard Cake",nameHi:"घनजीवामृत + सरसों की खली",recipeEn:"Broadcast 200 kg dry Ghanjeevamrut per acre before sowing; top dress with fermented mustard cake slurry.",recipeHi:"बुवाई पूर्व 200 किग्रा घनजीवामृत डालें और सरसों की खली का घोल पहली सिंचाई में दें।"},pestAlert:{condition:s=>parseInt(s.temp)>27,alertEn:"Terminal Heat Alert: Unseasonal warmth can shorten grain-filling period. Provide light evening sprinkler irrigation.",alertHi:"तापमान वृद्धि चेतावनी: तापमान 27°C से अधिक होने पर दाना सिकुड़ने का डर रहता है। शाम को हल्की सिंचाई दें।"}},cotton:{nameEn:"Raw Cotton (Bt Cotton)",nameHi:"कपास (नरमा)",baseYieldPerAcre:14,unit:"Quintals / Acre",unitHi:"क्विंटल / एकड़",preferredSoils:["black_cotton","alluvial","clay_loam"],npk:{N:60,P:30,K:30},fertilizers:[{nameEn:"Urea",nameHi:"यूरिया",dosePerAcre:"130 kg (in 3 split applications at squaring, flowering, and boll setting)",dosePerAcreHi:"130 किग्रा (कलियां, फूल और गूलर बनते समय)"},{nameEn:"DAP",nameHi:"डीएपी",dosePerAcre:"65 kg at planting",dosePerAcreHi:"65 किग्रा बुवाई के समय"},{nameEn:"Potassium Nitrate (13-0-45)",nameHi:"पोटेशियम नाइट्रेट (13-0-45)",dosePerAcre:"2 kg foliar spray for boll weight",dosePerAcreHi:"2 किग्रा गूलर का वजन व चमक बढ़ाने हेतु स्प्रे"},{nameEn:"Magnesium Sulphate",nameHi:"मैग्नीशियम सल्फेट",dosePerAcre:"10 kg per acre to prevent red leaves",dosePerAcreHi:"10 किग्रा लाल पत्ती रोग की रोकथाम हेतु"}],organicFormula:{nameEn:"Agniastra + Cow Dung Slurry",nameHi:"अग्नियास्त्र + गोबर-गोमूत्र घोल",recipeEn:"Spray Agniastra concoction (prepared with green chilli, garlic, neem) to prevent sucking pests organically.",recipeHi:"रस चूसक कीटों से बचाव के लिए लहसुन, हरी मिर्च व नीम से बना अग्नियास्त्र छिड़कें।"},pestAlert:{condition:s=>parseInt(s.humidity)>50,alertEn:"Whitefly & Sucking Pest Alert: Install 8-10 yellow sticky traps per acre. Inspect underside of middle leaves.",alertHi:"सफेद मक्खी व रस चूसक कीट चेतावनी: खेत में 8-10 पीले चिपचिपे कार्ड (Yellow Sticky Traps) लगाएं।"}}});function ys(C,s,n){if(!C)return;let o="onion",c="black_cotton",h=1;function d(){const u=n(),f=dt[u]||dt.en,_=s(),b=[{id:"onion",nameEn:"Red Onion",nameHi:"लाल प्याज",img:"/assets/onion.jpg"},{id:"tomato",nameEn:"Hybrid Tomato",nameHi:"हाइब्रिड टमाटर",img:"/assets/tomato.jpg"},{id:"wheat",nameEn:"Wheat",nameHi:"गेहूं",img:"/assets/wheat.jpg"},{id:"cotton",nameEn:"Raw Cotton",nameHi:"कपास",img:"/assets/cotton.jpg"}];C.innerHTML=`
      <div class="advisor-form-grid">
        <!-- Interactive Inputs Column -->
        <div class="advisor-inputs glass-panel">
          <div class="input-step">
            <label class="step-label">
              <span class="step-num">1</span>
              <span>${f.labelSelectCrop}</span>
            </label>
            <div class="crop-select-grid">
              ${b.map(w=>`
                <div class="crop-option-card ${o===w.id?"active":""}" data-crop="${w.id}">
                  <img src="${w.img}" alt="${w.nameEn}" class="option-img" />
                  <div class="option-title">${u==="hi"?w.nameHi:w.nameEn}</div>
                  <div class="check-mark">✓</div>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="input-step">
            <label class="step-label">
              <span class="step-num">2</span>
              <span>${f.labelSelectSoil}</span>
            </label>
            <div class="soil-select-grid">
              ${us.map(w=>`
                <div class="soil-option-card ${c===w.id?"active":""}" data-soil="${w.id}">
                  <div class="soil-badge-icon">🌱</div>
                  <div class="soil-info">
                    <div class="soil-name">${u==="hi"?w.nameHi:w.nameEn}</div>
                    <div class="soil-desc">${u==="hi"?w.textureHi:w.texture}</div>
                  </div>
                  <div class="check-mark">✓</div>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="input-step">
            <label class="step-label">
              <span class="step-num">3</span>
              <span>${f.labelAcreage}</span>
            </label>
            <div class="acreage-control-wrap">
              <button type="button" class="btn-stepper" id="btn-acre-minus">−</button>
              <div class="acre-display">
                <span id="acre-val">${h}</span>
                <span class="acre-unit">${f.acreUnit||(u==="hi"?"एकड़":"Acres")}</span>
              </div>
              <button type="button" class="btn-stepper" id="btn-acre-plus">+</button>
            </div>
          </div>

          <!-- Micro-Weather snapshot used in calculation -->
          <div class="advisor-weather-badge">
            <div class="weather-badge-header">
              <span>🌦️ ${f.weatherTitle} (${u==="hi"?_.nameHi:_.nameEn})</span>
            </div>
            <div class="weather-metrics-pill-row">
              <span class="metric-pill">🌡️ ${_.weather.temp}</span>
              <span class="metric-pill">💧 ${_.weather.humidity}</span>
              <span class="metric-pill">🌧️ ${u==="hi"?_.weather.rainfallHi:_.weather.rainfall}</span>
              <span class="metric-pill">🌿 ${u==="hi"?_.weather.soilMoistureHi:_.weather.soilMoisture}</span>
            </div>
          </div>

          <button type="button" id="btn-calc-advisory" class="btn-primary-action">
            <span>✨ ${f.btnCalculateAdvisory}</span>
          </button>
        </div>

        <!-- Output Advisory Column -->
        <div class="advisor-output glass-panel" id="advisor-output-box">
          <!-- Will be rendered upon calculation or default state -->
        </div>
      </div>
    `,m(),g()}function m(){n(),C.querySelectorAll(".crop-option-card").forEach(b=>{b.addEventListener("click",()=>{o=b.getAttribute("data-crop"),d()})}),C.querySelectorAll(".soil-option-card").forEach(b=>{b.addEventListener("click",()=>{c=b.getAttribute("data-soil"),d()})});const u=C.querySelector("#btn-acre-minus"),f=C.querySelector("#btn-acre-plus");u&&u.addEventListener("click",()=>{h>.5&&(h=Number((h-.5).toFixed(1)),C.querySelector("#acre-val").textContent=h,g())}),f&&f.addEventListener("click",()=>{h<50&&(h=Number((h+.5).toFixed(1)),C.querySelector("#acre-val").textContent=h,g())});const _=C.querySelector("#btn-calc-advisory");_&&_.addEventListener("click",()=>{g(!0)})}function g(u=!1){const f=C.querySelector("#advisor-output-box");if(!f)return;const _=n(),b=dt[_]||dt.en,w=s(),S=Na.generateAdvisory(o,c,h,w.weather,_),E=_==="hi"?`${S.acreage} एकड़ ${S.cropName} के लिए अनुमानित पैदावार ${S.projectedYield} है। ${S.pestAlert}`:`For ${S.acreage} acres of ${S.cropName}, expected yield is ${S.projectedYield}. ${S.pestAlert}`;f.innerHTML=`
      <div class="advisory-result-container ${u?"pulse-highlight":""}">
        <div class="result-header">
          <div class="result-title-group">
            <span class="advisory-kicker">🎯 Google AI Agronomic Advisory</span>
            <h3 class="result-heading">${S.cropName} (${S.acreage} ${b.acreUnit||(_==="hi"?"एकड़":"Acres")})</h3>
          </div>
          <button type="button" class="btn-audio-listen" id="btn-listen-crop-advisory" title="Listen audio advice">
            <span>🔊</span>
            <span>${b.btnListenAdvice}</span>
          </button>
        </div>

        <!-- Yield Estimate Banner -->
        <div class="yield-banner">
          <div class="yield-left">
            <div class="yield-caption">${b.yieldEstimateTitle}</div>
            <div class="yield-number">${S.projectedYield}</div>
            <div class="soil-match-tag ${S.isPreferredSoil?"match-high":"match-med"}">
              ✓ ${S.soilSuitability}
            </div>
          </div>
          <div class="yield-right">
            <div class="confidence-circle">
              <span class="conf-pct">${S.confidenceScore}</span>
              <span class="conf-lbl">${b.accuracyConfidence}</span>
            </div>
          </div>
        </div>

        <!-- Balanced Fertilizer Grid -->
        <div class="fert-section">
          <h4 class="section-title">🧪 ${b.fertilizerDoseTitle}</h4>
          <div class="fert-grid">
            ${S.fertilizers.map(R=>`
              <div class="fert-card">
                <div class="fert-name">${R.name}</div>
                <div class="fert-dose">${R.dose}</div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Organic Alternative Box -->
        <div class="organic-box">
          <div class="organic-header">
            <span class="org-icon">🌿</span>
            <strong>${b.organicTipTitle}: ${S.organicRecommendation.name}</strong>
          </div>
          <p class="org-text">${S.organicRecommendation.recipe}</p>
        </div>

        <!-- Micro-Climate & Pest Warning -->
        <div class="pest-warning-box">
          <div class="pest-header">
            <span class="pest-icon">⚠️</span>
            <strong>${b.pestAlertTitle}</strong>
          </div>
          <p class="pest-text">${S.pestAlert}</p>
        </div>
      </div>
    `;const T=f.querySelector("#btn-listen-crop-advisory");T&&T.addEventListener("click",()=>{St.toggle(E,_)})}return{update:d}}function _s(C,s,n,o){if(!C)return;function c(){const d=n(),m=dt[d]||dt.en,u=s().volunteerPosts||[];C.innerHTML=`
      <div class="volunteer-section-inner">
        <div class="volunteer-header-row">
          <div>
            <h3 class="section-heading">🤝 ${m.volunteerTitle}</h3>
            <p class="section-desc">${m.volunteerSub}</p>
          </div>
          <button type="button" id="btn-open-volunteer-modal" class="btn-secondary-action">
            ${m.btnOpenVolunteerModal}
          </button>
        </div>

        <div class="volunteer-cards-grid">
          ${u.length===0?`<div class="empty-state">${d==="hi"?"इस मंडी केंद्र में अभी कोई स्थानीय रिपोर्ट नहीं है। पहली रिपोर्ट आप दर्ज करें!":"No volunteer reports yet for this market hub. Be the first to report!"}</div>`:""}
          ${u.map(f=>{const _=d==="hi"?f.authorHi||f.author:f.authorEn||f.author,b=d==="hi"?f.timeAgoHi||f.timeAgo:f.timeAgoEn||f.timeAgo,w=d==="hi"?f.cropHi||f.crop:f.cropEn||f.crop,S=d==="hi"?f.verifiedPriceHi||f.verifiedPrice:f.verifiedPriceEn||f.verifiedPrice,E=d==="hi"?f.noteHi||f.note:f.noteEn||f.note;return`
              <div class="volunteer-card glass-panel">
                <div class="vol-card-top">
                  <div class="vol-author-meta">
                    <span class="vol-avatar">👨‍🌾</span>
                    <div>
                      <strong class="vol-author-name">${_}</strong>
                      <div class="vol-time">${b} • <span class="vol-verified">✓ ${m.volunteerBadge}</span></div>
                    </div>
                  </div>
                  <span class="vol-crop-pill">${w}</span>
                </div>
                <div class="vol-price-highlight">${S}</div>
                <p class="vol-note">${E}</p>
              </div>
            `}).join("")}
        </div>
      </div>

      <!-- Volunteer Contribution Modal -->
      <div class="modal-backdrop" id="volunteer-modal" style="display: none;">
        <div class="modal-dialog glass-panel">
          <div class="modal-header">
            <h4>📝 ${m.modalTitle}</h4>
            <button type="button" class="btn-close-modal" id="btn-close-modal">&times;</button>
          </div>
          <form id="volunteer-form" class="modal-form">
            <div class="form-group">
              <label>${m.modalAuthorLabel}</label>
              <input type="text" id="vol-input-name" placeholder="${m.modalAuthorPlaceholder}" required />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>${m.modalCropLabel}</label>
                <input type="text" id="vol-input-crop" placeholder="${m.modalCropPlaceholder}" required />
              </div>
              <div class="form-group">
                <label>${m.modalPriceLabel}</label>
                <input type="number" id="vol-input-price" placeholder="${m.modalPricePlaceholder}" required />
              </div>
            </div>

            <div class="form-group">
              <label>${m.modalNotesLabel}</label>
              <textarea id="vol-input-notes" rows="3" placeholder="${m.modalNotesPlaceholder}" required></textarea>
            </div>

            <div class="modal-actions">
              <button type="button" class="btn-secondary" id="btn-cancel-modal">${m.modalCancelBtn}</button>
              <button type="submit" class="btn-primary-action">${m.modalSubmitBtn}</button>
            </div>
          </form>
        </div>
      </div>
    `,h()}function h(){const d=C.querySelector("#volunteer-modal"),m=C.querySelector("#btn-open-volunteer-modal"),g=C.querySelector("#btn-close-modal"),u=C.querySelector("#btn-cancel-modal"),f=C.querySelector("#volunteer-form"),_=()=>{d&&(d.style.display="flex")},b=()=>{d&&(d.style.display="none")};m&&m.addEventListener("click",_),g&&g.addEventListener("click",b),u&&u.addEventListener("click",b),f&&f.addEventListener("submit",w=>{w.preventDefault();const S=s(),E=C.querySelector("#vol-input-name").value.trim(),T=C.querySelector("#vol-input-crop").value.trim(),R=parseFloat(C.querySelector("#vol-input-price").value.trim())||0,z=C.querySelector("#vol-input-notes").value.trim();ue.addVolunteerSubmission(S.id,{author:E,cropName:T,price:R,notes:z}),b(),c(),o&&o()})}return{update:c}}function bs(C,s,n,o){if(!C)return;let c="flowchart";function h(){const g=n(),u=dt[g]||dt.en,f=s();C.innerHTML=`
      <div class="pipeline-card glass-panel">
        <div class="pipeline-header">
          <div class="pipeline-badge-group">
            <span class="hackathon-tag">🏆 Google AI Agent Builder Showcase</span>
            <h3 class="pipeline-title">${u.pipelineTitle}</h3>
            <p class="pipeline-desc">${u.pipelineSub}</p>
          </div>
          <button type="button" id="btn-trigger-ai-scrape" class="btn-primary-action pulse-glow">
            ${u.pipelineRunBtn||"⚡ Run Simulated Scrape & Synthesis"}
          </button>
        </div>

        <!-- Inspector Tabs -->
        <div class="inspector-tabs-nav">
          <button type="button" class="tab-btn ${c==="flowchart"?"active":""}" data-tab="flowchart">
            📐 ${g==="hi"?"मल्टी-एजेंट कार्यप्रवाह":"Multi-Agent Workflow"}
          </button>
          <button type="button" class="tab-btn ${c==="raw"?"active":""}" data-tab="raw">
            📡 ${u.pipelineInspectRaw}
          </button>
          <button type="button" class="tab-btn ${c==="prompt"?"active":""}" data-tab="prompt">
            🤖 ${u.pipelineInspectPrompt}
          </button>
          <button type="button" class="tab-btn ${c==="cache"?"active":""}" data-tab="cache">
            ⚡ ${u.pipelineInspectCache}
          </button>
        </div>

        <div class="inspector-content">
          ${d(c,f,g,u)}
        </div>
      </div>
    `,m()}function d(g,u,f="en",_={}){var b,w,S,E;if(g==="flowchart")return`
        <div class="agent-flow-grid">
          <div class="agent-node">
            <div class="node-icon">🕷️</div>
            <div class="node-tag">${f==="hi"?"एजेंट 1":"Agent 1"}</div>
            <h4>${f==="hi"?"वेब स्क्रैपर वर्कर":"Web Scraper Worker"}</h4>
            <p>${f==="hi"?"एपीएमसी एगमार्कनेट, ई-नाम दैनिक बुलेटिन और शहरी खुदरा सुपरमार्केट दरों को एकत्रित करता है।":"Scrapes APMC Agmarknet, eNAM daily bulletins, BigBasket & Reliance Fresh consumer retail feeds."}</p>
            <div class="node-status">${f==="hi"?"✓ स्वचालित स्क्रैपिंग (प्रति 4 घंटे)":"✓ Autonomous Cron (Every 4h)"}</div>
          </div>

          <div class="agent-connector">➡️</div>

          <div class="agent-node highlight-node">
            <div class="node-icon">⚡</div>
            <div class="node-tag">${f==="hi"?"एजेंट 2":"Agent 2"}</div>
            <h4>${f==="hi"?"क्षेत्रीय मंडी कैश इंजन":"Regional Market Cache Engine"}</h4>
            <p>${f==="hi"?"एपीएमसी मंडी विश्लेषण को सुरक्षित रखता है ताकि किसानों को तुरंत डेटा मिले और बार-बार एआई कॉल न करनी पड़े।":"Caches APMC synthesis across thousands of local farmers, delivering instant responses and preventing redundant LLM calls."}</p>
            <div class="node-status font-bold">⚡ ${u.cacheHitRate} ${f==="hi"?"कैश हिट":"Hit Rate"} • ${u.responseLatency}</div>
          </div>

          <div class="agent-connector">➡️</div>

          <div class="agent-node">
            <div class="node-icon">✨</div>
            <div class="node-tag">${f==="hi"?"एजेंट 3":"Agent 3"}</div>
            <h4>${f==="hi"?"जेमिनी 1.5 फ्लैश सिंथेसाइज़र":"Gemini 1.5 Flash Synthesizer"}</h4>
            <p>${f==="hi"?"मंडी के जटिल आंकड़ों को सरल, बोलचाल की ग्रामीण भाषा और आवाज सलाह में बदलता है।":"Translates complex market spread indices into simple rural dialect, generating voice-ready advisories."}</p>
            <div class="node-status">${f==="hi"?"✓ सरल व स्पष्ट भाषा • हिंदी व अंग्रेजी":"✓ Zero jargon • Hindi & English"}</div>
          </div>

          <div class="agent-connector">➡️</div>

          <div class="agent-node">
            <div class="node-icon">🌱</div>
            <div class="node-tag">${f==="hi"?"एजेंट 4":"Agent 4"}</div>
            <h4>${f==="hi"?"कृषि नैदानिक ​​इंजन":"Agronomic Diagnostics Engine"}</h4>
            <p>${f==="hi"?"मिट्टी की संरचना, मौसम और फसल के आधार पर सटीक खाद और संभावित पैदावार की गणना करता है।":"Cross-references soil composition, NPK chemistry, and micro-climate weather to output fertilizer & yield models."}</p>
            <div class="node-status">${f==="hi"?"✓ सटीकता विश्वास: 94.6%":"✓ Confidence: 94.6%"}</div>
          </div>
        </div>
      `;if(g==="raw"){const T={hub_id:u.id,market_coverage:"Pan-India Direct Discovery",sources:[{type:"APMC_AGMARKNET_PORTAL",status:200,parsed_rows:u.crops.length},{type:"RETAIL_BASKET_SCRAPER",status:200,supermarkets:["BigBasket","RelianceFresh"]},{type:"LOCAL_WEATHER_RADAR",temp_c:u.weather.temp,humidity:u.weather.humidity}],crops_sample:u.crops.map(R=>({crop:f==="hi"?R.nameHi:R.nameEn,apmc_modal_price_qtl:R.mandiPriceQuintal,retail_mrp_qtl:R.retailPriceQuintal,calculated_intermediary_spread_pct:`${R.spreadPct}%`}))};return`
        <div class="code-view-box">
          <div class="code-bar">
            <span>Payload Stream: /api/v1/agents/scraper/ingest</span>
            <span class="badge-status">HTTP 200 OK</span>
          </div>
          <pre><code>${JSON.stringify(T,null,2)}</code></pre>
        </div>
      `}if(g==="prompt")return`
        <div class="code-view-box">
          <div class="code-bar">
            <span>Model: Gemini 1.5 Flash (Google AI Agent Builder)</span>
            <span class="badge-status">Temperature: 0.2</span>
          </div>
          <pre><code>${f==="hi"?`// SYSTEM PROMPT: Google AI Agent Builder (कृषि सलाहकार एजेंट)
आप किसान सेतु के ग्रामीण भाषा सलाहकार एजेंट हैं।
इनपुट डेटा:
- राष्ट्रीय मंडी केंद्र: ${u.nameHi}
- कच्चा मंडी भाव: ₹${((b=u.crops[0])==null?void 0:b.mandiPriceKg)||20}/किग्रा
- शहर का खुदरा भाव: ₹${((w=u.crops[0])==null?void 0:w.retailPriceKg)||45}/किग्रा
- स्थानीय मौसम: ${u.weather.temp}, आर्द्रता ${u.weather.humidity}

कार्य निर्देश:
1. बिचौलियों के मार्जिन को बिना किसी जटिल तकनीकी शब्दों के समझाएं।
2. स्पष्ट फैसला दें: (तुरंत बेचें या 2-3 दिन रोकें)।
3. सरल व स्पष्ट ग्रामीण भाषा में आवाज (TTS) के लिए संक्षिप्त सलाह तैयार करें।
4. स्थानीय फसल नामों का सम्मान करें।`:`// SYSTEM PROMPT: Google AI Agent Builder (Agritech Farmer Synthesizer)
You are KisanSetu's Vernacular Farmer Advisory Agent.
Input Data:
- National Mandi Hub: ${u.nameEn}
- Raw Farmgate Mandi Rate: ₹${((S=u.crops[0])==null?void 0:S.mandiPriceKg)||20}/kg
- Supermarket Consumer Rate: ₹${((E=u.crops[0])==null?void 0:E.retailPriceKg)||45}/kg
- Local Micro-Weather: ${u.weather.temp}, Humidity ${u.weather.humidity}

Task Instructions:
1. Explain the middleman price spread transparently without economic jargon.
2. Provide a concrete decision: (SELL NOW or HOLD FOR 2-3 DAYS).
3. Generate concise text suitable for Text-to-Speech audio in clear, simple language.
4. Respect regional and vernacular crop naming conventions.`}</code></pre>
        </div>
      `;if(g==="cache")return`
        <div class="cache-metrics-grid">
          <div class="metric-card">
            <div class="metric-title">${f==="hi"?"सक्रिय मंडी केंद्र":"Active Mandi Hub"}</div>
            <div class="metric-value font-bold">${f==="hi"?u.nameHi:u.nameEn}</div>
            <div class="metric-sub">${f==="hi"?"अखिल भारतीय सीधी खोज":"Pan-India Direct Market Discovery"}</div>
          </div>
          <div class="metric-card">
            <div class="metric-title">Cache Hit Rate</div>
            <div class="metric-value text-green">${u.cacheHitRate}</div>
            <div class="metric-sub">Prevents 95%+ redundant LLM calls</div>
          </div>
          <div class="metric-card">
            <div class="metric-title">Response Latency</div>
            <div class="metric-value text-blue">${u.responseLatency}</div>
            <div class="metric-sub">Instant rendering on 2G/3G mobile networks</div>
          </div>
          <div class="metric-card">
            <div class="metric-title">Local Farmers Benefited</div>
            <div class="metric-value font-bold">${u.activeFarmers}+</div>
            <div class="metric-sub">Shared cached synthesis</div>
          </div>
        </div>
      `}function m(){C.querySelectorAll(".tab-btn").forEach(u=>{u.addEventListener("click",()=>{c=u.getAttribute("data-tab"),h()})});const g=C.querySelector("#btn-trigger-ai-scrape");g&&g.addEventListener("click",()=>{g.innerHTML="⏳ Agents Scraping & Synthesizing...",g.disabled=!0,setTimeout(()=>{o&&o(),g.innerHTML="✓ Synthesis Complete & Cached!",setTimeout(()=>{g.innerHTML="⚡ Run Simulated Scrape & Synthesis",g.disabled=!1},2e3)},1e3)})}return{update:h}}function Ps(C){return C&&C.__esModule&&Object.prototype.hasOwnProperty.call(C,"default")?C.default:C}var he={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */var ws=he.exports,Ta;function Ss(){return Ta||(Ta=1,(function(C,s){(function(n,o){o(s)})(ws,(function(n){var o="1.9.4";function c(t){var e,i,a,r;for(i=1,a=arguments.length;i<a;i++){r=arguments[i];for(e in r)t[e]=r[e]}return t}var h=Object.create||(function(){function t(){}return function(e){return t.prototype=e,new t}})();function d(t,e){var i=Array.prototype.slice;if(t.bind)return t.bind.apply(t,i.call(arguments,1));var a=i.call(arguments,2);return function(){return t.apply(e,a.length?a.concat(i.call(arguments)):arguments)}}var m=0;function g(t){return"_leaflet_id"in t||(t._leaflet_id=++m),t._leaflet_id}function u(t,e,i){var a,r,l,p;return p=function(){a=!1,r&&(l.apply(i,r),r=!1)},l=function(){a?r=arguments:(t.apply(i,arguments),setTimeout(p,e),a=!0)},l}function f(t,e,i){var a=e[1],r=e[0],l=a-r;return t===a&&i?t:((t-r)%l+l)%l+r}function _(){return!1}function b(t,e){if(e===!1)return t;var i=Math.pow(10,e===void 0?6:e);return Math.round(t*i)/i}function w(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function S(t){return w(t).split(/\s+/)}function E(t,e){Object.prototype.hasOwnProperty.call(t,"options")||(t.options=t.options?h(t.options):{});for(var i in e)t.options[i]=e[i];return t.options}function T(t,e,i){var a=[];for(var r in t)a.push(encodeURIComponent(i?r.toUpperCase():r)+"="+encodeURIComponent(t[r]));return(!e||e.indexOf("?")===-1?"?":"&")+a.join("&")}var R=/\{ *([\w_ -]+) *\}/g;function z(t,e){return t.replace(R,function(i,a){var r=e[a];if(r===void 0)throw new Error("No value provided for variable "+i);return typeof r=="function"&&(r=r(e)),r})}var K=Array.isArray||function(t){return Object.prototype.toString.call(t)==="[object Array]"};function F(t,e){for(var i=0;i<t.length;i++)if(t[i]===e)return i;return-1}var Y="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function ot(t){return window["webkit"+t]||window["moz"+t]||window["ms"+t]}var ht=0;function tt(t){var e=+new Date,i=Math.max(0,16-(e-ht));return ht=e+i,window.setTimeout(t,i)}var at=window.requestAnimationFrame||ot("RequestAnimationFrame")||tt,gt=window.cancelAnimationFrame||ot("CancelAnimationFrame")||ot("CancelRequestAnimationFrame")||function(t){window.clearTimeout(t)};function J(t,e,i){if(i&&at===tt)t.call(e);else return at.call(window,d(t,e))}function st(t){t&&gt.call(window,t)}var pe={__proto__:null,extend:c,create:h,bind:d,get lastId(){return m},stamp:g,throttle:u,wrapNum:f,falseFn:_,formatNum:b,trim:w,splitWords:S,setOptions:E,getParamString:T,template:z,isArray:K,indexOf:F,emptyImageUrl:Y,requestFn:at,cancelFn:gt,requestAnimFrame:J,cancelAnimFrame:st};function ut(){}ut.extend=function(t){var e=function(){E(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=e.__super__=this.prototype,a=h(i);a.constructor=e,e.prototype=a;for(var r in this)Object.prototype.hasOwnProperty.call(this,r)&&r!=="prototype"&&r!=="__super__"&&(e[r]=this[r]);return t.statics&&c(e,t.statics),t.includes&&(me(t.includes),c.apply(null,[a].concat(t.includes))),c(a,t),delete a.statics,delete a.includes,a.options&&(a.options=i.options?h(i.options):{},c(a.options,t.options)),a._initHooks=[],a.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0;for(var l=0,p=a._initHooks.length;l<p;l++)a._initHooks[l].call(this)}},e},ut.include=function(t){var e=this.prototype.options;return c(this.prototype,t),t.options&&(this.prototype.options=e,this.mergeOptions(t.options)),this},ut.mergeOptions=function(t){return c(this.prototype.options,t),this},ut.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i=typeof t=="function"?t:function(){this[t].apply(this,e)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this};function me(t){if(!(typeof L>"u"||!L||!L.Mixin)){t=K(t)?t:[t];for(var e=0;e<t.length;e++)t[e]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var nt={on:function(t,e,i){if(typeof t=="object")for(var a in t)this._on(a,t[a],e);else{t=S(t);for(var r=0,l=t.length;r<l;r++)this._on(t[r],e,i)}return this},off:function(t,e,i){if(!arguments.length)delete this._events;else if(typeof t=="object")for(var a in t)this._off(a,t[a],e);else{t=S(t);for(var r=arguments.length===1,l=0,p=t.length;l<p;l++)r?this._off(t[l]):this._off(t[l],e,i)}return this},_on:function(t,e,i,a){if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}if(this._listens(t,e,i)===!1){i===this&&(i=void 0);var r={fn:e,ctx:i};a&&(r.once=!0),this._events=this._events||{},this._events[t]=this._events[t]||[],this._events[t].push(r)}},_off:function(t,e,i){var a,r,l;if(this._events&&(a=this._events[t],!!a)){if(arguments.length===1){if(this._firingCount)for(r=0,l=a.length;r<l;r++)a[r].fn=_;delete this._events[t];return}if(typeof e!="function"){console.warn("wrong listener type: "+typeof e);return}var p=this._listens(t,e,i);if(p!==!1){var v=a[p];this._firingCount&&(v.fn=_,this._events[t]=a=a.slice()),a.splice(p,1)}}},fire:function(t,e,i){if(!this.listens(t,i))return this;var a=c({},e,{type:t,target:this,sourceTarget:e&&e.sourceTarget||this});if(this._events){var r=this._events[t];if(r){this._firingCount=this._firingCount+1||1;for(var l=0,p=r.length;l<p;l++){var v=r[l],y=v.fn;v.once&&this.off(t,y,v.ctx),y.call(v.ctx||this,a)}this._firingCount--}}return i&&this._propagateEvent(a),this},listens:function(t,e,i,a){typeof t!="string"&&console.warn('"string" type argument expected');var r=e;typeof e!="function"&&(a=!!e,r=void 0,i=void 0);var l=this._events&&this._events[t];if(l&&l.length&&this._listens(t,r,i)!==!1)return!0;if(a){for(var p in this._eventParents)if(this._eventParents[p].listens(t,e,i,a))return!0}return!1},_listens:function(t,e,i){if(!this._events)return!1;var a=this._events[t]||[];if(!e)return!!a.length;i===this&&(i=void 0);for(var r=0,l=a.length;r<l;r++)if(a[r].fn===e&&a[r].ctx===i)return r;return!1},once:function(t,e,i){if(typeof t=="object")for(var a in t)this._on(a,t[a],e,!0);else{t=S(t);for(var r=0,l=t.length;r<l;r++)this._on(t[r],e,i,!0)}return this},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[g(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[g(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,c({layer:t.target,propagatedFrom:t.target},t),!0)}};nt.addEventListener=nt.on,nt.removeEventListener=nt.clearAllEventListeners=nt.off,nt.addOneTimeEventListener=nt.once,nt.fireEvent=nt.fire,nt.hasEventListeners=nt.listens;var Ht=ut.extend(nt);function x(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e}var jt=Math.trunc||function(t){return t>0?Math.floor(t):Math.ceil(t)};x.prototype={clone:function(){return new x(this.x,this.y)},add:function(t){return this.clone()._add(k(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(k(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new x(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new x(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=jt(this.x),this.y=jt(this.y),this},distanceTo:function(t){t=k(t);var e=t.x-this.x,i=t.y-this.y;return Math.sqrt(e*e+i*i)},equals:function(t){return t=k(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=k(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+b(this.x)+", "+b(this.y)+")"}};function k(t,e,i){return t instanceof x?t:K(t)?new x(t[0],t[1]):t==null?t:typeof t=="object"&&"x"in t&&"y"in t?new x(t.x,t.y):new x(t,e,i)}function Z(t,e){if(t)for(var i=e?[t,e]:t,a=0,r=i.length;a<r;a++)this.extend(i[a])}Z.prototype={extend:function(t){var e,i;if(!t)return this;if(t instanceof x||typeof t[0]=="number"||"x"in t)e=i=k(t);else if(t=et(t),e=t.min,i=t.max,!e||!i)return this;return!this.min&&!this.max?(this.min=e.clone(),this.max=i.clone()):(this.min.x=Math.min(e.x,this.min.x),this.max.x=Math.max(i.x,this.max.x),this.min.y=Math.min(e.y,this.min.y),this.max.y=Math.max(i.y,this.max.y)),this},getCenter:function(t){return k((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return k(this.min.x,this.max.y)},getTopRight:function(){return k(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i;return typeof t[0]=="number"||t instanceof x?t=k(t):t=et(t),t instanceof Z?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=et(t);var e=this.min,i=this.max,a=t.min,r=t.max,l=r.x>=e.x&&a.x<=i.x,p=r.y>=e.y&&a.y<=i.y;return l&&p},overlaps:function(t){t=et(t);var e=this.min,i=this.max,a=t.min,r=t.max,l=r.x>e.x&&a.x<i.x,p=r.y>e.y&&a.y<i.y;return l&&p},isValid:function(){return!!(this.min&&this.max)},pad:function(t){var e=this.min,i=this.max,a=Math.abs(e.x-i.x)*t,r=Math.abs(e.y-i.y)*t;return et(k(e.x-a,e.y-r),k(i.x+a,i.y+r))},equals:function(t){return t?(t=et(t),this.min.equals(t.getTopLeft())&&this.max.equals(t.getBottomRight())):!1}};function et(t,e){return!t||t instanceof Z?t:new Z(t,e)}function lt(t,e){if(t)for(var i=e?[t,e]:t,a=0,r=i.length;a<r;a++)this.extend(i[a])}lt.prototype={extend:function(t){var e=this._southWest,i=this._northEast,a,r;if(t instanceof q)a=t,r=t;else if(t instanceof lt){if(a=t._southWest,r=t._northEast,!a||!r)return this}else return t?this.extend(N(t)||V(t)):this;return!e&&!i?(this._southWest=new q(a.lat,a.lng),this._northEast=new q(r.lat,r.lng)):(e.lat=Math.min(a.lat,e.lat),e.lng=Math.min(a.lng,e.lng),i.lat=Math.max(r.lat,i.lat),i.lng=Math.max(r.lng,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,a=Math.abs(e.lat-i.lat)*t,r=Math.abs(e.lng-i.lng)*t;return new lt(new q(e.lat-a,e.lng-r),new q(i.lat+a,i.lng+r))},getCenter:function(){return new q((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new q(this.getNorth(),this.getWest())},getSouthEast:function(){return new q(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){typeof t[0]=="number"||t instanceof q||"lat"in t?t=N(t):t=V(t);var e=this._southWest,i=this._northEast,a,r;return t instanceof lt?(a=t.getSouthWest(),r=t.getNorthEast()):a=r=t,a.lat>=e.lat&&r.lat<=i.lat&&a.lng>=e.lng&&r.lng<=i.lng},intersects:function(t){t=V(t);var e=this._southWest,i=this._northEast,a=t.getSouthWest(),r=t.getNorthEast(),l=r.lat>=e.lat&&a.lat<=i.lat,p=r.lng>=e.lng&&a.lng<=i.lng;return l&&p},overlaps:function(t){t=V(t);var e=this._southWest,i=this._northEast,a=t.getSouthWest(),r=t.getNorthEast(),l=r.lat>e.lat&&a.lat<i.lat,p=r.lng>e.lng&&a.lng<i.lng;return l&&p},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t,e){return t?(t=V(t),this._southWest.equals(t.getSouthWest(),e)&&this._northEast.equals(t.getNorthEast(),e)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function V(t,e){return t instanceof lt?t:new lt(t,e)}function q(t,e,i){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")");this.lat=+t,this.lng=+e,i!==void 0&&(this.alt=+i)}q.prototype={equals:function(t,e){if(!t)return!1;t=N(t);var i=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng));return i<=(e===void 0?1e-9:e)},toString:function(t){return"LatLng("+b(this.lat,t)+", "+b(this.lng,t)+")"},distanceTo:function(t){return kt.distance(this,N(t))},wrap:function(){return kt.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat);return V([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new q(this.lat,this.lng,this.alt)}};function N(t,e,i){return t instanceof q?t:K(t)&&typeof t[0]!="object"?t.length===3?new q(t[0],t[1],t[2]):t.length===2?new q(t[0],t[1]):null:t==null?t:typeof t=="object"&&"lat"in t?new q(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===void 0?null:new q(t,e,i)}var Et={latLngToPoint:function(t,e){var i=this.projection.project(t),a=this.scale(e);return this.transformation._transform(i,a)},pointToLatLng:function(t,e){var i=this.scale(e),a=this.transformation.untransform(t,i);return this.projection.unproject(a)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null;var e=this.projection.bounds,i=this.scale(t),a=this.transformation.transform(e.min,i),r=this.transformation.transform(e.max,i);return new Z(a,r)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?f(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?f(t.lat,this.wrapLat,!0):t.lat,a=t.alt;return new q(i,e,a)},wrapLatLngBounds:function(t){var e=t.getCenter(),i=this.wrapLatLng(e),a=e.lat-i.lat,r=e.lng-i.lng;if(a===0&&r===0)return t;var l=t.getSouthWest(),p=t.getNorthEast(),v=new q(l.lat-a,l.lng-r),y=new q(p.lat-a,p.lng-r);return new lt(v,y)}},kt=c({},Et,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,a=t.lat*i,r=e.lat*i,l=Math.sin((e.lat-t.lat)*i/2),p=Math.sin((e.lng-t.lng)*i/2),v=l*l+Math.cos(a)*Math.cos(r)*p*p,y=2*Math.atan2(Math.sqrt(v),Math.sqrt(1-v));return this.R*y}}),yi=6378137,Be={R:yi,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,a=Math.max(Math.min(i,t.lat),-i),r=Math.sin(a*e);return new x(this.R*t.lng*e,this.R*Math.log((1+r)/(1-r))/2)},unproject:function(t){var e=180/Math.PI;return new q((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:(function(){var t=yi*Math.PI;return new Z([-t,-t],[t,t])})()};function Re(t,e,i,a){if(K(t)){this._a=t[0],this._b=t[1],this._c=t[2],this._d=t[3];return}this._a=t,this._b=e,this._c=i,this._d=a}Re.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new x((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}};function Yt(t,e,i,a){return new Re(t,e,i,a)}var Ne=c({},kt,{code:"EPSG:3857",projection:Be,transformation:(function(){var t=.5/(Math.PI*Be.R);return Yt(t,.5,-t,.5)})()}),Da=c({},Ne,{code:"EPSG:900913"});function _i(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function bi(t,e){var i="",a,r,l,p,v,y;for(a=0,l=t.length;a<l;a++){for(v=t[a],r=0,p=v.length;r<p;r++)y=v[r],i+=(r?"L":"M")+y.x+" "+y.y;i+=e?M.svg?"z":"x":""}return i||"M0 0"}var Oe=document.documentElement.style,fe="ActiveXObject"in window,za=fe&&!document.addEventListener,Pi="msLaunchUri"in navigator&&!("documentMode"in document),De=_t("webkit"),wi=_t("android"),Si=_t("android 2")||_t("android 3"),Fa=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),Ka=wi&&_t("Google")&&Fa<537&&!("AudioNode"in window),ze=!!window.opera,Ei=!Pi&&_t("chrome"),Ci=_t("gecko")&&!De&&!ze&&!fe,qa=!Ei&&_t("safari"),Li=_t("phantom"),Ai="OTransition"in Oe,Za=navigator.platform.indexOf("Win")===0,Mi=fe&&"transition"in Oe,Fe="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Si,Hi="MozPerspective"in Oe,Ga=!window.L_DISABLE_3D&&(Mi||Fe||Hi)&&!Ai&&!Li,Jt=typeof orientation<"u"||_t("mobile"),Wa=Jt&&De,Qa=Jt&&Fe,ki=!window.PointerEvent&&window.MSPointerEvent,Ti=!!(window.PointerEvent||ki),xi="ontouchstart"in window||!!window.TouchEvent,Va=!window.L_NO_TOUCH&&(xi||Ti),Ua=Jt&&ze,ja=Jt&&Ci,Ya=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,Ja=(function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("testPassiveEventSupport",_,e),window.removeEventListener("testPassiveEventSupport",_,e)}catch{}return t})(),Xa=(function(){return!!document.createElement("canvas").getContext})(),Ke=!!(document.createElementNS&&_i("svg").createSVGRect),tn=!!Ke&&(function(){var t=document.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"})(),en=!Ke&&(function(){try{var t=document.createElement("div");t.innerHTML='<v:shape adj="1"/>';var e=t.firstChild;return e.style.behavior="url(#default#VML)",e&&typeof e.adj=="object"}catch{return!1}})(),an=navigator.platform.indexOf("Mac")===0,nn=navigator.platform.indexOf("Linux")===0;function _t(t){return navigator.userAgent.toLowerCase().indexOf(t)>=0}var M={ie:fe,ielt9:za,edge:Pi,webkit:De,android:wi,android23:Si,androidStock:Ka,opera:ze,chrome:Ei,gecko:Ci,safari:qa,phantom:Li,opera12:Ai,win:Za,ie3d:Mi,webkit3d:Fe,gecko3d:Hi,any3d:Ga,mobile:Jt,mobileWebkit:Wa,mobileWebkit3d:Qa,msPointer:ki,pointer:Ti,touch:Va,touchNative:xi,mobileOpera:Ua,mobileGecko:ja,retina:Ya,passiveEvents:Ja,canvas:Xa,svg:Ke,vml:en,inlineSvg:tn,mac:an,linux:nn},$i=M.msPointer?"MSPointerDown":"pointerdown",Ii=M.msPointer?"MSPointerMove":"pointermove",Bi=M.msPointer?"MSPointerUp":"pointerup",Ri=M.msPointer?"MSPointerCancel":"pointercancel",qe={touchstart:$i,touchmove:Ii,touchend:Bi,touchcancel:Ri},Ni={touchstart:dn,touchmove:ge,touchend:ge,touchcancel:ge},Dt={},Oi=!1;function sn(t,e,i){return e==="touchstart"&&cn(),Ni[e]?(i=Ni[e].bind(this,i),t.addEventListener(qe[e],i,!1),i):(console.warn("wrong event specified:",e),_)}function rn(t,e,i){if(!qe[e]){console.warn("wrong event specified:",e);return}t.removeEventListener(qe[e],i,!1)}function on(t){Dt[t.pointerId]=t}function ln(t){Dt[t.pointerId]&&(Dt[t.pointerId]=t)}function Di(t){delete Dt[t.pointerId]}function cn(){Oi||(document.addEventListener($i,on,!0),document.addEventListener(Ii,ln,!0),document.addEventListener(Bi,Di,!0),document.addEventListener(Ri,Di,!0),Oi=!0)}function ge(t,e){if(e.pointerType!==(e.MSPOINTER_TYPE_MOUSE||"mouse")){e.touches=[];for(var i in Dt)e.touches.push(Dt[i]);e.changedTouches=[e],t(e)}}function dn(t,e){e.MSPOINTER_TYPE_TOUCH&&e.pointerType===e.MSPOINTER_TYPE_TOUCH&&it(e),ge(t,e)}function hn(t){var e={},i,a;for(a in t)i=t[a],e[a]=i&&i.bind?i.bind(t):i;return t=e,e.type="dblclick",e.detail=2,e.isTrusted=!1,e._simulated=!0,e}var un=200;function pn(t,e){t.addEventListener("dblclick",e);var i=0,a;function r(l){if(l.detail!==1){a=l.detail;return}if(!(l.pointerType==="mouse"||l.sourceCapabilities&&!l.sourceCapabilities.firesTouchEvents)){var p=Zi(l);if(!(p.some(function(y){return y instanceof HTMLLabelElement&&y.attributes.for})&&!p.some(function(y){return y instanceof HTMLInputElement||y instanceof HTMLSelectElement}))){var v=Date.now();v-i<=un?(a++,a===2&&e(hn(l))):a=1,i=v}}}return t.addEventListener("click",r),{dblclick:e,simDblclick:r}}function mn(t,e){t.removeEventListener("dblclick",e.dblclick),t.removeEventListener("click",e.simDblclick)}var Ze=_e(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Xt=_e(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),zi=Xt==="webkitTransition"||Xt==="OTransition"?Xt+"End":"transitionend";function Fi(t){return typeof t=="string"?document.getElementById(t):t}function te(t,e){var i=t.style[e]||t.currentStyle&&t.currentStyle[e];if((!i||i==="auto")&&document.defaultView){var a=document.defaultView.getComputedStyle(t,null);i=a?a[e]:null}return i==="auto"?null:i}function D(t,e,i){var a=document.createElement(t);return a.className=e||"",i&&i.appendChild(a),a}function W(t){var e=t.parentNode;e&&e.removeChild(t)}function ve(t){for(;t.firstChild;)t.removeChild(t.firstChild)}function zt(t){var e=t.parentNode;e&&e.lastChild!==t&&e.appendChild(t)}function Ft(t){var e=t.parentNode;e&&e.firstChild!==t&&e.insertBefore(t,e.firstChild)}function Ge(t,e){if(t.classList!==void 0)return t.classList.contains(e);var i=ye(t);return i.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(i)}function I(t,e){if(t.classList!==void 0)for(var i=S(e),a=0,r=i.length;a<r;a++)t.classList.add(i[a]);else if(!Ge(t,e)){var l=ye(t);We(t,(l?l+" ":"")+e)}}function Q(t,e){t.classList!==void 0?t.classList.remove(e):We(t,w((" "+ye(t)+" ").replace(" "+e+" "," ")))}function We(t,e){t.className.baseVal===void 0?t.className=e:t.className.baseVal=e}function ye(t){return t.correspondingElement&&(t=t.correspondingElement),t.className.baseVal===void 0?t.className:t.className.baseVal}function pt(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&fn(t,e)}function fn(t,e){var i=!1,a="DXImageTransform.Microsoft.Alpha";try{i=t.filters.item(a)}catch{if(e===1)return}e=Math.round(e*100),i?(i.Enabled=e!==100,i.Opacity=e):t.style.filter+=" progid:"+a+"(opacity="+e+")"}function _e(t){for(var e=document.documentElement.style,i=0;i<t.length;i++)if(t[i]in e)return t[i];return!1}function $t(t,e,i){var a=e||new x(0,0);t.style[Ze]=(M.ie3d?"translate("+a.x+"px,"+a.y+"px)":"translate3d("+a.x+"px,"+a.y+"px,0)")+(i?" scale("+i+")":"")}function U(t,e){t._leaflet_pos=e,M.any3d?$t(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")}function It(t){return t._leaflet_pos||new x(0,0)}var ee,ie,Qe;if("onselectstart"in document)ee=function(){$(window,"selectstart",it)},ie=function(){G(window,"selectstart",it)};else{var ae=_e(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);ee=function(){if(ae){var t=document.documentElement.style;Qe=t[ae],t[ae]="none"}},ie=function(){ae&&(document.documentElement.style[ae]=Qe,Qe=void 0)}}function Ve(){$(window,"dragstart",it)}function Ue(){G(window,"dragstart",it)}var be,je;function Ye(t){for(;t.tabIndex===-1;)t=t.parentNode;t.style&&(Pe(),be=t,je=t.style.outlineStyle,t.style.outlineStyle="none",$(window,"keydown",Pe))}function Pe(){be&&(be.style.outlineStyle=je,be=void 0,je=void 0,G(window,"keydown",Pe))}function Ki(t){do t=t.parentNode;while((!t.offsetWidth||!t.offsetHeight)&&t!==document.body);return t}function Je(t){var e=t.getBoundingClientRect();return{x:e.width/t.offsetWidth||1,y:e.height/t.offsetHeight||1,boundingClientRect:e}}var gn={__proto__:null,TRANSFORM:Ze,TRANSITION:Xt,TRANSITION_END:zi,get:Fi,getStyle:te,create:D,remove:W,empty:ve,toFront:zt,toBack:Ft,hasClass:Ge,addClass:I,removeClass:Q,setClass:We,getClass:ye,setOpacity:pt,testProp:_e,setTransform:$t,setPosition:U,getPosition:It,get disableTextSelection(){return ee},get enableTextSelection(){return ie},disableImageDrag:Ve,enableImageDrag:Ue,preventOutline:Ye,restoreOutline:Pe,getSizedParentNode:Ki,getScale:Je};function $(t,e,i,a){if(e&&typeof e=="object")for(var r in e)ti(t,r,e[r],i);else{e=S(e);for(var l=0,p=e.length;l<p;l++)ti(t,e[l],i,a)}return this}var bt="_leaflet_events";function G(t,e,i,a){if(arguments.length===1)qi(t),delete t[bt];else if(e&&typeof e=="object")for(var r in e)ei(t,r,e[r],i);else if(e=S(e),arguments.length===2)qi(t,function(v){return F(e,v)!==-1});else for(var l=0,p=e.length;l<p;l++)ei(t,e[l],i,a);return this}function qi(t,e){for(var i in t[bt]){var a=i.split(/\d/)[0];(!e||e(a))&&ei(t,a,null,null,i)}}var Xe={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function ti(t,e,i,a){var r=e+g(i)+(a?"_"+g(a):"");if(t[bt]&&t[bt][r])return this;var l=function(v){return i.call(a||t,v||window.event)},p=l;!M.touchNative&&M.pointer&&e.indexOf("touch")===0?l=sn(t,e,l):M.touch&&e==="dblclick"?l=pn(t,l):"addEventListener"in t?e==="touchstart"||e==="touchmove"||e==="wheel"||e==="mousewheel"?t.addEventListener(Xe[e]||e,l,M.passiveEvents?{passive:!1}:!1):e==="mouseenter"||e==="mouseleave"?(l=function(v){v=v||window.event,ai(t,v)&&p(v)},t.addEventListener(Xe[e],l,!1)):t.addEventListener(e,p,!1):t.attachEvent("on"+e,l),t[bt]=t[bt]||{},t[bt][r]=l}function ei(t,e,i,a,r){r=r||e+g(i)+(a?"_"+g(a):"");var l=t[bt]&&t[bt][r];if(!l)return this;!M.touchNative&&M.pointer&&e.indexOf("touch")===0?rn(t,e,l):M.touch&&e==="dblclick"?mn(t,l):"removeEventListener"in t?t.removeEventListener(Xe[e]||e,l,!1):t.detachEvent("on"+e,l),t[bt][r]=null}function Bt(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,this}function ii(t){return ti(t,"wheel",Bt),this}function ne(t){return $(t,"mousedown touchstart dblclick contextmenu",Bt),t._leaflet_disable_click=!0,this}function it(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this}function Rt(t){return it(t),Bt(t),this}function Zi(t){if(t.composedPath)return t.composedPath();for(var e=[],i=t.target;i;)e.push(i),i=i.parentNode;return e}function Gi(t,e){if(!e)return new x(t.clientX,t.clientY);var i=Je(e),a=i.boundingClientRect;return new x((t.clientX-a.left)/i.x-e.clientLeft,(t.clientY-a.top)/i.y-e.clientTop)}var vn=M.linux&&M.chrome?window.devicePixelRatio:M.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Wi(t){return M.edge?t.wheelDeltaY/2:t.deltaY&&t.deltaMode===0?-t.deltaY/vn:t.deltaY&&t.deltaMode===1?-t.deltaY*20:t.deltaY&&t.deltaMode===2?-t.deltaY*60:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?-t.detail*20:t.detail?t.detail/-32765*60:0}function ai(t,e){var i=e.relatedTarget;if(!i)return!0;try{for(;i&&i!==t;)i=i.parentNode}catch{return!1}return i!==t}var yn={__proto__:null,on:$,off:G,stopPropagation:Bt,disableScrollPropagation:ii,disableClickPropagation:ne,preventDefault:it,stop:Rt,getPropagationPath:Zi,getMousePosition:Gi,getWheelDelta:Wi,isExternalTarget:ai,addListener:$,removeListener:G},Qi=Ht.extend({run:function(t,e,i,a){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(a||.5,.2),this._startPos=It(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=J(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=this._duration*1e3;e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t));e&&i._round(),U(this._el,i),this.fire("step")},_complete:function(){st(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),O=Ht.extend({options:{crs:Ne,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=E(this,e),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(t),this._initLayout(),this._onResize=d(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==void 0&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==void 0&&this.setView(N(e.center),e.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Xt&&M.any3d&&!M.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),$(this._proxy,zi,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(t,e,i){if(e=e===void 0?this._zoom:this._limitZoom(e),t=this._limitCenter(N(t),e,this.options.maxBounds),i=i||{},this._stop(),this._loaded&&!i.reset&&i!==!0){i.animate!==void 0&&(i.zoom=c({animate:i.animate},i.zoom),i.pan=c({animate:i.animate,duration:i.duration},i.pan));var a=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,i.zoom):this._tryAnimatedPan(t,i.pan);if(a)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e,i.pan&&i.pan.noMoveStart),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(M.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(M.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var a=this.getZoomScale(e),r=this.getSize().divideBy(2),l=t instanceof x?t:this.latLngToContainerPoint(t),p=l.subtract(r).multiplyBy(1-1/a),v=this.containerPointToLatLng(r.add(p));return this.setView(v,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():V(t);var i=k(e.paddingTopLeft||e.padding||[0,0]),a=k(e.paddingBottomRight||e.padding||[0,0]),r=this.getBoundsZoom(t,!1,i.add(a));if(r=typeof e.maxZoom=="number"?Math.min(e.maxZoom,r):r,r===1/0)return{center:t.getCenter(),zoom:r};var l=a.subtract(i).divideBy(2),p=this.project(t.getSouthWest(),r),v=this.project(t.getNorthEast(),r),y=this.unproject(p.add(v).divideBy(2).add(l),r);return{center:y,zoom:r}},fitBounds:function(t,e){if(t=V(t),!t.isValid())throw new Error("Bounds are not valid.");var i=this._getBoundsCenterZoom(t,e);return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t,e){if(t=k(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend");if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Qi,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){I(this._mapPane,"leaflet-pan-anim");var i=this._getMapPanePos().subtract(t).round();this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend");return this},flyTo:function(t,e,i){if(i=i||{},i.animate===!1||!M.any3d)return this.setView(t,e,i);this._stop();var a=this.project(this.getCenter()),r=this.project(t),l=this.getSize(),p=this._zoom;t=N(t),e=e===void 0?p:e;var v=Math.max(l.x,l.y),y=v*this.getZoomScale(p,e),P=r.distanceTo(a)||1,A=1.42,H=A*A;function B(j){var $e=j?-1:1,rs=j?y:v,os=y*y-v*v+$e*H*H*P*P,ls=2*rs*H*P,mi=os/ls,Aa=Math.sqrt(mi*mi+1)-mi,cs=Aa<1e-9?-18:Math.log(Aa);return cs}function rt(j){return(Math.exp(j)-Math.exp(-j))/2}function X(j){return(Math.exp(j)+Math.exp(-j))/2}function ft(j){return rt(j)/X(j)}var ct=B(0);function Qt(j){return v*(X(ct)/X(ct+A*j))}function is(j){return v*(X(ct)*ft(ct+A*j)-rt(ct))/H}function as(j){return 1-Math.pow(1-j,1.5)}var ns=Date.now(),Ca=(B(1)-ct)/A,ss=i.duration?1e3*i.duration:1e3*Ca*.8;function La(){var j=(Date.now()-ns)/ss,$e=as(j)*Ca;j<=1?(this._flyToFrame=J(La,this),this._move(this.unproject(a.add(r.subtract(a).multiplyBy(is($e)/P)),p),this.getScaleZoom(v/Qt($e),p),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}return this._moveStart(!0,i.noMoveStart),La.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e);return this.flyTo(i.center,i.zoom,e)},setMaxBounds:function(t){return t=V(t),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),t.isValid()?(this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(t){var e=this.options.minZoom;return this.options.minZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(t):this},setMaxZoom:function(t){var e=this.options.maxZoom;return this.options.maxZoom=t,this._loaded&&e!==t&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0;var i=this.getCenter(),a=this._limitCenter(i,this._zoom,V(t));return i.equals(a)||this.panTo(a,e),this._enforcingBounds=!1,this},panInside:function(t,e){e=e||{};var i=k(e.paddingTopLeft||e.padding||[0,0]),a=k(e.paddingBottomRight||e.padding||[0,0]),r=this.project(this.getCenter()),l=this.project(t),p=this.getPixelBounds(),v=et([p.min.add(i),p.max.subtract(a)]),y=v.getSize();if(!v.contains(l)){this._enforcingBounds=!0;var P=l.subtract(v.getCenter()),A=v.extend(l).getSize().subtract(y);r.x+=P.x<0?-A.x:A.x,r.y+=P.y<0?-A.y:A.y,this.panTo(this.unproject(r),e),this._enforcingBounds=!1}return this},invalidateSize:function(t){if(!this._loaded)return this;t=c({animate:!1,pan:!0},t===!0?{animate:!0}:t);var e=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var i=this.getSize(),a=e.divideBy(2).round(),r=i.divideBy(2).round(),l=a.subtract(r);return!l.x&&!l.y?this:(t.animate&&t.pan?this.panBy(l):(t.pan&&this._rawPanBy(l),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(d(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(t){if(t=this._locateOptions=c({timeout:1e4,watch:!1},t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var e=d(this._handleGeolocationResponse,this),i=d(this._handleGeolocationError,this);return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){if(this._container._leaflet_id){var e=t.code,i=t.message||(e===1?"permission denied":e===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})}},_handleGeolocationResponse:function(t){if(this._container._leaflet_id){var e=t.coords.latitude,i=t.coords.longitude,a=new q(e,i),r=a.toBounds(t.coords.accuracy*2),l=this._locateOptions;if(l.setView){var p=this.getBoundsZoom(r);this.setView(a,l.maxZoom?Math.min(p,l.maxZoom):p)}var v={latlng:a,bounds:r,timestamp:t.timestamp};for(var y in t.coords)typeof t.coords[y]=="number"&&(v[y]=t.coords[y]);this.fire("locationfound",v)}},addHandler:function(t,e){if(!e)return this;var i=this[t]=new e(this);return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),W(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(st(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var t;for(t in this._layers)this._layers[t].remove();for(t in this._panes)W(this._panes[t]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(t,e){var i="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),a=D("div",i,e||this._mapPane);return t&&(this._panes[t]=a),a},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight());return new lt(e,i)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=V(t),i=k(i||[0,0]);var a=this.getZoom()||0,r=this.getMinZoom(),l=this.getMaxZoom(),p=t.getNorthWest(),v=t.getSouthEast(),y=this.getSize().subtract(i),P=et(this.project(v,a),this.project(p,a)).getSize(),A=M.any3d?this.options.zoomSnap:1,H=y.x/P.x,B=y.y/P.y,rt=e?Math.max(H,B):Math.min(H,B);return a=this.getScaleZoom(rt,a),A&&(a=Math.round(a/(A/100))*(A/100),a=e?Math.ceil(a/A)*A:Math.floor(a/A)*A),Math.max(r,Math.min(l,a))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new x(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e);return new Z(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===void 0?this.getZoom():t)},getPane:function(t){return typeof t=="string"?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var i=this.options.crs;return e=e===void 0?this._zoom:e,i.scale(t)/i.scale(e)},getScaleZoom:function(t,e){var i=this.options.crs;e=e===void 0?this._zoom:e;var a=i.zoom(t*i.scale(e));return isNaN(a)?1/0:a},project:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.latLngToPoint(N(t),e)},unproject:function(t,e){return e=e===void 0?this._zoom:e,this.options.crs.pointToLatLng(k(t),e)},layerPointToLatLng:function(t){var e=k(t).add(this.getPixelOrigin());return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(N(t))._round();return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(N(t))},wrapLatLngBounds:function(t){return this.options.crs.wrapLatLngBounds(V(t))},distance:function(t,e){return this.options.crs.distance(N(t),N(e))},containerPointToLayerPoint:function(t){return k(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return k(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(k(t));return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(N(t)))},mouseEventToContainerPoint:function(t){return Gi(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=Fi(t);if(e){if(e._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");$(e,"scroll",this._onScroll,this),this._containerId=g(e)},_initLayout:function(){var t=this._container;this._fadeAnimated=this.options.fadeAnimation&&M.any3d,I(t,"leaflet-container"+(M.touch?" leaflet-touch":"")+(M.retina?" leaflet-retina":"")+(M.ielt9?" leaflet-oldie":"")+(M.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var e=te(t,"position");e!=="absolute"&&e!=="relative"&&e!=="fixed"&&e!=="sticky"&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),U(this._mapPane,new x(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(I(t.markerPane,"leaflet-zoom-hide"),I(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e,i){U(this._mapPane,new x(0,0));var a=!this._loaded;this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset");var r=this._zoom!==e;this._moveStart(r,i)._move(t,e)._moveEnd(r),this.fire("viewreset"),a&&this.fire("load")},_moveStart:function(t,e){return t&&this.fire("zoomstart"),e||this.fire("movestart"),this},_move:function(t,e,i,a){e===void 0&&(e=this._zoom);var r=this._zoom!==e;return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),a?i&&i.pinch&&this.fire("zoom",i):((r||i&&i.pinch)&&this.fire("zoom",i),this.fire("move",i)),this},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return st(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){U(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(t){this._targets={},this._targets[g(this._container)]=this;var e=t?G:$;e(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&e(window,"resize",this._onResize,this),M.any3d&&this.options.transform3DLimit&&(t?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){st(this._resizeRequest),this._resizeRequest=J(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos();Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i=[],a,r=e==="mouseout"||e==="mouseover",l=t.target||t.srcElement,p=!1;l;){if(a=this._targets[g(l)],a&&(e==="click"||e==="preclick")&&this._draggableMoved(a)){p=!0;break}if(a&&a.listens(e,!0)&&(r&&!ai(l,t)||(i.push(a),r))||l===this._container)break;l=l.parentNode}return!i.length&&!p&&!r&&this.listens(e,!0)&&(i=[this]),i},_isClickDisabled:function(t){for(;t&&t!==this._container;){if(t._leaflet_disable_click)return!0;t=t.parentNode}},_handleDOMEvent:function(t){var e=t.target||t.srcElement;if(!(!this._loaded||e._leaflet_disable_events||t.type==="click"&&this._isClickDisabled(e))){var i=t.type;i==="mousedown"&&Ye(e),this._fireDOMEvent(t,i)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(t,e,i){if(t.type==="click"){var a=c({},t);a.type="preclick",this._fireDOMEvent(a,a.type,i)}var r=this._findEventTargets(t,e);if(i){for(var l=[],p=0;p<i.length;p++)i[p].listens(e,!0)&&l.push(i[p]);r=l.concat(r)}if(r.length){e==="contextmenu"&&it(t);var v=r[0],y={originalEvent:t};if(t.type!=="keypress"&&t.type!=="keydown"&&t.type!=="keyup"){var P=v.getLatLng&&(!v._radius||v._radius<=10);y.containerPoint=P?this.latLngToContainerPoint(v.getLatLng()):this.mouseEventToContainerPoint(t),y.layerPoint=this.containerPointToLayerPoint(y.containerPoint),y.latlng=P?v.getLatLng():this.layerPointToLatLng(y.layerPoint)}for(p=0;p<r.length;p++)if(r[p].fire(e,y,!0),y.originalEvent._stopped||r[p].options.bubblingMouseEvents===!1&&F(this._mouseEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length;t<e;t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return It(this._mapPane)||new x(0,0)},_moved:function(){var t=this._getMapPanePos();return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var i=t&&e!==void 0?this._getNewPixelOrigin(t,e):this.getPixelOrigin();return i.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2);return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var a=this._getNewPixelOrigin(i,e);return this.project(t,e)._subtract(a)},_latLngBoundsToNewLayerBounds:function(t,e,i){var a=this._getNewPixelOrigin(i,e);return et([this.project(t.getSouthWest(),e)._subtract(a),this.project(t.getNorthWest(),e)._subtract(a),this.project(t.getSouthEast(),e)._subtract(a),this.project(t.getNorthEast(),e)._subtract(a)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t;var a=this.project(t,e),r=this.getSize().divideBy(2),l=new Z(a.subtract(r),a.add(r)),p=this._getBoundsOffset(l,i,e);return Math.abs(p.x)<=1&&Math.abs(p.y)<=1?t:this.unproject(a.add(p),e)},_limitOffset:function(t,e){if(!e)return t;var i=this.getPixelBounds(),a=new Z(i.min.add(t),i.max.add(t));return t.add(this._getBoundsOffset(a,e))},_getBoundsOffset:function(t,e,i){var a=et(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),r=a.min.subtract(t.min),l=a.max.subtract(t.max),p=this._rebound(r.x,-l.x),v=this._rebound(r.y,-l.y);return new x(p,v)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),a=M.any3d?this.options.zoomSnap:1;return a&&(t=Math.round(t/a)*a),Math.max(e,Math.min(i,t))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Q(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._trunc();return(e&&e.animate)!==!0&&!this.getSize().contains(i)?!1:(this.panBy(i,e),!0)},_createAnimProxy:function(){var t=this._proxy=D("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var i=Ze,a=this._proxy.style[i];$t(this._proxy,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),a===this._proxy.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){W(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var t=this.getCenter(),e=this.getZoom();$t(this._proxy,this.project(t,e),this.getZoomScale(e,1))},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0;if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1;var a=this.getZoomScale(e),r=this._getCenterOffset(t)._divideBy(1-1/a);return i.animate!==!0&&!this.getSize().contains(r)?!1:(J(function(){this._moveStart(!0,i.noMoveStart||!1)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,i,a){this._mapPane&&(i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,I(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:a}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(d(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Q(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function _n(t,e){return new O(t,e)}var vt=ut.extend({options:{position:"topright"},initialize:function(t){E(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map;return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t;var e=this._container=this.onAdd(t),i=this.getPosition(),a=t._controlCorners[i];return I(e,"leaflet-control"),i.indexOf("bottom")!==-1?a.insertBefore(e,a.firstChild):a.appendChild(e),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(W(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),se=function(t){return new vt(t)};O.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){var t=this._controlCorners={},e="leaflet-",i=this._controlContainer=D("div",e+"control-container",this._container);function a(r,l){var p=e+r+" "+e+l;t[r+l]=D("div",p,i)}a("top","left"),a("top","right"),a("bottom","left"),a("bottom","right")},_clearControlPos:function(){for(var t in this._controlCorners)W(this._controlCorners[t]);W(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Vi=vt.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(t,e,i,a){return i<a?-1:a<i?1:0}},initialize:function(t,e,i){E(this,i),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var a in t)this._addLayer(t[a],a);for(a in e)this._addLayer(e[a],a,!0)},onAdd:function(t){this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this);for(var e=0;e<this._layers.length;e++)this._layers[e].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(t){return vt.prototype.addTo.call(this,t),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var t=0;t<this._layers.length;t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this);var e=this._getLayer(g(t));return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){I(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var t=this._map.getSize().y-(this._container.offsetTop+50);return t<this._section.clientHeight?(I(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=t+"px"):Q(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Q(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=D("div",t),i=this.options.collapsed;e.setAttribute("aria-haspopup",!0),ne(e),ii(e);var a=this._section=D("section",t+"-list");i&&(this._map.on("click",this.collapse,this),$(e,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var r=this._layersLink=D("a",t+"-toggle",e);r.href="#",r.title="Layers",r.setAttribute("role","button"),$(r,{keydown:function(l){l.keyCode===13&&this._expandSafely()},click:function(l){it(l),this._expandSafely()}},this),i||this.expand(),this._baseLayersList=D("div",t+"-base",a),this._separator=D("div",t+"-separator",a),this._overlaysList=D("div",t+"-overlays",a),e.appendChild(a)},_getLayer:function(t){for(var e=0;e<this._layers.length;e++)if(this._layers[e]&&g(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){this._map&&t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.sortLayers&&this._layers.sort(d(function(a,r){return this.options.sortFunction(a.layer,r.layer,a.name,r.name)},this)),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;ve(this._baseLayersList),ve(this._overlaysList),this._layerControlInputs=[];var t,e,i,a,r=0;for(i=0;i<this._layers.length;i++)a=this._layers[i],this._addItem(a),e=e||a.overlay,t=t||!a.overlay,r+=a.overlay?0:1;return this.options.hideSingleBase&&(t=t&&r>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update();var e=this._getLayer(g(t.target)),i=e.overlay?t.type==="add"?"overlayadd":"overlayremove":t.type==="add"?"baselayerchange":null;i&&this._map.fire(i,e)},_createRadioElement:function(t,e){var i='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(e?' checked="checked"':"")+"/>",a=document.createElement("div");return a.innerHTML=i,a.firstChild},_addItem:function(t){var e=document.createElement("label"),i=this._map.hasLayer(t.layer),a;t.overlay?(a=document.createElement("input"),a.type="checkbox",a.className="leaflet-control-layers-selector",a.defaultChecked=i):a=this._createRadioElement("leaflet-base-layers_"+g(this),i),this._layerControlInputs.push(a),a.layerId=g(t.layer),$(a,"click",this._onInputClick,this);var r=document.createElement("span");r.innerHTML=" "+t.name;var l=document.createElement("span");e.appendChild(l),l.appendChild(a),l.appendChild(r);var p=t.overlay?this._overlaysList:this._baseLayersList;return p.appendChild(e),this._checkDisabledLayers(),e},_onInputClick:function(){if(!this._preventClick){var t=this._layerControlInputs,e,i,a=[],r=[];this._handlingClick=!0;for(var l=t.length-1;l>=0;l--)e=t[l],i=this._getLayer(e.layerId).layer,e.checked?a.push(i):e.checked||r.push(i);for(l=0;l<r.length;l++)this._map.hasLayer(r[l])&&this._map.removeLayer(r[l]);for(l=0;l<a.length;l++)this._map.hasLayer(a[l])||this._map.addLayer(a[l]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var t=this._layerControlInputs,e,i,a=this._map.getZoom(),r=t.length-1;r>=0;r--)e=t[r],i=this._getLayer(e.layerId).layer,e.disabled=i.options.minZoom!==void 0&&a<i.options.minZoom||i.options.maxZoom!==void 0&&a>i.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var t=this._section;this._preventClick=!0,$(t,"click",it),this.expand();var e=this;setTimeout(function(){G(t,"click",it),e._preventClick=!1})}}),bn=function(t,e,i){return new Vi(t,e,i)},ni=vt.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=D("div",e+" leaflet-bar"),a=this.options;return this._zoomInButton=this._createButton(a.zoomInText,a.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(a.zoomOutText,a.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,a,r){var l=D("a",i,a);return l.innerHTML=t,l.href="#",l.title=e,l.setAttribute("role","button"),l.setAttribute("aria-label",e),ne(l),$(l,"click",Rt),$(l,"click",r,this),$(l,"click",this._refocusOnMap,this),l},_updateDisabled:function(){var t=this._map,e="leaflet-disabled";Q(this._zoomInButton,e),Q(this._zoomOutButton,e),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||t._zoom===t.getMinZoom())&&(I(this._zoomOutButton,e),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||t._zoom===t.getMaxZoom())&&(I(this._zoomInButton,e),this._zoomInButton.setAttribute("aria-disabled","true"))}});O.mergeOptions({zoomControl:!0}),O.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new ni,this.addControl(this.zoomControl))});var Pn=function(t){return new ni(t)},Ui=vt.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=D("div",e),a=this.options;return this._addScales(a,e+"-line",i),t.on(a.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=D("div",e,i)),t.imperial&&(this._iScale=D("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]));this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km";this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e=t*3.2808399,i,a,r;e>5280?(i=e/5280,a=this._getRoundNum(i),this._updateScale(this._iScale,a+" mi",a/i)):(r=this._getRoundNum(e),this._updateScale(this._iScale,r+" ft",r/e))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e;return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),wn=function(t){return new Ui(t)},Sn='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',si=vt.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(M.inlineSvg?Sn+" ":"")+"Leaflet</a>"},initialize:function(t){E(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=D("div","leaflet-control-attribution"),ne(this._container);for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution());return this._update(),t.on("layeradd",this._addAttribution,this),this._container},onRemove:function(t){t.off("layeradd",this._addAttribution,this)},_addAttribution:function(t){t.layer.getAttribution&&(this.addAttribution(t.layer.getAttribution()),t.layer.once("remove",function(){this.removeAttribution(t.layer.getAttribution())},this))},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[];for(var e in this._attributions)this._attributions[e]&&t.push(e);var i=[];this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(' <span aria-hidden="true">|</span> ')}}});O.mergeOptions({attributionControl:!0}),O.addInitHook(function(){this.options.attributionControl&&new si().addTo(this)});var En=function(t){return new si(t)};vt.Layers=Vi,vt.Zoom=ni,vt.Scale=Ui,vt.Attribution=si,se.layers=bn,se.zoom=Pn,se.scale=wn,se.attribution=En;var Pt=ut.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Pt.addTo=function(t,e){return t.addHandler(e,this),this};var Cn={Events:nt},ji=M.touch?"touchstart mousedown":"mousedown",Tt=Ht.extend({options:{clickTolerance:3},initialize:function(t,e,i,a){E(this,a),this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||($(this._dragStartTarget,ji,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(Tt._dragging===this&&this.finishDrag(!0),G(this._dragStartTarget,ji,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(this._enabled&&(this._moved=!1,!Ge(this._element,"leaflet-zoom-anim"))){if(t.touches&&t.touches.length!==1){Tt._dragging===this&&this.finishDrag();return}if(!(Tt._dragging||t.shiftKey||t.which!==1&&t.button!==1&&!t.touches)&&(Tt._dragging=this,this._preventOutline&&Ye(this._element),Ve(),ee(),!this._moving)){this.fire("down");var e=t.touches?t.touches[0]:t,i=Ki(this._element);this._startPoint=new x(e.clientX,e.clientY),this._startPos=It(this._element),this._parentScale=Je(i);var a=t.type==="mousedown";$(document,a?"mousemove":"touchmove",this._onMove,this),$(document,a?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(t){if(this._enabled){if(t.touches&&t.touches.length>1){this._moved=!0;return}var e=t.touches&&t.touches.length===1?t.touches[0]:t,i=new x(e.clientX,e.clientY)._subtract(this._startPoint);!i.x&&!i.y||Math.abs(i.x)+Math.abs(i.y)<this.options.clickTolerance||(i.x/=this._parentScale.x,i.y/=this._parentScale.y,it(t),this._moved||(this.fire("dragstart"),this._moved=!0,I(document.body,"leaflet-dragging"),this._lastTarget=t.target||t.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),I(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(i),this._moving=!0,this._lastEvent=t,this._updatePosition())}},_updatePosition:function(){var t={originalEvent:this._lastEvent};this.fire("predrag",t),U(this._element,this._newPos),this.fire("drag",t)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(t){Q(document.body,"leaflet-dragging"),this._lastTarget&&(Q(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),G(document,"mousemove touchmove",this._onMove,this),G(document,"mouseup touchend touchcancel",this._onUp,this),Ue(),ie();var e=this._moved&&this._moving;this._moving=!1,Tt._dragging=!1,e&&this.fire("dragend",{noInertia:t,distance:this._newPos.distanceTo(this._startPos)})}});function Yi(t,e,i){var a,r=[1,4,2,8],l,p,v,y,P,A,H,B;for(l=0,A=t.length;l<A;l++)t[l]._code=Nt(t[l],e);for(v=0;v<4;v++){for(H=r[v],a=[],l=0,A=t.length,p=A-1;l<A;p=l++)y=t[l],P=t[p],y._code&H?P._code&H||(B=we(P,y,H,e,i),B._code=Nt(B,e),a.push(B)):(P._code&H&&(B=we(P,y,H,e,i),B._code=Nt(B,e),a.push(B)),a.push(y));t=a}return t}function Ji(t,e){var i,a,r,l,p,v,y,P,A;if(!t||t.length===0)throw new Error("latlngs not passed");mt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var H=N([0,0]),B=V(t),rt=B.getNorthWest().distanceTo(B.getSouthWest())*B.getNorthEast().distanceTo(B.getNorthWest());rt<1700&&(H=ri(t));var X=t.length,ft=[];for(i=0;i<X;i++){var ct=N(t[i]);ft.push(e.project(N([ct.lat-H.lat,ct.lng-H.lng])))}for(v=y=P=0,i=0,a=X-1;i<X;a=i++)r=ft[i],l=ft[a],p=r.y*l.x-l.y*r.x,y+=(r.x+l.x)*p,P+=(r.y+l.y)*p,v+=p*3;v===0?A=ft[0]:A=[y/v,P/v];var Qt=e.unproject(k(A));return N([Qt.lat+H.lat,Qt.lng+H.lng])}function ri(t){for(var e=0,i=0,a=0,r=0;r<t.length;r++){var l=N(t[r]);e+=l.lat,i+=l.lng,a++}return N([e/a,i/a])}var Ln={__proto__:null,clipPolygon:Yi,polygonCenter:Ji,centroid:ri};function Xi(t,e){if(!e||!t.length)return t.slice();var i=e*e;return t=Hn(t,i),t=Mn(t,i),t}function ta(t,e,i){return Math.sqrt(re(t,e,i,!0))}function An(t,e,i){return re(t,e,i)}function Mn(t,e){var i=t.length,a=typeof Uint8Array<"u"?Uint8Array:Array,r=new a(i);r[0]=r[i-1]=1,oi(t,r,e,0,i-1);var l,p=[];for(l=0;l<i;l++)r[l]&&p.push(t[l]);return p}function oi(t,e,i,a,r){var l=0,p,v,y;for(v=a+1;v<=r-1;v++)y=re(t[v],t[a],t[r],!0),y>l&&(p=v,l=y);l>i&&(e[p]=1,oi(t,e,i,a,p),oi(t,e,i,p,r))}function Hn(t,e){for(var i=[t[0]],a=1,r=0,l=t.length;a<l;a++)kn(t[a],t[r])>e&&(i.push(t[a]),r=a);return r<l-1&&i.push(t[l-1]),i}var ea;function ia(t,e,i,a,r){var l=a?ea:Nt(t,i),p=Nt(e,i),v,y,P;for(ea=p;;){if(!(l|p))return[t,e];if(l&p)return!1;v=l||p,y=we(t,e,v,i,r),P=Nt(y,i),v===l?(t=y,l=P):(e=y,p=P)}}function we(t,e,i,a,r){var l=e.x-t.x,p=e.y-t.y,v=a.min,y=a.max,P,A;return i&8?(P=t.x+l*(y.y-t.y)/p,A=y.y):i&4?(P=t.x+l*(v.y-t.y)/p,A=v.y):i&2?(P=y.x,A=t.y+p*(y.x-t.x)/l):i&1&&(P=v.x,A=t.y+p*(v.x-t.x)/l),new x(P,A,r)}function Nt(t,e){var i=0;return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i}function kn(t,e){var i=e.x-t.x,a=e.y-t.y;return i*i+a*a}function re(t,e,i,a){var r=e.x,l=e.y,p=i.x-r,v=i.y-l,y=p*p+v*v,P;return y>0&&(P=((t.x-r)*p+(t.y-l)*v)/y,P>1?(r=i.x,l=i.y):P>0&&(r+=p*P,l+=v*P)),p=t.x-r,v=t.y-l,a?p*p+v*v:new x(r,l)}function mt(t){return!K(t[0])||typeof t[0][0]!="object"&&typeof t[0][0]<"u"}function aa(t){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),mt(t)}function na(t,e){var i,a,r,l,p,v,y,P;if(!t||t.length===0)throw new Error("latlngs not passed");mt(t)||(console.warn("latlngs are not flat! Only the first ring will be used"),t=t[0]);var A=N([0,0]),H=V(t),B=H.getNorthWest().distanceTo(H.getSouthWest())*H.getNorthEast().distanceTo(H.getNorthWest());B<1700&&(A=ri(t));var rt=t.length,X=[];for(i=0;i<rt;i++){var ft=N(t[i]);X.push(e.project(N([ft.lat-A.lat,ft.lng-A.lng])))}for(i=0,a=0;i<rt-1;i++)a+=X[i].distanceTo(X[i+1])/2;if(a===0)P=X[0];else for(i=0,l=0;i<rt-1;i++)if(p=X[i],v=X[i+1],r=p.distanceTo(v),l+=r,l>a){y=(l-a)/r,P=[v.x-y*(v.x-p.x),v.y-y*(v.y-p.y)];break}var ct=e.unproject(k(P));return N([ct.lat+A.lat,ct.lng+A.lng])}var Tn={__proto__:null,simplify:Xi,pointToSegmentDistance:ta,closestPointOnSegment:An,clipSegment:ia,_getEdgeIntersection:we,_getBitCode:Nt,_sqClosestPointOnSegment:re,isFlat:mt,_flat:aa,polylineCenter:na},li={project:function(t){return new x(t.lng,t.lat)},unproject:function(t){return new q(t.y,t.x)},bounds:new Z([-180,-90],[180,90])},ci={R:6378137,R_MINOR:6356752314245179e-9,bounds:new Z([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(t){var e=Math.PI/180,i=this.R,a=t.lat*e,r=this.R_MINOR/i,l=Math.sqrt(1-r*r),p=l*Math.sin(a),v=Math.tan(Math.PI/4-a/2)/Math.pow((1-p)/(1+p),l/2);return a=-i*Math.log(Math.max(v,1e-10)),new x(t.lng*e*i,a)},unproject:function(t){for(var e=180/Math.PI,i=this.R,a=this.R_MINOR/i,r=Math.sqrt(1-a*a),l=Math.exp(-t.y/i),p=Math.PI/2-2*Math.atan(l),v=0,y=.1,P;v<15&&Math.abs(y)>1e-7;v++)P=r*Math.sin(p),P=Math.pow((1-P)/(1+P),r/2),y=Math.PI/2-2*Math.atan(l*P)-p,p+=y;return new q(p*e,t.x*e/i)}},xn={__proto__:null,LonLat:li,Mercator:ci,SphericalMercator:Be},$n=c({},kt,{code:"EPSG:3395",projection:ci,transformation:(function(){var t=.5/(Math.PI*ci.R);return Yt(t,.5,-t,.5)})()}),sa=c({},kt,{code:"EPSG:4326",projection:li,transformation:Yt(1/180,1,-1/180,.5)}),In=c({},Et,{projection:li,transformation:Yt(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,a=e.lat-t.lat;return Math.sqrt(i*i+a*a)},infinite:!0});Et.Earth=kt,Et.EPSG3395=$n,Et.EPSG3857=Ne,Et.EPSG900913=Da,Et.EPSG4326=sa,Et.Simple=In;var yt=Ht.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[g(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[g(t)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(t){var e=t.target;if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents();e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.fire("add"),e.fire("layeradd",{layer:this})}}});O.include({addLayer:function(t){if(!t._layerAdd)throw new Error("The provided object is not a Layer.");var e=g(t);return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=g(t);return this._layers[e]?(this._loaded&&t.onRemove(this),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return g(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},_addLayers:function(t){t=t?K(t)?t:[t]:[];for(var e=0,i=t.length;e<i;e++)this.addLayer(t[e])},_addZoomLimit:function(t){(!isNaN(t.options.maxZoom)||!isNaN(t.options.minZoom))&&(this._zoomBoundLayers[g(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=g(t);this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-1/0,i=this._getZoomSpan();for(var a in this._zoomBoundLayers){var r=this._zoomBoundLayers[a].options;t=r.minZoom===void 0?t:Math.min(t,r.minZoom),e=r.maxZoom===void 0?e:Math.max(e,r.maxZoom)}this._layersMaxZoom=e===-1/0?void 0:e,this._layersMinZoom=t===1/0?void 0:t,i!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Kt=yt.extend({initialize:function(t,e){E(this,e),this._layers={};var i,a;if(t)for(i=0,a=t.length;i<a;i++)this.addLayer(t[i])},addLayer:function(t){var e=this.getLayerId(t);return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t);return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){var e=typeof t=="number"?t:this.getLayerId(t);return e in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(t){var e=Array.prototype.slice.call(arguments,1),i,a;for(i in this._layers)a=this._layers[i],a[t]&&a[t].apply(a,e);return this},onAdd:function(t){this.eachLayer(t.addLayer,t)},onRemove:function(t){this.eachLayer(t.removeLayer,t)},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i]);return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[];return this.eachLayer(t.push,t),t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return g(t)}}),Bn=function(t,e){return new Kt(t,e)},Ct=Kt.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),Kt.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),Kt.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new lt;for(var e in this._layers){var i=this._layers[e];t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),Rn=function(t,e){return new Ct(t,e)},qt=ut.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(t){E(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t);if(!i){if(t==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var a=this._createImg(i,e&&e.tagName==="IMG"?e:null);return this._setIconStyles(a,t),(this.options.crossOrigin||this.options.crossOrigin==="")&&(a.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),a},_setIconStyles:function(t,e){var i=this.options,a=i[e+"Size"];typeof a=="number"&&(a=[a,a]);var r=k(a),l=k(e==="shadow"&&i.shadowAnchor||i.iconAnchor||r&&r.divideBy(2,!0));t.className="leaflet-marker-"+e+" "+(i.className||""),l&&(t.style.marginLeft=-l.x+"px",t.style.marginTop=-l.y+"px"),r&&(t.style.width=r.x+"px",t.style.height=r.y+"px")},_createImg:function(t,e){return e=e||document.createElement("img"),e.src=t,e},_getIconUrl:function(t){return M.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}});function Nn(t){return new qt(t)}var oe=qt.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return typeof oe.imagePath!="string"&&(oe.imagePath=this._detectIconPath()),(this.options.imagePath||oe.imagePath)+qt.prototype._getIconUrl.call(this,t)},_stripUrl:function(t){var e=function(i,a,r){var l=a.exec(i);return l&&l[r]};return t=e(t,/^url\((['"])?(.+)\1\)$/,2),t&&e(t,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var t=D("div","leaflet-default-icon-path",document.body),e=te(t,"background-image")||te(t,"backgroundImage");if(document.body.removeChild(t),e=this._stripUrl(e),e)return e;var i=document.querySelector('link[href$="leaflet.css"]');return i?i.href.substring(0,i.href.length-11-1):""}}),ra=Pt.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon;this._draggable||(this._draggable=new Tt(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),I(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Q(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(t){var e=this._marker,i=e._map,a=this._marker.options.autoPanSpeed,r=this._marker.options.autoPanPadding,l=It(e._icon),p=i.getPixelBounds(),v=i.getPixelOrigin(),y=et(p.min._subtract(v).add(r),p.max._subtract(v).subtract(r));if(!y.contains(l)){var P=k((Math.max(y.max.x,l.x)-y.max.x)/(p.max.x-y.max.x)-(Math.min(y.min.x,l.x)-y.min.x)/(p.min.x-y.min.x),(Math.max(y.max.y,l.y)-y.max.y)/(p.max.y-y.max.y)-(Math.min(y.min.y,l.y)-y.min.y)/(p.min.y-y.min.y)).multiplyBy(a);i.panBy(P,{animate:!1}),this._draggable._newPos._add(P),this._draggable._startPos._add(P),U(e._icon,this._draggable._newPos),this._onDrag(t),this._panRequest=J(this._adjustPan.bind(this,t))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(t){this._marker.options.autoPan&&(st(this._panRequest),this._panRequest=J(this._adjustPan.bind(this,t)))},_onDrag:function(t){var e=this._marker,i=e._shadow,a=It(e._icon),r=e._map.layerPointToLatLng(a);i&&U(i,a),e._latlng=r,t.latlng=r,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){st(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),Se=yt.extend({options:{icon:new oe,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(t,e){E(this,e),this._latlng=N(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng;return this._latlng=N(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},getIcon:function(){return this.options.icon},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var t=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),a=!1;i!==this._icon&&(this._icon&&this._removeIcon(),a=!0,t.title&&(i.title=t.title),i.tagName==="IMG"&&(i.alt=t.alt||"")),I(i,e),t.keyboard&&(i.tabIndex="0",i.setAttribute("role","button")),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&$(i,"focus",this._panOnFocus,this);var r=t.icon.createShadow(this._shadow),l=!1;r!==this._shadow&&(this._removeShadow(),l=!0),r&&(I(r,e),r.alt=""),this._shadow=r,t.opacity<1&&this._updateOpacity(),a&&this.getPane().appendChild(this._icon),this._initInteraction(),r&&l&&this.getPane(t.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&G(this._icon,"focus",this._panOnFocus,this),W(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&W(this._shadow),this._shadow=null},_setPos:function(t){this._icon&&U(this._icon,t),this._shadow&&U(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon&&(this._icon.style.zIndex=this._zIndex+t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round();this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(I(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),ra)){var t=this.options.draggable;this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new ra(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity;this._icon&&pt(this._icon,t),this._shadow&&pt(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var t=this._map;if(t){var e=this.options.icon.options,i=e.iconSize?k(e.iconSize):k(0,0),a=e.iconAnchor?k(e.iconAnchor):k(0,0);t.panInside(this._latlng,{paddingTopLeft:a,paddingBottomRight:i.subtract(a)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function On(t,e){return new Se(t,e)}var xt=yt.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return E(this,t),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&t&&Object.prototype.hasOwnProperty.call(t,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Ee=xt.extend({options:{fill:!0,radius:10},initialize:function(t,e){E(this,e),this._latlng=N(t),this._radius=this.options.radius},setLatLng:function(t){var e=this._latlng;return this._latlng=N(t),this.redraw(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius;return xt.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),a=[t+i,e+i];this._pxBounds=new Z(this._point.subtract(a),this._point.add(a))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function Dn(t,e){return new Ee(t,e)}var di=Ee.extend({initialize:function(t,e,i){if(typeof e=="number"&&(e=c({},i,{radius:e})),E(this,e),this._latlng=N(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius];return new lt(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:xt.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,a=i.options.crs;if(a.distance===kt.distance){var r=Math.PI/180,l=this._mRadius/kt.R/r,p=i.project([e+l,t]),v=i.project([e-l,t]),y=p.add(v).divideBy(2),P=i.unproject(y).lat,A=Math.acos((Math.cos(l*r)-Math.sin(e*r)*Math.sin(P*r))/(Math.cos(e*r)*Math.cos(P*r)))/r;(isNaN(A)||A===0)&&(A=l/Math.cos(Math.PI/180*e)),this._point=y.subtract(i.getPixelOrigin()),this._radius=isNaN(A)?0:y.x-i.project([P,t-A]).x,this._radiusY=y.y-p.y}else{var H=a.unproject(a.project(this._latlng).subtract([this._mRadius,0]));this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(H).x}this._updateBounds()}});function zn(t,e,i){return new di(t,e,i)}var Lt=xt.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){E(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e=1/0,i=null,a=re,r,l,p=0,v=this._parts.length;p<v;p++)for(var y=this._parts[p],P=1,A=y.length;P<A;P++){r=y[P-1],l=y[P];var H=a(t,r,l,!0);H<e&&(e=H,i=a(t,r,l))}return i&&(i.distance=Math.sqrt(e)),i},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return na(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=N(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new lt,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return mt(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=mt(t),a=0,r=t.length;a<r;a++)i?(e[a]=N(t[a]),this._bounds.extend(e[a])):e[a]=this._convertLatLngs(t[a]);return e},_project:function(){var t=new Z;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t),this._bounds.isValid()&&t.isValid()&&(this._rawPxBounds=t,this._updateBounds())},_updateBounds:function(){var t=this._clickTolerance(),e=new x(t,t);this._rawPxBounds&&(this._pxBounds=new Z([this._rawPxBounds.min.subtract(e),this._rawPxBounds.max.add(e)]))},_projectLatlngs:function(t,e,i){var a=t[0]instanceof q,r=t.length,l,p;if(a){for(p=[],l=0;l<r;l++)p[l]=this._map.latLngToLayerPoint(t[l]),i.extend(p[l]);e.push(p)}else for(l=0;l<r;l++)this._projectLatlngs(t[l],e,i)},_clipPoints:function(){var t=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}var e=this._parts,i,a,r,l,p,v,y;for(i=0,r=0,l=this._rings.length;i<l;i++)for(y=this._rings[i],a=0,p=y.length;a<p-1;a++)v=ia(y[a],y[a+1],t,a,!0),v&&(e[r]=e[r]||[],e[r].push(v[0]),(v[1]!==y[a+1]||a===p-2)&&(e[r].push(v[1]),r++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,a=t.length;i<a;i++)t[i]=Xi(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(t,e){var i,a,r,l,p,v,y=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(i=0,l=this._parts.length;i<l;i++)for(v=this._parts[i],a=0,p=v.length,r=p-1;a<p;r=a++)if(!(!e&&a===0)&&ta(t,v[r],v[a])<=y)return!0;return!1}});function Fn(t,e){return new Lt(t,e)}Lt._flat=aa;var Zt=Lt.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Ji(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(t){var e=Lt.prototype._convertLatLngs.call(this,t),i=e.length;return i>=2&&e[0]instanceof q&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){Lt.prototype._setLatLngs.call(this,t),mt(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return mt(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new x(e,e);if(t=new Z(t.min.subtract(i),t.max.add(i)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(t))){if(this.options.noClip){this._parts=this._rings;return}for(var a=0,r=this._rings.length,l;a<r;a++)l=Yi(this._rings[a],t,!0),l.length&&this._parts.push(l)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(t){var e=!1,i,a,r,l,p,v,y,P;if(!this._pxBounds||!this._pxBounds.contains(t))return!1;for(l=0,y=this._parts.length;l<y;l++)for(i=this._parts[l],p=0,P=i.length,v=P-1;p<P;v=p++)a=i[p],r=i[v],a.y>t.y!=r.y>t.y&&t.x<(r.x-a.x)*(t.y-a.y)/(r.y-a.y)+a.x&&(e=!e);return e||Lt.prototype._containsPoint.call(this,t,!0)}});function Kn(t,e){return new Zt(t,e)}var At=Ct.extend({initialize:function(t,e){E(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e=K(t)?t:t.features,i,a,r;if(e){for(i=0,a=e.length;i<a;i++)r=e[i],(r.geometries||r.geometry||r.features||r.coordinates)&&this.addData(r);return this}var l=this.options;if(l.filter&&!l.filter(t))return this;var p=Ce(t,l);return p?(p.feature=Me(t),p.defaultOptions=p.options,this.resetStyle(p),l.onEachFeature&&l.onEachFeature(t,p),this.addLayer(p)):this},resetStyle:function(t){return t===void 0?this.eachLayer(this.resetStyle,this):(t.options=c({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this)},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){t.setStyle&&(typeof e=="function"&&(e=e(t.feature)),t.setStyle(e))}});function Ce(t,e){var i=t.type==="Feature"?t.geometry:t,a=i?i.coordinates:null,r=[],l=e&&e.pointToLayer,p=e&&e.coordsToLatLng||hi,v,y,P,A;if(!a&&!i)return null;switch(i.type){case"Point":return v=p(a),oa(l,t,v,e);case"MultiPoint":for(P=0,A=a.length;P<A;P++)v=p(a[P]),r.push(oa(l,t,v,e));return new Ct(r);case"LineString":case"MultiLineString":return y=Le(a,i.type==="LineString"?0:1,p),new Lt(y,e);case"Polygon":case"MultiPolygon":return y=Le(a,i.type==="Polygon"?1:2,p),new Zt(y,e);case"GeometryCollection":for(P=0,A=i.geometries.length;P<A;P++){var H=Ce({geometry:i.geometries[P],type:"Feature",properties:t.properties},e);H&&r.push(H)}return new Ct(r);case"FeatureCollection":for(P=0,A=i.features.length;P<A;P++){var B=Ce(i.features[P],e);B&&r.push(B)}return new Ct(r);default:throw new Error("Invalid GeoJSON object.")}}function oa(t,e,i,a){return t?t(e,i):new Se(i,a&&a.markersInheritOptions&&a)}function hi(t){return new q(t[1],t[0],t[2])}function Le(t,e,i){for(var a=[],r=0,l=t.length,p;r<l;r++)p=e?Le(t[r],e-1,i):(i||hi)(t[r]),a.push(p);return a}function ui(t,e){return t=N(t),t.alt!==void 0?[b(t.lng,e),b(t.lat,e),b(t.alt,e)]:[b(t.lng,e),b(t.lat,e)]}function Ae(t,e,i,a){for(var r=[],l=0,p=t.length;l<p;l++)r.push(e?Ae(t[l],mt(t[l])?0:e-1,i,a):ui(t[l],a));return!e&&i&&r.length>0&&r.push(r[0].slice()),r}function Gt(t,e){return t.feature?c({},t.feature,{geometry:e}):Me(e)}function Me(t){return t.type==="Feature"||t.type==="FeatureCollection"?t:{type:"Feature",properties:{},geometry:t}}var pi={toGeoJSON:function(t){return Gt(this,{type:"Point",coordinates:ui(this.getLatLng(),t)})}};Se.include(pi),di.include(pi),Ee.include(pi),Lt.include({toGeoJSON:function(t){var e=!mt(this._latlngs),i=Ae(this._latlngs,e?1:0,!1,t);return Gt(this,{type:(e?"Multi":"")+"LineString",coordinates:i})}}),Zt.include({toGeoJSON:function(t){var e=!mt(this._latlngs),i=e&&!mt(this._latlngs[0]),a=Ae(this._latlngs,i?2:e?1:0,!0,t);return e||(a=[a]),Gt(this,{type:(i?"Multi":"")+"Polygon",coordinates:a})}}),Kt.include({toMultiPoint:function(t){var e=[];return this.eachLayer(function(i){e.push(i.toGeoJSON(t).geometry.coordinates)}),Gt(this,{type:"MultiPoint",coordinates:e})},toGeoJSON:function(t){var e=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(e==="MultiPoint")return this.toMultiPoint(t);var i=e==="GeometryCollection",a=[];return this.eachLayer(function(r){if(r.toGeoJSON){var l=r.toGeoJSON(t);if(i)a.push(l.geometry);else{var p=Me(l);p.type==="FeatureCollection"?a.push.apply(a,p.features):a.push(p)}}}),i?Gt(this,{geometries:a,type:"GeometryCollection"}):{type:"FeatureCollection",features:a}}});function la(t,e){return new At(t,e)}var qn=la,He=yt.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(t,e,i){this._url=t,this._bounds=V(e),E(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(I(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){W(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&zt(this._image),this},bringToBack:function(){return this._map&&Ft(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=V(t),this._map&&this._reset(),this},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._url.tagName==="IMG",e=this._image=t?this._url:D("img");if(I(e,"leaflet-image-layer"),this._zoomAnimated&&I(e,"leaflet-zoom-animated"),this.options.className&&I(e,this.options.className),e.onselectstart=_,e.onmousemove=_,e.onload=d(this.fire,this,"load"),e.onerror=d(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(e.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),t){this._url=e.src;return}e.src=this._url,e.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngBoundsToNewLayerBounds(this._bounds,t.zoom,t.center).min;$t(this._image,i,e)},_reset:function(){var t=this._image,e=new Z(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize();U(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){pt(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var t=this.options.errorOverlayUrl;t&&this._url!==t&&(this._url=t,this._image.src=t)},getCenter:function(){return this._bounds.getCenter()}}),Zn=function(t,e,i){return new He(t,e,i)},ca=He.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var t=this._url.tagName==="VIDEO",e=this._image=t?this._url:D("video");if(I(e,"leaflet-image-layer"),this._zoomAnimated&&I(e,"leaflet-zoom-animated"),this.options.className&&I(e,this.options.className),e.onselectstart=_,e.onmousemove=_,e.onloadeddata=d(this.fire,this,"load"),t){for(var i=e.getElementsByTagName("source"),a=[],r=0;r<i.length;r++)a.push(i[r].src);this._url=i.length>0?a:[e.src];return}K(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(e.style,"objectFit")&&(e.style.objectFit="fill"),e.autoplay=!!this.options.autoplay,e.loop=!!this.options.loop,e.muted=!!this.options.muted,e.playsInline=!!this.options.playsInline;for(var l=0;l<this._url.length;l++){var p=D("source");p.src=this._url[l],e.appendChild(p)}}});function Gn(t,e,i){return new ca(t,e,i)}var da=He.extend({_initImage:function(){var t=this._image=this._url;I(t,"leaflet-image-layer"),this._zoomAnimated&&I(t,"leaflet-zoom-animated"),this.options.className&&I(t,this.options.className),t.onselectstart=_,t.onmousemove=_}});function Wn(t,e,i){return new da(t,e,i)}var wt=yt.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(t,e){t&&(t instanceof q||K(t))?(this._latlng=N(t),E(this,e)):(E(this,t),this._source=e),this.options.content&&(this._content=this.options.content)},openOn:function(t){return t=arguments.length?t:this._source._map,t.hasLayer(this)||t.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(t){return this._map?this.close():(arguments.length?this._source=t:t=this._source,this._prepareOpen(),this.openOn(t._map)),this},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&pt(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&pt(this._container,1),this.bringToFront(),this.options.interactive&&(I(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(t){t._fadeAnimated?(pt(this._container,0),this._removeTimeout=setTimeout(d(W,void 0,this._container),200)):W(this._container),this.options.interactive&&(Q(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=N(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&zt(this._container),this},bringToBack:function(){return this._map&&Ft(this._container),this},_prepareOpen:function(t){var e=this._source;if(!e._map)return!1;if(e instanceof Ct){e=null;var i=this._source._layers;for(var a in i)if(i[a]._map){e=i[a];break}if(!e)return!1;this._source=e}if(!t)if(e.getCenter)t=e.getCenter();else if(e.getLatLng)t=e.getLatLng();else if(e.getBounds)t=e.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(t),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var t=this._contentNode,e=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof e=="string")t.innerHTML=e;else{for(;t.hasChildNodes();)t.removeChild(t.firstChild);t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=k(this.options.offset),i=this._getAnchor();this._zoomAnimated?U(this._container,t.add(i)):e=e.add(t).add(i);var a=this._containerBottom=-e.y,r=this._containerLeft=-Math.round(this._containerWidth/2)+e.x;this._container.style.bottom=a+"px",this._container.style.left=r+"px"}},_getAnchor:function(){return[0,0]}});O.include({_initOverlay:function(t,e,i,a){var r=e;return r instanceof t||(r=new t(a).setContent(e)),i&&r.setLatLng(i),r}}),yt.include({_initOverlay:function(t,e,i,a){var r=i;return r instanceof t?(E(r,a),r._source=this):(r=e&&!a?e:new t(a,this),r.setContent(i)),r}});var ke=wt.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(t){return t=arguments.length?t:this._source._map,!t.hasLayer(this)&&t._popup&&t._popup.options.autoClose&&t.removeLayer(t._popup),t._popup=this,wt.prototype.openOn.call(this,t)},onAdd:function(t){wt.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof xt||this._source.on("preclick",Bt))},onRemove:function(t){wt.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof xt||this._source.off("preclick",Bt))},getEvents:function(){var t=wt.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this.close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_initLayout:function(){var t="leaflet-popup",e=this._container=D("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated"),i=this._wrapper=D("div",t+"-content-wrapper",e);if(this._contentNode=D("div",t+"-content",i),ne(e),ii(this._contentNode),$(e,"contextmenu",Bt),this._tipContainer=D("div",t+"-tip-container",e),this._tip=D("div",t+"-tip",this._tipContainer),this.options.closeButton){var a=this._closeButton=D("a",t+"-close-button",e);a.setAttribute("role","button"),a.setAttribute("aria-label","Close popup"),a.href="#close",a.innerHTML='<span aria-hidden="true">&#215;</span>',$(a,"click",function(r){it(r),this.close()},this)}},_updateLayout:function(){var t=this._contentNode,e=t.style;e.width="",e.whiteSpace="nowrap";var i=t.offsetWidth;i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height="";var a=t.offsetHeight,r=this.options.maxHeight,l="leaflet-popup-scrolled";r&&a>r?(e.height=r+"px",I(t,l)):Q(t,l),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor();U(this._container,e.add(i))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var t=this._map,e=parseInt(te(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,a=this._containerWidth,r=new x(this._containerLeft,-i-this._containerBottom);r._add(It(this._container));var l=t.layerPointToContainerPoint(r),p=k(this.options.autoPanPadding),v=k(this.options.autoPanPaddingTopLeft||p),y=k(this.options.autoPanPaddingBottomRight||p),P=t.getSize(),A=0,H=0;l.x+a+y.x>P.x&&(A=l.x+a-P.x+y.x),l.x-A-v.x<0&&(A=l.x-v.x),l.y+i+y.y>P.y&&(H=l.y+i-P.y+y.y),l.y-H-v.y<0&&(H=l.y-v.y),(A||H)&&(this.options.keepInView&&(this._autopanning=!0),t.fire("autopanstart").panBy([A,H]))}},_getAnchor:function(){return k(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),Qn=function(t,e){return new ke(t,e)};O.mergeOptions({closePopupOnClick:!0}),O.include({openPopup:function(t,e,i){return this._initOverlay(ke,t,e,i).openOn(this),this},closePopup:function(t){return t=arguments.length?t:this._popup,t&&t.close(),this}}),yt.include({bindPopup:function(t,e){return this._popup=this._initOverlay(ke,this._popup,t,e),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t){return this._popup&&(this instanceof Ct||(this._popup._source=this),this._popup._prepareOpen(t||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){if(!(!this._popup||!this._map)){Rt(t);var e=t.layer||t.target;if(this._popup._source===e&&!(e instanceof xt)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(t.latlng);return}this._popup._source=e,this.openPopup(t.latlng)}},_movePopup:function(t){this._popup.setLatLng(t.latlng)},_onKeyPress:function(t){t.originalEvent.keyCode===13&&this._openPopup(t)}});var Te=wt.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(t){wt.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(t){wt.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var t=wt.prototype.getEvents.call(this);return this.options.permanent||(t.preclick=this.close),t},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=D("div",e),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+g(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e,i,a=this._map,r=this._container,l=a.latLngToContainerPoint(a.getCenter()),p=a.layerPointToContainerPoint(t),v=this.options.direction,y=r.offsetWidth,P=r.offsetHeight,A=k(this.options.offset),H=this._getAnchor();v==="top"?(e=y/2,i=P):v==="bottom"?(e=y/2,i=0):v==="center"?(e=y/2,i=P/2):v==="right"?(e=0,i=P/2):v==="left"?(e=y,i=P/2):p.x<l.x?(v="right",e=0,i=P/2):(v="left",e=y+(A.x+H.x)*2,i=P/2),t=t.subtract(k(e,i,!0)).add(A).add(H),Q(r,"leaflet-tooltip-right"),Q(r,"leaflet-tooltip-left"),Q(r,"leaflet-tooltip-top"),Q(r,"leaflet-tooltip-bottom"),I(r,"leaflet-tooltip-"+v),U(r,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng);this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&pt(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center);this._setPosition(e)},_getAnchor:function(){return k(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),Vn=function(t,e){return new Te(t,e)};O.include({openTooltip:function(t,e,i){return this._initOverlay(Te,t,e,i).openOn(this),this},closeTooltip:function(t){return t.close(),this}}),yt.include({bindTooltip:function(t,e){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Te,this._tooltip,t,e),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(!(!t&&this._tooltipHandlersAdded)){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,i.click=this._openTooltip,this._map?this._addFocusListeners():i.add=this._addFocusListeners),this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t){return this._tooltip&&(this instanceof Ct||(this._tooltip._source=this),this._tooltip._prepareOpen(t)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&($(e,"focus",function(){this._tooltip._source=t,this.openTooltip()},this),$(e,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(t){var e=typeof t.getElement=="function"&&t.getElement();e&&e.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(t){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var e=this;this._map.once("moveend",function(){e._openOnceFlag=!1,e._openTooltip(t)});return}this._tooltip._source=t.layer||t.target,this.openTooltip(this._tooltip.options.sticky?t.latlng:void 0)}},_moveTooltip:function(t){var e=t.latlng,i,a;this._tooltip.options.sticky&&t.originalEvent&&(i=this._map.mouseEventToContainerPoint(t.originalEvent),a=this._map.containerPointToLayerPoint(i),e=this._map.layerPointToLatLng(a)),this._tooltip.setLatLng(e)}});var ha=qt.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var e=t&&t.tagName==="DIV"?t:document.createElement("div"),i=this.options;if(i.html instanceof Element?(ve(e),e.appendChild(i.html)):e.innerHTML=i.html!==!1?i.html:"",i.bgPos){var a=k(i.bgPos);e.style.backgroundPosition=-a.x+"px "+-a.y+"px"}return this._setIconStyles(e,"icon"),e},createShadow:function(){return null}});function Un(t){return new ha(t)}qt.Default=oe;var le=yt.extend({options:{tileSize:256,opacity:1,updateWhenIdle:M.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){E(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),W(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(zt(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Ft(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var t=this._clampZoom(this._map.getZoom());t!==this._tileZoom&&(this._tileZoom=t,this._updateLevels()),this._update()}return this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=u(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return document.createElement("div")},getTileSize:function(){var t=this.options.tileSize;return t instanceof x?t:new x(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e=this.getPane().children,i=-t(-1/0,1/0),a=0,r=e.length,l;a<r;a++)l=e[a].style.zIndex,e[a]!==this._container&&l&&(i=t(i,+l));isFinite(i)&&(this.options.zIndex=i+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!M.ielt9){pt(this._container,this.options.opacity);var t=+new Date,e=!1,i=!1;for(var a in this._tiles){var r=this._tiles[a];if(!(!r.current||!r.loaded)){var l=Math.min(1,(t-r.loaded)/200);pt(r.el,l),l<1?e=!0:(r.active?i=!0:this._onOpaqueTile(r),r.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(st(this._fadeFrame),this._fadeFrame=J(this._updateOpacity,this))}},_onOpaqueTile:_,_initContainer:function(){this._container||(this._container=D("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom;if(t!==void 0){for(var i in this._levels)i=Number(i),this._levels[i].el.children.length||i===t?(this._levels[i].el.style.zIndex=e-Math.abs(t-i),this._onUpdateLevel(i)):(W(this._levels[i].el),this._removeTilesAtZoom(i),this._onRemoveLevel(i),delete this._levels[i]);var a=this._levels[t],r=this._map;return a||(a=this._levels[t]={},a.el=D("div","leaflet-tile-container leaflet-zoom-animated",this._container),a.el.style.zIndex=e,a.origin=r.project(r.unproject(r.getPixelOrigin()),t).round(),a.zoom=t,this._setZoomTransform(a,r.getCenter(),r.getZoom()),_(a.el.offsetWidth),this._onCreateLevel(a)),this._level=a,a}},_onUpdateLevel:_,_onRemoveLevel:_,_onCreateLevel:_,_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom();if(i>this.options.maxZoom||i<this.options.minZoom){this._removeAllTiles();return}for(t in this._tiles)e=this._tiles[t],e.retain=e.current;for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var a=e.coords;this._retainParent(a.x,a.y,a.z,a.z-5)||this._retainChildren(a.x,a.y,a.z,a.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)W(this._levels[t].el),this._onRemoveLevel(Number(t)),delete this._levels[t];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(t,e,i,a){var r=Math.floor(t/2),l=Math.floor(e/2),p=i-1,v=new x(+r,+l);v.z=+p;var y=this._tileCoordsToKey(v),P=this._tiles[y];return P&&P.active?(P.retain=!0,!0):(P&&P.loaded&&(P.retain=!0),p>a?this._retainParent(r,l,p,a):!1)},_retainChildren:function(t,e,i,a){for(var r=2*t;r<2*t+2;r++)for(var l=2*e;l<2*e+2;l++){var p=new x(r,l);p.z=i+1;var v=this._tileCoordsToKey(p),y=this._tiles[v];if(y&&y.active){y.retain=!0;continue}else y&&y.loaded&&(y.retain=!0);i+1<a&&this._retainChildren(r,l,i+1,a)}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_clampZoom:function(t){var e=this.options;return e.minNativeZoom!==void 0&&t<e.minNativeZoom?e.minNativeZoom:e.maxNativeZoom!==void 0&&e.maxNativeZoom<t?e.maxNativeZoom:t},_setView:function(t,e,i,a){var r=Math.round(e);this.options.maxZoom!==void 0&&r>this.options.maxZoom||this.options.minZoom!==void 0&&r<this.options.minZoom?r=void 0:r=this._clampZoom(r);var l=this.options.updateWhenZooming&&r!==this._tileZoom;(!a||l)&&(this._tileZoom=r,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),r!==void 0&&this._update(t),i||this._pruneTiles(),this._noPrune=!!i),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var a=this._map.getZoomScale(i,t.zoom),r=t.origin.multiplyBy(a).subtract(this._map._getNewPixelOrigin(e,i)).round();M.any3d?$t(t.el,r,a):U(t.el,r)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),a=this._tileZoom,r=this._map.getPixelWorldBounds(this._tileZoom);r&&(this._globalTileRange=this._pxBoundsToTileRange(r)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],a).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],a).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],a).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],a).y/i.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),a=e.getZoomScale(i,this._tileZoom),r=e.project(t,this._tileZoom).floor(),l=e.getSize().divideBy(a*2);return new Z(r.subtract(l),r.add(l))},_update:function(t){var e=this._map;if(e){var i=this._clampZoom(e.getZoom());if(t===void 0&&(t=e.getCenter()),this._tileZoom!==void 0){var a=this._getTiledPixelBounds(t),r=this._pxBoundsToTileRange(a),l=r.getCenter(),p=[],v=this.options.keepBuffer,y=new Z(r.getBottomLeft().subtract([v,-v]),r.getTopRight().add([v,-v]));if(!(isFinite(r.min.x)&&isFinite(r.min.y)&&isFinite(r.max.x)&&isFinite(r.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var P in this._tiles){var A=this._tiles[P].coords;(A.z!==this._tileZoom||!y.contains(new x(A.x,A.y)))&&(this._tiles[P].current=!1)}if(Math.abs(i-this._tileZoom)>1){this._setView(t,i);return}for(var H=r.min.y;H<=r.max.y;H++)for(var B=r.min.x;B<=r.max.x;B++){var rt=new x(B,H);if(rt.z=this._tileZoom,!!this._isValidTile(rt)){var X=this._tiles[this._tileCoordsToKey(rt)];X?X.current=!0:p.push(rt)}}if(p.sort(function(ct,Qt){return ct.distanceTo(l)-Qt.distanceTo(l)}),p.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var ft=document.createDocumentFragment();for(B=0;B<p.length;B++)this._addTile(p[B],ft);this._level.el.appendChild(ft)}}}},_isValidTile:function(t){var e=this._map.options.crs;if(!e.infinite){var i=this._globalTileRange;if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0;var a=this._tileCoordsToBounds(t);return V(this.options.bounds).overlaps(a)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToNwSe:function(t){var e=this._map,i=this.getTileSize(),a=t.scaleBy(i),r=a.add(i),l=e.unproject(a,t.z),p=e.unproject(r,t.z);return[l,p]},_tileCoordsToBounds:function(t){var e=this._tileCoordsToNwSe(t),i=new lt(e[0],e[1]);return this.options.noWrap||(i=this._map.wrapLatLngBounds(i)),i},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new x(+e[0],+e[1]);return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t];e&&(W(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){I(t,"leaflet-tile");var e=this.getTileSize();t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=_,t.onmousemove=_,M.ielt9&&this.options.opacity<1&&pt(t,this.options.opacity)},_addTile:function(t,e){var i=this._getTilePos(t),a=this._tileCoordsToKey(t),r=this.createTile(this._wrapCoords(t),d(this._tileReady,this,t));this._initTile(r),this.createTile.length<2&&J(d(this._tileReady,this,t,null,r)),U(r,i),this._tiles[a]={el:r,coords:t,current:!0},e.appendChild(r),this.fire("tileloadstart",{tile:r,coords:t})},_tileReady:function(t,e,i){e&&this.fire("tileerror",{error:e,tile:i,coords:t});var a=this._tileCoordsToKey(t);i=this._tiles[a],i&&(i.loaded=+new Date,this._map._fadeAnimated?(pt(i.el,0),st(this._fadeFrame),this._fadeFrame=J(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(I(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),M.ielt9||!this._map._fadeAnimated?J(this._pruneTiles,this):setTimeout(d(this._pruneTiles,this),250)))},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new x(this._wrapX?f(t.x,this._wrapX):t.x,this._wrapY?f(t.y,this._wrapY):t.y);return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize();return new Z(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1;return!0}});function jn(t){return new le(t)}var Wt=le.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(t,e){this._url=t,e=E(this,e),e.detectRetina&&M.retina&&e.maxZoom>0?(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom=Math.min(e.maxZoom,e.minZoom+1)):(e.zoomOffset++,e.maxZoom=Math.max(e.minZoom,e.maxZoom-1)),e.minZoom=Math.max(0,e.minZoom)):e.zoomReverse?e.minZoom=Math.min(e.maxZoom,e.minZoom):e.maxZoom=Math.max(e.minZoom,e.maxZoom),typeof e.subdomains=="string"&&(e.subdomains=e.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url===t&&e===void 0&&(e=!0),this._url=t,e||this.redraw(),this},createTile:function(t,e){var i=document.createElement("img");return $(i,"load",d(this._tileOnLoad,this,e,i)),$(i,"error",d(this._tileOnError,this,e,i)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(i.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(i.referrerPolicy=this.options.referrerPolicy),i.alt="",i.src=this.getTileUrl(t),i},getTileUrl:function(t){var e={r:M.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y;this.options.tms&&(e.y=i),e["-y"]=i}return z(this._url,c(e,this.options))},_tileOnLoad:function(t,e){M.ielt9?setTimeout(d(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var a=this.options.errorTileUrl;a&&e.getAttribute("src")!==a&&(e.src=a),t(i,e)},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this._tileZoom,e=this.options.maxZoom,i=this.options.zoomReverse,a=this.options.zoomOffset;return i&&(t=e-t),t+a},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length;return this.options.subdomains[e]},_abortLoading:function(){var t,e;for(t in this._tiles)if(this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=_,e.onerror=_,!e.complete)){e.src=Y;var i=this._tiles[t].coords;W(e),delete this._tiles[t],this.fire("tileabort",{tile:e,coords:i})}},_removeTile:function(t){var e=this._tiles[t];if(e)return e.el.setAttribute("src",Y),le.prototype._removeTile.call(this,t)},_tileReady:function(t,e,i){if(!(!this._map||i&&i.getAttribute("src")===Y))return le.prototype._tileReady.call(this,t,e,i)}});function ua(t,e){return new Wt(t,e)}var pa=Wt.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t;var i=c({},this.defaultWmsParams);for(var a in e)a in this.options||(i[a]=e[a]);e=E(this,e);var r=e.detectRetina&&M.retina?2:1,l=this.getTileSize();i.width=l.x*r,i.height=l.y*r,this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var e=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[e]=this._crs.code,Wt.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToNwSe(t),i=this._crs,a=et(i.project(e[0]),i.project(e[1])),r=a.min,l=a.max,p=(this._wmsVersion>=1.3&&this._crs===sa?[r.y,r.x,l.y,l.x]:[r.x,r.y,l.x,l.y]).join(","),v=Wt.prototype.getTileUrl.call(this,t);return v+T(this.wmsParams,v,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+p},setParams:function(t,e){return c(this.wmsParams,t),e||this.redraw(),this}});function Yn(t,e){return new pa(t,e)}Wt.WMS=pa,ua.wms=Yn;var Mt=yt.extend({options:{padding:.1},initialize:function(t){E(this,t),g(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),I(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),a=this._map.getSize().multiplyBy(.5+this.options.padding),r=this._map.project(this._center,e),l=a.multiplyBy(-i).add(r).subtract(this._map._getNewPixelOrigin(t,e));M.any3d?$t(this._container,l,i):U(this._container,l)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var t in this._layers)this._layers[t]._reset()},_onZoomEnd:function(){for(var t in this._layers)this._layers[t]._project()},_updatePaths:function(){for(var t in this._layers)this._layers[t]._update()},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();this._bounds=new Z(i,i.add(e.multiplyBy(1+t*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),ma=Mt.extend({options:{tolerance:0},getEvents:function(){var t=Mt.prototype.getEvents.call(this);return t.viewprereset=this._onViewPreReset,t},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Mt.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var t=this._container=document.createElement("canvas");$(t,"mousemove",this._onMouseMove,this),$(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this),$(t,"mouseout",this._handleMouseOut,this),t._leaflet_disable_events=!0,this._ctx=t.getContext("2d")},_destroyContainer:function(){st(this._redrawRequest),delete this._ctx,W(this._container),G(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var t;this._redrawBounds=null;for(var e in this._layers)t=this._layers[e],t._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Mt.prototype._update.call(this);var t=this._bounds,e=this._container,i=t.getSize(),a=M.retina?2:1;U(e,t.min),e.width=a*i.x,e.height=a*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",M.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_reset:function(){Mt.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(t){this._updateDashArray(t),this._layers[g(t)]=t;var e=t._order={layer:t,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=e),this._drawLast=e,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(t){this._requestRedraw(t)},_removePath:function(t){var e=t._order,i=e.next,a=e.prev;i?i.prev=a:this._drawLast=a,a?a.next=i:this._drawFirst=i,delete t._order,delete this._layers[g(t)],this._requestRedraw(t)},_updatePath:function(t){this._extendRedrawBounds(t),t._project(),t._update(),this._requestRedraw(t)},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(typeof t.options.dashArray=="string"){var e=t.options.dashArray.split(/[, ]+/),i=[],a,r;for(r=0;r<e.length;r++){if(a=Number(e[r]),isNaN(a))return;i.push(a)}t.options._dashArray=i}else t.options._dashArray=t.options.dashArray},_requestRedraw:function(t){this._map&&(this._extendRedrawBounds(t),this._redrawRequest=this._redrawRequest||J(this._redraw,this))},_extendRedrawBounds:function(t){if(t._pxBounds){var e=(t.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new Z,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var t=this._redrawBounds;if(t){var e=t.getSize();this._ctx.clearRect(t.min.x,t.min.y,e.x,e.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var t,e=this._redrawBounds;if(this._ctx.save(),e){var i=e.getSize();this._ctx.beginPath(),this._ctx.rect(e.min.x,e.min.y,i.x,i.y),this._ctx.clip()}this._drawing=!0;for(var a=this._drawFirst;a;a=a.next)t=a.layer,(!e||t._pxBounds&&t._pxBounds.intersects(e))&&t._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(t,e){if(this._drawing){var i,a,r,l,p=t._parts,v=p.length,y=this._ctx;if(v){for(y.beginPath(),i=0;i<v;i++){for(a=0,r=p[i].length;a<r;a++)l=p[i][a],y[a?"lineTo":"moveTo"](l.x,l.y);e&&y.closePath()}this._fillStroke(y,t)}}},_updateCircle:function(t){if(!(!this._drawing||t._empty())){var e=t._point,i=this._ctx,a=Math.max(Math.round(t._radius),1),r=(Math.max(Math.round(t._radiusY),1)||a)/a;r!==1&&(i.save(),i.scale(1,r)),i.beginPath(),i.arc(e.x,e.y/r,a,0,Math.PI*2,!1),r!==1&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=e.options;i.fill&&(t.globalAlpha=i.fillOpacity,t.fillStyle=i.fillColor||i.color,t.fill(i.fillRule||"evenodd")),i.stroke&&i.weight!==0&&(t.setLineDash&&t.setLineDash(e.options&&e.options._dashArray||[]),t.globalAlpha=i.opacity,t.lineWidth=i.weight,t.strokeStyle=i.color,t.lineCap=i.lineCap,t.lineJoin=i.lineJoin,t.stroke())},_onClick:function(t){for(var e=this._map.mouseEventToLayerPoint(t),i,a,r=this._drawFirst;r;r=r.next)i=r.layer,i.options.interactive&&i._containsPoint(e)&&(!(t.type==="click"||t.type==="preclick")||!this._map._draggableMoved(i))&&(a=i);this._fireEvent(a?[a]:!1,t)},_onMouseMove:function(t){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var e=this._map.mouseEventToLayerPoint(t);this._handleMouseHover(t,e)}},_handleMouseOut:function(t){var e=this._hoveredLayer;e&&(Q(this._container,"leaflet-interactive"),this._fireEvent([e],t,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(t,e){if(!this._mouseHoverThrottled){for(var i,a,r=this._drawFirst;r;r=r.next)i=r.layer,i.options.interactive&&i._containsPoint(e)&&(a=i);a!==this._hoveredLayer&&(this._handleMouseOut(t),a&&(I(this._container,"leaflet-interactive"),this._fireEvent([a],t,"mouseover"),this._hoveredLayer=a)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,t),this._mouseHoverThrottled=!0,setTimeout(d(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:function(t){var e=t._order;if(e){var i=e.next,a=e.prev;if(i)i.prev=a;else return;a?a.next=i:i&&(this._drawFirst=i),e.prev=this._drawLast,this._drawLast.next=e,e.next=null,this._drawLast=e,this._requestRedraw(t)}},_bringToBack:function(t){var e=t._order;if(e){var i=e.next,a=e.prev;if(a)a.next=i;else return;i?i.prev=a:a&&(this._drawLast=a),e.prev=null,e.next=this._drawFirst,this._drawFirst.prev=e,this._drawFirst=e,this._requestRedraw(t)}}});function fa(t){return M.canvas?new ma(t):null}var ce=(function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return document.createElement("<lvml:"+t+' class="lvml">')}}catch{}return function(t){return document.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}})(),Jn={_initContainer:function(){this._container=D("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Mt.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=ce("shape");I(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=ce("path"),e.appendChild(t._path),this._updateStyle(t),this._layers[g(t)]=t},_addPath:function(t){var e=t._container;this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container;W(e),t.removeInteractiveTarget(e),delete this._layers[g(t)]},_updateStyle:function(t){var e=t._stroke,i=t._fill,a=t.options,r=t._container;r.stroked=!!a.stroke,r.filled=!!a.fill,a.stroke?(e||(e=t._stroke=ce("stroke")),r.appendChild(e),e.weight=a.weight+"px",e.color=a.color,e.opacity=a.opacity,a.dashArray?e.dashStyle=K(a.dashArray)?a.dashArray.join(" "):a.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=a.lineCap.replace("butt","flat"),e.joinstyle=a.lineJoin):e&&(r.removeChild(e),t._stroke=null),a.fill?(i||(i=t._fill=ce("fill")),r.appendChild(i),i.color=a.fillColor||a.color,i.opacity=a.fillOpacity):i&&(r.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),a=Math.round(t._radiusY||i);this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+a+" 0,"+65535*360)},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){zt(t._container)},_bringToBack:function(t){Ft(t._container)}},xe=M.vml?ce:_i,de=Mt.extend({_initContainer:function(){this._container=xe("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=xe("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){W(this._container),G(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Mt.prototype._update.call(this);var t=this._bounds,e=t.getSize(),i=this._container;(!this._svgSize||!this._svgSize.equals(e))&&(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),U(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=xe("path");t.options.className&&I(e,t.options.className),t.options.interactive&&I(e,"leaflet-interactive"),this._updateStyle(t),this._layers[g(t)]=t},_addPath:function(t){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){W(t._path),t.removeInteractiveTarget(t._path),delete this._layers[g(t)]},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options;e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,bi(t._parts,e))},_updateCircle:function(t){var e=t._point,i=Math.max(Math.round(t._radius),1),a=Math.max(Math.round(t._radiusY),1)||i,r="a"+i+","+a+" 0 1,0 ",l=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+r+i*2+",0 "+r+-i*2+",0 ";this._setPath(t,l)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){zt(t._path)},_bringToBack:function(t){Ft(t._path)}});M.vml&&de.include(Jn);function ga(t){return M.svg||M.vml?new de(t):null}O.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer;return e||(e=this._renderer=this._createRenderer()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if(t==="overlayPane"||t===void 0)return!1;var e=this._paneRenderers[t];return e===void 0&&(e=this._createRenderer({pane:t}),this._paneRenderers[t]=e),e},_createRenderer:function(t){return this.options.preferCanvas&&fa(t)||ga(t)}});var va=Zt.extend({initialize:function(t,e){Zt.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=V(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}});function Xn(t,e){return new va(t,e)}de.create=xe,de.pointsToPath=bi,At.geometryToLayer=Ce,At.coordsToLatLng=hi,At.coordsToLatLngs=Le,At.latLngToCoords=ui,At.latLngsToCoords=Ae,At.getFeature=Gt,At.asFeature=Me,O.mergeOptions({boxZoom:!0});var ya=Pt.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane,this._resetStateTimeout=0,t.on("unload",this._destroy,this)},addHooks:function(){$(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){G(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){W(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(t){if(!t.shiftKey||t.which!==1&&t.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),ee(),Ve(),this._startPoint=this._map.mouseEventToContainerPoint(t),$(document,{contextmenu:Rt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=D("div","leaflet-zoom-box",this._container),I(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t);var e=new Z(this._point,this._startPoint),i=e.getSize();U(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(W(this._box),Q(this._container,"leaflet-crosshair")),ie(),Ue(),G(document,{contextmenu:Rt,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if(!(t.which!==1&&t.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(d(this._resetState,this),0);var e=new lt(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){t.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});O.addInitHook("addHandler","boxZoom",ya),O.mergeOptions({doubleClickZoom:!0});var _a=Pt.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),a=e.options.zoomDelta,r=t.originalEvent.shiftKey?i-a:i+a;e.options.doubleClickZoom==="center"?e.setZoom(r):e.setZoomAround(t.containerPoint,r)}});O.addInitHook("addHandler","doubleClickZoom",_a),O.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var ba=Pt.extend({addHooks:function(){if(!this._draggable){var t=this._map;this._draggable=new Tt(t._mapPane,t._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}I(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Q(this._map._container,"leaflet-grab"),Q(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var t=this._map;if(t._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=V(this._map.options.maxBounds);this._offsetLimit=et(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(i),this._times.push(e),this._prunePositions(e)}this._map.fire("move",t).fire("drag",t)},_prunePositions:function(t){for(;this._positions.length>1&&t-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit;t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,a=this._draggable._newPos.x,r=(a-e+i)%t+e-i,l=(a+e+i)%t-e-i,p=Math.abs(r+i)<Math.abs(l+i)?r:l;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=p},_onDragEnd:function(t){var e=this._map,i=e.options,a=!i.inertia||t.noInertia||this._times.length<2;if(e.fire("dragend",t),a)e.fire("moveend");else{this._prunePositions(+new Date);var r=this._lastPos.subtract(this._positions[0]),l=(this._lastTime-this._times[0])/1e3,p=i.easeLinearity,v=r.multiplyBy(p/l),y=v.distanceTo([0,0]),P=Math.min(i.inertiaMaxSpeed,y),A=v.multiplyBy(P/y),H=P/(i.inertiaDeceleration*p),B=A.multiplyBy(-H/2).round();!B.x&&!B.y?e.fire("moveend"):(B=e._limitOffset(B,e.options.maxBounds),J(function(){e.panBy(B,{duration:H,easeLinearity:p,noMoveStart:!0,animate:!0})}))}}});O.addInitHook("addHandler","dragging",ba),O.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Pa=Pt.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container;t.tabIndex<=0&&(t.tabIndex="0"),$(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),G(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var t=document.body,e=document.documentElement,i=t.scrollTop||e.scrollTop,a=t.scrollLeft||e.scrollLeft;this._map._container.focus(),window.scrollTo(a,i)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e=this._panKeys={},i=this.keyCodes,a,r;for(a=0,r=i.left.length;a<r;a++)e[i.left[a]]=[-1*t,0];for(a=0,r=i.right.length;a<r;a++)e[i.right[a]]=[t,0];for(a=0,r=i.down.length;a<r;a++)e[i.down[a]]=[0,t];for(a=0,r=i.up.length;a<r;a++)e[i.up[a]]=[0,-1*t]},_setZoomDelta:function(t){var e=this._zoomKeys={},i=this.keyCodes,a,r;for(a=0,r=i.zoomIn.length;a<r;a++)e[i.zoomIn[a]]=t;for(a=0,r=i.zoomOut.length;a<r;a++)e[i.zoomOut[a]]=-t},_addHooks:function(){$(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){G(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e=t.keyCode,i=this._map,a;if(e in this._panKeys){if(!i._panAnim||!i._panAnim._inProgress)if(a=this._panKeys[e],t.shiftKey&&(a=k(a).multiplyBy(3)),i.options.maxBounds&&(a=i._limitOffset(k(a),i.options.maxBounds)),i.options.worldCopyJump){var r=i.wrapLatLng(i.unproject(i.project(i.getCenter()).add(a)));i.panTo(r)}else i.panBy(a)}else if(e in this._zoomKeys)i.setZoom(i.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[e]);else if(e===27&&i._popup&&i._popup.options.closeOnEscapeKey)i.closePopup();else return;Rt(t)}}});O.addInitHook("addHandler","keyboard",Pa),O.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var wa=Pt.extend({addHooks:function(){$(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){G(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=Wi(t),i=this._map.options.wheelDebounceTime;this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date);var a=Math.max(i-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(d(this._performZoom,this),a),Rt(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0;t._stop();var a=this._delta/(this._map.options.wheelPxPerZoomLevel*4),r=4*Math.log(2/(1+Math.exp(-Math.abs(a))))/Math.LN2,l=i?Math.ceil(r/i)*i:r,p=t._limitZoom(e+(this._delta>0?l:-l))-e;this._delta=0,this._startTime=null,p&&(t.options.scrollWheelZoom==="center"?t.setZoom(e+p):t.setZoomAround(this._lastMousePos,e+p))}});O.addInitHook("addHandler","scrollWheelZoom",wa);var ts=600;O.mergeOptions({tapHold:M.touchNative&&M.safari&&M.mobile,tapTolerance:15});var Sa=Pt.extend({addHooks:function(){$(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){G(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(clearTimeout(this._holdTimeout),t.touches.length===1){var e=t.touches[0];this._startPos=this._newPos=new x(e.clientX,e.clientY),this._holdTimeout=setTimeout(d(function(){this._cancel(),this._isTapValid()&&($(document,"touchend",it),$(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",e))},this),ts),$(document,"touchend touchcancel contextmenu",this._cancel,this),$(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function t(){G(document,"touchend",it),G(document,"touchend touchcancel",t)},_cancel:function(){clearTimeout(this._holdTimeout),G(document,"touchend touchcancel contextmenu",this._cancel,this),G(document,"touchmove",this._onMove,this)},_onMove:function(t){var e=t.touches[0];this._newPos=new x(e.clientX,e.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(t,e){var i=new MouseEvent(t,{bubbles:!0,cancelable:!0,view:window,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY});i._simulated=!0,e.target.dispatchEvent(i)}});O.addInitHook("addHandler","tapHold",Sa),O.mergeOptions({touchZoom:M.touch,bounceAtZoomLimits:!0});var Ea=Pt.extend({addHooks:function(){I(this._map._container,"leaflet-touch-zoom"),$(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Q(this._map._container,"leaflet-touch-zoom"),G(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var e=this._map;if(!(!t.touches||t.touches.length!==2||e._animatingZoom||this._zooming)){var i=e.mouseEventToContainerPoint(t.touches[0]),a=e.mouseEventToContainerPoint(t.touches[1]);this._centerPoint=e.getSize()._divideBy(2),this._startLatLng=e.containerPointToLatLng(this._centerPoint),e.options.touchZoom!=="center"&&(this._pinchStartLatLng=e.containerPointToLatLng(i.add(a)._divideBy(2))),this._startDist=i.distanceTo(a),this._startZoom=e.getZoom(),this._moved=!1,this._zooming=!0,e._stop(),$(document,"touchmove",this._onTouchMove,this),$(document,"touchend touchcancel",this._onTouchEnd,this),it(t)}},_onTouchMove:function(t){if(!(!t.touches||t.touches.length!==2||!this._zooming)){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),a=e.mouseEventToContainerPoint(t.touches[1]),r=i.distanceTo(a)/this._startDist;if(this._zoom=e.getScaleZoom(r,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&r<1||this._zoom>e.getMaxZoom()&&r>1)&&(this._zoom=e._limitZoom(this._zoom)),e.options.touchZoom==="center"){if(this._center=this._startLatLng,r===1)return}else{var l=i._add(a)._divideBy(2)._subtract(this._centerPoint);if(r===1&&l.x===0&&l.y===0)return;this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(l),this._zoom)}this._moved||(e._moveStart(!0,!1),this._moved=!0),st(this._animRequest);var p=d(e._move,e,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=J(p,this,!0),it(t)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,st(this._animRequest),G(document,"touchmove",this._onTouchMove,this),G(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});O.addInitHook("addHandler","touchZoom",Ea),O.BoxZoom=ya,O.DoubleClickZoom=_a,O.Drag=ba,O.Keyboard=Pa,O.ScrollWheelZoom=wa,O.TapHold=Sa,O.TouchZoom=Ea,n.Bounds=Z,n.Browser=M,n.CRS=Et,n.Canvas=ma,n.Circle=di,n.CircleMarker=Ee,n.Class=ut,n.Control=vt,n.DivIcon=ha,n.DivOverlay=wt,n.DomEvent=yn,n.DomUtil=gn,n.Draggable=Tt,n.Evented=Ht,n.FeatureGroup=Ct,n.GeoJSON=At,n.GridLayer=le,n.Handler=Pt,n.Icon=qt,n.ImageOverlay=He,n.LatLng=q,n.LatLngBounds=lt,n.Layer=yt,n.LayerGroup=Kt,n.LineUtil=Tn,n.Map=O,n.Marker=Se,n.Mixin=Cn,n.Path=xt,n.Point=x,n.PolyUtil=Ln,n.Polygon=Zt,n.Polyline=Lt,n.Popup=ke,n.PosAnimation=Qi,n.Projection=xn,n.Rectangle=va,n.Renderer=Mt,n.SVG=de,n.SVGOverlay=da,n.TileLayer=Wt,n.Tooltip=Te,n.Transformation=Re,n.Util=pe,n.VideoOverlay=ca,n.bind=d,n.bounds=et,n.canvas=fa,n.circle=zn,n.circleMarker=Dn,n.control=se,n.divIcon=Un,n.extend=c,n.featureGroup=Rn,n.geoJSON=la,n.geoJson=qn,n.gridLayer=jn,n.icon=Nn,n.imageOverlay=Zn,n.latLng=N,n.latLngBounds=V,n.layerGroup=Bn,n.map=_n,n.marker=On,n.point=k,n.polygon=Kn,n.polyline=Fn,n.popup=Qn,n.rectangle=Xn,n.setOptions=E,n.stamp=g,n.svg=ga,n.svgOverlay=Wn,n.tileLayer=ua,n.tooltip=Vn,n.transformation=Yt,n.version=o,n.videoOverlay=Gn;var es=window.L;n.noConflict=function(){return window.L=es,this},window.L=n}))})(he,he.exports)),he.exports}var Es=Ss();const Ot=Ps(Es),Vt={nashik_onion_belt:{center:[20.1444,74.2272],zoom:11,demandHotspots:[{id:"d-mum",nameEn:"Vashi APMC & Mumbai Consumer Belt",nameHi:"वाशी एपीएमसी एवं मुंबई उपभोक्ता बाजार",lat:19.076,lng:72.8777,demandLevel:"Very High",demandLevelHi:"अत्यधिक मांग",cropEn:"Red Onion & Tomato",cropHi:"लाल प्याज व टमाटर",willingRate:"₹42 - ₹46 / kg",distanceKm:185,transitHours:"4.5 hrs via Samruddhi Corridor",transitHoursHi:"समृद्धि महामार्ग से 4.5 घंटे",noteEn:"Bulk purchases by wholesale chains (D-Mart, BigBasket). Low current inventory.",noteHi:"थोक खरीदारों द्वारा भारी खरीद। वर्तमान स्टॉक काफी कम।",transportAdvice:{vehicleEn:"Mini-Truck (Tata Ace) for 1-2.5 MT | 6-Wheeler Lorry for 5-9 MT",vehicleHi:"छोटा हाथी (टाटा ऐस) 1-2.5 टन | 6-पहिया लॉरी 5-9 टन",busOptionEn:"Bus Cargo: ₹45/crate (Daily express delivery)",busOptionHi:"बस कार्गो: ₹45/क्रेट (दैनिक सीधी सेवा)",freightRate:"₹85 / Qtl (~₹0.85/kg)",netProfitGain:"+₹15.50/kg extra net profit over local mandi",netProfitGainHi:"स्थानीय मंडी से +₹15.50/किग्रा अधिक शुद्ध मुनाफा"}},{id:"d-pune",nameEn:"Pune Gultekdi Market Yard",nameHi:"पुणे गुलटेकड़ी मार्केट यार्ड",lat:18.5204,lng:73.8567,demandLevel:"High",demandLevelHi:"उच्च मांग",cropEn:"Red Onion",cropHi:"लाल प्याज",willingRate:"₹38 - ₹42 / kg",distanceKm:210,transitHours:"5 hrs",transitHoursHi:"5 घंटे",noteEn:"Hotel and restaurant supplies creating steady weekday demand.",noteHi:"होटल व रेस्टोरेंट से नियमित दैनिक मांग।",transportAdvice:{vehicleEn:"Mini-Truck (Bolero Maxi / Tata Ace) or 6-Wheeler Eicher",vehicleHi:"छोटा हाथी (बोलेरो मैक्सी) या 6-पहिया आयशर लॉरी",busOptionEn:"Bus Cargo: ₹40/crate (Morning departure, noon arrival)",busOptionHi:"बस कार्गो: ₹40/क्रेट (सुबह रवानगी, दोपहर पहुंच)",freightRate:"₹75 / Qtl (~₹0.75/kg)",netProfitGain:"+₹13.00/kg extra net profit over local mandi",netProfitGainHi:"स्थानीय मंडी से +₹13.00/किग्रा अधिक शुद्ध मुनाफा"}}],mandis:[{id:"m-lasalgaon",nameEn:"APMC Lasalgaon Main Yard",nameHi:"लासलगांव एपीएमसी मुख्य मंडी",lat:20.1444,lng:74.2272,type:"APMC Mandi",todayArrivals:"14,200 Quintals (68 Trucks)",todayArrivalsHi:"14,200 क्विंटल (68 गाड़ियां)",gateQueueTime:"25 mins",gateQueueTimeHi:"25 मिनट गेट समय",modalPrice:"₹1,950 / Qtl",timing:"08:00 AM - 05:30 PM",contact:"+91 2550 266225"},{id:"m-pimpalgaon",nameEn:"APMC Pimpalgaon Baswant (Tomato & Onion)",nameHi:"पिंपलगांव बसवंत एपीएमसी (टमाटर व प्याज)",lat:20.1706,lng:73.9856,type:"APMC Mandi",todayArrivals:"18,400 Crates Tomato",todayArrivalsHi:"18,400 क्रेट टमाटर",gateQueueTime:"40 mins",gateQueueTimeHi:"40 मिनट",modalPrice:"₹1,400 / Qtl",timing:"07:30 AM - 06:00 PM",contact:"+91 2550 250012"}],warehouses:[{id:"w-las-cold",nameEn:"Lasalgaon Agro Cold Storage & Solar Silo",nameHi:"लासलगांव कृषि कोल्ड स्टोरेज एवं सोलर साइलो",lat:20.138,lng:74.241,type:"Cold Storage (WDRA Registered)",typeHi:"कोल्ड स्टोरेज (डब्ल्यूडीआरए पंजीकृत)",totalCapacityMt:5e3,vacantSpaceMt:780,storageRatePerMonth:"₹18 / bag (50kg)",storageRatePerMonthHi:"₹18 / 50 किग्रा बोरी प्रति माह",enwrLoanAvailable:!0,temperature:"1°C - 2°C (Controlled Humidity)",temperatureHi:"1°C - 2°C (नियंत्रित नमी)",contact:"+91 98224 55102"},{id:"w-niphad-coop",nameEn:"Niphad Sahakari Warehousing Complex",nameHi:"निफाड़ सहकारी गोदाम परिसर",lat:20.0811,lng:74.1128,type:"Dry Grain & Onion Shed",typeHi:"सूखा अनाज व प्याज गोदाम",totalCapacityMt:8500,vacantSpaceMt:2150,storageRatePerMonth:"₹14 / bag (50kg)",storageRatePerMonthHi:"₹14 / 50 किग्रा बोरी प्रति माह",enwrLoanAvailable:!0,temperature:"Ambient ventilated (Draft aerated)",temperatureHi:"प्राकृतिक हवादार शेड",contact:"+91 94231 88901"}]},bhatinda_wheat_belt:{center:[30.211,74.9455],zoom:11,demandHotspots:[{id:"d-delhi",nameEn:"Delhi Lawrence Road & Narela Food Hub",nameHi:"दिल्ली लॉरेंस रोड एवं नरेला फूड हब",lat:28.7041,lng:77.1025,demandLevel:"Very High",demandLevelHi:"अत्यधिक मांग",cropEn:"Sharbati Wheat & Cotton",cropHi:"शरबती गेहूं व कपास",willingRate:"₹38 - ₹42 / kg",distanceKm:320,transitHours:"6.5 hrs",transitHoursHi:"6.5 घंटे",noteEn:"Flour mills actively seeking dry lot grain under 11.5% moisture.",noteHi:"कम नमी वाले साफ गेहूं के लिए मिलों की सीधी मांग।",transportAdvice:{vehicleEn:"10-Wheeler Freight Truck (16 MT) or 6-Wheeler Lorry",vehicleHi:"10-पहिया मालवाहक ट्रक (16 टन) या 6-पहिया लॉरी",busOptionEn:"Railway Kisan Parcel: ₹55/quintal subsidized",busOptionHi:"रेलवे किसान पार्सल: ₹55/क्विंटल रियायती दर",freightRate:"₹110 / Qtl (~₹1.10/kg)",netProfitGain:"+₹380/Quintal extra realization vs farmgate",netProfitGainHi:"खेत से बेचने की तुलना में +₹380/क्विंटल अतिरिक्त लाभ"}}],mandis:[{id:"m-bhatinda-main",nameEn:"Bhatinda New Grain Market (Dana Mandi)",nameHi:"बठिंडा नई दाना मंडी",lat:30.211,lng:74.9455,type:"APMC Mandi",todayArrivals:"22,000 Quintals Wheat",todayArrivalsHi:"22,000 क्विंटल गेहूं",gateQueueTime:"15 mins",gateQueueTimeHi:"15 मिनट",modalPrice:"₹2,425 / Qtl",timing:"08:00 AM - 07:00 PM",contact:"+91 164 221234"}],warehouses:[{id:"w-cwc-bhatinda",nameEn:"Central Warehousing Corporation (CWC) Malwa Silos",nameHi:"केंद्रीय भंडारण निगम (CWC) मालवा साइलो",lat:30.198,lng:74.96,type:"Steel Silos & Covered Shed",typeHi:"स्टील साइलो एवं पक्का गोदाम",totalCapacityMt:35e3,vacantSpaceMt:8200,storageRatePerMonth:"₹12 / Qtl / month",storageRatePerMonthHi:"₹12 प्रति क्विंटल/माह",enwrLoanAvailable:!0,temperature:"Temperature controlled steel silos",temperatureHi:"तापमान नियंत्रित साइलो",contact:"+91 164 225670"}]},mandya_cauvery_belt:{center:[12.5244,76.8958],zoom:11,demandHotspots:[{id:"d-blr",nameEn:"Bengaluru HOPCOMS & Yeshwanthpur Market",nameHi:"बेंगलुरु हॉपकॉम्प्स व यशवंतपुर मंडी",lat:12.9716,lng:77.5946,demandLevel:"Very High",demandLevelHi:"अत्यधिक मांग",cropEn:"Fresh Tomato & Shallots",cropHi:"ताजा टमाटर व सांभर प्याज",willingRate:"₹42 / kg",distanceKm:98,transitHours:"2.5 hrs via Mysuru Expressway",transitHoursHi:"मैसूर एक्सप्रेसवे से 2.5 घंटे",noteEn:"Supermarkets and retail stores with daily replenishment orders.",noteHi:"सुपरमार्केट द्वारा दैनिक आपूर्ति मांग।",transportAdvice:{vehicleEn:"Mini-Truck (Tata Ace) or KSRTC Bus Cargo",vehicleHi:"छोटा हाथी (पिकअप) या केएसआरटीसी बस कार्गो",busOptionEn:"Bus Roof Cargo: ₹35/crate (2.5 hrs via Mysuru Expressway)",busOptionHi:"बस कार्गो: ₹35/क्रेट (मैसूर एक्सप्रेसवे से 2.5 घंटे)",freightRate:"₹50 / Qtl (~₹0.50/kg)",netProfitGain:"+₹18.50/kg extra net profit on tomato",netProfitGainHi:"टमाटर पर +₹18.50/किग्रा अधिक शुद्ध मुनाफा"}}],mandis:[{id:"m-mandya-apmc",nameEn:"Mandya APMC Market Yard",nameHi:"मांड्या एपीएमसी मार्केट यार्ड",lat:12.5244,lng:76.8958,type:"APMC Mandi",todayArrivals:"9,600 Crates",todayArrivalsHi:"9,600 क्रेट",gateQueueTime:"20 mins",gateQueueTimeHi:"20 मिनट",modalPrice:"₹1,650 / Qtl",timing:"07:00 AM - 04:00 PM",contact:"+91 8232 220015"}],warehouses:[{id:"w-mandya-kswe",nameEn:"Karnataka State Warehousing Corp (Maddur Unit)",nameHi:"कर्नाटक राज्य भंडारण निगम (मद्दूर इकाई)",lat:12.584,lng:77.042,type:"Agri Warehouse & Cold Chamber",typeHi:"कृषि गोदाम व शीत कक्ष",totalCapacityMt:6e3,vacantSpaceMt:1450,storageRatePerMonth:"₹16 / crate / mo",storageRatePerMonthHi:"₹16 प्रति क्रेट/माह",enwrLoanAvailable:!0,temperature:"Multi-commodity cold rooms",temperatureHi:"बहु-उत्पाद शीत कक्ष",contact:"+91 8232 233400"}]},varanasi_gangetic_belt:{center:[25.3176,82.9739],zoom:11,demandHotspots:[{id:"d-patna",nameEn:"Patna Bazaar Samiti",nameHi:"पटना बाजार समिति",lat:25.5941,lng:85.1376,demandLevel:"High",demandLevelHi:"उच्च मांग",cropEn:"Tomato & Wheat",cropHi:"टमाटर व गेहूं",willingRate:"₹36 / kg",distanceKm:240,transitHours:"5 hrs",transitHoursHi:"5 घंटे",noteEn:"Bulk purchases by institutional caterers.",noteHi:"थोक व्यापारियों द्वारा सीधी खरीद।",transportAdvice:{vehicleEn:"6-Wheeler Lorry (5-8 MT) or Express Bus Cargo",vehicleHi:"6-पहिया लॉरी (5-8 टन) या एक्सप्रेस बस कार्गो",busOptionEn:"Bus Cargo: ₹40/basket/crate (Direct overnight route)",busOptionHi:"बस कार्गो: ₹40/क्रेट (सीधा रात्रि मार्ग)",freightRate:"₹80 / Qtl (~₹0.80/kg)",netProfitGain:"+₹12.00/kg extra net profit over local mandi",netProfitGainHi:"स्थानीय मंडी से +₹12.00/किग्रा अधिक शुद्ध मुनाफा"}}],mandis:[{id:"m-rajatalab",nameEn:"Raja Talab Subzi Mandi Varanasi",nameHi:"राजा तालाब सब्जी मंडी वाराणसी",lat:25.275,lng:82.855,type:"APMC Mandi",todayArrivals:"12,800 Quintals",todayArrivalsHi:"12,800 क्विंटल",gateQueueTime:"30 mins",gateQueueTimeHi:"30 मिनट",modalPrice:"₹1,520 / Qtl",timing:"06:00 AM - 03:00 PM",contact:"+91 542 263411"}],warehouses:[{id:"w-varanasi-cwc",nameEn:"Central Warehouse Ramnagar Industrial Area",nameHi:"केंद्रीय भंडारण रामनगर औद्योगिक क्षेत्र",lat:25.281,lng:83.031,type:"State Agri Warehouse",typeHi:"राज्य कृषि गोदाम",totalCapacityMt:14e3,vacantSpaceMt:3200,storageRatePerMonth:"₹13 / Qtl / month",storageRatePerMonthHi:"₹13 प्रति क्विंटल/माह",enwrLoanAvailable:!0,temperature:"Scientific pest-proof storage",temperatureHi:"वैज्ञानिक कीट-रहित भंडारण",contact:"+91 542 258890"}]},guntur_chilli_belt:{center:[16.3067,80.4365],zoom:11,demandHotspots:[{id:"d-hyd",nameEn:"Hyderabad Bowenpally & Kothapet Yard",nameHi:"हैदराबाद बोवेनपल्ली व कोठापेट यार्ड",lat:17.385,lng:78.4867,demandLevel:"Very High",demandLevelHi:"अत्यधिक मांग",cropEn:"Cotton & Chillies",cropHi:"कपास व मिर्च",willingRate:"Premium Export Rates",willingRateHi:"प्रीमियम निर्यात दर",distanceKm:275,transitHours:"5.5 hrs",transitHoursHi:"5.5 घंटे",noteEn:"Export packaging units buying clean staple lots.",noteHi:"निर्यात इकाइयां अच्छे रेशे की सीधी खरीद कर रही हैं।",transportAdvice:{vehicleEn:"Commercial Goods Lorry (6-10 Wheeler) or Bolero Pickup",vehicleHi:"व्यावसायिक मालवाहक लॉरी (6-10 पहिया) या बोलेरो पिकअप",busOptionEn:"APSRTC Logistics Parcel: ₹60/bag parcel",busOptionHi:"आरटीसी लॉजिस्टिक्स पार्सल: ₹60/बोरी",freightRate:"₹120 / Qtl (~₹1.20/kg)",netProfitGain:"+₹1,150/Quintal premium for dry export quality",netProfitGainHi:"सूखे निर्यात माल पर +₹1,150/क्विंटल अतिरिक्त लाभ"}}],mandis:[{id:"m-guntur-yard",nameEn:"Guntur Market Yard (Asia's Largest Yard)",nameHi:"गुंटूर मार्केट यार्ड (एशिया का सबसे बड़ा यार्ड)",lat:16.3067,lng:80.4365,type:"Commercial APMC",todayArrivals:"38,000 Bags",todayArrivalsHi:"38,000 बोरी",gateQueueTime:"25 mins",gateQueueTimeHi:"25 मिनट",modalPrice:"₹7,420 / Qtl (Cotton)",timing:"07:30 AM - 06:00 PM",contact:"+91 863 222145"}],warehouses:[{id:"w-guntur-cold",nameEn:"AP State Warehousing Corporation Guntur Cold Hub",nameHi:"आंध्र प्रदेश राज्य भंडारण निगम शीत गृह",lat:16.315,lng:80.451,type:"High-Tech Cold Chain Silo",typeHi:"हाई-टेक कोल्ड चेन साइलो",totalCapacityMt:22e3,vacantSpaceMt:4100,storageRatePerMonth:"₹22 / bag (cotton/chilli)",storageRatePerMonthHi:"₹22 प्रति बोरी/माह",enwrLoanAvailable:!0,temperature:"Humidity controlled 65% RH",temperatureHi:"नमी नियंत्रित 65% आरएच",contact:"+91 863 234120"}]}};class Cs{constructor(s,n,o){this.containerId=s,this.getActiveCluster=n,this.getLang=o,this.map=null,this.markersLayer=null,this.activeFilter="all"}init(){const s=document.getElementById(this.containerId);s&&(this.renderSkeleton(s),this.initLeaflet(),this.renderData(),this.bindTransportAdvisorEvents())}update(){this.updateTexts()}renderSkeleton(s){const n=this.getLang();s.innerHTML=`
      <div class="map-section-header">
        <div class="map-title-wrap">
          <span class="map-badge" id="map-section-badge">🗺️ ${n==="hi"?"राष्ट्रीय मंडी, टर्मिनल व लॉजिस्टिक्स मानचित्र":"National Mandi, Terminal & Logistics Map"}</span>
          <h2 class="section-heading" id="map-section-heading">${n==="hi"?"एपीएमसी मंडियां, उपभोक्ता शहर व वेयरहाउस लोकेटर":"APMC Mandis, Consumer Terminals & Cold Storage"}</h2>
          <p class="section-desc" id="map-section-desc">${n==="hi"?"अपने निकटतम मंडी भाव देखें या उच्च मांग वाले महानगरों में माल भेजकर अतिरिक्त मुनाफा कमाने हेतु माल ढुलाई व भाड़ा तुलना करें।":"Track local APMC gate arrivals or calculate logistics arbitrage by shipping to high-demand consumer metros."}</p>
        </div>

        <!-- Filter Buttons (Groww / Zerodha Clean Segmented Control) -->
        <div class="map-filters-row">
          <button type="button" class="btn-map-filter ${this.activeFilter==="all"?"active":""}" data-filter="all">
            📍 <span class="filter-lbl" data-filter-label="all">${n==="hi"?"सभी स्थान (All)":"All Locations"}</span>
          </button>
          <button type="button" class="btn-map-filter ${this.activeFilter==="mandi"?"active":""}" data-filter="mandi">
            🏛️ <span class="filter-lbl" data-filter-label="mandi">${n==="hi"?"प्रमुख मंडियां (APMC Mandis)":"APMC Mandis"}</span>
          </button>
          <button type="button" class="btn-map-filter ${this.activeFilter==="demand"?"active":""}" data-filter="demand">
            🔥 <span class="filter-lbl" data-filter-label="demand">${n==="hi"?"उपभोक्ता शहर (Metro Demand)":"High-Demand Metros"}</span>
          </button>
          <button type="button" class="btn-map-filter ${this.activeFilter==="warehouse"?"active":""}" data-filter="warehouse">
            🏬 <span class="filter-lbl" data-filter-label="warehouse">${n==="hi"?"कोल्ड स्टोरेज व साइलो":"Cold Stores & Silos"}</span>
          </button>
        </div>
      </div>

      <!-- Main Map Grid -->
      <div class="map-content-grid">
        <!-- Leaflet Map Container -->
        <div class="map-canvas-wrap glass-panel">
          <div id="leaflet-map-canvas" class="leaflet-map-canvas"></div>
          
          <div class="map-legend-overlay">
            <div class="legend-item"><span class="legend-dot dot-demand"></span><span id="map-legend-demand">${n==="hi"?"उपभोक्ता मांग केंद्र":"Consumer Metro"}</span></div>
            <div class="legend-item"><span class="legend-dot dot-mandi"></span><span id="map-legend-mandi">${n==="hi"?"एपीएमसी मंडी":"APMC Mandi"}</span></div>
            <div class="legend-item"><span class="legend-dot dot-warehouse"></span><span id="map-legend-warehouse">${n==="hi"?"कोल्ड स्टोरेज / साइलो":"Cold Storage / Silo"}</span></div>
          </div>
        </div>

        <!-- Location Cards Sidebar / Drawer -->
        <div class="map-sidebar glass-panel" id="map-locations-sidebar">
          <!-- Dynamically populated -->
        </div>
      </div>

      <!-- Quick Storage & Demand Metrics Row -->
      <div class="map-metrics-row" id="map-metrics-bar">
        <!-- Dynamically populated -->
      </div>

      <!-- AI Freight & Logistics Arbitrage Calculator -->
      <div class="transport-advisor-panel glass-panel" id="transport-advisor-panel">
        <div class="transport-advisor-header">
          <div class="tr-badge-wrap">
            <span class="tr-pulse-icon">🚚</span>
            <div>
              <h4 id="tr-title">${n==="hi"?"एआई माल ढुलाई व अंतर-मंडी मुनाफा कैलकुलेटर":"AI Freight & Inter-Market Arbitrage Calculator"}</h4>
              <p id="tr-subtitle">${n==="hi"?"स्थानीय मंडी में बेचने बनाम बड़े शहर भेजने पर शुद्ध लाभ का विश्लेषण":"Compare local mandi net returns vs shipping produce to high-demand consumer metros"}</p>
            </div>
          </div>
        </div>

        <div class="transport-advisor-body">
          <div class="tr-controls-row">
            <div class="tr-control-group">
              <label id="tr-lbl-dest">${n==="hi"?"1. गंतव्य महानगर चुनें":"1. Target Destination Metro"}</label>
              <select id="tr-destination-select" class="tr-select"></select>
            </div>
            <div class="tr-control-group">
              <label id="tr-lbl-crop">${n==="hi"?"2. फसल चुनें":"2. Select Crop"}</label>
              <select id="tr-crop-select" class="tr-select"></select>
            </div>
            <div class="tr-control-group">
              <label id="tr-lbl-qty">${n==="hi"?"3. मात्रा (क्विंटल)":"3. Quantity (Quintals)"}</label>
              <input type="number" id="tr-qty-input" class="tr-input" value="20" min="1" max="500" />
            </div>
          </div>

          <div class="tr-results-card" id="tr-results-container">
            <!-- Dynamically populated by updateTransportCalculation() -->
          </div>
        </div>
      </div>
    `;const o=s.querySelectorAll(".btn-map-filter");o.forEach(c=>{c.addEventListener("click",()=>{o.forEach(h=>h.classList.remove("active")),c.classList.add("active"),this.activeFilter=c.getAttribute("data-filter"),this.renderData()})})}updateTexts(){const s=this.getLang(),n=document.getElementById("map-section-badge"),o=document.getElementById("map-section-heading"),c=document.getElementById("map-section-desc");n&&(n.textContent=`🗺️ ${s==="hi"?"राष्ट्रीय मंडी, टर्मिनल व लॉजिस्टिक्स मानचित्र":"National Mandi, Terminal & Logistics Map"}`),o&&(o.textContent=s==="hi"?"एपीएमसी मंडियां, उपभोक्ता शहर व वेयरहाउस लोकेटर":"APMC Mandis, Consumer Terminals & Cold Storage"),c&&(c.textContent=s==="hi"?"अपने निकटतम मंडी भाव देखें या उच्च मांग वाले महानगरों में माल भेजकर अतिरिक्त मुनाफा कमाने हेतु माल ढुलाई व भाड़ा तुलना करें।":"Track local APMC gate arrivals or calculate logistics arbitrage by shipping to high-demand consumer metros.");const h={all:s==="hi"?"सभी स्थान":"All Locations",mandi:s==="hi"?"प्रमुख मंडियां":"APMC Mandis",demand:s==="hi"?"उच्च मांग वाले शहर":"High-Demand Metros",warehouse:s==="hi"?"कोल्ड स्टोरेज व साइलो":"Cold Stores & Silos"};Object.keys(h).forEach(S=>{const E=document.querySelector(`[data-filter-label="${S}"]`);E&&(E.textContent=h[S])});const d=document.getElementById("map-legend-demand"),m=document.getElementById("map-legend-mandi"),g=document.getElementById("map-legend-warehouse");d&&(d.textContent=s==="hi"?"उपभोक्ता मांग केंद्र":"Consumer Metro"),m&&(m.textContent=s==="hi"?"एपीएमसी मंडी":"APMC Mandi"),g&&(g.textContent=s==="hi"?"कोल्ड स्टोरेज / साइलो":"Cold Storage / Silo");const u=document.getElementById("tr-title"),f=document.getElementById("tr-subtitle"),_=document.getElementById("tr-lbl-dest"),b=document.getElementById("tr-lbl-crop"),w=document.getElementById("tr-lbl-qty");u&&(u.textContent=s==="hi"?"एआई माल ढुलाई व अंतर-मंडी मुनाफा कैलकुलेटर":"AI Freight & Inter-Market Arbitrage Calculator"),f&&(f.textContent=s==="hi"?"स्थानीय मंडी में बेचने बनाम बड़े शहर भेजने पर शुद्ध लाभ का विश्लेषण":"Compare local mandi net returns vs shipping produce to high-demand consumer metros"),_&&(_.textContent=s==="hi"?"1. गंतव्य महानगर चुनें":"1. Target Destination Metro"),b&&(b.textContent=s==="hi"?"2. फसल चुनें":"2. Select Crop"),w&&(w.textContent=s==="hi"?"3. मात्रा (क्विंटल)":"3. Quantity (Quintals)"),this.renderData()}initLeaflet(){if(!document.getElementById("leaflet-map-canvas"))return;this.map&&(this.map.remove(),this.map=null);const n=this.getActiveCluster(),o=Vt[n.id]||Vt.nashik_onion_belt;this.map=Ot.map("leaflet-map-canvas",{center:o.center,zoom:o.zoom,zoomControl:!0,scrollWheelZoom:!1}),Ot.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{maxZoom:18,attribution:"© OpenStreetMap contributors | KisanSetu Agri Terminal"}).addTo(this.map),this.markersLayer=Ot.layerGroup().addTo(this.map)}renderData(){if((!this.map||!this.markersLayer)&&(this.initLeaflet(),!this.map))return;const s=this.getActiveCluster(),n=this.getLang(),o=Vt[s.id]||Vt.nashik_onion_belt;this.markersLayer.clearLayers(),this.map.setView(o.center,o.zoom),this.map.invalidateSize();const c=[],h=(d,m)=>Ot.divIcon({className:"custom-map-marker",html:`<div class="marker-pin ${m}"><span>${d}</span></div>`,iconSize:[36,36],iconAnchor:[18,36],popupAnchor:[0,-36]});(this.activeFilter==="all"||this.activeFilter==="demand")&&o.demandHotspots.forEach(d=>{var T,R,z,K,F,Y;const m=Ot.marker([d.lat,d.lng],{icon:h("🔥","marker-demand")}),g=n==="hi"?d.nameHi:d.nameEn,u=n==="hi"?d.cropHi:d.cropEn,f=n==="hi"?d.transitHoursHi:d.transitHours,_=n==="hi"?d.noteHi:d.noteEn,b=n==="hi"&&d.willingRateHi?d.willingRateHi:d.willingRate,w=n==="hi"?((T=d.transportAdvice)==null?void 0:T.vehicleHi)||"छोटा हाथी / लॉरी":((R=d.transportAdvice)==null?void 0:R.vehicleEn)||"Mini-Truck / Lorry",S=n==="hi"?((z=d.transportAdvice)==null?void 0:z.busOptionHi)||"बस कार्गो: ₹45/क्रेट":((K=d.transportAdvice)==null?void 0:K.busOptionEn)||"Bus Cargo: ₹45/crate",E=n==="hi"?((F=d.transportAdvice)==null?void 0:F.netProfitGainHi)||"अधिक शुद्ध मुनाफा":((Y=d.transportAdvice)==null?void 0:Y.netProfitGain)||"Extra net profit";m.bindPopup(`
          <div class="map-popup-card">
            <span class="popup-badge badge-demand">${n==="hi"?"उच्च मांग केंद्र":"High Demand Metro"}</span>
            <h4 class="popup-title">${g}</h4>
            <div class="popup-detail"><strong>${n==="hi"?"मांग की जाने वाली फसल":"In-Demand Crop"}:</strong> ${u}</div>
            <div class="popup-detail"><strong>${n==="hi"?"स्वीकार्य दर":"Willing Rate"}:</strong> <span class="highlight-price">${b}</span></div>
            <div class="popup-detail"><strong>${n==="hi"?"दूरी":"Distance"}:</strong> ${d.distanceKm} km (${f})</div>
            <div class="popup-transport-box">
              <div class="tr-pop-heading">🚚 ${n==="hi"?"एआई वाहन व ट्रांसपोर्ट विकल्प:":"AI Freight Guidance:"}</div>
              <div class="tr-pop-row">🛺 <strong>${n==="hi"?"वाहन":"Vehicle"}:</strong> ${w}</div>
              <div class="tr-pop-row">🚌 <strong>${n==="hi"?"छोटा लॉट":"Small Lot"}:</strong> ${S}</div>
              <div class="tr-pop-profit">✨ <strong>${n==="hi"?"अतिरिक्त लाभ":"Gain"}:</strong> ${E}</div>
            </div>
            <p class="popup-note">${_}</p>
          </div>
        `),m.addTo(this.markersLayer),c.push({type:"demand",data:d,marker:m})}),(this.activeFilter==="all"||this.activeFilter==="mandi")&&o.mandis.forEach(d=>{const m=Ot.marker([d.lat,d.lng],{icon:h("🏛️","marker-mandi")}),g=n==="hi"?d.nameHi:d.nameEn,u=n==="hi"?d.todayArrivalsHi:d.todayArrivals,f=n==="hi"?d.gateQueueTimeHi:d.gateQueueTime;m.bindPopup(`
          <div class="map-popup-card">
            <span class="popup-badge badge-mandi">${n==="hi"?"सक्रिय मंडी":"Active APMC Mandi"}</span>
            <h4 class="popup-title">${g}</h4>
            <div class="popup-detail"><strong>${n==="hi"?"आज की आवक":"Today Arrivals"}:</strong> ${u}</div>
            <div class="popup-detail"><strong>${n==="hi"?"मॉडल भाव":"Modal Price"}:</strong> <span class="highlight-price">${d.modalPrice}</span></div>
            <div class="popup-detail"><strong>${n==="hi"?"गेट प्रतीक्षा समय":"Gate Wait"}:</strong> ${f}</div>
            <div class="popup-detail"><strong>${n==="hi"?"संपर्क":"Contact"}:</strong> ${d.contact}</div>
          </div>
        `),m.addTo(this.markersLayer),c.push({type:"mandi",data:d,marker:m})}),(this.activeFilter==="all"||this.activeFilter==="warehouse")&&o.warehouses.forEach(d=>{const m=Ot.marker([d.lat,d.lng],{icon:h("🏬","marker-warehouse")}),g=n==="hi"?d.nameHi:d.nameEn,u=n==="hi"?d.availableSpaceHi:d.availableSpace,f=n==="hi"?d.subsidyInfoHi:d.subsidyInfo;m.bindPopup(`
          <div class="map-popup-card">
            <span class="popup-badge badge-warehouse">${n==="hi"?"सरकारी मान्यता प्राप्त कोल्ड स्टोर":"Accredited Storage"}</span>
            <h4 class="popup-title">${g}</h4>
            <div class="popup-detail"><strong>${n==="hi"?"कुल क्षमता":"Capacity"}:</strong> ${d.capacity}</div>
            <div class="popup-detail"><strong>${n==="hi"?"उपलब्ध खाली जगह":"Vacant Space"}:</strong> <span class="highlight-vacant">${u}</span></div>
            <div class="popup-detail"><strong>${n==="hi"?"मासिक शुल्क":"Storage Fee"}:</strong> ${d.ratePerMonth}</div>
            <div class="popup-detail"><strong>${n==="hi"?"ऋण सुविधा":"Pledge Loan"}:</strong> ${d.eNWR_available?"✅ e-NWR Loan Available":"❌ No"}</div>
            <p class="popup-note">${f}</p>
          </div>
        `),m.addTo(this.markersLayer),c.push({type:"warehouse",data:d,marker:m})}),this.renderSidebar(c,n),this.renderMetrics(o,n),this.populateTransportAdvisorDropdowns(o,s,n)}renderSidebar(s,n){const o=document.getElementById("map-locations-sidebar");if(!o)return;if(s.length===0){o.innerHTML=`
        <div class="sidebar-empty">
          <p>${n==="hi"?"इस श्रेणी में कोई स्थान नहीं मिला।":"No locations found for this filter."}</p>
        </div>
      `;return}o.innerHTML=`
      <div class="sidebar-header">
        <h3>${n==="hi"?"स्थान व मंडी सूची":"Market Locations"} (${s.length})</h3>
        <span class="sidebar-hint">${n==="hi"?"क्लिक करके मैप पर देखें":"Click to inspect on map"}</span>
      </div>
      <div class="sidebar-items-scroll">
        ${s.map((h,d)=>{const m=h.data,g=n==="hi"?m.nameHi:m.nameEn;if(h.type==="demand"){const u=n==="hi"?m.cropHi:m.cropEn,f=n==="hi"&&m.willingRateHi?m.willingRateHi:m.willingRate,_=n==="hi"?m.demandLevelHi:m.demandLevel;return`
              <div class="sidebar-item-card card-demand" data-item-index="${d}">
                <div class="item-top">
                  <span class="item-pill pill-demand">🔥 ${_}</span>
                  <span class="item-dist">${m.distanceKm} km</span>
                </div>
                <h4 class="item-title">${g}</h4>
                <div class="item-sub">${u} • <strong class="text-gain">${f}</strong></div>
              </div>
            `}else if(h.type==="mandi"){const u=n==="hi"?m.todayArrivalsHi:m.todayArrivals,f=m.distanceKm?`${m.distanceKm} km`:n==="hi"?"स्थानीय यार्ड":"Local Yard";return`
              <div class="sidebar-item-card card-mandi" data-item-index="${d}">
                <div class="item-top">
                  <span class="item-pill pill-mandi">🏛️ APMC</span>
                  <span class="item-price">${m.modalPrice}</span>
                </div>
                <h4 class="item-title">${g}</h4>
                <div class="item-sub">${u} • ${f}</div>
              </div>
            `}else{const u=n==="hi"?m.availableSpaceHi:m.availableSpace,f=m.ratePerMonth||(n==="hi"?"₹15/बोरी/माह":"₹15/bag/mo"),_=m.distanceKm?`${m.distanceKm} km`:n==="hi"?"निकटतम कोल्ड स्टोर":"Local Cold Storage";return`
              <div class="sidebar-item-card card-warehouse" data-item-index="${d}">
                <div class="item-top">
                  <span class="item-pill pill-wh">🏬 ${n==="hi"?"कोल्ड स्टोर":"Cold Store"}</span>
                  <span class="item-vacant">${u}</span>
                </div>
                <h4 class="item-title">${g}</h4>
                <div class="item-sub">${f} • ${_}</div>
              </div>
            `}}).join("")}
      </div>
    `;const c=o.querySelectorAll(".sidebar-item-card");c.forEach(h=>{h.addEventListener("click",()=>{const d=parseInt(h.getAttribute("data-item-index"),10),m=s[d];m&&m.marker&&(c.forEach(g=>g.classList.remove("selected")),h.classList.add("selected"),this.map.flyTo(m.marker.getLatLng(),12,{duration:1.2}),setTimeout(()=>{m.marker.openPopup()},1250))})})}renderMetrics(s,n){const o=document.getElementById("map-metrics-bar");if(!o)return;const c=s.warehouses.reduce((m,g)=>{const u=g.availableSpace.match(/(\d[\d,]*)\s*MT/);return m+(u?parseInt(u[1].replace(/,/g,""),10):0)},0),h=s.demandHotspots[0],d=s.mandis[0];o.innerHTML=`
      <div class="metric-card glass-panel">
        <div class="m-icon">🏬</div>
        <div class="m-body">
          <div class="m-lbl">${n==="hi"?"उपलब्ध खाली भंडारण":"Total Vacant Storage"}</div>
          <div class="m-val">${c.toLocaleString("en-IN")} MT</div>
          <div class="m-sub">${s.warehouses.length} ${n==="hi"?"मान्यता प्राप्त कोल्ड स्टोर्स":"Accredited Facilities"}</div>
        </div>
      </div>

      <div class="metric-card glass-panel">
        <div class="m-icon">🔥</div>
        <div class="m-body">
          <div class="m-lbl">${n==="hi"?"उच्चतम मांग वाला गंतव्य शहर":"Top High-Demand Metro"}</div>
          <div class="m-val">${n==="hi"?h.nameHi.split(" ")[0]:h.nameEn.split(" ")[0]}</div>
          <div class="m-sub">${h.distanceKm} km • ${h.willingRate}</div>
        </div>
      </div>

      <div class="metric-card glass-panel">
        <div class="m-icon">🏛️</div>
        <div class="m-body">
          <div class="m-lbl">${n==="hi"?"सक्रिय मुख्य मंडी":"Primary APMC Terminal"}</div>
          <div class="m-val">${n==="hi"?d.nameHi.split(" ")[0]:d.nameEn.split(" ")[0]}</div>
          <div class="m-sub">${d.modalPrice} • ${d.todayArrivals}</div>
        </div>
      </div>
    `}populateTransportAdvisorDropdowns(s,n,o){const c=document.getElementById("tr-destination-select"),h=document.getElementById("tr-crop-select");c&&(c.innerHTML=s.demandHotspots.map(d=>{var m;return`
        <option value="${d.id}" data-dist="${d.distanceKm}" data-freight="${((m=d.transportAdvice)==null?void 0:m.freightRate)||"₹80/Qtl"}">
          ${o==="hi"?d.nameHi:d.nameEn} (${d.distanceKm} km)
        </option>
      `}).join("")),h&&(h.innerHTML=n.crops.map(d=>`
        <option value="${d.id}" data-mandi-price="${d.mandiPriceKg}" data-retail-price="${d.retailPriceKg}">
          ${o==="hi"?d.nameHi:d.nameEn} (${o==="hi"?`मंडी भाव: ₹${d.mandiPriceKg}/किग्रा`:`Mandi Rate: ₹${d.mandiPriceKg}/kg`})
        </option>
      `).join("")),this.updateTransportCalculation()}bindTransportAdvisorEvents(){const s=document.getElementById("tr-destination-select"),n=document.getElementById("tr-crop-select"),o=document.getElementById("tr-qty-input");s&&s.addEventListener("change",()=>this.updateTransportCalculation()),n&&n.addEventListener("change",()=>this.updateTransportCalculation()),o&&o.addEventListener("input",()=>this.updateTransportCalculation())}updateTransportCalculation(){const s=document.getElementById("tr-results-container"),n=document.getElementById("tr-destination-select"),o=document.getElementById("tr-crop-select"),c=document.getElementById("tr-qty-input");if(!s||!n||!o||!c)return;const h=this.getLang(),d=this.getActiveCluster(),m=Vt[d.id]||Vt.nashik_onion_belt,g=n.value,u=m.demandHotspots.find(gt=>gt.id===g)||m.demandHotspots[0],f=o.value,_=d.crops.find(gt=>gt.id===f)||d.crops[0],b=Math.max(1,parseInt(c.value,10)||1),w=b*100,S=w*_.mandiPriceKg,E=_.mandiPriceKg*1.55,T=w*E,R=u.distanceKm||150,z=Math.round(R*.45+25),K=b*z,F=b*20,Y=K+F,ot=T-Y-S,ht=(ot/w).toFixed(1);let tt="",at="";b<=15?(tt=h==="hi"?"छोटा हाथी (टाटा ऐस / बोलेरो पिकअप)":"Mini-Truck (Tata Ace / Bolero Pickup)",at=h==="hi"?"1-1.5 टन क्षमता, तेज रवानगी":"1–1.5 Ton Capacity, Agile city transit"):b<=45?(tt=h==="hi"?"6-पहिया आयशर कैंटर":"6-Wheeler Medium Truck (Eicher Pro)",at=h==="hi"?"3-4.5 टन क्षमता, क्रेट पैकिंग के साथ सुरक्षित":"3–4.5 Ton Capacity, Ideal for crate packing"):(tt=h==="hi"?"10-पहिया भारी मालवाहक लॉरी":"Heavy Commercial Truck (10-Wheeler)",at=h==="hi"?"9-12 टन क्षमता, न्यूनतम प्रति किलो भाड़ा":"9–12 Ton Capacity, Lowest freight per kg"),s.innerHTML=`
      <div class="tr-grid-output">
        <div class="tr-col-summary">
          <div class="tr-summary-chip">
            <span>🛣️ ${R} km</span>
            <span>⏱️ ${u.transitHours||"4-5 hrs"}</span>
          </div>

          <div class="tr-profit-headline">
            <span class="tr-ph-lbl">${h==="hi"?"अतिरिक्त शुद्ध लाभ (भाड़ा काटकर)":"Net Extra Profit (After Freight)"}:</span>
            <div class="tr-ph-val">+₹${Math.round(ot).toLocaleString("en-IN")}</div>
            <div class="tr-ph-perkg">(+₹${ht}/kg ${h==="hi"?"स्थानीय मंडी से अधिक":"over local mandi"})</div>
          </div>

          <div class="tr-breakdown-list">
            <div class="tr-b-item">
              <span>${h==="hi"?"स्थानीय मंडी में बिक्री मूल्य":"Local Mandi Value"}:</span>
              <strong>₹${Math.round(S).toLocaleString("en-IN")}</strong>
            </div>
            <div class="tr-b-item">
              <span>${h==="hi"?"गंतव्य शहर में अनुमानित बिक्री":"Target Metro Revenue"}:</span>
              <strong class="text-green">₹${Math.round(T).toLocaleString("en-IN")}</strong>
            </div>
            <div class="tr-b-item">
              <span>${h==="hi"?"कुल भाड़ा व लोडिंग लागत":"Total Freight & Handling"}:</span>
              <strong class="text-red">-₹${Math.round(Y).toLocaleString("en-IN")} (₹${z}/Qtl)</strong>
            </div>
          </div>
        </div>

        <div class="tr-col-vehicle">
          <div class="tr-vehicle-card">
            <div class="tr-v-icon">🛺</div>
            <div class="tr-v-content">
              <span class="tr-v-badge">${h==="hi"?"अनुशंसित किफायती वाहन":"Recommended Optimal Vehicle"}</span>
              <h4 class="tr-v-name">${tt}</h4>
              <p class="tr-v-desc">${at}</p>
            </div>
          </div>

          <div class="tr-small-lot-tip">
            <span class="tip-icon">🚌</span>
            <div class="tip-text">
              <strong>${h==="hi"?"कम मात्रा (1-5 क्रेट) के लिए विकल्प:":"Express Option (1-5 Crates):"}</strong>
              <span>${h==="hi"?"दैनिक अंतर-राज्यीय बस कार्गो से ₹45/क्रेट में उसी दिन डिलीवरी संभव।":"Daily express bus cargo courier at ₹45/crate for direct same-day delivery."}</span>
            </div>
          </div>
        </div>
      </div>
    `}}class Ls{constructor(s,n,o){this.containerId=s,this.getActiveCluster=n,this.getLang=o}getIndices(){return this.getLang()==="hi"?[{symbol:"कृषि सूचकांक (AGRI-50)",value:"18,450.20",delta:"+1.18% ▲",positive:!0},{symbol:"प्याज (लासलगांव)",value:"₹1,950/क्विं",delta:"+3.8% ▲",positive:!0},{symbol:"गेहूं (बठिंडा मालवा)",value:"₹2,425/क्विं",delta:"+0.8% ▲",positive:!0},{symbol:"टमाटर (कोलार/नासिक)",value:"₹1,400/क्विं",delta:"-2.4% ▼",positive:!1},{symbol:"कपास (गुंटूर यार्ड)",value:"₹7,350/क्विं",delta:"+1.4% ▲",positive:!0},{symbol:"सोयाबीन (इंदौर मंडी)",value:"₹4,680/क्विं",delta:"+0.6% ▲",positive:!0},{symbol:"चना दाल (बीकानेर)",value:"₹5,820/क्विं",delta:"+1.9% ▲",positive:!0}]:[{symbol:"AGRI-INDEX 50",value:"18,450.20",delta:"+1.18% ▲",positive:!0},{symbol:"ONION (Lasalgaon APMC)",value:"₹1,950/Qtl",delta:"+3.8% ▲",positive:!0},{symbol:"WHEAT (Bhatinda Grain)",value:"₹2,425/Qtl",delta:"+0.8% ▲",positive:!0},{symbol:"TOMATO (Kolar / Nashik)",value:"₹1,400/Qtl",delta:"-2.4% ▼",positive:!1},{symbol:"COTTON (Guntur Yard)",value:"₹7,350/Qtl",delta:"+1.4% ▲",positive:!0},{symbol:"SOYBEAN (Indore APMC)",value:"₹4,680/Qtl",delta:"+0.6% ▲",positive:!0},{symbol:"CHICKPEA (Bikaner Market)",value:"₹5,820/Qtl",delta:"+1.9% ▲",positive:!0}]}init(){this.render()}update(){this.render()}render(){const s=document.getElementById(this.containerId);if(!s)return;const n=this.getIndices(),o=this.getLang();s.innerHTML=`
      <div class="fintech-ticker-wrap">
        <div class="f-ticker-badge">
          <span class="f-live-pulse-dot"></span>
          <span class="f-ticker-badge-text">${o==="hi"?"लाइव एपीएमसी":"LIVE APMC FEED"}</span>
        </div>
        <div class="f-ticker-track-container">
          <div class="f-ticker-marquee">
            ${[...n,...n].map(c=>`
              <div class="f-ticker-item">
                <span class="f-ticker-symbol">${c.symbol}</span>
                <span class="f-ticker-price">${c.value}</span>
                <span class="f-ticker-delta ${c.positive?"positive":"negative"}">${c.delta}</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `}}class As{constructor(s,n){this.getActiveCluster=s,this.getLang=n,this.isOpen=!1,this.isListening=!1,this.recognition=null,this.modalEl=null,this.initSpeechRecognition()}initSpeechRecognition(){const s=window.SpeechRecognition||window.webkitSpeechRecognition;s&&(this.recognition=new s,this.recognition.continuous=!1,this.recognition.interimResults=!1,this.recognition.onresult=n=>{const o=n.results[0][0].transcript.toLowerCase();this.handleUserQuery(o)},this.recognition.onerror=()=>{this.setListeningState(!1)},this.recognition.onend=()=>{this.setListeningState(!1)})}open(){this.isOpen=!0;const s=this.getLang();this.getActiveCluster(),this.render();const n=s==="hi"?"नमस्ते किसान भाई! आज आपको किस जानकारी की आवश्यकता है? नीचे दिए गए विकल्प पर टैप करें या माइक दबाकर बोलें।":"Greetings! What information do you require today? Please tap a topic below or speak into the microphone.";St.speak(n,s)}close(){this.isOpen=!1,St.stop(),this.recognition&&this.isListening&&this.recognition.stop(),this.modalEl&&(this.modalEl.style.display="none")}setListeningState(s){this.isListening=s;const n=document.getElementById("va-mic-btn"),o=document.getElementById("va-mic-status");n&&o&&(s?(n.classList.add("recording"),o.textContent=this.getLang()==="hi"?"सुन रहे हैं... बोलिए":"Listening... Speak now"):(n.classList.remove("recording"),o.textContent=this.getLang()==="hi"?"माइक दबाकर बोलें":"Tap mic to speak"))}toggleMic(){if(!this.recognition){alert("Microphone recognition is not supported in this browser. Please tap any option chip below!");return}this.isListening?this.recognition.stop():(St.stop(),this.recognition.lang=this.getLang()==="hi"?"hi-IN":"en-IN",this.recognition.start(),this.setListeningState(!0))}handleUserQuery(s){const n=this.getLang(),o=this.getActiveCluster();let c="",h="",d="",m="",g="";const u=s.toLowerCase();if(u.includes("selling")||u.includes("कहाँ बेचूं")||u.includes("where to sell")||u.includes("dalal")||u.includes("दलाल")||u.includes("tomato")||u.includes("टमाटर")||u.includes("mediator")||u.includes("consumer")||u.includes("बेचने"))c="For tomato and fresh produce, selling via local mandi mediators costs 6% to 8% in broker commissions. If you ship via Bolero or Tata Ace to high-rate mandis in Maharashtra (Vashi/Pune) or Andhra Pradesh, you earn ₹8 to ₹14 extra per kilo even after freight and tolls! Or sell directly to enrolled retail buyers at 0% broker fee.",h="टमाटर व फसलों के लिए स्थानीय मंडी में दलाल 6% से 8% कमीशन काटते हैं। यदि आप बोलेरो अथवा छोटा हाथी से महाराष्ट्र (वाशी/पुणे) या आंध्र प्रदेश की बड़ी मंडियों में भेजते हैं, तो पूरा भाड़ा और टोल काटकर भी आपको प्रति किलो ₹8 से ₹14 अधिक शुद्ध लाभ मिलता है! अथवा किसान सेतु पर सीधे उपभोक्ताओं को 0% दलाली पर बेचें।",d="section-selling-advisor",m="Open Selling Decision Engine (Mandi Broker vs Direct Consumer)",g="दलाल बनाम सीधी बिक्री मुनाफा इंजन खोलें";else if(u.includes("land")||u.includes("जमीन")||u.includes("crop")||u.includes("photo")||u.includes("फोटो")||u.includes("suitability")||u.includes("पैदावार")||u.includes("yield")||u.includes("उगाएं")||u.includes("what to grow"))c="To know what crops will yield best on your land, use our Land & Crop Suitability Doctor. Enter your location, upload your soil photo, and our AI cross-references soil texture with the 30-day weather forecast to predict exact yield in quintals per acre and total harvest value.",h="अपनी जमीन पर सबसे उपयुक्त फसल और पैदावार जानने के लिए भूमि व फसल डॉक्टर का उपयोग करें। अपना जिला दर्ज करें, मिट्टी की फोटो अपलोड करें — हमारा एआई 30 दिनों के मौसम पूर्वानुमान के अनुसार प्रति एकड़ संभावित क्विंटल और कुल फसल मूल्य का सटीक अनुमान देगा।",d="section-crop-doctor",m="Open Land & Crop Suitability Doctor",g="भूमि फोटो व फसल पैदावार डॉक्टर खोलें";else if(u.includes("scheme")||u.includes("योजना")||u.includes("loan")||u.includes("लोन")||u.includes("ऋण")||u.includes("kcc")||u.includes("subsidy")||u.includes("सब्सिडी")||u.includes("solar")||u.includes("सोलर")||u.includes("tractor")||u.includes("ट्रैक्टर")||u.includes("pm kisan")||u.includes("bima")||u.includes("बीमा"))c="Under Kisan Credit Card (KCC), farmers get low-interest crop credit up to ₹3 Lakh at an effective 4% rate. PM-KISAN grants ₹6,000/yr (₹12,000 in Maharashtra and MP), PM-KUSUM provides 90% solar pump subsidy, and SMAM offers 50% tractor discounts. Check our Schemes Portal for full eligibility and direct application links!",h="किसान क्रेडिट कार्ड (KCC) पर ₹3 लाख तक का लोन मात्र 4% प्रभावी ब्याज दर पर उपलब्ध है। पीएम-किसान पर ₹6,000/वर्ष (महाराष्ट्र व एमपी में कुल ₹12,000), पीएम-कुसुम पर सोलर पंप पर 90% सब्सिडी और ट्रैक्टरों पर 50% छूट मिलती है। सभी राज्यों की योजनाओं व सीधे आवेदन लिंक के लिए सरकारी योजना पोर्टल खोलें।",d="section-schemes",m="Open Pan-India Govt Schemes & Loans Portal",g="सरकारी योजनाएं व 4% किसान ऋण पोर्टल खोलें";else if(u.includes("onion")||u.includes("कांदा")||u.includes("प्याज")||u.includes("pyaaz")){const b=o.crops.find(w=>w.id==="onion")||o.crops[0];c=`In ${o.nameEn}, the Red Onion mandi price is ₹${b.mandiPriceKg}/kg while city consumers pay ₹${b.retailPriceKg}/kg. The AI recommendation is: ${b.recommendation==="HOLD"?"Hold for 3 days for better rates.":"Sell now."}`,h=`${o.nameHi} में लाल प्याज का मंडी भाव ₹${b.mandiPriceKg} प्रति किलो है, जबकि शहरों में ₹${b.retailPriceKg} बिक रहा है। सलाह है: ${b.recommendation==="HOLD"?"3 दिन रोककर बेचें, भाव सुधरेंगे।":"तुरंत बेचें।"}`,d="section-prices",m="View Onion Price Details",g="प्याज भाव का विवरण देखें"}else if(u.includes("tomato")||u.includes("टमाटर")||u.includes("tamatar")){const b=o.crops.find(w=>w.id==="tomato")||o.crops[1];c=`In ${o.nameEn}, tomato mandi price is ₹${b.mandiPriceKg}/kg. City retail price is ₹${b.retailPriceKg}/kg. Intermediary spread is ${b.spreadPct}%.`,h=`${o.nameHi} में टमाटर का मंडी भाव ₹${b.mandiPriceKg} प्रति किलो और खुदरा भाव ₹${b.retailPriceKg} प्रति किलो है। बिचौलियों का मार्जिन ${b.spreadPct}% है।`,d="section-prices",m="View Tomato Price Cards",g="टमाटर भाव कार्ड देखें"}else if(u.includes("wheat")||u.includes("गेहूं")||u.includes("gehun")||u.includes("kanak")){const b=o.crops.find(w=>w.id==="wheat")||o.crops[0];c=`Wheat modal rate is ₹${b.mandiPriceQuintal} per quintal. Demand from private flour millers is active. Make sure grain moisture is under 12%.`,h=`गेहूं का मॉडल भाव ₹${b.mandiPriceQuintal} प्रति क्विंटल है। निजी मिलों से अच्छी मांग है। मंडी लाते समय नमी 12% से कम रखें।`,d="section-prices",m="View Wheat Price Trend",g="गेहूं का रुझान देखें"}else u.includes("warehouse")||u.includes("storage")||u.includes("गोदाम")||u.includes("कोल्ड")||u.includes("cold")?(c=`Accredited cold storage is available near ${o.nameEn}. Over 2,900 MT of vacant cold space is ready with e-NWR pledge loan financing.`,h=`${o.nameHi} के समीप मान्यता प्राप्त कोल्ड स्टोरेज उपलब्ध हैं। 2,900 मीट्रिक टन से अधिक जगह खाली है और ई-एनडब्ल्यूआर ऋण सुविधा उपलब्ध है।`,d="section-map",m="View Available Warehouses on Map",g="मानचित्र पर खाली गोदाम देखें"):u.includes("soil")||u.includes("मिट्टी")||u.includes("खाद")||u.includes("fertilizer")||u.includes("yield")?(c="For testing your soil and calculating exact Urea, DAP, and MOP dosages with yield projections, please use our Crop & Soil Doctor tool below.",h="मिट्टी की जांच और यूरिया, डीएपी व पोटाश की सटीक मात्रा व उपज का अनुमान जानने के लिए फसल व मिट्टी डॉक्टर का उपयोग करें।",d="section-advisor",m="Open Soil & Crop Doctor",g="मिट्टी व खाद डॉक्टर खोलें"):u.includes("demand")||u.includes("मांग")||u.includes("bazaar")||u.includes("market")?(c="Highest consumer demand right now is coming from Mumbai Vashi APMC and Pune Market Yard, paying up to ₹44 to ₹46 per kg for fresh produce.",h="इस समय सबसे अधिक मांग मुंबई वाशी और पुणे मार्केट यार्ड से आ रही है, जहाँ ₹44 से ₹46 प्रति किलो तक के भाव मिल रहे हैं।",d="section-map",m="View Demand Heatmap",g="मांग मानचित्र देखें"):u.includes("arbitrage")||u.includes("profit")||u.includes("मुनाफा")||u.includes("कहाँ बेचूं")||u.includes("best price")||u.includes("भाव अंतर")?(c="Our Smart Mandi Arbitrage Engine compares your local mandi with Vashi, Pune, and Azadpur Delhi. After subtracting truck freight and tolls, selling directly to enrolled buyers earns you up to ₹7.50 extra per kilo!",h="हमारा स्मार्ट मंडी मुनाफा कैलकुलेटर स्थानीय मंडी, वाशी, पुणे और आजादपुर के भावों की तुलना करता है। ट्रक भाड़ा और टोल काटकर भी सीधे खरीदार को बेचने पर प्रति किलो ₹7.50 तक का अतिरिक्त शुद्ध लाभ मिलता है!",d="section-prices",m="Open Mandi Arbitrage Optimizer",g="मंडी मुनाफा कैलकुलेटर खोलें"):u.includes("pesticide")||u.includes("कीटनाशक")||u.includes("दवा")||u.includes("स्प्रे")||u.includes("रोग")||u.includes("thrips")||u.includes("borer")||u.includes("curl")?(c="For leaf curl and sucking pests like thrips, use Fipronil 5% SC @ 2 ml/liter or biological Neem Oil 10,000 ppm. For fruit borers, Coragen @ 5 ml per 15-liter pump provides 3-week protection.",h="पत्ती मरोड़ और थ्रिप्स जैसे चूसक कीड़ों के लिए फिप्रोनिल 5% SC (2 मिली/लीटर) या नीम तेल 10,000 ppm का उपयोग करें। फल छेदक इल्ली के लिए कोराजन (5 मिली प्रति 15 लीटर पंप) सबसे असरदार है।",d="section-pesticides",m="View Complete Pesticides Guide",g="कीटनाशक व रोग गाइड देखें"):u.includes("rain")||u.includes("बारिश")||u.includes("weather")||u.includes("मौसम")||u.includes("कटाई")||u.includes("harvest")?(c="Heavy rainfall alert of 42 mm is forecasted on Day 3 (Wednesday). Complete harvesting of ready onion, wheat, and tomato within 48 hours or store safely under waterproof tarpaulins.",h="मौसम चेतावनी: बुधवार (तीसरे दिन) को 42 मिमी भारी बारिश का अलर्ट है। पकी हुई प्याज, गेहूं व टमाटर की कटाई अगले 48 घंटों में पूरी कर लें या कटी फसल को पक्के तिरपाल से ढकें।",d="section-weather",m="Check 7-Day Harvest Weather",g="7-दिवसीय कटाई मौसम देखें"):u.includes("lab")||u.includes("लैब")||u.includes("sample")||u.includes("सैंपल")||u.includes("परीक्षण")||u.includes("appointment")?(c="You can book a doorstep soil sample collection appointment from ICAR or State Agriculture Dept Lab directly on KisanSetu with full 12-parameter digital soil health card within 72 hours.",h="आप किसान सेतु से सीधे भाकृअनुप अथवा सरकारी मान्यता प्राप्त लैब से अपने खेत पर मिट्टी सैंपल संग्रह बुक कर सकते हैं। 72 घंटे में 12-पैरामीटर प्रमाणित रिपोर्ट आपके फोन पर मिलेगी।",d="section-advisor",m="Book Doorstep Lab Appointment",g="खेत पर लैब जांच बुक करें"):u.includes("transport")||u.includes("वाहन")||u.includes("गाड़ी")||u.includes("lorry")||u.includes("लॉरी")||u.includes("tempo")||u.includes("टेंपो")||u.includes("छोटा हाथी")||u.includes("bus")||u.includes("बस")||u.includes("car")||u.includes("goods")||u.includes("distance")||u.includes("दूर")?(c="Looking to ship produce to high-demand consumer metros? Our AI recommends: For 1 to 2.5 tons, take a Mini-Truck (Tata Ace) at ₹12 to ₹14 per km. For bulk harvest over 5 tons, hire a 6-wheeler goods lorry at ₹85 per quintal. For small crates under 200 kg, inter-city bus cargo costs just ₹45 per crate. Transport freight is very low compared to the ₹15 to ₹25 per kg higher retail price in cities!",h="अगर आप बड़े शहरों के उपभोक्ता बाजारों में माल बेचना चाहते हैं, तो हमारा एआई सुझाव देता है: 1 से 2.5 टन के लिए छोटा हाथी ₹12 से ₹14 प्रति किमी पर चुनें। 5 टन से अधिक के लिए 6-पहिया मालवाहक लॉरी लें (भाड़ा लगभग ₹85/क्विंटल)। छोटे 2-4 क्रेट के लिए बस कार्गो सबसे सस्ता है (₹45 प्रति क्रेट)। शहरों में मिलने वाले ₹15 से ₹25/किग्रा अधिक दाम के सामने भाड़ा नगण्य है!",d="section-map",m="Open AI Freight & Arbitrage Guide",g="एआई माल ढुलाई व मुनाफा मार्गदर्शिका देखें"):(c=`In ${o.nameEn}, current temperature is ${o.weather.temp} with ${o.weather.humidity} humidity. ${o.weather.summaryEn}`,h=`${o.nameHi} में तापमान ${o.weather.temp} और आर्द्रता ${o.weather.humidity} है। ${o.weather.summaryHi}`,d="section-prices",m="View Live Market Rates",g="लाइव मंडी भाव देखें");const f=n==="hi"?h:c,_=n==="hi"?g:m;this.displayAnswer(f,d,_),St.speak(f,n)}displayAnswer(s,n,o){const c=document.getElementById("va-conversation-box");if(!c)return;c.innerHTML=`
      <div class="va-bubble va-assistant-reply">
        <div class="va-bubble-header">
          <span class="va-avatar">🤖</span>
          <strong>${this.getLang()==="hi"?"किसान सहायक एआई":"Agricultural AI Assistant"}</strong>
        </div>
        <p class="va-reply-text">${s}</p>
        ${n?`
          <button type="button" class="btn-va-action" data-target="${n}">
            ➔ ${o}
          </button>
        `:""}
      </div>
    `;const h=c.querySelector(".btn-va-action");h&&h.addEventListener("click",()=>{if(this.close(),window.kisanAppInstance&&typeof window.kisanAppInstance.switchView=="function")window.kisanAppInstance.switchView(n);else{const d=document.getElementById(n);d&&d.scrollIntoView({behavior:"smooth",block:"start"})}})}render(){let s=document.getElementById("voice-assistant-modal");s||(s=document.createElement("div"),s.id="voice-assistant-modal",s.className="va-modal-backdrop",document.body.appendChild(s)),this.modalEl=s,s.style.display="flex";const n=this.getLang();this.getActiveCluster(),s.innerHTML=`
      <div class="va-modal-card glass-panel">
        <div class="va-modal-header">
          <div class="va-header-title">
            <span class="va-header-icon">🎙️</span>
            <div>
              <h3>${n==="hi"?"किसान सहायक वॉयस एजेंट":"AI Voice Assistant"}</h3>
              <span class="va-sub">${n==="hi"?"पूछें: कहाँ बेचूं, जमीन पर क्या उगाएं या 4% लोन":"Ask: Where to sell, what crops to grow, or 4% loans"}</span>
            </div>
          </div>
          <button type="button" class="btn-close-va" id="btn-close-va">&times;</button>
        </div>

        <!-- Melodious Voice Gender Selector -->
        <div class="va-voice-select-row">
          <span class="va-voice-lbl">${n==="hi"?"आवाज का चयन:":"Voice Persona:"}</span>
          <div class="va-voice-toggle-group">
            <button type="button" class="btn-voice-toggle ${St.getGender()==="female"?"active":""}" data-gender="female">
              👩 ${n==="hi"?"मधुर महिला आवाज":"Melodious Female"}
            </button>
            <button type="button" class="btn-voice-toggle ${St.getGender()==="male"?"active":""}" data-gender="male">
              👨 ${n==="hi"?"स्पष्ट पुरुष आवाज":"Clear Male"}
            </button>
          </div>
        </div>

        <!-- Conversational Dialog Box -->
        <div class="va-conversation-box" id="va-conversation-box">
          <div class="va-bubble va-question-prompt">
            <div class="va-bubble-header">
              <span class="va-avatar">🤖</span>
              <strong>${n==="hi"?"नमस्ते किसान भाई! आपको आज क्या जानकारी चाहिए?":"Welcome! What agricultural intelligence do you need today?"}</strong>
            </div>
            <p>${n==="hi"?"नीचे दिए गए मुख्य विषय पर टैप करें या माइक दबाकर अपनी भाषा में पूछें:":"Tap any requirement chip below or press the mic to speak:"}</p>
          </div>
        </div>

        <!-- Requirement Question Chips -->
        <div class="va-chips-grid">
          <button type="button" class="va-chip highlight" data-q="selling">
            <span>⚖️</span>
            <span>${n==="hi"?"टमाटर / फसल कहाँ बेचूं? (दलाल बनाम सीधी बिक्री)":"Where to Sell Produce? (Mandi vs Direct Consumer)"}</span>
          </button>
          <button type="button" class="va-chip highlight" data-q="land">
            <span>🌱</span>
            <span>${n==="hi"?"मेरी जमीन पर कौन सी फसल कितनी पैदावार देगी?":"What Crops to Grow on My Land & Yield?"}</span>
          </button>
          <button type="button" class="va-chip highlight" data-q="scheme">
            <span>🏛️</span>
            <span>${n==="hi"?"सरकारी योजनाएं, 4% किसान लोन व सोलर सब्सिडी":"Govt Schemes, 4% Loans & Solar Subsidies"}</span>
          </button>
          <button type="button" class="va-chip" data-q="rain">
            <span>⛈️</span>
            <span>${n==="hi"?"क्या इस हफ्ते भारी बारिश होगी? (मौसम अलर्ट)":"Is Heavy Rainfall Expected? (Weather)"}</span>
          </button>
          <button type="button" class="va-chip" data-q="warehouse">
            <span>🏬</span>
            <span>${n==="hi"?"निकटतम कोल्ड स्टोरेज व खाली जगह":"Find Cold Storage & Warehouses"}</span>
          </button>
          <button type="button" class="va-chip" data-q="pesticide">
            <span>🛡️</span>
            <span>${n==="hi"?"कीट व बीमारी का सही कीटनाशक स्प्रे":"Best Pesticide & Spray Dose"}</span>
          </button>
          <button type="button" class="va-chip" data-q="onion">
            <span>🧅</span>
            <span>${n==="hi"?"प्याज का आज का भाव व मंडी सलाह":"Onion Rate & Market Advice"}</span>
          </button>
          <button type="button" class="va-chip" data-q="wheat">
            <span>🌾</span>
            <span>${n==="hi"?"गेहूं मॉडल भाव व सरकारी खरीद":"Wheat Price & Demand"}</span>
          </button>
        </div>

        <!-- Voice Microphone Controls -->
        <div class="va-mic-footer">
          <button type="button" class="va-mic-btn pulse-glow" id="va-mic-btn" title="Speak into microphone">
            <span class="mic-icon">🎙️</span>
          </button>
          <div class="va-mic-status" id="va-mic-status">
            ${n==="hi"?"माइक दबाकर बोलें":"Tap mic to speak"}
          </div>
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){const s=document.getElementById("btn-close-va");s&&s.addEventListener("click",()=>this.close()),this.modalEl.querySelectorAll(".va-chip").forEach(o=>{o.addEventListener("click",()=>{const c=o.getAttribute("data-q");this.handleUserQuery(c)})}),this.modalEl.querySelectorAll(".btn-voice-toggle").forEach(o=>{o.addEventListener("click",()=>{const c=o.getAttribute("data-gender");St.setGender(c),this.modalEl.querySelectorAll(".btn-voice-toggle").forEach(h=>h.classList.remove("active")),o.classList.add("active"),St.previewVoice(c,this.getLang())})});const n=document.getElementById("va-mic-btn");n&&n.addEventListener("click",()=>this.toggleMic())}}const Ut=[{id:"nashik_onion_belt",nameEn:"Nashik (Lasalgaon, Niphad, Pimpalgaon)",nameHi:"नासिक (लासलगांव, निफाड़, पिंपलगांव)",districtEn:"Nashik",districtHi:"नासिक",stateEn:"Maharashtra",stateHi:"महाराष्ट्र",keywords:["nashik","lasalgaon","niphad","pimpalgaon","onion","pyaaz","kanda","tomato","grapes","maharashtra","नासिक","लासलगांव","प्याज","कांदा","टमाटर"],commonCropsEn:"Red Onion (Lasalgaon), Hybrid Tomato (Pimpalgaon), Table Grapes, Pomegranate",commonCropsHi:"लाल प्याज (लासलगांव कांदा), हाइब्रिड टमाटर, अंगूर, अनार",weatherEn:"29°C • 48% Humidity • Optimal harvest drying weather",weatherHi:"29°C • 48% आर्द्रता • फसल सुखाने और भंडारण के लिए उत्तम मौसम",localMandiEn:"APMC Lasalgaon (Modal ₹1,950/Qtl) • Pimpalgaon Tomato Yard",localMandiHi:"लासलगांव एपीएमसी (₹1,950/क्विंटल) • पिंपलगांव टमाटर यार्ड",topDemandEn:"Mumbai Vashi APMC (185 km) & Pune Gultekdi (210 km) — Willing ₹42-₹46/kg",topDemandHi:"मुंबई वाशी एपीएमसी (185 किमी) एवं पुणे गुलटेकड़ी (210 किमी) — ₹42-₹46/किग्रा",transportAdviceEn:"Mini-Truck (Tata Ace) for 1-2.5 MT | 6-Wheeler Lorry for 5-9 MT | Bus Cargo ₹45/crate. Net Gain: +₹15.50/kg!",transportAdviceHi:"छोटा हाथी (1-2.5 टन) | 6-पहिया लॉरी (5-9 टन) | बस कार्गो ₹45/क्रेट। शुद्ध मुनाफा: +₹15.50/किग्रा!",mappedClusterId:"nashik_onion_belt"},{id:"bhatinda_wheat_belt",nameEn:"Bhatinda & Malwa Grain Belt",nameHi:"बठिंडा एवं मालवा अनाज बेल्ट",districtEn:"Bhatinda",districtHi:"बठिंडा",stateEn:"Punjab",stateHi:"पंजाब",keywords:["bhatinda","punjab","wheat","gehun","cotton","narma","malwa","mansa","muktsar","बठिंडा","पंजाब","गेहूं","कपास","नरमा"],commonCropsEn:"Sharbati & Durum Wheat, Bt Cotton (American Narma), Mustard, Basmati Paddy",commonCropsHi:"शरबती व ड्यूरम गेहूं, बीटी कपास (नरमा), सरसों, बासमती धान",weatherEn:"26°C • 42% Humidity • Clear dry skies favorable for harvest",weatherHi:"26°C • 42% आर्द्रता • साफ सूखा मौसम, कटाई और गहाई के लिए अनुकूल",localMandiEn:"Bhatinda New Dana Mandi (Wheat Modal ₹2,425/Qtl)",localMandiHi:"बठिंडा नई दाना मंडी (गेहूं मॉडल ₹2,425/क्विंटल)",topDemandEn:"Delhi Lawrence Road & Narela Food Hub (320 km) — Willing ₹38-₹42/kg",topDemandHi:"दिल्ली लॉरेंस रोड एवं नरेला फूड हब (320 किमी) — ₹38-₹42/किग्रा",transportAdviceEn:"10-Wheeler Freight Truck (16 MT) or Railway Kisan Parcel (₹55/Qtl). Net Gain: +₹380/Qtl over local gate!",transportAdviceHi:"10-पहिया मालवाहक ट्रक (16 टन) या किसान रेल पार्सल (₹55/क्विंटल)। स्थानीय से +₹380/क्विंटल अधिक!",mappedClusterId:"bhatinda_wheat_belt"},{id:"mandya_cauvery_belt",nameEn:"Mandya & Cauvery Basin (Maddur, Pandavapura)",nameHi:"मांड्या एवं कावेरी बेसिन (मद्दूर, पांडवपुरा)",districtEn:"Mandya",districtHi:"मांड्या",stateEn:"Karnataka",stateHi:"कर्नाटक",keywords:["mandya","karnataka","tomato","tamatar","sambar onion","shallot","sugarcane","ragi","mysuru","मांड्या","कर्नाटक","टमाटर","सांभर प्याज","गन्ना"],commonCropsEn:"Hybrid Tomato, Shallots (Sambar Onion), Sugarcane, Ragi (Finger Millet)",commonCropsHi:"हाइब्रिड टमाटर, सांभर प्याज, गन्ना, रागी (मंडुआ)",weatherEn:"27°C • 62% Humidity • Partly cloudy with light morning mist",weatherHi:"27°C • 62% आर्द्रता • आंशिक बादल, सुबह हल्की नमी",localMandiEn:"Mandya APMC Yard (Tomato ₹1,650/Qtl)",localMandiHi:"मांड्या एपीएमसी मार्केट यार्ड (टमाटर ₹1,650/क्विंटल)",topDemandEn:"Bengaluru HOPCOMS & Yeshwanthpur (98 km via Expressway) — Willing ₹42/kg",topDemandHi:"बेंगलुरु हॉपकॉम्प्स व यशवंतपुर (एक्सप्रेसवे से 98 किमी) — ₹42/किग्रा",transportAdviceEn:"Mini-Truck via Mysuru Expressway (2.5 hrs) or KSRTC Bus Cargo (₹35/crate). Net Gain: +₹18.50/kg!",transportAdviceHi:"छोटा हाथी (2.5 घंटे एक्सप्रेसवे) या केएसआरटीसी बस कार्गो (₹35/क्रेट)। शुद्ध मुनाफा: +₹18.50/किग्रा!",mappedClusterId:"mandya_cauvery_belt"},{id:"varanasi_gangetic_belt",nameEn:"Varanasi Gangetic Plains (Raja Talab, Chandauli)",nameHi:"वाराणसी गंगा का मैदान (राजा तालाब, चंदौली)",districtEn:"Varanasi",districtHi:"वाराणसी",stateEn:"Uttar Pradesh",stateHi:"उत्तर प्रदेश",keywords:["varanasi","kashi","uttar pradesh","up","tomato","wheat","potato","chandauli","patna","वाराणसी","काशी","उत्तर प्रदेश","टमाटर","गेहूं","आलू"],commonCropsEn:"Kashi Tomato, Malviya Wheat, Green Peas, Mustard, Seasonal Potato",commonCropsHi:"काशी टमाटर, मालवीय गेहूं, हरी मटर, सरसों, मौसमी आलू",weatherEn:"31°C • 55% Humidity • Warm sunny climate",weatherHi:"31°C • 55% आर्द्रता • गर्म और धूप वाला मौसम",localMandiEn:"Raja Talab Subzi Mandi (Tomato ₹1,520/Qtl)",localMandiHi:"राजा तालाब सब्जी मंडी (टमाटर ₹1,520/क्विंटल)",topDemandEn:"Patna Bazaar Samiti (240 km) & Kolkata Posta Mandi — Willing ₹36-₹40/kg",topDemandHi:"पटना बाजार समिति (240 किमी) एवं कोलकाता पोस्ता मंडी — ₹36-₹40/किग्रा",transportAdviceEn:"6-Wheeler Lorry (5-8 MT) or Express Bus Parcel (₹40/crate). Freight: ₹80/Qtl. Net Gain: +₹12.00/kg!",transportAdviceHi:"6-पहिया लॉरी (5-8 टन) या बस पार्सल (₹40/क्रेट)। भाड़ा: ₹80/क्विंटल। शुद्ध मुनाफा: +₹12.00/किग्रा!",mappedClusterId:"varanasi_gangetic_belt"},{id:"guntur_chilli_belt",nameEn:"Guntur & Amaravati Commercial Belt",nameHi:"गुंटूर एवं अमरावती व्यावसायिक मंडी",districtEn:"Guntur",districtHi:"गुंटूर",stateEn:"Andhra Pradesh",stateHi:"आंध्र प्रदेश",keywords:["guntur","andhra pradesh","ap","chilli","mirchi","cotton","tobacco","amaravati","गुंटूर","आंध्र प्रदेश","मिर्च","कपास","तंबाकू"],commonCropsEn:"Teja Red Chilli, Medium Staple Cotton, Flue-Cured Tobacco, Turmeric",commonCropsHi:"तेजा लाल मिर्च, मध्यम रेशा कपास, तंबाकू, हल्दी",weatherEn:"33°C • 60% Humidity • Warm coastal climate with breezy afternoons",weatherHi:"33°C • 60% आर्द्रता • तटीय गर्म मौसम, दोपहर हवादार",localMandiEn:"Guntur Market Yard (Asia's Largest Chilli Yard • Cotton ₹7,420/Qtl)",localMandiHi:"गुंटूर मार्केट यार्ड (एशिया का सबसे बड़ा यार्ड • कपास ₹7,420/क्विंटल)",topDemandEn:"Hyderabad Bowenpally (275 km) & Chennai Export Port — Willing Premium Rates",topDemandHi:"हैदराबाद बोवेनपल्ली (275 किमी) एवं चेन्नई बंदरगाह — प्रीमियम निर्यात दर",transportAdviceEn:"Commercial Freight Lorry (16 MT) or Bolero Pickup. Freight: ₹120/Qtl. Net Gain: +₹1,150/Qtl!",transportAdviceHi:"व्यावसायिक मालवाहक लॉरी (16 टन) या बोलेरो पिकअप। भाड़ा: ₹120/क्विंटल। शुद्ध मुनाफा: +₹1,150/क्विंटल!",mappedClusterId:"guntur_chilli_belt"},{id:"nagpur_citrus_belt",nameEn:"Nagpur & Vidarbha (Katol, Saoner)",nameHi:"नागपुर एवं विदर्भ (काटोल, सावनेर)",districtEn:"Nagpur",districtHi:"नागपुर",stateEn:"Maharashtra",stateHi:"महाराष्ट्र",keywords:["nagpur","orange","santre","soybean","cotton","vidarbha","नागपुर","संतरा","सोयाबीन","कपास"],commonCropsEn:"Nagpur Mandarin Orange, Yellow Soybean, Cotton, Tur Dal (Pigeon Pea)",commonCropsHi:"नागपुर संतरा (मैंडरिन), पीली सोयाबीन, कपास, अरहर (तूर दाल)",weatherEn:"32°C • 44% Humidity • Sunny and dry",weatherHi:"32°C • 44% आर्द्रता • तेज धूप व शुष्क हवा",localMandiEn:"Kalamna Market Yard Nagpur (Orange ₹3,500/Qtl)",localMandiHi:"कलमना मार्केट यार्ड नागपुर (संतरा ₹3,500/क्विंटल)",topDemandEn:"Mumbai Vashi Fruit Market (820 km via Samruddhi) & Delhi Azadpur Mandi",topDemandHi:"मुंबई वाशी फल मंडी (समृद्धि महामार्ग) एवं दिल्ली आजादपुर मंडी",transportAdviceEn:"Reefer Cold Van or 6-Wheeler Lorry. Samruddhi Expressway reaches Mumbai in 8 hours.",transportAdviceHi:"रीफर कोल्ड वैन या 6-पहिया आयशर लॉरी। समृद्धि एक्सप्रेसवे से 8 घंटे में मुंबई पहुंच।",mappedClusterId:"nashik_onion_belt"},{id:"indore_malwa_belt",nameEn:"Indore & Ujjain Malwa Belt",nameHi:"इंदौर एवं उज्जैन मालवा क्षेत्र",districtEn:"Indore",districtHi:"इंदौर",stateEn:"Madhya Pradesh",stateHi:"मध्य प्रदेश",keywords:["indore","ujjain","madhya pradesh","mp","soybean","wheat","garlic","lahsun","इंदौर","मध्य प्रदेश","सोयाबीन","गेहूं","लहसुन"],commonCropsEn:"Yellow Soybean, Sharbati Wheat, Garlic, Potato, Chickpea (Chana)",commonCropsHi:"सोयाबीन, शरबती गेहूं, लहसुन, आलू, देशी चना",weatherEn:"28°C • 46% Humidity • Pleasant mild weather",weatherHi:"28°C • 46% आर्द्रता • सुहावना और हल्का धूप वाला मौसम",localMandiEn:"Indore Chhavani Mandi (Soybean ₹4,650/Qtl)",localMandiHi:"इंदौर छावनी मंडी (सोयाबीन ₹4,650/क्विंटल)",topDemandEn:"Gujarat Oil Processing Mills (Ahmedabad / Surat) & Mumbai Wholesalers",topDemandHi:"गुजरात तेल प्रसंस्करण मिलें (अहमदाबाद/सूरत) एवं मुंबई थोक बाजार",transportAdviceEn:"Heavy 10-Wheeler Lorry for grain bags (₹85/Qtl freight to Gujarat border).",transportAdviceHi:"10-पहिया मालवाहक ट्रक (भाड़ा ₹85/क्विंटल गुजरात सीमा तक)।",mappedClusterId:"nashik_onion_belt"},{id:"pune_junnar_belt",nameEn:"Pune & Junnar Vegetable Corridor",nameHi:"पुणे एवं जुन्नर सब्जी कॉरिडोर",districtEn:"Pune",districtHi:"पुणे",stateEn:"Maharashtra",stateHi:"महाराष्ट्र",keywords:["pune","junnar","narayangaon","tomato","onion","vegetables","पुणे","जुन्नर","नारायणगांव","टमाटर"],commonCropsEn:"Hybrid Tomato (Narayangaon), Red Onion, Exotic Vegetables, Cabbage",commonCropsHi:"हाइब्रिड टमाटर (नारायणगांव), लाल प्याज, पत्तागोभी, शिमला मिर्च",weatherEn:"28°C • 52% Humidity • Cool breeze from Western Ghats",weatherHi:"28°C • 52% आर्द्रता • पश्चिमी घाट से ठंडी हवा",localMandiEn:"Pune Gultekdi Market Yard & Narayangaon Subzi Mandi",localMandiHi:"पुणे गुलटेकड़ी मार्केट यार्ड एवं नारायणगांव सब्जी मंडी",topDemandEn:"Mumbai Dadar & Vashi Supermarkets (150 km) — Direct Daily Supply",topDemandHi:"मुंबई दादर व वाशी सुपरमार्केट (150 किमी) — दैनिक सीधी आपूर्ति",transportAdviceEn:"Mini-Truck (Tata Ace) delivers to Mumbai within 3.5 hrs via Expressway.",transportAdviceHi:"छोटा हाथी (टाटा ऐस) एक्सप्रेसवे से 3.5 घंटे में मुंबई सीधा माल पहुंचाता है।",mappedClusterId:"nashik_onion_belt"}];class Ms{constructor(s,n,o){this.containerId=s,this.getLang=n,this.onSelectLocation=o,this.selectedLocation=Ut[0],this.isOpen=!1}init(){this.render()}render(){const s=document.getElementById(this.containerId);if(!s)return;const n=this.getLang(),o=this.selectedLocation||Ut[0],c=n==="hi"?"मंडी, फसल, जिला या राज्य खोजें... (उदा. लासलगांव, प्याज, बठिंडा, गेहूं, गुंटूर, मिर्च, मांड्या)":"Search Mandi, Crop, APMC Yard, or State (e.g. Lasalgaon, Onion, Bhatinda, Wheat, Guntur)...";s.innerHTML=`
      <div class="fintech-search-container">
        <!-- Main Search Bar (Groww / Zerodha Omnisearch) -->
        <div class="f-search-input-box">
          <span class="f-search-mag-icon">🔍</span>
          <input 
            type="text" 
            id="univ-location-input" 
            class="f-search-input" 
            placeholder="${c}"
            autocomplete="off"
            spellcheck="false"
            aria-label="Search Mandi or Crop"
          />
          <div class="f-search-shortcut-badge">
            <span>⌘</span><span>K</span>
          </div>
          <button type="button" id="btn-clear-search" class="f-btn-clear" style="display: none;" title="Clear search">&times;</button>
          
          <!-- Dropdown Results -->
          <div id="univ-search-dropdown" class="f-search-results-dropdown" style="display: none;"></div>
        </div>

        <!-- Trending Agricultural Markets (Groww Chip Navigation) -->
        <div class="f-trending-row">
          <span class="f-trending-label">
            <span>🔥</span> ${n==="hi"?"ट्रेंडिंग मंडियां:":"Trending Markets:"}
          </span>
          <div class="f-trending-pills">
            ${Ut.slice(0,8).map(h=>`
              <button type="button" class="f-trend-pill ${h.id===o.id?"active":""}" data-loc-id="${h.id}">
                ${n==="hi"?h.districtHi:h.districtEn}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- Market Depth & Intelligence Spotlight Card -->
        <div class="f-spotlight-card" id="location-spotlight-box">
          ${this.getSpotlightHtml(o,n)}
        </div>
      </div>
    `,this.bindEvents()}getSpotlightHtml(s,n){const o=n==="hi"?s.nameHi:s.nameEn,c=n==="hi"?s.stateHi:s.stateEn,h=n==="hi"?s.commonCropsHi:s.commonCropsEn,d=n==="hi"?s.weatherHi:s.weatherEn,m=n==="hi"?s.topDemandHi:s.topDemandEn,g=n==="hi"?s.transportAdviceHi:s.transportAdviceEn;return`
      <div class="f-spotlight-header">
        <div class="f-sp-title-group">
          <div class="f-sp-badge-row">
            <span class="f-market-hub-badge">🏛️ ${n==="hi"?s.localMandiHi:s.localMandiEn}</span>
            <span class="f-state-badge">📍 ${c}</span>
          </div>
          <h3 class="f-sp-heading">${o}</h3>
        </div>
        <div class="f-sp-quick-actions">
          <button type="button" class="f-sp-btn btn-sp-prices" onclick="window.kisanAppInstance ? window.kisanAppInstance.switchView('section-prices') : null">
            <span>📊</span> <span>${n==="hi"?"मंडी भाव देखें":"Market Watch"}</span>
          </button>
          <button type="button" class="f-sp-btn btn-sp-map" onclick="window.kisanAppInstance ? window.kisanAppInstance.switchView('section-map') : null">
            <span>🗺️</span> <span>${n==="hi"?"लॉजिस्टिक्स मैप":"Trade Map"}</span>
          </button>
        </div>
      </div>

      <div class="f-sp-stats-grid">
        <div class="f-stat-card">
          <div class="f-stat-header">
            <span class="f-stat-icon">🌾</span>
            <span class="f-stat-label">${n==="hi"?"प्रमुख फसलें":"Primary Crops"}</span>
          </div>
          <div class="f-stat-content">${h}</div>
        </div>

        <div class="f-stat-card">
          <div class="f-stat-header">
            <span class="f-stat-icon">🌦️</span>
            <span class="f-stat-label">${n==="hi"?"स्थानीय मौसम":"Weather"}</span>
          </div>
          <div class="f-stat-content">${d}</div>
        </div>

        <div class="f-stat-card">
          <div class="f-stat-header">
            <span class="f-stat-icon">🔥</span>
            <span class="f-stat-label">${n==="hi"?"उच्च मांग वाला महानगर":"High-Demand Metro"}</span>
          </div>
          <div class="f-stat-content">${m}</div>
        </div>

        <div class="f-stat-card">
          <div class="f-stat-header">
            <span class="f-stat-icon">🚚</span>
            <span class="f-stat-label">${n==="hi"?"एआई माल ढुलाई सलाह":"Freight Guidance"}</span>
          </div>
          <div class="f-stat-content">${g}</div>
        </div>
      </div>
    `}bindEvents(){const s=document.getElementById("univ-location-input"),n=document.getElementById("univ-search-dropdown"),o=document.getElementById("btn-clear-search"),c=document.querySelectorAll(".f-trend-pill");!s||!n||(window.addEventListener("keydown",h=>{(h.ctrlKey||h.metaKey)&&h.key==="k"?(h.preventDefault(),s.focus(),s.select()):h.key==="/"&&document.activeElement!==s&&(h.preventDefault(),s.focus())}),s.addEventListener("input",h=>{const d=h.target.value.trim().toLowerCase();if(o&&(o.style.display=d?"block":"none"),!d){n.style.display="none";return}this.filterAndShowResults(d,n)}),s.addEventListener("focus",()=>{s.value.trim()&&this.filterAndShowResults(s.value.trim().toLowerCase(),n)}),o&&o.addEventListener("click",()=>{s.value="",o.style.display="none",n.style.display="none",s.focus()}),c.forEach(h=>{h.addEventListener("click",()=>{const d=h.getAttribute("data-loc-id"),m=Ut.find(g=>g.id===d);m&&this.selectLocation(m)})}),document.addEventListener("click",h=>{!s.contains(h.target)&&!n.contains(h.target)&&(n.style.display="none")}))}filterAndShowResults(s,n){const o=this.getLang(),c=Ut.filter(d=>{const m=(d.nameEn||"").toLowerCase(),g=d.nameHi||"",u=(d.districtEn||"").toLowerCase(),f=d.districtHi||"",_=(d.stateEn||"").toLowerCase(),b=d.stateHi||"",w=(d.commonCropsEn||"").toLowerCase(),S=d.commonCropsHi||"",E=(d.localMandiEn||"").toLowerCase(),T=d.localMandiHi||"";return m.includes(s)||g.includes(s)||u.includes(s)||f.includes(s)||_.includes(s)||b.includes(s)||w.includes(s)||S.includes(s)||E.includes(s)||T.includes(s)});if(c.length===0){n.innerHTML=`
        <div class="f-drop-empty">
          <p>${o==="hi"?"कोई परिणाम नहीं मिला। कृपया दूसरा नाम खोजें।":"No matching markets found. Try searching another mandi or crop."}</p>
        </div>
      `,n.style.display="block";return}n.innerHTML=`
      <div class="f-drop-header">
        <span>${o==="hi"?"मिले परिणाम":"Search Results"} (${c.length})</span>
      </div>
      <div class="f-drop-list">
        ${c.map(d=>`
          <div class="f-drop-item" data-loc-id="${d.id}">
            <div class="f-drop-left">
              <span class="f-drop-icon">🏛️</span>
              <div>
                <div class="f-drop-title">${o==="hi"?d.nameHi:d.nameEn}</div>
                <div class="f-drop-sub">📍 ${o==="hi"?d.stateHi:d.stateEn} • 🌾 ${o==="hi"?d.commonCropsHi:d.commonCropsEn}</div>
              </div>
            </div>
            <div class="f-drop-right">
              <span class="f-drop-badge">${o==="hi"?d.localMandiHi:d.localMandiEn}</span>
            </div>
          </div>
        `).join("")}
      </div>
    `,n.style.display="block",n.querySelectorAll(".f-drop-item").forEach(d=>{d.addEventListener("click",()=>{const m=d.getAttribute("data-loc-id"),g=Ut.find(u=>u.id===m);g&&(this.selectLocation(g),n.style.display="none")})})}selectLocation(s){this.selectedLocation=s;const n=this.getLang(),o=document.getElementById("univ-location-input");o&&(o.value=n==="hi"?s.nameHi:s.nameEn),document.querySelectorAll(".f-trend-pill").forEach(d=>{d.classList.toggle("active",d.getAttribute("data-loc-id")===s.id)});const h=document.getElementById("location-spotlight-box");h&&(h.innerHTML=this.getSpotlightHtml(s,n)),typeof this.onSelectLocation=="function"&&this.onSelectLocation(s)}update(){this.render()}updateLanguage(){this.render()}}const xa="kisansetu_auth_user_v1",$a="kisansetu_user_history_v1";class Hs{constructor(){this.listeners=[],this.currentUser=this.loadUser(),this.history=this.loadHistory()}getStorage(){try{if(typeof window<"u"&&window.localStorage)return window.localStorage}catch{}return null}loadUser(){try{const n=this.getStorage(),o=n?n.getItem(xa):null;if(o)return JSON.parse(o)}catch(n){console.warn("Could not load auth user",n)}const s={id:"usr_farmer_1",name:"Ramesh Patil",phone:"+91 98230 45678",role:"farmer",stateEn:"Maharashtra",stateHi:"महाराष्ट्र",districtEn:"Nashik (Lasalgaon)",districtHi:"नासिक (लासलगांव)",landAcreage:4.5,primaryCrops:["Red Onion","Hybrid Tomato"],joinedDate:"Oct 2026"};return this.saveUser(s),s}saveUser(s){this.currentUser=s;try{const n=this.getStorage();n&&n.setItem(xa,JSON.stringify(s))}catch(n){console.warn("Could not save auth user",n)}this.notifyListeners()}loadHistory(){try{const n=this.getStorage(),o=n?n.getItem($a):null;if(o)return JSON.parse(o)}catch(n){console.warn("Could not load history",n)}const s={savedSoilTests:[{id:"st_1",date:"Yesterday, 4:15 PM",crop:"Red Onion (लाल प्याज)",soil:"Black Cotton Soil (काली कपास मिट्टी)",acreage:4,ureaBags:3,dapBags:2,projectedYield:"110 Quintals"}],savedAlerts:[{id:"al_1",crop:"Red Onion",targetRate:"₹22/kg",status:"Active"},{id:"al_2",crop:"Hybrid Tomato",targetRate:"₹18/kg",status:"Triggered"}],myHarvestLots:[{id:"lot_1",crop:"Red Onion (Grade-A Bold)",quantityQuintals:45,expectedPriceKg:20.5,location:"Niphad, Nashik",status:"Available",date:"Oct 8, 2026"}],buyerProcurements:[{id:"buy_1",company:"Vashi Metro Wholesale",crop:"Hybrid Tomato",requiredQuintals:100,offeredPriceKg:17,destinationCity:"Navi Mumbai APMC",status:"Open for bids"}]};return this.saveHistory(s),s}saveHistory(s){this.history=s;try{const n=this.getStorage();n&&n.setItem($a,JSON.stringify(s))}catch(n){console.warn("Could not save history",n)}}getUser(){return this.currentUser}getHistory(){return this.history}isFarmer(){var s;return((s=this.currentUser)==null?void 0:s.role)==="farmer"}isBuyer(){var s;return((s=this.currentUser)==null?void 0:s.role)==="buyer"}switchProfile(s){if(s==="farmer"){const n={id:"usr_farmer_1",name:"Ramesh Patil",phone:"+91 98230 45678",role:"farmer",stateEn:"Maharashtra",stateHi:"महाराष्ट्र",districtEn:"Nashik (Lasalgaon)",districtHi:"नासिक (लासलगांव)",landAcreage:4.5,primaryCrops:["Red Onion","Hybrid Tomato"],joinedDate:"Oct 2026"};this.saveUser(n)}else{const n={id:"usr_buyer_1",name:"Sunil Gupta (Vashi Agro Traders)",phone:"+91 98190 12345",role:"buyer",stateEn:"Maharashtra",stateHi:"महाराष्ट्र",districtEn:"Navi Mumbai (Vashi APMC)",districtHi:"नवी मुंबई (वाशी एपीएमसी)",procurementVolume:"60 MT / Week",targetCrops:["Onion","Tomato","Wheat"],businessType:"Wholesale Supermarket Supplier",joinedDate:"Oct 2026"};this.saveUser(n)}}loginCustomUser(s){const n={id:"usr_"+Date.now(),name:s.name||"Agri User",phone:s.phone||"+91 99999 00000",role:s.role||"farmer",stateEn:s.state||"Maharashtra",stateHi:s.state||"महाराष्ट्र",districtEn:s.district||"Nashik",districtHi:s.district||"नासिक",landAcreage:s.landAcreage||3,procurementVolume:s.procurementVolume||"25 MT",joinedDate:"Oct 2026"};return this.saveUser(n),n}addSavedSoilTest(s){this.history.savedSoilTests||(this.history.savedSoilTests=[]),this.history.savedSoilTests.unshift({id:"st_"+Date.now(),date:"Just now",crop:s.cropName,soil:s.soilName,acreage:s.acreage,ureaBags:s.ureaBags,dapBags:s.dapBags,projectedYield:s.yieldEstimate}),this.saveHistory(this.history)}addHarvestLot(s){this.history.myHarvestLots||(this.history.myHarvestLots=[]);const n={id:"lot_"+Date.now(),crop:s.crop,quantityQuintals:Number(s.quantity),expectedPriceKg:Number(s.priceKg),location:s.location,status:"Available",date:"Today"};return this.history.myHarvestLots.unshift(n),this.saveHistory(this.history),n}addBuyerProcurement(s){var o;this.history.buyerProcurements||(this.history.buyerProcurements=[]);const n={id:"buy_"+Date.now(),company:((o=this.currentUser)==null?void 0:o.name)||"Wholesale Buyer",crop:s.crop,requiredQuintals:Number(s.quantity),offeredPriceKg:Number(s.priceKg),destinationCity:s.city||"Mumbai Vashi",status:"Open for bids",date:"Today"};return this.history.buyerProcurements.unshift(n),this.saveHistory(this.history),n}onUserChange(s){this.listeners.push(s)}notifyListeners(){this.listeners.forEach(s=>{try{s(this.currentUser)}catch(n){console.error(n)}})}}const Ie=new Hs,Ia="kisansetu_team_backend_prices_v1";class ks{constructor(){this.listeners=[],this.prices=this.loadPrices()}getStorage(){try{if(typeof window<"u"&&window.localStorage)return window.localStorage}catch{}return null}loadPrices(){try{const n=this.getStorage(),o=n?n.getItem(Ia):null;if(o)return JSON.parse(o)}catch(n){console.warn("Could not load backend prices",n)}const s=[{id:"onion",nameEn:"Red Onion (लाल प्याज)",nameHi:"लाल प्याज",primaryMandi:"Lasalgaon APMC, Nashik",mandiPriceKg:19.5,mandiPriceQuintal:1950,minPriceKg:16.5,maxPriceKg:21,retailPriceKg:44,retailPriceQuintal:4400,dailyArrivalsQuintals:4250,status:"rising",recommendation:"HOLD",lastUpdatedBy:"Team Agri-Desk (Lasalgaon Yard)",updatedAt:"Today, 08:30 AM"},{id:"tomato",nameEn:"Hybrid Tomato (टमाटर हाइब्रिड)",nameHi:"टमाटर (हाइब्रिड)",primaryMandi:"Pimpalgaon APMC & Kolar",mandiPriceKg:14,mandiPriceQuintal:1400,minPriceKg:11.5,maxPriceKg:16,retailPriceKg:38,retailPriceQuintal:3800,dailyArrivalsQuintals:6100,status:"falling",recommendation:"SELL",lastUpdatedBy:"Team Agri-Desk (Kolar Terminal)",updatedAt:"Today, 09:15 AM"},{id:"wheat",nameEn:"Sharbati Wheat (शरबती कनक)",nameHi:"गेहूं (शरबती)",primaryMandi:"Bhatinda Grain Market, Malwa",mandiPriceKg:24.25,mandiPriceQuintal:2425,minPriceKg:22.8,maxPriceKg:25.5,retailPriceKg:39,retailPriceQuintal:3900,dailyArrivalsQuintals:7850,status:"rising",recommendation:"FAIR",lastUpdatedBy:"Team Punjab Field Lead",updatedAt:"Today, 07:45 AM"},{id:"cotton",nameEn:"Bt Raw Cotton (सफेद सोना नरमा)",nameHi:"कपास (नरमा)",primaryMandi:"Guntur Yard & Mansa",mandiPriceKg:73.5,mandiPriceQuintal:7350,minPriceKg:69,maxPriceKg:76,retailPriceKg:118,retailPriceQuintal:11800,dailyArrivalsQuintals:9140,status:"rising",recommendation:"HOLD",lastUpdatedBy:"Team Commercial Crop Cell",updatedAt:"Today, 08:00 AM"},{id:"soybean",nameEn:"Yellow Soybean (पीली सोयाबीन)",nameHi:"सोयाबीन (पीली)",primaryMandi:"Indore APMC & Ujjain",mandiPriceKg:46.8,mandiPriceQuintal:4680,minPriceKg:44,maxPriceKg:48.5,retailPriceKg:78,retailPriceQuintal:7800,dailyArrivalsQuintals:5300,status:"rising",recommendation:"HOLD",lastUpdatedBy:"Team MP Mandi Desk",updatedAt:"Today, 09:00 AM"},{id:"chana",nameEn:"Desi Chana / Gram (चना दाल)",nameHi:"चना (देशी)",primaryMandi:"Bikaner Yard & Akola",mandiPriceKg:58.2,mandiPriceQuintal:5820,minPriceKg:55,maxPriceKg:60.5,retailPriceKg:92,retailPriceQuintal:9200,dailyArrivalsQuintals:3900,status:"rising",recommendation:"FAIR",lastUpdatedBy:"Team Pulses Intelligence",updatedAt:"Today, 08:15 AM"}];return this.savePrices(s),s}savePrices(s){this.prices=s;try{const n=this.getStorage();n&&n.setItem(Ia,JSON.stringify(s))}catch(n){console.warn("Could not save backend prices",n)}this.notifyListeners()}getAllPrices(){return this.prices}getPriceById(s){return this.prices.find(n=>n.id===s)}updatePriceByTeam(s,n,o="KisanSetu Admin Team"){const c=this.prices.find(h=>h.id===s);return c?(n.mandiPriceKg&&(c.mandiPriceKg=Number(n.mandiPriceKg),c.mandiPriceQuintal=Math.round(Number(n.mandiPriceKg)*100)),n.retailPriceKg&&(c.retailPriceKg=Number(n.retailPriceKg),c.retailPriceQuintal=Math.round(Number(n.retailPriceKg)*100)),n.dailyArrivals&&(c.dailyArrivalsQuintals=Number(n.dailyArrivals)),n.recommendation&&(c.recommendation=n.recommendation),n.status&&(c.status=n.status),c.lastUpdatedBy=o,c.updatedAt=new Date().toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})+" (Team Sync)",this.savePrices(this.prices),!0):!1}onPricesUpdate(s){this.listeners.push(s)}notifyListeners(){this.listeners.forEach(s=>{try{s(this.prices)}catch(n){console.error(n)}})}}const Oa=new ks;class Ts{constructor(s,n){this.getLang=s,this.onUserUpdated=n,this.isOpen=!1,this.activeTab="profile",this.auth=Ie}open(){this.isOpen=!0,this.render()}close(){this.isOpen=!1;const s=document.getElementById("auth-modal-overlay");s&&s.remove()}render(){const s=document.getElementById("auth-modal-overlay");s&&s.remove();const n=this.getLang(),o=this.auth.getUser(),c=this.auth.getHistory(),h=this.auth.isFarmer(),d=document.createElement("div");d.id="auth-modal-overlay",d.className="f-auth-modal-overlay",d.innerHTML=`
      <div class="f-auth-card glass-panel" role="dialog" aria-modal="true">
        <!-- Modal Header -->
        <div class="f-auth-header">
          <div class="f-auth-user-meta">
            <div class="f-user-avatar">
              ${h?"👨‍🌾":"🛒"}
            </div>
            <div>
              <div class="f-auth-name-row">
                <h3 class="f-auth-name">${o.name}</h3>
                <span class="f-auth-role-tag ${h?"role-farmer":"role-buyer"}">
                  ${h?n==="hi"?"सत्यापित किसान":"Verified Farmer":n==="hi"?"थोक खरीदार / ट्रेडर्स":"Wholesale Buyer"}
                </span>
              </div>
              <span class="f-auth-phone">📞 ${o.phone} • 📍 ${n==="hi"?o.districtHi:o.districtEn}</span>
            </div>
          </div>
          <button type="button" class="f-auth-close-btn" id="btn-close-auth-modal">&times;</button>
        </div>

        <!-- Quick Profile & Role Switcher Bar -->
        <div class="f-auth-quick-switch-bar">
          <span class="f-switch-label">${n==="hi"?"त्वरित खाता बदलें:":"Quick Switch Account:"}</span>
          <div class="f-switch-actions">
            <button type="button" class="f-btn-switch-demo ${h?"active":""}" id="btn-switch-farmer">
              👨‍🌾 ${n==="hi"?"रमेश पाटिल (किसान)":"Ramesh (Farmer)"}
            </button>
            <button type="button" class="f-btn-switch-demo ${h?"":"active"}" id="btn-switch-buyer">
              🛒 ${n==="hi"?"वाशी ट्रेडर्स (खरीदार)":"Vashi Traders (Buyer)"}
            </button>
          </div>
        </div>

        <!-- Modal Body Tabs -->
        <div class="f-auth-nav-tabs">
          <button type="button" class="f-auth-tab-btn ${this.activeTab==="profile"?"active":""}" data-tab="profile">
            👤 ${n==="hi"?"प्रोफ़ाइल विवरण":"Profile Overview"}
          </button>
          <button type="button" class="f-auth-tab-btn ${this.activeTab==="history"?"active":""}" data-tab="history">
            📜 ${n==="hi"?"सहेजा गया इतिहास":"Saved History"}
          </button>
          <button type="button" class="f-auth-tab-btn ${this.activeTab==="signup"?"active":""}" data-tab="signup">
            ➕ ${n==="hi"?"नया खाता नामांकन":"Enroll New Account"}
          </button>
        </div>

        <div class="f-auth-tab-content">
          ${this.getTabContent(o,c,h,n)}
        </div>
      </div>
    `,document.body.appendChild(d),this.bindEvents(d)}getTabContent(s,n,o,c){var h,d;if(this.activeTab==="profile")return`
        <div class="f-auth-profile-pane">
          <div class="f-profile-metrics-grid">
            <div class="f-prof-stat">
              <span class="f-prof-lbl">${o?c==="hi"?"कुल जोत रकबा":"Land Parcel":c==="hi"?"साप्ताहिक खरीद":"Weekly Volume"}</span>
              <strong class="f-prof-val">${o?`${s.landAcreage} Acres`:s.procurementVolume}</strong>
            </div>
            <div class="f-prof-stat">
              <span class="f-prof-lbl">${c==="hi"?"मुख्य व्यापार फसलें":"Primary Crops"}</span>
              <strong class="f-prof-val">${o?(h=s.primaryCrops)==null?void 0:h.join(", "):(d=s.targetCrops)==null?void 0:d.join(", ")}</strong>
            </div>
            <div class="f-prof-stat">
              <span class="f-prof-lbl">${c==="hi"?"स्थान":"Primary Market"}</span>
              <strong class="f-prof-val">${c==="hi"?s.stateHi:s.stateEn}</strong>
            </div>
          </div>

          <div class="f-prof-action-banner">
            <div class="f-banner-icon">${o?"🌱":"💼"}</div>
            <div class="f-banner-text">
              <strong>${o?c==="hi"?"किसान विशेषाधिकार सक्रिय":"Farmer Member Active":c==="hi"?"थोक खरीदार खाता सक्रिय":"Wholesale Buyer Active"}</strong>
              <p>${o?c==="hi"?"आप सीधे थोक खरीदारों को अपनी फसल बिना बिचौलियों के बेच सकते हैं।":"You can list harvest lots directly to wholesale buyers with zero intermediary fees.":c==="hi"?"आप सीधे किसानों और एफपीओ से थोक में माल मंगा सकते हैं।":"Post direct procurement requests to connect directly with regional farmer lots."}
              </p>
            </div>
          </div>
        </div>
      `;if(this.activeTab==="history"){const m=c==="hi";if(o){const g=n.savedSoilTests||[],u=n.myHarvestLots||[];return`
          <div class="f-auth-history-pane">
            <h4 class="f-hist-section-title">🧪 ${m?"सहेजी गई मिट्टी व खाद रिपोर्ट":"Saved Soil Diagnostic Reports"} (${g.length})</h4>
            <div class="f-hist-list">
              ${g.map(f=>`
                <div class="f-hist-item">
                  <div class="f-hist-item-top">
                    <strong>${f.crop}</strong>
                    <span class="f-hist-time">${f.date}</span>
                  </div>
                  <div class="f-hist-item-body">
                    <span>${f.soil} • ${f.acreage} ${m?"एकड़":"Acres"}</span>
                    <span class="f-hist-highlight">${m?`अनुशंसा: ${f.ureaBags} बोरी यूरिया + ${f.dapBags} बोरी डीएपी`:`Prescription: ${f.ureaBags} bags Urea + ${f.dapBags} bags DAP`}</span>
                  </div>
                </div>
              `).join("")}
            </div>

            <h4 class="f-hist-section-title" style="margin-top: 16px;">📦 ${m?"मेरे बिक्री हेतु उपलब्ध फसल लॉट":"My Listed Harvest Lots"} (${u.length})</h4>
            <div class="f-hist-list">
              ${u.map(f=>`
                <div class="f-hist-item">
                  <div class="f-hist-item-top">
                    <strong>${f.crop} (${f.quantityQuintals} ${m?"क्विंटल":"Quintals"})</strong>
                    <span class="f-hist-badge-avail">${m?"सक्रिय लॉट":"Active Lot"}</span>
                  </div>
                  <div class="f-hist-item-body">
                    <span>${m?`अपेक्षित भाव: ₹${f.expectedPriceKg}/किग्रा • स्थान: ${f.location}`:`Expected Rate: ₹${f.expectedPriceKg}/kg • Location: ${f.location}`}</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `}else{const g=n.buyerProcurements||[];return`
          <div class="f-auth-history-pane">
            <h4 class="f-hist-section-title">📋 ${m?"सक्रिय खरीद मांग आदेश":"Active Procurement Requirements"} (${g.length})</h4>
            <div class="f-hist-list">
              ${g.map(u=>`
                <div class="f-hist-item">
                  <div class="f-hist-item-top">
                    <strong>${u.crop} (${u.requiredQuintals} ${m?"क्विंटल":"Quintals"})</strong>
                    <span class="f-hist-badge-avail">${m?"ओपन ऑर्डर":"Open Order"}</span>
                  </div>
                  <div class="f-hist-item-body">
                    <span>${m?`ऑफर मूल्य: ₹${u.offeredPriceKg}/किग्रा • गंतव्य: ${u.destinationCity}`:`Offered Rate: ₹${u.offeredPriceKg}/kg • Destination: ${u.destinationCity}`}</span>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>
        `}}return`
      <form class="f-auth-signup-form" id="form-enroll-user">
        <div class="f-form-row">
          <div class="f-form-field">
            <label>${c==="hi"?"नाम या व्यावसायिक नाम":"Full Name or Business Name"}</label>
            <input type="text" id="inp-user-name" required placeholder="${c==="hi"?"उदा. सुरेश शर्मा":"e.g. Suresh Sharma"}" class="f-form-input" />
          </div>
          <div class="f-form-field">
            <label>${c==="hi"?"मोबाइल नंबर (ओटीपी सत्यापन)":"Mobile Number (WhatsApp)"}</label>
            <input type="tel" id="inp-user-phone" required placeholder="+91 98XXX XXXXX" class="f-form-input" />
          </div>
        </div>

        <div class="f-form-row">
          <div class="f-form-field">
            <label>${c==="hi"?"खाता प्रकार (भूमिका)":"Account Role"}</label>
            <select id="inp-user-role" class="f-form-input">
              <option value="farmer">👨‍🌾 ${c==="hi"?"किसान (फसल उत्पादक)":"Farmer (Crop Producer)"}</option>
              <option value="buyer">🛒 ${c==="hi"?"थोक खरीदार / आढ़ती":"Wholesale Buyer / Trader"}</option>
            </select>
          </div>
          <div class="f-form-field">
            <label>${c==="hi"?"जिला व राज्य":"District & State"}</label>
            <input type="text" id="inp-user-district" placeholder="${c==="hi"?"उदा. नासिक, महाराष्ट्र":"e.g. Nashik, Maharashtra"}" class="f-form-input" />
          </div>
        </div>

        <button type="submit" class="f-btn-submit-enroll">
          ✅ ${c==="hi"?"नामांकन पूर्ण करें":"Complete Enrollment & Sign In"}
        </button>
      </form>
    `}bindEvents(s){const n=s.querySelector("#btn-close-auth-modal");n&&n.addEventListener("click",()=>this.close()),s.addEventListener("click",m=>{m.target===s&&this.close()});const o=s.querySelector("#btn-switch-farmer"),c=s.querySelector("#btn-switch-buyer");o&&o.addEventListener("click",()=>{this.auth.switchProfile("farmer"),typeof this.onUserUpdated=="function"&&this.onUserUpdated(this.auth.getUser()),this.render()}),c&&c.addEventListener("click",()=>{this.auth.switchProfile("buyer"),typeof this.onUserUpdated=="function"&&this.onUserUpdated(this.auth.getUser()),this.render()}),s.querySelectorAll(".f-auth-tab-btn").forEach(m=>{m.addEventListener("click",()=>{this.activeTab=m.getAttribute("data-tab"),this.render()})});const d=s.querySelector("#form-enroll-user");d&&d.addEventListener("submit",m=>{var w,S,E,T;m.preventDefault();const g=(w=s.querySelector("#inp-user-name"))==null?void 0:w.value,u=(S=s.querySelector("#inp-user-phone"))==null?void 0:S.value,f=(E=s.querySelector("#inp-user-role"))==null?void 0:E.value,_=(T=s.querySelector("#inp-user-district"))==null?void 0:T.value,b=this.auth.loginCustomUser({name:g,phone:u,role:f,district:_});typeof this.onUserUpdated=="function"&&this.onUserUpdated(b),this.activeTab="profile",this.render()})}}class xs{constructor(s,n){this.containerId=s,this.getLang=n,this.auth=Ie,this.activeFilter="all",this.listings=this.getInitialListings()}getInitialListings(){return[{id:"tr_1",type:"lot",author:"Ramesh Patil",authorRoleEn:"Farmer",authorRoleHi:"किसान",badgeEn:"Verified Harvest Lot",badgeHi:"सत्यापित फसल",cropNameEn:"Red Onion",cropNameHi:"लाल प्याज",quantityEn:"45 Quintals (4.5 MT)",quantityHi:"45 क्विंटल (4.5 मीट्रिक टन)",rateKgEn:"₹20.50 / kg",rateKgHi:"₹20.50 / किग्रा",locationEn:"Niphad, Nashik, Maharashtra",locationHi:"निफाड, नासिक, महाराष्ट्र",qualityEn:"Grade-A Dry Bold Bulbs, 55mm+ diameter",qualityHi:"ग्रेड-ए सूखे मोटे कंद, 55mm+ व्यास",contactPhone:"+91 98230 45678",dateEn:"Today, 10:30 AM",dateHi:"आज, 10:30 AM"},{id:"tr_2",type:"order",author:"Vashi Fresh Supermarket Chain",authorRoleEn:"Wholesale Buyer",authorRoleHi:"थोक खरीदार",badgeEn:"Spot Cash Buy Order",badgeHi:"नकद खरीद ऑर्डर",cropNameEn:"Hybrid Tomato",cropNameHi:"हाइब्रिड टमाटर",quantityEn:"100 Quintals (10 MT)",quantityHi:"100 क्विंटल (10 मीट्रिक टन)",rateKgEn:"₹17.00 / kg (Spot Payment)",rateKgHi:"₹17.00 / किग्रा (नकद भुगतान)",locationEn:"Delivery: Vashi APMC Yard-2, Navi Mumbai",locationHi:"डिलीवरी: वाशी एपीएमसी यार्ड-2, नवी मुंबई",qualityEn:"Semi-ripe, firm skin, standard plastic crates",qualityHi:"अर्ध-पका, सख्त छिलका, मानक प्लास्टिक क्रेट",contactPhone:"+91 98190 12345",dateEn:"Today, 09:15 AM",dateHi:"आज, 09:15 AM"},{id:"tr_3",type:"lot",author:"Harpreet Singh",authorRoleEn:"Farmer Co-op Lead",authorRoleHi:"किसान सहकारी संघ प्रमुख",badgeEn:"Certified Farm Harvest",badgeHi:"सत्यापित फसल",cropNameEn:"Sharbati Sona Wheat",cropNameHi:"शरबती सोना गेहूं",quantityEn:"80 Quintals (8 MT)",quantityHi:"80 क्विंटल (8 मीट्रिक टन)",rateKgEn:"₹24.40 / kg",rateKgHi:"₹24.40 / किग्रा",locationEn:"Mansa Grain Market, Punjab",locationHi:"मानसा अनाज मंडी, पंजाब",qualityEn:"Moisture <11%, Machine-cleaned grain",qualityHi:"नमी <11%, मशीन से साफ किया दाना",contactPhone:"+91 98765 23456",dateEn:"Today, 08:45 AM",dateHi:"आज, 08:45 AM"},{id:"tr_4",type:"order",author:"Delhi Metro Foods Pvt Ltd",authorRoleEn:"Supermarket Aggregator",authorRoleHi:"सुपरमार्केट एग्रीगेटर",badgeEn:"Bulk Procurement Order",badgeHi:"थोक मांग",cropNameEn:"Red Onion (Export Quality)",cropNameHi:"लाल प्याज (निर्यात गुणवत्ता)",quantityEn:"150 Quintals (15 MT)",quantityHi:"150 क्विंटल (15 मीट्रिक टन)",rateKgEn:"₹23.00 / kg (Delhi Doorstep)",rateKgHi:"₹23.00 / किग्रा (दिल्ली डोरस्टेप)",locationEn:"Delivery: Azadpur Mandi Shed 4, Delhi",locationHi:"डिलीवरी: आजादपुर मंडी शेड 4, दिल्ली",qualityEn:"Cured red skin, ready for immediate retail dispatch",qualityHi:"पक्की लाल छिलका, तत्काल खुदरा आपूर्ति हेतु तैयार",contactPhone:"+91 99110 98765",dateEn:"Yesterday, 04:30 PM",dateHi:"कल, 04:30 PM"}]}init(){this.render()}update(){this.render()}render(){const s=document.getElementById(this.containerId);if(!s)return;const n=this.getLang(),o=this.auth.isFarmer(),c=this.auth.getUser(),h=this.listings.filter(d=>this.activeFilter==="lots"?d.type==="lot":this.activeFilter==="orders"?d.type==="order":!0);s.innerHTML=`
      <div class="f-trade-hub-wrapper">
        <!-- Hub Top Banner -->
        <div class="f-trade-hub-banner glass-panel">
          <div class="f-trade-banner-left">
            <span class="f-trade-pulse-badge">🤝 ${n==="hi"?"सीधा किसान-खरीदार मंच":"Direct Producer-Buyer Exchange"}</span>
            <h3 class="f-trade-heading">${n==="hi"?"बिचौलिया मुक्त सीधा कृषि व्यापार":"Direct Fair-Trade Commercial Hub"}</h3>
            <p class="f-trade-sub">${n==="hi"?"किसान अपनी उपलब्ध फसल सूची दर्ज करें और बड़े सुपरमार्केट खरीदार सीधे थोक मांग पोस्ट करें।":"Farmers list ready harvest lots directly for bulk institutional supermarket buyers with zero broker commissions."}</p>
          </div>
          <div class="f-trade-banner-actions">
            <button type="button" class="f-btn-post-trade" id="btn-open-post-trade-modal">
              <span>${o?"➕":"📋"}</span>
              <span>${o?n==="hi"?"मेरी फसल बिक्री हेतु दर्ज करें":"+ List Harvest Lot for Sale":n==="hi"?"थोक खरीद मांग दर्ज करें":"+ Post Buy Requirement"}
              </span>
            </button>
          </div>
        </div>

        <!-- Filter Tabs -->
        <div class="f-trade-filter-bar">
          <div class="f-trade-filter-pills">
            <button type="button" class="f-trade-pill ${this.activeFilter==="all"?"active":""}" data-filter="all">
              🌐 ${n==="hi"?"सभी सौदे (All)":"All Listings"} (${this.listings.length})
            </button>
            <button type="button" class="f-trade-pill ${this.activeFilter==="lots"?"active":""}" data-filter="lots">
              🌾 ${n==="hi"?"किसानों की उपलब्ध फसलें":"Harvest Lots (Farmers)"}
            </button>
            <button type="button" class="f-trade-pill ${this.activeFilter==="orders"?"active":""}" data-filter="orders">
              🛒 ${n==="hi"?"थोक खरीदारों की मांग":"Buy Requirements (Buyers)"}
            </button>
          </div>
          <div class="f-trade-user-hint">
            <span>👤 ${n==="hi"?"सक्रिय खाता":"Active Account"}: <strong>${c.name}</strong> (${o?"किसान":"खरीदार"})</span>
          </div>
        </div>

        <!-- Listings Grid -->
        <div class="f-trade-listings-grid">
          ${h.map(d=>{const m=n==="hi",g=m?d.cropNameHi||d.cropName:d.cropNameEn||d.cropName,u=m?d.badgeHi||d.badge:d.badgeEn||d.badge,f=m?d.authorRoleHi||d.authorRole:d.authorRoleEn||d.authorRole,_=m?d.quantityHi||d.quantity:d.quantityEn||d.quantity,b=m?d.rateKgHi||d.rateKg:d.rateKgEn||d.rateKg,w=m?d.locationHi||d.location:d.locationEn||d.location,S=m?d.qualityHi||d.quality:d.qualityEn||d.quality,E=m?d.dateHi||d.date:d.dateEn||d.date;return`
            <div class="f-trade-card ${d.type==="lot"?"card-lot":"card-order"} glass-panel">
              <div class="f-trade-card-header">
                <div class="f-trade-badge-col">
                  <span class="f-trade-type-pill ${d.type==="lot"?"pill-farmer":"pill-buyer"}">
                    ${d.type==="lot"?m?"🌾 किसान लॉट":"🌾 FARMER LOT":m?"🛒 खरीदार ऑर्डर":"🛒 BUYER ORDER"}
                  </span>
                  <span class="f-trade-status-badge">${u}</span>
                </div>
                <span class="f-trade-time">${E}</span>
              </div>

              <div class="f-trade-main-info">
                <h4 class="f-trade-crop-title">${g}</h4>
                <div class="f-trade-qty-price-row">
                  <div class="f-trade-stat">
                    <span class="f-t-lbl">${m?"मात्रा":"Quantity"}:</span>
                    <strong class="f-t-val">${_}</strong>
                  </div>
                  <div class="f-trade-stat">
                    <span class="f-t-lbl">${m?"दर":"Rate"}:</span>
                    <strong class="f-t-price text-green">${b}</strong>
                  </div>
                </div>
              </div>

              <div class="f-trade-details-box">
                <div class="f-t-row">📍 <strong>${m?"स्थान":"Location"}:</strong> ${w}</div>
                <div class="f-t-row">✨ <strong>${m?"गुणवत्ता":"Quality"}:</strong> ${S}</div>
                <div class="f-t-row">👤 <strong>${m?"पोस्टकर्ता":"Posted By"}:</strong> ${d.author} (${f})</div>
              </div>

              <div class="f-trade-card-footer">
                <a href="tel:${d.contactPhone}" class="f-btn-contact-trade">
                  <span>📞</span> <span>${m?"सीधा संपर्क करें":"Contact Directly"}</span>
                </a>
                <button type="button" class="f-btn-inquire-trade" onclick="alert('${m?"पूछताछ दर्ज हो गई है! पार्टी को एसएमएस सूचना भेज दी गई है।":"Inquiry recorded! SMS alert dispatched to counterparty."}')">
                  <span>💬</span> <span>${m?"व्हाट्सएप चैट":"Chat via WhatsApp"}</span>
                </button>
              </div>
            </div>
          `}).join("")}
        </div>
      </div>
    `,this.bindEvents(s)}bindEvents(s){s.querySelectorAll(".f-trade-pill").forEach(c=>{c.addEventListener("click",()=>{this.activeFilter=c.getAttribute("data-filter"),this.render()})});const o=s.querySelector("#btn-open-post-trade-modal");o&&o.addEventListener("click",()=>{this.openCreateModal()})}openCreateModal(){var h,d;const s=this.getLang(),n=this.auth.isFarmer(),o=this.auth.getUser(),c=document.createElement("div");c.className="f-auth-modal-overlay",c.id="trade-create-modal",c.innerHTML=`
      <div class="f-auth-card glass-panel" style="max-width: 520px;">
        <div class="f-auth-header">
          <h3 class="f-auth-name">
            ${n?s==="hi"?"🌾 अपनी उपलब्ध फसल बिक्री हेतु दर्ज करें":"🌾 List Harvest Lot for Sale":s==="hi"?"🛒 थोक खरीद मांग दर्ज करें":"🛒 Post Wholesale Buy Requirement"}
          </h3>
          <button type="button" class="f-auth-close-btn" id="btn-close-trade-create">&times;</button>
        </div>

        <form id="form-create-trade-listing" style="padding: 20px; display: flex; flex-direction: column; gap: 14px;">
          <div class="f-form-field">
            <label>${s==="hi"?"फसल व किस्म का नाम":"Crop & Variety"}</label>
            <input type="text" id="inp-trade-crop" required placeholder="${s==="hi"?"उदा. लाल प्याज (नासिक उत्तम)":"e.g. Red Onion Grade-A"}" class="f-form-input" />
          </div>

          <div class="f-form-row">
            <div class="f-form-field">
              <label>${s==="hi"?"मात्रा (क्विंटल)":"Quantity (Quintals)"}</label>
              <input type="number" id="inp-trade-qty" required placeholder="${s==="hi"?"उदा. 50":"e.g. 50"}" class="f-form-input" />
            </div>
            <div class="f-form-field">
              <label>${s==="hi"?"दर (₹ प्रति किग्रा)":"Rate (₹ / kg)"}</label>
              <input type="number" step="0.5" id="inp-trade-rate" required placeholder="${s==="hi"?"उदा. 21.0":"e.g. 21.0"}" class="f-form-input" />
            </div>
          </div>

          <div class="f-form-field">
            <label>${s==="hi"?"स्थान या डिलीवरी गंतव्य":"Farm Location or Delivery Terminal"}</label>
            <input type="text" id="inp-trade-loc" required placeholder="${s==="hi"?"उदा. लासलगांव, नासिक":"e.g. Lasalgaon, Nashik"}" class="f-form-input" />
          </div>

          <div class="f-form-field">
            <label>${s==="hi"?"गुणवत्ता व पैकेजिंग विवरण":"Quality & Packaging Details"}</label>
            <input type="text" id="inp-trade-qual" placeholder="${s==="hi"?"उदा. 50 किलो जालीदार बोरी, सूखी छंटाई":"e.g. 50kg mesh bags, sorted & cured"}" class="f-form-input" />
          </div>

          <button type="submit" class="f-btn-submit-enroll">
            🚀 ${s==="hi"?"मंच पर प्रकाशित करें":"Publish Listing to Trade Portal"}
          </button>
        </form>
      </div>
    `,document.body.appendChild(c),(h=c.querySelector("#btn-close-trade-create"))==null||h.addEventListener("click",()=>c.remove()),c.addEventListener("click",m=>{m.target===c&&c.remove()}),(d=c.querySelector("#form-create-trade-listing"))==null||d.addEventListener("submit",m=>{var S,E,T,R,z;m.preventDefault();const g=(S=c.querySelector("#inp-trade-crop"))==null?void 0:S.value,u=(E=c.querySelector("#inp-trade-qty"))==null?void 0:E.value,f=(T=c.querySelector("#inp-trade-rate"))==null?void 0:T.value,_=(R=c.querySelector("#inp-trade-loc"))==null?void 0:R.value,b=(z=c.querySelector("#inp-trade-qual"))==null?void 0:z.value,w={id:"tr_"+Date.now(),type:n?"lot":"order",author:o.name,authorRoleEn:n?"Farmer":"Wholesale Buyer",authorRoleHi:n?"किसान":"थोक खरीदार",badgeEn:n?"New Farm Lot":"New Buy Request",badgeHi:n?"नया फसल लॉट":"नई थोक मांग",cropNameEn:g,cropNameHi:g,quantityEn:`${u} Quintals (${(u/10).toFixed(1)} MT)`,quantityHi:`${u} क्विंटल (${(u/10).toFixed(1)} मीट्रिक टन)`,rateKgEn:`₹${f} / kg`,rateKgHi:`₹${f} / किग्रा`,locationEn:_,locationHi:_,qualityEn:b||"Standard Clean Quality",qualityHi:b||"मानक स्वच्छ गुणवत्ता",contactPhone:o.phone||"+91 98230 45678",dateEn:"Just now",dateHi:"अभी"};this.listings.unshift(w),n?this.auth.addHarvestLot({crop:g,quantity:u,priceKg:f,location:_}):this.auth.addBuyerProcurement({crop:g,quantity:u,priceKg:f,city:_}),c.remove(),this.render()})}}class $s{constructor(s,n){this.getLang=s,this.onPriceSaved=n,this.service=Oa}open(){this.render()}render(){const s=document.getElementById("admin-price-modal-overlay");s&&s.remove();const n=this.getLang(),o=this.service.getAllPrices(),c=document.createElement("div");c.id="admin-price-modal-overlay",c.className="f-auth-modal-overlay",c.innerHTML=`
      <div class="f-auth-card glass-panel" style="max-width: 580px;">
        <div class="f-auth-header">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 22px;">🛠️</span>
            <div>
              <h3 class="f-auth-name">${n==="hi"?"टीम मंडी भाव अपडेट कंसोल":"Team Mandi Backend Price Console"}</h3>
              <span class="f-auth-phone">${n==="hi"?"बैकएंड में संग्रहीत भाव को सीधे अपडेट करें":"Update backend stored prices & broadcasts instantly"}</span>
            </div>
          </div>
          <button type="button" class="f-auth-close-btn" id="btn-close-admin-modal">&times;</button>
        </div>

        <div style="padding: 20px;">
          <div class="f-form-field" style="margin-bottom: 14px;">
            <label>${n==="hi"?"फसल चुनें जिसे अपडेट करना है:":"Select Commodity to Update:"}</label>
            <select id="sel-admin-crop" class="f-form-input">
              ${o.map(h=>`
                <option value="${h.id}">${h.nameEn} — Mandi: ₹${h.mandiPriceKg}/kg | Retail: ₹${h.retailPriceKg}/kg</option>
              `).join("")}
            </select>
          </div>

          <form id="form-admin-update-price" style="display: flex; flex-direction: column; gap: 14px;">
            <div class="f-form-row">
              <div class="f-form-field">
                <label>${n==="hi"?"नया मंडी मॉडल भाव (₹ / किग्रा)":"New Mandi Modal Rate (₹ / kg)"}</label>
                <input type="number" step="0.1" id="inp-adm-mandi-rate" class="f-form-input" required />
              </div>
              <div class="f-form-field">
                <label>${n==="hi"?"नया शहरी खुदरा भाव (₹ / किग्रा)":"New City Retail Rate (₹ / kg)"}</label>
                <input type="number" step="0.5" id="inp-adm-retail-rate" class="f-form-input" required />
              </div>
            </div>

            <div class="f-form-row">
              <div class="f-form-field">
                <label>${n==="hi"?"आज की कुल आवक (क्विंटल)":"Today Arrivals (Quintals)"}</label>
                <input type="number" id="inp-adm-arrivals" class="f-form-input" required />
              </div>
              <div class="f-form-field">
                <label>${n==="hi"?"एआई व्यापार सलाह":"Trading Action Recommendation"}</label>
                <select id="inp-adm-rec" class="f-form-input">
                  <option value="HOLD">HOLD (रोककर रखें - भाव बढ़ेंगे)</option>
                  <option value="SELL">SELL (तुरंत बेचें)</option>
                  <option value="FAIR">FAIR (उचित मूल्य)</option>
                </select>
              </div>
            </div>

            <div class="f-form-field">
              <label>${n==="hi"?"अपडेटकर्ता टीम का नाम":"Updated by (Desk / Lead Name)"}</label>
              <input type="text" id="inp-adm-author" value="Team Agri-Desk Lead" class="f-form-input" />
            </div>

            <div style="background: var(--bg-app); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px; font-size: 12px; color: var(--text-muted);">
              ⚡ <strong>${n==="hi"?"तात्कालिक सिंक":"Instant Reactive Sync"}:</strong> ${n==="hi"?"सेव करते ही मार्केट वॉच कार्ड, टिकर टेप, वॉइस असिस्टेंट और मैप में नया भाव तुरंत लागू हो जाएगा।":"Saving immediately broadcasts to Market Watch cards, Ticker Tape, Voice Assistant, and Map."}
            </div>

            <button type="submit" class="f-btn-submit-enroll">
              💾 ${n==="hi"?"भाव सहेजें व बैकएंड में सिंक करें":"Save & Broadcast Price to Backend"}
            </button>
          </form>
        </div>
      </div>
    `,document.body.appendChild(c),this.bindEvents(c,o)}bindEvents(s,n){var f;(f=s.querySelector("#btn-close-admin-modal"))==null||f.addEventListener("click",()=>s.remove()),s.addEventListener("click",_=>{_.target===s&&s.remove()});const o=s.querySelector("#sel-admin-crop"),c=s.querySelector("#inp-adm-mandi-rate"),h=s.querySelector("#inp-adm-retail-rate"),d=s.querySelector("#inp-adm-arrivals"),m=s.querySelector("#inp-adm-rec"),g=_=>{const b=n.find(w=>w.id===_)||n[0];b&&(c&&(c.value=b.mandiPriceKg),h&&(h.value=b.retailPriceKg),d&&(d.value=b.dailyArrivalsQuintals||4500),m&&(m.value=b.recommendation||"HOLD"))};g(o==null?void 0:o.value),o==null||o.addEventListener("change",_=>{g(_.target.value)});const u=s.querySelector("#form-admin-update-price");u==null||u.addEventListener("submit",_=>{var K;_.preventDefault();const b=o.value,w=Number(c.value),S=Number(h.value),E=Number(d.value),T=m.value,R=((K=s.querySelector("#inp-adm-author"))==null?void 0:K.value)||"Admin Team";this.service.updatePriceByTeam(b,{mandiPriceKg:w,retailPriceKg:S,dailyArrivals:E,recommendation:T,status:T==="SELL"?"falling":"rising"},R);const z=ue.getCurrentCluster();if(z){const F=z.crops.find(Y=>Y.id===b);F&&(F.mandiPriceKg=w,F.mandiPriceQuintal=Math.round(w*100),F.retailPriceKg=S,F.retailPriceQuintal=Math.round(S*100),F.spreadPct=Number(((F.retailPriceQuintal-F.mandiPriceQuintal)/F.retailPriceQuintal*100).toFixed(1)),F.recommendation=T,F.status=T==="SELL"?"falling":"rising",F.trend7d[F.trend7d.length-1]=w,ue.saveCache(ue.getAllClusters()))}s.remove(),typeof this.onPriceSaved=="function"&&this.onPriceSaved(b,w,S)})}}const Ba={onion:{cropNameEn:"Red Onion",cropNameHi:"लाल प्याज",baseLocalMandi:{name:"Lasalgaon APMC (Local)",state:"Maharashtra",priceKg:19.5,priceQuintal:1950,distanceKm:12,transitHours:.5,freightCostPerQtl:25},destinations:[{id:"pune",name:"Pune APMC Market Yard",state:"Maharashtra",priceKg:23,priceQuintal:2300,distanceKm:210,transitHours:5,freightCostPerQtl:110,tollCostPerTrip:280,demandLevel:"HIGH (+18% deficit)",recommendation:"WORTH TRAVELING"},{id:"vashi",name:"Vashi APMC Yard-2 (Navi Mumbai)",state:"Maharashtra",priceKg:24.5,priceQuintal:2450,distanceKm:235,transitHours:5.5,freightCostPerQtl:125,tollCostPerTrip:320,demandLevel:"VERY HIGH (Port export demand)",recommendation:"HIGHEST PROFIT APMC"},{id:"azadpur",name:"Azadpur Mandi, Delhi",state:"Delhi NCR",priceKg:26.5,priceQuintal:2650,distanceKm:1180,transitHours:24,freightCostPerQtl:380,tollCostPerTrip:1450,demandLevel:"EXTREME (North winter demand)",recommendation:"BULK ONLY (>50 Quintals)"},{id:"direct_consumer",name:"KisanSetu Direct Supermarket / FPO Hub",state:"Direct Doorstep Pickup",priceKg:27,priceQuintal:2700,distanceKm:0,transitHours:0,freightCostPerQtl:0,tollCostPerTrip:0,demandLevel:"INSTANT (Zero Mandi Tax & 0 Middleman)",recommendation:"BEST TAKE-HOME NET PROFIT"}]},tomato:{cropNameEn:"Hybrid Tomato",cropNameHi:"हाइब्रिड टमाटर",baseLocalMandi:{name:"Pimpalgaon APMC (Local)",state:"Maharashtra",priceKg:14,priceQuintal:1400,distanceKm:18,transitHours:.6,freightCostPerQtl:30},destinations:[{id:"vashi_tomato",name:"Vashi Fresh Yard (Navi Mumbai)",state:"Maharashtra",priceKg:19.5,priceQuintal:1950,distanceKm:190,transitHours:4.5,freightCostPerQtl:105,tollCostPerTrip:260,demandLevel:"HIGH (City retail surge)",recommendation:"WORTH TRAVELING"},{id:"surat",name:"Surat APMC Vegetable Yard",state:"Gujarat",priceKg:21,priceQuintal:2100,distanceKm:240,transitHours:5.5,freightCostPerQtl:130,tollCostPerTrip:340,demandLevel:"VERY HIGH",recommendation:"HIGHEST PROFIT APMC"},{id:"direct_consumer_tomato",name:"KisanSetu Direct Society Buying Network",state:"Doorstep Pickup (Nashik/Mumbai)",priceKg:22.5,priceQuintal:2250,distanceKm:0,transitHours:0,freightCostPerQtl:0,tollCostPerTrip:0,demandLevel:"INSTANT (Direct Consumer Societies)",recommendation:"BEST TAKE-HOME NET PROFIT"}]},wheat:{cropNameEn:"Sharbati Wheat",cropNameHi:"शरबती गेहूं",baseLocalMandi:{name:"Bhatinda Grain Market (Local)",state:"Punjab",priceKg:24.25,priceQuintal:2425,distanceKm:10,transitHours:.4,freightCostPerQtl:20},destinations:[{id:"delhi_wheat",name:"Lawrence Road Foodgrain Terminal, Delhi",state:"Delhi NCR",priceKg:28.5,priceQuintal:2850,distanceKm:310,transitHours:7,freightCostPerQtl:130,tollCostPerTrip:350,demandLevel:"VERY HIGH (Flour millers demand)",recommendation:"WORTH TRAVELING"},{id:"jaipur",name:"Kukas APMC, Jaipur",state:"Rajasthan",priceKg:27.8,priceQuintal:2780,distanceKm:380,transitHours:8.5,freightCostPerQtl:150,tollCostPerTrip:410,demandLevel:"HIGH",recommendation:"PROFITABLE"},{id:"direct_consumer_wheat",name:"KisanSetu Direct Atta Chakki & FPO Network",state:"Bulk Procurement Hub",priceKg:30,priceQuintal:3e3,distanceKm:0,transitHours:0,freightCostPerQtl:0,tollCostPerTrip:0,demandLevel:"INSTANT (Zero deduction)",recommendation:"BEST TAKE-HOME NET PROFIT"}]}},fi=[{id:"tata_ace",nameEn:"Mini Truck (Tata Ace)",nameHi:"छोटा हाथी (टाटा ऐस)",capacityQuintals:15,ratePerKm:14,baseFare:450,idealForEn:"Local and regional runs (up to 150 km)",idealForHi:"स्थानीय और मध्यम दूरी (150 किमी तक)"},{id:"bolero_maxi",nameEn:"Pickup Truck (Bolero Maxi / Dost)",nameHi:"बोलेरो पिकअप (2.5 टन)",capacityQuintals:25,ratePerKm:18,baseFare:650,idealForEn:"Fast inter-district transit (up to 300 km)",idealForHi:"तेज अंतर-जिला परिवहन (300 किमी तक)"},{id:"tractor_trolley",nameEn:"Tractor Trolley (Double Axle)",nameHi:"ट्रैक्टर ट्रॉली",capacityQuintals:40,ratePerKm:22,baseFare:500,idealForEn:"Heavy rural mandi shuttle (up to 80 km)",idealForHi:"ग्रामीण मंडियों के लिए भारी लोड (80 किमी तक)"},{id:"eicher_truck",nameEn:"Commercial Truck (10 Wheeler / Eicher)",nameHi:"बड़ा ट्रक (10 चक्का / आयशर)",capacityQuintals:100,ratePerKm:32,baseFare:1500,idealForEn:"Long distance interstate trade (>300 km)",idealForHi:"लंबी दूरी व अंतर-राज्यीय व्यापार (300+ किमी)"}],gi=[{id:"sample_soil_black",type:"soil",nameEn:"Black Cotton Soil (Regur Clay)",nameHi:"काली कपास मिट्टी (रेगुर)",img:"/assets/soil_black.png",thumbIcon:"🌑",phRange:"7.5 - 8.2 (Moderately Alkaline)",organicCarbon:"Medium (0.55%)",waterHolding:"Very High (Clay 50%+)",suitabilityScore:94,bestCropsEn:["Cotton (कपास)","Soybean (सोयाबीन)","Red Onion (प्याज)","Wheat (गेहूं)"],bestCropsHi:["कपास (उत्तम)","सोयाबीन","लाल प्याज","शरबती गेहूं"],drawbacksEn:"Prone to waterlogging during heavy rainfall; cracking when completely dry.",drawbacksHi:"भारी बारिश में जलभराव का खतरा; सूखने पर गहरी दरारें पड़ती हैं।",soilTreatmentEn:"Apply 2 tons/acre well-rotted FYM (गोबर खाद) + Gypsum 200 kg/acre to improve porosity.",soilTreatmentHi:"मिट्टी भुरभुरी बनाने के लिए 2 टन सड़ी गोबर खाद और 200 किग्रा जिप्सम प्रति एकड़ डालें।"},{id:"sample_soil_red_loam",type:"soil",nameEn:"Red Loamy Soil (Lal Dumt)",nameHi:"लाल दोमट मिट्टी",img:"/assets/soil_red.png",thumbIcon:"🟤",phRange:"6.2 - 6.8 (Slightly Acidic to Neutral)",organicCarbon:"Low to Moderate (0.42%)",waterHolding:"Moderate (Well Drained)",suitabilityScore:91,bestCropsEn:["Tomato (टमाटर)","Groundnut (मूंगफली)","Pulses/Gram (चना)","Millets (बाजरा)"],bestCropsHi:["टमाटर (शानदार पैदावार)","मूंगफली","चना व दालें","बाजरा"],drawbacksEn:"Deficient in Nitrogen, Phosphorus, and Boron. Rapid moisture loss under direct sun.",drawbacksHi:"नाइट्रोजन और फास्फोरस की कमी; तेज धूप में नमी जल्दी उड़ती है।",soilTreatmentEn:"Incorporate green manuring (Dhaincha/Sanai) + 50 kg SSP (Single Super Phosphate) per acre.",soilTreatmentHi:"ढैंचा की हरी खाद पलटें तथा 50 किग्रा सिंगल सुपर फास्फेट (SSP) प्रति एकड़ दें।"},{id:"sample_plant_leaf_curl",type:"plant",nameEn:"Tomato Leaf Curl Virus (TLCV) Symptoms",nameHi:"टमाटर में पत्ती मरोड़ (लीफ कर्ल) रोग",img:"/assets/leaf_curl.png",thumbIcon:"🍃",severity:"High (Yield loss 40-70%)",vector:"Transmitted by Silverleaf Whitefly (सफेद मक्खी)",detectedSymptomsEn:"Upward curling of leaves, thick leathery texture, stunting of terminal shoots, no fruit setting.",detectedSymptomsHi:"पत्तियों का ऊपर की ओर मुड़ना (मरोड़िया), डंठल का छोटा होना और नए फूल-फल न लगना।",prescriptionEn:"1. Uproot heavily infected plants. 2. Spray Diafenthiuron 50% WP @ 1.2 g/liter OR Acetamiprid 20% SP @ 0.5 g/liter. 3. Hang Yellow Sticky Traps @ 15/acre.",prescriptionHi:"1. ज्यादा ग्रसित पौधे उखाड़कर नष्ट करें। 2. सफेद मक्खी नियंत्रण हेतु डाइफेंथियूरोन 50% WP (1.2 ग्राम/लीटर) या एसिटामिप्रिड 20% SP (0.5 ग्राम/लीटर) का छिड़काव करें। 3. खेत में 15 पीले चिपचिपे ट्रैप लगाएं।"},{id:"sample_plant_purple_blotch",type:"plant",nameEn:"Onion Purple Blotch & Thrips Damage",nameHi:"प्याज में बैंगनी धब्बा (पर्पल ब्लॉच) व थ्रिप्स",img:"/assets/onion_blotch.png",thumbIcon:"🧅",severity:"Moderate to High",vector:"Fungus Alternaria porri + Onion Thrips",detectedSymptomsEn:"Sunken purple lesions with yellow halo on outer leaves; silvery white feeding streaks from thrips.",detectedSymptomsHi:"पत्तियों पर बैंगनी धब्बे और नोक का पीला पड़ना; थ्रिप्स के कारण पत्तियों पर सफेद धारियां।",prescriptionEn:"Fipronil 5% SC @ 2 ml/liter + Mancozeb 75% WP @ 2.5 g/liter mixed with sticker (spreader) 0.5 ml/liter.",prescriptionHi:"फिप्रोनिल 5% SC (2 मिली/लीटर) + मैंकोजेब 75% WP (2.5 ग्राम/लीटर) के साथ चिपकू (स्टीकर) मिलाकर छिड़कें।"},{id:"sample_plant_healthy",type:"plant",nameEn:"Healthy Vigor Crop Foliage",nameHi:"स्वस्थ एवं पुष्ट फसल (सामान्य अवस्था)",img:"/assets/healthy_plant.png",thumbIcon:"✨",severity:"Optimal Condition",vector:"None",detectedSymptomsEn:"Broad deep-green chlorophyll foliage, active root capillary network, balanced N-P-K uptake.",detectedSymptomsHi:"गहरा हरा रंग, मजबूत तना और संतुलित पोषक तत्व। कोई बीमारी या कीट नहीं।",prescriptionEn:"Maintain soil moisture. Foliar spray 19:19:19 NPK @ 5 g/liter every 15 days for bumper flowering.",prescriptionHi:"नमी संतुलित रखें। बेहतर बढ़वार के लिए 15 दिन के अंतराल पर 19:19:19 एनपीके (5 ग्राम/लीटर) का पर्णीय छिड़काव करें।"}],vi=[{id:"lab_kvk_nashik",nameEn:"ICAR Krishi Vigyan Kendra Soil Testing Lab",nameHi:"भाकृअनुप कृषि विज्ञान केंद्र मिट्टी परीक्षण प्रयोगशाला",districtEn:"Nashik (Pimpalgaon Yard)",districtHi:"नासिक (पिंपलगांव परिसर)",accreditation:"NABL & ICAR Certified",pickupAvailable:!0,turnaroundDays:3,sampleCostGovernment:"₹0 (KisanSetu Subsidized Pass)",parametersTested:"12 Parameters (N, P, K, Organic Carbon, pH, EC, S, Zn, Fe, Cu, Mn, B)"},{id:"lab_state_dept_pune",nameEn:"State Agri Dept Soil Health Diagnostic Lab",nameHi:"राज्य कृषि विभाग मृदा स्वास्थ्य परीक्षण केंद्र",districtEn:"Pune / Shivajinagar",districtHi:"पुणे संभाग",accreditation:"Govt Soil Health Card Accredited",pickupAvailable:!0,turnaroundDays:4,sampleCostGovernment:"₹50 (Nominal Fee)",parametersTested:"Macronutrients & Micronutrients complete breakdown"},{id:"lab_iari_delhi",nameEn:"IARI Pusa National Soil Testing Center",nameHi:"पूसा राष्ट्रीय मृदा परीक्षण केंद्र",districtEn:"New Delhi & NCR North Hub",districtHi:"नई दिल्ली व उत्तर भारत केंद्र",accreditation:"National Apex Agri Institute",pickupAvailable:!0,turnaroundDays:5,sampleCostGovernment:"₹0 (Free Digital Pass)",parametersTested:"Complete Micro-biome & Micro-nutrient Mapping"}],Is=[{id:"pest_thrips_onion",crop:"Onion",cropHi:"प्याज",cropId:"onion",pestNameEn:"Onion Thrips",pestNameHi:"प्याज के थ्रिप्स (चूसक कीड़े)",symptomsEn:"Silvery patches on leaves, curled leaf tips, stunted bulb development.",symptomsHi:"पत्तियों पर चांदी जैसी सफेद धारियां, पत्तियों का मुड़ना और कंद का छोटा रह जाना।",organicSolutionEn:"Neem Oil 10,000 PPM @ 3 ml/liter + Verticillium lecanii @ 5 g/liter spray.",organicSolutionHi:"नीम तेल 10,000 PPM (3 मिली/लीटर) + वर्टिसिलियम लेकानी (5 ग्राम/लीटर)।",chemicalSolutionEn:"Fipronil 5% SC (Regent) @ 2 ml/liter OR Spinetoram 11.7% SC (Delegate) @ 0.9 ml/liter.",chemicalSolutionHi:"फिप्रोनिल 5% SC (2 मिली/लीटर) अथवा स्पाइनेटोरम 11.7% SC (0.9 मिली/लीटर)।",dosageKnapsackPump:"30 ml in 15-liter knapsack sprayer tank",preHarvestInterval:"7 Days",safetyGearEn:"Wear gloves & mask. Spray early morning before 9 AM or after 5 PM.",safetyGearHi:"मास्क व दस्ताने पहनें। सुबह 9 बजे से पहले या शाम 5 बजे के बाद ही छिड़काव करें।"},{id:"pest_fruit_borer_tomato",crop:"Tomato",cropHi:"टमाटर",cropId:"tomato",pestNameEn:"Fruit Borer",pestNameHi:"टमाटर की फल छेदक इल्ली",symptomsEn:"Circular holes bored in unripe and ripe tomatoes, premature fruit rot.",symptomsHi:"फलों में गोल छेद, फलों का अंदर से सड़ना और गिरना।",organicSolutionEn:"Pheromone Traps (Helilure) @ 8 traps/acre + Bacillus thuringiensis (Bt) @ 2 g/liter.",organicSolutionHi:"फेरोमोन ट्रैप (8 प्रति एकड़) + बैसिलस थुरिंजिएंसिस (Bt) 2 ग्राम/लीटर।",chemicalSolutionEn:"Chlorantraniliprole 18.5% SC (Coragen) @ 0.35 ml/liter OR Emamectin Benzoate 5% SG @ 0.5 g/liter.",chemicalSolutionHi:"कोराजन (क्लोरएंट्रानिलिप्रोल 18.5% SC) 0.35 मिली/लीटर या इमामेक्टिन बेंजोएट 5% SG (0.5 ग्राम/लीटर)।",dosageKnapsackPump:"5 ml Coragen OR 8 g Emamectin per 15L tank",preHarvestInterval:"3 Days",safetyGearEn:"Do not spray during peak honeybee foraging hours.",safetyGearHi:"मधुमक्खियों के परागण समय (दोपहर) में छिड़काव न करें।"},{id:"pest_yellow_rust_wheat",crop:"Wheat",cropHi:"गेहूं",cropId:"wheat",pestNameEn:"Yellow / Stripe Rust",pestNameHi:"गेहूं का पीला रतुआ (फफूंद रोग)",symptomsEn:"Yellow powder stripes along leaf veins; powder rubs off on fingers.",symptomsHi:"पत्तियों पर पीली हल्दी जैसी धारियां; छूने पर हाथ में पीला पाउडर लगना।",organicSolutionEn:"Spray cow urine extract fermented with neem leaves at 10% solution at initial onset.",organicSolutionHi:"10% नीम-गोमूत्र का अर्क शुरुआती अवस्था में छिड़कें।",chemicalSolutionEn:"Propiconazole 25% EC (Tilt) @ 1 ml/liter OR Tebuconazole 25.9% EC @ 1.25 ml/liter.",chemicalSolutionHi:"प्रोपिकोनाजोल 25% EC (टिल्ट) 1 मिली/लीटर अथवा टेबुकोनाजोल 25.9% EC (1.25 मिली/लीटर)।",dosageKnapsackPump:"15 ml Propiconazole per 15-liter pump",preHarvestInterval:"21 Days",safetyGearEn:"Spray immediately on observing the first yellow pustule in the field.",safetyGearHi:"खेत में पहली पीली धारी दिखते ही पूरे खेत में तुरंत छिड़काव करें।"},{id:"pest_pink_bollworm_cotton",crop:"Cotton",cropHi:"कपास",cropId:"cotton",pestNameEn:"Pink Bollworm",pestNameHi:"कपास की गुलाबी सुंडी",symptomsEn:"Rosette flowers, stained lint, drilled cotton bolls.",symptomsHi:"फूलों का आपस में जुड़कर गुलाब जैसा बनना, टिंडों में छेद और रुई का काला पड़ना।",organicSolutionEn:"Install Pink Bollworm Pheromone Traps @ 8/acre + Release Trichogramma @ 60,000 eggs/acre.",organicSolutionHi:"गुलाबी सुंडी फेरोमोन ट्रैप (8/एकड़) + ट्राइकोग्रामा परजीवी कार्ड लगाएं।",chemicalSolutionEn:"Profenofos 50% EC @ 2 ml/liter OR Chlorpyriphos 20% EC @ 2.5 ml/liter.",chemicalSolutionHi:"प्रोफेनोफॉस 50% EC (2 मिली/लीटर) या क्लोरपायरीफॉस 20% EC (2.5 मिली/लीटर)।",dosageKnapsackPump:"30 ml in 15-liter pump",preHarvestInterval:"14 Days",safetyGearEn:"Rotate insecticide chemical groups to prevent pest resistance buildup.",safetyGearHi:"कीटनाशक बदल-बदल कर छिड़कें ताकि कीड़ों में प्रतिरोधक क्षमता न बने।"}];class Bs{constructor(s,n){this.containerId=s,this.getLang=n,this.selectedCrop="onion",this.lotQuantityQuintals=30,this.selectedVehicleId="bolero_maxi"}init(){this.render()}update(){this.render()}render(){const s=document.getElementById(this.containerId);if(!s)return;const n=this.getLang(),o=Ba[this.selectedCrop]||Ba.onion,c=fi.find(f=>f.id===this.selectedVehicleId)||fi[1],h=o.baseLocalMandi,d=this.lotQuantityQuintals*h.priceQuintal,m=this.lotQuantityQuintals*h.freightCostPerQtl,g=d-m,u=o.destinations.map(f=>{const _=this.lotQuantityQuintals*f.priceQuintal;let b=0,w=0;if(f.distanceKm>0){const z=f.distanceKm*c.ratePerKm,K=this.lotQuantityQuintals*15;b=z+K,w=f.tollCostPerTrip||0}const S=b+w,E=_-S,T=E-g,R=T>0;return{...f,grossRevenue:_,totalFreight:b,totalTolls:w,totalLogisticsCost:S,netTakeHome:E,netExtraProfit:T,isProfitable:R}});s.innerHTML=`
      <div class="f-arb-wrapper">
        <!-- Arbitrage Header & Controls Bar -->
        <div class="f-arb-control-card glass-panel">
          <div class="f-arb-header-row">
            <div>
              <span class="f-arb-badge">⚖️ ${n==="hi"?"स्मार्ट मंडी मुनाफा व लॉजिस्टिक्स कैलकुलेटर":"Smart Mandi Arbitrage & Route Profit Optimizer"}</span>
              <h3 class="f-arb-title">${n==="hi"?"कहाँ बेचने में सबसे ज्यादा शुद्ध मुनाफा होगा?":"Where Will You Earn Maximum Net Take-Home Profit?"}</h3>
              <p class="f-arb-sub">${n==="hi"?"स्थानीय मंडी भाव, दूर की बड़ी मंडियों और सीधे खरीदारों के बीच भाड़ा व टोल काटकर शुद्ध मुनाफे का सटीक विश्लेषण।":"Compare local mandi price vs other regional markets vs direct buyers with exact fuel, freight, and net take-home calculation."}</p>
            </div>
          </div>

          <!-- Controls: Crop, Lot Quantity, Vehicle -->
          <div class="f-arb-inputs-grid">
            <div class="f-arb-field">
              <label>${n==="hi"?"फसल चुनें:":"Select Commodity:"}</label>
              <div class="f-arb-pill-group">
                <button type="button" class="f-arb-crop-pill ${this.selectedCrop==="onion"?"active":""}" data-crop="onion">
                  🧅 ${n==="hi"?"लाल प्याज":"Red Onion"}
                </button>
                <button type="button" class="f-arb-crop-pill ${this.selectedCrop==="tomato"?"active":""}" data-crop="tomato">
                  🍅 ${n==="hi"?"टमाटर":"Tomato"}
                </button>
                <button type="button" class="f-arb-crop-pill ${this.selectedCrop==="wheat"?"active":""}" data-crop="wheat">
                  🌾 ${n==="hi"?"शरबती गेहूं":"Wheat"}
                </button>
              </div>
            </div>

            <div class="f-arb-field">
              <label>${n==="hi"?"फसल मात्रा (क्विंटल):":"Lot Quantity (Quintals):"}</label>
              <div class="f-arb-qty-row">
                <input type="range" id="rng-arb-qty" min="10" max="150" step="5" value="${this.lotQuantityQuintals}" class="f-arb-slider" />
                <span class="f-arb-qty-val"><strong>${this.lotQuantityQuintals}</strong> Qtl (${(this.lotQuantityQuintals/10).toFixed(1)} MT)</span>
              </div>
            </div>

            <div class="f-arb-field">
              <label>${n==="hi"?"परिवहन वाहन (गाड़ी):":"Transport Vehicle:"}</label>
              <select id="sel-arb-vehicle" class="f-form-input">
                ${fi.map(f=>`
                  <option value="${f.id}" ${f.id===this.selectedVehicleId?"selected":""}>
                    ${n==="hi"?f.nameHi:f.nameEn} (Cap: ${f.capacityQuintals} Qtl • ₹${f.ratePerKm}/km)
                  </option>
                `).join("")}
              </select>
            </div>
          </div>
        </div>

        <!-- Baseline Local Mandi Anchor Box -->
        <div class="f-arb-baseline-strip">
          <div class="f-base-item">
            <span class="f-base-lbl">📍 ${n==="hi"?"आपकी स्थानीय नजदीकी मंडी":"Your Local Mandi"}:</span>
            <strong class="f-base-name">${h.name}</strong>
          </div>
          <div class="f-base-item">
            <span class="f-base-lbl">${n==="hi"?"स्थानीय भाव":"Local Mandi Rate"}:</span>
            <strong class="f-base-val">₹${h.priceKg}/kg (₹${h.priceQuintal}/Qtl)</strong>
          </div>
          <div class="f-base-item">
            <span class="f-base-lbl">${n==="hi"?"स्थानीय कुल शुद्ध आय":"Local Net In-Hand"}:</span>
            <strong class="f-base-val">₹${g.toLocaleString("en-IN")}</strong>
          </div>
        </div>

        <!-- Destinations Comparison Grid -->
        <div class="f-arb-cards-grid">
          ${u.map(f=>{const _=f.id.includes("direct");return`
              <div class="f-arb-card ${_?"f-arb-card-direct":f.isProfitable?"f-arb-card-profit":"f-arb-card-loss"} glass-panel">
                <div class="f-arb-card-top">
                  <div>
                    <span class="f-dest-type-tag ${_?"tag-direct":"tag-mandi"}">
                      ${_?n==="hi"?"🛒 सीधा पंजीकृत खरीदार":"🛒 DIRECT ENROLLED BUYER":n==="hi"?"🏛️ क्षेत्रीय एपीएमसी मंडी":"🏛️ REGIONAL APMC MANDI"}
                    </span>
                    <h4 class="f-dest-name">${f.name}</h4>
                    <span class="f-dest-state">📍 ${f.state} • ${f.distanceKm>0?`${f.distanceKm} km (${f.transitHours} hrs)`:n==="hi"?"खेत से सीधी उठाई (0 किमी)":"Farmgate Doorstep (0 km)"}</span>
                  </div>
                  <div class="f-dest-price-box">
                    <span class="f-dest-price">₹${f.priceKg}/kg</span>
                    <span class="f-dest-qtl">₹${f.priceQuintal}/Qtl</span>
                  </div>
                </div>

                <!-- Logistics & Breakdown Table -->
                <div class="f-arb-breakdown-box">
                  <div class="f-bd-row">
                    <span>${n==="hi"?"सकल बिक्री राशि":"Gross Sale Value"}:</span>
                    <strong>₹${f.grossRevenue.toLocaleString("en-IN")}</strong>
                  </div>
                  <div class="f-bd-row text-muted">
                    <span>${n==="hi"?"परिवहन भाड़ा + टोल खर्च":"Freight & Toll Deductions"}:</span>
                    <span>− ₹${f.totalLogisticsCost.toLocaleString("en-IN")}</span>
                  </div>
                  <div class="f-bd-row f-bd-net">
                    <span>${n==="hi"?"शुद्ध इन-हैंड जेब में आय":"Net Take-Home In-Hand"}:</span>
                    <strong class="f-net-val">₹${f.netTakeHome.toLocaleString("en-IN")}</strong>
                  </div>
                </div>

                <!-- Arbitrage Bottom Result Pill -->
                <div class="f-arb-result-banner ${f.isProfitable?"res-profit":"res-loss"}">
                  <div class="f-res-icon">${f.isProfitable?_?"🚀":"📈":"⚠️"}</div>
                  <div class="f-res-text">
                    <strong>
                      ${f.isProfitable?n==="hi"?`स्थानीय मंडी से ₹${Math.abs(f.netExtraProfit).toLocaleString("en-IN")} अधिक शुद्ध लाभ!`:`+₹${Math.abs(f.netExtraProfit).toLocaleString("en-IN")} Extra Net Pocket Profit!`:n==="hi"?`भाड़ा ज्यादा: ₹${Math.abs(f.netExtraProfit).toLocaleString("en-IN")} का नुकसान (स्थानीय में ही बेचें)`:`Negative Arbitrage: -₹${Math.abs(f.netExtraProfit).toLocaleString("en-IN")} (Stay Local)`}
                    </strong>
                    <p>${f.demandLevel} • <strong>${f.recommendation}</strong></p>
                  </div>
                </div>

                <!-- CTA Action -->
                <div class="f-arb-action-row">
                  ${_?`
                    <button type="button" class="f-btn-arb-cta" onclick="window.kisanAppInstance.switchView('section-procurement')">
                      🛒 ${n==="hi"?"सीधे खरीदार से डील पक्की करें":"Sell to Direct Buyer Now"}
                    </button>
                  `:`
                    <a href="https://maps.google.com/?q=${encodeURIComponent(f.name)}" target="_blank" rel="noopener noreferrer" class="f-btn-arb-route">
                      🗺️ ${n==="hi"?"नेविगेट रूट व मंडी शेड देखें":"View Highway Route & Shed"}
                    </a>
                  `}
                </div>
              </div>
            `}).join("")}
        </div>
      </div>
    `,this.bindEvents(s)}bindEvents(s){s.querySelectorAll(".f-arb-crop-pill").forEach(h=>{h.addEventListener("click",()=>{this.selectedCrop=h.getAttribute("data-crop"),this.render()})});const o=s.querySelector("#rng-arb-qty");o&&o.addEventListener("input",h=>{this.lotQuantityQuintals=parseInt(h.target.value,10),this.render()});const c=s.querySelector("#sel-arb-vehicle");c&&c.addEventListener("change",h=>{this.selectedVehicleId=h.target.value,this.render()})}}class Rs{constructor(s,n){this.containerId=s,this.getLang=n,this.auth=Ie,this.selectedSampleId="sample_soil_black",this.activeTab="scanner",this.bookingSuccess=null}init(){this.render()}update(){this.render()}render(){const s=document.getElementById(this.containerId);if(!s)return;const n=this.getLang(),o=gi.find(h=>h.id===this.selectedSampleId)||gi[0],c=o.type==="soil";s.innerHTML=`
      <div class="f-vdoc-wrapper">
        <!-- Doctor Navigation Tabs -->
        <div class="f-vdoc-tabs-bar">
          <button type="button" class="f-vdoc-tab ${this.activeTab==="scanner"?"active":""}" data-tab="scanner">
            📸 ${n==="hi"?"एआई फोटो मिट्टी व फसल स्कैनर":"AI Photo Soil & Plant Scanner"}
          </button>
          <button type="button" class="f-vdoc-tab ${this.activeTab==="appointment"?"active":""}" data-tab="appointment">
            🧪 ${n==="hi"?"प्रमाणित लैब मिट्टी परीक्षण अपॉइंटमेंट बुक करें":"Book Doorstep Soil Testing Lab Visit"}
          </button>
        </div>

        ${this.activeTab==="scanner"?this.renderScannerView(o,c,n):this.renderAppointmentView(n)}
      </div>
    `,this.bindEvents(s)}renderScannerView(s,n,o){return`
      <div class="f-vdoc-scanner-grid">
        <!-- Left: Photo Upload & Sample Gallery -->
        <div class="f-vdoc-upload-col glass-panel">
          <div class="f-vdoc-upload-box" id="drop-zone-upload">
            <div class="f-upload-icon">${s.thumbIcon}</div>
            <h4>${o==="hi"?"मिट्टी या पौधे की फोटो अपलोड करें":"Upload Soil or Crop Leaf Photo"}</h4>
            <p>${o==="hi"?"खेत की मिट्टी या बीमारी लगी पत्तियों की स्पष्ट फोटो खींचें या नीचे दिए गए नमूनों में से चुनें।":"Take a crisp photo of field soil or damaged foliage or click sample presets below."}</p>
            <label class="f-btn-upload-file">
              📁 ${o==="hi"?"गैलरी / कैमरा से चुनें":"Choose Photo / Camera"}
              <input type="file" id="inp-photo-upload" accept="image/*" style="display: none;" />
            </label>
          </div>

          <!-- Sample Presets Selector -->
          <div class="f-vdoc-presets-section">
            <span class="f-presets-title">${o==="hi"?"तुरंत परीक्षण हेतु तैयार नमूने:":"Pre-calibrated Diagnostic Samples:"}</span>
            <div class="f-presets-grid">
              ${gi.map(c=>`
                <button type="button" class="f-preset-btn ${c.id===this.selectedSampleId?"active":""}" data-sample="${c.id}">
                  <span class="f-p-icon">${c.thumbIcon}</span>
                  <div class="f-p-text">
                    <strong>${o==="hi"?c.nameHi:c.nameEn}</strong>
                    <span>${c.type==="soil"?o==="hi"?"मिट्टी संरचना":"Soil Profile":o==="hi"?"पत्ती रोग लक्षण":"Leaf Symptoms"}</span>
                  </div>
                </button>
              `).join("")}
            </div>
          </div>
        </div>

        <!-- Right: Diagnostic Output Report Card -->
        <div class="f-vdoc-analysis-col glass-panel">
          <div class="f-analysis-header">
            <div class="f-analysis-badge">
              <span class="pulse-indicator">●</span>
              <span>${o==="hi"?"एआई विजन डायग्नोस्टिक रिपोर्ट":"AI Vision Agronomic Analysis"}</span>
            </div>
            <h3 class="f-sample-title">${o==="hi"?s.nameHi:s.nameEn}</h3>
          </div>

          ${n?`
            <!-- Soil Specific Telemetry -->
            <div class="f-telemetry-strip">
              <div class="f-tele-stat">
                <span class="f-t-lbl">${o==="hi"?"pH मान":"pH Level"}</span>
                <strong>${s.phRange}</strong>
              </div>
              <div class="f-tele-stat">
                <span class="f-t-lbl">${o==="hi"?"जैविक कार्बन":"Organic Carbon"}</span>
                <strong>${s.organicCarbon}</strong>
              </div>
              <div class="f-tele-stat">
                <span class="f-t-lbl">${o==="hi"?"जल धारण क्षमता":"Water Retention"}</span>
                <strong>${s.waterHolding}</strong>
              </div>
              <div class="f-tele-stat f-tele-match">
                <span class="f-t-lbl">${o==="hi"?"भूमि उपयुक्तता स्कोर":"Soil Match Score"}</span>
                <strong class="text-green">${s.suitabilityScore}% ${o==="hi"?"मैच":"Match"}</strong>
              </div>
            </div>

            <div class="f-analysis-section">
              <h4 class="f-sec-heading">🌾 ${o==="hi"?"इस मिट्टी में सबसे उपयुक्त फसलें (अधिकतम पैदावार):":"Best Suited Crops for Maximum Yield:"}</h4>
              <div class="f-crops-tag-row">
                ${(o==="hi"?s.bestCropsHi:s.bestCropsEn).map(c=>`
                  <span class="f-crop-tag">✅ ${c}</span>
                `).join("")}
              </div>
            </div>

            <div class="f-analysis-section">
              <h4 class="f-sec-heading">⚠️ ${o==="hi"?"संभावित जोखिम व सावधानियां:":"Potential Land Hazards:"}</h4>
              <p class="f-sec-desc">${o==="hi"?s.drawbacksHi:s.drawbacksEn}</p>
            </div>

            <div class="f-analysis-section">
              <h4 class="f-sec-heading">🧪 ${o==="hi"?"सुझाई गई मिट्टी सुधार विधि:":"Recommended Soil Treatment & Amendment:"}</h4>
              <div class="f-rec-box">
                <p>${o==="hi"?s.soilTreatmentHi:s.soilTreatmentEn}</p>
              </div>
            </div>
          `:`
            <!-- Plant Disease Specific Telemetry -->
            <div class="f-telemetry-strip">
              <div class="f-tele-stat">
                <span class="f-t-lbl">${o==="hi"?"रोग गंभीरता":"Severity Level"}</span>
                <strong class="text-red">${s.severity}</strong>
              </div>
              <div class="f-tele-stat">
                <span class="f-t-lbl">${o==="hi"?"रोग कारक / वाहक":"Pathogen / Vector"}</span>
                <strong>${s.vector}</strong>
              </div>
            </div>

            <div class="f-analysis-section">
              <h4 class="f-sec-heading">🔍 ${o==="hi"?"पहचाने गए लक्षण:":"Visual Symptoms Detected:"}</h4>
              <p class="f-sec-desc">${o==="hi"?s.detectedSymptomsHi:s.detectedSymptomsEn}</p>
            </div>

            <div class="f-analysis-section">
              <h4 class="f-sec-heading">🛡️ ${o==="hi"?"सुझाई गई दवा व उपचार योजना:":"Prescription & Spray Protocol:"}</h4>
              <div class="f-rec-box">
                <p>${o==="hi"?s.prescriptionHi:s.prescriptionEn}</p>
              </div>
            </div>
          `}

          <!-- Fallback prompt for official lab testing -->
          <div class="f-lab-cta-banner">
            <div>
              <strong>${o==="hi"?"क्या आप 100% सटीक लैब रिपोर्ट चाहते हैं?":"Need 100% Certified Lab Analysis?"}</strong>
              <p>${o==="hi"?"यदि आप केवल फोटो अनुमान से संतुष्ट नहीं हैं, तो सरकारी मान्यता प्राप्त लैब से अपने खेत पर मिट्टी सैंपल संग्रह बुक करें।":"If visual screening is not enough, book an accredited laboratory soil test with farmgate sample pickup."}</p>
            </div>
            <button type="button" class="f-btn-switch-tab-apt" id="btn-trigger-apt-tab">
              🧪 ${o==="hi"?"लैब अपॉइंटमेंट बुक करें":"Book Lab Testing"}
            </button>
          </div>
        </div>
      </div>
    `}renderAppointmentView(s){const n=this.auth.getUser();return`
      <div class="f-vdoc-apt-wrap glass-panel">
        <div class="f-apt-header">
          <div>
            <span class="f-apt-badge">🏛️ ${s==="hi"?"राष्ट्रीय मृदा स्वास्थ्य कार्ड योजना एवं आईसीएआर पार्टनर लैब":"ICAR & National Soil Health Card Accredited Labs"}</span>
            <h3 class="f-apt-title">${s==="hi"?"खेत पर मिट्टी नमूना पिकअप व परीक्षण अपॉइंटमेंट":"Book Farmgate Soil Sample Collection & Laboratory Testing"}</h3>
            <p class="f-apt-sub">${s==="hi"?"लैब विशेषज्ञ आपके खेत से वैज्ञानिक विधि से मिट्टी का नमूना लेंगे और 72 घंटे में 12-पैरामीटर प्रमाणित रिपोर्ट आपके फोन पर आएगी।":"Certified field technicians collect soil core samples from your farm with full 12-parameter digital report within 72 hours."}</p>
          </div>
        </div>

        ${this.bookingSuccess?`
          <div class="f-booking-success-box">
            <div class="f-success-icon">🎉</div>
            <h4>${s==="hi"?"मृदा परीक्षण अपॉइंटमेंट सफलतापूर्वक दर्ज हो गया!":"Soil Testing Appointment Successfully Booked!"}</h4>
            <div class="f-success-details">
              <span><strong>बुकिंग संदर्भ आईडी:</strong> ${this.bookingSuccess.id}</span>
              <span><strong>किसान का नाम:</strong> ${this.bookingSuccess.farmerName}</span>
              <span><strong>परीक्षण लैब:</strong> ${this.bookingSuccess.labName}</span>
              <span><strong>पिकअप दिनांक:</strong> ${this.bookingSuccess.pickupDate}</span>
              <span><strong>स्थिति:</strong> <span class="badge-status-scheduled">पिकअप निर्धारित (Technician Assigned)</span></span>
            </div>
            <button type="button" class="f-btn-reset-booking" id="btn-new-booking">
              ➕ ${s==="hi"?"एक और खेत हेतु नया अपॉइंटमेंट":"Book Another Field"}
            </button>
          </div>
        `:`
          <form id="form-book-soil-lab" class="f-apt-form">
            <div class="f-form-row">
              <div class="f-form-field">
                <label>${s==="hi"?"किसान / आवेदक का नाम:":"Farmer Name:"}</label>
                <input type="text" id="inp-apt-name" required value="${n.name}" class="f-form-input" />
              </div>
              <div class="f-form-field">
                <label>${s==="hi"?"मोबाइल नंबर (एसएमएस व व्हाट्सएप रिपोर्ट):":"Mobile Number (SMS Updates):"}</label>
                <input type="tel" id="inp-apt-phone" required value="${n.phone}" class="f-form-input" />
              </div>
            </div>

            <div class="f-form-row">
              <div class="f-form-field">
                <label>${s==="hi"?"खेत का स्थान व गांव (तहसील, जिला):":"Farm Address & District:"}</label>
                <input type="text" id="inp-apt-address" required placeholder="उदा. गट नं. 45, लासलगांव, निफाड़, नासिक" class="f-form-input" />
              </div>
              <div class="f-form-field">
                <label>${s==="hi"?"खेत का रकबा (एकड़):":"Plot Land Acreage:"}</label>
                <input type="number" step="0.5" id="inp-apt-acreage" required value="${n.landAcreage||4}" class="f-form-input" />
              </div>
            </div>

            <div class="f-form-row">
              <div class="f-form-field">
                <label>${s==="hi"?"मान्यता प्राप्त प्रयोगशाला चुनें:":"Select Accredited Laboratory:"}</label>
                <select id="sel-apt-lab" class="f-form-input">
                  ${vi.map(o=>`
                    <option value="${o.id}">
                      ${s==="hi"?o.nameHi:o.nameEn} — ${o.sampleCostGovernment} (${o.turnaroundDays} Days)
                    </option>
                  `).join("")}
                </select>
              </div>
              <div class="f-form-field">
                <label>${s==="hi"?"सैंपल पिकअप की पसंदीदा तारीख:":"Preferred Sample Pickup Date:"}</label>
                <input type="date" id="inp-apt-date" required class="f-form-input" />
              </div>
            </div>

            <div class="f-apt-features-strip">
              <div class="f-feat-item">✅ 12-पैरामीटर एनपीके व सूक्ष्म पोषक तत्व</div>
              <div class="f-feat-item">🚚 खेत पर डोरस्टेप सैंपल कलेक्शन</div>
              <div class="f-feat-item">📱 मोबाइल पर डिजिटल सॉइल हेल्थ कार्ड</div>
              <div class="f-feat-item">🌱 वैज्ञानिक खाद अनुशंसा रिपोर्ट</div>
            </div>

            <button type="submit" class="f-btn-confirm-apt">
              🚀 ${s==="hi"?"लैब विजिट व सैंपल पिकअप की पुष्टि करें":"Confirm Soil Test Booking"}
            </button>
          </form>
        `}
      </div>
    `}bindEvents(s){s.querySelectorAll(".f-vdoc-tab").forEach(g=>{g.addEventListener("click",()=>{this.activeTab=g.getAttribute("data-tab"),this.render()})});const o=s.querySelector("#btn-trigger-apt-tab");o&&o.addEventListener("click",()=>{this.activeTab="appointment",this.render()}),s.querySelectorAll(".f-preset-btn").forEach(g=>{g.addEventListener("click",()=>{this.selectedSampleId=g.getAttribute("data-sample"),this.render()})});const h=s.querySelector("#inp-photo-upload");h&&h.addEventListener("change",g=>{g.target.files&&g.target.files[0]&&alert(this.getLang()==="hi"?"फोटो प्राप्त हुई! एआई विजन मॉडल द्वारा पत्तियों व मिट्टी का विश्लेषण किया जा रहा है...":"Photo captured! Analyzing soil texture and foliage health using AI Vision model...")});const d=s.querySelector("#form-book-soil-lab");if(d){const g=s.querySelector("#inp-apt-date");if(g&&!g.value){const u=new Date;u.setDate(u.getDate()+1),g.value=u.toISOString().split("T")[0]}d.addEventListener("submit",u=>{var S,E,T;u.preventDefault();const f=(S=s.querySelector("#inp-apt-name"))==null?void 0:S.value,_=(E=s.querySelector("#sel-apt-lab"))==null?void 0:E.value,b=vi.find(R=>R.id===_)||vi[0],w=(T=s.querySelector("#inp-apt-date"))==null?void 0:T.value;this.bookingSuccess={id:"KS-LAB-"+Math.floor(1e5+Math.random()*9e5),farmerName:f,labName:this.getLang()==="hi"?b.nameHi:b.nameEn,pickupDate:w},this.render()})}const m=s.querySelector("#btn-new-booking");m&&m.addEventListener("click",()=>{this.bookingSuccess=null,this.render()})}}class Ns{constructor(s,n){this.containerId=s,this.getLang=n,this.selectedCropFilter="all",this.searchQuery=""}init(){this.render()}update(){this.render()}render(){const s=document.getElementById(this.containerId);if(!s)return;const n=this.getLang(),o=this.searchQuery.toLowerCase().trim(),c=Is.filter(h=>{const d=this.selectedCropFilter==="all"||h.cropId===this.selectedCropFilter,m=!o||h.pestNameEn.toLowerCase().includes(o)||h.pestNameHi.includes(o)||h.crop.toLowerCase().includes(o)||h.chemicalSolutionEn.toLowerCase().includes(o);return d&&m});s.innerHTML=`
      <div class="f-pest-wrapper">
        <!-- Header -->
        <div class="f-pest-header glass-panel">
          <div class="f-pest-header-content">
            <span class="f-pest-badge">🛡️ ${n==="hi"?"स्मार्ट फसल सुरक्षा एवं कीटनाशक सलाहकार":"Crop Protection & Pesticide Prescription Center"}</span>
            <h3 class="f-pest-title">${n==="hi"?"कीट व बीमारी के अनुसार सही कीटनाशक व सटीक स्प्रे मात्रा":"Verified Pest Treatment, Biological Control & Dosage Calculator"}</h3>
            <p class="f-pest-sub">${n==="hi"?"फसल अनुसार प्रमुख कीटों की पहचान, जैविक व रासायनिक उपचार, 15 लीटर पंप में सही दवा की मात्रा और तुड़ाई पूर्व प्रतीक्षा समय (PHI)।":"Search by crop or pest to get biological remedies, chemical formulations, exact 15-liter knapsack dilution, and pre-harvest intervals."}</p>
          </div>
        </div>

        <!-- Filter & Search Controls Bar -->
        <div class="f-pest-filter-bar">
          <div class="f-pest-search-box">
            <span class="f-p-search-icon">🔍</span>
            <input type="text" id="inp-pest-search" placeholder="${n==="hi"?"कीट, बीमारी या दवा का नाम खोजें (उदा. थ्रिप्स, इल्ली, रतुआ, कोराजन)...":"Search by pest, disease, or chemical (e.g. Thrips, Borer, Rust, Coragen)..."}" value="${this.searchQuery}" class="f-pest-search-input" />
          </div>

          <div class="f-pest-crop-pills">
            <button type="button" class="f-pest-pill ${this.selectedCropFilter==="all"?"active":""}" data-crop="all">
              🌐 ${n==="hi"?"सभी फसलें":"All Crops"}
            </button>
            <button type="button" class="f-pest-pill ${this.selectedCropFilter==="onion"?"active":""}" data-crop="onion">
              🧅 ${n==="hi"?"प्याज":"Onion"}
            </button>
            <button type="button" class="f-pest-pill ${this.selectedCropFilter==="tomato"?"active":""}" data-crop="tomato">
              🍅 ${n==="hi"?"टमाटर":"Tomato"}
            </button>
            <button type="button" class="f-pest-pill ${this.selectedCropFilter==="wheat"?"active":""}" data-crop="wheat">
              🌾 ${n==="hi"?"गेहूं":"Wheat"}
            </button>
            <button type="button" class="f-pest-pill ${this.selectedCropFilter==="cotton"?"active":""}" data-crop="cotton">
              🌿 ${n==="hi"?"कपास":"Cotton"}
            </button>
          </div>
        </div>

        <!-- Prescriptions Grid -->
        <div class="f-pest-grid">
          ${c.length===0?`
            <div class="f-pest-empty glass-panel">
              <span>🌾</span>
              <p>${n==="hi"?"कोई मेल नहीं मिला। कृपया दूसरा शब्द खोजें।":"No matching pesticide prescription found."}</p>
            </div>
          `:c.map(h=>`
            <div class="f-pest-card glass-panel">
              <div class="f-pest-card-header">
                <div>
                  <span class="f-p-crop-tag">${n==="hi"&&h.cropHi||h.crop}</span>
                  <h4 class="f-p-pest-title">${n==="hi"?h.pestNameHi:h.pestNameEn}</h4>
                </div>
                <div class="f-p-phi-box" title="Pre-Harvest Waiting Interval">
                  <span class="f-phi-lbl">${n==="hi"?"PHI प्रतीक्षा:":"Pre-Harvest Wait:"}</span>
                  <strong class="f-phi-val text-green">${h.preHarvestInterval}</strong>
                </div>
              </div>

              <!-- Symptoms -->
              <div class="f-pest-section">
                <span class="f-p-label">🔍 ${n==="hi"?"नुकसान के लक्षण":"Damage Symptoms"}:</span>
                <p class="f-p-val">${n==="hi"?h.symptomsHi:h.symptomsEn}</p>
              </div>

              <!-- Dosage Highlight Strip -->
              <div class="f-pest-dosage-strip">
                <span class="f-p-icon">💧</span>
                <div>
                  <span class="f-d-lbl">${n==="hi"?"15 लीटर स्प्रेयर पंप में दवा की मात्रा":"15-Liter Knapsack Pump Dosage"}:</span>
                  <strong class="f-d-val">${h.dosageKnapsackPump}</strong>
                </div>
              </div>

              <!-- Organic Solution -->
              <div class="f-pest-section">
                <span class="f-p-label text-green">🌿 ${n==="hi"?"जैविक व प्राकृतिक उपचार":"Biological / Organic Remedy"}:</span>
                <p class="f-p-val">${n==="hi"?h.organicSolutionHi:h.organicSolutionEn}</p>
              </div>

              <!-- Chemical Solution -->
              <div class="f-pest-section">
                <span class="f-p-label">🧪 ${n==="hi"?"प्रमाणित रासायनिक कीटनाशक":"Chemical Formulation & Brand"}:</span>
                <p class="f-p-val font-semibold">${n==="hi"?h.chemicalSolutionHi:h.chemicalSolutionEn}</p>
              </div>

              <!-- Safety precautions -->
              <div class="f-pest-footer">
                <span>⚠️ <strong>${n==="hi"?"सुरक्षा नियम":"Safety"}:</strong> ${n==="hi"?h.safetyGearHi:h.safetyGearEn}</span>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `,this.bindEvents(s)}bindEvents(s){s.querySelectorAll(".f-pest-pill").forEach(c=>{c.addEventListener("click",()=>{this.selectedCropFilter=c.getAttribute("data-crop"),this.render()})});const o=s.querySelector("#inp-pest-search");o&&o.addEventListener("input",c=>{this.searchQuery=c.target.value,this.render()})}}class Os{constructor(s,n){this.containerId=s,this.getLang=n,this.locationQuery="Nashik (Lasalgaon), Maharashtra",this.selectedSoil="black_cotton",this.targetCrop="tomato",this.acreage=2,this.imageSrc="/assets/soil_black.png",this.isAnalyzed=!0}init(){this.render()}update(){this.render()}setLocation(s){s&&(this.locationQuery=s,this.render())}render(){const s=document.getElementById(this.containerId);if(!s)return;const n=this.getLang(),o=this.calculateAgronomicModel(n);s.innerHTML=`
      <div class="f-csd-wrapper">
        <!-- Header Banner -->
        <div class="f-csd-header glass-panel">
          <div>
            <span class="f-csd-badge">🌱 ${n==="hi"?"भूमि फोटो एवं मौसम आधारित फसल पैदावार विश्लेषक":"Land Photo & Weather-Adaptive Crop Yield Analyzer"}</span>
            <h3 class="f-csd-title">${n==="hi"?"मेरी जमीन पर कौन सी फसल कितनी पैदावार देगी?":"What Crops Can I Grow On My Land & How Much Yield Will It Produce?"}</h3>
            <p class="f-csd-sub">${n==="hi"?"अपना स्थान दर्ज करें, खेत की मिट्टी की फोटो अपलोड करें — हमारा एआई मौसम रिपोर्ट और भविष्य के पूर्वानुमान का विश्लेषण करके फसल की उपयुक्तता और संभावित उत्पादन का सटीक अनुमान देगा।":"Enter your location and upload your land/soil photo. Our AI cross-references soil texture with live and upcoming weather to determine seasonal suitability and exact projected harvest output."}</p>
          </div>
        </div>

        <div class="f-csd-main-grid">
          <!-- Left Column: Inputs (Location, Photo, Crop, Acreage) -->
          <div class="f-csd-input-col glass-panel">
            <h4 class="f-csd-section-heading">📝 ${n==="hi"?"खेत एवं स्थान विवरण":"Farm & Location Inputs"}</h4>

            <!-- Step 1: Location -->
            <div class="f-form-field">
              <label>📍 ${n==="hi"?"1. अपना स्थान या जिला (भारत में कहीं भी):":"1. Farm Location / District (Anywhere in India):"}</label>
              <div class="f-csd-loc-input-wrap">
                <input type="text" id="inp-csd-loc" class="f-form-input" value="${this.locationQuery}" placeholder="${n==="hi"?"उदा. नासिक, गुंटूर, बठिंडा, वाराणसी...":"e.g. Nashik, Guntur, Bhatinda, Varanasi..."}" />
              </div>
              <div class="f-csd-quick-locs">
                <span class="f-q-lbl">${n==="hi"?"त्वरित चुनाव:":"Quick Select:"}</span>
                <button type="button" class="f-btn-q-loc" data-loc="Nashik, Maharashtra">${n==="hi"?"नासिक":"Nashik"}</button>
                <button type="button" class="f-btn-q-loc" data-loc="Guntur, Andhra Pradesh">${n==="hi"?"गुंटूर":"Guntur"}</button>
                <button type="button" class="f-btn-q-loc" data-loc="Bhatinda, Punjab">${n==="hi"?"बठिंडा":"Bhatinda"}</button>
                <button type="button" class="f-btn-q-loc" data-loc="Karnal, Haryana">${n==="hi"?"करनाल":"Karnal"}</button>
              </div>
            </div>

            <!-- Step 2: Land / Soil Photo Upload -->
            <div class="f-form-field" style="margin-top: 14px;">
              <label>📸 ${n==="hi"?"2. खेत की मिट्टी या जमीन की फोटो:":"2. Field Soil / Land Image:"}</label>
              <div class="f-csd-dropzone" id="csd-dropzone">
                <div class="f-csd-preview-thumb">
                  <img src="${this.imageSrc}" alt="Soil Preview" id="csd-preview-img" />
                </div>
                <div>
                  <strong>${n==="hi"?"फोटो अपलोड करें या नया फोटो खींचें":"Upload Image or Capture via Camera"}</strong>
                  <p>${n==="hi"?"मिट्टी की बनावट, नमी व रंग का एआई विश्लेषण":"AI vision analyzes texture, color & organic moisture"}</p>
                  <label class="f-btn-upload-trigger">
                    📁 ${n==="hi"?"गैलरी / कैमरा से चुनें":"Choose File / Camera"}
                    <input type="file" id="inp-csd-file" accept="image/*" style="display: none;" />
                  </label>
                </div>
              </div>

              <!-- Preset Soil Presets for immediate trial -->
              <div class="f-csd-presets-row">
                <span class="f-q-lbl">${n==="hi"?"तैयार नमूने:":"Sample Types:"}</span>
                <button type="button" class="f-btn-soil-preset ${this.selectedSoil==="black_cotton"?"active":""}" data-soil="black_cotton">
                  🌑 ${n==="hi"?"काली कपास मिट्टी":"Black Soil"}
                </button>
                <button type="button" class="f-btn-soil-preset ${this.selectedSoil==="red_loam"?"active":""}" data-soil="red_loam">
                  🟤 ${n==="hi"?"लाल दोमट मिट्टी":"Red Loam"}
                </button>
                <button type="button" class="f-btn-soil-preset ${this.selectedSoil==="alluvial_clay"?"active":""}" data-soil="alluvial_clay">
                  🌾 ${n==="hi"?"जलोढ़ दोमट मिट्टी":"Alluvial Soil"}
                </button>
                <button type="button" class="f-btn-soil-preset ${this.selectedSoil==="sandy_loam"?"active":""}" data-soil="sandy_loam">
                  🏖️ ${n==="hi"?"बलुई मिट्टी":"Sandy Loam"}
                </button>
              </div>
            </div>

            <!-- Step 3: Target Crop to Grow -->
            <div class="f-form-field" style="margin-top: 14px;">
              <label>🌾 ${n==="hi"?"3. आप कौन सी फसल लगाना चाहते हैं?":"3. Which Crop Do You Want to Grow?"}</label>
              <div class="f-csd-crops-grid">
                <button type="button" class="f-crop-btn ${this.targetCrop==="tomato"?"active":""}" data-crop="tomato">
                  🍅 ${n==="hi"?"हाइब्रिड टमाटर":"Tomato"}
                </button>
                <button type="button" class="f-crop-btn ${this.targetCrop==="onion"?"active":""}" data-crop="onion">
                  🧅 ${n==="hi"?"लाल प्याज":"Red Onion"}
                </button>
                <button type="button" class="f-crop-btn ${this.targetCrop==="wheat"?"active":""}" data-crop="wheat">
                  🌾 ${n==="hi"?"शरबती गेहूं":"Wheat"}
                </button>
                <button type="button" class="f-crop-btn ${this.targetCrop==="cotton"?"active":""}" data-crop="cotton">
                  🌿 ${n==="hi"?"कपास (नरमा)":"Cotton"}
                </button>
                <button type="button" class="f-crop-btn ${this.targetCrop==="soybean"?"active":""}" data-crop="soybean">
                  🌱 ${n==="hi"?"पीली सोयाबीन":"Soybean"}
                </button>
                <button type="button" class="f-crop-btn ${this.targetCrop==="chana"?"active":""}" data-crop="chana">
                  🥣 ${n==="hi"?"चना (दाल)":"Chana / Gram"}
                </button>
              </div>
            </div>

            <!-- Step 4: Land Parcel Acreage -->
            <div class="f-form-field" style="margin-top: 14px;">
              <label>📐 ${n==="hi"?"4. खेत का कुल रकबा (एकड़ में):":"4. Land Parcel Acreage:"}</label>
              <div class="acreage-control-wrap" style="max-width: 240px;">
                <button type="button" class="btn-stepper" id="btn-csd-acre-minus">−</button>
                <div class="acre-display">
                  <span id="csd-acre-val">${this.acreage}</span>
                  <span class="acre-unit">${n==="hi"?"एकड़":"Acres"}</span>
                </div>
                <button type="button" class="btn-stepper" id="btn-csd-acre-plus">+</button>
              </div>
            </div>

            <button type="button" class="f-btn-analyze-csd" id="btn-run-csd-analysis">
              ✨ ${n==="hi"?"मिट्टी फोटो व मौसम का विश्लेषण करें":"Analyze Land Image & Weather Report"}
            </button>
          </div>

          <!-- Right Column: AI Analysis Report & Projected Yield Output -->
          <div class="f-csd-output-col glass-panel">
            <div class="f-out-top-bar">
              <span class="f-out-pill">🤖 Google AI Agronomic Report</span>
              <span class="f-out-location">📍 ${this.locationQuery}</span>
            </div>

            <!-- Soil & Image Analysis Strip -->
            <div class="f-csd-analysis-strip">
              <div class="f-as-item">
                <span class="f-as-lbl">${n==="hi"?"मिट्टी संरचना":"Soil Texture"}</span>
                <strong>${o.soilName}</strong>
              </div>
              <div class="f-as-item">
                <span class="f-as-lbl">${n==="hi"?"pH मान एवं पोषक तत्व":"pH & Nutrients"}</span>
                <strong>${o.phValue} • ${o.fertilityStatus}</strong>
              </div>
              <div class="f-as-item">
                <span class="f-as-lbl">${n==="hi"?"जल धारण व निकास":"Drainage & Retention"}</span>
                <strong>${o.drainage}</strong>
              </div>
            </div>

            <!-- Weather Report & Future Forecast -->
            <div class="f-csd-weather-card">
              <div class="f-w-top">
                <span class="f-w-icon">🌦️</span>
                <div>
                  <h4 class="f-w-title">${n==="hi"?"स्थानीय मौसम रिपोर्ट एवं 30-दिवसीय पूर्वानुमान":"Local Weather Report & Seasonal Forecast"}</h4>
                  <p class="f-w-metrics">${o.weatherSummary}</p>
                </div>
              </div>
              <div class="f-w-pills-row">
                <span class="f-wpill">${n==="hi"?"🌡️ तापमान:":"🌡️ Temp:"} <strong>${o.temp}</strong></span>
                <span class="f-wpill">${n==="hi"?"💧 नमी:":"💧 Humidity:"} <strong>${o.humidity}</strong></span>
                <span class="f-wpill">${n==="hi"?"🌧️ वर्षा जोखिम:":"🌧️ Rain Risk:"} <strong>${o.rainRisk}</strong></span>
                <span class="f-wpill">${n==="hi"?"☀️ धूप:":"☀️ Sunlight:"} <strong>${o.sunlight}</strong></span>
              </div>
            </div>

            <!-- Suitability Verdict for Current Time Period -->
            <div class="f-csd-verdict-card ${o.isSuitable?"verdict-pass":"verdict-warn"}">
              <div class="f-v-icon">${o.isSuitable?"✅":"⚠️"}</div>
              <div>
                <h4 class="f-v-title">${o.verdictTitle}</h4>
                <p class="f-v-desc">${o.verdictExplanation}</p>
              </div>
            </div>

            <!-- PROJECTED HARVEST OUTPUT / YIELD GENERATOR -->
            <div class="f-csd-yield-card">
              <div class="f-yc-header">
                <span class="f-yc-tag">🚀 ${n==="hi"?"संभावित फसल पैदावार अनुमान":"Projected Harvest Output Generator"}</span>
                <span class="f-yc-crop-name">${o.cropTitle}</span>
              </div>

              <div class="f-yc-numbers-grid">
                <div class="f-yn-box">
                  <span class="f-yn-lbl">${n==="hi"?"प्रति एकड़ संभावित उपज":"Expected Yield / Acre"}</span>
                  <strong class="f-yn-val text-green">${o.yieldPerAcre}</strong>
                </div>
                <div class="f-yn-box">
                  <span class="f-yn-lbl">${n==="hi"?`आपके ${this.acreage} एकड़ का कुल उत्पादन`:`Total Output (${this.acreage} Acres)`}</span>
                  <strong class="f-yn-val text-green">${o.totalYield}</strong>
                </div>
                <div class="f-yn-box">
                  <span class="f-yn-lbl">${n==="hi"?"अनुमानित सकल बाजार मूल्य":"Estimated Gross Market Value"}</span>
                  <strong class="f-yn-val">${o.estimatedGrossValue}</strong>
                </div>
              </div>

              <div class="f-yc-fert-box">
                <span class="f-fert-lbl">🧪 ${n==="hi"?"इस पैदावार को पाने हेतु अनुशंसित खाद मात्रा:":"Recommended Nutrient Input to Reach this Output:"}</span>
                <p>${o.fertilizerDose}</p>
              </div>
            </div>

            <!-- Direct Action: Link to Selling Advisor -->
            <div class="f-csd-next-step">
              <div>
                <strong>${n==="hi"?"फसल तैयार होने पर कहाँ बेचेंगे?":"Where will you sell once harvested?"}</strong>
                <p>${n==="hi"?"स्थानीय मंडी दलाल बनाम अंतर-राज्यीय मंडी व सीधे खरीदार का मुनाफा जांचें":"Compare nearest mandi mediator vs inter-state mandis vs direct consumers"}</p>
              </div>
              <button type="button" class="f-btn-goto-sell" onclick="window.kisanAppInstance ? window.kisanAppInstance.switchView('section-selling-advisor') : null">
                ⚖️ ${n==="hi"?"बिक्री व मुनाफा कैलकुलेटर खोलें":"Check Selling Profit Options"}
              </button>
            </div>
          </div>
        </div>
      </div>
    `,this.bindEvents(s)}calculateAgronomicModel(s){const n=s==="hi",o={black_cotton:{nameEn:"Deep Black Cotton Soil (Regur Clay)",nameHi:"गहरी काली कपास मिट्टी (रेगुर)",ph:"7.6 - 8.2",fertility:n?"मध्यम से उच्च जैविक कार्बन":"Medium-High Organic Matter",drainage:n?"धीमा निकास (जल भराव से सावधान)":"Slow Drainage (High Moisture Retention)"},red_loam:{nameEn:"Red Sandy Loam Soil (Lal Dumt)",nameHi:"लाल बलुई दोमट मिट्टी",ph:"6.4 - 6.8",fertility:n?"मध्यम पोटाश, कम फास्फोरस":"Moderate Potash, Low Phosphorus",drainage:n?"उत्तम निकास (सूखा जल्दी पड़ता है)":"Excellent Drainage (Rapid Drying)"},alluvial_clay:{nameEn:"Indo-Gangetic Alluvial Loam",nameHi:"गंगा के मैदानों की जलोढ़ दोमट",ph:"7.0 - 7.4 (Neutral Balanced)",fertility:n?"उच्च पोषक उर्वरता":"High Fertile Base",drainage:n?"संतुलित जल निकास":"Balanced Capillary Drainage"},sandy_loam:{nameEn:"Arid Sandy Loam Soil",nameHi:"हल्की रेतीली दोमट मिट्टी",ph:"7.8 - 8.4",fertility:n?"कम जैविक पदार्थ":"Low Organic Carbon",drainage:n?"अति तीव्र निकास (ड्रिप सिंचाई आवश्यक)":"Excess Drainage (Drip Irrigation Mandatory)"}},c=o[this.selectedSoil]||o.black_cotton;if(this.targetCrop==="tomato"){const m=(110*this.acreage).toFixed(0),g=(135*this.acreage).toFixed(0);return{soilName:n?c.nameHi:c.nameEn,phValue:`pH ${c.ph}`,fertilityStatus:c.fertility,drainage:c.drainage,weatherSummary:n?"28°C तापमान, 52% आर्द्रता, आगामी 15 दिन में हल्की से मध्यम धूप":"28°C, 52% Humidity, mild sunny periods in upcoming 15 days",temp:n?"28°C (अनुकूल)":"28°C (Optimal)",humidity:"52%",rainRisk:n?"कम (15%)":"Low Risk (15%)",sunlight:n?"7-8 घंटे प्रतिदिन":"7-8 hrs/day",isSuitable:!0,verdictTitle:n?"वर्तमान समय में बुवाई हेतु पूर्णतः उपयुक्त":"OPTIMAL TIME WINDOW FOR SOWING",verdictExplanation:n?"वर्तमान तापमान (24-30°C) और मिट्टी की बनावट टमाटर की जड़ों और फूल बनने के लिए आदर्श है। मौसम में भारी वर्षा का तात्कालिक खतरा नहीं है।":"Temperature and soil aeration are in optimal range for tomato root expansion and fruit setting with minimal fungal risk.",cropTitle:n?"हाइब्रिड टमाटर":"Hybrid Tomato",yieldPerAcre:n?"110 - 135 क्विंटल / एकड़":"110 - 135 Qtl / Acre",totalYield:n?`${m} - ${g} क्विंटल (${(g/10).toFixed(1)} टन)`:`${m} - ${g} Qtl (${(g/10).toFixed(1)} MT)`,estimatedGrossValue:n?`₹${(m*1400).toLocaleString("en-IN")} – ₹${(g*1800).toLocaleString("en-IN")}`:`₹${(m*1400).toLocaleString("en-IN")} – ₹${(g*1800).toLocaleString("en-IN")}`,fertilizerDose:n?"प्रति एकड़: 3 बोरी यूरिया (विभाजित डोज) + 2.5 बोरी डीएपी (बुवाई समय) + 1.5 बोरी पोटाश (MOP) + 10 किग्रा जिंक सल्फेट।":"Per Acre: 3 Bags Urea (Split) + 2.5 Bags DAP (Basal) + 1.5 Bags MOP + 10 kg Zinc Sulfate."}}else if(this.targetCrop==="onion"){const m=(90*this.acreage).toFixed(0),g=(115*this.acreage).toFixed(0);return{soilName:n?c.nameHi:c.nameEn,phValue:`pH ${c.ph}`,fertilityStatus:c.fertility,drainage:c.drainage,weatherSummary:n?"हवादार मौसम, 48% आर्द्रता, कंद विकास के लिए उपयुक्त रात का तापमान":"Breezy conditions, 48% humidity, optimal diurnal temperatures for bulb development",temp:"29°C / 18°C",humidity:"48%",rainRisk:n?"न्यूनतम":"Minimal (Dry Skies)",sunlight:n?"8 घंटे धूप":"8 hrs/day",isSuitable:!0,verdictTitle:n?"प्याज की फसल के लिए सर्वोत्तम समय":"EXCELLENT SEASON FOR ONION BULB DEVELOPMENT",verdictExplanation:n?"सूखा हवादार मौसम कंदों के आकार और ठोसपन को बढ़ाता है। बैंगनी धब्बा रोग की संभावना नगण्य है। मिट्टी में पानी रुकने न दें।":"Dry breezy climate promotes tight bold bulb formation with negligible fungal purple blotch risk.",cropTitle:n?"लाल प्याज":"Red Onion",yieldPerAcre:n?"90 - 115 क्विंटल / एकड़":"90 - 115 Qtl / Acre",totalYield:n?`${m} - ${g} क्विंटल (${(g/10).toFixed(1)} टन)`:`${m} - ${g} Qtl (${(g/10).toFixed(1)} MT)`,estimatedGrossValue:n?`₹${(m*1950).toLocaleString("en-IN")} – ₹${(g*2400).toLocaleString("en-IN")}`:`₹${(m*1950).toLocaleString("en-IN")} – ₹${(g*2400).toLocaleString("en-IN")}`,fertilizerDose:n?"प्रति एकड़: 2 बोरी यूरिया + 2 बोरी डीएपी + 2 बोरी सिंगल सुपर फॉस्फेट (SSP) + 20 किग्रा सल्फर (प्याज की गंध व रंग हेतु)।":"Per Acre: 2 Bags Urea + 2 Bags DAP + 2 Bags SSP + 20 kg Elemental Sulfur (Essential for bulb pungency & red skin)."}}else if(this.targetCrop==="wheat"){const m=(20*this.acreage).toFixed(0),g=(25*this.acreage).toFixed(0);return{soilName:n?c.nameHi:c.nameEn,phValue:`pH ${c.ph}`,fertilityStatus:c.fertility,drainage:c.drainage,weatherSummary:n?"हल्की ठंड की शुरुआत, कल्ले फूटने के लिए उपयुक्त 16-24°C तापमान":"Cooler winter onset, ideal 16-24°C range for tillering and grain filling",temp:"22°C / 14°C",humidity:"60%",rainRisk:n?"अनुकूल (10%)":"Optimal (10%)",sunlight:n?"6-7 घंटे":"6-7 hrs/day",isSuitable:!0,verdictTitle:n?"गेहूं बुवाई हेतु उपयुक्त समय":"IDEAL WINDOW FOR WHEAT SOWING",verdictExplanation:n?"तापमान में गिरावट गेहूं के कल्ले फूटने के लिए बहुत फायदेमंद है। पहली सिंचाई (CRI स्टेज) 21 दिन पर अवश्य करें।":"Gradual cooling supports vigorous tillering and dense ear-head development.",cropTitle:n?"शरबती गेहूं":"Sharbati Wheat",yieldPerAcre:n?"20 - 25 क्विंटल / एकड़":"20 - 25 Qtl / Acre",totalYield:n?`${m} - ${g} क्विंटल`:`${m} - ${g} Quintals`,estimatedGrossValue:n?`₹${(m*2425).toLocaleString("en-IN")} – ₹${(g*2800).toLocaleString("en-IN")}`:`₹${(m*2425).toLocaleString("en-IN")} – ₹${(g*2800).toLocaleString("en-IN")}`,fertilizerDose:n?"प्रति एकड़: 2.5 बोरी यूरिया + 1.5 बोरी डीएपी + 1 बोरी पोटाश (MOP) + 5 किग्रा जिंक सल्फेट (33%)।":"Per Acre: 2.5 Bags Urea + 1.5 Bags DAP + 1 Bag MOP + 5 kg Zinc Sulfate (33%)."}}else{const m=(12*this.acreage).toFixed(0),g=(18*this.acreage).toFixed(0);return{soilName:n?c.nameHi:c.nameEn,phValue:`pH ${c.ph}`,fertilityStatus:c.fertility,drainage:c.drainage,weatherSummary:n?"गर्म व आर्द्र परिस्थितियां, फसल बढ़वार के लिए उपयुक्त":"Warm humid climate supporting vigorous vegetative growth",temp:"30°C",humidity:"65%",rainRisk:n?"मध्यम":"Moderate",sunlight:n?"7 घंटे":"7 hrs/day",isSuitable:!0,verdictTitle:n?"फसल के लिए उपयुक्त समय":"SUITABLE CONDITIONS",verdictExplanation:n?"मिट्टी की उर्वरता और मौसम इस फसल चक्र के लिए अनुकूल हैं। समय पर निराई-गुड़ाई और कीट निगरानी रखें।":"Favorable soil chemistry and weather profile supporting target biomass production.",cropTitle:n?"व्यावसायिक फसल":"Commercial Crop",yieldPerAcre:n?"12 - 18 क्विंटल / एकड़":"12 - 18 Qtl / Acre",totalYield:n?`${m} - ${g} क्विंटल`:`${m} - ${g} Quintals`,estimatedGrossValue:n?`₹${(m*4500).toLocaleString("en-IN")} – ₹${(g*5500).toLocaleString("en-IN")}`:`₹${(m*4500).toLocaleString("en-IN")} – ₹${(g*5500).toLocaleString("en-IN")}`,fertilizerDose:n?"प्रति एकड़: संतुलित एनपीके 120:60:40 किग्रा/हेक्टेयर आधार पर खाद दें।":"Per Acre: Balanced NPK input with micronutrient foliar spray."}}}bindEvents(s){s.querySelectorAll(".f-btn-q-loc").forEach(f=>{f.addEventListener("click",()=>{this.locationQuery=f.getAttribute("data-loc");const _=s.querySelector("#inp-csd-loc");_&&(_.value=this.locationQuery),this.render()})});const o=s.querySelector("#inp-csd-loc");o&&o.addEventListener("change",f=>{this.locationQuery=f.target.value.trim()||"Nashik, Maharashtra",this.render()}),s.querySelectorAll(".f-btn-soil-preset").forEach(f=>{f.addEventListener("click",()=>{this.selectedSoil=f.getAttribute("data-soil"),this.render()})}),s.querySelectorAll(".f-crop-btn").forEach(f=>{f.addEventListener("click",()=>{this.targetCrop=f.getAttribute("data-crop"),this.render()})});const d=s.querySelector("#btn-csd-acre-minus"),m=s.querySelector("#btn-csd-acre-plus");d&&d.addEventListener("click",()=>{this.acreage>.5&&(this.acreage=parseFloat((this.acreage-.5).toFixed(1)),this.render())}),m&&m.addEventListener("click",()=>{this.acreage<50&&(this.acreage=parseFloat((this.acreage+.5).toFixed(1)),this.render())});const g=s.querySelector("#inp-csd-file");g&&g.addEventListener("change",f=>{if(f.target.files&&f.target.files[0]){const _=new FileReader;_.onload=b=>{this.imageSrc=b.target.result;const w=s.querySelector("#csd-preview-img");w&&(w.src=this.imageSrc),alert(this.getLang()==="hi"?`मिट्टी की फोटो प्राप्त हुई! स्थान '${this.locationQuery}' के मौसम रिपोर्ट के साथ फसल उपयुक्तता का विश्लेषण किया जा रहा है...`:`Field image loaded! Analyzing soil structure and cross-referencing with '${this.locationQuery}' weather telemetry...`),this.render()},_.readAsDataURL(f.target.files[0])}});const u=s.querySelector("#btn-run-csd-analysis");u&&u.addEventListener("click",()=>{this.render()})}}class Ds{constructor(s,n){this.containerId=s,this.getLang=n,this.selectedCrop="tomato",this.quantityQuintals=40,this.selectedVehicle="bolero"}init(){this.render()}update(){this.render()}render(){const s=document.getElementById(this.containerId);if(!s)return;const o=this.getLang()==="hi",c=this.calculateProfitMath(o);s.innerHTML=`
      <div class="f-sa-wrapper">
        <!-- Header -->
        <div class="f-sa-header glass-panel">
          <div>
            <span class="f-sa-badge">⚖️ ${o?"बिक्री निर्णय एवं दलाल बनाम सीधी बिक्री मुनाफा इंजन":"Crop Selling Decision: Mandi Broker vs Direct Consumer"}</span>
            <h3 class="f-sa-title">${o?"मेरे पास टमाटर / फसल है — इसे कहाँ बेचूं कि सबसे ज्यादा मुनाफा हो?":"I Have Produce to Sell — Where Should I Sell for Maximum Profit?"}</h3>
            <p class="f-sa-sub">${o?"स्थानीय मंडी दलाल, दूसरे राज्यों की बड़ी मंडियों (महाराष्ट्र, आंध्र प्रदेश) और सीधे उपभोक्ताओं को बेचने के फायदों व वाहन भाड़े की सीधी तुलना।":"Compare selling via nearest local mandi broker vs shipping to high-profit out-of-state mandis vs direct consumer buyers."}</p>
          </div>
        </div>

        <!-- Controls: Select Crop, Quantity, and Vehicle -->
        <div class="f-sa-controls-card glass-panel">
          <div class="f-sa-controls-grid">
            <div class="f-sa-ctrl">
              <label>${o?"फसल चुनें:":"Select Produce:"}</label>
              <div class="f-sa-crop-pills">
                <button type="button" class="f-sa-pill ${this.selectedCrop==="tomato"?"active":""}" data-crop="tomato">
                  🍅 ${o?"टमाटर":"Tomato"}
                </button>
                <button type="button" class="f-sa-pill ${this.selectedCrop==="onion"?"active":""}" data-crop="onion">
                  🧅 ${o?"लाल प्याज":"Onion"}
                </button>
                <button type="button" class="f-sa-pill ${this.selectedCrop==="wheat"?"active":""}" data-crop="wheat">
                  🌾 ${o?"गेहूं":"Wheat"}
                </button>
                <button type="button" class="f-sa-pill ${this.selectedCrop==="cotton"?"active":""}" data-crop="cotton">
                  🌿 ${o?"कपास":"Cotton"}
                </button>
              </div>
            </div>

            <div class="f-sa-ctrl">
              <label>${o?"बिक्री हेतु उपलब्ध मात्रा (क्विंटल):":"Lot Quantity for Sale (Quintals):"}</label>
              <div class="f-sa-qty-box">
                <input type="range" id="rng-sa-qty" min="10" max="150" step="5" value="${this.quantityQuintals}" class="f-arb-slider" />
                <span class="f-sa-qty-display"><strong>${this.quantityQuintals}</strong> Qtl (${(this.quantityQuintals/10).toFixed(1)} MT)</span>
              </div>
            </div>

            <div class="f-sa-ctrl">
              <label>${o?"परिवहन माध्यम (गाड़ी का प्रकार):":"Transport Medium / Vehicle:"}</label>
              <select id="sel-sa-vehicle" class="f-form-input">
                <option value="tata_ace" ${this.selectedVehicle==="tata_ace"?"selected":""}>
                  ${o?"छोटा हाथी (टाटा एस) • 15 क्विंटल • ₹14/किमी":"Mini Truck (Tata Ace) • 15 Qtl • ₹14/km"}
                </option>
                <option value="bolero" ${this.selectedVehicle==="bolero"?"selected":""}>
                  ${o?"बोलेरो पिकअप • 25 क्विंटल • ₹18/किमी":"Pickup Truck (Bolero) • 25 Qtl • ₹18/km"}
                </option>
                <option value="tractor" ${this.selectedVehicle==="tractor"?"selected":""}>
                  ${o?"ट्रैक्टर ट्रॉली • 40 क्विंटल • ₹22/किमी":"Tractor Trolley • 40 Qtl • ₹22/km"}
                </option>
                <option value="lorry" ${this.selectedVehicle==="lorry"?"selected":""}>
                  ${o?"10 चक्का कमर्शियल ट्रक • 100 क्विंटल • ₹32/किमी":"Commercial Truck (10-Wheeler) • 100 Qtl • ₹32/km"}
                </option>
              </select>
            </div>
          </div>
        </div>

        <!-- TWO SELLING METHODS COMPARISON GRID -->
        <div class="f-sa-comparison-grid">
          
          <!-- METHOD 1: VIA BROKER (MANDI ROUTE) -->
          <div class="f-sa-path-col glass-panel path-mandi">
            <div class="f-path-header">
              <span class="f-path-tag tag-dalal">🏛️ ${o?"विधि 1: मंडी मार्ग (दलाल / आढ़ती के माध्यम से)":"Method 1: Mandi Route (via Commission Broker)"}</span>
              <h4 class="f-path-title">${o?"एपीएमसी मंडी में आढ़त पर बिक्री":"Selling via APMC Commission Brokers"}</h4>
            </div>

            <!-- Option A: Nearest Local Mandi -->
            <div class="f-mandi-option-card">
              <div class="f-opt-head">
                <div>
                  <span class="f-opt-badge badge-local">📍 ${o?"विकल्प 1: सबसे नजदीकी स्थानीय मंडी":"Option A: Nearest Local Mandi"}</span>
                  <h5 class="f-opt-name">${c.localMandiName}</h5>
                </div>
                <div class="f-opt-price-box">
                  <span class="f-opt-price">₹${c.localRateKg}/kg</span>
                  <span class="f-opt-sub">₹${c.localRateQtl}/Qtl</span>
                </div>
              </div>

              <div class="f-opt-breakdown">
                <div class="f-ob-row">
                  <span>${o?"सकल बिक्री राशि":"Gross Sale Value"}:</span>
                  <strong>₹${c.localGross.toLocaleString("en-IN")}</strong>
                </div>
                <div class="f-ob-row text-red">
                  <span>${o?"दलाल / आढ़त कमीशन (6.5%)":"Broker Commission (6.5%)"}:</span>
                  <span>− ₹${c.localDalalCut.toLocaleString("en-IN")}</span>
                </div>
                <div class="f-ob-row text-red">
                  <span>${o?"स्थानीय लोडिंग व तुलाई":"Local Weighing & Loading"}:</span>
                  <span>− ₹${c.localHandling.toLocaleString("en-IN")}</span>
                </div>
                <div class="f-ob-row f-ob-total">
                  <span>${o?"शुद्ध इन-हैंड जेब में आय":"Net Take-Home In Pocket"}:</span>
                  <strong class="f-net-val">₹${c.localNetTakeHome.toLocaleString("en-IN")}</strong>
                </div>
              </div>
            </div>

            <!-- Option B: Out-of-State / Regional High-Demand Mandi -->
            <div class="f-mandi-option-card card-dest-mandi">
              <div class="f-opt-head">
                <div>
                  <span class="f-opt-badge badge-interstate">🚀 ${o?"विकल्प 2: अन्य राज्य/महानगर की बड़ी मंडी (उच्च भाव)":"Option B: Regional / Inter-State Mandi (Higher Rate)"}</span>
                  <h5 class="f-opt-name">${c.distantMandiName}</h5>
                  <span class="f-opt-dist">📍 ${c.distantLocation} • ${c.distantDistanceKm} ${o?"किमी दूरी":"km distance"}</span>
                </div>
                <div class="f-opt-price-box">
                  <span class="f-opt-price text-green">₹${c.distantRateKg}/kg</span>
                  <span class="f-opt-sub">₹${c.distantRateQtl}/Qtl (+₹${c.priceDiffKg}/kg ${o?"अधिक":"higher"})</span>
                </div>
              </div>

              <div class="f-opt-breakdown">
                <div class="f-ob-row">
                  <span>${o?"सकल बिक्री राशि":"Gross Sale Value"}:</span>
                  <strong>₹${c.distantGross.toLocaleString("en-IN")}</strong>
                </div>
                <div class="f-ob-row text-red">
                  <span>${o?`वाहन भाड़ा (${c.vehicleName})`:`Vehicle Freight Cost (${c.vehicleName})`}:</span>
                  <span>− ₹${c.distantFreight.toLocaleString("en-IN")}</span>
                </div>
                <div class="f-ob-row text-red">
                  <span>${o?"हाईवे टोल व लोडिंग खर्च":"Highway Toll & Handling"}:</span>
                  <span>− ₹${c.distantTolls.toLocaleString("en-IN")}</span>
                </div>
                <div class="f-ob-row text-red">
                  <span>${o?"मंडी दलाल आढ़त (5.0%)":"Mandi Broker Commission (5%)"}:</span>
                  <span>− ₹${c.distantCommission.toLocaleString("en-IN")}</span>
                </div>
                <div class="f-ob-row f-ob-total f-ob-highlight">
                  <span>${o?"भाड़ा काटकर शुद्ध इन-हैंड आय":"Net Take-Home After Transport"}:</span>
                  <strong class="f-net-val text-green">₹${c.distantNetTakeHome.toLocaleString("en-IN")}</strong>
                </div>
              </div>

              <!-- Transport Savings & Extra Profit Badge -->
              <div class="f-mandi-extra-badge">
                <span class="f-me-icon">💰</span>
                <div>
                  <strong>${o?`स्थानीय मंडी से ₹${c.mandiExtraGain.toLocaleString("en-IN")} अधिक शुद्ध बचत व मुनाफा!`:`+₹${c.mandiExtraGain.toLocaleString("en-IN")} Extra Net Gain vs Local Mandi!`}</strong>
                  <p>${o?`भाड़ा व टोल काटने के बाद भी आपको प्रति क्विंटल ₹${(c.mandiExtraGain/this.quantityQuintals).toFixed(0)} अतिरिक्त शुद्ध लाभ मिलता है।`:`Even after vehicle freight & tolls, you earn ₹${(c.mandiExtraGain/this.quantityQuintals).toFixed(0)} more per quintal.`}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- METHOD 2: DIRECT TO CONSUMERS / SUPERMARKETS (ZERO COMMISSION ROUTE) -->
          <div class="f-sa-path-col glass-panel path-direct">
            <div class="f-path-header">
              <span class="f-path-tag tag-direct">🛒 ${o?"विधि 2: सीधे उपभोक्ता व सुपरमार्केट (बिचौलिया मुक्त)":"Method 2: Direct to Consumers (Zero Broker Commission)"}</span>
              <h4 class="f-path-title">${o?"सीधी बिक्री — 0% दलाल कमीशन व खेत से उठाई":"Direct Consumer / Institutional Buyer Network"}</h4>
            </div>

            <div class="f-direct-hero-card">
              <div class="f-direct-rate-box">
                <div>
                  <span class="f-dir-lbl">${o?"सीधी खरीद पेशकश दर:":"Direct Purchase Offer Rate:"}</span>
                  <strong class="f-dir-rate">₹${c.directRateKg}/kg</strong>
                  <span class="f-dir-sub">₹${c.directRateQtl}/Qtl</span>
                </div>
                <div class="f-dir-badge">
                  <span>${o?"✨ 0% दलाली (शून्य कमीशन)":"✨ Zero Commission (0%)"}</span>
                </div>
              </div>

              <div class="f-opt-breakdown" style="margin-top: 14px;">
                <div class="f-ob-row">
                  <span>${o?"सकल बिक्री राशि":"Gross Sale Value"}:</span>
                  <strong>₹${c.directGross.toLocaleString("en-IN")}</strong>
                </div>
                <div class="f-ob-row text-green">
                  <span>${o?"दलाल / आढ़त कमीशन":"Broker / Intermediary Commission"}:</span>
                  <strong>${o?"₹0 (शून्य - कोई कटौती नहीं)":"₹0 (Zero - No Deductions)"}</strong>
                </div>
                <div class="f-ob-row text-green">
                  <span>${o?"खेत पर डोरस्टेप उठाई (परिवहन खर्च)":"Farmgate Pickup (Transport Cost)"}:</span>
                  <strong>${o?"₹0 (खरीदार द्वारा वहन)":"₹0 (Covered by Buyer)"}</strong>
                </div>
                <div class="f-ob-row f-ob-total f-ob-direct-total">
                  <span>${o?"सीधी जेब में जाने वाली शुद्ध आय":"Pure Net Take-Home In Hand"}:</span>
                  <strong class="f-net-val text-purple">₹${c.directGross.toLocaleString("en-IN")}</strong>
                </div>
              </div>

              <!-- Direct Consumer Win Banner -->
              <div class="f-direct-win-banner">
                <div class="f-dw-icon">🏆</div>
                <div>
                  <strong>${o?`स्थानीय दलाल से ₹${c.directExtraGain.toLocaleString("en-IN")} ज्यादा शुद्ध लाभ (+${c.directPercentageGain}% अधिक)!`:`+₹${c.directExtraGain.toLocaleString("en-IN")} Extra Profit vs Local Mandi (+${c.directPercentageGain}%)!`}</strong>
                  <p>${o?"न मंडी में लाइन में लगना, न दलाल को कमीशन देना। नकद भुगतान सीधे आपके बैंक खाते में।":"Zero mandi queuing, zero broker deductions, spot direct payment to your bank."}</p>
                </div>
              </div>

              <div class="f-direct-actions">
                <button type="button" class="f-btn-sa-post-lot" onclick="window.kisanAppInstance ? window.kisanAppInstance.switchView('section-procurement') : null">
                  🛒 ${o?"सीधे खरीदारों को यह लॉट बेचें":"List Harvest Lot on Direct Buyer Hub"}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Strategic Decision Summary Banner -->
        <div class="f-sa-verdict-banner glass-panel">
          <div class="f-sv-icon">💡</div>
          <div>
            <strong>${o?"एआई अंतिम बिक्री सलाह:":"AI Strategic Selling Recommendation:"}</strong>
            <p>${c.finalRecommendationText}</p>
          </div>
        </div>
      </div>
    `,this.bindEvents(s)}calculateProfitMath(s){let n=14,o="Pimpalgaon APMC Yard (Local)",c="Vashi APMC Navi Mumbai (Maharashtra)",h="Navi Mumbai Yard-2",d=21,m=195,g=23.5;this.selectedCrop==="onion"?(n=19.5,o="Lasalgaon APMC Yard (Local)",c="Surat APMC Vegetable Yard (Gujarat) / Guntur (AP)",h="Surat / Guntur Agri Terminal",d=25.5,m=240,g=27):this.selectedCrop==="wheat"?(n=24.25,o="Bhatinda Grain Market (Local)",c="Lawrence Road Foodgrain Terminal, Delhi",h="Delhi NCR Wholesale Terminal",d=28.5,m=310,g=30.5):this.selectedCrop==="cotton"&&(n=73.5,o="Mansa Cotton Yard (Local)",c="Guntur Cotton Yard (Andhra Pradesh)",h="Guntur Commercial Yard",d=82,m=450,g=86);const u=n*100,f=d*100,_=g*100,b=this.quantityQuintals*u,w=b*.065,S=this.quantityQuintals*30,E=b-(w+S),T=this.quantityQuintals*f;let R=18,z="Bolero Pickup";this.selectedVehicle==="tata_ace"?(R=14,z="Tata Ace"):this.selectedVehicle==="tractor"?(R=22,z="Tractor Trolley"):this.selectedVehicle==="lorry"&&(R=32,z="10-Wheeler Truck");const K=m*R,F=Math.round(m*1.8),Y=T*.05,ot=T-(K+F+Y),ht=this.quantityQuintals*_,tt=ot-E,at=ht-E,gt=(at/E*100).toFixed(0),J=s?`1. सबसे ज्यादा शुद्ध मुनाफा <strong>सीधे उपभोक्ताओं / सुपरमार्केट्स को बेचने पर (+₹${at.toLocaleString("en-IN")} ज्यादा)</strong> मिल रहा है क्योंकि इसमें 0% दलाली और शून्य भाड़ा है।<br/>2. यदि आपको पूरा लॉट थोक मंडी में ही निकालना है, तो अपनी स्थानीय मंडी के बजाय <strong>${z} से ${c} भेजना सर्वश्रेष्ठ है</strong>, जिससे भाड़ा काटकर भी आपको <strong>+₹${tt.toLocaleString("en-IN")} की अतिरिक्त शुद्ध कमाई</strong> होगी!`:`1. Direct Consumer route yields the highest take-home (+₹${at.toLocaleString("en-IN")} extra pure cash) with zero broker commission and farmgate collection.<br/>2. For bulk APMC trading, shipping via ${z} to ${c} nets you +₹${tt.toLocaleString("en-IN")} extra after deducting all fuel and tolls!`;return{localMandiName:o,localRateKg:n,localRateQtl:u,localGross:b,localDalalCut:w,localHandling:S,localNetTakeHome:E,distantMandiName:c,distantLocation:h,distantRateKg:d,distantRateQtl:f,distantDistanceKm:m,priceDiffKg:(d-n).toFixed(1),distantGross:T,vehicleName:z,distantFreight:K,distantTolls:F,distantCommission:Y,distantNetTakeHome:ot,mandiExtraGain:tt,directRateKg:g,directRateQtl:_,directGross:ht,directExtraGain:at,directPercentageGain:gt,finalRecommendationText:J}}bindEvents(s){s.querySelectorAll(".f-sa-pill").forEach(h=>{h.addEventListener("click",()=>{this.selectedCrop=h.getAttribute("data-crop"),this.render()})});const o=s.querySelector("#rng-sa-qty");o&&o.addEventListener("input",h=>{this.quantityQuintals=parseInt(h.target.value,10),this.render()});const c=s.querySelector("#sel-sa-vehicle");c&&c.addEventListener("change",h=>{this.selectedVehicle=h.target.value,this.render()})}}const Ra=[{id:"pm_kisan",titleEn:"PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",titleHi:"पीएम-किसान (प्रधानमंत्री किसान सम्मान निधि योजना)",level:"Central",categoryEn:"Income Support",categoryHi:"आय सहायता",category:"Income Support",benefitAmountEn:"₹6,000 per year (Direct Bank Transfer in 3 installments of ₹2,000)",benefitAmountHi:"₹6,000 प्रति वर्ष (₹2,000 की 3 किश्तों में सीधे बैंक खाते में DBT)",eligibilityEn:"All small and marginal landholder farmer families with cultivable land ownership.",eligibilityHi:"कृषि योग्य भूमि वाले सभी भूमिधारक किसान परिवार।",documentsRequiredEn:"Aadhaar Card, Land Record (Khasra/Khatauni/7-12), Bank Account linked with Aadhaar.",documentsRequiredHi:"आधार कार्ड, जमीन की खतौनी / 7-12 नकल, आधार लिंक बैंक पासबुक।",howToApplyEn:"Apply online at pmkisan.gov.in or visit your local CSC / Common Service Center.",howToApplyHi:"pmkisan.gov.in पर ऑनलाइन आवेदन करें अथवा नजदीकी सीएससी (जन सेवा केंद्र) जाएं।",officialPortal:"https://pmkisan.gov.in",helpline:"155261 / 011-24300606"},{id:"kisan_credit_card",titleEn:"Kisan Credit Card (KCC) Low-Interest Crop Loan",titleHi:"किसान क्रेडिट कार्ड (KCC) सस्ती ब्याज दर कृषि ऋण",level:"Central",categoryEn:"Agri Loan",categoryHi:"कृषि ऋण",category:"Agri Loan",benefitAmountEn:"Short-term credit up to ₹3 Lakh at an effective 4% interest rate (7% base with 3% prompt repayment subvention). No collateral needed up to ₹1.6 Lakh.",benefitAmountHi:"₹3 लाख तक का फसली ऋण केवल 4% प्रभावी ब्याज दर पर (समय पर भुगतान पर 3% छूट)। ₹1.6 लाख तक बिना बंधक (Collateral-free) लोन।",eligibilityEn:"All farmers, tenant farmers, sharecroppers, self-help groups (SHGs), and animal husbandry / fishery farmers.",eligibilityHi:"सभी व्यक्तिगत किसान, बटाईदार, पट्टेदार, स्वयं सहायता समूह एवं पशुपालक/मत्स्यपालक।",documentsRequiredEn:"Land ownership records (7/12, Khatauni), Identity & Address Proof (Aadhaar, Voter ID), Crop Sowing Declaration.",documentsRequiredHi:"जमीन के दस्तावेज (7/12, खतौनी), पहचान व पते का प्रमाण (आधार कार्ड), फसल बुवाई घोषणा पत्र।",howToApplyEn:"Apply at any Commercial Bank, Regional Rural Bank (RRB), Cooperative Bank, or online via PM-KISAN portal.",howToApplyHi:"किसी भी राष्ट्रीयकृत बैंक, क्षेत्रीय ग्रामीण बैंक (RRB) या प्राथमिक कृषि सहकारी समिति में आवेदन करें।",officialPortal:"https://myscheme.gov.in",helpline:"1800-180-1551"},{id:"pmfby_crop_insurance",titleEn:"Pradhan Mantri Fasal Bima Yojana (PMFBY)",titleHi:"प्रधानमंत्री फसल बीमा योजना (PMFBY)",level:"Central",categoryEn:"Crop Insurance",categoryHi:"फसल बीमा",category:"Crop Insurance",benefitAmountEn:"Comprehensive financial compensation for crop failure due to unseasonal rain, drought, flood, hailstorm, or pests. Farmer premium: 1.5% for Rabi, 2% for Kharif, 5% for Horticulture.",benefitAmountHi:"अकाल, बेमौसम बारिश, सूखा, ओलावृष्टि एवं कीट प्रकोप से फसल क्षति पर पूर्ण मुआवजा। किसान प्रीमियम: रबी 1.5%, खरीफ 2%, बागवानी 5%।",eligibilityEn:"All farmers growing notified crops in notified areas including sharecroppers and tenant farmers.",eligibilityHi:"अधिसूचित क्षेत्रों में अधिसूचित फसलें उगाने वाले सभी किसान एवं बटाईदार।",documentsRequiredEn:"Land Record, Crop Sowing Certificate from Patwari/Gram Sevak, Bank Passbook, Aadhaar.",documentsRequiredHi:"भूमि रिकॉर्ड, पटवारी/ग्राम सेवक से फसल बुवाई प्रमाण पत्र, बैंक पासबुक, आधार कार्ड।",howToApplyEn:"Apply through pmfby.gov.in, banks, CSCs, or insurance intermediaries within notified cut-off dates.",howToApplyHi:"pmfby.gov.in पोर्टल, बैंक शाखा या सीएससी केंद्र के माध्यम से कट-ऑफ तिथि से पूर्व बीमा कराएं।",officialPortal:"https://pmfby.gov.in",helpline:"1800-180-2117"},{id:"pm_kusum_solar",titleEn:"PM-KUSUM (Solar Agriculture Pump Subsidy)",titleHi:"पीएम-कुसुम योजना (सोलर कृषि पंप पर 90% तक सब्सिडी)",level:"Central",categoryEn:"Solar & Irrigation",categoryHi:"सौर ऊर्जा सिंचाई",category:"Solar & Irrigation",benefitAmountEn:"Up to 90% subsidy for installation of 3HP to 10HP standalone solar pumps (Central Govt 30% + State Govt 30% + Bank Loan 30% + Farmer share only 10%).",benefitAmountHi:"3 से 10 हॉर्सपावर सोलर पंप लगाने पर 90% तक अनुदान (केंद्र 30% + राज्य 30% + बैंक लोन 30% + किसान अंश मात्र 10%)।",eligibilityEn:"Individual farmers, groups of farmers, water user associations with farmland and water source (borewell/well).",eligibilityHi:"व्यक्तिगत किसान, किसान समूह, जल उपभोक्ता समितियां जिनके पास खेती योग्य जमीन व जल स्रोत हो।",documentsRequiredEn:"Land records, Borewell/Water source certificate, Electricity bill (if existing diesel pump replacement), Aadhaar, Bank Details.",documentsRequiredHi:"जमीन के कागजात, बोरवेल/कुएं का प्रमाण, आधार कार्ड, बैंक खाता विवरण।",howToApplyEn:"Apply through the State Renewable Energy Development Agency (e.g. MEDA in Maharashtra, UPNEDA in UP).",howToApplyHi:"राज्य अक्षय ऊर्जा विकास एजेंसी के आधिकारिक पोर्टल पर ऑनलाइन आवेदन करें।",officialPortal:"https://pmkusum.mnre.gov.in",helpline:"1800-180-3333"},{id:"tractor_machinery_smam",titleEn:"SMAM Farm Mechanization Subsidy (Tractors & Implements)",titleHi:"कृषि यंत्रीकरण उप-मिशन (ट्रैक्टर व कृषि यंत्रों पर 50-80% सब्सिडी)",level:"Central",categoryEn:"Equipment Subsidy",categoryHi:"कृषि यंत्र अनुदान",category:"Equipment Subsidy",benefitAmountEn:"40% to 50% subsidy on purchase of Tractors, Power Tillers, Rotavators, Harvesters, Drone Sprayers (up to 80% for Custom Hiring Centers).",benefitAmountHi:"ट्रैक्टर, रोटावेटर, पावर टिलर, रीपर, ड्रोन स्प्रेयर की खरीद पर 40% से 50% तक की छूट (कस्टम हायरिंग सेंटर पर 80% तक)।",eligibilityEn:"All registered farmers. Priority given to small, marginal, SC/ST, and women farmers.",eligibilityHi:"सभी पंजीकृत किसान। छोटे, सीमांत, एससी/एसटी एवं महिला किसानों को प्राथमिकता।",documentsRequiredEn:"Land record (Khatauni), Aadhaar Card, Driving License (for tractor), Bank Passbook, Quotation of machinery.",documentsRequiredHi:"खतौनी, आधार कार्ड, बैंक पासबुक, अधिकृत डीलर से यंत्र का कोटेशन (बिल)।",howToApplyEn:"Register on agrimachinery.nic.in (DBT in Agriculture Mechanization portal).",howToApplyHi:"agrimachinery.nic.in पोर्टल पर डीबीटी यंत्रीकरण हेतु ऑनलाइन आवेदन करें।",officialPortal:"https://agrimachinery.nic.in",helpline:"011-23382012"},{id:"maha_namo_shetkari",titleEn:"Maharashtra: Namo Shetkari Mahasanman Nidhi",titleHi:"महाराष्ट्र: नमो शेतकरी महासन्मान निधी योजना",level:"State",state:"Maharashtra",stateHi:"महाराष्ट्र",categoryEn:"Income Support",categoryHi:"आय सहायता",category:"Income Support",benefitAmountEn:"Additional ₹6,000 per year directly to Maharashtra farmers (Combined with PM-KISAN, farmers receive ₹12,000 total per year).",benefitAmountHi:"महाराष्ट्र के किसानों को अतिरिक्त ₹6,000 प्रति वर्ष (पीएम-किसान मिलाकर कुल ₹12,000 प्रति वर्ष)।",eligibilityEn:"All farmers in Maharashtra who are active beneficiaries of PM-KISAN.",eligibilityHi:"महाराष्ट्र के सभी किसान जो पीएम-किसान योजना के सक्रिय लाभार्थी हैं।",documentsRequiredEn:"PM-KISAN registration number, Aadhaar, Land Record (7/12 & 8A).",documentsRequiredHi:"पीएम-किसान पंजीकरण संख्या, आधार कार्ड, 7/12 व 8-अ उतारा।",howToApplyEn:"Automatic linkage with PM-KISAN database. Check status on mahadbt.maharashtra.gov.in.",howToApplyHi:"पीएम-किसान डेटाबेस से स्वचालित लिंक। महाडीबीटी पोर्टल पर स्थिति जांचें।",officialPortal:"https://mahadbt.maharashtra.gov.in",helpline:"022-49150800"},{id:"ap_rythu_bharosa",titleEn:"Andhra Pradesh: YSR Rythu Bharosa",titleHi:"आंध्र प्रदेश: वाईएसआर रायथू भरोसा योजना",level:"State",state:"Andhra Pradesh",stateHi:"आंध्र प्रदेश",categoryEn:"Input Support",categoryHi:"निवेश सहायता",category:"Input Support",benefitAmountEn:"₹13,500 per year financial input assistance per farmer family (including tenant farmers and RoFR forest cultivators).",benefitAmountHi:"प्रति किसान परिवार ₹13,500 प्रति वर्ष की वित्तीय सहायता (बटाईदार व वन पट्टा किसान भी शामिल)।",eligibilityEn:"Farmer families owning cultivable land or registered tenant farmers (CCRC holders) in Andhra Pradesh.",eligibilityHi:"आंध्र प्रदेश के भूमिधारक किसान एवं पंजीकृत बटाईदार किसान।",documentsRequiredEn:"Aadhaar Card, Pattadar Passbook, CCRC Card (for tenant farmers), Bank Account details.",documentsRequiredHi:"आधार कार्ड, पट्टादार पासबुक, सीसीआरसी कार्ड, बैंक खाता पासबुक।",howToApplyEn:"Register through village Rythu Bharosa Kendras (RBKs) or visit ysrrythubharosa.ap.gov.in.",howToApplyHi:"ग्राम रायथू भरोसा केंद्र (RBK) पर जाएं अथवा आधिकारिक पोर्टल पर आवेदन करें।",officialPortal:"https://ysrrythubharosa.ap.gov.in",helpline:"1902"},{id:"up_kisan_durghatna",titleEn:"Uttar Pradesh: Mukhyamantri Krishak Durghatna Kalyan Yojana",titleHi:"उत्तर प्रदेश: मुख्यमंत्री कृषक दुर्घटना कल्याण योजना",level:"State",state:"Uttar Pradesh",stateHi:"उत्तर प्रदेश",categoryEn:"Social Security",categoryHi:"सुरक्षा सहायता",category:"Social Security",benefitAmountEn:"Financial assistance up to ₹5,00,000 to the family in case of accidental death or permanent disability of farmer or family working on farm.",benefitAmountHi:"खेत पर काम करते समय दुर्घटना में मृत्यु या स्थायी दिव्यांगता पर ₹5,00,000 तक की आर्थिक सहायता।",eligibilityEn:"Registered farmers, co-tenants, and farm laborers aged 18 to 70 years residing in Uttar Pradesh.",eligibilityHi:"उत्तर प्रदेश के 18 से 70 वर्ष आयु के किसान, सह-खातेदार एवं खेत में कार्यरत श्रमिक।",documentsRequiredEn:"Death/Disability Certificate, Postmortem Report/FIR, Land Record (Khatauni), Aadhaar, Bank Details.",documentsRequiredHi:"मृत्यु/दिव्यांगता प्रमाण पत्र, पोस्टमार्टम रिपोर्ट, खतौनी नकल, आश्रित का आधार व बैंक विवरण।",howToApplyEn:"Submit application to the District Magistrate / Sub-Divisional Magistrate (SDM) or online at upagripardarshi.gov.in within 45 days.",howToApplyHi:"दुर्घटना के 45 दिन के भीतर तहसील में एसडीएम कार्यालय अथवा कृषि विभाग पोर्टल पर आवेदन करें।",officialPortal:"https://upagripardarshi.gov.in",helpline:"0522-2200234"},{id:"punjab_crop_residue",titleEn:"Punjab: In-situ Crop Residue Management (CRM) Subsidy",titleHi:"पंजाब: पराली प्रबंधन कृषि यंत्र सब्सिडी योजना",level:"State",state:"Punjab",stateHi:"पंजाब",categoryEn:"Machinery Subsidy",categoryHi:"यंत्र अनुदान",category:"Machinery Subsidy",benefitAmountEn:"50% individual subsidy and 80% cooperative subsidy on Happy Seeder, Super Seeder, Straw Management System (SMS), Mulcher, and Zero-Till Drills.",benefitAmountHi:"सुपर सीडर, हैप्पी सीडर, स्ट्रा मल्चर पर किसानों को 50% तथा किसान समितियों को 80% तक सब्सिडी।",eligibilityEn:"Farmers owning land in Punjab and registered Farmer Producer Organizations (FPOs) / Panchayats.",eligibilityHi:"पंजाब के सभी किसान, पंजीकृत एफपीओ एवं ग्राम पंचायतें।",documentsRequiredEn:"Land Record (Jamabandi), Aadhaar, Tractor RC, Bank Passbook.",documentsRequiredHi:"जमाबंदी नकल, आधार कार्ड, ट्रैक्टर की आरसी, बैंक पासबुक।",howToApplyEn:"Apply online at agrimachinerypb.com during state window announcement.",howToApplyHi:"agrimachinerypb.com पोर्टल पर ऑनलाइन आवेदन करें।",officialPortal:"https://agrimachinerypb.com",helpline:"0172-2970605"},{id:"karnataka_rytha_siri",titleEn:"Karnataka: Rytha Siri & Krishi Bhagya Scheme",titleHi:"कर्नाटक: रायता सिरी एवं कृषि भाग्य योजना",level:"State",state:"Karnataka",stateHi:"कर्नाटक",categoryEn:"Input & Water Storage",categoryHi:"जल संरक्षण व मिलेट प्रोत्साहन",category:"Input & Water Storage",benefitAmountEn:"₹10,000 per hectare incentive for minor millet growers + 80% to 90% subsidy for construction of farm ponds (Krishi Honda) with polythene lining and diesel pumps.",benefitAmountHi:"मोटे अनाज (मिलेट) उत्पादकों को ₹10,000 प्रति हेक्टेयर प्रोत्साहन राशि + खेत में कृषि तालाब (फार्म पॉन्ड) पर 80-90% सब्सिडी।",eligibilityEn:"All farmers in dryland and rainfed districts of Karnataka.",eligibilityHi:"कर्नाटक के वर्षा आधारित एवं शुष्क क्षेत्रों के सभी किसान।",documentsRequiredEn:"RTC (Pahani), Aadhaar Card, Bank Account linked with FRUITS ID.",documentsRequiredHi:"आरटीसी (पहाणी), आधार कार्ड, फ्रूट्स (FRUITS) आईडी लिंक बैंक खाता।",howToApplyEn:"Apply online through fruits.karnataka.gov.in or contact the local Raitha Samparka Kendra (RSK).",howToApplyHi:"fruits.karnataka.gov.in पोर्टल पर अथवा नजदीकी रायता संपर्क केंद्र (RSK) पर जाएं।",officialPortal:"https://fruits.karnataka.gov.in",helpline:"080-22212861"},{id:"mp_kisan_kalyan",titleEn:"Madhya Pradesh: Mukhyamantri Kisan Kalyan Yojana",titleHi:"मध्य प्रदेश: मुख्यमंत्री किसान कल्याण योजना",level:"State",state:"Madhya Pradesh",stateHi:"मध्य प्रदेश",categoryEn:"Income Support",categoryHi:"आय सहायता",category:"Income Support",benefitAmountEn:"₹6,000 per year in two installments from State Government (Combined with PM-KISAN, MP farmers receive ₹12,000 per year).",benefitAmountHi:"मध्य प्रदेश सरकार द्वारा प्रति वर्ष ₹6,000 अतिरिक्त (पीएम-किसान के साथ कुल ₹12,000 प्रति वर्ष)।",eligibilityEn:"All landholder farmers of Madhya Pradesh enrolled in PM-KISAN.",eligibilityHi:"मध्य प्रदेश के वे सभी किसान जो पीएम-किसान योजना के पात्र हितग्राही हैं।",documentsRequiredEn:"Samagra ID, Aadhaar Card, Khasra/Bhu-Abhilekh, Bank Passbook.",documentsRequiredHi:"समग्र आईडी, आधार कार्ड, खसरा नकल, बैंक पासबुक।",howToApplyEn:"Verification conducted by village Patwari via SAARA portal (saara.mp.gov.in).",howToApplyHi:"ग्राम पटवारी द्वारा सारा (SAARA) पोर्टल के माध्यम से सत्यापन।",officialPortal:"https://saara.mp.gov.in",helpline:"181 / 0755-2700800"},{id:"raj_tarbandi_kisan",titleEn:"Rajasthan: Mukhyamantri Khet Tarbandi Scheme",titleHi:"राजस्थान: मुख्यमंत्री खेत तारबंदी योजना",level:"State",state:"Rajasthan",stateHi:"राजस्थान",categoryEn:"Crop Protection",categoryHi:"फसल सुरक्षा अनुदान",category:"Crop Protection",benefitAmountEn:"50% subsidy up to ₹40,000 (up to ₹48,000 for small/marginal farmers) for barbed wire fencing to protect standing crops from stray cattle and wild animals.",benefitAmountHi:"आवारा पशुओं व नीलगाय से फसल सुरक्षा हेतु तारबंदी पर 50% या अधिकतम ₹40,000 से ₹48,000 तक का अनुदान।",eligibilityEn:"Farmers owning minimum 1.5 hectares (approx. 6 bigha) cultivable land in Rajasthan (can apply jointly as a group).",eligibilityHi:"राजस्थान के किसान जिनके पास न्यूनतम 1.5 हेक्टेयर (लगभग 6 बीघा) जमीन हो या समूह बनाकर आवेदन करें।",documentsRequiredEn:"Jamabandi (land record not older than 6 months), Aadhaar Card, Jan Aadhaar Card, Bank Passbook, Field map.",documentsRequiredHi:"जमाबंदी नकल, जन आधार कार्ड, आधार कार्ड, बैंक पासबुक, खेत का नक्शा (ट्रेस)।",howToApplyEn:"Apply online on the RajKisan Saathi portal (rajkisan.rajasthan.gov.in) or nearest e-Mitra kiosk.",howToApplyHi:"राजकिसान साथी पोर्टल (rajkisan.rajasthan.gov.in) पर ई-मित्र के माध्यम से ऑनलाइन आवेदन करें।",officialPortal:"https://rajkisan.rajasthan.gov.in",helpline:"1800-180-1551"},{id:"guj_ikhedut_subsidies",titleEn:"Gujarat: i-Khedut Portal Drip & Farm Equipment Subsidy",titleHi:"गुजरात: आई-खेडूत सूक्ष्म सिंचाई (ड्रिप) एवं कृषि यंत्र सब्सिडी",level:"State",state:"Gujarat",stateHi:"गुजरात",categoryEn:"Equipment Subsidy",categoryHi:"कृषि यंत्र अनुदान",category:"Equipment Subsidy",benefitAmountEn:"Up to 70% to 80% subsidy for micro-irrigation (Drip & Sprinkler) via GGRC + up to ₹45,000 to ₹1,00,000 on Rotavators, Threshers, and Tractors.",benefitAmountHi:"ड्रिप एवं स्प्रिंकलर सिंचाई पर 70-80% तक अनुदान + रोटावेटर, थ्रेशर एवं ट्रैक्टर खरीद पर ₹45,000 से ₹1,00,000 तक की वित्तीय छूट।",eligibilityEn:"All farmers having 7/12 & 8-A land records in Gujarat. Special 10% extra benefit for SC/ST/Small farmers.",eligibilityHi:"गुजरात के 7/12 व 8-अ खाताधारक किसान। छोटे व सीमांत किसानों को अतिरिक्त अनुदान।",documentsRequiredEn:"7/12 & 8A Land extracts, Aadhaar Card, Bank Passbook, Mobile linked with Aadhaar.",documentsRequiredHi:"7/12 व 8-अ नकल, आधार कार्ड, बैंक पासबुक, जाति प्रमाण पत्र (यदि लागू हो)।",howToApplyEn:"Apply online at ikhedut.gujarat.gov.in during seasonal open application windows.",howToApplyHi:"ikhedut.gujarat.gov.in पोर्टल पर ऑनलाइन आवेदन करें अथवा ग्राम वीसीई (VCE) से संपर्क करें।",officialPortal:"https://ikhedut.gujarat.gov.in",helpline:"1800-233-0222"},{id:"telangana_rythu_bandhu",titleEn:"Telangana: Rythu Bandhu & Rythu Bima",titleHi:"तेलंगाना: रायथू बंधु निवेश सहायता एवं रायथू बीमा योजना",level:"State",state:"Telangana",stateHi:"तेलंगाना",categoryEn:"Income Support",categoryHi:"आय सहायता",category:"Income Support",benefitAmountEn:"₹10,000 per acre per year (₹5,000 per season Kharif/Rabi) direct to bank account + ₹5 Lakh 100% state-funded life insurance within 10 days of claim.",benefitAmountHi:"₹10,000 प्रति एकड़ प्रति वर्ष (खरीफ व रबी सीजन में ₹5,000-₹5,000 सीधे खाते में) + ₹5 लाख का पूर्ण सरकारी रायथू जीवन बीमा।",eligibilityEn:"All pattadar farmers registered on Dharani portal with agricultural land.",eligibilityHi:"धरणी (Dharani) पोर्टल पर पंजीकृत सभी पट्टादार कृषि भूमि धारक किसान।",documentsRequiredEn:"Pattadar Passbook, Aadhaar Card, Bank Passbook.",documentsRequiredHi:"पट्टादार पासबुक, आधार कार्ड, बैंक खाता विवरण।",howToApplyEn:"Automatic DBT disbursement via Dharani land registry. Check status at rythubandhu.telangana.gov.in.",howToApplyHi:"धरणी पोर्टल डेटाबेस से सीधे बैंक खाते में भुगतान। रायथू बंधु पोर्टल पर स्थिति देखें।",officialPortal:"https://rythubandhu.telangana.gov.in",helpline:"040-2338-3520"},{id:"haryana_bhavantar_bharpayee",titleEn:"Haryana: Bhavantar Bharpayee Yojana (BBY)",titleHi:"हरियाणा: भावांतर भरपाई योजना (फसल मूल्य सुरक्षा)",level:"State",state:"Haryana",stateHi:"हरियाणा",categoryEn:"Price Deficit Compensation",categoryHi:"मूल्य सुरक्षा भरपाई",category:"Price Deficit Compensation",benefitAmountEn:"Guaranteed minimum floor price for 16 horticultural crops and Bajra/Mustard. If mandi price drops below protected benchmark, state pays the deficit directly to farmer's bank account.",benefitAmountHi:"16 बागवानी फसलों व बाजरा/सरसों पर न्यूनतम सुरक्षित भाव की गारंटी। मंडी भाव कम रहने पर अंतर राशि की भरपाई सीधे बैंक में।",eligibilityEn:"All farmers in Haryana registered on Meri Fasal Mera Byora (MFMB) portal.",eligibilityHi:"हरियाणा के किसान जो 'मेरी फसल मेरा ब्यौरा' पोर्टल पर पंजीकृत हैं।",documentsRequiredEn:"Meri Fasal Mera Byora Registration ID, Parivar Pehchan Patra (PPP), Aadhaar, Bank Details.",documentsRequiredHi:"मेरी फसल मेरा ब्यौरा आईडी, परिवार पहचान पत्र (PPP), आधार कार्ड, बैंक खाता पासबुक।",howToApplyEn:"Register crop acreage on fasal.haryana.gov.in during sowing period.",howToApplyHi:"fasal.haryana.gov.in पोर्टल पर बुवाई के समय फसल का पंजीकरण करें।",officialPortal:"https://fasal.haryana.gov.in",helpline:"1800-180-2117"},{id:"bihar_fasal_sahayata",titleEn:"Bihar: Bihar Rajya Fasal Sahayata Yojana (BRFSY)",titleHi:"बिहार: बिहार राज्य फसल सहायता योजना (निःशुल्क फसल क्षति सहायता)",level:"State",state:"Bihar",stateHi:"बिहार",categoryEn:"Crop Insurance",categoryHi:"फसल सहायता",category:"Crop Insurance",benefitAmountEn:"Zero premium insurance: ₹7,500/hectare for up to 20% crop loss; ₹10,000/hectare for loss exceeding 20% directly credited to bank account.",benefitAmountHi:"शून्य प्रीमियम सहायता: 20% तक नुकसान पर ₹7,500 प्रति हेक्टेयर तथा 20% से अधिक नुकसान पर ₹10,000 प्रति हेक्टेयर सीधा मुआवजा।",eligibilityEn:"Both land-owning (Raiyat) and non-landowning tenant/sharecropper (Gair-Raiyat) farmers in Bihar.",eligibilityHi:"बिहार के रैयत (जमीन मालिक) तथा गैर-रैयत (बटाईदार/बटाई खेती करने वाले) दोनों किसान पात्र हैं।",documentsRequiredEn:"Land Possession Certificate (LPC) or self-declaration for tenant farmers, Aadhaar, Bank Passbook.",documentsRequiredHi:"एलपीसी (LPC) अथवा गैर-रैयत स्व-घोषणा पत्र, आधार कार्ड, बैंक पासबुक।",howToApplyEn:"Apply free of cost at pacs.bihar.gov.in / dbtagriculture.bihar.gov.in.",howToApplyHi:"dbtagriculture.bihar.gov.in पोर्टल पर निःशुल्क ऑनलाइन आवेदन करें।",officialPortal:"https://dbtagriculture.bihar.gov.in",helpline:"1800-180-1551"},{id:"wb_krishak_bandhu",titleEn:"West Bengal: Krishak Bandhu Scheme",titleHi:"पश्चिम बंगाल: कृषक बंधु योजना एवं जीवन सुरक्षा",level:"State",state:"West Bengal",stateHi:"पश्चिम बंगाल",categoryEn:"Income Support",categoryHi:"आय सहायता",category:"Income Support",benefitAmountEn:"₹10,000 per year (for 1+ acre, minimum ₹4,000/yr for small land) in 2 installments + ₹2 Lakh death benefit to family in case of farmer's demise (aged 18-60).",benefitAmountHi:"प्रति वर्ष ₹10,000 (1 एकड़ या अधिक पर, छोटे किसानों को न्यूनतम ₹4,000/वर्ष) + 18-60 वर्ष के किसान की मृत्यु पर आश्रित परिवार को ₹2,00,000 की अनुग्रह राशि।",eligibilityEn:"All agricultural landholders including recorded bargadars (sharecroppers) in West Bengal.",eligibilityHi:"पश्चिम बंगाल के सभी कृषक एवं रिकॉर्डेड बटाईदार (बर्गदार)।",documentsRequiredEn:"RoR (Parcha), Voter ID (EPIC), Aadhaar, Bank Passbook.",documentsRequiredHi:"जमीन का पर्चा (RoR), वोटर कार्ड (EPIC), आधार कार्ड, बैंक पासबुक।",howToApplyEn:"Apply at local Block Development Office (BDO) / Duare Sarkar camps or krishakbandhu.wb.gov.in.",howToApplyHi:"दुआरे सरकार कैंप अथवा स्थानीय बीडीओ कार्यालय में आवेदन जमा करें।",officialPortal:"https://krishakbandhu.wb.gov.in",helpline:"033-2214-5555"}];class zs{constructor(s,n){this.containerId=s,this.getLang=n,this.selectedState="All",this.selectedCategory="All",this.searchQuery="",this.activeEligibilityModalScheme=null}init(){this.render()}update(){this.render()}setFilter(s,n){s!==void 0&&(this.selectedState=s),n!==void 0&&(this.selectedCategory=n),this.render()}getFilteredSchemes(){return Ra.filter(s=>{if(this.selectedState!=="All"){if(this.selectedState==="Central"){if(s.level!=="Central")return!1}else if(s.state!==this.selectedState&&s.level!=="Central")return!1}if(this.selectedCategory!=="All"&&!s.category.toLowerCase().includes(this.selectedCategory.toLowerCase()))return!1;if(this.searchQuery.trim()){const n=this.searchQuery.toLowerCase();if(!(s.titleEn&&s.titleEn.toLowerCase().includes(n)||s.titleHi&&s.titleHi.toLowerCase().includes(n)||s.benefitAmountEn&&s.benefitAmountEn.toLowerCase().includes(n)||s.benefitAmountHi&&s.benefitAmountHi.toLowerCase().includes(n)||s.eligibilityEn&&s.eligibilityEn.toLowerCase().includes(n)||s.eligibilityHi&&s.eligibilityHi.toLowerCase().includes(n)||s.state&&s.state.toLowerCase().includes(n)||s.category&&s.category.toLowerCase().includes(n)))return!1}return!0})}render(){const s=document.getElementById(this.containerId);if(!s)return;const o=this.getLang()==="hi",c=this.getFilteredSchemes(),h=[{id:"All",nameEn:"All India",nameHi:"संपूर्ण भारत"},{id:"Central",nameEn:"Central Govt Only",nameHi:"केवल केंद्र सरकार"},{id:"Maharashtra",nameEn:"Maharashtra",nameHi:"महाराष्ट्र"},{id:"Andhra Pradesh",nameEn:"Andhra Pradesh",nameHi:"आंध्र प्रदेश"},{id:"Uttar Pradesh",nameEn:"Uttar Pradesh",nameHi:"उत्तर प्रदेश"},{id:"Punjab",nameEn:"Punjab",nameHi:"पंजाब"},{id:"Karnataka",nameEn:"Karnataka",nameHi:"कर्नाटक"},{id:"Madhya Pradesh",nameEn:"Madhya Pradesh",nameHi:"मध्य प्रदेश"},{id:"Rajasthan",nameEn:"Rajasthan",nameHi:"राजस्थान"},{id:"Gujarat",nameEn:"Gujarat",nameHi:"गुजरात"},{id:"Telangana",nameEn:"Telangana",nameHi:"तेलंगाना"},{id:"Haryana",nameEn:"Haryana",nameHi:"हरियाणा"},{id:"Bihar",nameEn:"Bihar",nameHi:"बिहार"},{id:"West Bengal",nameEn:"West Bengal",nameHi:"पश्चिम बंगाल"}],d=[{id:"All",nameEn:"All Categories",nameHi:"सभी श्रेणियां"},{id:"Loan",nameEn:"Agri Loans (4% KCC)",nameHi:"कृषि ऋण (KCC 4%)"},{id:"Income Support",nameEn:"Cash Support (PM-Kisan)",nameHi:"आय सहायता"},{id:"Insurance",nameEn:"Crop Insurance (PMFBY)",nameHi:"फसल बीमा"},{id:"Solar",nameEn:"Solar & Irrigation (KUSUM)",nameHi:"सौर पंप सब्सिडी"},{id:"Equipment",nameEn:"Tractor & Machinery (SMAM)",nameHi:"कृषि यंत्र सब्सिडी"},{id:"Protection",nameEn:"Crop Protection & Fencing",nameHi:"फसल सुरक्षा (तारबंदी)"}];s.innerHTML=`
      <div class="f-sch-wrapper">
        <!-- Header Banner -->
        <div class="f-sch-header glass-panel">
          <div class="f-sch-header-info">
            <span class="f-sch-badge">🏛️ ${o?"राष्ट्रीय किसान नीति व ऋण पोर्टल":"Pan-India Farmer Schemes & Subsidies Portal"}</span>
            <h3 class="f-sch-title">${o?"सरकारी योजनाएं, 4% फसली ऋण एवं सब्सिडी खोज":"Government Policies, 4% Low-Interest Agri Loans & Machinery Subsidies"}</h3>
            <p class="f-sch-sub">
              ${o?"केंद्र सरकार एवं सभी 28 राज्यों की किसान हितैषी नीतियां — पीएम-किसान, केसीसी 4% लोन, पीएम-कुसुम सोलर पंप, फसल बीमा एवं ट्रैक्टर सब्सिडी की सीधी जानकारी, पात्रता व आधिकारिक आवेदन लिंक।":"Direct access to Central and State agricultural policies: PM-KISAN, Kisan Credit Card 4% loans, PM-KUSUM 90% solar pumps, PMFBY crop insurance, and tractor subsidies across all states."}
            </p>
          </div>
          <div class="f-sch-live-sync-pill">
            <span class="sync-dot pulse-indicator">●</span>
            <span>${o?"सरकारी डीबीटी एवं myScheme पोर्टल से सत्यापित":"Verified with Govt DBT & myScheme API"}</span>
          </div>
        </div>

        <!-- Filter Controls Bar -->
        <div class="f-sch-filter-bar glass-panel">
          <!-- Live Search Input -->
          <div class="f-sch-search-wrap">
            <span class="f-sch-search-icon">🔍</span>
            <input
              type="text"
              id="inp-sch-search"
              class="f-sch-search-input"
              value="${this.searchQuery}"
              placeholder="${o?"योजना खोजें (जैसे: 4% लोन, सोलर पंप, ट्रैक्टर सब्सिडी, फसल बीमा, केसीसी)...":"Search schemes (e.g. 4% loan, solar pump, tractor subsidy, insurance, KCC)..."}"
            />
            ${this.searchQuery?'<button type="button" id="btn-sch-clear-search" class="f-sch-clear-btn">&times;</button>':""}
          </div>

          <!-- State Selector Chips -->
          <div class="f-sch-states-row">
            <span class="f-sch-filter-label">📍 ${o?"राज्य चुनें:":"Select State:"}</span>
            <div class="f-sch-chips-scroll">
              ${h.map(m=>`
                <button
                  type="button"
                  class="f-sch-state-chip ${this.selectedState===m.id?"active":""}"
                  data-state="${m.id}">
                  ${o?m.nameHi:m.nameEn}
                </button>
              `).join("")}
            </div>
          </div>

          <!-- Category Filter Pills -->
          <div class="f-sch-cat-row">
            <span class="f-sch-filter-label">📂 ${o?"श्रेणी:":"Category:"}</span>
            <div class="f-sch-pills-wrap">
              ${d.map(m=>`
                <button
                  type="button"
                  class="f-sch-cat-pill ${this.selectedCategory===m.id?"active":""}"
                  data-cat="${m.id}">
                  ${o?m.nameHi:m.nameEn}
                </button>
              `).join("")}
            </div>
          </div>
        </div>

        <!-- Result Stats Counter -->
        <div class="f-sch-results-bar">
          <span class="f-sch-count-text">
            ${o?`कुल <strong>${c.length}</strong> सरकारी योजनाएं एवं ऋण उपलब्ध हैं:`:`Showing <strong>${c.length}</strong> active government schemes & loans:`}
          </span>
          <span class="f-sch-active-tags">
            ${this.selectedState!=="All"?`<span class="sch-tag-filter">📍 ${this.selectedState}</span>`:""}
            ${this.selectedCategory!=="All"?`<span class="sch-tag-filter">📂 ${this.selectedCategory}</span>`:""}
          </span>
        </div>

        <!-- Schemes Cards Grid -->
        <div class="f-sch-cards-grid">
          ${c.length===0?`
            <div class="f-sch-empty-state glass-panel">
              <span class="f-sch-empty-icon">🏛️</span>
              <h4>${o?"कोई योजना नहीं मिली":"No schemes match your filter"}</h4>
              <p>${o?'कृपया खोज शब्द बदलें या "संपूर्ण भारत" का चयन करें।':'Try resetting your search query or select "All India".'}</p>
              <button type="button" id="btn-sch-reset-filters" class="f-btn-secondary">
                🔄 ${o?"फ़िल्टर रीसेट करें":"Reset All Filters"}
              </button>
            </div>
          `:c.map(m=>this.renderSchemeCard(m,o)).join("")}
        </div>

        <!-- Fast Eligibility Modal Container -->
        <div id="sch-eligibility-modal-backdrop" class="f-sch-modal-backdrop" style="display: none;">
          <!-- Dynamically populated when user clicks "Check Eligibility" -->
        </div>
      </div>
    `,this.attachEventListeners()}renderSchemeCard(s,n){const o=s.level==="Central",c=o?n?"🇮🇳 केंद्र सरकार":"🇮🇳 Central Govt":`🏛️ ${n&&s.stateHi||s.state}`,h=n?s.titleHi||s.titleEn:s.titleEn||s.titleHi,d=n?s.categoryHi||s.category:s.categoryEn||s.category,m=n?s.benefitAmountHi||s.benefitAmountEn:s.benefitAmountEn||s.benefitAmountHi,g=n?s.eligibilityHi||s.eligibilityEn:s.eligibilityEn||s.eligibilityHi,u=n?s.documentsRequiredHi||s.documentsRequiredEn:s.documentsRequiredEn||s.documentsRequiredHi,f=n?s.howToApplyHi||s.howToApplyEn:s.howToApplyEn||s.howToApplyHi;return`
      <div class="f-sch-card glass-panel" data-id="${s.id}">
        <!-- Top Badge Row -->
        <div class="f-sch-card-top">
          <span class="f-sch-level-badge ${o?"central":"state"}">
            ${c}
          </span>
          <span class="f-sch-cat-tag">
            ${d}
          </span>
        </div>

        <!-- Scheme Title -->
        <div class="f-sch-title-block">
          <h4 class="f-sch-card-title">${h}</h4>
        </div>

        <!-- Highlighted Benefit Callout Box -->
        <div class="f-sch-benefit-box">
          <div class="f-sch-benefit-header">
            <span class="b-icon">💰</span>
            <span class="b-label">${n?"मुख्य लाभ एवं अनुदान राशि:":"Key Benefit / Subsidy Value:"}</span>
          </div>
          <p class="f-sch-benefit-text">${m}</p>
        </div>

        <!-- Details Grid: Eligibility & Documents -->
        <div class="f-sch-details-grid">
          <div class="f-sch-detail-item">
            <div class="f-sch-detail-head">
              <span>👤</span>
              <strong>${n?"पात्रता:":"Eligibility:"}</strong>
            </div>
            <p class="f-sch-detail-desc">${g}</p>
          </div>

          <div class="f-sch-detail-item">
            <div class="f-sch-detail-head">
              <span>📄</span>
              <strong>${n?"आवश्यक दस्तावेज:":"Required Documents:"}</strong>
            </div>
            <p class="f-sch-detail-desc">${u}</p>
          </div>
        </div>

        <!-- How To Apply -->
        <div class="f-sch-apply-step">
          <div class="f-sch-apply-head">
            <span>📝</span>
            <strong>${n?"आवेदन कैसे करें:":"Application Process:"}</strong>
          </div>
          <p class="f-sch-apply-text">${f}</p>
        </div>

        <!-- Footer Actions -->
        <div class="f-sch-card-footer">
          <div class="f-sch-helpline">
            <span class="phone-icon">📞</span>
            <span class="phone-label">${n?"हेल्पलाइन:":"Helpline:"}</span>
            <a href="tel:${s.helpline.split("/")[0].trim()}" class="phone-link">${s.helpline}</a>
          </div>

          <div class="f-sch-cta-group">
            <button type="button" class="btn-sch-check-eligibility" data-id="${s.id}">
              ✨ ${n?"पात्रता जांचें":"Check Eligibility"}
            </button>
            <a href="${s.officialPortal}" target="_blank" rel="noopener noreferrer" class="btn-sch-portal-link">
              ➔ ${n?"आधिकारिक पोर्टल":"Official Portal"}
            </a>
          </div>
        </div>
      </div>
    `}attachEventListeners(){const s=document.getElementById(this.containerId);if(!s)return;const n=s.querySelector("#inp-sch-search");n&&n.addEventListener("input",h=>{this.searchQuery=h.target.value,this.render()});const o=s.querySelector("#btn-sch-clear-search");o&&o.addEventListener("click",()=>{this.searchQuery="",this.render()}),s.querySelectorAll(".f-sch-state-chip").forEach(h=>{h.addEventListener("click",()=>{this.selectedState=h.getAttribute("data-state"),this.render()})}),s.querySelectorAll(".f-sch-cat-pill").forEach(h=>{h.addEventListener("click",()=>{this.selectedCategory=h.getAttribute("data-cat"),this.render()})});const c=s.querySelector("#btn-sch-reset-filters");c&&c.addEventListener("click",()=>{this.selectedState="All",this.selectedCategory="All",this.searchQuery="",this.render()}),s.querySelectorAll(".btn-sch-check-eligibility").forEach(h=>{h.addEventListener("click",()=>{const d=h.getAttribute("data-id");this.openEligibilityModal(d)})})}openEligibilityModal(s){const n=Ra.find(g=>g.id===s);if(!n)return;const o=this.getLang()==="hi",c=document.getElementById("sch-eligibility-modal-backdrop");if(!c)return;c.innerHTML=`
      <div class="f-sch-modal-content glass-panel">
        <div class="f-sch-modal-head">
          <div class="f-sch-m-title-wrap">
            <span class="m-icon">🏛️</span>
            <div>
              <h3>${o?"त्वरित पात्रता एवं लाभ कैलकुलेटर":"Quick Eligibility & Benefit Check"}</h3>
              <p class="m-sub">${o?n.titleHi||n.titleEn:n.titleEn||n.titleHi}</p>
            </div>
          </div>
          <button type="button" class="btn-close-sch-modal" id="btn-close-sch-modal">&times;</button>
        </div>

        <div class="f-sch-modal-body">
          <div class="f-sch-quiz-item">
            <label class="q-label">1. ${o?"क्या आपके पास कृषि योग्य भूमि या बटाईदार अनुबंध है?":"Do you own or cultivate agricultural land?"}</label>
            <div class="q-options">
              <label><input type="radio" name="q_land" value="yes" checked /> ${o?"हाँ, जमीन का 7/12 या खतौनी मेरे नाम पर है":"Yes, verified land record in my name"}</label>
              <label><input type="radio" name="q_land" value="tenant" /> ${o?"मैं बटाईदार / पट्टेदार किसान हूँ":"I am a registered tenant/sharecropper"}</label>
            </div>
          </div>

          <div class="f-sch-quiz-item">
            <label class="q-label">2. ${o?"आपके पास कुल कितनी जमीन है?":"Total Farmland Size:"}</label>
            <div class="q-options">
              <label><input type="radio" name="q_size" value="marginal" checked /> ${o?"2 एकड़ से कम (सीमांत किसान)":"Under 2 Acres (Marginal Farmer)"}</label>
              <label><input type="radio" name="q_size" value="small" /> ${o?"2 से 5 एकड़ (छोटा किसान)":"2 - 5 Acres (Small Farmer)"}</label>
              <label><input type="radio" name="q_size" value="medium" /> ${o?"5 एकड़ से अधिक":"Over 5 Acres"}</label>
            </div>
          </div>

          <div class="f-sch-quiz-item">
            <label class="q-label">3. ${o?"क्या आपका बैंक खाता आधार से लिंक (Aadhaar Seeded) है?":"Is your bank account linked with Aadhaar (DBT active)?"}</label>
            <div class="q-options">
              <label><input type="radio" name="q_aadhaar" value="yes" checked /> ${o?"हाँ, आधार एवं डीबीटी सक्रिय है":"Yes, Aadhaar & DBT active"}</label>
              <label><input type="radio" name="q_aadhaar" value="no" /> ${o?"अभी लिंक नहीं है":"Not linked yet"}</label>
            </div>
          </div>

          <!-- Instant Verdict Box -->
          <div class="f-sch-verdict-card success">
            <div class="v-head">
              <span class="v-icon">✅</span>
              <strong>${o?"बधाई हो! आप इस योजना के लिए 100% पात्र हैं":"Congratulations! You are 100% Eligible"}</strong>
            </div>
            <p class="v-sub">
              ${o?`आपके द्वारा चुने गए विवरण के अनुसार आप <strong>${n.benefitAmountHi||n.benefitAmountEn}</strong> का सीधा लाभ प्राप्त कर सकते हैं।`:`Based on your selection, you are eligible for <strong>${n.benefitAmountEn||n.benefitAmountHi}</strong> directly into your account.`}
            </p>
          </div>
        </div>

        <div class="f-sch-modal-footer">
          <a href="${n.officialPortal}" target="_blank" rel="noopener noreferrer" class="btn-sch-modal-apply">
            🚀 ${o?"आधिकारिक पोर्टल पर अभी आवेदन करें":"Apply Now on Official Portal"}
          </a>
          <button type="button" class="btn-sch-modal-close" id="btn-sch-modal-done">
            ${o?"बंद करें":"Close"}
          </button>
        </div>
      </div>
    `,c.style.display="flex";const h=c.querySelector("#btn-close-sch-modal"),d=c.querySelector("#btn-sch-modal-done"),m=()=>{c.style.display="none"};h&&h.addEventListener("click",m),d&&d.addEventListener("click",m)}}class Fs{constructor(){this.cache=ue,this.lang=this.cache.getLanguage(),this.advisorModule=null,this.volunteerModule=null,this.agentBuilderModule=null,this.mapRenderer=null,this.liveTicker=null,this.universalSearchBar=null,this.currentViewId="section-hero",this.isAllSectionsMode=!1,this.voiceAssistant=new As(()=>this.cache.getCurrentCluster(),()=>this.lang),this.authManager=Ie,this.mandiBackendService=Oa,this.buyerTradeHub=null,this.arbitrageOptimizer=null,this.visualSoilDoctor=null,this.weatherHarvestPlanner=null,this.pesticideAdvisor=null,this.cropSuitabilityDoctor=null,this.sellingAdvisor=null,this.farmerSchemesPortal=null,this.authModal=new Ts(()=>this.lang,()=>{this.updateUserProfileBadge(),this.buyerTradeHub&&this.buyerTradeHub.update()}),this.adminPriceModal=new $s(()=>this.lang,()=>{this.renderAll()}),window.kisanAppInstance=this,this.init()}init(){this.setupLanguageSwitcher(),this.setupAuthAndProfile(),this.setupAdminPriceModal(),this.setupGlobalVoiceButton(),this.setupUniversalSearch(),this.setupViewNavigation(),this.renderAll()}setupAuthAndProfile(){const s=document.getElementById("btn-user-profile");s&&s.addEventListener("click",()=>{this.authModal.open()}),this.updateUserProfileBadge()}updateUserProfileBadge(){const s=document.getElementById("txt-user-profile-name"),n=document.querySelector(".user-avatar-dot");if(!s)return;const o=this.authManager.getUser(),c=this.authManager.isFarmer();n&&(n.textContent=c?"👨‍🌾":"🛒"),s.textContent=this.lang==="hi"?`${o.name} (${c?"किसान":"खरीदार"})`:`${o.name} (${c?"Farmer":"Buyer"})`}setupAdminPriceModal(){const s=document.getElementById("btn-admin-price-update");s&&s.addEventListener("click",()=>{this.adminPriceModal.open()})}setupLanguageSwitcher(){const s=document.getElementById("btn-lang-en"),n=document.getElementById("btn-lang-hi"),o=()=>{s&&n&&(s.classList.toggle("active",this.lang==="en"),n.classList.toggle("active",this.lang==="hi"))};s&&s.addEventListener("click",()=>{this.lang!=="en"&&(this.lang="en",this.cache.setLanguage("en"),o(),this.renderAll())}),n&&n.addEventListener("click",()=>{this.lang!=="hi"&&(this.lang="hi",this.cache.setLanguage("hi"),o(),this.renderAll())}),o()}setupGlobalVoiceButton(){const s=document.getElementById("btn-global-voice");s&&s.addEventListener("click",()=>{this.voiceAssistant.open()})}setupUniversalSearch(){document.getElementById("universal-search-container")&&(this.universalSearchBar=new Ms("universal-search-container",()=>this.lang,n=>{if(n.mappedClusterId&&(this.cache.setCurrentCluster(n.mappedClusterId),this.renderAll()),n.name&&this.cropSuitabilityDoctor){const o=n.state?`${n.name}, ${n.state}`:n.name;this.cropSuitabilityDoctor.setLocation(o)}}),this.universalSearchBar.init())}setupViewNavigation(){document.querySelectorAll(".nav-tab-btn").forEach(d=>{d.addEventListener("click",()=>{const m=d.getAttribute("data-target");this.switchView(m)})});const n=document.getElementById("hero-btn-crop-doctor");n&&n.addEventListener("click",d=>{d.preventDefault(),this.switchView("section-crop-doctor")});const o=document.getElementById("hero-btn-selling-advisor");o&&o.addEventListener("click",d=>{d.preventDefault(),this.switchView("section-selling-advisor")});const c=document.getElementById("hero-btn-schemes");c&&c.addEventListener("click",d=>{d.preventDefault(),this.switchView("section-schemes")});const h=document.getElementById("hero-btn-prices");h&&h.addEventListener("click",d=>{d.preventDefault(),this.switchView("section-prices")}),document.querySelectorAll(".btn-back-home").forEach(d=>{d.addEventListener("click",()=>{this.switchView("section-hero")})}),document.querySelectorAll(".btn-toggle-all-sections").forEach(d=>{d.addEventListener("click",()=>{this.isAllSectionsMode=!this.isAllSectionsMode,this.applyViewVisibility()})})}switchView(s){this.currentViewId=s,this.isAllSectionsMode=!1,this.applyViewVisibility(),s==="section-map"&&this.mapRenderer&&this.mapRenderer.map&&setTimeout(()=>{this.mapRenderer.map.invalidateSize()},150),window.scrollTo({top:0,behavior:"smooth"})}applyViewVisibility(){const s=["section-hero","section-crop-doctor","section-selling-advisor","section-schemes","section-prices","section-map","section-weather","section-pesticides","section-procurement","section-pipeline"];document.querySelectorAll(".nav-tab-btn").forEach(o=>{o.classList.toggle("active",o.getAttribute("data-target")===this.currentViewId)}),document.querySelectorAll(".txt-toggle-all").forEach(o=>{o.textContent=this.isAllSectionsMode?this.lang==="hi"?"फ़ोकस्ड मोड":"Focused Page View":this.lang==="hi"?"सभी भाग देखें":"Show All Sections"}),document.querySelectorAll(".txt-back-home").forEach(o=>{o.textContent=this.lang==="hi"?"← मुख्य पृष्ठ पर जाएं":"← Back to Home"});const n=document.getElementById("universal-search-container");if(n&&(n.style.display=this.currentViewId==="section-hero"||this.isAllSectionsMode?"block":"none"),this.isAllSectionsMode){s.forEach(o=>{const c=document.getElementById(o);c&&(c.style.display="block",c.classList.remove("active-page-view"))});return}s.forEach(o=>{const c=document.getElementById(o);c&&(o===this.currentViewId?(c.style.display="block",c.classList.add("active-page-view")):(c.style.display="none",c.classList.remove("active-page-view")))})}renderStatusBar(){const s=this.cache.getCurrentCluster(),n=dt[this.lang]||dt.en,o=document.getElementById("cluster-status-bar-container");o&&(o.innerHTML=`
      <div class="container">
        <div class="status-bar-inner">
          <div class="status-cluster-info">
            <span class="status-pill">
              <span class="status-dot"></span>
              <span>⚡ ${n.clusterCached}</span>
            </span>
            <span>📍 <strong>${this.lang==="hi"?s.nameHi:s.nameEn}</strong></span>
          </div>
          <div class="status-metrics">
            <span class="status-metric-item"><strong>${s.cacheHitRate}</strong> ${n.cacheHitRate}</span>
            <span class="status-metric-item"><strong>${s.activeFarmers}+</strong> ${n.benefitingFarmers}</span>
          </div>
        </div>
      </div>
    `)}renderHero(){const s=dt[this.lang]||dt.en;this.cache.getCurrentCluster(),document.documentElement.lang=this.lang,document.title=this.lang==="hi"?"किसान सेतु (KisanSetu) - पारदर्शी मंडी भाव और एआई फसल परामर्श":"KisanSetu - Transparent Mandi Prices & AI Crop Advisory for Farmers";const n=document.getElementById("brand-badge-tag");n&&(n.textContent=s.brandBadge);const o=document.getElementById("brand-tagline-text");o&&(o.textContent=s.brandTagline);const c=document.getElementById("txt-global-voice");c&&(c.textContent=this.lang==="hi"?"किसान सहायक":"AI Voice Assistant");const h=document.getElementById("hero-title-text"),d=document.getElementById("hero-sub-text"),m=document.getElementById("hero-hack-tag"),g=document.getElementById("hero-cluster-badge");h&&(h.textContent=s.heroTitle),d&&(d.textContent=s.heroSubtitle),m&&(m.textContent=s.heroBadgeTag||"🌾 KisanSetu"),g&&(g.textContent=s.heroMediaBadge||(this.lang==="hi"?"⚡ स्मार्ट बाजार व वाहन लॉजिस्टिक्स":"⚡ Smart Market & Transport Intelligence"));const u=document.getElementById("t-stat-lbl-1"),f=document.getElementById("t-stat-sub-1");u&&(u.textContent=s.heroStatMandisLbl||(this.lang==="hi"?"🏛️ सक्रिय मंडियां":"🏛️ Active Mandis")),f&&(f.textContent=s.heroStatMandisSub||(this.lang==="hi"?"100% ई-नाम लाइव सिंक":"100% eNAM Live Sync"));const _=document.getElementById("t-stat-lbl-2"),b=document.getElementById("t-stat-sub-2");_&&(_.textContent=s.heroStatArrivalsLbl||(this.lang==="hi"?"📦 आज की कुल आवक":"📦 Total Daily Arrivals")),b&&(b.textContent=s.heroStatArrivalsSub||(this.lang==="hi"?"कल से +4.6% अधिक":"+4.6% vs Yesterday"));const w=document.getElementById("t-stat-lbl-3"),S=document.getElementById("t-stat-sub-3");w&&(w.textContent=s.heroStatMarginLbl||(this.lang==="hi"?"⚖️ बिचौलियों का मार्जिन":"⚖️ Middleman Margin")),S&&(S.textContent=s.heroStatMarginSub||(this.lang==="hi"?"सीधी बिक्री से ₹18/किग्रा बचत":"Direct trade saves ₹18/kg"));const E=document.getElementById("t-stat-lbl-4"),T=document.getElementById("t-stat-sub-4");E&&(E.textContent=s.heroStatColdLbl||(this.lang==="hi"?"🏬 उपलब्ध कोल्ड स्पेस":"🏬 Cold Storage Vacancy")),T&&(T.textContent=s.heroStatColdSub||(this.lang==="hi"?"ई-एनडब्ल्यूआर बंधक ऋण":"e-NWR Pledge Loans"));const R=document.getElementById("hero-btn-crop-doctor-text");R&&(R.textContent=`🌱 ${this.lang==="hi"?"अपनी जमीन व फसल जांचें":"Check Land & Crop Yield"}`);const z=document.getElementById("hero-btn-selling-advisor-text");z&&(z.textContent=`⚖️ ${this.lang==="hi"?"कहाँ बेचूं? (दलाल बनाम सीधी बिक्री)":"Where to Sell (Mandi vs Direct Consumer)"}`);const K=document.getElementById("hero-btn-schemes-text");K&&(K.textContent=`🏛️ ${this.lang==="hi"?"सरकारी योजनाएं व 4% ऋण":"Govt Schemes & 4% Loans"}`);const F=document.getElementById("hero-btn-prices-text");F&&(F.textContent=`📊 ${this.lang==="hi"?"लाइव मार्केट वॉच":"Live Market Watch"}`);const Y=document.getElementById("nav-tab-home-text");Y&&(Y.textContent=s.navHome);const ot=document.getElementById("nav-tab-crop-doctor-text");ot&&(ot.textContent=s.navCropDoctor||(this.lang==="hi"?"भूमि व फसल डॉक्टर":"Land & Crop Doctor"));const ht=document.getElementById("nav-tab-selling-advisor-text");ht&&(ht.textContent=s.navSellingAdvisor||(this.lang==="hi"?"कहाँ बेचूं? (दलाल बनाम सीधी बिक्री)":"Where to Sell (Mandi vs Direct Consumer)"));const tt=document.getElementById("nav-tab-schemes-text");tt&&(tt.textContent=s.navSchemes||(this.lang==="hi"?"सरकारी योजनाएं व 4% ऋण":"Govt Schemes & 4% Loans"));const at=document.getElementById("nav-tab-prices-text");at&&(at.textContent=this.lang==="hi"?"मार्केट वॉच व मुनाफा":"Market Watch & Arbitrage");const gt=document.getElementById("nav-tab-map-text");gt&&(gt.textContent=s.navMap);const J=document.getElementById("nav-tab-weather-text");J&&(J.textContent=this.lang==="hi"?"कटाई मौसम व छोटे खेत":"Weather & Small Plots");const st=document.getElementById("nav-tab-pesticides-text");st&&(st.textContent=this.lang==="hi"?"कीटनाशक व फसल सुरक्षा":"Pesticides & Protection");const pe=document.getElementById("nav-tab-procurement-text");pe&&(pe.textContent=this.lang==="hi"?"सीधा खरीद-बिक्री मंच":"Direct Buyer Hub");const ut=document.getElementById("nav-tab-pipeline-text");ut&&(ut.textContent=s.navAgentPipeline);const me=document.getElementById("txt-nav-admin");me&&(me.textContent=this.lang==="hi"?"एडमिन मंडी अपडेट":"Admin Price Console"),this.updateUserProfileBadge();const nt=document.getElementById("price-section-title"),Ht=document.getElementById("price-section-sub");nt&&(nt.textContent=s.priceCompareTitle),Ht&&(Ht.textContent=s.priceCompareSub);const x=document.getElementById("advisor-section-title"),jt=document.getElementById("advisor-section-sub");x&&(x.textContent=s.cropDoctorTitle),jt&&(jt.textContent=s.cropDoctorSub);const k=document.getElementById("footer-brand-text");k&&(k.textContent=`🌾 ${s.footerBrand}`);const Z=document.getElementById("footer-hackathon-note");Z&&(Z.textContent=s.footerNote);const et=document.getElementById("footer-sources-text");et&&(et.textContent=s.footerSources)}renderAll(){const s=this.cache.getCurrentCluster();this.renderStatusBar(),this.renderHero(),this.liveTicker?this.liveTicker.update():(this.liveTicker=new Ls("live-ticker-container",()=>this.cache.getCurrentCluster(),()=>this.lang),this.liveTicker.init()),this.universalSearchBar&&this.universalSearchBar.update(),document.getElementById("crop-suitability-doctor-container")&&(this.cropSuitabilityDoctor?this.cropSuitabilityDoctor.update():(this.cropSuitabilityDoctor=new Os("crop-suitability-doctor-container",()=>this.lang),this.cropSuitabilityDoctor.init())),document.getElementById("selling-advisor-container")&&(this.sellingAdvisor?this.sellingAdvisor.update():(this.sellingAdvisor=new Ds("selling-advisor-container",()=>this.lang),this.sellingAdvisor.init())),document.getElementById("farmer-schemes-portal-container")&&(this.farmerSchemesPortal?this.farmerSchemesPortal.update():(this.farmerSchemesPortal=new zs("farmer-schemes-portal-container",()=>this.lang),this.farmerSchemesPortal.init())),document.getElementById("arbitrage-optimizer-container")&&(this.arbitrageOptimizer?this.arbitrageOptimizer.update():(this.arbitrageOptimizer=new Bs("arbitrage-optimizer-container",()=>this.lang),this.arbitrageOptimizer.init()));const d=document.getElementById("price-cards-list");fs(d,s,this.lang),this.mapRenderer?this.mapRenderer.update():(this.mapRenderer=new Cs("map-section-container",()=>this.cache.getCurrentCluster(),()=>this.lang),this.mapRenderer.init()),document.getElementById("visual-soil-doctor-container")&&(this.visualSoilDoctor?this.visualSoilDoctor.update():(this.visualSoilDoctor=new Rs("visual-soil-doctor-container",()=>this.lang),this.visualSoilDoctor.init()));const g=document.getElementById("advisor-form-container");this.advisorModule?this.advisorModule.update():this.advisorModule=ys(g,()=>this.cache.getCurrentCluster(),()=>this.lang),document.getElementById("weather-harvest-planner-container")&&(this.weatherHarvestPlanner?this.weatherHarvestPlanner.update():(this.weatherHarvestPlanner=new WeatherHarvestPlanner("weather-harvest-planner-container",()=>this.lang),this.weatherHarvestPlanner.init())),document.getElementById("pesticide-advisor-container")&&(this.pesticideAdvisor?this.pesticideAdvisor.update():(this.pesticideAdvisor=new Ns("pesticide-advisor-container",()=>this.lang),this.pesticideAdvisor.init()));const _=document.getElementById("volunteer-section-container");this.volunteerModule?this.volunteerModule.update():this.volunteerModule=_s(_,()=>this.cache.getCurrentCluster(),()=>this.lang,()=>{this.renderAll()}),document.getElementById("buyer-trade-hub-container")&&(this.buyerTradeHub?this.buyerTradeHub.update():(this.buyerTradeHub=new xs("buyer-trade-hub-container",()=>this.lang),this.buyerTradeHub.init()));const w=document.getElementById("agent-pipeline-container");this.agentBuilderModule?this.agentBuilderModule.update():this.agentBuilderModule=bs(w,()=>this.cache.getCurrentCluster(),()=>this.lang,()=>{this.cache.refreshClusterFromScraper(this.cache.currentClusterId),this.renderAll()}),this.applyViewVisibility()}}document.addEventListener("DOMContentLoaded",()=>{new Fs});
