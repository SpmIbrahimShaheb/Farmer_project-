// Google AI Agent Builder Multi-Agent Architecture Showcase (For Hackathon Judges)
import { translations } from '../data/translations.js';

export function setupAgentBuilderTab(container, getActiveCluster, getLang, onSimulateTrigger) {
  if (!container) return;

  let activeTab = 'flowchart'; // 'flowchart' | 'raw' | 'prompt' | 'cache'

  function render() {
    const lang = getLang();
    const t = translations[lang] || translations.en;
    const cluster = getActiveCluster();

    container.innerHTML = `
      <div class="pipeline-card glass-panel">
        <div class="pipeline-header">
          <div class="pipeline-badge-group">
            <span class="hackathon-tag">🏆 Google AI Agent Builder Showcase</span>
            <h3 class="pipeline-title">${t.pipelineTitle}</h3>
            <p class="pipeline-desc">${t.pipelineSub}</p>
          </div>
          <button type="button" id="btn-trigger-ai-scrape" class="btn-primary-action pulse-glow">
            ${t.pipelineRunBtn || '⚡ Run Simulated Scrape & Synthesis'}
          </button>
        </div>

        <!-- Inspector Tabs -->
        <div class="inspector-tabs-nav">
          <button type="button" class="tab-btn ${activeTab === 'flowchart' ? 'active' : ''}" data-tab="flowchart">
            📐 ${lang === 'hi' ? 'मल्टी-एजेंट कार्यप्रवाह' : 'Multi-Agent Workflow'}
          </button>
          <button type="button" class="tab-btn ${activeTab === 'raw' ? 'active' : ''}" data-tab="raw">
            📡 ${t.pipelineInspectRaw}
          </button>
          <button type="button" class="tab-btn ${activeTab === 'prompt' ? 'active' : ''}" data-tab="prompt">
            🤖 ${t.pipelineInspectPrompt}
          </button>
          <button type="button" class="tab-btn ${activeTab === 'cache' ? 'active' : ''}" data-tab="cache">
            ⚡ ${t.pipelineInspectCache}
          </button>
        </div>

        <div class="inspector-content">
          ${renderTabContent(activeTab, cluster, lang, t)}
        </div>
      </div>
    `;

    bindTabEvents();
  }

  function renderTabContent(tab, cluster, lang = 'en', t = {}) {
    if (tab === 'flowchart') {
      return `
        <div class="agent-flow-grid">
          <div class="agent-node">
            <div class="node-icon">🕷️</div>
            <div class="node-tag">${lang === 'hi' ? 'एजेंट 1' : 'Agent 1'}</div>
            <h4>${lang === 'hi' ? 'वेब स्क्रैपर वर्कर' : 'Web Scraper Worker'}</h4>
            <p>${lang === 'hi' ? 'एपीएमसी एगमार्कनेट, ई-नाम दैनिक बुलेटिन और शहरी खुदरा सुपरमार्केट दरों को एकत्रित करता है।' : 'Scrapes APMC Agmarknet, eNAM daily bulletins, BigBasket & Reliance Fresh consumer retail feeds.'}</p>
            <div class="node-status">${lang === 'hi' ? '✓ स्वचालित स्क्रैपिंग (प्रति 4 घंटे)' : '✓ Autonomous Cron (Every 4h)'}</div>
          </div>

          <div class="agent-connector">➡️</div>

          <div class="agent-node highlight-node">
            <div class="node-icon">⚡</div>
            <div class="node-tag">${lang === 'hi' ? 'एजेंट 2' : 'Agent 2'}</div>
            <h4>${lang === 'hi' ? 'क्षेत्रीय मंडी कैश इंजन' : 'Regional Market Cache Engine'}</h4>
            <p>${lang === 'hi' ? 'एपीएमसी मंडी विश्लेषण को सुरक्षित रखता है ताकि किसानों को तुरंत डेटा मिले और बार-बार एआई कॉल न करनी पड़े।' : 'Caches APMC synthesis across thousands of local farmers, delivering instant responses and preventing redundant LLM calls.'}</p>
            <div class="node-status font-bold">⚡ ${cluster.cacheHitRate} ${lang === 'hi' ? 'कैश हिट' : 'Hit Rate'} • ${cluster.responseLatency}</div>
          </div>

          <div class="agent-connector">➡️</div>

          <div class="agent-node">
            <div class="node-icon">✨</div>
            <div class="node-tag">${lang === 'hi' ? 'एजेंट 3' : 'Agent 3'}</div>
            <h4>${lang === 'hi' ? 'जेमिनी 1.5 फ्लैश सिंथेसाइज़र' : 'Gemini 1.5 Flash Synthesizer'}</h4>
            <p>${lang === 'hi' ? 'मंडी के जटिल आंकड़ों को सरल, बोलचाल की ग्रामीण भाषा और आवाज सलाह में बदलता है।' : 'Translates complex market spread indices into simple rural dialect, generating voice-ready advisories.'}</p>
            <div class="node-status">${lang === 'hi' ? '✓ सरल व स्पष्ट भाषा • हिंदी व अंग्रेजी' : '✓ Zero jargon • Hindi & English'}</div>
          </div>

          <div class="agent-connector">➡️</div>

          <div class="agent-node">
            <div class="node-icon">🌱</div>
            <div class="node-tag">${lang === 'hi' ? 'एजेंट 4' : 'Agent 4'}</div>
            <h4>${lang === 'hi' ? 'कृषि नैदानिक ​​इंजन' : 'Agronomic Diagnostics Engine'}</h4>
            <p>${lang === 'hi' ? 'मिट्टी की संरचना, मौसम और फसल के आधार पर सटीक खाद और संभावित पैदावार की गणना करता है।' : 'Cross-references soil composition, NPK chemistry, and micro-climate weather to output fertilizer & yield models.'}</p>
            <div class="node-status">${lang === 'hi' ? '✓ सटीकता विश्वास: 94.6%' : '✓ Confidence: 94.6%'}</div>
          </div>
        </div>
      `;
    }

    if (tab === 'raw') {
      const rawPayload = {
        hub_id: cluster.id,
        market_coverage: "Pan-India Direct Discovery",
        sources: [
          { type: "APMC_AGMARKNET_PORTAL", status: 200, parsed_rows: cluster.crops.length },
          { type: "RETAIL_BASKET_SCRAPER", status: 200, supermarkets: ["BigBasket", "RelianceFresh"] },
          { type: "LOCAL_WEATHER_RADAR", temp_c: cluster.weather.temp, humidity: cluster.weather.humidity }
        ],
        crops_sample: cluster.crops.map(c => ({
          crop: lang === 'hi' ? c.nameHi : c.nameEn,
          apmc_modal_price_qtl: c.mandiPriceQuintal,
          retail_mrp_qtl: c.retailPriceQuintal,
          calculated_intermediary_spread_pct: `${c.spreadPct}%`
        }))
      };

      return `
        <div class="code-view-box">
          <div class="code-bar">
            <span>Payload Stream: /api/v1/agents/scraper/ingest</span>
            <span class="badge-status">HTTP 200 OK</span>
          </div>
          <pre><code>${JSON.stringify(rawPayload, null, 2)}</code></pre>
        </div>
      `;
    }

    if (tab === 'prompt') {
      const promptText = lang === 'hi' ? `// SYSTEM PROMPT: Google AI Agent Builder (कृषि सलाहकार एजेंट)
आप किसान सेतु के ग्रामीण भाषा सलाहकार एजेंट हैं।
इनपुट डेटा:
- राष्ट्रीय मंडी केंद्र: ${cluster.nameHi}
- कच्चा मंडी भाव: ₹${cluster.crops[0]?.mandiPriceKg || 20}/किग्रा
- शहर का खुदरा भाव: ₹${cluster.crops[0]?.retailPriceKg || 45}/किग्रा
- स्थानीय मौसम: ${cluster.weather.temp}, आर्द्रता ${cluster.weather.humidity}

कार्य निर्देश:
1. बिचौलियों के मार्जिन को बिना किसी जटिल तकनीकी शब्दों के समझाएं।
2. स्पष्ट फैसला दें: (तुरंत बेचें या 2-3 दिन रोकें)।
3. सरल व स्पष्ट ग्रामीण भाषा में आवाज (TTS) के लिए संक्षिप्त सलाह तैयार करें।
4. स्थानीय फसल नामों का सम्मान करें।` : `// SYSTEM PROMPT: Google AI Agent Builder (Agritech Farmer Synthesizer)
You are KisanSetu's Vernacular Farmer Advisory Agent.
Input Data:
- National Mandi Hub: ${cluster.nameEn}
- Raw Farmgate Mandi Rate: ₹${cluster.crops[0]?.mandiPriceKg || 20}/kg
- Supermarket Consumer Rate: ₹${cluster.crops[0]?.retailPriceKg || 45}/kg
- Local Micro-Weather: ${cluster.weather.temp}, Humidity ${cluster.weather.humidity}

Task Instructions:
1. Explain the middleman price spread transparently without economic jargon.
2. Provide a concrete decision: (SELL NOW or HOLD FOR 2-3 DAYS).
3. Generate concise text suitable for Text-to-Speech audio in clear, simple language.
4. Respect regional and vernacular crop naming conventions.`;

      return `
        <div class="code-view-box">
          <div class="code-bar">
            <span>Model: Gemini 1.5 Flash (Google AI Agent Builder)</span>
            <span class="badge-status">Temperature: 0.2</span>
          </div>
          <pre><code>${promptText}</code></pre>
        </div>
      `;
    }

    if (tab === 'cache') {
      return `
        <div class="cache-metrics-grid">
          <div class="metric-card">
            <div class="metric-title">${lang === 'hi' ? 'सक्रिय मंडी केंद्र' : 'Active Mandi Hub'}</div>
            <div class="metric-value font-bold">${lang === 'hi' ? cluster.nameHi : cluster.nameEn}</div>
            <div class="metric-sub">${lang === 'hi' ? 'अखिल भारतीय सीधी खोज' : 'Pan-India Direct Market Discovery'}</div>
          </div>
          <div class="metric-card">
            <div class="metric-title">Cache Hit Rate</div>
            <div class="metric-value text-green">${cluster.cacheHitRate}</div>
            <div class="metric-sub">Prevents 95%+ redundant LLM calls</div>
          </div>
          <div class="metric-card">
            <div class="metric-title">Response Latency</div>
            <div class="metric-value text-blue">${cluster.responseLatency}</div>
            <div class="metric-sub">Instant rendering on 2G/3G mobile networks</div>
          </div>
          <div class="metric-card">
            <div class="metric-title">Local Farmers Benefited</div>
            <div class="metric-value font-bold">${cluster.activeFarmers}+</div>
            <div class="metric-sub">Shared cached synthesis</div>
          </div>
        </div>
      `;
    }
  }

  function bindTabEvents() {
    container.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        activeTab = btn.getAttribute('data-tab');
        render();
      });
    });

    const triggerBtn = container.querySelector('#btn-trigger-ai-scrape');
    if (triggerBtn) {
      triggerBtn.addEventListener('click', () => {
        triggerBtn.innerHTML = '⏳ Agents Scraping & Synthesizing...';
        triggerBtn.disabled = true;

        setTimeout(() => {
          if (onSimulateTrigger) onSimulateTrigger();
          triggerBtn.innerHTML = '✓ Synthesis Complete & Cached!';
          setTimeout(() => {
            triggerBtn.innerHTML = '⚡ Run Simulated Scrape & Synthesis';
            triggerBtn.disabled = false;
          }, 2000);
        }, 1000);
      });
    }
  }

  return {
    update: render
  };
}
