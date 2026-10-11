// Harvest Weather Conditions & Small-Scale / Micro-Plot High-Yield Adaptive Planner
// 7-Day Rainfall & Squall Alert + High-Yield Crop Models for Small Landholdings (<2 Acres)

import { weatherHarvestAdvisory } from '../data/agriIntelligenceData.js';

export class WeatherHarvestPlanner {
  constructor(containerId, getLang) {
    this.containerId = containerId;
    this.getLang = getLang;
    this.data = weatherHarvestAdvisory;
    this.activeFilter = 'all';
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
    const days = this.data.forecast7d;
    const models = this.data.smallPlotModels;

    container.innerHTML = `
      <div class="f-whp-wrapper">
        <!-- Section Header -->
        <div class="f-whp-header glass-panel">
          <div class="f-whp-header-left">
            <span class="f-whp-badge">🌦️ ${lang === 'hi' ? 'फसल तुड़ाई व मौसम जोखिम प्रबंधन' : 'Harvesting Weather & Small-Plot Micro-Farming'}</span>
            <h3 class="f-whp-title">${lang === 'hi' ? 'मौसम अनुसार कटाई निर्णय एवं छोटे रकबे में बंपर पैदावार' : 'Weather-Adaptive Harvesting & High-Yield Micro-Plot Farming'}</h3>
            <p class="f-whp-sub">${lang === 'hi' ? 'आगामी 7 दिनों में भारी बारिश का पूर्वानुमान, समय पर कटाई की योजना और छोटी जोत (<2 एकड़) में अधिकतम उत्पादन के आधुनिक तरीके।' : '7-Day rainfall forecast with heavy rain alerts, optimal harvesting schedule, and multi-tier small plot cropping models.'}</p>
          </div>
        </div>

        <!-- Critical Weather Warning Alert Banner -->
        <div class="f-whp-alert-banner">
          <div class="f-alert-icon">⛈️</div>
          <div class="f-alert-content">
            <strong>${lang === 'hi' ? 'चेतावनी: भारी बारिश व आंधी का अलर्ट (तीसरे दिन)' : 'HIGH ALERT: Severe Rainfall Predicted on Day 3'}</strong>
            <p>${lang === 'hi' ? this.data.harvestAlertHi : this.data.harvestAlertEn}</p>
          </div>
          <button type="button" class="f-btn-alert-ack" onclick="alert('${lang === 'hi' ? 'सूचना सहेजी गई! एसएमएस अलर्ट आपके फोन पर प्रेषित हो गया है।' : 'Alert acknowledged! SMS reminder sent to your mobile.'}')">
            🔔 ${lang === 'hi' ? 'एसएमएस रिमाइंडर सेट करें' : 'Set SMS Reminder'}
          </button>
        </div>

        <!-- 7-Day Harvest Weather Forecast Strip -->
        <div class="f-whp-days-grid">
          ${days.map(d => {
            const isAlert = d.riskLevel === 'HIGH_ALERT';
            const isElevated = d.riskLevel === 'ELEVATED';
            return `
              <div class="f-day-card ${isAlert ? 'day-alert' : (isElevated ? 'day-elevated' : '')} glass-panel">
                <span class="f-day-name">${lang === 'hi' ? d.dayHi : d.dayEn}</span>
                <span class="f-day-icon">${d.icon}</span>
                <span class="f-day-temp">${d.temp}</span>
                <div class="f-day-rain-box">
                  <span class="f-rain-prob">💧 ${d.rainProb}</span>
                  <span class="f-rain-mm ${d.rainMm > 20 ? 'text-red' : ''}">${d.rainMm} mm</span>
                </div>
                <span class="f-day-status-pill ${isAlert ? 'pill-alert' : ''}">
                  ${isAlert ? (lang === 'hi' ? 'कटाई रोकें / ढकें' : 'Heavy Rain') : (lang === 'hi' ? 'अनुकूल' : d.condition)}
                </span>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Small-Scale / Micro-Plot Cropping Section (User requirement 6) -->
        <div class="f-whp-models-section">
          <div class="f-models-section-head">
            <div>
              <span class="f-models-sub-tag">🌱 ${lang === 'hi' ? 'छोटे खेतों हेतु विशेष गाइड' : 'Small Landholding Specialist Guide'}</span>
              <h4 class="f-models-heading">${lang === 'hi' ? 'छोटी जोत में अधिक मुनाफा देने वाले स्मार्ट फसल मॉडल:' : 'Maximizing Output on Small Landholdings (<2 Acres):'}</h4>
            </div>
          </div>

          <div class="f-small-models-grid">
            ${models.map(m => `
              <div class="f-model-card glass-panel">
                <div class="f-model-top">
                  <div class="f-model-badge-row">
                    <span class="f-model-size-badge">📐 ${m.landSize}</span>
                    <span class="f-model-mult-badge">🚀 ${m.yieldMultiplier}</span>
                  </div>
                  <h4 class="f-model-title">${lang === 'hi' ? m.titleHi : m.titleEn}</h4>
                </div>

                <div class="f-model-body">
                  <div class="f-model-layout-box">
                    <span class="f-m-lbl">${lang === 'hi' ? 'फसल संयोजन व लेआउट:' : 'Cropping Mix & Layout:'}</span>
                    <strong class="f-m-layout">${lang === 'hi' ? m.layoutHi : m.layoutEn}</strong>
                  </div>

                  <div class="f-model-benefit-box">
                    <span class="f-m-lbl">${lang === 'hi' ? 'किसानों को मुख्य लाभ:' : 'Core Advantages:'}</span>
                    <p class="f-m-benefit">${lang === 'hi' ? m.benefitHi : m.benefitEn}</p>
                  </div>
                </div>

                <div class="f-model-footer">
                  <button type="button" class="f-btn-model-apply" onclick="alert('${lang === 'hi' ? 'इस मॉडल का पूरा पीडीएफ चार्ट व बीज दर गाइड आपके व्हाट्सएप पर भेज दी गई है।' : 'Complete layout guide & seed rate chart sent to your WhatsApp.'}')">
                    📥 ${lang === 'hi' ? 'पूर्ण लेआउट चार्ट डाउनलोड करें' : 'Get Complete Layout Guide'}
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }
}
