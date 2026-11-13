/**
 * ============================================================================
 * المهندس أحمد المحلاوي | خبير صيانة الشاشات العملاقة والإلكترونيات المتقدمة
 * Centralized Structured Data Store — assets/js/data.js
 * Architected by: Eng. Naif (Senior Web Architect)
 * ============================================================================
 */

window.MAHALLAWY_DATA = {
  engineer: {
    nameAr: 'المهندس أحمد المحلاوي',
    shortNameAr: 'م. أحمد المحلاوي',
    handle: '@Ahmed_El_Mahalawy',
    harajMemberId: '19950895',
    harajProfileUrl: 'https://haraj.com.sa/users/ahmed%20el%20mahalawy',
    verification: 'موثق عبر النفاذ الوطني الموحد',
    phoneLocal: '+966 56 909 6117',
    phoneIntl: '+966569096117',
    whatsappNumber: '966569096117',
    whatsappBaseUrl: 'https://wa.me/966569096117',
    citiesCovered: [
      { city: 'الطائف', district: 'حي حوايا' },
      { city: 'مكة المكرمة', district: 'الشرائع' },
      { city: 'جدة', district: 'حي السامر' },
      { city: 'الرياض', district: 'حي الملك عبدالعزيز' },
      { city: 'المدينة المنورة', district: 'تغطية شاملة' }
    ]
  },

  supportedPixelPitches: [
    { pitch: 'P1', primary: true },
    { pitch: 'P1.2', primary: false },
    { pitch: 'P1.3', primary: false },
    { pitch: 'P1.4', primary: false },
    { pitch: 'P1.5', primary: true },
    { pitch: 'P1.6', primary: false },
    { pitch: 'P1.8', primary: true },
    { pitch: 'P1.9', primary: false },
    { pitch: 'P2', primary: true },
    { pitch: 'P2.2', primary: false },
    { pitch: 'P2.5', primary: true },
    { pitch: 'P2.6', primary: false },
    { pitch: 'P2.82', primary: false },
    { pitch: 'P2.84', primary: false },
    { pitch: 'P2.976', primary: false },
    { pitch: 'P3', primary: true },
    { pitch: 'P3.5', primary: false },
    { pitch: 'P3.91', primary: true },
    { pitch: 'P4', primary: true },
    { pitch: 'P5', primary: true }
  ],

  portfolioProjects: {
    proj1: {
      id: 'proj1',
      title: 'مشروع إعادة تأهيل كابينة شاشة عملاقة (4 مديولات) بالكامل',
      location: 'الطائف • كابينة 4 مديولات',
      categories: ['rescue', 'modules'],
      stages: {
        before: {
          imgUrl: 'https://mimg6cdn.haraj.com.sa/userfiles30/2025-4-28/750x1000-1_-hCj5fheg5DUEgJ.jpg',
          caption: 'قبل الصيانة: بكسلات مكسورة وفراغات سوداء',
          badgeText: 'قبل الصيانة (العطل)',
          badgeClasses: 'bg-rose-500 text-white'
        },
        during: {
          imgUrl: 'https://mimg6cdn.haraj.com.sa/userfiles30/2025-4-28/750x1000-1_-0rswmFev5aG6aa.jpg',
          caption: 'أثناء الصيانة: فك المديول وفحص الباورسبلاي والتوصيلات',
          badgeText: 'أثناء الصيانة بالمعمل',
          badgeClasses: 'bg-amber-500 text-slate-950'
        },
        after: {
          imgUrl: 'https://mimg6cdn.haraj.com.sa/userfiles30/2025-4-28/1000x750-1_-96CsOIJVTKC6rw.jpg',
          caption: 'بعد الصيانة: استعادة التجانس الكامل للكابينة 100%',
          badgeText: 'بعد الصيانة (100%)',
          badgeClasses: 'bg-emerald-500 text-slate-950'
        }
      }
    },
    proj2: {
      id: 'proj2',
      title: 'إنقاذ شاشة LED تعرضت لأعطال مضاعفة على يد غير المتخصصين',
      location: 'عملية إنقاذ هندسي • الطائف',
      categories: ['rescue'],
      stages: {
        before: {
          imgUrl: 'https://mimg6cdn.haraj.com.sa/userfiles30/2025-10-25/1156x520-1_-rDiFXyIM5ootHt.jpg',
          caption: 'قبل الصيانة: تشوهات وخطوط كارثية بعد عبث غير المتخصصين',
          badgeText: 'قبل الصيانة (العطل)',
          badgeClasses: 'bg-rose-500 text-white'
        },
        during: {
          imgUrl: 'https://mimg6cdn.haraj.com.sa/userfiles30/2025-10-25/1000x750-1_-zzqAE7pQ62AV8y.jpg',
          caption: 'أثناء الصيانة: إعادة تأهيل الكبائن والبوردات في المعمل',
          badgeText: 'أثناء الصيانة بالمعمل',
          badgeClasses: 'bg-amber-500 text-slate-950'
        },
        after: {
          imgUrl: 'https://mimg6cdn.haraj.com.sa/userfiles30/2025-10-25/1000x750-1_-LJNBXgEZo7U2HI.jpg',
          caption: 'بعد الصيانة: الكابينة تعمل بنسبة 100% بإضاءة صافية ومتجانسة',
          badgeText: 'بعد الصيانة (100%)',
          badgeClasses: 'bg-emerald-500 text-slate-950'
        }
      }
    },
    proj3: {
      id: 'proj3',
      title: 'معالجة أعطال الخطوط الخضراء العمودية وتركيب الشبك والماسكات',
      location: 'جدة / الطائف • صيانة مديولات وماسك',
      categories: ['modules'],
      stages: {
        before: {
          imgUrl: 'https://mimg6cdn.haraj.com.sa/userfiles30/2025-4-28/1000x750-1_-b2av5WYz04wbHT.jpg',
          caption: 'قبل الصيانة: أعطال خطوط خضراء عمودية وبكسلات تالفة',
          badgeText: 'قبل الصيانة (العطل)',
          badgeClasses: 'bg-rose-500 text-white'
        },
        during: {
          imgUrl: 'https://mimg6cdn.haraj.com.sa/userfiles30/2025-4-28/1000x750-1_-5J0WrBQKhpZgfA.jpg',
          caption: 'أثناء الصيانة: لحام البكسلات وتركيب الشبك والماسكات الجديدة',
          badgeText: 'أثناء الصيانة بالمعمل',
          badgeClasses: 'bg-amber-500 text-slate-950'
        },
        after: {
          imgUrl: 'https://mimg6cdn.haraj.com.sa/userfiles30/2025-4-28/1000x750-1_-ZCmlY9YwDkPdMN.jpg',
          caption: 'بعد الصيانة: إضاءة كاملة ومتجانسة 100% على الكابينة',
          badgeText: 'بعد الصيانة (100%)',
          badgeClasses: 'bg-emerald-500 text-slate-950'
        }
      }
    },
    proj4: {
      id: 'proj4',
      title: 'صيانة وبرمجة شاشة عرض مسرحية عملاقة لقاعة مؤتمرات واحتفالات',
      location: 'الرياض / المملكة • شاشة مسرح عملاقة',
      categories: ['stages'],
      stages: {
        before: {
          imgUrl: 'https://mimg6cdn.haraj.com.sa/userfiles30/2025-3-2/816x612-1_-wgtXw7Kn7Oc5tW.jpg',
          caption: 'قبل التشغيل: الشاشة العملاقة مثبتة على الـ Truss داخل القاعة',
          badgeText: 'قبل الصيانة (العطل)',
          badgeClasses: 'bg-slate-700 text-white'
        },
        during: {
          imgUrl: 'https://mimg6cdn.haraj.com.sa/userfiles30/2025-3-2/750x1000-1_-3mJpHIKLzcLeVo.jpg',
          caption: 'أثناء الصيانة: فحص وإصلاح البكسلات المفقودة على المديولات',
          badgeText: 'أثناء الصيانة بالمعمل',
          badgeClasses: 'bg-amber-500 text-slate-950'
        },
        after: {
          imgUrl: 'https://mimg6cdn.haraj.com.sa/userfiles30/2025-3-2/1000x750-1_-oOYwoeLsO1n2PJ.jpg',
          caption: 'بعد الصيانة والبرمجة: الشاشة العملاقة تعمل بكفاءة وألوان متطابقة 100%',
          badgeText: 'بعد الصيانة (100%)',
          badgeClasses: 'bg-emerald-500 text-slate-950'
        }
      }
    }
  }
};
