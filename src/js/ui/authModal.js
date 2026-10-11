// Farmer & Buyer Account Enrollment & Profile History Modal
// Styled with Zerodha & Groww FinTech clean aesthetics

import { authManager } from '../services/authManager.js';

export class AuthModal {
  constructor(getLang, onUserUpdated) {
    this.getLang = getLang;
    this.onUserUpdated = onUserUpdated;
    this.isOpen = false;
    this.activeTab = 'profile'; // 'profile' | 'switch' | 'history'
    this.auth = authManager;
  }

  open() {
    this.isOpen = true;
    this.render();
  }

  close() {
    this.isOpen = false;
    const modalEl = document.getElementById('auth-modal-overlay');
    if (modalEl) modalEl.remove();
  }

  render() {
    const existing = document.getElementById('auth-modal-overlay');
    if (existing) existing.remove();

    const lang = this.getLang();
    const user = this.auth.getUser();
    const history = this.auth.getHistory();
    const isFarmer = this.auth.isFarmer();

    const overlay = document.createElement('div');
    overlay.id = 'auth-modal-overlay';
    overlay.className = 'f-auth-modal-overlay';

    overlay.innerHTML = `
      <div class="f-auth-card glass-panel" role="dialog" aria-modal="true">
        <!-- Modal Header -->
        <div class="f-auth-header">
          <div class="f-auth-user-meta">
            <div class="f-user-avatar">
              ${isFarmer ? '👨‍🌾' : '🛒'}
            </div>
            <div>
              <div class="f-auth-name-row">
                <h3 class="f-auth-name">${user.name}</h3>
                <span class="f-auth-role-tag ${isFarmer ? 'role-farmer' : 'role-buyer'}">
                  ${isFarmer ? (lang === 'hi' ? 'सत्यापित किसान' : 'Verified Farmer') : (lang === 'hi' ? 'थोक खरीदार / ट्रेडर्स' : 'Wholesale Buyer')}
                </span>
              </div>
              <span class="f-auth-phone">📞 ${user.phone} • 📍 ${lang === 'hi' ? user.districtHi : user.districtEn}</span>
            </div>
          </div>
          <button type="button" class="f-auth-close-btn" id="btn-close-auth-modal">&times;</button>
        </div>

        <!-- Quick Profile & Role Switcher Bar -->
        <div class="f-auth-quick-switch-bar">
          <span class="f-switch-label">${lang === 'hi' ? 'त्वरित खाता बदलें:' : 'Quick Switch Account:'}</span>
          <div class="f-switch-actions">
            <button type="button" class="f-btn-switch-demo ${isFarmer ? 'active' : ''}" id="btn-switch-farmer">
              👨‍🌾 ${lang === 'hi' ? 'रमेश पाटिल (किसान)' : 'Ramesh (Farmer)'}
            </button>
            <button type="button" class="f-btn-switch-demo ${!isFarmer ? 'active' : ''}" id="btn-switch-buyer">
              🛒 ${lang === 'hi' ? 'वाशी ट्रेडर्स (खरीदार)' : 'Vashi Traders (Buyer)'}
            </button>
          </div>
        </div>

        <!-- Modal Body Tabs -->
        <div class="f-auth-nav-tabs">
          <button type="button" class="f-auth-tab-btn ${this.activeTab === 'profile' ? 'active' : ''}" data-tab="profile">
            👤 ${lang === 'hi' ? 'प्रोफ़ाइल विवरण' : 'Profile Overview'}
          </button>
          <button type="button" class="f-auth-tab-btn ${this.activeTab === 'history' ? 'active' : ''}" data-tab="history">
            📜 ${lang === 'hi' ? 'सहेजा गया इतिहास' : 'Saved History'}
          </button>
          <button type="button" class="f-auth-tab-btn ${this.activeTab === 'signup' ? 'active' : ''}" data-tab="signup">
            ➕ ${lang === 'hi' ? 'नया खाता नामांकन' : 'Enroll New Account'}
          </button>
        </div>

        <div class="f-auth-tab-content">
          ${this.getTabContent(user, history, isFarmer, lang)}
        </div>
      </div>
    `;

    document.body.appendChild(overlay);
    this.bindEvents(overlay);
  }

  getTabContent(user, history, isFarmer, lang) {
    if (this.activeTab === 'profile') {
      return `
        <div class="f-auth-profile-pane">
          <div class="f-profile-metrics-grid">
            <div class="f-prof-stat">
              <span class="f-prof-lbl">${isFarmer ? (lang === 'hi' ? 'कुल जोत रकबा' : 'Land Parcel') : (lang === 'hi' ? 'साप्ताहिक खरीद' : 'Weekly Volume')}</span>
              <strong class="f-prof-val">${isFarmer ? `${user.landAcreage} Acres` : user.procurementVolume}</strong>
            </div>
            <div class="f-prof-stat">
              <span class="f-prof-lbl">${lang === 'hi' ? 'मुख्य व्यापार फसलें' : 'Primary Crops'}</span>
              <strong class="f-prof-val">${isFarmer ? user.primaryCrops?.join(', ') : user.targetCrops?.join(', ')}</strong>
            </div>
            <div class="f-prof-stat">
              <span class="f-prof-lbl">${lang === 'hi' ? 'स्थान' : 'Primary Market'}</span>
              <strong class="f-prof-val">${lang === 'hi' ? user.stateHi : user.stateEn}</strong>
            </div>
          </div>

          <div class="f-prof-action-banner">
            <div class="f-banner-icon">${isFarmer ? '🌱' : '💼'}</div>
            <div class="f-banner-text">
              <strong>${isFarmer ? (lang === 'hi' ? 'किसान विशेषाधिकार सक्रिय' : 'Farmer Member Active') : (lang === 'hi' ? 'थोक खरीदार खाता सक्रिय' : 'Wholesale Buyer Active')}</strong>
              <p>${isFarmer 
                ? (lang === 'hi' ? 'आप सीधे थोक खरीदारों को अपनी फसल बिना बिचौलियों के बेच सकते हैं।' : 'You can list harvest lots directly to wholesale buyers with zero intermediary fees.')
                : (lang === 'hi' ? 'आप सीधे किसानों और एफपीओ से थोक में माल मंगा सकते हैं।' : 'Post direct procurement requests to connect directly with regional farmer lots.')}
              </p>
            </div>
          </div>
        </div>
      `;
    }

    if (this.activeTab === 'history') {
      const isHi = lang === 'hi';
      if (isFarmer) {
        const tests = history.savedSoilTests || [];
        const lots = history.myHarvestLots || [];
        return `
          <div class="f-auth-history-pane">
            <h4 class="f-hist-section-title">🧪 ${isHi ? 'सहेजी गई मिट्टी व खाद रिपोर्ट' : 'Saved Soil Diagnostic Reports'} (${tests.length})</h4>
            <div class="f-hist-list">
              ${tests.map(t => `
                <div class="f-hist-item">
                  <div class="f-hist-item-top">
                    <strong>${t.crop}</strong>
                    <span class="f-hist-time">${t.date}</span>
                  </div>
                  <div class="f-hist-item-body">
                    <span>${t.soil} • ${t.acreage} ${isHi ? 'एकड़' : 'Acres'}</span>
                    <span class="f-hist-highlight">${isHi ? `अनुशंसा: ${t.ureaBags} बोरी यूरिया + ${t.dapBags} बोरी डीएपी` : `Prescription: ${t.ureaBags} bags Urea + ${t.dapBags} bags DAP`}</span>
                  </div>
                </div>
              `).join('')}
            </div>

            <h4 class="f-hist-section-title" style="margin-top: 16px;">📦 ${isHi ? 'मेरे बिक्री हेतु उपलब्ध फसल लॉट' : 'My Listed Harvest Lots'} (${lots.length})</h4>
            <div class="f-hist-list">
              ${lots.map(l => `
                <div class="f-hist-item">
                  <div class="f-hist-item-top">
                    <strong>${l.crop} (${l.quantityQuintals} ${isHi ? 'क्विंटल' : 'Quintals'})</strong>
                    <span class="f-hist-badge-avail">${isHi ? 'सक्रिय लॉट' : 'Active Lot'}</span>
                  </div>
                  <div class="f-hist-item-body">
                    <span>${isHi ? `अपेक्षित भाव: ₹${l.expectedPriceKg}/किग्रा • स्थान: ${l.location}` : `Expected Rate: ₹${l.expectedPriceKg}/kg • Location: ${l.location}`}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      } else {
        const buys = history.buyerProcurements || [];
        return `
          <div class="f-auth-history-pane">
            <h4 class="f-hist-section-title">📋 ${isHi ? 'सक्रिय खरीद मांग आदेश' : 'Active Procurement Requirements'} (${buys.length})</h4>
            <div class="f-hist-list">
              ${buys.map(b => `
                <div class="f-hist-item">
                  <div class="f-hist-item-top">
                    <strong>${b.crop} (${b.requiredQuintals} ${isHi ? 'क्विंटल' : 'Quintals'})</strong>
                    <span class="f-hist-badge-avail">${isHi ? 'ओपन ऑर्डर' : 'Open Order'}</span>
                  </div>
                  <div class="f-hist-item-body">
                    <span>${isHi ? `ऑफर मूल्य: ₹${b.offeredPriceKg}/किग्रा • गंतव्य: ${b.destinationCity}` : `Offered Rate: ₹${b.offeredPriceKg}/kg • Destination: ${b.destinationCity}`}</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }
    }

    // Signup / New enrollment
    return `
      <form class="f-auth-signup-form" id="form-enroll-user">
        <div class="f-form-row">
          <div class="f-form-field">
            <label>${lang === 'hi' ? 'नाम या व्यावसायिक नाम' : 'Full Name or Business Name'}</label>
            <input type="text" id="inp-user-name" required placeholder="${lang === 'hi' ? 'उदा. सुरेश शर्मा' : 'e.g. Suresh Sharma'}" class="f-form-input" />
          </div>
          <div class="f-form-field">
            <label>${lang === 'hi' ? 'मोबाइल नंबर (ओटीपी सत्यापन)' : 'Mobile Number (WhatsApp)'}</label>
            <input type="tel" id="inp-user-phone" required placeholder="+91 98XXX XXXXX" class="f-form-input" />
          </div>
        </div>

        <div class="f-form-row">
          <div class="f-form-field">
            <label>${lang === 'hi' ? 'खाता प्रकार (भूमिका)' : 'Account Role'}</label>
            <select id="inp-user-role" class="f-form-input">
              <option value="farmer">👨‍🌾 ${lang === 'hi' ? 'किसान (फसल उत्पादक)' : 'Farmer (Crop Producer)'}</option>
              <option value="buyer">🛒 ${lang === 'hi' ? 'थोक खरीदार / आढ़ती' : 'Wholesale Buyer / Trader'}</option>
            </select>
          </div>
          <div class="f-form-field">
            <label>${lang === 'hi' ? 'जिला व राज्य' : 'District & State'}</label>
            <input type="text" id="inp-user-district" placeholder="${lang === 'hi' ? 'उदा. नासिक, महाराष्ट्र' : 'e.g. Nashik, Maharashtra'}" class="f-form-input" />
          </div>
        </div>

        <button type="submit" class="f-btn-submit-enroll">
          ✅ ${lang === 'hi' ? 'नामांकन पूर्ण करें' : 'Complete Enrollment & Sign In'}
        </button>
      </form>
    `;
  }

  bindEvents(overlay) {
    const closeBtn = overlay.querySelector('#btn-close-auth-modal');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) this.close();
    });

    // Quick switch demo buttons
    const btnFarmer = overlay.querySelector('#btn-switch-farmer');
    const btnBuyer = overlay.querySelector('#btn-switch-buyer');

    if (btnFarmer) {
      btnFarmer.addEventListener('click', () => {
        this.auth.switchProfile('farmer');
        if (typeof this.onUserUpdated === 'function') this.onUserUpdated(this.auth.getUser());
        this.render();
      });
    }

    if (btnBuyer) {
      btnBuyer.addEventListener('click', () => {
        this.auth.switchProfile('buyer');
        if (typeof this.onUserUpdated === 'function') this.onUserUpdated(this.auth.getUser());
        this.render();
      });
    }

    // Tabs
    const tabBtns = overlay.querySelectorAll('.f-auth-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeTab = btn.getAttribute('data-tab');
        this.render();
      });
    });

    // Custom form submit
    const enrollForm = overlay.querySelector('#form-enroll-user');
    if (enrollForm) {
      enrollForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = overlay.querySelector('#inp-user-name')?.value;
        const phone = overlay.querySelector('#inp-user-phone')?.value;
        const role = overlay.querySelector('#inp-user-role')?.value;
        const district = overlay.querySelector('#inp-user-district')?.value;

        const newUser = this.auth.loginCustomUser({ name, phone, role, district });
        if (typeof this.onUserUpdated === 'function') this.onUserUpdated(newUser);
        this.activeTab = 'profile';
        this.render();
      });
    }
  }
}
