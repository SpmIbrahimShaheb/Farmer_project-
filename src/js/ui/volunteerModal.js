// Volunteer & Community Ground-Truth Hub
// Allows local volunteers, FPOs, and farmers to add verified spot pricing, local crop names, and micro-weather notes

import { cacheManager } from '../agents/cacheManager.js';
import { translations } from '../data/translations.js';

export function setupVolunteerSection(container, getActiveCluster, getLang, onDataUpdated) {
  if (!container) return;

  function render() {
    const lang = getLang();
    const t = translations[lang] || translations.en;
    const cluster = getActiveCluster();

    const posts = cluster.volunteerPosts || [];

    container.innerHTML = `
      <div class="volunteer-section-inner">
        <div class="volunteer-header-row">
          <div>
            <h3 class="section-heading">🤝 ${t.volunteerTitle}</h3>
            <p class="section-desc">${t.volunteerSub}</p>
          </div>
          <button type="button" id="btn-open-volunteer-modal" class="btn-secondary-action">
            ${t.btnOpenVolunteerModal}
          </button>
        </div>

        <div class="volunteer-cards-grid">
          ${posts.length === 0 ? `<div class="empty-state">${lang === 'hi' ? 'इस मंडी केंद्र में अभी कोई स्थानीय रिपोर्ट नहीं है। पहली रिपोर्ट आप दर्ज करें!' : 'No volunteer reports yet for this market hub. Be the first to report!'}</div>` : ''}
          ${posts.map(post => {
            const author = lang === 'hi' ? (post.authorHi || post.author) : (post.authorEn || post.author);
            const timeAgo = lang === 'hi' ? (post.timeAgoHi || post.timeAgo) : (post.timeAgoEn || post.timeAgo);
            const crop = lang === 'hi' ? (post.cropHi || post.crop) : (post.cropEn || post.crop);
            const verifiedPrice = lang === 'hi' ? (post.verifiedPriceHi || post.verifiedPrice) : (post.verifiedPriceEn || post.verifiedPrice);
            const note = lang === 'hi' ? (post.noteHi || post.note) : (post.noteEn || post.note);

            return `
              <div class="volunteer-card glass-panel">
                <div class="vol-card-top">
                  <div class="vol-author-meta">
                    <span class="vol-avatar">👨‍🌾</span>
                    <div>
                      <strong class="vol-author-name">${author}</strong>
                      <div class="vol-time">${timeAgo} • <span class="vol-verified">✓ ${t.volunteerBadge}</span></div>
                    </div>
                  </div>
                  <span class="vol-crop-pill">${crop}</span>
                </div>
                <div class="vol-price-highlight">${verifiedPrice}</div>
                <p class="vol-note">${note}</p>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Volunteer Contribution Modal -->
      <div class="modal-backdrop" id="volunteer-modal" style="display: none;">
        <div class="modal-dialog glass-panel">
          <div class="modal-header">
            <h4>📝 ${t.modalTitle}</h4>
            <button type="button" class="btn-close-modal" id="btn-close-modal">&times;</button>
          </div>
          <form id="volunteer-form" class="modal-form">
            <div class="form-group">
              <label>${t.modalAuthorLabel}</label>
              <input type="text" id="vol-input-name" placeholder="${t.modalAuthorPlaceholder}" required />
            </div>

            <div class="form-row">
              <div class="form-group">
                <label>${t.modalCropLabel}</label>
                <input type="text" id="vol-input-crop" placeholder="${t.modalCropPlaceholder}" required />
              </div>
              <div class="form-group">
                <label>${t.modalPriceLabel}</label>
                <input type="number" id="vol-input-price" placeholder="${t.modalPricePlaceholder}" required />
              </div>
            </div>

            <div class="form-group">
              <label>${t.modalNotesLabel}</label>
              <textarea id="vol-input-notes" rows="3" placeholder="${t.modalNotesPlaceholder}" required></textarea>
            </div>

            <div class="modal-actions">
              <button type="button" class="btn-secondary" id="btn-cancel-modal">${t.modalCancelBtn}</button>
              <button type="submit" class="btn-primary-action">${t.modalSubmitBtn}</button>
            </div>
          </form>
        </div>
      </div>
    `;

    bindModalEvents();
  }

  function bindModalEvents() {
    const modal = container.querySelector('#volunteer-modal');
    const openBtn = container.querySelector('#btn-open-volunteer-modal');
    const closeBtn = container.querySelector('#btn-close-modal');
    const cancelBtn = container.querySelector('#btn-cancel-modal');
    const form = container.querySelector('#volunteer-form');

    const showModal = () => { if (modal) modal.style.display = 'flex'; };
    const hideModal = () => { if (modal) modal.style.display = 'none'; };

    if (openBtn) openBtn.addEventListener('click', showModal);
    if (closeBtn) closeBtn.addEventListener('click', hideModal);
    if (cancelBtn) cancelBtn.addEventListener('click', hideModal);

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const cluster = getActiveCluster();
        const nameVal = container.querySelector('#vol-input-name').value.trim();
        const cropVal = container.querySelector('#vol-input-crop').value.trim();
        const priceVal = parseFloat(container.querySelector('#vol-input-price').value.trim()) || 0;
        const notesVal = container.querySelector('#vol-input-notes').value.trim();

        cacheManager.addVolunteerSubmission(cluster.id, {
          author: nameVal,
          cropName: cropVal,
          price: priceVal,
          notes: notesVal
        });

        hideModal();
        render();
        if (onDataUpdated) onDataUpdated();
      });
    }
  }

  return {
    update: render
  };
}
