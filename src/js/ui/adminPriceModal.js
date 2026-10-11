// Team Admin Mandi Price Update Console
// Allows your team to update backend mandi prices, arrivals, and recommendations

import { mandiBackendService } from '../services/mandiBackendService.js';
import { cacheManager } from '../agents/cacheManager.js';

export class AdminPriceModal {
  constructor(getLang, onPriceSaved) {
    this.getLang = getLang;
    this.onPriceSaved = onPriceSaved;
    this.service = mandiBackendService;
  }

  open() {
    this.render();
  }

  render() {
    const existing = document.getElementById('admin-price-modal-overlay');
    if (existing) existing.remove();

    const lang = this.getLang();
    const prices = this.service.getAllPrices();

    const overlay = document.createElement('div');
    overlay.id = 'admin-price-modal-overlay';
    overlay.className = 'f-auth-modal-overlay';

    overlay.innerHTML = `
      <div class="f-auth-card glass-panel" style="max-width: 580px;">
        <div class="f-auth-header">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span style="font-size: 22px;">🛠️</span>
            <div>
              <h3 class="f-auth-name">${lang === 'hi' ? 'टीम मंडी भाव अपडेट कंसोल' : 'Team Mandi Backend Price Console'}</h3>
              <span class="f-auth-phone">${lang === 'hi' ? 'बैकएंड में संग्रहीत भाव को सीधे अपडेट करें' : 'Update backend stored prices & broadcasts instantly'}</span>
            </div>
          </div>
          <button type="button" class="f-auth-close-btn" id="btn-close-admin-modal">&times;</button>
        </div>

        <div style="padding: 20px;">
          <div class="f-form-field" style="margin-bottom: 14px;">
            <label>${lang === 'hi' ? 'फसल चुनें जिसे अपडेट करना है:' : 'Select Commodity to Update:'}</label>
            <select id="sel-admin-crop" class="f-form-input">
              ${prices.map(p => `
                <option value="${p.id}">${p.nameEn} — Mandi: ₹${p.mandiPriceKg}/kg | Retail: ₹${p.retailPriceKg}/kg</option>
              `).join('')}
            </select>
          </div>

          <form id="form-admin-update-price" style="display: flex; flex-direction: column; gap: 14px;">
            <div class="f-form-row">
              <div class="f-form-field">
                <label>${lang === 'hi' ? 'नया मंडी मॉडल भाव (₹ / किग्रा)' : 'New Mandi Modal Rate (₹ / kg)'}</label>
                <input type="number" step="0.1" id="inp-adm-mandi-rate" class="f-form-input" required />
              </div>
              <div class="f-form-field">
                <label>${lang === 'hi' ? 'नया शहरी खुदरा भाव (₹ / किग्रा)' : 'New City Retail Rate (₹ / kg)'}</label>
                <input type="number" step="0.5" id="inp-adm-retail-rate" class="f-form-input" required />
              </div>
            </div>

            <div class="f-form-row">
              <div class="f-form-field">
                <label>${lang === 'hi' ? 'आज की कुल आवक (क्विंटल)' : 'Today Arrivals (Quintals)'}</label>
                <input type="number" id="inp-adm-arrivals" class="f-form-input" required />
              </div>
              <div class="f-form-field">
                <label>${lang === 'hi' ? 'एआई व्यापार सलाह' : 'Trading Action Recommendation'}</label>
                <select id="inp-adm-rec" class="f-form-input">
                  <option value="HOLD">HOLD (रोककर रखें - भाव बढ़ेंगे)</option>
                  <option value="SELL">SELL (तुरंत बेचें)</option>
                  <option value="FAIR">FAIR (उचित मूल्य)</option>
                </select>
              </div>
            </div>

            <div class="f-form-field">
              <label>${lang === 'hi' ? 'अपडेटकर्ता टीम का नाम' : 'Updated by (Desk / Lead Name)'}</label>
              <input type="text" id="inp-adm-author" value="Team Agri-Desk Lead" class="f-form-input" />
            </div>

            <div style="background: var(--bg-app); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 10px; font-size: 12px; color: var(--text-muted);">
              ⚡ <strong>${lang === 'hi' ? 'तात्कालिक सिंक' : 'Instant Reactive Sync'}:</strong> ${lang === 'hi' ? 'सेव करते ही मार्केट वॉच कार्ड, टिकर टेप, वॉइस असिस्टेंट और मैप में नया भाव तुरंत लागू हो जाएगा।' : 'Saving immediately broadcasts to Market Watch cards, Ticker Tape, Voice Assistant, and Map.'}
            </div>

            <button type="submit" class="f-btn-submit-enroll">
              💾 ${lang === 'hi' ? 'भाव सहेजें व बैकएंड में सिंक करें' : 'Save & Broadcast Price to Backend'}
            </button>
          </form>
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    this.bindEvents(overlay, prices);
  }

  bindEvents(overlay, prices) {
    overlay.querySelector('#btn-close-admin-modal')?.addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });

    const cropSelect = overlay.querySelector('#sel-admin-crop');
    const mandiInput = overlay.querySelector('#inp-adm-mandi-rate');
    const retailInput = overlay.querySelector('#inp-adm-retail-rate');
    const arrivalsInput = overlay.querySelector('#inp-adm-arrivals');
    const recSelect = overlay.querySelector('#inp-adm-rec');

    const fillInputs = (cropId) => {
      const p = prices.find(x => x.id === cropId) || prices[0];
      if (p) {
        if (mandiInput) mandiInput.value = p.mandiPriceKg;
        if (retailInput) retailInput.value = p.retailPriceKg;
        if (arrivalsInput) arrivalsInput.value = p.dailyArrivalsQuintals || 4500;
        if (recSelect) recSelect.value = p.recommendation || 'HOLD';
      }
    };

    fillInputs(cropSelect?.value);

    cropSelect?.addEventListener('change', (e) => {
      fillInputs(e.target.value);
    });

    const form = overlay.querySelector('#form-admin-update-price');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const cropId = cropSelect.value;
      const mandiKg = Number(mandiInput.value);
      const retailKg = Number(retailInput.value);
      const arrivals = Number(arrivalsInput.value);
      const rec = recSelect.value;
      const author = overlay.querySelector('#inp-adm-author')?.value || 'Admin Team';

      // 1. Update MandiBackendService
      this.service.updatePriceByTeam(cropId, {
        mandiPriceKg: mandiKg,
        retailPriceKg: retailKg,
        dailyArrivals: arrivals,
        recommendation: rec,
        status: rec === 'SELL' ? 'falling' : 'rising'
      }, author);

      // 2. Also sync to active cluster in CacheManager
      const cluster = cacheManager.getCurrentCluster();
      if (cluster) {
        const cCrop = cluster.crops.find(c => c.id === cropId);
        if (cCrop) {
          cCrop.mandiPriceKg = mandiKg;
          cCrop.mandiPriceQuintal = Math.round(mandiKg * 100);
          cCrop.retailPriceKg = retailKg;
          cCrop.retailPriceQuintal = Math.round(retailKg * 100);
          cCrop.spreadPct = Number((((cCrop.retailPriceQuintal - cCrop.mandiPriceQuintal) / cCrop.retailPriceQuintal) * 100).toFixed(1));
          cCrop.recommendation = rec;
          cCrop.status = rec === 'SELL' ? 'falling' : 'rising';
          cCrop.trend7d[cCrop.trend7d.length - 1] = mandiKg;
          cacheManager.saveCache(cacheManager.getAllClusters());
        }
      }

      overlay.remove();
      if (typeof this.onPriceSaved === 'function') {
        this.onPriceSaved(cropId, mandiKg, retailKg);
      }
    });
  }
}
