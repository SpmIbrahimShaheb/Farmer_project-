// Visual Crop & Soil Yield Doctor and Fertilizer Advisor
import { AdvisoryAgent } from '../agents/advisoryAgent.js';
import { soilProfiles } from '../data/regionalData.js';
import { speechHelper } from './speechHelper.js';
import { translations } from '../data/translations.js';

export function setupAdvisorForm(container, getActiveCluster, getLang) {
  if (!container) return;

  let selectedCropId = 'onion';
  let selectedSoilId = 'black_cotton';
  let acreage = 1.0;

  function render() {
    const lang = getLang();
    const t = translations[lang] || translations.en;
    const cluster = getActiveCluster();

    const cropList = [
      { id: 'onion', nameEn: 'Red Onion', nameHi: 'लाल प्याज', img: '/assets/onion.jpg' },
      { id: 'tomato', nameEn: 'Hybrid Tomato', nameHi: 'हाइब्रिड टमाटर', img: '/assets/tomato.jpg' },
      { id: 'wheat', nameEn: 'Wheat', nameHi: 'गेहूं', img: '/assets/wheat.jpg' },
      { id: 'cotton', nameEn: 'Raw Cotton', nameHi: 'कपास', img: '/assets/cotton.jpg' }
    ];

    container.innerHTML = `
      <div class="advisor-form-grid">
        <!-- Interactive Inputs Column -->
        <div class="advisor-inputs glass-panel">
          <div class="input-step">
            <label class="step-label">
              <span class="step-num">1</span>
              <span>${t.labelSelectCrop}</span>
            </label>
            <div class="crop-select-grid">
              ${cropList.map(c => `
                <div class="crop-option-card ${selectedCropId === c.id ? 'active' : ''}" data-crop="${c.id}">
                  <img src="${c.img}" alt="${c.nameEn}" class="option-img" />
                  <div class="option-title">${lang === 'hi' ? c.nameHi : c.nameEn}</div>
                  <div class="check-mark">✓</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="input-step">
            <label class="step-label">
              <span class="step-num">2</span>
              <span>${t.labelSelectSoil}</span>
            </label>
            <div class="soil-select-grid">
              ${soilProfiles.map(s => `
                <div class="soil-option-card ${selectedSoilId === s.id ? 'active' : ''}" data-soil="${s.id}">
                  <div class="soil-badge-icon">🌱</div>
                  <div class="soil-info">
                    <div class="soil-name">${lang === 'hi' ? s.nameHi : s.nameEn}</div>
                    <div class="soil-desc">${lang === 'hi' ? s.textureHi : s.texture}</div>
                  </div>
                  <div class="check-mark">✓</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="input-step">
            <label class="step-label">
              <span class="step-num">3</span>
              <span>${t.labelAcreage}</span>
            </label>
            <div class="acreage-control-wrap">
              <button type="button" class="btn-stepper" id="btn-acre-minus">−</button>
              <div class="acre-display">
                <span id="acre-val">${acreage}</span>
                <span class="acre-unit">${t.acreUnit || (lang === 'hi' ? 'एकड़' : 'Acres')}</span>
              </div>
              <button type="button" class="btn-stepper" id="btn-acre-plus">+</button>
            </div>
          </div>

          <!-- Micro-Weather snapshot used in calculation -->
          <div class="advisor-weather-badge">
            <div class="weather-badge-header">
              <span>🌦️ ${t.weatherTitle} (${lang === 'hi' ? cluster.nameHi : cluster.nameEn})</span>
            </div>
            <div class="weather-metrics-pill-row">
              <span class="metric-pill">🌡️ ${cluster.weather.temp}</span>
              <span class="metric-pill">💧 ${cluster.weather.humidity}</span>
              <span class="metric-pill">🌧️ ${lang === 'hi' ? cluster.weather.rainfallHi : cluster.weather.rainfall}</span>
              <span class="metric-pill">🌿 ${lang === 'hi' ? cluster.weather.soilMoistureHi : cluster.weather.soilMoisture}</span>
            </div>
          </div>

          <button type="button" id="btn-calc-advisory" class="btn-primary-action">
            <span>✨ ${t.btnCalculateAdvisory}</span>
          </button>
        </div>

        <!-- Output Advisory Column -->
        <div class="advisor-output glass-panel" id="advisor-output-box">
          <!-- Will be rendered upon calculation or default state -->
        </div>
      </div>
    `;

    bindEvents();
    renderOutput();
  }

  function bindEvents() {
    const lang = getLang();

    // Crop selection clicks
    container.querySelectorAll('.crop-option-card').forEach(el => {
      el.addEventListener('click', () => {
        selectedCropId = el.getAttribute('data-crop');
        render();
      });
    });

    // Soil selection clicks
    container.querySelectorAll('.soil-option-card').forEach(el => {
      el.addEventListener('click', () => {
        selectedSoilId = el.getAttribute('data-soil');
        render();
      });
    });

    // Acreage steppers
    const minusBtn = container.querySelector('#btn-acre-minus');
    const plusBtn = container.querySelector('#btn-acre-plus');
    if (minusBtn) {
      minusBtn.addEventListener('click', () => {
        if (acreage > 0.5) {
          acreage = Number((acreage - 0.5).toFixed(1));
          container.querySelector('#acre-val').textContent = acreage;
          renderOutput();
        }
      });
    }
    if (plusBtn) {
      plusBtn.addEventListener('click', () => {
        if (acreage < 50) {
          acreage = Number((acreage + 0.5).toFixed(1));
          container.querySelector('#acre-val').textContent = acreage;
          renderOutput();
        }
      });
    }

    const calcBtn = container.querySelector('#btn-calc-advisory');
    if (calcBtn) {
      calcBtn.addEventListener('click', () => {
        renderOutput(true);
      });
    }
  }

  function renderOutput(triggerPulse = false) {
    const outBox = container.querySelector('#advisor-output-box');
    if (!outBox) return;

    const lang = getLang();
    const t = translations[lang] || translations.en;
    const cluster = getActiveCluster();

    const result = AdvisoryAgent.generateAdvisory(selectedCropId, selectedSoilId, acreage, cluster.weather, lang);

    const voiceAdvice = lang === 'hi'
      ? `${result.acreage} एकड़ ${result.cropName} के लिए अनुमानित पैदावार ${result.projectedYield} है। ${result.pestAlert}`
      : `For ${result.acreage} acres of ${result.cropName}, expected yield is ${result.projectedYield}. ${result.pestAlert}`;

    outBox.innerHTML = `
      <div class="advisory-result-container ${triggerPulse ? 'pulse-highlight' : ''}">
        <div class="result-header">
          <div class="result-title-group">
            <span class="advisory-kicker">🎯 Google AI Agronomic Advisory</span>
            <h3 class="result-heading">${result.cropName} (${result.acreage} ${t.acreUnit || (lang === 'hi' ? 'एकड़' : 'Acres')})</h3>
          </div>
          <button type="button" class="btn-audio-listen" id="btn-listen-crop-advisory" title="Listen audio advice">
            <span>🔊</span>
            <span>${t.btnListenAdvice}</span>
          </button>
        </div>

        <!-- Yield Estimate Banner -->
        <div class="yield-banner">
          <div class="yield-left">
            <div class="yield-caption">${t.yieldEstimateTitle}</div>
            <div class="yield-number">${result.projectedYield}</div>
            <div class="soil-match-tag ${result.isPreferredSoil ? 'match-high' : 'match-med'}">
              ✓ ${result.soilSuitability}
            </div>
          </div>
          <div class="yield-right">
            <div class="confidence-circle">
              <span class="conf-pct">${result.confidenceScore}</span>
              <span class="conf-lbl">${t.accuracyConfidence}</span>
            </div>
          </div>
        </div>

        <!-- Balanced Fertilizer Grid -->
        <div class="fert-section">
          <h4 class="section-title">🧪 ${t.fertilizerDoseTitle}</h4>
          <div class="fert-grid">
            ${result.fertilizers.map(f => `
              <div class="fert-card">
                <div class="fert-name">${f.name}</div>
                <div class="fert-dose">${f.dose}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Organic Alternative Box -->
        <div class="organic-box">
          <div class="organic-header">
            <span class="org-icon">🌿</span>
            <strong>${t.organicTipTitle}: ${result.organicRecommendation.name}</strong>
          </div>
          <p class="org-text">${result.organicRecommendation.recipe}</p>
        </div>

        <!-- Micro-Climate & Pest Warning -->
        <div class="pest-warning-box">
          <div class="pest-header">
            <span class="pest-icon">⚠️</span>
            <strong>${t.pestAlertTitle}</strong>
          </div>
          <p class="pest-text">${result.pestAlert}</p>
        </div>
      </div>
    `;

    const listenBtn = outBox.querySelector('#btn-listen-crop-advisory');
    if (listenBtn) {
      listenBtn.addEventListener('click', () => {
        speechHelper.toggle(voiceAdvice, lang);
      });
    }
  }

  // Public rerender on language/cluster change
  return {
    update: render
  };
}
