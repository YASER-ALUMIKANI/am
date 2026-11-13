/**
 * ============================================================================
 * المهندس أحمد المحلاوي | خبير صيانة الشاشات العملاقة والإلكترونيات المتقدمة
 * Main Interactive Application Controller — assets/js/main.js
 * Architected by: Eng. Naif (Senior Web Architect)
 * ============================================================================
 */

(function () {
  'use strict';

  /**
   * 1. Interactive Before / During / After Switcher on Portfolio Cards
   * @param {string} projPrefix - e.g. 'proj1', 'proj2', 'proj3', 'proj4'
   * @param {string} stageKey - 'before' | 'during' | 'after'
   * @param {string} imgUrl - Image URL to display
   * @param {string} captionText - Stage caption text
   * @param {string} badgeClasses - Tailwind classes for the stage badge
   */
  function switchProjectStage(projPrefix, stageKey, imgUrl, captionText, badgeClasses) {
    const imgEl = document.getElementById(projPrefix + '-img');
    const captionEl = document.getElementById(projPrefix + '-stage-caption');
    const badgeEl = document.getElementById(projPrefix + '-badge');
    const tabs = document.querySelectorAll('.' + projPrefix + '-tab');

    if (imgEl) {
      imgEl.style.opacity = '0.35';
      setTimeout(() => {
        imgEl.src = imgUrl;
        imgEl.style.opacity = '1';
      }, 120);
    }

    if (captionEl) {
      captionEl.innerText = captionText;
    }

    if (badgeEl) {
      badgeEl.className = 'absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-extrabold shadow-lg ' + badgeClasses;
      if (stageKey === 'before') badgeEl.innerText = 'قبل الصيانة (العطل)';
      if (stageKey === 'during') badgeEl.innerText = 'أثناء الصيانة بالمعمل';
      if (stageKey === 'after') badgeEl.innerText = 'بعد الصيانة (100%)';
    }

    tabs.forEach((btn, idx) => {
      btn.classList.remove('stage-tab-active');
      if (
        (stageKey === 'before' && idx === 0) ||
        (stageKey === 'during' && idx === 1) ||
        (stageKey === 'after' && idx === 2)
      ) {
        btn.classList.add('stage-tab-active');
      }
    });
  }

  /**
   * 2. Dynacord PowerMate 1600 Gallery Switcher
   * @param {string} url - High-res image URL
   * @param {string} caption - Caption text for the selected view
   * @param {HTMLElement} thumbBtn - Clicked thumbnail button element
   */
  function setDynacordImage(url, caption, thumbBtn) {
    const mainImg = document.getElementById('dynacord-main-img');
    const capEl = document.getElementById('dynacord-img-caption');
    if (mainImg) mainImg.src = url;
    if (capEl) capEl.innerText = caption;

    document.querySelectorAll('.dynacord-thumb').forEach((btn) => {
      btn.classList.remove('border-amber-400', 'opacity-100');
      btn.classList.add('border-slate-800', 'opacity-70');
    });

    if (thumbBtn) {
      thumbBtn.classList.remove('border-slate-800', 'opacity-70');
      thumbBtn.classList.add('border-amber-400', 'opacity-100');
    }
  }

  /**
   * 3. FAQ Accordion Toggle
   * @param {number} index - Zero-based FAQ item index
   */
  function toggleFaq(index) {
    const content = document.getElementById('faq-content-' + index);
    const icon = document.getElementById('faq-icon-' + index);
    if (!content || !icon) return;

    const isHidden = content.classList.contains('hidden');
    if (isHidden) {
      content.classList.remove('hidden');
      icon.classList.add('rotate-180');
    } else {
      content.classList.add('hidden');
      icon.classList.remove('rotate-180');
    }
  }

  /**
   * 4. Select Pixel Pitch Helper (Populates Booking Form Input)
   * @param {string} pitch - e.g. 'P1', 'P2.5', 'P3.91', 'P4'
   */
  function selectPitchInForm(pitch) {
    const pitchInput = document.getElementById('pixel-pitch');
    if (pitchInput) {
      pitchInput.value = pitch;
      setTimeout(() => {
        pitchInput.focus();
      }, 300);
    }
  }

  /**
   * 5. High-Resolution Lightbox Modal Functions
   * @param {string} imgSrc - Image URL to inspect
   * @param {string} captionText - Image description caption
   */
  function openLightbox(imgSrc, captionText) {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const modalCap = document.getElementById('lightbox-caption');
    if (modal && modalImg) {
      modalImg.src = imgSrc;
      if (modalCap) modalCap.innerText = captionText || 'معاينة الصورة عالية الدقة';
      modal.classList.remove('hidden');
    }
  }

  function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    if (modal) modal.classList.add('hidden');
  }

  /**
   * 6. Initialize Event Listeners (Mobile Navigation, Portfolio Filters, Form, Scroll)
   */
  function initApp() {
    // A. Mobile Menu Drawer Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = document.getElementById('mobile-menu-icon');

    if (mobileMenuBtn && mobileMenu && mobileMenuIcon) {
      mobileMenuBtn.addEventListener('click', () => {
        const isHidden = mobileMenu.classList.contains('hidden');
        if (isHidden) {
          mobileMenu.classList.remove('hidden');
          mobileMenuIcon.classList.remove('fa-bars');
          mobileMenuIcon.classList.add('fa-xmark');
        } else {
          mobileMenu.classList.add('hidden');
          mobileMenuIcon.classList.remove('fa-xmark');
          mobileMenuIcon.classList.add('fa-bars');
        }
      });

      document.querySelectorAll('.mobile-nav-link').forEach((link) => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
          mobileMenuIcon.classList.remove('fa-xmark');
          mobileMenuIcon.classList.add('fa-bars');
        });
      });
    }

    // B. Portfolio Category Filter
    const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filterValue = btn.getAttribute('data-filter');

        filterButtons.forEach((b) => b.classList.remove('filter-btn-active'));
        btn.classList.add('filter-btn-active');

        portfolioItems.forEach((item) => {
          const categories = item.getAttribute('data-category') || '';
          if (filterValue === 'all' || categories.includes(filterValue)) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        });
      });
    });

    // C. Interactive Maintenance Booking Form Submission
    const maintenanceForm = document.getElementById('maintenance-form');
    const formSuccessState = document.getElementById('form-success-state');
    const formSummaryText = document.getElementById('form-summary-text');
    const whatsappSubmitLink = document.getElementById('whatsapp-direct-submit-link');

    if (maintenanceForm) {
      maintenanceForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = (document.getElementById('client-name')?.value || '').trim();
        const phone = (document.getElementById('client-phone')?.value || '').trim();
        const city = document.getElementById('client-city')?.value || '';
        const service = document.getElementById('service-type')?.value || '';
        const pitch = (document.getElementById('pixel-pitch')?.value || '').trim() || 'غير محدد';
        const details = (document.getElementById('fault-details')?.value || '').trim();

        const whatsappNumber =
          (window.MAHALLAWY_DATA &&
            window.MAHALLAWY_DATA.engineer &&
            window.MAHALLAWY_DATA.engineer.whatsappNumber) ||
          '966569096117';

        const waMessage =
          `السلام عليكم باشمهندس أحمد المحلاوي،\n` +
          `طلب خدمة عبر الموقع الرسمي:\n` +
          `• الاسم/الجهة: ${name}\n` +
          `• رقم الجوال: ${phone}\n` +
          `• المدينة: ${city}\n` +
          `• الخدمة المطلوبة: ${service}\n` +
          `• مقاس البكسل: ${pitch}\n` +
          `• التفاصيل: ${details}`;

        const encodedWa = encodeURIComponent(waMessage);
        const waUrl = `https://wa.me/${whatsappNumber}?text=${encodedWa}`;

        if (whatsappSubmitLink) {
          whatsappSubmitLink.href = waUrl;
        }
        if (formSummaryText) {
          formSummaryText.innerText = `شكراً لك (${name}) من (${city}). تم تجهيز تفاصيل طلبك (${service} — مقاس ${pitch}). اضغط على الزر أدناه لإرسالها مباشرة إلى واتساب المهندس أحمد المحلاوي (+966 56 909 6117).`;
        }
        if (formSuccessState) {
          formSuccessState.classList.remove('hidden');
          formSuccessState.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      });
    }

    // D. Lightbox Backdrop Click & Escape Key Close
    const lightboxModal = document.getElementById('lightbox-modal');
    if (lightboxModal) {
      lightboxModal.addEventListener('click', (e) => {
        if (e.target.id === 'lightbox-modal') closeLightbox();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });

    // E. Back to Top Button Visibility on Scroll
    const backToTopBtn = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
      if (!backToTopBtn) return;
      if (window.scrollY > 500) {
        backToTopBtn.classList.remove('hidden');
        backToTopBtn.classList.add('flex');
      } else {
        backToTopBtn.classList.add('hidden');
        backToTopBtn.classList.remove('flex');
      }
    });

    // F. Page Visitor Counter (Live Global + Local Persistence + Smooth Animation)
    initVisitorCounter();
  }

  /**
   * 8. Page Visitor Counter
   */
  function initVisitorCounter() {
    const heroCounterEl = document.getElementById('hero-visitor-counter');
    const footerCounterEl = document.getElementById('footer-visitor-counter');
    if (!heroCounterEl && !footerCounterEl) return;

    const BASE_COUNT = 14820;
    const STORAGE_KEY = 'mahallawy_page_visits';
    const SESSION_KEY = 'mahallawy_session_counted';

    let localVisits = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
    if (isNaN(localVisits) || localVisits < 0) localVisits = 0;

    if (!sessionStorage.getItem(SESSION_KEY)) {
      localVisits += 1;
      localStorage.setItem(STORAGE_KEY, String(localVisits));
      sessionStorage.setItem(SESSION_KEY, '1');
    }

    const fallbackTotal = BASE_COUNT + localVisits;

    function animateCounter(targetValue) {
      const startValue = Math.max(0, targetValue - 45);
      const duration = 1100;
      const startTime = performance.now();

      function updateFrame(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(startValue + (targetValue - startValue) * eased);
        const formatted = current.toLocaleString('en-US');

        if (heroCounterEl) heroCounterEl.textContent = formatted;
        if (footerCounterEl) footerCounterEl.textContent = formatted;

        if (progress < 1) {
          requestAnimationFrame(updateFrame);
        }
      }

      requestAnimationFrame(updateFrame);
    }

    // Immediate render with local persistent counter
    animateCounter(fallbackTotal);

    // Attempt global counter sync via CounterAPI
    fetch('https://api.counterapi.dev/v1/ahmed-elmahallawy-led/visits/up')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && typeof data.count === 'number') {
          const globalTotal = BASE_COUNT + data.count;
          const finalCount = Math.max(fallbackTotal, globalTotal);
          const formatted = finalCount.toLocaleString('en-US');
          if (heroCounterEl) heroCounterEl.textContent = formatted;
          if (footerCounterEl) footerCounterEl.textContent = formatted;
        }
      })
      .catch(() => {
        // Silent fallback: localStorage counter is already displayed
      });
  }

  // Expose public handlers globally for inline HTML attributes
  window.switchProjectStage = switchProjectStage;
  window.setDynacordImage = setDynacordImage;
  window.toggleFaq = toggleFaq;
  window.selectPitchInForm = selectPitchInForm;
  window.openLightbox = openLightbox;
  window.closeLightbox = closeLightbox;

  // Boot application safely
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
