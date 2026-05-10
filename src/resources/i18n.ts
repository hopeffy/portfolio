import type { Locale } from "@/lib/i18n";

type UiCopy = {
  hero: {
    badge: string;
    line1: string;
    line2: string;
    ctaWork: string;
    ctaContact: string;
    role: string;
  };
  sections: {
    protocols: string;
    experience: string;
    education: string;
    volunteering: string;
  };
  footer: {
    encrypted: string;
  };
  work: {
    module: string;
    title: string;
    scanning: string;
    optimal: string;
    index: string;
    viewProject: string;
    backProjects: string;
    classified: string;
    experienceLog: string;
  };
  contact: {
    title: string;
    protocol: string;
    operatorName: string;
    returnSignal: string;
    missionBrief: string;
    establishLink: string;
    systemStatus: string;
    encryption: string;
    active: string;
    signal: string;
    optimal: string;
    bitrate: string;
    operatorIdentity: string;
    nodeLocation: string;
  };
};

export const uiCopy: Record<Locale, UiCopy> = {
  en: {
    hero: {
      badge: "CORE ARCHITECTURE",
      line1: "I build systems with",
      line2: "context and intent.",
      ctaWork: "View Work",
      ctaContact: "Contact",
      role: "Computer Engineer",
    },
    sections: {
      protocols: "System Protocols",
      experience: "Experience",
      education: "Education",
      volunteering: "Volunteering & Leadership",
    },
    footer: {
      encrypted: "ENCRYPTED_CONNECTION_ESTABLISHED.",
    },
    work: {
      module: "System Module: Directory/Active_Projects",
      title: "Project Modules",
      scanning: "SCANNING_STATUS:",
      optimal: "OPTIMAL",
      index: "INDEX:",
      viewProject: "VIEW PROJECT",
      backProjects: "Projects",
      classified: "CLASSIFIED",
      experienceLog: "Experience Log",
    },
    contact: {
      title: "Let's Build Something New",
      protocol: "INITIATING_CONTACT_PROTOCOL... Waiting for user input.",
      operatorName: "Operator Name",
      returnSignal: "Return Signal (Email)",
      missionBrief: "Mission Brief (Message)",
      establishLink: "ESTABLISH_LINK",
      systemStatus: "System Status",
      encryption: "ENCRYPTION:",
      active: "ACTIVE",
      signal: "SIGNAL:",
      optimal: "OPTIMAL",
      bitrate: "BITRATE:",
      operatorIdentity: "Operator Identity",
      nodeLocation: "Node Location",
    },
  },
  tr: {
    hero: {
      badge: "Temel Amaç",
      line1: "Fikirleri çalışan sistemlere",
      line2: "dönüştürüyorum.",
      ctaWork: "Projeler",
      ctaContact: "İletişim",
      role: "Bilgisayar Muhendisi",
    },
    sections: {
      protocols: "Sistem Protokolleri",
      experience: "Deneyim",
      education: "Egitim",
      volunteering: "Gonulluluk ve Liderlik",
    },
    footer: {
      encrypted: "SIFRELI_BAGLANTI_AKTIF.",
    },
    work: {
      module: "Sistem Modulu: Dizin/Aktif_Projeler",
      title: "Proje Modulleri",
      scanning: "TARAMA_DURUMU:",
      optimal: "OPTIMAL",
      index: "INDEKS:",
      viewProject: "BAGLANTIYI AC",
      backProjects: "Projeler",
      classified: "KISITLI",
      experienceLog: "Deneyim Kaydi",
    },
    contact: {
      title: "Yeni Bir Sey Insa Edelim",
      protocol: "ILETISIM_PROTOKOLU_BASLATILIYOR... Kullanici girdisi bekleniyor.",
      operatorName: "Operator Adi",
      returnSignal: "Geri Donus Sinyali (E-posta)",
      missionBrief: "Gorev Ozeti (Mesaj)",
      establishLink: "BAGLANTI_KUR",
      systemStatus: "Sistem Durumu",
      encryption: "SIFRELEME:",
      active: "AKTIF",
      signal: "SINYAL:",
      optimal: "OPTIMAL",
      bitrate: "BIT_HIZI:",
      operatorIdentity: "Operator Kimligi",
      nodeLocation: "Dugum Konumu",
    },
  },
};
