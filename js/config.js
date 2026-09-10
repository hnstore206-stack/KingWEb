/**
 * =========================================================================
 * ⚙️ ملف إعدادات وبيانات الموقع (Configuration File)
 * =========================================================================
 * يمكنك من خلال هذا الملف تعديل كل شيء في الموقع بسهولة تامة:
 * - الاسم والوصف والروابط الشخصية
 * - الكلمات المتحركة (Typewriter)
 * - المشاريع وحالتها وصورها
 * - المهارات واللغات البرمجية
 * - الصوت / التلاوة القرآنية وبياناتها
 * - نظام الألوان (رمادي وأسود فاخر)
 * =========================================================================
 */

const CONFIG = {
  // 👤 الملف الشخصي والبيانات الرئيسية (Profile & Hero Section)
  profile: {
    siteTitle: "#Taim | Developer Fivem & Bots & Webs",
    name: "#Taim",
    logoText: "#Taim",
    badge: "Available for work",
    roles: ["Developer Fivem", "Developer Bots", "Developer Webs"], // الكلمات التي تتبدل تلقائياً
    bio: "Turning ideas into reality is an important part.",
    avatar: "img/d13f2214aca7999932216b122fc0407b.jpg", // الصورة الشخصية
    footerBio: "Turning ideas into reality is an important part.",
    copyright: "© 2026 #Taim. All rights reserved."
  },

  // 🌐 روابط التواصل الاجتماعي (Social Links)
  social: [
    {
      name: "Discord",
      url: "https://discord.com/users/1092446133944582216",
      iconSvg: '<svg viewBox="0 0 24 24"><path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"></path></svg>'
    }
  ],

  // 🚀 قائمة المشاريع (Projects List)
  projects: [
    {
      title: "HnStore",
      tag: "Live",
      tagType: "live", // 'live' يعطي لون ناصع، 'secret' يعطي لون أحمر
      description: "Best Fivem Store",
      image: "img/HnStore.png",
      url: "https://discord.gg/zxy633nPJP",
      buttonText: "Visit",
      isSecret: false,
      span: 2 // حجم البطاقة بالشبكة (1 إلى 4)
    },
    {
      title: "Vexo",
      tag: "Live",
      tagType: "live",
      description: "Best Bot System for Discord",
      image: "img/512.gif",
      url: "https://discord.gg/fQ45G7pQV",
      buttonText: "Visit",
      isSecret: false,
      span: 2
    },
    {
      title: "Rise Again",
      tag: "Live",
      tagType: "live",
      description: "Best Fivem Server",
      image: "img/soon.png",
      url: "https://discord.gg/McuS9nvTZh",
      buttonText: "Visit",
      isSecret: false,
      span: 2
    }
  ],

  // ⚡ المهارات والتقنيات (Skills & Technologies)
  skills: [
    { name: "Developer Fivem", icon: "images/fivem.svg" },
    { name: "Developer Bots", icon: "images/bot.svg" },
    { name: "Developer Webs", icon: "images/web.svg" },
    { name: "Lua", icon: "images/lua.svg" },
    { name: "JavaScript", icon: "images/javascript.svg" },
    { name: "Node.js", icon: "images/nodejs.svg" },
    { name: "React", icon: "images/react.svg" },
    { name: "HTML5", icon: "images/html5.svg" },
    { name: "CSS3", icon: "images/css3.svg" }
  ],

  // 🎵 إعدادات مشغل الصوت / التلاوة (Floating Audio Player)
  audio: {
    enabled: true,
    title: "فلا أقسم بالخنس .",
    status: "يتم تلاوة",
    cover: "https://i.ibb.co/SD10fXq5/Screenshot-2026-09-10-210350.png",
    src: "sounds/Download.mp4",
    loop: true
  },

  // 🎨 التحكم في الألوان والمظهر العام (رمادي وأسود فاخر Apple Liquid)
  theme: {
    preset: "gray-black",
    colors: {
      bg: "#08080a",                          // خلفية سوداء عميقة ونقية
      bgSecondary: "#111114",                 // خلفية ثانوية للبطاقات
      accent: "#ffffff",                      // أبيض ناصع / بلاتينيوم
      accentSecondary: "#d4d4d8",             // فضي تيتانيوم
      accentLight: "#f4f4f5",                 // أبيض فاتح
      accentGlow: "rgba(255, 255, 255, 0.08)",
      accentDim: "rgba(255, 255, 255, 0.06)",
      border: "rgba(255, 255, 255, 0.10)",    // حدود زجاجية واضحة ونقية
      borderHover: "rgba(255, 255, 255, 0.25)",
      text: "#ffffff",                        // أبيض ناصع عالي الوضوح
      textSecondary: "#a1a1aa",               // رمادي فضي واضح
      textMuted: "#71717a",                   // رمادي هادئ
      orb1: "rgba(255, 255, 255, 0.03)",      // هالة إضاءة خفيفة نقية
      orb2: "rgba(160, 160, 175, 0.02)",
      orb3: "rgba(255, 255, 255, 0.015)"
    }
  },

  // 🛡️ إعدادات إضافية (Settings)
  settings: {
    enableDevtoolsProtection: false
  }
};

// إتاحة الإعدادات في النطاق العام (Global Scope)
window.CONFIG = CONFIG;
