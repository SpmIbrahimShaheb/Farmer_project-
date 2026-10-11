// Smart Mandi Arbitrage & Route Profit Optimizer
// Compares local mandi rates vs distant destination mandis vs direct consumer buyers
// Calculates exact transport cost, tolls, travel time, and Net In-Pocket Extra Profit

import { mandiArbitrageData, transportVehicles } from '../data/agriIntelligenceData.js';

export class ArbitrageOptimizer {
  constructor(containerId, getLang) {
    this.containerId = containerId;
    this.getLang = getLang;
    this.selectedCrop = 'onion';
    this.lotQuantityQuintals = 30; // default 30 quintals (3 MT)
    this.selectedVehicleId = 'bolero_maxi';
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
    const cropData = mandiArbitrageData[this.selectedCrop] || mandiArbitrageData.onion;
    const vehicle = transportVehicles.find(v => v.id === this.selectedVehicleId) || transportVehicles[1];

    const localMandi = cropData.baseLocalMandi;
    const localGrossRevenue = this.lotQuantityQuintals * localMandi.priceQuintal;
    const localLocalFreight = this.lotQuantityQuintals * localMandi.freightCostPerQtl;
    const localNetIncome = localGrossRevenue - localLocalFreight;

    // Calculate destinations with net profit arbitrage
    const comparisonCards = cropData.destinations.map(dest => {
      const grossRevenue = this.lotQuantityQuintals * dest.priceQuintal;
      
      // Calculate realistic transport freight
      let totalFreight = 0;
      let totalTolls = 0;

      if (dest.distanceKm > 0) {
        // Road distance freight: base km rate + per quintal handling
        const kmCost = dest.distanceKm * vehicle.ratePerKm;
        const handlingCost = this.lotQuantityQuintals * 15; // ₹15/qtl loading
        totalFreight = kmCost + handlingCost;
        totalTolls = dest.tollCostPerTrip || 0;
      }

      const totalLogisticsCost = totalFreight + totalTolls;
      const netTakeHome = grossRevenue - totalLogisticsCost;
      const netExtraProfit = netTakeHome - localNetIncome;
      const isProfitable = netExtraProfit > 0;

      return {
        ...dest,
        grossRevenue,
        totalFreight,
        totalTolls,
        totalLogisticsCost,
        netTakeHome,
        netExtraProfit,
        isProfitable
      };
    });

    container.innerHTML = `
      <div class="f-arb-wrapper">
        <!-- Arbitrage Header & Controls Bar -->
        <div class="f-arb-control-card glass-panel">
          <div class="f-arb-header-row">
            <div>
              <span class="f-arb-badge">⚖️ ${lang === 'hi' ? 'स्मार्ट मंडी मुनाफा व लॉजिस्टिक्स कैलकुलेटर' : 'Smart Mandi Arbitrage & Route Profit Optimizer'}</span>
              <h3 class="f-arb-title">${lang === 'hi' ? 'कहाँ बेचने में सबसे ज्यादा शुद्ध मुनाफा होगा?' : 'Where Will You Earn Maximum Net Take-Home Profit?'}</h3>
              <p class="f-arb-sub">${lang === 'hi' ? 'स्थानीय मंडी भाव, दूर की बड़ी मंडियों और सीधे खरीदारों के बीच भाड़ा व टोल काटकर शुद्ध मुनाफे का सटीक विश्लेषण।' : 'Compare local mandi price vs other regional markets vs direct buyers with exact fuel, freight, and net take-home calculation.'}</p>
            </div>
          </div>

          <!-- Controls: Crop, Lot Quantity, Vehicle -->
          <div class="f-arb-inputs-grid">
            <div class="f-arb-field">
              <label>${lang === 'hi' ? 'फसल चुनें:' : 'Select Commodity:'}</label>
              <div class="f-arb-pill-group">
                <button type="button" class="f-arb-crop-pill ${this.selectedCrop === 'onion' ? 'active' : ''}" data-crop="onion">
                  🧅 ${lang === 'hi' ? 'लाल प्याज' : 'Red Onion'}
                </button>
                <button type="button" class="f-arb-crop-pill ${this.selectedCrop === 'tomato' ? 'active' : ''}" data-crop="tomato">
                  🍅 ${lang === 'hi' ? 'टमाटर' : 'Tomato'}
                </button>
                <button type="button" class="f-arb-crop-pill ${this.selectedCrop === 'wheat' ? 'active' : ''}" data-crop="wheat">
                  🌾 ${lang === 'hi' ? 'शरबती गेहूं' : 'Wheat'}
                </button>
              </div>
            </div>

            <div class="f-arb-field">
              <label>${lang === 'hi' ? 'फसल मात्रा (क्विंटल):' : 'Lot Quantity (Quintals):'}</label>
              <div class="f-arb-qty-row">
                <input type="range" id="rng-arb-qty" min="10" max="150" step="5" value="${this.lotQuantityQuintals}" class="f-arb-slider" />
                <span class="f-arb-qty-val"><strong>${this.lotQuantityQuintals}</strong> Qtl (${(this.lotQuantityQuintals / 10).toFixed(1)} MT)</span>
              </div>
            </div>

            <div class="f-arb-field">
              <label>${lang === 'hi' ? 'परिवहन वाहन (गाड़ी):' : 'Transport Vehicle:'}</label>
              <select id="sel-arb-vehicle" class="f-form-input">
                ${transportVehicles.map(v => `
                  <option value="${v.id}" ${v.id === this.selectedVehicleId ? 'selected' : ''}>
                    ${lang === 'hi' ? v.nameHi : v.nameEn} (Cap: ${v.capacityQuintals} Qtl • ₹${v.ratePerKm}/km)
                  </option>
                `).join('')}
              </select>
            </div>
          </div>
        </div>

        <!-- Baseline Local Mandi Anchor Box -->
        <div class="f-arb-baseline-strip">
          <div class="f-base-item">
            <span class="f-base-lbl">📍 ${lang === 'hi' ? 'आपकी स्थानीय नजदीकी मंडी' : 'Your Local Mandi'}:</span>
            <strong class="f-base-name">${localMandi.name}</strong>
          </div>
          <div class="f-base-item">
            <span class="f-base-lbl">${lang === 'hi' ? 'स्थानीय भाव' : 'Local Mandi Rate'}:</span>
            <strong class="f-base-val">₹${localMandi.priceKg}/kg (₹${localMandi.priceQuintal}/Qtl)</strong>
          </div>
          <div class="f-base-item">
            <span class="f-base-lbl">${lang === 'hi' ? 'स्थानीय कुल शुद्ध आय' : 'Local Net In-Hand'}:</span>
            <strong class="f-base-val">₹${localNetIncome.toLocaleString('en-IN')}</strong>
          </div>
        </div>

        <!-- Destinations Comparison Grid -->
        <div class="f-arb-cards-grid">
          ${comparisonCards.map(dest => {
            const isDirect = dest.id.includes('direct');
            const cardClass = isDirect ? 'f-arb-card-direct' : (dest.isProfitable ? 'f-arb-card-profit' : 'f-arb-card-loss');

            return `
              <div class="f-arb-card ${cardClass} glass-panel">
                <div class="f-arb-card-top">
                  <div>
                    <span class="f-dest-type-tag ${isDirect ? 'tag-direct' : 'tag-mandi'}">
                      ${isDirect ? (lang === 'hi' ? '🛒 सीधा पंजीकृत खरीदार' : '🛒 DIRECT ENROLLED BUYER') : (lang === 'hi' ? '🏛️ क्षेत्रीय एपीएमसी मंडी' : '🏛️ REGIONAL APMC MANDI')}
                    </span>
                    <h4 class="f-dest-name">${dest.name}</h4>
                    <span class="f-dest-state">📍 ${dest.state} • ${dest.distanceKm > 0 ? `${dest.distanceKm} km (${dest.transitHours} hrs)` : (lang === 'hi' ? 'खेत से सीधी उठाई (0 किमी)' : 'Farmgate Doorstep (0 km)')}</span>
                  </div>
                  <div class="f-dest-price-box">
                    <span class="f-dest-price">₹${dest.priceKg}/kg</span>
                    <span class="f-dest-qtl">₹${dest.priceQuintal}/Qtl</span>
                  </div>
                </div>

                <!-- Logistics & Breakdown Table -->
                <div class="f-arb-breakdown-box">
                  <div class="f-bd-row">
                    <span>${lang === 'hi' ? 'सकल बिक्री राशि' : 'Gross Sale Value'}:</span>
                    <strong>₹${dest.grossRevenue.toLocaleString('en-IN')}</strong>
                  </div>
                  <div class="f-bd-row text-muted">
                    <span>${lang === 'hi' ? 'परिवहन भाड़ा + टोल खर्च' : 'Freight & Toll Deductions'}:</span>
                    <span>− ₹${dest.totalLogisticsCost.toLocaleString('en-IN')}</span>
                  </div>
                  <div class="f-bd-row f-bd-net">
                    <span>${lang === 'hi' ? 'शुद्ध इन-हैंड जेब में आय' : 'Net Take-Home In-Hand'}:</span>
                    <strong class="f-net-val">₹${dest.netTakeHome.toLocaleString('en-IN')}</strong>
                  </div>
                </div>

                <!-- Arbitrage Bottom Result Pill -->
                <div class="f-arb-result-banner ${dest.isProfitable ? 'res-profit' : 'res-loss'}">
                  <div class="f-res-icon">${dest.isProfitable ? (isDirect ? '🚀' : '📈') : '⚠️'}</div>
                  <div class="f-res-text">
                    <strong>
                      ${dest.isProfitable 
                        ? (lang === 'hi' ? `स्थानीय मंडी से ₹${Math.abs(dest.netExtraProfit).toLocaleString('en-IN')} अधिक शुद्ध लाभ!` : `+₹${Math.abs(dest.netExtraProfit).toLocaleString('en-IN')} Extra Net Pocket Profit!`)
                        : (lang === 'hi' ? `भाड़ा ज्यादा: ₹${Math.abs(dest.netExtraProfit).toLocaleString('en-IN')} का नुकसान (स्थानीय में ही बेचें)` : `Negative Arbitrage: -₹${Math.abs(dest.netExtraProfit).toLocaleString('en-IN')} (Stay Local)`)}
                    </strong>
                    <p>${dest.demandLevel} • <strong>${dest.recommendation}</strong></p>
                  </div>
                </div>

                <!-- CTA Action -->
                <div class="f-arb-action-row">
                  ${isDirect ? `
                    <button type="button" class="f-btn-arb-cta" onclick="window.kisanAppInstance.switchView('section-procurement')">
                      🛒 ${lang === 'hi' ? 'सीधे खरीदार से डील पक्की करें' : 'Sell to Direct Buyer Now'}
                    </button>
                  ` : `
                    <a href="https://maps.google.com/?q=${encodeURIComponent(dest.name)}" target="_blank" rel="noopener noreferrer" class="f-btn-arb-route">
                      🗺️ ${lang === 'hi' ? 'नेविगेट रूट व मंडी शेड देखें' : 'View Highway Route & Shed'}
                    </a>
                  `}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;

    this.bindEvents(container);
  }

  bindEvents(container) {
    const cropPills = container.querySelectorAll('.f-arb-crop-pill');
    cropPills.forEach(pill => {
      pill.addEventListener('click', () => {
        this.selectedCrop = pill.getAttribute('data-crop');
        this.render();
      });
    });

    const qtySlider = container.querySelector('#rng-arb-qty');
    if (qtySlider) {
      qtySlider.addEventListener('input', (e) => {
        this.lotQuantityQuintals = parseInt(e.target.value, 10);
        this.render();
      });
    }

    const vehicleSelect = container.querySelector('#sel-arb-vehicle');
    if (vehicleSelect) {
      vehicleSelect.addEventListener('change', (e) => {
        this.selectedVehicleId = e.target.value;
        this.render();
      });
    }
  }
}
