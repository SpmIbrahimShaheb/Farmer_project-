// Main Application Bootstrapper for KisanSetu
// Features: Multi-View Page Navigation, Universal Location Search, Voice Assistant, and Real-time APMC Ticker

import { cacheManager } from './agents/cacheManager.js';
import { translations } from './data/translations.js';
import { renderPriceCards } from './ui/priceRenderer.js';
import { setupAdvisorForm } from './ui/advisorForm.js';
import { setupVolunteerSection } from './ui/volunteerModal.js';
import { setupAgentBuilderTab } from './ui/agentBuilderTab.js';
import { MapRenderer } from './ui/mapRenderer.js';
import { LiveTicker } from './ui/liveTicker.js';
import { VoiceAssistantModal } from './ui/voiceAssistantModal.js';
import { UniversalSearchBar } from './ui/universalSearchBar.js';
import { authManager } from './services/authManager.js';
import { mandiBackendService } from './services/mandiBackendService.js';
import { AuthModal } from './ui/authModal.js';
import { BuyerTradeHub } from './ui/buyerTradeHub.js';
import { AdminPriceModal } from './ui/adminPriceModal.js';
import { ArbitrageOptimizer } from './ui/arbitrageOptimizer.js';
import { VisualSoilDoctor } from './ui/visualSoilDoctor.js';
import { PesticideAdvisor } from './ui/pesticideAdvisor.js';
import { CropSuitabilityDoctor } from './ui/cropSuitabilityDoctor.js';
import { SellingAdvisor } from './ui/sellingAdvisor.js';
import { FarmerSchemesPortal } from './ui/farmerSchemesPortal.js';

class KisanApp {
  constructor() {
    this.cache = cacheManager;
    this.lang = this.cache.getLanguage();
    this.advisorModule = null;
    this.volunteerModule = null;
    this.agentBuilderModule = null;
    this.mapRenderer = null;
    this.liveTicker = null;
    this.universalSearchBar = null;

    // View Navigation State (multi-page feel)
    this.currentViewId = 'section-hero';
    this.isAllSectionsMode = false;

    this.voiceAssistant = new VoiceAssistantModal(
      () => this.cache.getCurrentCluster(),
      () => this.lang
    );

    this.authManager = authManager;
    this.mandiBackendService = mandiBackendService;
    this.buyerTradeHub = null;
    this.arbitrageOptimizer = null;
    this.visualSoilDoctor = null;
    this.weatherHarvestPlanner = null;
    this.pesticideAdvisor = null;
    this.cropSuitabilityDoctor = null;
    this.sellingAdvisor = null;
    this.farmerSchemesPortal = null;

    this.authModal = new AuthModal(
      () => this.lang,
      () => {
        this.updateUserProfileBadge();
        if (this.buyerTradeHub) this.buyerTradeHub.update();
      }
    );

    this.adminPriceModal = new AdminPriceModal(
      () => this.lang,
      () => {
        this.renderAll();
      }
    );

    // Expose instance globally for in-page navigation links
    window.kisanAppInstance = this;

    this.init();
  }

  init() {
    this.setupLanguageSwitcher();
    this.setupAuthAndProfile();
    this.setupAdminPriceModal();
    this.setupGlobalVoiceButton();
    this.setupUniversalSearch();
    this.setupViewNavigation();
    this.renderAll();
  }

  setupAuthAndProfile() {
    const profileBtn = document.getElementById('btn-user-profile');
    if (profileBtn) {
      profileBtn.addEventListener('click', () => {
        this.authModal.open();
      });
    }
    this.updateUserProfileBadge();
  }

  updateUserProfileBadge() {
    const nameEl = document.getElementById('txt-user-profile-name');
    const roleDot = document.querySelector('.user-avatar-dot');
    if (!nameEl) return;
    const user = this.authManager.getUser();
    const isFarmer = this.authManager.isFarmer();
    if (roleDot) {
      roleDot.textContent = isFarmer ? '👨‍🌾' : '🛒';
    }
    nameEl.textContent = this.lang === 'hi'
      ? `${user.name} (${isFarmer ? 'किसान' : 'खरीदार'})`
      : `${user.name} (${isFarmer ? 'Farmer' : 'Buyer'})`;
  }

  setupAdminPriceModal() {
    const adminBtn = document.getElementById('btn-admin-price-update');
    if (adminBtn) {
      adminBtn.addEventListener('click', () => {
        this.adminPriceModal.open();
      });
    }
  }

  setupLanguageSwitcher() {
    const btnEn = document.getElementById('btn-lang-en');
    const btnHi = document.getElementById('btn-lang-hi');

    const updateLangButtons = () => {
      if (btnEn && btnHi) {
        btnEn.classList.toggle('active', this.lang === 'en');
        btnHi.classList.toggle('active', this.lang === 'hi');
      }
    };

    if (btnEn) {
      btnEn.addEventListener('click', () => {
        if (this.lang !== 'en') {
          this.lang = 'en';
          this.cache.setLanguage('en');
          updateLangButtons();
          this.renderAll();
        }
      });
    }

    if (btnHi) {
      btnHi.addEventListener('click', () => {
        if (this.lang !== 'hi') {
          this.lang = 'hi';
          this.cache.setLanguage('hi');
          updateLangButtons();
          this.renderAll();
        }
      });
    }

    updateLangButtons();
  }

  setupGlobalVoiceButton() {
    const voiceBtn = document.getElementById('btn-global-voice');
    if (!voiceBtn) return;

    // When clicked, open the conversational voice assistant with Male/Female voice selector
    voiceBtn.addEventListener('click', () => {
      this.voiceAssistant.open();
    });
  }

  setupUniversalSearch() {
    const searchContainer = document.getElementById('universal-search-container');
    if (!searchContainer) return;

    this.universalSearchBar = new UniversalSearchBar(
      'universal-search-container',
      () => this.lang,
      (loc) => {
        if (loc.mappedClusterId) {
          this.cache.setCurrentCluster(loc.mappedClusterId);
          this.renderAll();
        }
        if (loc.name && this.cropSuitabilityDoctor) {
          const locStr = loc.state ? `${loc.name}, ${loc.state}` : loc.name;
          this.cropSuitabilityDoctor.setLocation(locStr);
        }
      }
    );
    this.universalSearchBar.init();
  }

  setupViewNavigation() {
    // 1. First Ribbon Tabs
    const tabButtons = document.querySelectorAll('.nav-tab-btn');
    tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetSectionId = btn.getAttribute('data-target');
        this.switchView(targetSectionId);
      });
    });

    // 2. Hero CTA buttons
    const ctaCropDoctor = document.getElementById('hero-btn-crop-doctor');
    if (ctaCropDoctor) {
      ctaCropDoctor.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchView('section-crop-doctor');
      });
    }

    const ctaSellingAdvisor = document.getElementById('hero-btn-selling-advisor');
    if (ctaSellingAdvisor) {
      ctaSellingAdvisor.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchView('section-selling-advisor');
      });
    }

    const ctaSchemes = document.getElementById('hero-btn-schemes');
    if (ctaSchemes) {
      ctaSchemes.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchView('section-schemes');
      });
    }

    const ctaPrices = document.getElementById('hero-btn-prices');
    if (ctaPrices) {
      ctaPrices.addEventListener('click', (e) => {
        e.preventDefault();
        this.switchView('section-prices');
      });
    }

    // 3. Back to home buttons on each subpage view
    document.querySelectorAll('.btn-back-home').forEach(btn => {
      btn.addEventListener('click', () => {
        this.switchView('section-hero');
      });
    });

    // 4. Toggle all sections / single page mode
    document.querySelectorAll('.btn-toggle-all-sections').forEach(btn => {
      btn.addEventListener('click', () => {
        this.isAllSectionsMode = !this.isAllSectionsMode;
        this.applyViewVisibility();
      });
    });
  }

  switchView(viewId) {
    this.currentViewId = viewId;
    this.isAllSectionsMode = false;
    this.applyViewVisibility();

    // Invalidate Leaflet map size if switching to map view
    if (viewId === 'section-map' && this.mapRenderer && this.mapRenderer.map) {
      setTimeout(() => {
        this.mapRenderer.map.invalidateSize();
      }, 150);
    }

    // Smooth scroll to top of main content
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  applyViewVisibility() {
    const allViews = [
      'section-hero',
      'section-crop-doctor',
      'section-selling-advisor',
      'section-schemes',
      'section-prices',
      'section-map',
      'section-weather',
      'section-pesticides',
      'section-procurement',
      'section-pipeline'
    ];

    // Update active tab buttons in First Ribbon
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-target') === this.currentViewId);
    });

    // Update text on toggle all buttons
    document.querySelectorAll('.txt-toggle-all').forEach(txt => {
      txt.textContent = this.isAllSectionsMode
        ? (this.lang === 'hi' ? 'फ़ोकस्ड मोड' : 'Focused Page View')
        : (this.lang === 'hi' ? 'सभी भाग देखें' : 'Show All Sections');
    });

    // Update back button text
    document.querySelectorAll('.txt-back-home').forEach(txt => {
      txt.textContent = this.lang === 'hi' ? '← मुख्य पृष्ठ पर जाएं' : '← Back to Home';
    });

    // Search bar is visible on Home view or in Show All mode
    const searchWrap = document.getElementById('universal-search-container');
    if (searchWrap) {
      searchWrap.style.display = (this.currentViewId === 'section-hero' || this.isAllSectionsMode) ? 'block' : 'none';
    }

    if (this.isAllSectionsMode) {
      allViews.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.style.display = 'block';
          el.classList.remove('active-page-view');
        }
      });
      return;
    }

    // Single-view page mode (requested by user)
    allViews.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      if (id === this.currentViewId) {
        el.style.display = 'block';
        el.classList.add('active-page-view');
      } else {
        el.style.display = 'none';
        el.classList.remove('active-page-view');
      }
    });
  }

  renderStatusBar() {
    const cluster = this.cache.getCurrentCluster();
    const t = translations[this.lang] || translations.en;
    const barEl = document.getElementById('cluster-status-bar-container');
    if (!barEl) return;

    barEl.innerHTML = `
      <div class="container">
        <div class="status-bar-inner">
          <div class="status-cluster-info">
            <span class="status-pill">
              <span class="status-dot"></span>
              <span>⚡ ${t.clusterCached}</span>
            </span>
            <span>📍 <strong>${this.lang === 'hi' ? cluster.nameHi : cluster.nameEn}</strong></span>
          </div>
          <div class="status-metrics">
            <span class="status-metric-item"><strong>${cluster.cacheHitRate}</strong> ${t.cacheHitRate}</span>
            <span class="status-metric-item"><strong>${cluster.activeFarmers}+</strong> ${t.benefitingFarmers}</span>
          </div>
        </div>
      </div>
    `;
  }

  renderHero() {
    const t = translations[this.lang] || translations.en;
    const cluster = this.cache.getCurrentCluster();

    document.documentElement.lang = this.lang;
    document.title = this.lang === 'hi'
      ? 'किसान सेतु (KisanSetu) - पारदर्शी मंडी भाव और एआई फसल परामर्श'
      : 'KisanSetu - Transparent Mandi Prices & AI Crop Advisory for Farmers';

    // Brand and header
    const brandBadge = document.getElementById('brand-badge-tag');
    if (brandBadge) brandBadge.textContent = t.brandBadge;
    const brandTagline = document.getElementById('brand-tagline-text');
    if (brandTagline) brandTagline.textContent = t.brandTagline;

    const voiceTxt = document.getElementById('txt-global-voice');
    if (voiceTxt) voiceTxt.textContent = this.lang === 'hi' ? 'किसान सहायक' : 'AI Voice Assistant';

    // Hero elements
    const titleEl = document.getElementById('hero-title-text');
    const subEl = document.getElementById('hero-sub-text');
    const hackTag = document.getElementById('hero-hack-tag');
    const clusterBadge = document.getElementById('hero-cluster-badge');

    if (titleEl) titleEl.textContent = t.heroTitle;
    if (subEl) subEl.textContent = t.heroSubtitle;
    if (hackTag) hackTag.textContent = t.heroBadgeTag || '🌾 KisanSetu';
    if (clusterBadge) {
      clusterBadge.textContent = t.heroMediaBadge || (this.lang === 'hi' ? '⚡ स्मार्ट बाजार व वाहन लॉजिस्टिक्स' : '⚡ Smart Market & Transport Intelligence');
    }

    // Telemetry Stat Cards in Hero
    const statLbl1 = document.getElementById('t-stat-lbl-1');
    const statSub1 = document.getElementById('t-stat-sub-1');
    if (statLbl1) statLbl1.textContent = t.heroStatMandisLbl || (this.lang === 'hi' ? '🏛️ सक्रिय मंडियां' : '🏛️ Active Mandis');
    if (statSub1) statSub1.textContent = t.heroStatMandisSub || (this.lang === 'hi' ? '100% ई-नाम लाइव सिंक' : '100% eNAM Live Sync');

    const statLbl2 = document.getElementById('t-stat-lbl-2');
    const statSub2 = document.getElementById('t-stat-sub-2');
    if (statLbl2) statLbl2.textContent = t.heroStatArrivalsLbl || (this.lang === 'hi' ? '📦 आज की कुल आवक' : '📦 Total Daily Arrivals');
    if (statSub2) statSub2.textContent = t.heroStatArrivalsSub || (this.lang === 'hi' ? 'कल से +4.6% अधिक' : '+4.6% vs Yesterday');

    const statLbl3 = document.getElementById('t-stat-lbl-3');
    const statSub3 = document.getElementById('t-stat-sub-3');
    if (statLbl3) statLbl3.textContent = t.heroStatMarginLbl || (this.lang === 'hi' ? '⚖️ बिचौलियों का मार्जिन' : '⚖️ Middleman Margin');
    if (statSub3) statSub3.textContent = t.heroStatMarginSub || (this.lang === 'hi' ? 'सीधी बिक्री से ₹18/किग्रा बचत' : 'Direct trade saves ₹18/kg');

    const statLbl4 = document.getElementById('t-stat-lbl-4');
    const statSub4 = document.getElementById('t-stat-sub-4');
    if (statLbl4) statLbl4.textContent = t.heroStatColdLbl || (this.lang === 'hi' ? '🏬 उपलब्ध कोल्ड स्पेस' : '🏬 Cold Storage Vacancy');
    if (statSub4) statSub4.textContent = t.heroStatColdSub || (this.lang === 'hi' ? 'ई-एनडब्ल्यूआर बंधक ऋण' : 'e-NWR Pledge Loans');

    const heroBtnCropDoctor = document.getElementById('hero-btn-crop-doctor-text');
    if (heroBtnCropDoctor) heroBtnCropDoctor.textContent = `🌱 ${this.lang === 'hi' ? 'अपनी जमीन व फसल जांचें' : 'Check Land & Crop Yield'}`;
    const heroBtnSellingAdvisor = document.getElementById('hero-btn-selling-advisor-text');
    if (heroBtnSellingAdvisor) heroBtnSellingAdvisor.textContent = `⚖️ ${this.lang === 'hi' ? 'कहाँ बेचूं? (दलाल बनाम सीधी बिक्री)' : 'Where to Sell (Mandi vs Direct Consumer)'}`;
    const heroBtnSchemes = document.getElementById('hero-btn-schemes-text');
    if (heroBtnSchemes) heroBtnSchemes.textContent = `🏛️ ${this.lang === 'hi' ? 'सरकारी योजनाएं व 4% ऋण' : 'Govt Schemes & 4% Loans'}`;
    const heroBtnPrices = document.getElementById('hero-btn-prices-text');
    if (heroBtnPrices) heroBtnPrices.textContent = `📊 ${this.lang === 'hi' ? 'लाइव मार्केट वॉच' : 'Live Market Watch'}`;

    // First Ribbon Navigation Tabs
    const tabHome = document.getElementById('nav-tab-home-text');
    if (tabHome) tabHome.textContent = t.navHome;
    const tabCropDoctor = document.getElementById('nav-tab-crop-doctor-text');
    if (tabCropDoctor) tabCropDoctor.textContent = t.navCropDoctor || (this.lang === 'hi' ? 'भूमि व फसल डॉक्टर' : 'Land & Crop Doctor');
    const tabSellingAdvisor = document.getElementById('nav-tab-selling-advisor-text');
    if (tabSellingAdvisor) tabSellingAdvisor.textContent = t.navSellingAdvisor || (this.lang === 'hi' ? 'कहाँ बेचूं? (दलाल बनाम सीधी बिक्री)' : 'Where to Sell (Mandi vs Direct Consumer)');
    const tabSchemes = document.getElementById('nav-tab-schemes-text');
    if (tabSchemes) tabSchemes.textContent = t.navSchemes || (this.lang === 'hi' ? 'सरकारी योजनाएं व 4% ऋण' : 'Govt Schemes & 4% Loans');
    const tabPrices = document.getElementById('nav-tab-prices-text');
    if (tabPrices) tabPrices.textContent = this.lang === 'hi' ? 'मार्केट वॉच व मुनाफा' : 'Market Watch & Arbitrage';
    const tabMap = document.getElementById('nav-tab-map-text');
    if (tabMap) tabMap.textContent = t.navMap;
    const tabWeather = document.getElementById('nav-tab-weather-text');
    if (tabWeather) tabWeather.textContent = this.lang === 'hi' ? 'कटाई मौसम व छोटे खेत' : 'Weather & Small Plots';
    const tabPesticides = document.getElementById('nav-tab-pesticides-text');
    if (tabPesticides) tabPesticides.textContent = this.lang === 'hi' ? 'कीटनाशक व फसल सुरक्षा' : 'Pesticides & Protection';
    const tabProcurement = document.getElementById('nav-tab-procurement-text');
    if (tabProcurement) {
      tabProcurement.textContent = this.lang === 'hi' ? 'सीधा खरीद-बिक्री मंच' : 'Direct Buyer Hub';
    }
    const tabPipeline = document.getElementById('nav-tab-pipeline-text');
    if (tabPipeline) tabPipeline.textContent = t.navAgentPipeline;

    // Header Admin and Profile Texts
    const adminTxt = document.getElementById('txt-nav-admin');
    if (adminTxt) {
      adminTxt.textContent = this.lang === 'hi' ? 'एडमिन मंडी अपडेट' : 'Admin Price Console';
    }
    this.updateUserProfileBadge();

    // Update section titles
    const priceTitle = document.getElementById('price-section-title');
    const priceSub = document.getElementById('price-section-sub');
    if (priceTitle) priceTitle.textContent = t.priceCompareTitle;
    if (priceSub) priceSub.textContent = t.priceCompareSub;

    const advTitle = document.getElementById('advisor-section-title');
    const advSub = document.getElementById('advisor-section-sub');
    if (advTitle) advTitle.textContent = t.cropDoctorTitle;
    if (advSub) advSub.textContent = t.cropDoctorSub;

    // Footer
    const footerBrand = document.getElementById('footer-brand-text');
    if (footerBrand) footerBrand.textContent = `🌾 ${t.footerBrand}`;
    const footerNote = document.getElementById('footer-hackathon-note');
    if (footerNote) footerNote.textContent = t.footerNote;
    const footerSources = document.getElementById('footer-sources-text');
    if (footerSources) footerSources.textContent = t.footerSources;
  }

  renderAll() {
    const cluster = this.cache.getCurrentCluster();

    // 1. Status Bar & Hero
    this.renderStatusBar();
    this.renderHero();

    // 2. Dynamic Live Market Ticker
    if (!this.liveTicker) {
      this.liveTicker = new LiveTicker(
        'live-ticker-container',
        () => this.cache.getCurrentCluster(),
        () => this.lang
      );
      this.liveTicker.init();
    } else {
      this.liveTicker.update();
    }

    // 3. Universal Location Search Bar
    if (this.universalSearchBar) {
      this.universalSearchBar.update();
    }

    // 4. Land & Crop Suitability Doctor
    const csdContainer = document.getElementById('crop-suitability-doctor-container');
    if (csdContainer) {
      if (!this.cropSuitabilityDoctor) {
        this.cropSuitabilityDoctor = new CropSuitabilityDoctor(
          'crop-suitability-doctor-container',
          () => this.lang
        );
        this.cropSuitabilityDoctor.init();
      } else {
        this.cropSuitabilityDoctor.update();
      }
    }

    // 5. Selling Decision Engine (Dalal vs Direct Consumer)
    const saContainer = document.getElementById('selling-advisor-container');
    if (saContainer) {
      if (!this.sellingAdvisor) {
        this.sellingAdvisor = new SellingAdvisor(
          'selling-advisor-container',
          () => this.lang
        );
        this.sellingAdvisor.init();
      } else {
        this.sellingAdvisor.update();
      }
    }

    // 6. Pan-India Government Schemes, Subsidies & Loans Portal
    const schContainer = document.getElementById('farmer-schemes-portal-container');
    if (schContainer) {
      if (!this.farmerSchemesPortal) {
        this.farmerSchemesPortal = new FarmerSchemesPortal(
          'farmer-schemes-portal-container',
          () => this.lang
        );
        this.farmerSchemesPortal.init();
      } else {
        this.farmerSchemesPortal.update();
      }
    }

    // 4. Price Cards & Smart Arbitrage Optimizer
    const arbContainer = document.getElementById('arbitrage-optimizer-container');
    if (arbContainer) {
      if (!this.arbitrageOptimizer) {
        this.arbitrageOptimizer = new ArbitrageOptimizer(
          'arbitrage-optimizer-container',
          () => this.lang
        );
        this.arbitrageOptimizer.init();
      } else {
        this.arbitrageOptimizer.update();
      }
    }

    const priceCardsContainer = document.getElementById('price-cards-list');
    renderPriceCards(priceCardsContainer, cluster, this.lang);

    // 5. Regional Demand & Warehouse Map
    if (!this.mapRenderer) {
      this.mapRenderer = new MapRenderer(
        'map-section-container',
        () => this.cache.getCurrentCluster(),
        () => this.lang
      );
      this.mapRenderer.init();
    } else {
      this.mapRenderer.update();
    }

    // 6. Crop & Soil Doctor Form + Visual Photo & Lab Appointment Doctor
    const vDocContainer = document.getElementById('visual-soil-doctor-container');
    if (vDocContainer) {
      if (!this.visualSoilDoctor) {
        this.visualSoilDoctor = new VisualSoilDoctor(
          'visual-soil-doctor-container',
          () => this.lang
        );
        this.visualSoilDoctor.init();
      } else {
        this.visualSoilDoctor.update();
      }
    }

    const advisorContainer = document.getElementById('advisor-form-container');
    if (!this.advisorModule) {
      this.advisorModule = setupAdvisorForm(
        advisorContainer,
        () => this.cache.getCurrentCluster(),
        () => this.lang
      );
    } else {
      this.advisorModule.update();
    }

    // 7. Harvest Weather & Small-Plot Micro-Farming Planner
    const weatherContainer = document.getElementById('weather-harvest-planner-container');
    if (weatherContainer) {
      if (!this.weatherHarvestPlanner) {
        this.weatherHarvestPlanner = new WeatherHarvestPlanner(
          'weather-harvest-planner-container',
          () => this.lang
        );
        this.weatherHarvestPlanner.init();
      } else {
        this.weatherHarvestPlanner.update();
      }
    }

    // 8. Crop Protection & Pesticide Prescription Center
    const pestContainer = document.getElementById('pesticide-advisor-container');
    if (pestContainer) {
      if (!this.pesticideAdvisor) {
        this.pesticideAdvisor = new PesticideAdvisor(
          'pesticide-advisor-container',
          () => this.lang
        );
        this.pesticideAdvisor.init();
      } else {
        this.pesticideAdvisor.update();
      }
    }

    // 7. Volunteer Ground-Truth Hub
    const volunteerContainer = document.getElementById('volunteer-section-container');
    if (!this.volunteerModule) {
      this.volunteerModule = setupVolunteerSection(
        volunteerContainer,
        () => this.cache.getCurrentCluster(),
        () => this.lang,
        () => {
          this.renderAll();
        }
      );
    } else {
      this.volunteerModule.update();
    }

    // 8. Direct Farmer-to-Buyer Trade Portal
    const procurementContainer = document.getElementById('buyer-trade-hub-container');
    if (procurementContainer) {
      if (!this.buyerTradeHub) {
        this.buyerTradeHub = new BuyerTradeHub(
          'buyer-trade-hub-container',
          () => this.lang
        );
        this.buyerTradeHub.init();
      } else {
        this.buyerTradeHub.update();
      }
    }

    // 9. Agent Builder Pipeline
    const pipelineContainer = document.getElementById('agent-pipeline-container');
    if (!this.agentBuilderModule) {
      this.agentBuilderModule = setupAgentBuilderTab(
        pipelineContainer,
        () => this.cache.getCurrentCluster(),
        () => this.lang,
        () => {
          this.cache.refreshClusterFromScraper(this.cache.currentClusterId);
          this.renderAll();
        }
      );
    } else {
      this.agentBuilderModule.update();
    }

    // 9. Synchronize View Visibility
    this.applyViewVisibility();
  }
}

// Bootstrap on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  new KisanApp();
});
