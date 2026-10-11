// Selling Decision Engine: "Dalal / Mediator (Mandi)" vs "Direct Consumer" with Transport Savings
// Resolves farmer dilemma: "I have Tomato, where can I sell it for maximum profit?"

export class SellingAdvisor {
  constructor(containerId, getLang) {
    this.containerId = containerId;
    this.getLang = getLang;
    this.selectedCrop = 'tomato';
    this.quantityQuintals = 40; // 40 quintals (4 MT)
    this.selectedVehicle = 'bolero';
  }

  init() {
    this.render();
  }

  update() {
    this.render();
  }

  render() {
    const container = document.getElementById(this.containerId);
    if (!container) return;

    const lang = this.getLang();
    const isHi = lang === 'hi';
    const math = this.calculateProfitMath(isHi);

    container.innerHTML = `
      <div class="f-sa-wrapper">
        <!-- Header -->
        <div class="f-sa-header glass-panel">
          <div>
            <span class="f-sa-badge">⚖️ ${isHi ? 'बिक्री निर्णय एवं दलाल बनाम सीधी बिक्री मुनाफा इंजन' : 'Crop Selling Decision: Mandi Broker vs Direct Consumer'}</span>
            <h3 class="f-sa-title">${isHi ? 'मेरे पास टमाटर / फसल है — इसे कहाँ बेचूं कि सबसे ज्यादा मुनाफा हो?' : 'I Have Produce to Sell — Where Should I Sell for Maximum Profit?'}</h3>
            <p class="f-sa-sub">${isHi ? 'स्थानीय मंडी दलाल, दूसरे राज्यों की बड़ी मंडियों (महाराष्ट्र, आंध्र प्रदेश) और सीधे उपभोक्ताओं को बेचने के फायदों व वाहन भाड़े की सीधी तुलना।' : 'Compare selling via nearest local mandi broker vs shipping to high-profit out-of-state mandis vs direct consumer buyers.'}</p>
          </div>
        </div>

        <!-- Controls: Select Crop, Quantity, and Vehicle -->
        <div class="f-sa-controls-card glass-panel">
          <div class="f-sa-controls-grid">
            <div class="f-sa-ctrl">
              <label>${isHi ? 'फसल चुनें:' : 'Select Produce:'}</label>
              <div class="f-sa-crop-pills">
                <button type="button" class="f-sa-pill ${this.selectedCrop === 'tomato' ? 'active' : ''}" data-crop="tomato">
                  🍅 ${isHi ? 'टमाटर' : 'Tomato'}
                </button>
                <button type="button" class="f-sa-pill ${this.selectedCrop === 'onion' ? 'active' : ''}" data-crop="onion">
                  🧅 ${isHi ? 'लाल प्याज' : 'Onion'}
                </button>
                <button type="button" class="f-sa-pill ${this.selectedCrop === 'wheat' ? 'active' : ''}" data-crop="wheat">
                  🌾 ${isHi ? 'गेहूं' : 'Wheat'}
                </button>
                <button type="button" class="f-sa-pill ${this.selectedCrop === 'cotton' ? 'active' : ''}" data-crop="cotton">
                  🌿 ${isHi ? 'कपास' : 'Cotton'}
                </button>
              </div>
            </div>

            <div class="f-sa-ctrl">
              <label>${isHi ? 'बिक्री हेतु उपलब्ध मात्रा (क्विंटल):' : 'Lot Quantity for Sale (Quintals):'}</label>
              <div class="f-sa-qty-box">
                <input type="range" id="rng-sa-qty" min="10" max="150" step="5" value="${this.quantityQuintals}" class="f-arb-slider" />
                <span class="f-sa-qty-display"><strong>${this.quantityQuintals}</strong> Qtl (${(this.quantityQuintals / 10).toFixed(1)} MT)</span>
              </div>
            </div>

            <div class="f-sa-ctrl">
              <label>${isHi ? 'परिवहन माध्यम (गाड़ी का प्रकार):' : 'Transport Medium / Vehicle:'}</label>
              <select id="sel-sa-vehicle" class="f-form-input">
                <option value="tata_ace" ${this.selectedVehicle === 'tata_ace' ? 'selected' : ''}>
                  ${isHi ? 'छोटा हाथी (टाटा एस) • 15 क्विंटल • ₹14/किमी' : 'Mini Truck (Tata Ace) • 15 Qtl • ₹14/km'}
                </option>
                <option value="bolero" ${this.selectedVehicle === 'bolero' ? 'selected' : ''}>
                  ${isHi ? 'बोलेरो पिकअप • 25 क्विंटल • ₹18/किमी' : 'Pickup Truck (Bolero) • 25 Qtl • ₹18/km'}
                </option>
                <option value="tractor" ${this.selectedVehicle === 'tractor' ? 'selected' : ''}>
                  ${isHi ? 'ट्रैक्टर ट्रॉली • 40 क्विंटल • ₹22/किमी' : 'Tractor Trolley • 40 Qtl • ₹22/km'}
                </option>
                <option value="lorry" ${this.selectedVehicle === 'lorry' ? 'selected' : ''}>
                  ${isHi ? '10 चक्का कमर्शियल ट्रक • 100 क्विंटल • ₹32/किमी' : 'Commercial Truck (10-Wheeler) • 100 Qtl • ₹32/km'}
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
              <span class="f-path-tag tag-dalal">🏛️ ${isHi ? 'विधि 1: मंडी मार्ग (दलाल / आढ़ती के माध्यम से)' : 'Method 1: Mandi Route (via Commission Broker)'}</span>
              <h4 class="f-path-title">${isHi ? 'एपीएमसी मंडी में आढ़त पर बिक्री' : 'Selling via APMC Commission Brokers'}</h4>
            </div>

            <!-- Option A: Nearest Local Mandi -->
            <div class="f-mandi-option-card">
              <div class="f-opt-head">
                <div>
                  <span class="f-opt-badge badge-local">📍 ${isHi ? 'विकल्प 1: सबसे नजदीकी स्थानीय मंडी' : 'Option A: Nearest Local Mandi'}</span>
                  <h5 class="f-opt-name">${math.localMandiName}</h5>
                </div>
                <div class="f-opt-price-box">
                  <span class="f-opt-price">₹${math.localRateKg}/kg</span>
                  <span class="f-opt-sub">₹${math.localRateQtl}/Qtl</span>
                </div>
              </div>

              <div class="f-opt-breakdown">
                <div class="f-ob-row">
                  <span>${isHi ? 'सकल बिक्री राशि' : 'Gross Sale Value'}:</span>
                  <strong>₹${math.localGross.toLocaleString('en-IN')}</strong>
                </div>
                <div class="f-ob-row text-red">
                  <span>${isHi ? 'दलाल / आढ़त कमीशन (6.5%)' : 'Broker Commission (6.5%)'}:</span>
                  <span>− ₹${math.localDalalCut.toLocaleString('en-IN')}</span>
                </div>
                <div class="f-ob-row text-red">
                  <span>${isHi ? 'स्थानीय लोडिंग व तुलाई' : 'Local Weighing & Loading'}:</span>
                  <span>− ₹${math.localHandling.toLocaleString('en-IN')}</span>
                </div>
                <div class="f-ob-row f-ob-total">
                  <span>${isHi ? 'शुद्ध इन-हैंड जेब में आय' : 'Net Take-Home In Pocket'}:</span>
                  <strong class="f-net-val">₹${math.localNetTakeHome.toLocaleString('en-IN')}</strong>
                </div>
              </div>
            </div>

            <!-- Option B: Out-of-State / Regional High-Demand Mandi -->
            <div class="f-mandi-option-card card-dest-mandi">
              <div class="f-opt-head">
                <div>
                  <span class="f-opt-badge badge-interstate">🚀 ${isHi ? 'विकल्प 2: अन्य राज्य/महानगर की बड़ी मंडी (उच्च भाव)' : 'Option B: Regional / Inter-State Mandi (Higher Rate)'}</span>
                  <h5 class="f-opt-name">${math.distantMandiName}</h5>
                  <span class="f-opt-dist">📍 ${math.distantLocation} • ${math.distantDistanceKm} ${isHi ? 'किमी दूरी' : 'km distance'}</span>
                </div>
                <div class="f-opt-price-box">
                  <span class="f-opt-price text-green">₹${math.distantRateKg}/kg</span>
                  <span class="f-opt-sub">₹${math.distantRateQtl}/Qtl (+₹${math.priceDiffKg}/kg ${isHi ? 'अधिक' : 'higher'})</span>
                </div>
              </div>

              <div class="f-opt-breakdown">
                <div class="f-ob-row">
                  <span>${isHi ? 'सकल बिक्री राशि' : 'Gross Sale Value'}:</span>
                  <strong>₹${math.distantGross.toLocaleString('en-IN')}</strong>
                </div>
                <div class="f-ob-row text-red">
                  <span>${isHi ? `वाहन भाड़ा (${math.vehicleName})` : `Vehicle Freight Cost (${math.vehicleName})`}:</span>
                  <span>− ₹${math.distantFreight.toLocaleString('en-IN')}</span>
                </div>
                <div class="f-ob-row text-red">
                  <span>${isHi ? 'हाईवे टोल व लोडिंग खर्च' : 'Highway Toll & Handling'}:</span>
                  <span>− ₹${math.distantTolls.toLocaleString('en-IN')}</span>
                </div>
                <div class="f-ob-row text-red">
                  <span>${isHi ? 'मंडी दलाल आढ़त (5.0%)' : 'Mandi Broker Commission (5%)'}:</span>
                  <span>− ₹${math.distantCommission.toLocaleString('en-IN')}</span>
                </div>
                <div class="f-ob-row f-ob-total f-ob-highlight">
                  <span>${isHi ? 'भाड़ा काटकर शुद्ध इन-हैंड आय' : 'Net Take-Home After Transport'}:</span>
                  <strong class="f-net-val text-green">₹${math.distantNetTakeHome.toLocaleString('en-IN')}</strong>
                </div>
              </div>

              <!-- Transport Savings & Extra Profit Badge -->
              <div class="f-mandi-extra-badge">
                <span class="f-me-icon">💰</span>
                <div>
                  <strong>${isHi ? `स्थानीय मंडी से ₹${math.mandiExtraGain.toLocaleString('en-IN')} अधिक शुद्ध बचत व मुनाफा!` : `+₹${math.mandiExtraGain.toLocaleString('en-IN')} Extra Net Gain vs Local Mandi!`}</strong>
                  <p>${isHi ? `भाड़ा व टोल काटने के बाद भी आपको प्रति क्विंटल ₹${(math.mandiExtraGain / this.quantityQuintals).toFixed(0)} अतिरिक्त शुद्ध लाभ मिलता है।` : `Even after vehicle freight & tolls, you earn ₹${(math.mandiExtraGain / this.quantityQuintals).toFixed(0)} more per quintal.`}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- METHOD 2: DIRECT TO CONSUMERS / SUPERMARKETS (ZERO COMMISSION ROUTE) -->
          <div class="f-sa-path-col glass-panel path-direct">
            <div class="f-path-header">
              <span class="f-path-tag tag-direct">🛒 ${isHi ? 'विधि 2: सीधे उपभोक्ता व सुपरमार्केट (बिचौलिया मुक्त)' : 'Method 2: Direct to Consumers (Zero Broker Commission)'}</span>
              <h4 class="f-path-title">${isHi ? 'सीधी बिक्री — 0% दलाल कमीशन व खेत से उठाई' : 'Direct Consumer / Institutional Buyer Network'}</h4>
            </div>

            <div class="f-direct-hero-card">
              <div class="f-direct-rate-box">
                <div>
                  <span class="f-dir-lbl">${isHi ? 'सीधी खरीद पेशकश दर:' : 'Direct Purchase Offer Rate:'}</span>
                  <strong class="f-dir-rate">₹${math.directRateKg}/kg</strong>
                  <span class="f-dir-sub">₹${math.directRateQtl}/Qtl</span>
                </div>
                <div class="f-dir-badge">
                  <span>${isHi ? '✨ 0% दलाली (शून्य कमीशन)' : '✨ Zero Commission (0%)'}</span>
                </div>
              </div>

              <div class="f-opt-breakdown" style="margin-top: 14px;">
                <div class="f-ob-row">
                  <span>${isHi ? 'सकल बिक्री राशि' : 'Gross Sale Value'}:</span>
                  <strong>₹${math.directGross.toLocaleString('en-IN')}</strong>
                </div>
                <div class="f-ob-row text-green">
                  <span>${isHi ? 'दलाल / आढ़त कमीशन' : 'Broker / Intermediary Commission'}:</span>
                  <strong>${isHi ? '₹0 (शून्य - कोई कटौती नहीं)' : '₹0 (Zero - No Deductions)'}</strong>
                </div>
                <div class="f-ob-row text-green">
                  <span>${isHi ? 'खेत पर डोरस्टेप उठाई (परिवहन खर्च)' : 'Farmgate Pickup (Transport Cost)'}:</span>
                  <strong>${isHi ? '₹0 (खरीदार द्वारा वहन)' : '₹0 (Covered by Buyer)'}</strong>
                </div>
                <div class="f-ob-row f-ob-total f-ob-direct-total">
                  <span>${isHi ? 'सीधी जेब में जाने वाली शुद्ध आय' : 'Pure Net Take-Home In Hand'}:</span>
                  <strong class="f-net-val text-purple">₹${math.directGross.toLocaleString('en-IN')}</strong>
                </div>
              </div>

              <!-- Direct Consumer Win Banner -->
              <div class="f-direct-win-banner">
                <div class="f-dw-icon">🏆</div>
                <div>
                  <strong>${isHi ? `स्थानीय दलाल से ₹${math.directExtraGain.toLocaleString('en-IN')} ज्यादा शुद्ध लाभ (+${math.directPercentageGain}% अधिक)!` : `+₹${math.directExtraGain.toLocaleString('en-IN')} Extra Profit vs Local Mandi (+${math.directPercentageGain}%)!`}</strong>
                  <p>${isHi ? 'न मंडी में लाइन में लगना, न दलाल को कमीशन देना। नकद भुगतान सीधे आपके बैंक खाते में।' : 'Zero mandi queuing, zero broker deductions, spot direct payment to your bank.'}</p>
                </div>
              </div>

              <div class="f-direct-actions">
                <button type="button" class="f-btn-sa-post-lot" onclick="window.kisanAppInstance ? window.kisanAppInstance.switchView('section-procurement') : null">
                  🛒 ${isHi ? 'सीधे खरीदारों को यह लॉट बेचें' : 'List Harvest Lot on Direct Buyer Hub'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Strategic Decision Summary Banner -->
        <div class="f-sa-verdict-banner glass-panel">
          <div class="f-sv-icon">💡</div>
          <div>
            <strong>${isHi ? 'एआई अंतिम बिक्री सलाह:' : 'AI Strategic Selling Recommendation:'}</strong>
            <p>${math.finalRecommendationText}</p>
          </div>
        </div>
      </div>
    `;

    this.bindEvents(container);
  }

  calculateProfitMath(isHi) {
    let localRateKg = 14.0;
    let localMandiName = "Pimpalgaon APMC Yard (Local)";
    let distantMandiName = "Vashi APMC Navi Mumbai (Maharashtra)";
    let distantLocation = "Navi Mumbai Yard-2";
    let distantRateKg = 21.0;
    let distantDistanceKm = 195;
    let directRateKg = 23.5;

    if (this.selectedCrop === 'onion') {
      localRateKg = 19.5;
      localMandiName = "Lasalgaon APMC Yard (Local)";
      distantMandiName = "Surat APMC Vegetable Yard (Gujarat) / Guntur (AP)";
      distantLocation = "Surat / Guntur Agri Terminal";
      distantRateKg = 25.5;
      distantDistanceKm = 240;
      directRateKg = 27.0;
    } else if (this.selectedCrop === 'wheat') {
      localRateKg = 24.25;
      localMandiName = "Bhatinda Grain Market (Local)";
      distantMandiName = "Lawrence Road Foodgrain Terminal, Delhi";
      distantLocation = "Delhi NCR Wholesale Terminal";
      distantRateKg = 28.5;
      distantDistanceKm = 310;
      directRateKg = 30.5;
    } else if (this.selectedCrop === 'cotton') {
      localRateKg = 73.5;
      localMandiName = "Mansa Cotton Yard (Local)";
      distantMandiName = "Guntur Cotton Yard (Andhra Pradesh)";
      distantLocation = "Guntur Commercial Yard";
      distantRateKg = 82.0;
      distantDistanceKm = 450;
      directRateKg = 86.0;
    }

    const localRateQtl = localRateKg * 100;
    const distantRateQtl = distantRateKg * 100;
    const directRateQtl = directRateKg * 100;

    const localGross = this.quantityQuintals * localRateQtl;
    const localDalalCut = localGross * 0.065;
    const localHandling = this.quantityQuintals * 30;
    const localNetTakeHome = localGross - (localDalalCut + localHandling);

    const distantGross = this.quantityQuintals * distantRateQtl;
    
    // Freight calculation by vehicle
    let rateKm = 18;
    let vehName = "Bolero Pickup";
    if (this.selectedVehicle === 'tata_ace') {
      rateKm = 14;
      vehName = "Tata Ace";
    } else if (this.selectedVehicle === 'tractor') {
      rateKm = 22;
      vehName = "Tractor Trolley";
    } else if (this.selectedVehicle === 'lorry') {
      rateKm = 32;
      vehName = "10-Wheeler Truck";
    }

    const distantFreight = distantDistanceKm * rateKm;
    const distantTolls = Math.round(distantDistanceKm * 1.8);
    const distantCommission = distantGross * 0.05;
    const distantNetTakeHome = distantGross - (distantFreight + distantTolls + distantCommission);

    const directGross = this.quantityQuintals * directRateQtl;

    const mandiExtraGain = distantNetTakeHome - localNetTakeHome;
    const directExtraGain = directGross - localNetTakeHome;
    const directPercentageGain = ((directExtraGain / localNetTakeHome) * 100).toFixed(0);

    const finalRecommendationText = isHi
      ? `1. सबसे ज्यादा शुद्ध मुनाफा <strong>सीधे उपभोक्ताओं / सुपरमार्केट्स को बेचने पर (+₹${directExtraGain.toLocaleString('en-IN')} ज्यादा)</strong> मिल रहा है क्योंकि इसमें 0% दलाली और शून्य भाड़ा है।<br/>2. यदि आपको पूरा लॉट थोक मंडी में ही निकालना है, तो अपनी स्थानीय मंडी के बजाय <strong>${vehName} से ${distantMandiName} भेजना सर्वश्रेष्ठ है</strong>, जिससे भाड़ा काटकर भी आपको <strong>+₹${mandiExtraGain.toLocaleString('en-IN')} की अतिरिक्त शुद्ध कमाई</strong> होगी!`
      : `1. Direct Consumer route yields the highest take-home (+₹${directExtraGain.toLocaleString('en-IN')} extra pure cash) with zero broker commission and farmgate collection.<br/>2. For bulk APMC trading, shipping via ${vehName} to ${distantMandiName} nets you +₹${mandiExtraGain.toLocaleString('en-IN')} extra after deducting all fuel and tolls!`;

    return {
      localMandiName,
      localRateKg,
      localRateQtl,
      localGross,
      localDalalCut,
      localHandling,
      localNetTakeHome,
      distantMandiName,
      distantLocation,
      distantRateKg,
      distantRateQtl,
      distantDistanceKm,
      priceDiffKg: (distantRateKg - localRateKg).toFixed(1),
      distantGross,
      vehicleName: vehName,
      distantFreight,
      distantTolls,
      distantCommission,
      distantNetTakeHome,
      mandiExtraGain,
      directRateKg,
      directRateQtl,
      directGross,
      directExtraGain,
      directPercentageGain,
      finalRecommendationText
    };
  }

  bindEvents(container) {
    const pills = container.querySelectorAll('.f-sa-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        this.selectedCrop = pill.getAttribute('data-crop');
        this.render();
      });
    });

    const qtySlider = container.querySelector('#rng-sa-qty');
    if (qtySlider) {
      qtySlider.addEventListener('input', (e) => {
        this.quantityQuintals = parseInt(e.target.value, 10);
        this.render();
      });
    }

    const vehSelect = container.querySelector('#sel-sa-vehicle');
    if (vehSelect) {
      vehSelect.addEventListener('change', (e) => {
        this.selectedVehicle = e.target.value;
        this.render();
      });
    }
  }
}
