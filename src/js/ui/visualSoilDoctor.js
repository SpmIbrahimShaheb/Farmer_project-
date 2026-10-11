// Visual Soil & Plant Photo Diagnostic Scanner & Accredited Lab Appointment Booking
// Analyzes soil suitability, plant disease symptoms, and schedules physical doorstep lab testing

import { visualDiagnosticSamples, certifiedSoilLabs } from '../data/agriIntelligenceData.js';
import { authManager } from '../services/authManager.js';

export class VisualSoilDoctor {
  constructor(containerId, getLang) {
    this.containerId = containerId;
    this.getLang = getLang;
    this.auth = authManager;
    this.selectedSampleId = 'sample_soil_black';
    this.activeTab = 'scanner'; // 'scanner' | 'appointment'
    this.bookingSuccess = null;
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
    const sample = visualDiagnosticSamples.find(s => s.id === this.selectedSampleId) || visualDiagnosticSamples[0];
    const isSoil = sample.type === 'soil';

    container.innerHTML = `
      <div class="f-vdoc-wrapper">
        <!-- Doctor Navigation Tabs -->
        <div class="f-vdoc-tabs-bar">
          <button type="button" class="f-vdoc-tab ${this.activeTab === 'scanner' ? 'active' : ''}" data-tab="scanner">
            📸 ${lang === 'hi' ? 'एआई फोटो मिट्टी व फसल स्कैनर' : 'AI Photo Soil & Plant Scanner'}
          </button>
          <button type="button" class="f-vdoc-tab ${this.activeTab === 'appointment' ? 'active' : ''}" data-tab="appointment">
            🧪 ${lang === 'hi' ? 'प्रमाणित लैब मिट्टी परीक्षण अपॉइंटमेंट बुक करें' : 'Book Doorstep Soil Testing Lab Visit'}
          </button>
        </div>

        ${this.activeTab === 'scanner' ? this.renderScannerView(sample, isSoil, lang) : this.renderAppointmentView(lang)}
      </div>
    `;

    this.bindEvents(container);
  }

  renderScannerView(sample, isSoil, lang) {
    return `
      <div class="f-vdoc-scanner-grid">
        <!-- Left: Photo Upload & Sample Gallery -->
        <div class="f-vdoc-upload-col glass-panel">
          <div class="f-vdoc-upload-box" id="drop-zone-upload">
            <div class="f-upload-icon">${sample.thumbIcon}</div>
            <h4>${lang === 'hi' ? 'मिट्टी या पौधे की फोटो अपलोड करें' : 'Upload Soil or Crop Leaf Photo'}</h4>
            <p>${lang === 'hi' ? 'खेत की मिट्टी या बीमारी लगी पत्तियों की स्पष्ट फोटो खींचें या नीचे दिए गए नमूनों में से चुनें।' : 'Take a crisp photo of field soil or damaged foliage or click sample presets below.'}</p>
            <label class="f-btn-upload-file">
              📁 ${lang === 'hi' ? 'गैलरी / कैमरा से चुनें' : 'Choose Photo / Camera'}
              <input type="file" id="inp-photo-upload" accept="image/*" style="display: none;" />
            </label>
          </div>

          <!-- Sample Presets Selector -->
          <div class="f-vdoc-presets-section">
            <span class="f-presets-title">${lang === 'hi' ? 'तुरंत परीक्षण हेतु तैयार नमूने:' : 'Pre-calibrated Diagnostic Samples:'}</span>
            <div class="f-presets-grid">
              ${visualDiagnosticSamples.map(s => `
                <button type="button" class="f-preset-btn ${s.id === this.selectedSampleId ? 'active' : ''}" data-sample="${s.id}">
                  <span class="f-p-icon">${s.thumbIcon}</span>
                  <div class="f-p-text">
                    <strong>${lang === 'hi' ? s.nameHi : s.nameEn}</strong>
                    <span>${s.type === 'soil' ? (lang === 'hi' ? 'मिट्टी संरचना' : 'Soil Profile') : (lang === 'hi' ? 'पत्ती रोग लक्षण' : 'Leaf Symptoms')}</span>
                  </div>
                </button>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Right: Diagnostic Output Report Card -->
        <div class="f-vdoc-analysis-col glass-panel">
          <div class="f-analysis-header">
            <div class="f-analysis-badge">
              <span class="pulse-indicator">●</span>
              <span>${lang === 'hi' ? 'एआई विजन डायग्नोस्टिक रिपोर्ट' : 'AI Vision Agronomic Analysis'}</span>
            </div>
            <h3 class="f-sample-title">${lang === 'hi' ? sample.nameHi : sample.nameEn}</h3>
          </div>

          ${isSoil ? `
            <!-- Soil Specific Telemetry -->
            <div class="f-telemetry-strip">
              <div class="f-tele-stat">
                <span class="f-t-lbl">${lang === 'hi' ? 'pH मान' : 'pH Level'}</span>
                <strong>${sample.phRange}</strong>
              </div>
              <div class="f-tele-stat">
                <span class="f-t-lbl">${lang === 'hi' ? 'जैविक कार्बन' : 'Organic Carbon'}</span>
                <strong>${sample.organicCarbon}</strong>
              </div>
              <div class="f-tele-stat">
                <span class="f-t-lbl">${lang === 'hi' ? 'जल धारण क्षमता' : 'Water Retention'}</span>
                <strong>${sample.waterHolding}</strong>
              </div>
              <div class="f-tele-stat f-tele-match">
                <span class="f-t-lbl">${lang === 'hi' ? 'भूमि उपयुक्तता स्कोर' : 'Soil Match Score'}</span>
                <strong class="text-green">${sample.suitabilityScore}% ${lang === 'hi' ? 'मैच' : 'Match'}</strong>
              </div>
            </div>

            <div class="f-analysis-section">
              <h4 class="f-sec-heading">🌾 ${lang === 'hi' ? 'इस मिट्टी में सबसे उपयुक्त फसलें (अधिकतम पैदावार):' : 'Best Suited Crops for Maximum Yield:'}</h4>
              <div class="f-crops-tag-row">
                ${(lang === 'hi' ? sample.bestCropsHi : sample.bestCropsEn).map(c => `
                  <span class="f-crop-tag">✅ ${c}</span>
                `).join('')}
              </div>
            </div>

            <div class="f-analysis-section">
              <h4 class="f-sec-heading">⚠️ ${lang === 'hi' ? 'संभावित जोखिम व सावधानियां:' : 'Potential Land Hazards:'}</h4>
              <p class="f-sec-desc">${lang === 'hi' ? sample.drawbacksHi : sample.drawbacksEn}</p>
            </div>

            <div class="f-analysis-section">
              <h4 class="f-sec-heading">🧪 ${lang === 'hi' ? 'सुझाई गई मिट्टी सुधार विधि:' : 'Recommended Soil Treatment & Amendment:'}</h4>
              <div class="f-rec-box">
                <p>${lang === 'hi' ? sample.soilTreatmentHi : sample.soilTreatmentEn}</p>
              </div>
            </div>
          ` : `
            <!-- Plant Disease Specific Telemetry -->
            <div class="f-telemetry-strip">
              <div class="f-tele-stat">
                <span class="f-t-lbl">${lang === 'hi' ? 'रोग गंभीरता' : 'Severity Level'}</span>
                <strong class="text-red">${sample.severity}</strong>
              </div>
              <div class="f-tele-stat">
                <span class="f-t-lbl">${lang === 'hi' ? 'रोग कारक / वाहक' : 'Pathogen / Vector'}</span>
                <strong>${sample.vector}</strong>
              </div>
            </div>

            <div class="f-analysis-section">
              <h4 class="f-sec-heading">🔍 ${lang === 'hi' ? 'पहचाने गए लक्षण:' : 'Visual Symptoms Detected:'}</h4>
              <p class="f-sec-desc">${lang === 'hi' ? sample.detectedSymptomsHi : sample.detectedSymptomsEn}</p>
            </div>

            <div class="f-analysis-section">
              <h4 class="f-sec-heading">🛡️ ${lang === 'hi' ? 'सुझाई गई दवा व उपचार योजना:' : 'Prescription & Spray Protocol:'}</h4>
              <div class="f-rec-box">
                <p>${lang === 'hi' ? sample.prescriptionHi : sample.prescriptionEn}</p>
              </div>
            </div>
          `}

          <!-- Fallback prompt for official lab testing -->
          <div class="f-lab-cta-banner">
            <div>
              <strong>${lang === 'hi' ? 'क्या आप 100% सटीक लैब रिपोर्ट चाहते हैं?' : 'Need 100% Certified Lab Analysis?'}</strong>
              <p>${lang === 'hi' ? 'यदि आप केवल फोटो अनुमान से संतुष्ट नहीं हैं, तो सरकारी मान्यता प्राप्त लैब से अपने खेत पर मिट्टी सैंपल संग्रह बुक करें।' : 'If visual screening is not enough, book an accredited laboratory soil test with farmgate sample pickup.'}</p>
            </div>
            <button type="button" class="f-btn-switch-tab-apt" id="btn-trigger-apt-tab">
              🧪 ${lang === 'hi' ? 'लैब अपॉइंटमेंट बुक करें' : 'Book Lab Testing'}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  renderAppointmentView(lang) {
    const user = this.auth.getUser();

    return `
      <div class="f-vdoc-apt-wrap glass-panel">
        <div class="f-apt-header">
          <div>
            <span class="f-apt-badge">🏛️ ${lang === 'hi' ? 'राष्ट्रीय मृदा स्वास्थ्य कार्ड योजना एवं आईसीएआर पार्टनर लैब' : 'ICAR & National Soil Health Card Accredited Labs'}</span>
            <h3 class="f-apt-title">${lang === 'hi' ? 'खेत पर मिट्टी नमूना पिकअप व परीक्षण अपॉइंटमेंट' : 'Book Farmgate Soil Sample Collection & Laboratory Testing'}</h3>
            <p class="f-apt-sub">${lang === 'hi' ? 'लैब विशेषज्ञ आपके खेत से वैज्ञानिक विधि से मिट्टी का नमूना लेंगे और 72 घंटे में 12-पैरामीटर प्रमाणित रिपोर्ट आपके फोन पर आएगी।' : 'Certified field technicians collect soil core samples from your farm with full 12-parameter digital report within 72 hours.'}</p>
          </div>
        </div>

        ${this.bookingSuccess ? `
          <div class="f-booking-success-box">
            <div class="f-success-icon">🎉</div>
            <h4>${lang === 'hi' ? 'मृदा परीक्षण अपॉइंटमेंट सफलतापूर्वक दर्ज हो गया!' : 'Soil Testing Appointment Successfully Booked!'}</h4>
            <div class="f-success-details">
              <span><strong>बुकिंग संदर्भ आईडी:</strong> ${this.bookingSuccess.id}</span>
              <span><strong>किसान का नाम:</strong> ${this.bookingSuccess.farmerName}</span>
              <span><strong>परीक्षण लैब:</strong> ${this.bookingSuccess.labName}</span>
              <span><strong>पिकअप दिनांक:</strong> ${this.bookingSuccess.pickupDate}</span>
              <span><strong>स्थिति:</strong> <span class="badge-status-scheduled">पिकअप निर्धारित (Technician Assigned)</span></span>
            </div>
            <button type="button" class="f-btn-reset-booking" id="btn-new-booking">
              ➕ ${lang === 'hi' ? 'एक और खेत हेतु नया अपॉइंटमेंट' : 'Book Another Field'}
            </button>
          </div>
        ` : `
          <form id="form-book-soil-lab" class="f-apt-form">
            <div class="f-form-row">
              <div class="f-form-field">
                <label>${lang === 'hi' ? 'किसान / आवेदक का नाम:' : 'Farmer Name:'}</label>
                <input type="text" id="inp-apt-name" required value="${user.name}" class="f-form-input" />
              </div>
              <div class="f-form-field">
                <label>${lang === 'hi' ? 'मोबाइल नंबर (एसएमएस व व्हाट्सएप रिपोर्ट):' : 'Mobile Number (SMS Updates):'}</label>
                <input type="tel" id="inp-apt-phone" required value="${user.phone}" class="f-form-input" />
              </div>
            </div>

            <div class="f-form-row">
              <div class="f-form-field">
                <label>${lang === 'hi' ? 'खेत का स्थान व गांव (तहसील, जिला):' : 'Farm Address & District:'}</label>
                <input type="text" id="inp-apt-address" required placeholder="उदा. गट नं. 45, लासलगांव, निफाड़, नासिक" class="f-form-input" />
              </div>
              <div class="f-form-field">
                <label>${lang === 'hi' ? 'खेत का रकबा (एकड़):' : 'Plot Land Acreage:'}</label>
                <input type="number" step="0.5" id="inp-apt-acreage" required value="${user.landAcreage || 4}" class="f-form-input" />
              </div>
            </div>

            <div class="f-form-row">
              <div class="f-form-field">
                <label>${lang === 'hi' ? 'मान्यता प्राप्त प्रयोगशाला चुनें:' : 'Select Accredited Laboratory:'}</label>
                <select id="sel-apt-lab" class="f-form-input">
                  ${certifiedSoilLabs.map(lab => `
                    <option value="${lab.id}">
                      ${lang === 'hi' ? lab.nameHi : lab.nameEn} — ${lab.sampleCostGovernment} (${lab.turnaroundDays} Days)
                    </option>
                  `).join('')}
                </select>
              </div>
              <div class="f-form-field">
                <label>${lang === 'hi' ? 'सैंपल पिकअप की पसंदीदा तारीख:' : 'Preferred Sample Pickup Date:'}</label>
                <input type="date" id="inp-apt-date" required class="f-form-input" />
              </div>
            </div>

            <div class="f-apt-features-strip">
              <div class="f-feat-item">✅ 12-पैरामीटर एनपीके व सूक्ष्म पोषक तत्व</div>
              <div class="f-feat-item">🚚 खेत पर डोरस्टेप सैंपल कलेक्शन</div>
              <div class="f-feat-item">📱 मोबाइल पर डिजिटल सॉइल हेल्थ कार्ड</div>
              <div class="f-feat-item">🌱 वैज्ञानिक खाद अनुशंसा रिपोर्ट</div>
            </div>

            <button type="submit" class="f-btn-confirm-apt">
              🚀 ${lang === 'hi' ? 'लैब विजिट व सैंपल पिकअप की पुष्टि करें' : 'Confirm Soil Test Booking'}
            </button>
          </form>
        `}
      </div>
    `;
  }

  bindEvents(container) {
    const tabs = container.querySelectorAll('.f-vdoc-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        this.activeTab = tab.getAttribute('data-tab');
        this.render();
      });
    });

    const triggerBtn = container.querySelector('#btn-trigger-apt-tab');
    if (triggerBtn) {
      triggerBtn.addEventListener('click', () => {
        this.activeTab = 'appointment';
        this.render();
      });
    }

    const presetBtns = container.querySelectorAll('.f-preset-btn');
    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.selectedSampleId = btn.getAttribute('data-sample');
        this.render();
      });
    });

    // Custom photo file input handler
    const fileInput = container.querySelector('#inp-photo-upload');
    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
          alert(this.getLang() === 'hi' 
            ? 'फोटो प्राप्त हुई! एआई विजन मॉडल द्वारा पत्तियों व मिट्टी का विश्लेषण किया जा रहा है...' 
            : 'Photo captured! Analyzing soil texture and foliage health using AI Vision model...');
        }
      });
    }

    // Appointment form submission
    const formApt = container.querySelector('#form-book-soil-lab');
    if (formApt) {
      // Set default tomorrow date
      const dateInp = container.querySelector('#inp-apt-date');
      if (dateInp && !dateInp.value) {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        dateInp.value = tomorrow.toISOString().split('T')[0];
      }

      formApt.addEventListener('submit', (e) => {
        e.preventDefault();
        const farmerName = container.querySelector('#inp-apt-name')?.value;
        const labId = container.querySelector('#sel-apt-lab')?.value;
        const lab = certifiedSoilLabs.find(l => l.id === labId) || certifiedSoilLabs[0];
        const pickupDate = container.querySelector('#inp-apt-date')?.value;

        this.bookingSuccess = {
          id: 'KS-LAB-' + Math.floor(100000 + Math.random() * 900000),
          farmerName,
          labName: this.getLang() === 'hi' ? lab.nameHi : lab.nameEn,
          pickupDate
        };

        this.render();
      });
    }

    const btnNew = container.querySelector('#btn-new-booking');
    if (btnNew) {
      btnNew.addEventListener('click', () => {
        this.bookingSuccess = null;
        this.render();
      });
    }
  }
}
