// Conversational AI Voice Assistant ("Kisan Sahayak")
// Asks the farmer what information they require first, accepts voice/tap input, and answers specifically with audio synthesis

import { speechHelper } from './speechHelper.js';
import { translations } from '../data/translations.js';

export class VoiceAssistantModal {
  constructor(getActiveCluster, getLang) {
    this.getActiveCluster = getActiveCluster;
    this.getLang = getLang;
    this.isOpen = false;
    this.isListening = false;
    this.recognition = null;
    this.modalEl = null;

    this.initSpeechRecognition();
  }

  initSpeechRecognition() {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRec) {
      this.recognition = new SpeechRec();
      this.recognition.continuous = false;
      this.recognition.interimResults = false;

      this.recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        this.handleUserQuery(transcript);
      };

      this.recognition.onerror = () => {
        this.setListeningState(false);
      };

      this.recognition.onend = () => {
        this.setListeningState(false);
      };
    }
  }

  open() {
    this.isOpen = true;
    const lang = this.getLang();
    const cluster = this.getActiveCluster();

    this.render();

    // The assistant asks the farmer first what they require
    const greeting = lang === 'hi'
      ? `नमस्ते किसान भाई! आज आपको किस जानकारी की आवश्यकता है? नीचे दिए गए विकल्प पर टैप करें या माइक दबाकर बोलें।`
      : `Greetings! What information do you require today? Please tap a topic below or speak into the microphone.`;

    speechHelper.speak(greeting, lang);
  }

  close() {
    this.isOpen = false;
    speechHelper.stop();
    if (this.recognition && this.isListening) {
      this.recognition.stop();
    }
    if (this.modalEl) {
      this.modalEl.style.display = 'none';
    }
  }

  setListeningState(listening) {
    this.isListening = listening;
    const micBtn = document.getElementById('va-mic-btn');
    const micStatus = document.getElementById('va-mic-status');
    if (micBtn && micStatus) {
      if (listening) {
        micBtn.classList.add('recording');
        micStatus.textContent = this.getLang() === 'hi' ? 'सुन रहे हैं... बोलिए' : 'Listening... Speak now';
      } else {
        micBtn.classList.remove('recording');
        micStatus.textContent = this.getLang() === 'hi' ? 'माइक दबाकर बोलें' : 'Tap mic to speak';
      }
    }
  }

  toggleMic() {
    if (!this.recognition) {
      alert("Microphone recognition is not supported in this browser. Please tap any option chip below!");
      return;
    }

    if (this.isListening) {
      this.recognition.stop();
    } else {
      speechHelper.stop();
      this.recognition.lang = this.getLang() === 'hi' ? 'hi-IN' : 'en-IN';
      this.recognition.start();
      this.setListeningState(true);
    }
  }

  handleUserQuery(queryKey) {
    const lang = this.getLang();
    const cluster = this.getActiveCluster();

    let answerEn = "";
    let answerHi = "";
    let actionTarget = "";
    let actionLabelEn = "";
    let actionLabelHi = "";

    const q = queryKey.toLowerCase();

    if (q.includes('selling') || q.includes('कहाँ बेचूं') || q.includes('where to sell') || q.includes('dalal') || q.includes('दलाल') || q.includes('tomato') || q.includes('टमाटर') || q.includes('mediator') || q.includes('consumer') || q.includes('बेचने')) {
      answerEn = `For tomato and fresh produce, selling via local mandi mediators costs 6% to 8% in broker commissions. If you ship via Bolero or Tata Ace to high-rate mandis in Maharashtra (Vashi/Pune) or Andhra Pradesh, you earn ₹8 to ₹14 extra per kilo even after freight and tolls! Or sell directly to enrolled retail buyers at 0% broker fee.`;
      answerHi = `टमाटर व फसलों के लिए स्थानीय मंडी में दलाल 6% से 8% कमीशन काटते हैं। यदि आप बोलेरो अथवा छोटा हाथी से महाराष्ट्र (वाशी/पुणे) या आंध्र प्रदेश की बड़ी मंडियों में भेजते हैं, तो पूरा भाड़ा और टोल काटकर भी आपको प्रति किलो ₹8 से ₹14 अधिक शुद्ध लाभ मिलता है! अथवा किसान सेतु पर सीधे उपभोक्ताओं को 0% दलाली पर बेचें।`;
      actionTarget = "section-selling-advisor";
      actionLabelEn = "Open Selling Decision Engine (Mandi Broker vs Direct Consumer)";
      actionLabelHi = "दलाल बनाम सीधी बिक्री मुनाफा इंजन खोलें";
    } else if (q.includes('land') || q.includes('जमीन') || q.includes('crop') || q.includes('photo') || q.includes('फोटो') || q.includes('suitability') || q.includes('पैदावार') || q.includes('yield') || q.includes('उगाएं') || q.includes('what to grow')) {
      answerEn = `To know what crops will yield best on your land, use our Land & Crop Suitability Doctor. Enter your location, upload your soil photo, and our AI cross-references soil texture with the 30-day weather forecast to predict exact yield in quintals per acre and total harvest value.`;
      answerHi = `अपनी जमीन पर सबसे उपयुक्त फसल और पैदावार जानने के लिए भूमि व फसल डॉक्टर का उपयोग करें। अपना जिला दर्ज करें, मिट्टी की फोटो अपलोड करें — हमारा एआई 30 दिनों के मौसम पूर्वानुमान के अनुसार प्रति एकड़ संभावित क्विंटल और कुल फसल मूल्य का सटीक अनुमान देगा।`;
      actionTarget = "section-crop-doctor";
      actionLabelEn = "Open Land & Crop Suitability Doctor";
      actionLabelHi = "भूमि फोटो व फसल पैदावार डॉक्टर खोलें";
    } else if (q.includes('scheme') || q.includes('योजना') || q.includes('loan') || q.includes('लोन') || q.includes('ऋण') || q.includes('kcc') || q.includes('subsidy') || q.includes('सब्सिडी') || q.includes('solar') || q.includes('सोलर') || q.includes('tractor') || q.includes('ट्रैक्टर') || q.includes('pm kisan') || q.includes('bima') || q.includes('बीमा')) {
      answerEn = `Under Kisan Credit Card (KCC), farmers get low-interest crop credit up to ₹3 Lakh at an effective 4% rate. PM-KISAN grants ₹6,000/yr (₹12,000 in Maharashtra and MP), PM-KUSUM provides 90% solar pump subsidy, and SMAM offers 50% tractor discounts. Check our Schemes Portal for full eligibility and direct application links!`;
      answerHi = `किसान क्रेडिट कार्ड (KCC) पर ₹3 लाख तक का लोन मात्र 4% प्रभावी ब्याज दर पर उपलब्ध है। पीएम-किसान पर ₹6,000/वर्ष (महाराष्ट्र व एमपी में कुल ₹12,000), पीएम-कुसुम पर सोलर पंप पर 90% सब्सिडी और ट्रैक्टरों पर 50% छूट मिलती है। सभी राज्यों की योजनाओं व सीधे आवेदन लिंक के लिए सरकारी योजना पोर्टल खोलें।`;
      actionTarget = "section-schemes";
      actionLabelEn = "Open Pan-India Govt Schemes & Loans Portal";
      actionLabelHi = "सरकारी योजनाएं व 4% किसान ऋण पोर्टल खोलें";
    } else if (q.includes('onion') || q.includes('कांदा') || q.includes('प्याज') || q.includes('pyaaz')) {
      const crop = cluster.crops.find(c => c.id === 'onion') || cluster.crops[0];
      answerEn = `In ${cluster.nameEn}, the Red Onion mandi price is ₹${crop.mandiPriceKg}/kg while city consumers pay ₹${crop.retailPriceKg}/kg. The AI recommendation is: ${crop.recommendation === 'HOLD' ? 'Hold for 3 days for better rates.' : 'Sell now.'}`;
      answerHi = `${cluster.nameHi} में लाल प्याज का मंडी भाव ₹${crop.mandiPriceKg} प्रति किलो है, जबकि शहरों में ₹${crop.retailPriceKg} बिक रहा है। सलाह है: ${crop.recommendation === 'HOLD' ? '3 दिन रोककर बेचें, भाव सुधरेंगे।' : 'तुरंत बेचें।'}`;
      actionTarget = "section-prices";
      actionLabelEn = "View Onion Price Details";
      actionLabelHi = "प्याज भाव का विवरण देखें";
    } else if (q.includes('tomato') || q.includes('टमाटर') || q.includes('tamatar')) {
      const crop = cluster.crops.find(c => c.id === 'tomato') || cluster.crops[1];
      answerEn = `In ${cluster.nameEn}, tomato mandi price is ₹${crop.mandiPriceKg}/kg. City retail price is ₹${crop.retailPriceKg}/kg. Intermediary spread is ${crop.spreadPct}%.`;
      answerHi = `${cluster.nameHi} में टमाटर का मंडी भाव ₹${crop.mandiPriceKg} प्रति किलो और खुदरा भाव ₹${crop.retailPriceKg} प्रति किलो है। बिचौलियों का मार्जिन ${crop.spreadPct}% है।`;
      actionTarget = "section-prices";
      actionLabelEn = "View Tomato Price Cards";
      actionLabelHi = "टमाटर भाव कार्ड देखें";
    } else if (q.includes('wheat') || q.includes('गेहूं') || q.includes('gehun') || q.includes('kanak')) {
      const crop = cluster.crops.find(c => c.id === 'wheat') || cluster.crops[0];
      answerEn = `Wheat modal rate is ₹${crop.mandiPriceQuintal} per quintal. Demand from private flour millers is active. Make sure grain moisture is under 12%.`;
      answerHi = `गेहूं का मॉडल भाव ₹${crop.mandiPriceQuintal} प्रति क्विंटल है। निजी मिलों से अच्छी मांग है। मंडी लाते समय नमी 12% से कम रखें।`;
      actionTarget = "section-prices";
      actionLabelEn = "View Wheat Price Trend";
      actionLabelHi = "गेहूं का रुझान देखें";
    } else if (q.includes('warehouse') || q.includes('storage') || q.includes('गोदाम') || q.includes('कोल्ड') || q.includes('cold')) {
      answerEn = `Accredited cold storage is available near ${cluster.nameEn}. Over 2,900 MT of vacant cold space is ready with e-NWR pledge loan financing.`;
      answerHi = `${cluster.nameHi} के समीप मान्यता प्राप्त कोल्ड स्टोरेज उपलब्ध हैं। 2,900 मीट्रिक टन से अधिक जगह खाली है और ई-एनडब्ल्यूआर ऋण सुविधा उपलब्ध है।`;
      actionTarget = "section-map";
      actionLabelEn = "View Available Warehouses on Map";
      actionLabelHi = "मानचित्र पर खाली गोदाम देखें";
    } else if (q.includes('soil') || q.includes('मिट्टी') || q.includes('खाद') || q.includes('fertilizer') || q.includes('yield')) {
      answerEn = `For testing your soil and calculating exact Urea, DAP, and MOP dosages with yield projections, please use our Crop & Soil Doctor tool below.`;
      answerHi = `मिट्टी की जांच और यूरिया, डीएपी व पोटाश की सटीक मात्रा व उपज का अनुमान जानने के लिए फसल व मिट्टी डॉक्टर का उपयोग करें।`;
      actionTarget = "section-advisor";
      actionLabelEn = "Open Soil & Crop Doctor";
      actionLabelHi = "मिट्टी व खाद डॉक्टर खोलें";
    } else if (q.includes('demand') || q.includes('मांग') || q.includes('bazaar') || q.includes('market')) {
      answerEn = `Highest consumer demand right now is coming from Mumbai Vashi APMC and Pune Market Yard, paying up to ₹44 to ₹46 per kg for fresh produce.`;
      answerHi = `इस समय सबसे अधिक मांग मुंबई वाशी और पुणे मार्केट यार्ड से आ रही है, जहाँ ₹44 से ₹46 प्रति किलो तक के भाव मिल रहे हैं।`;
      actionTarget = "section-map";
      actionLabelEn = "View Demand Heatmap";
      actionLabelHi = "मांग मानचित्र देखें";
    } else if (q.includes('arbitrage') || q.includes('profit') || q.includes('मुनाफा') || q.includes('कहाँ बेचूं') || q.includes('best price') || q.includes('भाव अंतर')) {
      answerEn = `Our Smart Mandi Arbitrage Engine compares your local mandi with Vashi, Pune, and Azadpur Delhi. After subtracting truck freight and tolls, selling directly to enrolled buyers earns you up to ₹7.50 extra per kilo!`;
      answerHi = `हमारा स्मार्ट मंडी मुनाफा कैलकुलेटर स्थानीय मंडी, वाशी, पुणे और आजादपुर के भावों की तुलना करता है। ट्रक भाड़ा और टोल काटकर भी सीधे खरीदार को बेचने पर प्रति किलो ₹7.50 तक का अतिरिक्त शुद्ध लाभ मिलता है!`;
      actionTarget = "section-prices";
      actionLabelEn = "Open Mandi Arbitrage Optimizer";
      actionLabelHi = "मंडी मुनाफा कैलकुलेटर खोलें";
    } else if (q.includes('pesticide') || q.includes('कीटनाशक') || q.includes('दवा') || q.includes('स्प्रे') || q.includes('रोग') || q.includes('thrips') || q.includes('borer') || q.includes('curl')) {
      answerEn = `For leaf curl and sucking pests like thrips, use Fipronil 5% SC @ 2 ml/liter or biological Neem Oil 10,000 ppm. For fruit borers, Coragen @ 5 ml per 15-liter pump provides 3-week protection.`;
      answerHi = `पत्ती मरोड़ और थ्रिप्स जैसे चूसक कीड़ों के लिए फिप्रोनिल 5% SC (2 मिली/लीटर) या नीम तेल 10,000 ppm का उपयोग करें। फल छेदक इल्ली के लिए कोराजन (5 मिली प्रति 15 लीटर पंप) सबसे असरदार है।`;
      actionTarget = "section-pesticides";
      actionLabelEn = "View Complete Pesticides Guide";
      actionLabelHi = "कीटनाशक व रोग गाइड देखें";
    } else if (q.includes('rain') || q.includes('बारिश') || q.includes('weather') || q.includes('मौसम') || q.includes('कटाई') || q.includes('harvest')) {
      answerEn = `Heavy rainfall alert of 42 mm is forecasted on Day 3 (Wednesday). Complete harvesting of ready onion, wheat, and tomato within 48 hours or store safely under waterproof tarpaulins.`;
      answerHi = `मौसम चेतावनी: बुधवार (तीसरे दिन) को 42 मिमी भारी बारिश का अलर्ट है। पकी हुई प्याज, गेहूं व टमाटर की कटाई अगले 48 घंटों में पूरी कर लें या कटी फसल को पक्के तिरपाल से ढकें।`;
      actionTarget = "section-weather";
      actionLabelEn = "Check 7-Day Harvest Weather";
      actionLabelHi = "7-दिवसीय कटाई मौसम देखें";
    } else if (q.includes('lab') || q.includes('लैब') || q.includes('sample') || q.includes('सैंपल') || q.includes('परीक्षण') || q.includes('appointment')) {
      answerEn = `You can book a doorstep soil sample collection appointment from ICAR or State Agriculture Dept Lab directly on KisanSetu with full 12-parameter digital soil health card within 72 hours.`;
      answerHi = `आप किसान सेतु से सीधे भाकृअनुप अथवा सरकारी मान्यता प्राप्त लैब से अपने खेत पर मिट्टी सैंपल संग्रह बुक कर सकते हैं। 72 घंटे में 12-पैरामीटर प्रमाणित रिपोर्ट आपके फोन पर मिलेगी।`;
      actionTarget = "section-advisor";
      actionLabelEn = "Book Doorstep Lab Appointment";
      actionLabelHi = "खेत पर लैब जांच बुक करें";
    } else if (q.includes('transport') || q.includes('वाहन') || q.includes('गाड़ी') || q.includes('lorry') || q.includes('लॉरी') || q.includes('tempo') || q.includes('टेंपो') || q.includes('छोटा हाथी') || q.includes('bus') || q.includes('बस') || q.includes('car') || q.includes('goods') || q.includes('distance') || q.includes('दूर')) {
      answerEn = `Looking to ship produce to high-demand consumer metros? Our AI recommends: For 1 to 2.5 tons, take a Mini-Truck (Tata Ace) at ₹12 to ₹14 per km. For bulk harvest over 5 tons, hire a 6-wheeler goods lorry at ₹85 per quintal. For small crates under 200 kg, inter-city bus cargo costs just ₹45 per crate. Transport freight is very low compared to the ₹15 to ₹25 per kg higher retail price in cities!`;
      answerHi = `अगर आप बड़े शहरों के उपभोक्ता बाजारों में माल बेचना चाहते हैं, तो हमारा एआई सुझाव देता है: 1 से 2.5 टन के लिए छोटा हाथी ₹12 से ₹14 प्रति किमी पर चुनें। 5 टन से अधिक के लिए 6-पहिया मालवाहक लॉरी लें (भाड़ा लगभग ₹85/क्विंटल)। छोटे 2-4 क्रेट के लिए बस कार्गो सबसे सस्ता है (₹45 प्रति क्रेट)। शहरों में मिलने वाले ₹15 से ₹25/किग्रा अधिक दाम के सामने भाड़ा नगण्य है!`;
      actionTarget = "section-map";
      actionLabelEn = "Open AI Freight & Arbitrage Guide";
      actionLabelHi = "एआई माल ढुलाई व मुनाफा मार्गदर्शिका देखें";
    } else {
      // Default weather / general advice
      answerEn = `In ${cluster.nameEn}, current temperature is ${cluster.weather.temp} with ${cluster.weather.humidity} humidity. ${cluster.weather.summaryEn}`;
      answerHi = `${cluster.nameHi} में तापमान ${cluster.weather.temp} और आर्द्रता ${cluster.weather.humidity} है। ${cluster.weather.summaryHi}`;
      actionTarget = "section-prices";
      actionLabelEn = "View Live Market Rates";
      actionLabelHi = "लाइव मंडी भाव देखें";
    }

    const answer = lang === 'hi' ? answerHi : answerEn;
    const actionLabel = lang === 'hi' ? actionLabelHi : actionLabelEn;

    this.displayAnswer(answer, actionTarget, actionLabel);
    speechHelper.speak(answer, lang);
  }

  displayAnswer(text, targetId, actionLabel) {
    const dialogBox = document.getElementById('va-conversation-box');
    if (!dialogBox) return;

    dialogBox.innerHTML = `
      <div class="va-bubble va-assistant-reply">
        <div class="va-bubble-header">
          <span class="va-avatar">🤖</span>
          <strong>${this.getLang() === 'hi' ? 'किसान सहायक एआई' : 'Agricultural AI Assistant'}</strong>
        </div>
        <p class="va-reply-text">${text}</p>
        ${targetId ? `
          <button type="button" class="btn-va-action" data-target="${targetId}">
            ➔ ${actionLabel}
          </button>
        ` : ''}
      </div>
    `;

    const actBtn = dialogBox.querySelector('.btn-va-action');
    if (actBtn) {
      actBtn.addEventListener('click', () => {
        this.close();
        if (window.kisanAppInstance && typeof window.kisanAppInstance.switchView === 'function') {
          window.kisanAppInstance.switchView(targetId);
        } else {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  }

  render() {
    let modal = document.getElementById('voice-assistant-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'voice-assistant-modal';
      modal.className = 'va-modal-backdrop';
      document.body.appendChild(modal);
    }
    this.modalEl = modal;
    modal.style.display = 'flex';

    const lang = this.getLang();
    const cluster = this.getActiveCluster();

    modal.innerHTML = `
      <div class="va-modal-card glass-panel">
        <div class="va-modal-header">
          <div class="va-header-title">
            <span class="va-header-icon">🎙️</span>
            <div>
              <h3>${lang === 'hi' ? 'किसान सहायक वॉयस एजेंट' : 'AI Voice Assistant'}</h3>
              <span class="va-sub">${lang === 'hi' ? 'पूछें: कहाँ बेचूं, जमीन पर क्या उगाएं या 4% लोन' : 'Ask: Where to sell, what crops to grow, or 4% loans'}</span>
            </div>
          </div>
          <button type="button" class="btn-close-va" id="btn-close-va">&times;</button>
        </div>

        <!-- Melodious Voice Gender Selector -->
        <div class="va-voice-select-row">
          <span class="va-voice-lbl">${lang === 'hi' ? 'आवाज का चयन:' : 'Voice Persona:'}</span>
          <div class="va-voice-toggle-group">
            <button type="button" class="btn-voice-toggle ${speechHelper.getGender() === 'female' ? 'active' : ''}" data-gender="female">
              👩 ${lang === 'hi' ? 'मधुर महिला आवाज' : 'Melodious Female'}
            </button>
            <button type="button" class="btn-voice-toggle ${speechHelper.getGender() === 'male' ? 'active' : ''}" data-gender="male">
              👨 ${lang === 'hi' ? 'स्पष्ट पुरुष आवाज' : 'Clear Male'}
            </button>
          </div>
        </div>

        <!-- Conversational Dialog Box -->
        <div class="va-conversation-box" id="va-conversation-box">
          <div class="va-bubble va-question-prompt">
            <div class="va-bubble-header">
              <span class="va-avatar">🤖</span>
              <strong>${lang === 'hi' ? 'नमस्ते किसान भाई! आपको आज क्या जानकारी चाहिए?' : 'Welcome! What agricultural intelligence do you need today?'}</strong>
            </div>
            <p>${lang === 'hi' ? 'नीचे दिए गए मुख्य विषय पर टैप करें या माइक दबाकर अपनी भाषा में पूछें:' : 'Tap any requirement chip below or press the mic to speak:'}</p>
          </div>
        </div>

        <!-- Requirement Question Chips -->
        <div class="va-chips-grid">
          <button type="button" class="va-chip highlight" data-q="selling">
            <span>⚖️</span>
            <span>${lang === 'hi' ? 'टमाटर / फसल कहाँ बेचूं? (दलाल बनाम सीधी बिक्री)' : 'Where to Sell Produce? (Mandi vs Direct Consumer)'}</span>
          </button>
          <button type="button" class="va-chip highlight" data-q="land">
            <span>🌱</span>
            <span>${lang === 'hi' ? 'मेरी जमीन पर कौन सी फसल कितनी पैदावार देगी?' : 'What Crops to Grow on My Land & Yield?'}</span>
          </button>
          <button type="button" class="va-chip highlight" data-q="scheme">
            <span>🏛️</span>
            <span>${lang === 'hi' ? 'सरकारी योजनाएं, 4% किसान लोन व सोलर सब्सिडी' : 'Govt Schemes, 4% Loans & Solar Subsidies'}</span>
          </button>
          <button type="button" class="va-chip" data-q="rain">
            <span>⛈️</span>
            <span>${lang === 'hi' ? 'क्या इस हफ्ते भारी बारिश होगी? (मौसम अलर्ट)' : 'Is Heavy Rainfall Expected? (Weather)'}</span>
          </button>
          <button type="button" class="va-chip" data-q="warehouse">
            <span>🏬</span>
            <span>${lang === 'hi' ? 'निकटतम कोल्ड स्टोरेज व खाली जगह' : 'Find Cold Storage & Warehouses'}</span>
          </button>
          <button type="button" class="va-chip" data-q="pesticide">
            <span>🛡️</span>
            <span>${lang === 'hi' ? 'कीट व बीमारी का सही कीटनाशक स्प्रे' : 'Best Pesticide & Spray Dose'}</span>
          </button>
          <button type="button" class="va-chip" data-q="onion">
            <span>🧅</span>
            <span>${lang === 'hi' ? 'प्याज का आज का भाव व मंडी सलाह' : 'Onion Rate & Market Advice'}</span>
          </button>
          <button type="button" class="va-chip" data-q="wheat">
            <span>🌾</span>
            <span>${lang === 'hi' ? 'गेहूं मॉडल भाव व सरकारी खरीद' : 'Wheat Price & Demand'}</span>
          </button>
        </div>

        <!-- Voice Microphone Controls -->
        <div class="va-mic-footer">
          <button type="button" class="va-mic-btn pulse-glow" id="va-mic-btn" title="Speak into microphone">
            <span class="mic-icon">🎙️</span>
          </button>
          <div class="va-mic-status" id="va-mic-status">
            ${lang === 'hi' ? 'माइक दबाकर बोलें' : 'Tap mic to speak'}
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    const closeBtn = document.getElementById('btn-close-va');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    // Requirement chips
    this.modalEl.querySelectorAll('.va-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const q = chip.getAttribute('data-q');
        this.handleUserQuery(q);
      });
    });

    // Voice gender toggle
    this.modalEl.querySelectorAll('.btn-voice-toggle').forEach(btn => {
      btn.addEventListener('click', () => {
        const g = btn.getAttribute('data-gender');
        speechHelper.setGender(g);
        this.modalEl.querySelectorAll('.btn-voice-toggle').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        speechHelper.previewVoice(g, this.getLang());
      });
    });

    // Mic button
    const micBtn = document.getElementById('va-mic-btn');
    if (micBtn) {
      micBtn.addEventListener('click', () => this.toggleMic());
    }
  }
}
