/**
 * ============================================================================
 * المهندس أحمد المحلاوي | خبير صيانة الشاشات العملاقة والإلكترونيات المتقدمة
 * Tailwind CSS Configuration — assets/js/tailwind.config.js
 * Architected by: Eng. Naif (Senior Web Architect)
 * ============================================================================
 */

window.tailwind = window.tailwind || {};
tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#020617',
          900: '#070e24',
          800: '#0c1938',
          700: '#132654',
        },
        tech: {
          cyan: '#06b6d4',
          sky: '#0ea5e9',
          electric: '#2563eb',
          emerald: '#10b981',
          amber: '#f59e0b',
        }
      },
      boxShadow: {
        'glow-cyan': '0 0 28px -4px rgba(6, 182, 212, 0.45)',
        'glow-blue': '0 0 35px -5px rgba(14, 165, 233, 0.4)',
        'glow-emerald': '0 0 25px -4px rgba(16, 185, 129, 0.45)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to left, rgba(14, 165, 233, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(14, 165, 233, 0.07) 1px, transparent 1px)',
      }
    }
  }
};
