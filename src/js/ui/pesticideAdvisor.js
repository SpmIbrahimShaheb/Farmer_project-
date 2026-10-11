// Crop Protection & Pesticide Prescription Center
// Suggests recommended organic & chemical pesticides, exact spray dosage per 15L tank, and safety waiting periods

import { pesticidePrescriptions } from '../data/agriIntelligenceData.js';

export class PesticideAdvisor {
  constructor(containerId, getLang) {
    this.containerId = containerId;
    this.getLang = getLang;
    this.selectedCropFilter = 'all';
    this.searchQuery = '';
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
    const query = this.searchQuery.toLowerCase().trim();

    const filtered = pesticidePrescriptions.filter(p => {
      const matchCrop = this.selectedCropFilter === 'all' || p.cropId === this.selectedCropFilter;
      const matchSearch = !query || 
        p.pestNameEn.toLowerCase().includes(query) ||
        p.pestNameHi.includes(query) ||
        p.crop.toLowerCase().includes(query) ||
        p.chemicalSolutionEn.toLowerCase().includes(query);
      return matchCrop && matchSearch;
    });

    container.innerHTML = `
      <div class="f-pest-wrapper">
        <!-- Header -->
        <div class="f-pest-header glass-panel">
          <div class="f-pest-header-content">
            <span class="f-pest-badge">🛡️ ${lang === 'hi' ? 'स्मार्ट फसल सुरक्षा एवं कीटनाशक सलाहकार' : 'Crop Protection & Pesticide Prescription Center'}</span>
            <h3 class="f-pest-title">${lang === 'hi' ? 'कीट व बीमारी के अनुसार सही कीटनाशक व सटीक स्प्रे मात्रा' : 'Verified Pest Treatment, Biological Control & Dosage Calculator'}</h3>
            <p class="f-pest-sub">${lang === 'hi' ? 'फसल अनुसार प्रमुख कीटों की पहचान, जैविक व रासायनिक उपचार, 15 लीटर पंप में सही दवा की मात्रा और तुड़ाई पूर्व प्रतीक्षा समय (PHI)।' : 'Search by crop or pest to get biological remedies, chemical formulations, exact 15-liter knapsack dilution, and pre-harvest intervals.'}</p>
          </div>
        </div>

        <!-- Filter & Search Controls Bar -->
        <div class="f-pest-filter-bar">
          <div class="f-pest-search-box">
            <span class="f-p-search-icon">🔍</span>
            <input type="text" id="inp-pest-search" placeholder="${lang === 'hi' ? 'कीट, बीमारी या दवा का नाम खोजें (उदा. थ्रिप्स, इल्ली, रतुआ, कोराजन)...' : 'Search by pest, disease, or chemical (e.g. Thrips, Borer, Rust, Coragen)...'}" value="${this.searchQuery}" class="f-pest-search-input" />
          </div>

          <div class="f-pest-crop-pills">
            <button type="button" class="f-pest-pill ${this.selectedCropFilter === 'all' ? 'active' : ''}" data-crop="all">
              🌐 ${lang === 'hi' ? 'सभी फसलें' : 'All Crops'}
            </button>
            <button type="button" class="f-pest-pill ${this.selectedCropFilter === 'onion' ? 'active' : ''}" data-crop="onion">
              🧅 ${lang === 'hi' ? 'प्याज' : 'Onion'}
            </button>
            <button type="button" class="f-pest-pill ${this.selectedCropFilter === 'tomato' ? 'active' : ''}" data-crop="tomato">
              🍅 ${lang === 'hi' ? 'टमाटर' : 'Tomato'}
            </button>
            <button type="button" class="f-pest-pill ${this.selectedCropFilter === 'wheat' ? 'active' : ''}" data-crop="wheat">
              🌾 ${lang === 'hi' ? 'गेहूं' : 'Wheat'}
            </button>
            <button type="button" class="f-pest-pill ${this.selectedCropFilter === 'cotton' ? 'active' : ''}" data-crop="cotton">
              🌿 ${lang === 'hi' ? 'कपास' : 'Cotton'}
            </button>
          </div>
        </div>

        <!-- Prescriptions Grid -->
        <div class="f-pest-grid">
          ${filtered.length === 0 ? `
            <div class="f-pest-empty glass-panel">
              <span>🌾</span>
              <p>${lang === 'hi' ? 'कोई मेल नहीं मिला। कृपया दूसरा शब्द खोजें।' : 'No matching pesticide prescription found.'}</p>
            </div>
          ` : filtered.map(item => `
            <div class="f-pest-card glass-panel">
              <div class="f-pest-card-header">
                <div>
                  <span class="f-p-crop-tag">${lang === 'hi' ? (item.cropHi || item.crop) : item.crop}</span>
                  <h4 class="f-p-pest-title">${lang === 'hi' ? item.pestNameHi : item.pestNameEn}</h4>
                </div>
                <div class="f-p-phi-box" title="Pre-Harvest Waiting Interval">
                  <span class="f-phi-lbl">${lang === 'hi' ? 'PHI प्रतीक्षा:' : 'Pre-Harvest Wait:'}</span>
                  <strong class="f-phi-val text-green">${item.preHarvestInterval}</strong>
                </div>
              </div>

              <!-- Symptoms -->
              <div class="f-pest-section">
                <span class="f-p-label">🔍 ${lang === 'hi' ? 'नुकसान के लक्षण' : 'Damage Symptoms'}:</span>
                <p class="f-p-val">${lang === 'hi' ? item.symptomsHi : item.symptomsEn}</p>
              </div>

              <!-- Dosage Highlight Strip -->
              <div class="f-pest-dosage-strip">
                <span class="f-p-icon">💧</span>
                <div>
                  <span class="f-d-lbl">${lang === 'hi' ? '15 लीटर स्प्रेयर पंप में दवा की मात्रा' : '15-Liter Knapsack Pump Dosage'}:</span>
                  <strong class="f-d-val">${item.dosageKnapsackPump}</strong>
                </div>
              </div>

              <!-- Organic Solution -->
              <div class="f-pest-section">
                <span class="f-p-label text-green">🌿 ${lang === 'hi' ? 'जैविक व प्राकृतिक उपचार' : 'Biological / Organic Remedy'}:</span>
                <p class="f-p-val">${lang === 'hi' ? item.organicSolutionHi : item.organicSolutionEn}</p>
              </div>

              <!-- Chemical Solution -->
              <div class="f-pest-section">
                <span class="f-p-label">🧪 ${lang === 'hi' ? 'प्रमाणित रासायनिक कीटनाशक' : 'Chemical Formulation & Brand'}:</span>
                <p class="f-p-val font-semibold">${lang === 'hi' ? item.chemicalSolutionHi : item.chemicalSolutionEn}</p>
              </div>

              <!-- Safety precautions -->
              <div class="f-pest-footer">
                <span>⚠️ <strong>${lang === 'hi' ? 'सुरक्षा नियम' : 'Safety'}:</strong> ${lang === 'hi' ? item.safetyGearHi : item.safetyGearEn}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    this.bindEvents(container);
  }

  bindEvents(container) {
    const pills = container.querySelectorAll('.f-pest-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        this.selectedCropFilter = pill.getAttribute('data-crop');
        this.render();
      });
    });

    const searchInput = container.querySelector('#inp-pest-search');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.render();
      });
    }
  }
}
