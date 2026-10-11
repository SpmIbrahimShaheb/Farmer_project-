// Centralized Mandi Backend Price Repository & Admin Team Update Engine
// Stores pan-India APMC modal rates, daily arrival volumes, and urban retail benchmarks
// Updated and managed by your team with instant reactive persistence

const BACKEND_STORAGE_KEY = 'kisansetu_team_backend_prices_v1';

export class MandiBackendService {
  constructor() {
    this.listeners = [];
    this.prices = this.loadPrices();
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

  loadPrices() {
    try {
      const storage = this.getStorage();
      const stored = storage ? storage.getItem(BACKEND_STORAGE_KEY) : null;
      if (stored) return JSON.parse(stored);
    } catch (e) {
      console.warn('Could not load backend prices', e);
    }

    // Default pan-India APMC master catalog managed by team
    const initialMaster = [
      {
        id: "onion",
        nameEn: "Red Onion (लाल प्याज)",
        nameHi: "लाल प्याज",
        primaryMandi: "Lasalgaon APMC, Nashik",
        mandiPriceKg: 19.5,
        mandiPriceQuintal: 1950,
        minPriceKg: 16.5,
        maxPriceKg: 21.0,
        retailPriceKg: 44.0,
        retailPriceQuintal: 4400,
        dailyArrivalsQuintals: 4250,
        status: "rising",
        recommendation: "HOLD",
        lastUpdatedBy: "Team Agri-Desk (Lasalgaon Yard)",
        updatedAt: "Today, 08:30 AM"
      },
      {
        id: "tomato",
        nameEn: "Hybrid Tomato (टमाटर हाइब्रिड)",
        nameHi: "टमाटर (हाइब्रिड)",
        primaryMandi: "Pimpalgaon APMC & Kolar",
        mandiPriceKg: 14.0,
        mandiPriceQuintal: 1400,
        minPriceKg: 11.5,
        maxPriceKg: 16.0,
        retailPriceKg: 38.0,
        retailPriceQuintal: 3800,
        dailyArrivalsQuintals: 6100,
        status: "falling",
        recommendation: "SELL",
        lastUpdatedBy: "Team Agri-Desk (Kolar Terminal)",
        updatedAt: "Today, 09:15 AM"
      },
      {
        id: "wheat",
        nameEn: "Sharbati Wheat (शरबती कनक)",
        nameHi: "गेहूं (शरबती)",
        primaryMandi: "Bhatinda Grain Market, Malwa",
        mandiPriceKg: 24.25,
        mandiPriceQuintal: 2425,
        minPriceKg: 22.8,
        maxPriceKg: 25.5,
        retailPriceKg: 39.0,
        retailPriceQuintal: 3900,
        dailyArrivalsQuintals: 7850,
        status: "rising",
        recommendation: "FAIR",
        lastUpdatedBy: "Team Punjab Field Lead",
        updatedAt: "Today, 07:45 AM"
      },
      {
        id: "cotton",
        nameEn: "Bt Raw Cotton (सफेद सोना नरमा)",
        nameHi: "कपास (नरमा)",
        primaryMandi: "Guntur Yard & Mansa",
        mandiPriceKg: 73.5,
        mandiPriceQuintal: 7350,
        minPriceKg: 69.0,
        maxPriceKg: 76.0,
        retailPriceKg: 118.0,
        retailPriceQuintal: 11800,
        dailyArrivalsQuintals: 9140,
        status: "rising",
        recommendation: "HOLD",
        lastUpdatedBy: "Team Commercial Crop Cell",
        updatedAt: "Today, 08:00 AM"
      },
      {
        id: "soybean",
        nameEn: "Yellow Soybean (पीली सोयाबीन)",
        nameHi: "सोयाबीन (पीली)",
        primaryMandi: "Indore APMC & Ujjain",
        mandiPriceKg: 46.8,
        mandiPriceQuintal: 4680,
        minPriceKg: 44.0,
        maxPriceKg: 48.5,
        retailPriceKg: 78.0,
        retailPriceQuintal: 7800,
        dailyArrivalsQuintals: 5300,
        status: "rising",
        recommendation: "HOLD",
        lastUpdatedBy: "Team MP Mandi Desk",
        updatedAt: "Today, 09:00 AM"
      },
      {
        id: "chana",
        nameEn: "Desi Chana / Gram (चना दाल)",
        nameHi: "चना (देशी)",
        primaryMandi: "Bikaner Yard & Akola",
        mandiPriceKg: 58.2,
        mandiPriceQuintal: 5820,
        minPriceKg: 55.0,
        maxPriceKg: 60.5,
        retailPriceKg: 92.0,
        retailPriceQuintal: 9200,
        dailyArrivalsQuintals: 3900,
        status: "rising",
        recommendation: "FAIR",
        lastUpdatedBy: "Team Pulses Intelligence",
        updatedAt: "Today, 08:15 AM"
      }
    ];

    this.savePrices(initialMaster);
    return initialMaster;
  }

  savePrices(data) {
    this.prices = data;
    try {
      const storage = this.getStorage();
      if (storage) storage.setItem(BACKEND_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.warn('Could not save backend prices', e);
    }
    this.notifyListeners();
  }

  getAllPrices() {
    return this.prices;
  }

  getPriceById(cropId) {
    return this.prices.find(p => p.id === cropId);
  }

  // Admin/Team update method
  updatePriceByTeam(cropId, updates, updatedBy = "KisanSetu Admin Team") {
    const item = this.prices.find(p => p.id === cropId);
    if (!item) return false;

    if (updates.mandiPriceKg) {
      item.mandiPriceKg = Number(updates.mandiPriceKg);
      item.mandiPriceQuintal = Math.round(Number(updates.mandiPriceKg) * 100);
    }
    if (updates.retailPriceKg) {
      item.retailPriceKg = Number(updates.retailPriceKg);
      item.retailPriceQuintal = Math.round(Number(updates.retailPriceKg) * 100);
    }
    if (updates.dailyArrivals) {
      item.dailyArrivalsQuintals = Number(updates.dailyArrivals);
    }
    if (updates.recommendation) {
      item.recommendation = updates.recommendation;
    }
    if (updates.status) {
      item.status = updates.status;
    }

    item.lastUpdatedBy = updatedBy;
    item.updatedAt = new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }) + ' (Team Sync)';

    this.savePrices(this.prices);
    return true;
  }

  onPricesUpdate(fn) {
    this.listeners.push(fn);
  }

  notifyListeners() {
    this.listeners.forEach(fn => {
      try { fn(this.prices); } catch (e) { console.error(e); }
    });
  }
}

export const mandiBackendService = new MandiBackendService();
