// Renderer for Pan-India Mandi vs Retail Financial Commodity Cards
// Styled after Zerodha & Groww clean fintech market terminals

import { speechHelper } from './speechHelper.js';
import { translations } from '../data/translations.js';

export function renderPriceCards(container, cluster, lang = 'hi') {
  if (!container || !cluster) return;
  const t = translations[lang] || translations.en;

  const cardsHtml = cluster.crops.map(crop => {
    const cropName = lang === 'hi' ? crop.nameHi : crop.nameEn;
    const localName = lang === 'hi' ? (crop.localNameHi || crop.localName) : (crop.localNameEn || crop.nameEn);
    const aiSummary = lang === 'hi' ? crop.aiSummaryHi : crop.aiSummaryEn;
    const voiceText = lang === 'hi' ? crop.voiceHi : crop.voiceEn;
    const sourceStr = lang === 'hi' ? (crop.scrapedSourceHi || crop.scrapedSource) : (crop.scrapedSourceEn || crop.scrapedSource);
    const sourceParts = sourceStr ? sourceStr.split('&') : ['APMC Mandi', 'City Supermarket'];

    // Groww/Zerodha Action Signal Badge
    let recBadgeClass = 'badge-hold';
    let recLabel = t.quickHold;
    if (crop.recommendation === 'SELL') {
      recBadgeClass = 'badge-sell';
      recLabel = t.quickSell;
    } else if (crop.recommendation === 'FAIR') {
      recBadgeClass = 'badge-fair';
      recLabel = t.quickFair;
    }

    // Daily percentage calculation
    const isRising = crop.status === 'rising';
    const deltaPct = isRising ? '+3.8%' : '-2.4%';
    const deltaClass = isRising ? 'delta-positive' : 'delta-negative';
    const deltaArrow = isRising ? '▲' : '▼';

    // Day High / Low estimates
    const minP = crop.minPriceKg || (crop.mandiPriceKg * 0.9).toFixed(1);
    const maxP = crop.maxPriceKg || (crop.mandiPriceKg * 1.1).toFixed(1);

    // Sparkline SVG calculation
    const sparkline = generateSparklineSvg(crop.trend7d, isRising);

    const catLabels = {
      vegetable: lang === 'hi' ? 'सब्जी' : 'Vegetable',
      grain: lang === 'hi' ? 'अनाज' : 'Grain',
      spice: lang === 'hi' ? 'मसाला' : 'Spice',
      cash: lang === 'hi' ? 'नकदी फसल' : 'Commercial',
      fruit: lang === 'hi' ? 'फल' : 'Fruit'
    };
    const categoryLabel = catLabels[crop.category] || crop.category;

    return `
      <div class="fintech-commodity-card" data-crop-id="${crop.id}">
        <!-- Top Asset Header -->
        <div class="f-card-header">
          <div class="f-asset-left">
            <div class="f-crop-icon-wrap">
              <img src="${crop.image}" alt="${cropName}" class="f-crop-img" loading="lazy" />
            </div>
            <div class="f-asset-title-block">
              <div class="f-crop-name-row">
                <h3 class="f-crop-name">${cropName}</h3>
                <span class="f-category-pill">${categoryLabel}</span>
              </div>
              <span class="f-crop-sub">${localName}</span>
            </div>
          </div>
          <div class="f-asset-signal">
            <span class="f-signal-badge ${recBadgeClass}">${recLabel}</span>
          </div>
        </div>

        <!-- Main Price & Delta Display (Groww / Zerodha Terminal Style) -->
        <div class="f-price-primary-row">
          <div class="f-main-price-wrap">
            <div class="f-price-num-group">
              <span class="f-currency">₹</span>
              <span class="f-price-val">${crop.mandiPriceKg}</span>
              <span class="f-unit">/ kg</span>
            </div>
            <div class="f-sub-rate-wrap">
              <span class="f-quintal-rate">₹${crop.mandiPriceQuintal.toLocaleString('en-IN')} / Qtl</span>
              <span class="f-delta-pill ${deltaClass}">${deltaArrow} ${deltaPct}</span>
            </div>
          </div>
          <div class="f-sparkline-wrap">
            ${sparkline}
          </div>
        </div>

        <!-- Day Range Bar (52w high/low style) -->
        <div class="f-day-range-box">
          <div class="f-range-labels">
            <span>${lang === 'hi' ? 'न्यूनतम:' : 'Low:'} ₹${minP}</span>
            <span class="f-range-mid">${lang === 'hi' ? 'आज का दायरा' : "Today's Range"}</span>
            <span>${lang === 'hi' ? 'अधिकतम:' : 'High:'} ₹${maxP}</span>
          </div>
          <div class="f-range-track">
            <div class="f-range-thumb" style="left: 65%;"></div>
          </div>
        </div>

        <!-- Farmgate vs Retail Middleman Spread Analysis -->
        <div class="f-spread-container">
          <div class="f-spread-header">
            <span class="f-spread-label">${t.middlemanSpread}</span>
            <span class="f-spread-val">${crop.spreadPct}% (${t.gapPerKg || 'Gap'}: ₹${(crop.retailPriceKg - crop.mandiPriceKg).toFixed(1)}/kg)</span>
          </div>
          <div class="f-spread-meter">
            <div class="f-meter-bar" style="width: ${crop.spreadPct}%;"></div>
          </div>
          <div class="f-spread-breakdown">
            <div class="f-spread-leg">
              <span class="f-leg-dot dot-farm"></span>
              <span class="f-leg-title">${lang === 'hi' ? 'मंडी मॉडल भाव' : 'Mandi Farmgate'}:</span>
              <strong>₹${crop.mandiPriceKg}/kg</strong>
            </div>
            <div class="f-spread-leg">
              <span class="f-leg-dot dot-retail"></span>
              <span class="f-leg-title">${lang === 'hi' ? 'शहरी खुदरा' : 'City Retail'}:</span>
              <strong>₹${crop.retailPriceKg}/kg</strong>
            </div>
          </div>
        </div>

        <!-- AI Trading Advice & Source Box -->
        <div class="f-advisory-box">
          <div class="f-advisory-header">
            <span class="f-ai-icon">💡</span>
            <span class="f-advisory-title">${t.aiAdvisoryHeader}</span>
          </div>
          <p class="f-advisory-text">${aiSummary}</p>
          <div class="f-source-row">
            <span>🏛️ ${sourceParts[0]?.trim()}</span>
            <span>🛒 ${sourceParts[1]?.trim() || 'Urban Retail'}</span>
          </div>
        </div>

        <!-- Action Bar -->
        <div class="f-card-actions">
          <button type="button" class="f-btn-voice-listen btn-play-voice" data-voice-text="${encodeURIComponent(voiceText)}">
            <span class="f-btn-icon">🔊</span>
            <span>${lang === 'hi' ? 'ऑडियो सलाह सुनें' : 'Listen Advice'}</span>
          </button>
          <button type="button" class="f-btn-transport-link" onclick="window.kisanAppInstance ? window.kisanAppInstance.switchView('section-map') : null">
            <span>🚚</span>
            <span>${lang === 'hi' ? 'अन्य शहरों में मांग देखें' : 'High-Demand Cities'}</span>
          </button>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = cardsHtml;
  bindPriceCardEvents(container, lang);
}

function generateSparklineSvg(points, isRising) {
  if (!points || points.length < 2) return '';
  const width = 110;
  const height = 36;
  const padding = 4;

  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = (max - min) || 1;

  const coords = points.map((val, idx) => {
    const x = padding + (idx / (points.length - 1)) * (width - 2 * padding);
    const y = height - padding - ((val - min) / range) * (height - 2 * padding);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  const pathD = `M ${coords.join(' L ')}`;
  const strokeColor = isRising ? '#00B386' : '#EB5B3C';
  const fillColor = isRising ? 'rgba(0, 179, 134, 0.08)' : 'rgba(235, 91, 60, 0.08)';

  // Closed area for background gradient
  const areaD = `${pathD} L ${width - padding},${height} L ${padding},${height} Z`;

  return `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" class="f-sparkline-svg" aria-label="7 day trend">
      <path d="${areaD}" fill="${fillColor}" />
      <path d="${pathD}" fill="none" stroke="${strokeColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  `;
}

function bindPriceCardEvents(container, lang) {
  const voiceButtons = container.querySelectorAll('.btn-play-voice');
  voiceButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const text = decodeURIComponent(btn.getAttribute('data-voice-text'));
      if (text) {
        speechHelper.speak(text, lang, {
          onStart: () => {
            btn.classList.add('playing');
            btn.innerHTML = `<span>⏹️</span> <span>${lang === 'hi' ? 'रोकें' : 'Stop'}</span>`;
          },
          onEnd: () => {
            btn.classList.remove('playing');
            btn.innerHTML = `<span class="f-btn-icon">🔊</span> <span>${lang === 'hi' ? 'ऑडियो सलाह सुनें' : 'Listen Advice'}</span>`;
          }
        });
      }
    });
  });
}
