// Farmer & Buyer Authentication and Profile History Service
// Handles role enrollment, profile data, saved diagnostics, and market inquiries

const AUTH_STORAGE_KEY = 'kisansetu_auth_user_v1';
const HISTORY_STORAGE_KEY = 'kisansetu_user_history_v1';

export class AuthManager {
  constructor() {
    this.listeners = [];
    this.currentUser = this.loadUser();
    this.history = this.loadHistory();
  }

  getStorage() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return window.localStorage;
      }
    } catch (e) {
      // Storage restricted or inaccessible
    }
    return null;
  }

  loadUser() {
    try {
      const storage = this.getStorage();
      const stored = storage ? storage.getItem(AUTH_STORAGE_KEY) : null;
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn('Could not load auth user', e);
    }

    // Default pre-seeded profile: Farmer Ramesh Patil
    const defaultFarmer = {
      id: 'usr_farmer_1',
      name: 'Ramesh Patil',
      phone: '+91 98230 45678',
      role: 'farmer', // 'farmer' | 'buyer'
      stateEn: 'Maharashtra',
      stateHi: 'महाराष्ट्र',
      districtEn: 'Nashik (Lasalgaon)',
      districtHi: 'नासिक (लासलगांव)',
      landAcreage: 4.5,
      primaryCrops: ['Red Onion', 'Hybrid Tomato'],
      joinedDate: 'Oct 2026'
    };

    this.saveUser(defaultFarmer);
    return defaultFarmer;
  }

  saveUser(user) {
    this.currentUser = user;
    try {
      const storage = this.getStorage();
      if (storage) storage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
    } catch (e) {
      console.warn('Could not save auth user', e);
    }
    this.notifyListeners();
  }

  loadHistory() {
    try {
      const storage = this.getStorage();
      const stored = storage ? storage.getItem(HISTORY_STORAGE_KEY) : null;
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn('Could not load history', e);
    }

    const defaultHistory = {
      savedSoilTests: [
        {
          id: 'st_1',
          date: 'Yesterday, 4:15 PM',
          crop: 'Red Onion (लाल प्याज)',
          soil: 'Black Cotton Soil (काली कपास मिट्टी)',
          acreage: 4,
          ureaBags: 3,
          dapBags: 2,
          projectedYield: '110 Quintals'
        }
      ],
      savedAlerts: [
        { id: 'al_1', crop: 'Red Onion', targetRate: '₹22/kg', status: 'Active' },
        { id: 'al_2', crop: 'Hybrid Tomato', targetRate: '₹18/kg', status: 'Triggered' }
      ],
      myHarvestLots: [
        {
          id: 'lot_1',
          crop: 'Red Onion (Grade-A Bold)',
          quantityQuintals: 45,
          expectedPriceKg: 20.5,
          location: 'Niphad, Nashik',
          status: 'Available',
          date: 'Oct 8, 2026'
        }
      ],
      buyerProcurements: [
        {
          id: 'buy_1',
          company: 'Vashi Metro Wholesale',
          crop: 'Hybrid Tomato',
          requiredQuintals: 100,
          offeredPriceKg: 17.0,
          destinationCity: 'Navi Mumbai APMC',
          status: 'Open for bids'
        }
      ]
    };

    this.saveHistory(defaultHistory);
    return defaultHistory;
  }

  saveHistory(hist) {
    this.history = hist;
    try {
      const storage = this.getStorage();
      if (storage) storage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(hist));
    } catch (e) {
      console.warn('Could not save history', e);
    }
  }

  getUser() {
    return this.currentUser;
  }

  getHistory() {
    return this.history;
  }

  isFarmer() {
    return this.currentUser?.role === 'farmer';
  }

  isBuyer() {
    return this.currentUser?.role === 'buyer';
  }

  // Fast profile switch between demo farmer and demo buyer
  switchProfile(role) {
    if (role === 'farmer') {
      const farmer = {
        id: 'usr_farmer_1',
        name: 'Ramesh Patil',
        phone: '+91 98230 45678',
        role: 'farmer',
        stateEn: 'Maharashtra',
        stateHi: 'महाराष्ट्र',
        districtEn: 'Nashik (Lasalgaon)',
        districtHi: 'नासिक (लासलगांव)',
        landAcreage: 4.5,
        primaryCrops: ['Red Onion', 'Hybrid Tomato'],
        joinedDate: 'Oct 2026'
      };
      this.saveUser(farmer);
    } else {
      const buyer = {
        id: 'usr_buyer_1',
        name: 'Sunil Gupta (Vashi Agro Traders)',
        phone: '+91 98190 12345',
        role: 'buyer',
        stateEn: 'Maharashtra',
        stateHi: 'महाराष्ट्र',
        districtEn: 'Navi Mumbai (Vashi APMC)',
        districtHi: 'नवी मुंबई (वाशी एपीएमसी)',
        procurementVolume: '60 MT / Week',
        targetCrops: ['Onion', 'Tomato', 'Wheat'],
        businessType: 'Wholesale Supermarket Supplier',
        joinedDate: 'Oct 2026'
      };
      this.saveUser(buyer);
    }
  }

  loginCustomUser(userData) {
    const user = {
      id: 'usr_' + Date.now(),
      name: userData.name || 'Agri User',
      phone: userData.phone || '+91 99999 00000',
      role: userData.role || 'farmer',
      stateEn: userData.state || 'Maharashtra',
      stateHi: userData.state || 'महाराष्ट्र',
      districtEn: userData.district || 'Nashik',
      districtHi: userData.district || 'नासिक',
      landAcreage: userData.landAcreage || 3,
      procurementVolume: userData.procurementVolume || '25 MT',
      joinedDate: 'Oct 2026'
    };
    this.saveUser(user);
    return user;
  }

  addSavedSoilTest(testData) {
    if (!this.history.savedSoilTests) this.history.savedSoilTests = [];
    this.history.savedSoilTests.unshift({
      id: 'st_' + Date.now(),
      date: 'Just now',
      crop: testData.cropName,
      soil: testData.soilName,
      acreage: testData.acreage,
      ureaBags: testData.ureaBags,
      dapBags: testData.dapBags,
      projectedYield: testData.yieldEstimate
    });
    this.saveHistory(this.history);
  }

  addHarvestLot(lot) {
    if (!this.history.myHarvestLots) this.history.myHarvestLots = [];
    const newLot = {
      id: 'lot_' + Date.now(),
      crop: lot.crop,
      quantityQuintals: Number(lot.quantity),
      expectedPriceKg: Number(lot.priceKg),
      location: lot.location,
      status: 'Available',
      date: 'Today'
    };
    this.history.myHarvestLots.unshift(newLot);
    this.saveHistory(this.history);
    return newLot;
  }

  addBuyerProcurement(req) {
    if (!this.history.buyerProcurements) this.history.buyerProcurements = [];
    const newReq = {
      id: 'buy_' + Date.now(),
      company: this.currentUser?.name || 'Wholesale Buyer',
      crop: req.crop,
      requiredQuintals: Number(req.quantity),
      offeredPriceKg: Number(req.priceKg),
      destinationCity: req.city || 'Mumbai Vashi',
      status: 'Open for bids',
      date: 'Today'
    };
    this.history.buyerProcurements.unshift(newReq);
    this.saveHistory(this.history);
    return newReq;
  }

  onUserChange(fn) {
    this.listeners.push(fn);
  }

  notifyListeners() {
    this.listeners.forEach(fn => {
      try { fn(this.currentUser); } catch (e) { console.error(e); }
    });
  }
}

export const authManager = new AuthManager();
