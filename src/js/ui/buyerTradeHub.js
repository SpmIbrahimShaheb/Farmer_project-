// Direct Farmer & Buyer Trade Hub Component
// Connects producers directly with wholesale consumer buyers with zero middleman deductions

import { authManager } from '../services/authManager.js';

export class BuyerTradeHub {
  constructor(containerId, getLang) {
    this.containerId = containerId;
    this.getLang = getLang;
    this.auth = authManager;
    this.activeFilter = 'all'; // 'all' | 'lots' | 'orders'
    this.listings = this.getInitialListings();
  }

  getInitialListings() {
    return [
      {
        id: "tr_1",
        type: "lot", // Farmer selling
        author: "Ramesh Patil",
        authorRoleEn: "Farmer",
        authorRoleHi: "किसान",
        badgeEn: "Verified Harvest Lot",
        badgeHi: "सत्यापित फसल",
        cropNameEn: "Red Onion",
        cropNameHi: "लाल प्याज",
        quantityEn: "45 Quintals (4.5 MT)",
        quantityHi: "45 क्विंटल (4.5 मीट्रिक टन)",
        rateKgEn: "₹20.50 / kg",
        rateKgHi: "₹20.50 / किग्रा",
        locationEn: "Niphad, Nashik, Maharashtra",
        locationHi: "निफाड, नासिक, महाराष्ट्र",
        qualityEn: "Grade-A Dry Bold Bulbs, 55mm+ diameter",
        qualityHi: "ग्रेड-ए सूखे मोटे कंद, 55mm+ व्यास",
        contactPhone: "+91 98230 45678",
        dateEn: "Today, 10:30 AM",
        dateHi: "आज, 10:30 AM"
      },
      {
        id: "tr_2",
        type: "order", // Buyer buying
        author: "Vashi Fresh Supermarket Chain",
        authorRoleEn: "Wholesale Buyer",
        authorRoleHi: "थोक खरीदार",
        badgeEn: "Spot Cash Buy Order",
        badgeHi: "नकद खरीद ऑर्डर",
        cropNameEn: "Hybrid Tomato",
        cropNameHi: "हाइब्रिड टमाटर",
        quantityEn: "100 Quintals (10 MT)",
        quantityHi: "100 क्विंटल (10 मीट्रिक टन)",
        rateKgEn: "₹17.00 / kg (Spot Payment)",
        rateKgHi: "₹17.00 / किग्रा (नकद भुगतान)",
        locationEn: "Delivery: Vashi APMC Yard-2, Navi Mumbai",
        locationHi: "डिलीवरी: वाशी एपीएमसी यार्ड-2, नवी मुंबई",
        qualityEn: "Semi-ripe, firm skin, standard plastic crates",
        qualityHi: "अर्ध-पका, सख्त छिलका, मानक प्लास्टिक क्रेट",
        contactPhone: "+91 98190 12345",
        dateEn: "Today, 09:15 AM",
        dateHi: "आज, 09:15 AM"
      },
      {
        id: "tr_3",
        type: "lot",
        author: "Harpreet Singh",
        authorRoleEn: "Farmer Co-op Lead",
        authorRoleHi: "किसान सहकारी संघ प्रमुख",
        badgeEn: "Certified Farm Harvest",
        badgeHi: "सत्यापित फसल",
        cropNameEn: "Sharbati Sona Wheat",
        cropNameHi: "शरबती सोना गेहूं",
        quantityEn: "80 Quintals (8 MT)",
        quantityHi: "80 क्विंटल (8 मीट्रिक टन)",
        rateKgEn: "₹24.40 / kg",
        rateKgHi: "₹24.40 / किग्रा",
        locationEn: "Mansa Grain Market, Punjab",
        locationHi: "मानसा अनाज मंडी, पंजाब",
        qualityEn: "Moisture <11%, Machine-cleaned grain",
        qualityHi: "नमी <11%, मशीन से साफ किया दाना",
        contactPhone: "+91 98765 23456",
        dateEn: "Today, 08:45 AM",
        dateHi: "आज, 08:45 AM"
      },
      {
        id: "tr_4",
        type: "order",
        author: "Delhi Metro Foods Pvt Ltd",
        authorRoleEn: "Supermarket Aggregator",
        authorRoleHi: "सुपरमार्केट एग्रीगेटर",
        badgeEn: "Bulk Procurement Order",
        badgeHi: "थोक मांग",
        cropNameEn: "Red Onion (Export Quality)",
        cropNameHi: "लाल प्याज (निर्यात गुणवत्ता)",
        quantityEn: "150 Quintals (15 MT)",
        quantityHi: "150 क्विंटल (15 मीट्रिक टन)",
        rateKgEn: "₹23.00 / kg (Delhi Doorstep)",
        rateKgHi: "₹23.00 / किग्रा (दिल्ली डोरस्टेप)",
        locationEn: "Delivery: Azadpur Mandi Shed 4, Delhi",
        locationHi: "डिलीवरी: आजादपुर मंडी शेड 4, दिल्ली",
        qualityEn: "Cured red skin, ready for immediate retail dispatch",
        qualityHi: "पक्की लाल छिलका, तत्काल खुदरा आपूर्ति हेतु तैयार",
        contactPhone: "+91 99110 98765",
        dateEn: "Yesterday, 04:30 PM",
        dateHi: "कल, 04:30 PM"
      }
    ];
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
    const isFarmer = this.auth.isFarmer();
    const user = this.auth.getUser();

    const filtered = this.listings.filter(item => {
      if (this.activeFilter === 'lots') return item.type === 'lot';
      if (this.activeFilter === 'orders') return item.type === 'order';
      return true;
    });

    container.innerHTML = `
      <div class="f-trade-hub-wrapper">
        <!-- Hub Top Banner -->
        <div class="f-trade-hub-banner glass-panel">
          <div class="f-trade-banner-left">
            <span class="f-trade-pulse-badge">🤝 ${lang === 'hi' ? 'सीधा किसान-खरीदार मंच' : 'Direct Producer-Buyer Exchange'}</span>
            <h3 class="f-trade-heading">${lang === 'hi' ? 'बिचौलिया मुक्त सीधा कृषि व्यापार' : 'Direct Fair-Trade Commercial Hub'}</h3>
            <p class="f-trade-sub">${lang === 'hi' ? 'किसान अपनी उपलब्ध फसल सूची दर्ज करें और बड़े सुपरमार्केट खरीदार सीधे थोक मांग पोस्ट करें।' : 'Farmers list ready harvest lots directly for bulk institutional supermarket buyers with zero broker commissions.'}</p>
          </div>
          <div class="f-trade-banner-actions">
            <button type="button" class="f-btn-post-trade" id="btn-open-post-trade-modal">
              <span>${isFarmer ? '➕' : '📋'}</span>
              <span>${isFarmer 
                ? (lang === 'hi' ? 'मेरी फसल बिक्री हेतु दर्ज करें' : '+ List Harvest Lot for Sale')
                : (lang === 'hi' ? 'थोक खरीद मांग दर्ज करें' : '+ Post Buy Requirement')}
              </span>
            </button>
          </div>
        </div>

        <!-- Filter Tabs -->
        <div class="f-trade-filter-bar">
          <div class="f-trade-filter-pills">
            <button type="button" class="f-trade-pill ${this.activeFilter === 'all' ? 'active' : ''}" data-filter="all">
              🌐 ${lang === 'hi' ? 'सभी सौदे (All)' : 'All Listings'} (${this.listings.length})
            </button>
            <button type="button" class="f-trade-pill ${this.activeFilter === 'lots' ? 'active' : ''}" data-filter="lots">
              🌾 ${lang === 'hi' ? 'किसानों की उपलब्ध फसलें' : 'Harvest Lots (Farmers)'}
            </button>
            <button type="button" class="f-trade-pill ${this.activeFilter === 'orders' ? 'active' : ''}" data-filter="orders">
              🛒 ${lang === 'hi' ? 'थोक खरीदारों की मांग' : 'Buy Requirements (Buyers)'}
            </button>
          </div>
          <div class="f-trade-user-hint">
            <span>👤 ${lang === 'hi' ? 'सक्रिय खाता' : 'Active Account'}: <strong>${user.name}</strong> (${isFarmer ? 'किसान' : 'खरीदार'})</span>
          </div>
        </div>

        <!-- Listings Grid -->
        <div class="f-trade-listings-grid">
          ${filtered.map(item => {
            const isHi = lang === 'hi';
            const cropName = isHi ? (item.cropNameHi || item.cropName) : (item.cropNameEn || item.cropName);
            const badge = isHi ? (item.badgeHi || item.badge) : (item.badgeEn || item.badge);
            const authorRole = isHi ? (item.authorRoleHi || item.authorRole) : (item.authorRoleEn || item.authorRole);
            const quantity = isHi ? (item.quantityHi || item.quantity) : (item.quantityEn || item.quantity);
            const rateKg = isHi ? (item.rateKgHi || item.rateKg) : (item.rateKgEn || item.rateKg);
            const location = isHi ? (item.locationHi || item.location) : (item.locationEn || item.location);
            const quality = isHi ? (item.qualityHi || item.quality) : (item.qualityEn || item.quality);
            const date = isHi ? (item.dateHi || item.date) : (item.dateEn || item.date);

            return `
            <div class="f-trade-card ${item.type === 'lot' ? 'card-lot' : 'card-order'} glass-panel">
              <div class="f-trade-card-header">
                <div class="f-trade-badge-col">
                  <span class="f-trade-type-pill ${item.type === 'lot' ? 'pill-farmer' : 'pill-buyer'}">
                    ${item.type === 'lot' ? (isHi ? '🌾 किसान लॉट' : '🌾 FARMER LOT') : (isHi ? '🛒 खरीदार ऑर्डर' : '🛒 BUYER ORDER')}
                  </span>
                  <span class="f-trade-status-badge">${badge}</span>
                </div>
                <span class="f-trade-time">${date}</span>
              </div>

              <div class="f-trade-main-info">
                <h4 class="f-trade-crop-title">${cropName}</h4>
                <div class="f-trade-qty-price-row">
                  <div class="f-trade-stat">
                    <span class="f-t-lbl">${isHi ? 'मात्रा' : 'Quantity'}:</span>
                    <strong class="f-t-val">${quantity}</strong>
                  </div>
                  <div class="f-trade-stat">
                    <span class="f-t-lbl">${isHi ? 'दर' : 'Rate'}:</span>
                    <strong class="f-t-price text-green">${rateKg}</strong>
                  </div>
                </div>
              </div>

              <div class="f-trade-details-box">
                <div class="f-t-row">📍 <strong>${isHi ? 'स्थान' : 'Location'}:</strong> ${location}</div>
                <div class="f-t-row">✨ <strong>${isHi ? 'गुणवत्ता' : 'Quality'}:</strong> ${quality}</div>
                <div class="f-t-row">👤 <strong>${isHi ? 'पोस्टकर्ता' : 'Posted By'}:</strong> ${item.author} (${authorRole})</div>
              </div>

              <div class="f-trade-card-footer">
                <a href="tel:${item.contactPhone}" class="f-btn-contact-trade">
                  <span>📞</span> <span>${isHi ? 'सीधा संपर्क करें' : 'Contact Directly'}</span>
                </a>
                <button type="button" class="f-btn-inquire-trade" onclick="alert('${isHi ? 'पूछताछ दर्ज हो गई है! पार्टी को एसएमएस सूचना भेज दी गई है।' : 'Inquiry recorded! SMS alert dispatched to counterparty.'}')">
                  <span>💬</span> <span>${isHi ? 'व्हाट्सएप चैट' : 'Chat via WhatsApp'}</span>
                </button>
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
    const filterBtns = container.querySelectorAll('.f-trade-pill');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.activeFilter = btn.getAttribute('data-filter');
        this.render();
      });
    });

    const postBtn = container.querySelector('#btn-open-post-trade-modal');
    if (postBtn) {
      postBtn.addEventListener('click', () => {
        this.openCreateModal();
      });
    }
  }

  openCreateModal() {
    const lang = this.getLang();
    const isFarmer = this.auth.isFarmer();
    const user = this.auth.getUser();

    const overlay = document.createElement('div');
    overlay.className = 'f-auth-modal-overlay';
    overlay.id = 'trade-create-modal';

    overlay.innerHTML = `
      <div class="f-auth-card glass-panel" style="max-width: 520px;">
        <div class="f-auth-header">
          <h3 class="f-auth-name">
            ${isFarmer 
              ? (lang === 'hi' ? '🌾 अपनी उपलब्ध फसल बिक्री हेतु दर्ज करें' : '🌾 List Harvest Lot for Sale') 
              : (lang === 'hi' ? '🛒 थोक खरीद मांग दर्ज करें' : '🛒 Post Wholesale Buy Requirement')}
          </h3>
          <button type="button" class="f-auth-close-btn" id="btn-close-trade-create">&times;</button>
        </div>

        <form id="form-create-trade-listing" style="padding: 20px; display: flex; flex-direction: column; gap: 14px;">
          <div class="f-form-field">
            <label>${lang === 'hi' ? 'फसल व किस्म का नाम' : 'Crop & Variety'}</label>
            <input type="text" id="inp-trade-crop" required placeholder="${lang === 'hi' ? 'उदा. लाल प्याज (नासिक उत्तम)' : 'e.g. Red Onion Grade-A'}" class="f-form-input" />
          </div>

          <div class="f-form-row">
            <div class="f-form-field">
              <label>${lang === 'hi' ? 'मात्रा (क्विंटल)' : 'Quantity (Quintals)'}</label>
              <input type="number" id="inp-trade-qty" required placeholder="${lang === 'hi' ? 'उदा. 50' : 'e.g. 50'}" class="f-form-input" />
            </div>
            <div class="f-form-field">
              <label>${lang === 'hi' ? 'दर (₹ प्रति किग्रा)' : 'Rate (₹ / kg)'}</label>
              <input type="number" step="0.5" id="inp-trade-rate" required placeholder="${lang === 'hi' ? 'उदा. 21.0' : 'e.g. 21.0'}" class="f-form-input" />
            </div>
          </div>

          <div class="f-form-field">
            <label>${lang === 'hi' ? 'स्थान या डिलीवरी गंतव्य' : 'Farm Location or Delivery Terminal'}</label>
            <input type="text" id="inp-trade-loc" required placeholder="${lang === 'hi' ? 'उदा. लासलगांव, नासिक' : 'e.g. Lasalgaon, Nashik'}" class="f-form-input" />
          </div>

          <div class="f-form-field">
            <label>${lang === 'hi' ? 'गुणवत्ता व पैकेजिंग विवरण' : 'Quality & Packaging Details'}</label>
            <input type="text" id="inp-trade-qual" placeholder="${lang === 'hi' ? 'उदा. 50 किलो जालीदार बोरी, सूखी छंटाई' : 'e.g. 50kg mesh bags, sorted & cured'}" class="f-form-input" />
          </div>

          <button type="submit" class="f-btn-submit-enroll">
            🚀 ${lang === 'hi' ? 'मंच पर प्रकाशित करें' : 'Publish Listing to Trade Portal'}
          </button>
        </form>
      </div>
    `;

    document.body.appendChild(overlay);

    overlay.querySelector('#btn-close-trade-create')?.addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) overlay.remove();
    });

    overlay.querySelector('#form-create-trade-listing')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const crop = overlay.querySelector('#inp-trade-crop')?.value;
      const qty = overlay.querySelector('#inp-trade-qty')?.value;
      const rate = overlay.querySelector('#inp-trade-rate')?.value;
      const loc = overlay.querySelector('#inp-trade-loc')?.value;
      const qual = overlay.querySelector('#inp-trade-qual')?.value;

      const newListing = {
        id: 'tr_' + Date.now(),
        type: isFarmer ? 'lot' : 'order',
        author: user.name,
        authorRoleEn: isFarmer ? 'Farmer' : 'Wholesale Buyer',
        authorRoleHi: isFarmer ? 'किसान' : 'थोक खरीदार',
        badgeEn: isFarmer ? 'New Farm Lot' : 'New Buy Request',
        badgeHi: isFarmer ? 'नया फसल लॉट' : 'नई थोक मांग',
        cropNameEn: crop,
        cropNameHi: crop,
        quantityEn: `${qty} Quintals (${(qty / 10).toFixed(1)} MT)`,
        quantityHi: `${qty} क्विंटल (${(qty / 10).toFixed(1)} मीट्रिक टन)`,
        rateKgEn: `₹${rate} / kg`,
        rateKgHi: `₹${rate} / किग्रा`,
        locationEn: loc,
        locationHi: loc,
        qualityEn: qual || 'Standard Clean Quality',
        qualityHi: qual || 'मानक स्वच्छ गुणवत्ता',
        contactPhone: user.phone || '+91 98230 45678',
        dateEn: 'Just now',
        dateHi: 'अभी'
      };

      this.listings.unshift(newListing);

      if (isFarmer) {
        this.auth.addHarvestLot({ crop, quantity: qty, priceKg: rate, location: loc });
      } else {
        this.auth.addBuyerProcurement({ crop, quantity: qty, priceKg: rate, city: loc });
      }

      overlay.remove();
      this.render();
    });
  }
}
