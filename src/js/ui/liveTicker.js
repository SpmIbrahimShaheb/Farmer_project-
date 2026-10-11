// Dynamic Live APMC & Commodity Market Indices Ticker
// Inspired by Zerodha Kite & Groww financial market tapes

export class LiveTicker {
  constructor(containerId, getActiveCluster, getLang) {
    this.containerId = containerId;
    this.getActiveCluster = getActiveCluster;
    this.getLang = getLang;
  }

  getIndices() {
    const lang = this.getLang();
    if (lang === 'hi') {
      return [
        { symbol: "कृषि सूचकांक (AGRI-50)", value: "18,450.20", delta: "+1.18% ▲", positive: true },
        { symbol: "प्याज (लासलगांव)", value: "₹1,950/क्विं", delta: "+3.8% ▲", positive: true },
        { symbol: "गेहूं (बठिंडा मालवा)", value: "₹2,425/क्विं", delta: "+0.8% ▲", positive: true },
        { symbol: "टमाटर (कोलार/नासिक)", value: "₹1,400/क्विं", delta: "-2.4% ▼", positive: false },
        { symbol: "कपास (गुंटूर यार्ड)", value: "₹7,350/क्विं", delta: "+1.4% ▲", positive: true },
        { symbol: "सोयाबीन (इंदौर मंडी)", value: "₹4,680/क्विं", delta: "+0.6% ▲", positive: true },
        { symbol: "चना दाल (बीकानेर)", value: "₹5,820/क्विं", delta: "+1.9% ▲", positive: true }
      ];
    } else {
      return [
        { symbol: "AGRI-INDEX 50", value: "18,450.20", delta: "+1.18% ▲", positive: true },
        { symbol: "ONION (Lasalgaon APMC)", value: "₹1,950/Qtl", delta: "+3.8% ▲", positive: true },
        { symbol: "WHEAT (Bhatinda Grain)", value: "₹2,425/Qtl", delta: "+0.8% ▲", positive: true },
        { symbol: "TOMATO (Kolar / Nashik)", value: "₹1,400/Qtl", delta: "-2.4% ▼", positive: false },
        { symbol: "COTTON (Guntur Yard)", value: "₹7,350/Qtl", delta: "+1.4% ▲", positive: true },
        { symbol: "SOYBEAN (Indore APMC)", value: "₹4,680/Qtl", delta: "+0.6% ▲", positive: true },
        { symbol: "CHICKPEA (Bikaner Market)", value: "₹5,820/Qtl", delta: "+1.9% ▲", positive: true }
      ];
    }
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

    const indices = this.getIndices();
    const lang = this.getLang();

    container.innerHTML = `
      <div class="fintech-ticker-wrap">
        <div class="f-ticker-badge">
          <span class="f-live-pulse-dot"></span>
          <span class="f-ticker-badge-text">${lang === 'hi' ? 'लाइव एपीएमसी' : 'LIVE APMC FEED'}</span>
        </div>
        <div class="f-ticker-track-container">
          <div class="f-ticker-marquee">
            ${[...indices, ...indices].map(item => `
              <div class="f-ticker-item">
                <span class="f-ticker-symbol">${item.symbol}</span>
                <span class="f-ticker-price">${item.value}</span>
                <span class="f-ticker-delta ${item.positive ? 'positive' : 'negative'}">${item.delta}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }
}
