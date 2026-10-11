// Comprehensive Pan-India Government Schemes, Subsidies & Farmer Loans Portal
// Live-searchable Central & State policies with eligibility checker and official application links

import { farmerSchemesData } from '../data/farmerSchemesData.js';

export class FarmerSchemesPortal {
  constructor(containerId, getLang) {
    this.containerId = containerId;
    this.getLang = getLang;
    this.selectedState = 'All';
    this.selectedCategory = 'All';
    this.searchQuery = '';
    this.activeEligibilityModalScheme = null;
  }

  init() {
    this.render();
  }

  update() {
    this.render();
  }

  setFilter(state, category) {
    if (state !== undefined) this.selectedState = state;
    if (category !== undefined) this.selectedCategory = category;
    this.render();
  }

  getFilteredSchemes() {
    return farmerSchemesData.filter(s => {
      // State match
      if (this.selectedState !== 'All') {
        if (this.selectedState === 'Central') {
          if (s.level !== 'Central') return false;
        } else {
          if (s.state !== this.selectedState && s.level !== 'Central') return false;
        }
      }

      // Category match
      if (this.selectedCategory !== 'All') {
        if (!s.category.toLowerCase().includes(this.selectedCategory.toLowerCase())) {
          return false;
        }
      }

      // Search match
      if (this.searchQuery.trim()) {
        const q = this.searchQuery.toLowerCase();
        const matches = (
          (s.titleEn && s.titleEn.toLowerCase().includes(q)) ||
          (s.titleHi && s.titleHi.toLowerCase().includes(q)) ||
          (s.benefitAmountEn && s.benefitAmountEn.toLowerCase().includes(q)) ||
          (s.benefitAmountHi && s.benefitAmountHi.toLowerCase().includes(q)) ||
          (s.eligibilityEn && s.eligibilityEn.toLowerCase().includes(q)) ||
          (s.eligibilityHi && s.eligibilityHi.toLowerCase().includes(q)) ||
          (s.state && s.state.toLowerCase().includes(q)) ||
          (s.category && s.category.toLowerCase().includes(q))
        );
        if (!matches) return false;
      }

      return true;
    });
  }

  render() {
    const container = document.getElementById(this.containerId);
    if (!container) return;

    const lang = this.getLang();
    const isHi = lang === 'hi';
    const schemes = this.getFilteredSchemes();

    const statesList = [
      { id: 'All', nameEn: 'All India', nameHi: 'संपूर्ण भारत' },
      { id: 'Central', nameEn: 'Central Govt Only', nameHi: 'केवल केंद्र सरकार' },
      { id: 'Maharashtra', nameEn: 'Maharashtra', nameHi: 'महाराष्ट्र' },
      { id: 'Andhra Pradesh', nameEn: 'Andhra Pradesh', nameHi: 'आंध्र प्रदेश' },
      { id: 'Uttar Pradesh', nameEn: 'Uttar Pradesh', nameHi: 'उत्तर प्रदेश' },
      { id: 'Punjab', nameEn: 'Punjab', nameHi: 'पंजाब' },
      { id: 'Karnataka', nameEn: 'Karnataka', nameHi: 'कर्नाटक' },
      { id: 'Madhya Pradesh', nameEn: 'Madhya Pradesh', nameHi: 'मध्य प्रदेश' },
      { id: 'Rajasthan', nameEn: 'Rajasthan', nameHi: 'राजस्थान' },
      { id: 'Gujarat', nameEn: 'Gujarat', nameHi: 'गुजरात' },
      { id: 'Telangana', nameEn: 'Telangana', nameHi: 'तेलंगाना' },
      { id: 'Haryana', nameEn: 'Haryana', nameHi: 'हरियाणा' },
      { id: 'Bihar', nameEn: 'Bihar', nameHi: 'बिहार' },
      { id: 'West Bengal', nameEn: 'West Bengal', nameHi: 'पश्चिम बंगाल' }
    ];

    const categoryList = [
      { id: 'All', nameEn: 'All Categories', nameHi: 'सभी श्रेणियां' },
      { id: 'Loan', nameEn: 'Agri Loans (4% KCC)', nameHi: 'कृषि ऋण (KCC 4%)' },
      { id: 'Income Support', nameEn: 'Cash Support (PM-Kisan)', nameHi: 'आय सहायता' },
      { id: 'Insurance', nameEn: 'Crop Insurance (PMFBY)', nameHi: 'फसल बीमा' },
      { id: 'Solar', nameEn: 'Solar & Irrigation (KUSUM)', nameHi: 'सौर पंप सब्सिडी' },
      { id: 'Equipment', nameEn: 'Tractor & Machinery (SMAM)', nameHi: 'कृषि यंत्र सब्सिडी' },
      { id: 'Protection', nameEn: 'Crop Protection & Fencing', nameHi: 'फसल सुरक्षा (तारबंदी)' }
    ];

    container.innerHTML = `
      <div class="f-sch-wrapper">
        <!-- Header Banner -->
        <div class="f-sch-header glass-panel">
          <div class="f-sch-header-info">
            <span class="f-sch-badge">🏛️ ${isHi ? 'राष्ट्रीय किसान नीति व ऋण पोर्टल' : 'Pan-India Farmer Schemes & Subsidies Portal'}</span>
            <h3 class="f-sch-title">${isHi ? 'सरकारी योजनाएं, 4% फसली ऋण एवं सब्सिडी खोज' : 'Government Policies, 4% Low-Interest Agri Loans & Machinery Subsidies'}</h3>
            <p class="f-sch-sub">
              ${isHi
                ? 'केंद्र सरकार एवं सभी 28 राज्यों की किसान हितैषी नीतियां — पीएम-किसान, केसीसी 4% लोन, पीएम-कुसुम सोलर पंप, फसल बीमा एवं ट्रैक्टर सब्सिडी की सीधी जानकारी, पात्रता व आधिकारिक आवेदन लिंक।'
                : 'Direct access to Central and State agricultural policies: PM-KISAN, Kisan Credit Card 4% loans, PM-KUSUM 90% solar pumps, PMFBY crop insurance, and tractor subsidies across all states.'}
            </p>
          </div>
          <div class="f-sch-live-sync-pill">
            <span class="sync-dot pulse-indicator">●</span>
            <span>${isHi ? 'सरकारी डीबीटी एवं myScheme पोर्टल से सत्यापित' : 'Verified with Govt DBT & myScheme API'}</span>
          </div>
        </div>

        <!-- Filter Controls Bar -->
        <div class="f-sch-filter-bar glass-panel">
          <!-- Live Search Input -->
          <div class="f-sch-search-wrap">
            <span class="f-sch-search-icon">🔍</span>
            <input
              type="text"
              id="inp-sch-search"
              class="f-sch-search-input"
              value="${this.searchQuery}"
              placeholder="${isHi ? 'योजना खोजें (जैसे: 4% लोन, सोलर पंप, ट्रैक्टर सब्सिडी, फसल बीमा, केसीसी)...' : 'Search schemes (e.g. 4% loan, solar pump, tractor subsidy, insurance, KCC)...'}"
            />
            ${this.searchQuery ? `<button type="button" id="btn-sch-clear-search" class="f-sch-clear-btn">&times;</button>` : ''}
          </div>

          <!-- State Selector Chips -->
          <div class="f-sch-states-row">
            <span class="f-sch-filter-label">📍 ${isHi ? 'राज्य चुनें:' : 'Select State:'}</span>
            <div class="f-sch-chips-scroll">
              ${statesList.map(st => `
                <button
                  type="button"
                  class="f-sch-state-chip ${this.selectedState === st.id ? 'active' : ''}"
                  data-state="${st.id}">
                  ${isHi ? st.nameHi : st.nameEn}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Category Filter Pills -->
          <div class="f-sch-cat-row">
            <span class="f-sch-filter-label">📂 ${isHi ? 'श्रेणी:' : 'Category:'}</span>
            <div class="f-sch-pills-wrap">
              ${categoryList.map(cat => `
                <button
                  type="button"
                  class="f-sch-cat-pill ${this.selectedCategory === cat.id ? 'active' : ''}"
                  data-cat="${cat.id}">
                  ${isHi ? cat.nameHi : cat.nameEn}
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Result Stats Counter -->
        <div class="f-sch-results-bar">
          <span class="f-sch-count-text">
            ${isHi ? `कुल <strong>${schemes.length}</strong> सरकारी योजनाएं एवं ऋण उपलब्ध हैं:` : `Showing <strong>${schemes.length}</strong> active government schemes & loans:`}
          </span>
          <span class="f-sch-active-tags">
            ${this.selectedState !== 'All' ? `<span class="sch-tag-filter">📍 ${this.selectedState}</span>` : ''}
            ${this.selectedCategory !== 'All' ? `<span class="sch-tag-filter">📂 ${this.selectedCategory}</span>` : ''}
          </span>
        </div>

        <!-- Schemes Cards Grid -->
        <div class="f-sch-cards-grid">
          ${schemes.length === 0 ? `
            <div class="f-sch-empty-state glass-panel">
              <span class="f-sch-empty-icon">🏛️</span>
              <h4>${isHi ? 'कोई योजना नहीं मिली' : 'No schemes match your filter'}</h4>
              <p>${isHi ? 'कृपया खोज शब्द बदलें या "संपूर्ण भारत" का चयन करें।' : 'Try resetting your search query or select "All India".'}</p>
              <button type="button" id="btn-sch-reset-filters" class="f-btn-secondary">
                🔄 ${isHi ? 'फ़िल्टर रीसेट करें' : 'Reset All Filters'}
              </button>
            </div>
          ` : schemes.map(s => this.renderSchemeCard(s, isHi)).join('')}
        </div>

        <!-- Fast Eligibility Modal Container -->
        <div id="sch-eligibility-modal-backdrop" class="f-sch-modal-backdrop" style="display: none;">
          <!-- Dynamically populated when user clicks "Check Eligibility" -->
        </div>
      </div>
    `;

    this.attachEventListeners();
  }

  renderSchemeCard(s, isHi) {
    const isCentral = s.level === 'Central';
    const stateBadgeText = isCentral ? (isHi ? '🇮🇳 केंद्र सरकार' : '🇮🇳 Central Govt') : `🏛️ ${isHi ? (s.stateHi || s.state) : s.state}`;
    const title = isHi ? (s.titleHi || s.titleEn) : (s.titleEn || s.titleHi);
    // Never show cross-language subtitles: in English mode show only English; in Hindi mode show only Hindi
    const categoryText = isHi ? (s.categoryHi || s.category) : (s.categoryEn || s.category);
    const benefit = isHi ? (s.benefitAmountHi || s.benefitAmountEn) : (s.benefitAmountEn || s.benefitAmountHi);
    const eligibility = isHi ? (s.eligibilityHi || s.eligibilityEn) : (s.eligibilityEn || s.eligibilityHi);
    const documents = isHi ? (s.documentsRequiredHi || s.documentsRequiredEn) : (s.documentsRequiredEn || s.documentsRequiredHi);
    const howToApply = isHi ? (s.howToApplyHi || s.howToApplyEn) : (s.howToApplyEn || s.howToApplyHi);

    return `
      <div class="f-sch-card glass-panel" data-id="${s.id}">
        <!-- Top Badge Row -->
        <div class="f-sch-card-top">
          <span class="f-sch-level-badge ${isCentral ? 'central' : 'state'}">
            ${stateBadgeText}
          </span>
          <span class="f-sch-cat-tag">
            ${categoryText}
          </span>
        </div>

        <!-- Scheme Title -->
        <div class="f-sch-title-block">
          <h4 class="f-sch-card-title">${title}</h4>
        </div>

        <!-- Highlighted Benefit Callout Box -->
        <div class="f-sch-benefit-box">
          <div class="f-sch-benefit-header">
            <span class="b-icon">💰</span>
            <span class="b-label">${isHi ? 'मुख्य लाभ एवं अनुदान राशि:' : 'Key Benefit / Subsidy Value:'}</span>
          </div>
          <p class="f-sch-benefit-text">${benefit}</p>
        </div>

        <!-- Details Grid: Eligibility & Documents -->
        <div class="f-sch-details-grid">
          <div class="f-sch-detail-item">
            <div class="f-sch-detail-head">
              <span>👤</span>
              <strong>${isHi ? 'पात्रता:' : 'Eligibility:'}</strong>
            </div>
            <p class="f-sch-detail-desc">${eligibility}</p>
          </div>

          <div class="f-sch-detail-item">
            <div class="f-sch-detail-head">
              <span>📄</span>
              <strong>${isHi ? 'आवश्यक दस्तावेज:' : 'Required Documents:'}</strong>
            </div>
            <p class="f-sch-detail-desc">${documents}</p>
          </div>
        </div>

        <!-- How To Apply -->
        <div class="f-sch-apply-step">
          <div class="f-sch-apply-head">
            <span>📝</span>
            <strong>${isHi ? 'आवेदन कैसे करें:' : 'Application Process:'}</strong>
          </div>
          <p class="f-sch-apply-text">${howToApply}</p>
        </div>

        <!-- Footer Actions -->
        <div class="f-sch-card-footer">
          <div class="f-sch-helpline">
            <span class="phone-icon">📞</span>
            <span class="phone-label">${isHi ? 'हेल्पलाइन:' : 'Helpline:'}</span>
            <a href="tel:${s.helpline.split('/')[0].trim()}" class="phone-link">${s.helpline}</a>
          </div>

          <div class="f-sch-cta-group">
            <button type="button" class="btn-sch-check-eligibility" data-id="${s.id}">
              ✨ ${isHi ? 'पात्रता जांचें' : 'Check Eligibility'}
            </button>
            <a href="${s.officialPortal}" target="_blank" rel="noopener noreferrer" class="btn-sch-portal-link">
              ➔ ${isHi ? 'आधिकारिक पोर्टल' : 'Official Portal'}
            </a>
          </div>
        </div>
      </div>
    `;
  }

  attachEventListeners() {
    const container = document.getElementById(this.containerId);
    if (!container) return;

    // Search input
    const searchInp = container.querySelector('#inp-sch-search');
    if (searchInp) {
      searchInp.addEventListener('input', (e) => {
        this.searchQuery = e.target.value;
        this.render();
      });
    }

    const clearBtn = container.querySelector('#btn-sch-clear-search');
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        this.searchQuery = '';
        this.render();
      });
    }

    // State chip clicks
    container.querySelectorAll('.f-sch-state-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedState = btn.getAttribute('data-state');
        this.render();
      });
    });

    // Category pill clicks
    container.querySelectorAll('.f-sch-cat-pill').forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedCategory = btn.getAttribute('data-cat');
        this.render();
      });
    });

    // Reset filters button
    const resetBtn = container.querySelector('#btn-sch-reset-filters');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.selectedState = 'All';
        this.selectedCategory = 'All';
        this.searchQuery = '';
        this.render();
      });
    }

    // Check Eligibility buttons
    container.querySelectorAll('.btn-sch-check-eligibility').forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        this.openEligibilityModal(id);
      });
    });
  }

  openEligibilityModal(schemeId) {
    const scheme = farmerSchemesData.find(s => s.id === schemeId);
    if (!scheme) return;

    const isHi = this.getLang() === 'hi';
    const backdrop = document.getElementById('sch-eligibility-modal-backdrop');
    if (!backdrop) return;

    backdrop.innerHTML = `
      <div class="f-sch-modal-content glass-panel">
        <div class="f-sch-modal-head">
          <div class="f-sch-m-title-wrap">
            <span class="m-icon">🏛️</span>
            <div>
              <h3>${isHi ? 'त्वरित पात्रता एवं लाभ कैलकुलेटर' : 'Quick Eligibility & Benefit Check'}</h3>
              <p class="m-sub">${isHi ? (scheme.titleHi || scheme.titleEn) : (scheme.titleEn || scheme.titleHi)}</p>
            </div>
          </div>
          <button type="button" class="btn-close-sch-modal" id="btn-close-sch-modal">&times;</button>
        </div>

        <div class="f-sch-modal-body">
          <div class="f-sch-quiz-item">
            <label class="q-label">1. ${isHi ? 'क्या आपके पास कृषि योग्य भूमि या बटाईदार अनुबंध है?' : 'Do you own or cultivate agricultural land?'}</label>
            <div class="q-options">
              <label><input type="radio" name="q_land" value="yes" checked /> ${isHi ? 'हाँ, जमीन का 7/12 या खतौनी मेरे नाम पर है' : 'Yes, verified land record in my name'}</label>
              <label><input type="radio" name="q_land" value="tenant" /> ${isHi ? 'मैं बटाईदार / पट्टेदार किसान हूँ' : 'I am a registered tenant/sharecropper'}</label>
            </div>
          </div>

          <div class="f-sch-quiz-item">
            <label class="q-label">2. ${isHi ? 'आपके पास कुल कितनी जमीन है?' : 'Total Farmland Size:'}</label>
            <div class="q-options">
              <label><input type="radio" name="q_size" value="marginal" checked /> ${isHi ? '2 एकड़ से कम (सीमांत किसान)' : 'Under 2 Acres (Marginal Farmer)'}</label>
              <label><input type="radio" name="q_size" value="small" /> ${isHi ? '2 से 5 एकड़ (छोटा किसान)' : '2 - 5 Acres (Small Farmer)'}</label>
              <label><input type="radio" name="q_size" value="medium" /> ${isHi ? '5 एकड़ से अधिक' : 'Over 5 Acres'}</label>
            </div>
          </div>

          <div class="f-sch-quiz-item">
            <label class="q-label">3. ${isHi ? 'क्या आपका बैंक खाता आधार से लिंक (Aadhaar Seeded) है?' : 'Is your bank account linked with Aadhaar (DBT active)?'}</label>
            <div class="q-options">
              <label><input type="radio" name="q_aadhaar" value="yes" checked /> ${isHi ? 'हाँ, आधार एवं डीबीटी सक्रिय है' : 'Yes, Aadhaar & DBT active'}</label>
              <label><input type="radio" name="q_aadhaar" value="no" /> ${isHi ? 'अभी लिंक नहीं है' : 'Not linked yet'}</label>
            </div>
          </div>

          <!-- Instant Verdict Box -->
          <div class="f-sch-verdict-card success">
            <div class="v-head">
              <span class="v-icon">✅</span>
              <strong>${isHi ? 'बधाई हो! आप इस योजना के लिए 100% पात्र हैं' : 'Congratulations! You are 100% Eligible'}</strong>
            </div>
            <p class="v-sub">
              ${isHi
                ? `आपके द्वारा चुने गए विवरण के अनुसार आप <strong>${scheme.benefitAmountHi || scheme.benefitAmountEn}</strong> का सीधा लाभ प्राप्त कर सकते हैं।`
                : `Based on your selection, you are eligible for <strong>${scheme.benefitAmountEn || scheme.benefitAmountHi}</strong> directly into your account.`}
            </p>
          </div>
        </div>

        <div class="f-sch-modal-footer">
          <a href="${scheme.officialPortal}" target="_blank" rel="noopener noreferrer" class="btn-sch-modal-apply">
            🚀 ${isHi ? 'आधिकारिक पोर्टल पर अभी आवेदन करें' : 'Apply Now on Official Portal'}
          </a>
          <button type="button" class="btn-sch-modal-close" id="btn-sch-modal-done">
            ${isHi ? 'बंद करें' : 'Close'}
          </button>
        </div>
      </div>
    `;

    backdrop.style.display = 'flex';

    const closeBtn = backdrop.querySelector('#btn-close-sch-modal');
    const doneBtn = backdrop.querySelector('#btn-sch-modal-done');
    const closeModal = () => {
      backdrop.style.display = 'none';
    };
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (doneBtn) doneBtn.addEventListener('click', closeModal);
  }
}
