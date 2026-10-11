// Universal Agricultural Omnisearch Bar
// Modeled after Zerodha Kite and Groww search systems
// Enables searching any Mandi, APMC Yard, Crop, Commodity, or District across India

import { locationsCatalog } from '../data/locationsCatalog.js';

export class UniversalSearchBar {
  constructor(containerId, getLang, onSelectLocation) {
    this.containerId = containerId;
    this.getLang = getLang;
    this.onSelectLocation = onSelectLocation;
    this.selectedLocation = locationsCatalog[0];
    this.isOpen = false;
  }

  init() {
    this.render();
  }

  render() {
    const container = document.getElementById(this.containerId);
    if (!container) return;

    const lang = this.getLang();
    const loc = this.selectedLocation || locationsCatalog[0];

    const placeholder = lang === 'hi'
      ? 'मंडी, फसल, जिला या राज्य खोजें... (उदा. लासलगांव, प्याज, बठिंडा, गेहूं, गुंटूर, मिर्च, मांड्या)'
      : 'Search Mandi, Crop, APMC Yard, or State (e.g. Lasalgaon, Onion, Bhatinda, Wheat, Guntur)...';

    container.innerHTML = `
      <div class="fintech-search-container">
        <!-- Main Search Bar (Groww / Zerodha Omnisearch) -->
        <div class="f-search-input-box">
          <span class="f-search-mag-icon">🔍</span>
          <input 
            type="text" 
            id="univ-location-input" 
            class="f-search-input" 
            placeholder="${placeholder}"
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
            <span>🔥</span> ${lang === 'hi' ? 'ट्रेंडिंग मंडियां:' : 'Trending Markets:'}
          </span>
          <div class="f-trending-pills">
            ${locationsCatalog.slice(0, 8).map(item => `
              <button type="button" class="f-trend-pill ${item.id === loc.id ? 'active' : ''}" data-loc-id="${item.id}">
                ${lang === 'hi' ? item.districtHi : item.districtEn}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Market Depth & Intelligence Spotlight Card -->
        <div class="f-spotlight-card" id="location-spotlight-box">
          ${this.getSpotlightHtml(loc, lang)}
        </div>
      </div>
    `;

    this.bindEvents();
  }

  getSpotlightHtml(loc, lang) {
    const title = lang === 'hi' ? loc.nameHi : loc.nameEn;
    const state = lang === 'hi' ? loc.stateHi : loc.stateEn;
    const crops = lang === 'hi' ? loc.commonCropsHi : loc.commonCropsEn;
    const weather = lang === 'hi' ? loc.weatherHi : loc.weatherEn;
    const demand = lang === 'hi' ? loc.topDemandHi : loc.topDemandEn;
    const transport = lang === 'hi' ? loc.transportAdviceHi : loc.transportAdviceEn;
    const mandi = lang === 'hi' ? loc.localMandiHi : loc.localMandiEn;

    return `
      <div class="f-spotlight-header">
        <div class="f-sp-title-group">
          <div class="f-sp-badge-row">
            <span class="f-market-hub-badge">🏛️ ${mandi}</span>
            <span class="f-state-badge">📍 ${state}</span>
          </div>
          <h3 class="f-sp-heading">${title}</h3>
        </div>
        <div class="f-sp-quick-actions">
          <button type="button" class="f-sp-btn btn-sp-prices" onclick="window.kisanAppInstance ? window.kisanAppInstance.switchView('section-prices') : null">
            <span>📊</span> <span>${lang === 'hi' ? 'मंडी भाव देखें' : 'Market Watch'}</span>
          </button>
          <button type="button" class="f-sp-btn btn-sp-map" onclick="window.kisanAppInstance ? window.kisanAppInstance.switchView('section-map') : null">
            <span>🗺️</span> <span>${lang === 'hi' ? 'लॉजिस्टिक्स मैप' : 'Trade Map'}</span>
          </button>
        </div>
      </div>

      <div class="f-sp-stats-grid">
        <div class="f-stat-card">
          <div class="f-stat-header">
            <span class="f-stat-icon">🌾</span>
            <span class="f-stat-label">${lang === 'hi' ? 'प्रमुख फसलें' : 'Primary Crops'}</span>
          </div>
          <div class="f-stat-content">${crops}</div>
        </div>

        <div class="f-stat-card">
          <div class="f-stat-header">
            <span class="f-stat-icon">🌦️</span>
            <span class="f-stat-label">${lang === 'hi' ? 'स्थानीय मौसम' : 'Weather'}</span>
          </div>
          <div class="f-stat-content">${weather}</div>
        </div>

        <div class="f-stat-card">
          <div class="f-stat-header">
            <span class="f-stat-icon">🔥</span>
            <span class="f-stat-label">${lang === 'hi' ? 'उच्च मांग वाला महानगर' : 'High-Demand Metro'}</span>
          </div>
          <div class="f-stat-content">${demand}</div>
        </div>

        <div class="f-stat-card">
          <div class="f-stat-header">
            <span class="f-stat-icon">🚚</span>
            <span class="f-stat-label">${lang === 'hi' ? 'एआई माल ढुलाई सलाह' : 'Freight Guidance'}</span>
          </div>
          <div class="f-stat-content">${transport}</div>
        </div>
      </div>
    `;
  }

  bindEvents() {
    const input = document.getElementById('univ-location-input');
    const dropdown = document.getElementById('univ-search-dropdown');
    const clearBtn = document.getElementById('btn-clear-search');
    const pillButtons = document.querySelectorAll('.f-trend-pill');

    if (!input || !dropdown) return;

    // Keyboard shortcut (⌘K or /)
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        input.focus();
        input.select();
      } else if (e.key === '/' && document.activeElement !== input) {
        e.preventDefault();
        input.focus();
      }
    });

    // Input search typing
    input.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (clearBtn) clearBtn.style.display = q ? 'block' : 'none';

      if (!q) {
        dropdown.style.display = 'none';
        return;
      }

      this.filterAndShowResults(q, dropdown);
    });

    input.addEventListener('focus', () => {
      if (input.value.trim()) {
        this.filterAndShowResults(input.value.trim().toLowerCase(), dropdown);
      }
    });

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        input.value = '';
        clearBtn.style.display = 'none';
        dropdown.style.display = 'none';
        input.focus();
      });
    }

    // Quick pills click
    pillButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const locId = btn.getAttribute('data-loc-id');
        const found = locationsCatalog.find(l => l.id === locId);
        if (found) {
          this.selectLocation(found);
        }
      });
    });

    // Close dropdown on outside click
    document.addEventListener('click', (e) => {
      if (!input.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
      }
    });
  }

  filterAndShowResults(query, dropdown) {
    const lang = this.getLang();
    const matches = locationsCatalog.filter(loc => {
      const nameEn = (loc.nameEn || '').toLowerCase();
      const nameHi = (loc.nameHi || '');
      const distEn = (loc.districtEn || '').toLowerCase();
      const distHi = (loc.districtHi || '');
      const stateEn = (loc.stateEn || '').toLowerCase();
      const stateHi = (loc.stateHi || '');
      const cropsEn = (loc.commonCropsEn || '').toLowerCase();
      const cropsHi = (loc.commonCropsHi || '');
      const mandiEn = (loc.localMandiEn || '').toLowerCase();
      const mandiHi = (loc.localMandiHi || '');

      return nameEn.includes(query) ||
             nameHi.includes(query) ||
             distEn.includes(query) ||
             distHi.includes(query) ||
             stateEn.includes(query) ||
             stateHi.includes(query) ||
             cropsEn.includes(query) ||
             cropsHi.includes(query) ||
             mandiEn.includes(query) ||
             mandiHi.includes(query);
    });

    if (matches.length === 0) {
      dropdown.innerHTML = `
        <div class="f-drop-empty">
          <p>${lang === 'hi' ? 'कोई परिणाम नहीं मिला। कृपया दूसरा नाम खोजें।' : 'No matching markets found. Try searching another mandi or crop.'}</p>
        </div>
      `;
      dropdown.style.display = 'block';
      return;
    }

    dropdown.innerHTML = `
      <div class="f-drop-header">
        <span>${lang === 'hi' ? 'मिले परिणाम' : 'Search Results'} (${matches.length})</span>
      </div>
      <div class="f-drop-list">
        ${matches.map(loc => `
          <div class="f-drop-item" data-loc-id="${loc.id}">
            <div class="f-drop-left">
              <span class="f-drop-icon">🏛️</span>
              <div>
                <div class="f-drop-title">${lang === 'hi' ? loc.nameHi : loc.nameEn}</div>
                <div class="f-drop-sub">📍 ${lang === 'hi' ? loc.stateHi : loc.stateEn} • 🌾 ${lang === 'hi' ? loc.commonCropsHi : loc.commonCropsEn}</div>
              </div>
            </div>
            <div class="f-drop-right">
              <span class="f-drop-badge">${lang === 'hi' ? loc.localMandiHi : loc.localMandiEn}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    dropdown.style.display = 'block';

    const items = dropdown.querySelectorAll('.f-drop-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const locId = item.getAttribute('data-loc-id');
        const found = locationsCatalog.find(l => l.id === locId);
        if (found) {
          this.selectLocation(found);
          dropdown.style.display = 'none';
        }
      });
    });
  }

  selectLocation(loc) {
    this.selectedLocation = loc;
    const lang = this.getLang();

    const input = document.getElementById('univ-location-input');
    if (input) {
      input.value = lang === 'hi' ? loc.nameHi : loc.nameEn;
    }

    // Update active pill
    const pillButtons = document.querySelectorAll('.f-trend-pill');
    pillButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-loc-id') === loc.id);
    });

    // Re-render Spotlight Box
    const spotlightBox = document.getElementById('location-spotlight-box');
    if (spotlightBox) {
      spotlightBox.innerHTML = this.getSpotlightHtml(loc, lang);
    }

    // Trigger parent callback
    if (typeof this.onSelectLocation === 'function') {
      this.onSelectLocation(loc);
    }
  }

  update() {
    this.render();
  }

  updateLanguage() {
    this.render();
  }
}
