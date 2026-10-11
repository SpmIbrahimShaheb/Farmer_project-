// Interactive National Mandi, Terminal & Cold Storage Logistics Map using Leaflet
// Pan-India trade flows and freight arbitrage calculations

import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { clusterMapData } from '../data/warehouseData.js';
import { translations } from '../data/translations.js';

export class MapRenderer {
  constructor(containerId, getActiveCluster, getLang) {
    this.containerId = containerId;
    this.getActiveCluster = getActiveCluster;
    this.getLang = getLang;
    this.map = null;
    this.markersLayer = null;
    this.activeFilter = 'all'; // 'all' | 'mandi' | 'demand' | 'warehouse'
  }

  init() {
    const container = document.getElementById(this.containerId);
    if (!container) return;

    this.renderSkeleton(container);
    this.initLeaflet();
    this.renderData();
    this.bindTransportAdvisorEvents();
  }

  update() {
    this.updateTexts();
  }

  renderSkeleton(container) {
    const lang = this.getLang();

    container.innerHTML = `
      <div class="map-section-header">
        <div class="map-title-wrap">
          <span class="map-badge" id="map-section-badge">🗺️ ${lang === 'hi' ? 'राष्ट्रीय मंडी, टर्मिनल व लॉजिस्टिक्स मानचित्र' : 'National Mandi, Terminal & Logistics Map'}</span>
          <h2 class="section-heading" id="map-section-heading">${lang === 'hi' ? 'एपीएमसी मंडियां, उपभोक्ता शहर व वेयरहाउस लोकेटर' : 'APMC Mandis, Consumer Terminals & Cold Storage'}</h2>
          <p class="section-desc" id="map-section-desc">${lang === 'hi' ? 'अपने निकटतम मंडी भाव देखें या उच्च मांग वाले महानगरों में माल भेजकर अतिरिक्त मुनाफा कमाने हेतु माल ढुलाई व भाड़ा तुलना करें।' : 'Track local APMC gate arrivals or calculate logistics arbitrage by shipping to high-demand consumer metros.'}</p>
        </div>

        <!-- Filter Buttons (Groww / Zerodha Clean Segmented Control) -->
        <div class="map-filters-row">
          <button type="button" class="btn-map-filter ${this.activeFilter === 'all' ? 'active' : ''}" data-filter="all">
            📍 <span class="filter-lbl" data-filter-label="all">${lang === 'hi' ? 'सभी स्थान (All)' : 'All Locations'}</span>
          </button>
          <button type="button" class="btn-map-filter ${this.activeFilter === 'mandi' ? 'active' : ''}" data-filter="mandi">
            🏛️ <span class="filter-lbl" data-filter-label="mandi">${lang === 'hi' ? 'प्रमुख मंडियां (APMC Mandis)' : 'APMC Mandis'}</span>
          </button>
          <button type="button" class="btn-map-filter ${this.activeFilter === 'demand' ? 'active' : ''}" data-filter="demand">
            🔥 <span class="filter-lbl" data-filter-label="demand">${lang === 'hi' ? 'उपभोक्ता शहर (Metro Demand)' : 'High-Demand Metros'}</span>
          </button>
          <button type="button" class="btn-map-filter ${this.activeFilter === 'warehouse' ? 'active' : ''}" data-filter="warehouse">
            🏬 <span class="filter-lbl" data-filter-label="warehouse">${lang === 'hi' ? 'कोल्ड स्टोरेज व साइलो' : 'Cold Stores & Silos'}</span>
          </button>
        </div>
      </div>

      <!-- Main Map Grid -->
      <div class="map-content-grid">
        <!-- Leaflet Map Container -->
        <div class="map-canvas-wrap glass-panel">
          <div id="leaflet-map-canvas" class="leaflet-map-canvas"></div>
          
          <div class="map-legend-overlay">
            <div class="legend-item"><span class="legend-dot dot-demand"></span><span id="map-legend-demand">${lang === 'hi' ? 'उपभोक्ता मांग केंद्र' : 'Consumer Metro'}</span></div>
            <div class="legend-item"><span class="legend-dot dot-mandi"></span><span id="map-legend-mandi">${lang === 'hi' ? 'एपीएमसी मंडी' : 'APMC Mandi'}</span></div>
            <div class="legend-item"><span class="legend-dot dot-warehouse"></span><span id="map-legend-warehouse">${lang === 'hi' ? 'कोल्ड स्टोरेज / साइलो' : 'Cold Storage / Silo'}</span></div>
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
              <h4 id="tr-title">${lang === 'hi' ? 'एआई माल ढुलाई व अंतर-मंडी मुनाफा कैलकुलेटर' : 'AI Freight & Inter-Market Arbitrage Calculator'}</h4>
              <p id="tr-subtitle">${lang === 'hi' ? 'स्थानीय मंडी में बेचने बनाम बड़े शहर भेजने पर शुद्ध लाभ का विश्लेषण' : 'Compare local mandi net returns vs shipping produce to high-demand consumer metros'}</p>
            </div>
          </div>
        </div>

        <div class="transport-advisor-body">
          <div class="tr-controls-row">
            <div class="tr-control-group">
              <label id="tr-lbl-dest">${lang === 'hi' ? '1. गंतव्य महानगर चुनें' : '1. Target Destination Metro'}</label>
              <select id="tr-destination-select" class="tr-select"></select>
            </div>
            <div class="tr-control-group">
              <label id="tr-lbl-crop">${lang === 'hi' ? '2. फसल चुनें' : '2. Select Crop'}</label>
              <select id="tr-crop-select" class="tr-select"></select>
            </div>
            <div class="tr-control-group">
              <label id="tr-lbl-qty">${lang === 'hi' ? '3. मात्रा (क्विंटल)' : '3. Quantity (Quintals)'}</label>
              <input type="number" id="tr-qty-input" class="tr-input" value="20" min="1" max="500" />
            </div>
          </div>

          <div class="tr-results-card" id="tr-results-container">
            <!-- Dynamically populated by updateTransportCalculation() -->
          </div>
        </div>
      </div>
    `;

    // Filter clicks
    const filterButtons = container.querySelectorAll('.btn-map-filter');
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeFilter = btn.getAttribute('data-filter');
        this.renderData();
      });
    });
  }

  updateTexts() {
    const lang = this.getLang();
    const badge = document.getElementById('map-section-badge');
    const heading = document.getElementById('map-section-heading');
    const desc = document.getElementById('map-section-desc');

    if (badge) badge.textContent = `🗺️ ${lang === 'hi' ? 'राष्ट्रीय मंडी, टर्मिनल व लॉजिस्टिक्स मानचित्र' : 'National Mandi, Terminal & Logistics Map'}`;
    if (heading) heading.textContent = lang === 'hi' ? 'एपीएमसी मंडियां, उपभोक्ता शहर व वेयरहाउस लोकेटर' : 'APMC Mandis, Consumer Terminals & Cold Storage';
    if (desc) desc.textContent = lang === 'hi' ? 'अपने निकटतम मंडी भाव देखें या उच्च मांग वाले महानगरों में माल भेजकर अतिरिक्त मुनाफा कमाने हेतु माल ढुलाई व भाड़ा तुलना करें।' : 'Track local APMC gate arrivals or calculate logistics arbitrage by shipping to high-demand consumer metros.';

    // Update filter button labels
    const filterLabels = {
      all: lang === 'hi' ? 'सभी स्थान' : 'All Locations',
      mandi: lang === 'hi' ? 'प्रमुख मंडियां' : 'APMC Mandis',
      demand: lang === 'hi' ? 'उच्च मांग वाले शहर' : 'High-Demand Metros',
      warehouse: lang === 'hi' ? 'कोल्ड स्टोरेज व साइलो' : 'Cold Stores & Silos'
    };

    Object.keys(filterLabels).forEach(key => {
      const el = document.querySelector(`[data-filter-label="${key}"]`);
      if (el) el.textContent = filterLabels[key];
    });

    const legDemand = document.getElementById('map-legend-demand');
    const legMandi = document.getElementById('map-legend-mandi');
    const legWh = document.getElementById('map-legend-warehouse');

    if (legDemand) legDemand.textContent = lang === 'hi' ? 'उपभोक्ता मांग केंद्र' : 'Consumer Metro';
    if (legMandi) legMandi.textContent = lang === 'hi' ? 'एपीएमसी मंडी' : 'APMC Mandi';
    if (legWh) legWh.textContent = lang === 'hi' ? 'कोल्ड स्टोरेज / साइलो' : 'Cold Storage / Silo';

    const trTitle = document.getElementById('tr-title');
    const trSub = document.getElementById('tr-subtitle');
    const trLblDest = document.getElementById('tr-lbl-dest');
    const trLblCrop = document.getElementById('tr-lbl-crop');
    const trLblQty = document.getElementById('tr-lbl-qty');

    if (trTitle) trTitle.textContent = lang === 'hi' ? 'एआई माल ढुलाई व अंतर-मंडी मुनाफा कैलकुलेटर' : 'AI Freight & Inter-Market Arbitrage Calculator';
    if (trSub) trSub.textContent = lang === 'hi' ? 'स्थानीय मंडी में बेचने बनाम बड़े शहर भेजने पर शुद्ध लाभ का विश्लेषण' : 'Compare local mandi net returns vs shipping produce to high-demand consumer metros';
    if (trLblDest) trLblDest.textContent = lang === 'hi' ? '1. गंतव्य महानगर चुनें' : '1. Target Destination Metro';
    if (trLblCrop) trLblCrop.textContent = lang === 'hi' ? '2. फसल चुनें' : '2. Select Crop';
    if (trLblQty) trLblQty.textContent = lang === 'hi' ? '3. मात्रा (क्विंटल)' : '3. Quantity (Quintals)';

    this.renderData();
  }

  initLeaflet() {
    const mapEl = document.getElementById('leaflet-map-canvas');
    if (!mapEl) return;

    if (this.map) {
      this.map.remove();
      this.map = null;
    }

    const cluster = this.getActiveCluster();
    const data = clusterMapData[cluster.id] || clusterMapData.nashik_onion_belt;

    this.map = L.map('leaflet-map-canvas', {
      center: data.center,
      zoom: data.zoom,
      zoomControl: true,
      scrollWheelZoom: false
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap contributors | KisanSetu Agri Terminal'
    }).addTo(this.map);

    this.markersLayer = L.layerGroup().addTo(this.map);
  }

  renderData() {
    if (!this.map || !this.markersLayer) {
      this.initLeaflet();
      if (!this.map) return;
    }

    const cluster = this.getActiveCluster();
    const lang = this.getLang();
    const data = clusterMapData[cluster.id] || clusterMapData.nashik_onion_belt;

    this.markersLayer.clearLayers();

    // Center map view
    this.map.setView(data.center, data.zoom);
    this.map.invalidateSize();

    const itemsToDisplay = [];

    // Custom Icon Creators
    const createCustomIcon = (emoji, bgClass) => {
      return L.divIcon({
        className: 'custom-map-marker',
        html: `<div class="marker-pin ${bgClass}"><span>${emoji}</span></div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -36]
      });
    };

    // 1. Add Demand Hotspots
    if (this.activeFilter === 'all' || this.activeFilter === 'demand') {
      data.demandHotspots.forEach(item => {
        const marker = L.marker([item.lat, item.lng], {
          icon: createCustomIcon('🔥', 'marker-demand')
        });

        const title = lang === 'hi' ? item.nameHi : item.nameEn;
        const crop = lang === 'hi' ? item.cropHi : item.cropEn;
        const transit = lang === 'hi' ? item.transitHoursHi : item.transitHours;
        const note = lang === 'hi' ? item.noteHi : item.noteEn;
        const rate = (lang === 'hi' && item.willingRateHi) ? item.willingRateHi : item.willingRate;
        const vehicle = lang === 'hi' ? (item.transportAdvice?.vehicleHi || 'छोटा हाथी / लॉरी') : (item.transportAdvice?.vehicleEn || 'Mini-Truck / Lorry');
        const bus = lang === 'hi' ? (item.transportAdvice?.busOptionHi || 'बस कार्गो: ₹45/क्रेट') : (item.transportAdvice?.busOptionEn || 'Bus Cargo: ₹45/crate');
        const netGain = lang === 'hi' ? (item.transportAdvice?.netProfitGainHi || 'अधिक शुद्ध मुनाफा') : (item.transportAdvice?.netProfitGain || 'Extra net profit');

        marker.bindPopup(`
          <div class="map-popup-card">
            <span class="popup-badge badge-demand">${lang === 'hi' ? 'उच्च मांग केंद्र' : 'High Demand Metro'}</span>
            <h4 class="popup-title">${title}</h4>
            <div class="popup-detail"><strong>${lang === 'hi' ? 'मांग की जाने वाली फसल' : 'In-Demand Crop'}:</strong> ${crop}</div>
            <div class="popup-detail"><strong>${lang === 'hi' ? 'स्वीकार्य दर' : 'Willing Rate'}:</strong> <span class="highlight-price">${rate}</span></div>
            <div class="popup-detail"><strong>${lang === 'hi' ? 'दूरी' : 'Distance'}:</strong> ${item.distanceKm} km (${transit})</div>
            <div class="popup-transport-box">
              <div class="tr-pop-heading">🚚 ${lang === 'hi' ? 'एआई वाहन व ट्रांसपोर्ट विकल्प:' : 'AI Freight Guidance:'}</div>
              <div class="tr-pop-row">🛺 <strong>${lang === 'hi' ? 'वाहन' : 'Vehicle'}:</strong> ${vehicle}</div>
              <div class="tr-pop-row">🚌 <strong>${lang === 'hi' ? 'छोटा लॉट' : 'Small Lot'}:</strong> ${bus}</div>
              <div class="tr-pop-profit">✨ <strong>${lang === 'hi' ? 'अतिरिक्त लाभ' : 'Gain'}:</strong> ${netGain}</div>
            </div>
            <p class="popup-note">${note}</p>
          </div>
        `);

        marker.addTo(this.markersLayer);
        itemsToDisplay.push({ type: 'demand', data: item, marker });
      });
    }

    // 2. Add Mandis
    if (this.activeFilter === 'all' || this.activeFilter === 'mandi') {
      data.mandis.forEach(item => {
        const marker = L.marker([item.lat, item.lng], {
          icon: createCustomIcon('🏛️', 'marker-mandi')
        });

        const title = lang === 'hi' ? item.nameHi : item.nameEn;
        const arrivals = lang === 'hi' ? item.todayArrivalsHi : item.todayArrivals;
        const queue = lang === 'hi' ? item.gateQueueTimeHi : item.gateQueueTime;

        marker.bindPopup(`
          <div class="map-popup-card">
            <span class="popup-badge badge-mandi">${lang === 'hi' ? 'सक्रिय मंडी' : 'Active APMC Mandi'}</span>
            <h4 class="popup-title">${title}</h4>
            <div class="popup-detail"><strong>${lang === 'hi' ? 'आज की आवक' : 'Today Arrivals'}:</strong> ${arrivals}</div>
            <div class="popup-detail"><strong>${lang === 'hi' ? 'मॉडल भाव' : 'Modal Price'}:</strong> <span class="highlight-price">${item.modalPrice}</span></div>
            <div class="popup-detail"><strong>${lang === 'hi' ? 'गेट प्रतीक्षा समय' : 'Gate Wait'}:</strong> ${queue}</div>
            <div class="popup-detail"><strong>${lang === 'hi' ? 'संपर्क' : 'Contact'}:</strong> ${item.contact}</div>
          </div>
        `);

        marker.addTo(this.markersLayer);
        itemsToDisplay.push({ type: 'mandi', data: item, marker });
      });
    }

    // 3. Add Warehouses / Cold Stores
    if (this.activeFilter === 'all' || this.activeFilter === 'warehouse') {
      data.warehouses.forEach(item => {
        const marker = L.marker([item.lat, item.lng], {
          icon: createCustomIcon('🏬', 'marker-warehouse')
        });

        const title = lang === 'hi' ? item.nameHi : item.nameEn;
        const available = lang === 'hi' ? item.availableSpaceHi : item.availableSpace;
        const subsidy = lang === 'hi' ? item.subsidyInfoHi : item.subsidyInfo;

        marker.bindPopup(`
          <div class="map-popup-card">
            <span class="popup-badge badge-warehouse">${lang === 'hi' ? 'सरकारी मान्यता प्राप्त कोल्ड स्टोर' : 'Accredited Storage'}</span>
            <h4 class="popup-title">${title}</h4>
            <div class="popup-detail"><strong>${lang === 'hi' ? 'कुल क्षमता' : 'Capacity'}:</strong> ${item.capacity}</div>
            <div class="popup-detail"><strong>${lang === 'hi' ? 'उपलब्ध खाली जगह' : 'Vacant Space'}:</strong> <span class="highlight-vacant">${available}</span></div>
            <div class="popup-detail"><strong>${lang === 'hi' ? 'मासिक शुल्क' : 'Storage Fee'}:</strong> ${item.ratePerMonth}</div>
            <div class="popup-detail"><strong>${lang === 'hi' ? 'ऋण सुविधा' : 'Pledge Loan'}:</strong> ${item.eNWR_available ? '✅ e-NWR Loan Available' : '❌ No'}</div>
            <p class="popup-note">${subsidy}</p>
          </div>
        `);

        marker.addTo(this.markersLayer);
        itemsToDisplay.push({ type: 'warehouse', data: item, marker });
      });
    }

    this.renderSidebar(itemsToDisplay, lang);
    this.renderMetrics(data, lang);
    this.populateTransportAdvisorDropdowns(data, cluster, lang);
  }

  renderSidebar(items, lang) {
    const sidebar = document.getElementById('map-locations-sidebar');
    if (!sidebar) return;

    if (items.length === 0) {
      sidebar.innerHTML = `
        <div class="sidebar-empty">
          <p>${lang === 'hi' ? 'इस श्रेणी में कोई स्थान नहीं मिला।' : 'No locations found for this filter.'}</p>
        </div>
      `;
      return;
    }

    sidebar.innerHTML = `
      <div class="sidebar-header">
        <h3>${lang === 'hi' ? 'स्थान व मंडी सूची' : 'Market Locations'} (${items.length})</h3>
        <span class="sidebar-hint">${lang === 'hi' ? 'क्लिक करके मैप पर देखें' : 'Click to inspect on map'}</span>
      </div>
      <div class="sidebar-items-scroll">
        ${items.map((it, idx) => {
          const d = it.data;
          const title = lang === 'hi' ? d.nameHi : d.nameEn;

          if (it.type === 'demand') {
            const crop = lang === 'hi' ? d.cropHi : d.cropEn;
            const rate = (lang === 'hi' && d.willingRateHi) ? d.willingRateHi : d.willingRate;
            const level = lang === 'hi' ? d.demandLevelHi : d.demandLevel;
            return `
              <div class="sidebar-item-card card-demand" data-item-index="${idx}">
                <div class="item-top">
                  <span class="item-pill pill-demand">🔥 ${level}</span>
                  <span class="item-dist">${d.distanceKm} km</span>
                </div>
                <h4 class="item-title">${title}</h4>
                <div class="item-sub">${crop} • <strong class="text-gain">${rate}</strong></div>
              </div>
            `;
          } else if (it.type === 'mandi') {
            const arrivals = lang === 'hi' ? d.todayArrivalsHi : d.todayArrivals;
            const distStr = d.distanceKm ? `${d.distanceKm} km` : (lang === 'hi' ? 'स्थानीय यार्ड' : 'Local Yard');
            return `
              <div class="sidebar-item-card card-mandi" data-item-index="${idx}">
                <div class="item-top">
                  <span class="item-pill pill-mandi">🏛️ APMC</span>
                  <span class="item-price">${d.modalPrice}</span>
                </div>
                <h4 class="item-title">${title}</h4>
                <div class="item-sub">${arrivals} • ${distStr}</div>
              </div>
            `;
          } else {
            const avail = lang === 'hi' ? d.availableSpaceHi : d.availableSpace;
            const rateStr = d.ratePerMonth || (lang === 'hi' ? '₹15/बोरी/माह' : '₹15/bag/mo');
            const distStr = d.distanceKm ? `${d.distanceKm} km` : (lang === 'hi' ? 'निकटतम कोल्ड स्टोर' : 'Local Cold Storage');
            return `
              <div class="sidebar-item-card card-warehouse" data-item-index="${idx}">
                <div class="item-top">
                  <span class="item-pill pill-wh">🏬 ${lang === 'hi' ? 'कोल्ड स्टोर' : 'Cold Store'}</span>
                  <span class="item-vacant">${avail}</span>
                </div>
                <h4 class="item-title">${title}</h4>
                <div class="item-sub">${rateStr} • ${distStr}</div>
              </div>
            `;
          }
        }).join('')}
      </div>
    `;

    // Bind sidebar clicks to open popup on map
    const cards = sidebar.querySelectorAll('.sidebar-item-card');
    cards.forEach(c => {
      c.addEventListener('click', () => {
        const idx = parseInt(c.getAttribute('data-item-index'), 10);
        const targetItem = items[idx];
        if (targetItem && targetItem.marker) {
          cards.forEach(x => x.classList.remove('selected'));
          c.classList.add('selected');

          this.map.flyTo(targetItem.marker.getLatLng(), 12, { duration: 1.2 });
          setTimeout(() => {
            targetItem.marker.openPopup();
          }, 1250);
        }
      });
    });
  }

  renderMetrics(data, lang) {
    const bar = document.getElementById('map-metrics-bar');
    if (!bar) return;

    const totalVacantMT = data.warehouses.reduce((acc, w) => {
      const match = w.availableSpace.match(/(\d[\d,]*)\s*MT/);
      return acc + (match ? parseInt(match[1].replace(/,/g, ''), 10) : 0);
    }, 0);

    const nearestDemand = data.demandHotspots[0];
    const topMandi = data.mandis[0];

    bar.innerHTML = `
      <div class="metric-card glass-panel">
        <div class="m-icon">🏬</div>
        <div class="m-body">
          <div class="m-lbl">${lang === 'hi' ? 'उपलब्ध खाली भंडारण' : 'Total Vacant Storage'}</div>
          <div class="m-val">${totalVacantMT.toLocaleString('en-IN')} MT</div>
          <div class="m-sub">${data.warehouses.length} ${lang === 'hi' ? 'मान्यता प्राप्त कोल्ड स्टोर्स' : 'Accredited Facilities'}</div>
        </div>
      </div>

      <div class="metric-card glass-panel">
        <div class="m-icon">🔥</div>
        <div class="m-body">
          <div class="m-lbl">${lang === 'hi' ? 'उच्चतम मांग वाला गंतव्य शहर' : 'Top High-Demand Metro'}</div>
          <div class="m-val">${lang === 'hi' ? nearestDemand.nameHi.split(' ')[0] : nearestDemand.nameEn.split(' ')[0]}</div>
          <div class="m-sub">${nearestDemand.distanceKm} km • ${nearestDemand.willingRate}</div>
        </div>
      </div>

      <div class="metric-card glass-panel">
        <div class="m-icon">🏛️</div>
        <div class="m-body">
          <div class="m-lbl">${lang === 'hi' ? 'सक्रिय मुख्य मंडी' : 'Primary APMC Terminal'}</div>
          <div class="m-val">${lang === 'hi' ? topMandi.nameHi.split(' ')[0] : topMandi.nameEn.split(' ')[0]}</div>
          <div class="m-sub">${topMandi.modalPrice} • ${topMandi.todayArrivals}</div>
        </div>
      </div>
    `;
  }

  populateTransportAdvisorDropdowns(data, cluster, lang) {
    const destSelect = document.getElementById('tr-destination-select');
    const cropSelect = document.getElementById('tr-crop-select');

    if (destSelect) {
      destSelect.innerHTML = data.demandHotspots.map(d => `
        <option value="${d.id}" data-dist="${d.distanceKm}" data-freight="${d.transportAdvice?.freightRate || '₹80/Qtl'}">
          ${lang === 'hi' ? d.nameHi : d.nameEn} (${d.distanceKm} km)
        </option>
      `).join('');
    }

    if (cropSelect) {
      cropSelect.innerHTML = cluster.crops.map(c => `
        <option value="${c.id}" data-mandi-price="${c.mandiPriceKg}" data-retail-price="${c.retailPriceKg}">
          ${lang === 'hi' ? c.nameHi : c.nameEn} (${lang === 'hi' ? `मंडी भाव: ₹${c.mandiPriceKg}/किग्रा` : `Mandi Rate: ₹${c.mandiPriceKg}/kg`})
        </option>
      `).join('');
    }

    this.updateTransportCalculation();
  }

  bindTransportAdvisorEvents() {
    const destSelect = document.getElementById('tr-destination-select');
    const cropSelect = document.getElementById('tr-crop-select');
    const qtyInput = document.getElementById('tr-qty-input');

    if (destSelect) destSelect.addEventListener('change', () => this.updateTransportCalculation());
    if (cropSelect) cropSelect.addEventListener('change', () => this.updateTransportCalculation());
    if (qtyInput) qtyInput.addEventListener('input', () => this.updateTransportCalculation());
  }

  updateTransportCalculation() {
    const resBox = document.getElementById('tr-results-container');
    const destSelect = document.getElementById('tr-destination-select');
    const cropSelect = document.getElementById('tr-crop-select');
    const qtyInput = document.getElementById('tr-qty-input');

    if (!resBox || !destSelect || !cropSelect || !qtyInput) return;

    const lang = this.getLang();
    const cluster = this.getActiveCluster();
    const data = clusterMapData[cluster.id] || clusterMapData.nashik_onion_belt;

    const destId = destSelect.value;
    const destObj = data.demandHotspots.find(d => d.id === destId) || data.demandHotspots[0];

    const cropId = cropSelect.value;
    const cropObj = cluster.crops.find(c => c.id === cropId) || cluster.crops[0];

    const qtyQuintals = Math.max(1, parseInt(qtyInput.value, 10) || 1);
    const qtyKg = qtyQuintals * 100;

    // Financial Calculation
    const localMandiGross = qtyKg * cropObj.mandiPriceKg;
    const destExpectedKg = (cropObj.mandiPriceKg * 1.55); // estimated destination wholesale realization
    const destGross = qtyKg * destExpectedKg;

    // Freight estimate based on distance
    const dist = destObj.distanceKm || 150;
    const freightRatePerQtl = Math.round(dist * 0.45 + 25); // realistic freight per quintal
    const totalFreightCost = qtyQuintals * freightRatePerQtl;
    const loadingUnloadingFee = qtyQuintals * 20;
    const totalLogisticsCost = totalFreightCost + loadingUnloadingFee;

    const netProfitBeyondLocal = destGross - totalLogisticsCost - localMandiGross;
    const netProfitGainPerKg = (netProfitBeyondLocal / qtyKg).toFixed(1);

    // Vehicle recommendation logic
    let vehicleName = "";
    let vehicleSub = "";
    if (qtyQuintals <= 15) {
      vehicleName = lang === 'hi' ? 'छोटा हाथी (टाटा ऐस / बोलेरो पिकअप)' : 'Mini-Truck (Tata Ace / Bolero Pickup)';
      vehicleSub = lang === 'hi' ? '1-1.5 टन क्षमता, तेज रवानगी' : '1–1.5 Ton Capacity, Agile city transit';
    } else if (qtyQuintals <= 45) {
      vehicleName = lang === 'hi' ? '6-पहिया आयशर कैंटर' : '6-Wheeler Medium Truck (Eicher Pro)';
      vehicleSub = lang === 'hi' ? '3-4.5 टन क्षमता, क्रेट पैकिंग के साथ सुरक्षित' : '3–4.5 Ton Capacity, Ideal for crate packing';
    } else {
      vehicleName = lang === 'hi' ? '10-पहिया भारी मालवाहक लॉरी' : 'Heavy Commercial Truck (10-Wheeler)';
      vehicleSub = lang === 'hi' ? '9-12 टन क्षमता, न्यूनतम प्रति किलो भाड़ा' : '9–12 Ton Capacity, Lowest freight per kg';
    }

    resBox.innerHTML = `
      <div class="tr-grid-output">
        <div class="tr-col-summary">
          <div class="tr-summary-chip">
            <span>🛣️ ${dist} km</span>
            <span>⏱️ ${destObj.transitHours || '4-5 hrs'}</span>
          </div>

          <div class="tr-profit-headline">
            <span class="tr-ph-lbl">${lang === 'hi' ? 'अतिरिक्त शुद्ध लाभ (भाड़ा काटकर)' : 'Net Extra Profit (After Freight)'}:</span>
            <div class="tr-ph-val">+₹${Math.round(netProfitBeyondLocal).toLocaleString('en-IN')}</div>
            <div class="tr-ph-perkg">(+₹${netProfitGainPerKg}/kg ${lang === 'hi' ? 'स्थानीय मंडी से अधिक' : 'over local mandi'})</div>
          </div>

          <div class="tr-breakdown-list">
            <div class="tr-b-item">
              <span>${lang === 'hi' ? 'स्थानीय मंडी में बिक्री मूल्य' : 'Local Mandi Value'}:</span>
              <strong>₹${Math.round(localMandiGross).toLocaleString('en-IN')}</strong>
            </div>
            <div class="tr-b-item">
              <span>${lang === 'hi' ? 'गंतव्य शहर में अनुमानित बिक्री' : 'Target Metro Revenue'}:</span>
              <strong class="text-green">₹${Math.round(destGross).toLocaleString('en-IN')}</strong>
            </div>
            <div class="tr-b-item">
              <span>${lang === 'hi' ? 'कुल भाड़ा व लोडिंग लागत' : 'Total Freight & Handling'}:</span>
              <strong class="text-red">-₹${Math.round(totalLogisticsCost).toLocaleString('en-IN')} (₹${freightRatePerQtl}/Qtl)</strong>
            </div>
          </div>
        </div>

        <div class="tr-col-vehicle">
          <div class="tr-vehicle-card">
            <div class="tr-v-icon">🛺</div>
            <div class="tr-v-content">
              <span class="tr-v-badge">${lang === 'hi' ? 'अनुशंसित किफायती वाहन' : 'Recommended Optimal Vehicle'}</span>
              <h4 class="tr-v-name">${vehicleName}</h4>
              <p class="tr-v-desc">${vehicleSub}</p>
            </div>
          </div>

          <div class="tr-small-lot-tip">
            <span class="tip-icon">🚌</span>
            <div class="tip-text">
              <strong>${lang === 'hi' ? 'कम मात्रा (1-5 क्रेट) के लिए विकल्प:' : 'Express Option (1-5 Crates):'}</strong>
              <span>${lang === 'hi' ? 'दैनिक अंतर-राज्यीय बस कार्गो से ₹45/क्रेट में उसी दिन डिलीवरी संभव।' : 'Daily express bus cargo courier at ₹45/crate for direct same-day delivery.'}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
