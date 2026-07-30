/**
 * =============================================================================
 * CLIENT CONFIG — SINGLE SOURCE OF TRUTH
 * =============================================================================
 * Edit THIS FILE ONLY when customizing for a new dental practice.
 * Every label, nav item, section header, button, bio, service, and testimonial
 * is pulled from here at render time. Do not hardcode copy in HTML/CSS/JS.
 *
 * Languages: English (en) and Spanish (es). Default language is Spanish.
 * =============================================================================
 */

const config = {
  // ---------------------------------------------------------------------------
  // SITE DEFAULTS
  // ---------------------------------------------------------------------------
  // REQUIRED — default language when a visitor first loads the site ("es" | "en")
  defaultLanguage: "es",

  // ---------------------------------------------------------------------------
  // PRACTICE INFO
  // ---------------------------------------------------------------------------
  practice: {
    // REQUIRED — shown in hero, nav, footer, page title
    name: "Clínica Dental Bonilla",

    // REQUIRED — warm one-line tagline under the practice name
    tagline: {
      en: "We offer all types of dental treatments with a team of specialists.",
      es: "Ofrecemos todo tipo de tratamientos dentales, contamos con un equipo de especialistas.",
    },

    // REQUIRED — used for click-to-call (tel:) links. Digits only recommended for telHref.
    phone: "+504 9887-5558",
    // REQUIRED — raw digits for tel: links (no spaces or punctuation)
    phoneTel: "+50498875558",

    // REQUIRED — display address and map/directions helpers
    address: {
      street: "Pasaje Andará - Flores, Primera planta, Barrio Torondón",
      city: "Comayagua",
      state: "Honduras",
      zip: "12101",
      // OPTIONAL — override the Google Maps query; leave blank to auto-build from address
      mapsQuery: "Pasaje Andará Flores, Barrio Torondón, Comayagua, Honduras",
    },

    // REQUIRED — hours shown in Location + Footer. Use empty string to omit a day.
    hours: {
      mon: "8:00 AM – 5:00 PM",
      tue: "8:00 AM – 5:00 PM",
      wed: "8:00 AM – 5:00 PM",
      thu: "8:00 AM – 5:00 PM",
      fri: "8:00 AM – 5:00 PM",
      sat: "8:00 AM – 5:00 PM",
      sun: "", // closed / leave blank to hide
    },

    // OPTIONAL — email shown in footer when present
    email: "clinicadentalbonillahn@gmail.com",

    // OPTIONAL — trust bar stats (leave a field blank to hide that trust item)
    yearsInPractice: "",
    patientRating: "",
    // OPTIONAL — short insurance blurb for trust bar
    insuranceAccepted: false,
  },

  // ---------------------------------------------------------------------------
  // BRANDING
  // ---------------------------------------------------------------------------
  branding: {
    // REQUIRED — soft clinical blue (CSS color value)
    primaryColor: "#0B5EA8",
    // REQUIRED — warmer accent for CTAs / highlights (avoid neon or flashy tones)
    accentColor: "#00C4E0",
    // OPTIONAL — deeper shade for hover states; leave blank to auto-derive
    primaryDark: "#073F70",
    // OPTIONAL — soft page wash behind sections
    softBg: "#F0F8FF",
    // OPTIONAL — path or URL to logo (leave blank to show practice name as text logo)
    logoUrl: "assets/images/LOGO.jpeg",
    // REQUIRED — full-bleed hero image (place file in /assets/images/)
    // Demo template image
    heroImageUrl: "assets/images/hero.jpg",
  },

  // ---------------------------------------------------------------------------
  // UI COPY (labels, nav, section headers, buttons) — per language
  // ---------------------------------------------------------------------------
  // REQUIRED — edit wording if needed; structure keys must stay in sync with app.js
  ui: {
    en: {
      nav: {
        home: "Home",
        services: "Services",
        dentists: "Our Team",
        gallery: "Gallery",
        testimonials: "Reviews",
        insurance: "Insurance",
        location: "Location",
        book: "Book Appointment",
        openMenu: "Open menu",
        closeMenu: "Close menu",
      },
      hero: {
        badge: "New Patients Welcome",
        cta: "Book Appointment",
      },
      trust: {
        years: "Years in practice",
        rating: "Patient rating",
        insurance: "Insurance accepted",
        licensed: "Licensed & certified",
      },
      sections: {
        services: "Our Services",
        servicesLead: "Comprehensive care for every smile.",
        dentists: "Meet Our Dentists",
        dentistsLead: "Specialized care from experienced professionals.",
        gallery: "Smile Gallery",
        galleryLead: "Real results from patients like you.",
        testimonials: "What Patients Say",
        testimonialsLead: "Trusted by families in our community.",
        insurance: "Insurance & Financing",
        insuranceLead: "We work with major providers to keep care accessible.",
        location: "Visit Us",
        locationLead: "Conveniently located in Comayagua — we look forward to seeing you.",
      },
      services: {
        expand: "Learn more",
        collapse: "Show less",
      },
      location: {
        hours: "Hours",
        call: "Call Us",
        directions: "Get Directions",
        closed: "Closed",
        days: {
          mon: "Monday",
          tue: "Tuesday",
          wed: "Wednesday",
          thu: "Thursday",
          fri: "Friday",
          sat: "Saturday",
          sun: "Sunday",
        },
      },
      stickyBar: {
        cta: "Book Appointment",
      },
      footer: {
        contact: "Contact",
        hours: "Hours",
        follow: "Follow Us",
        rights: "All rights reserved.",
      },
      langToggle: {
        label: "Language",
        en: "EN",
        es: "ES",
      },
    },
    es: {
      nav: {
        home: "Inicio",
        services: "Servicios",
        dentists: "Nuestro Equipo",
        gallery: "Galería",
        testimonials: "Opiniones",
        insurance: "Seguros",
        location: "Ubicación",
        book: "Agendar Cita",
        openMenu: "Abrir menú",
        closeMenu: "Cerrar menú",
      },
      hero: {
        badge: "Nuevos Pacientes Bienvenidos",
        cta: "Agendar Cita",
      },
      trust: {
        years: "Años de experiencia",
        rating: "Calificación de pacientes",
        insurance: "Aceptamos seguros",
        licensed: "Licenciados y certificados",
      },
      sections: {
        services: "Nuestros Servicios",
        servicesLead: "Cuidado integral para cada sonrisa.",
        dentists: "Nuestros Dentistas",
        dentistsLead: "Atención especializada de profesionales experimentados.",
        gallery: "Galería de Sonrisas",
        galleryLead: "Resultados reales de pacientes como tú.",
        testimonials: "Lo Que Dicen Nuestros Pacientes",
        testimonialsLead: "La confianza de familias de nuestra comunidad.",
        insurance: "Seguros y Financiamiento",
        insuranceLead: "Trabajamos con las principales aseguradoras.",
        location: "Visítanos",
        locationLead: "Ubicación conveniente en Comayagua — te esperamos con gusto.",
      },
      services: {
        expand: "Ver más",
        collapse: "Ver menos",
      },
      location: {
        hours: "Horario",
        call: "Llámanos",
        directions: "Cómo Llegar",
        closed: "Cerrado",
        days: {
          mon: "Lunes",
          tue: "Martes",
          wed: "Miércoles",
          thu: "Jueves",
          fri: "Viernes",
          sat: "Sábado",
          sun: "Domingo",
        },
      },
      stickyBar: {
        cta: "Agendar Cita",
      },
      footer: {
        contact: "Contacto",
        hours: "Horario",
        follow: "Síguenos",
        rights: "Todos los derechos reservados.",
      },
      langToggle: {
        label: "Idioma",
        en: "EN",
        es: "ES",
      },
    },
  },

  // ---------------------------------------------------------------------------
  // DENTISTS
  // ---------------------------------------------------------------------------
  // REQUIRED — at least one dentist. Empty array hides the whole section.
  dentists: [
    {
      name: "Dr. Adolfo Bonilla",
      title: {
        en: "Orthodontics Specialist · UNICAH Orthodontics Residency",
        es: "Especialista en Ortodoncia · Residente de la Especialidad de Ortodoncia UNICAH",
      },
      bio: {
        en: "Dr. Bonilla is dedicated to creating beautiful, healthy smiles through advanced orthodontic treatments. His commitment to continuing education ensures patients receive the most modern and effective care available.",
        es: "El Dr. Bonilla se dedica a crear sonrisas hermosas y saludables mediante tratamientos de ortodoncia avanzados. Su compromiso con la educación continua garantiza que los pacientes reciban la atención más moderna y efectiva disponible.",
      },
      // OPTIONAL — path/URL; leave blank for initials placeholder
      // Demo template image included — replace per client
      photoUrl: "assets/images/dentist-bonilla.jpeg",
    },
    {
      name: "Dr. Jorge Macia",
      title: {
        en: "General Dentist",
        es: "Odontólogo General",
      },
      bio: {
        en: "Dr. Macia provides comprehensive dental care with a gentle touch. His focus on patient comfort and thorough communication ensures every visit is a positive experience for patients of all ages.",
        es: "El Dr. Macia brinda atención dental integral con un toque gentil. Su enfoque en la comodidad del paciente y la comunicación clara garantiza que cada visita sea una experiencia positiva para pacientes de todas las edades.",
      },
      // OPTIONAL — path/URL; leave blank for initials placeholder
      // Demo template image included — replace per client
      photoUrl: "assets/images/dentist-macia.jpeg",
    },
  ],

  // ---------------------------------------------------------------------------
  // SERVICES
  // ---------------------------------------------------------------------------
  // REQUIRED for Services section. Empty array hides the section.
  // icon: short key used by app.js to pick an inline SVG ("cleaning", "whitening",
  // "aligners", "emergency", "implants", "pediatric", "general", "cosmetic")
  services: [
    {
      name: { en: "Dental Cleanings & Prevention", es: "Limpiezas Dentales y Prevención" },
      description: {
        en: "Professional cleanings to remove plaque and tartar, keeping your teeth and gums healthy. Regular cleanings help prevent cavities and gum disease.",
        es: "Limpiezas profesionales para eliminar placa y sarro, manteniendo sus dientes y encías saludables. Las limpiezas regulares ayudan a prevenir caries y enfermedades de las encías.",
      },
      icon: "cleaning",
    },
    {
      name: { en: "Aesthetic Restorations", es: "Restauraciones Estéticas" },
      description: {
        en: "Natural-looking fillings and restorations that blend seamlessly with your teeth, restoring both function and beauty to damaged teeth.",
        es: "Rellenos y restauraciones de aspecto natural que se integran perfectamente con sus dientes, restaurando función y belleza a dientes dañados.",
      },
      icon: "cosmetic",
    },
    {
      name: { en: "Cavity Treatment", es: "Tratamiento de Caries" },
      description: {
        en: "Early detection and gentle treatment of cavities to prevent further decay and preserve your natural tooth structure.",
        es: "Detección temprana y tratamiento suave de caries para prevenir mayor deterioro y preservar la estructura natural del diente.",
      },
      icon: "general",
    },
    {
      name: { en: "Root Canal Therapy", es: "Endodoncia" },
      description: {
        en: "Advanced root canal treatment to save infected teeth and eliminate pain, performed with precision and care for maximum comfort.",
        es: "Tratamiento avanzado de conducto radicular para salvar dientes infectados y eliminar el dolor, realizado con precisión y cuidado para máxima comodidad.",
      },
      icon: "emergency",
    },
    {
      name: { en: "Tooth Extractions", es: "Extracciones Dentales" },
      description: {
        en: "Safe and comfortable tooth removal when necessary, with options for sedation and detailed aftercare instructions for quick healing.",
        es: "Extracción dental segura y cómoda cuando es necesario, con opciones de sedación e instrucciones detalladas de cuidado posterior para una rápida recuperación.",
      },
      icon: "general",
    },
    {
      name: { en: "Dental Prosthetics & Dentures", es: "Prótesis Dentales" },
      description: {
        en: "Custom-fitted dentures and prosthetics to restore your smile and chewing function, designed for comfort and natural appearance.",
        es: "Dentaduras y prótesis hechas a medida para restaurar su sonrisa y función masticatoria, diseñadas para comodidad y apariencia natural.",
      },
      icon: "implants",
    },
    {
      name: { en: "Professional Teeth Whitening", es: "Blanqueamiento Dental Profesional" },
      description: {
        en: "Safe, effective whitening treatments that brighten your smile several shades, with results that last and look naturally radiant.",
        es: "Tratamientos de blanqueamiento seguros y efectivos que iluminan su sonrisa varios tonos, con resultados duraderos y aspecto naturalmente radiante.",
      },
      icon: "whitening",
    },
    {
      name: { en: "Orthodontics & Braces", es: "Ortodoncia y Frenillos" },
      description: {
        en: "Comprehensive orthodontic treatment including traditional braces and modern options to straighten teeth and improve bite alignment.",
        es: "Tratamiento de ortodoncia integral que incluye brackets tradicionales y opciones modernas para enderezar dientes y mejorar la alineación de la mordida.",
      },
      icon: "aligners",
    },
    {
      name: { en: "Mulligan Arch Appliance", es: "Arco Mulligan" },
      description: {
        en: "Specialized orthodontic appliance for arch development and bite correction, custom-designed for optimal results and patient comfort.",
        es: "Aparato de ortodoncia especializado para desarrollo del arco y corrección de mordida, diseñado a medida para resultados óptimos y comodidad del paciente.",
      },
      icon: "aligners",
    },
  ],

  // ---------------------------------------------------------------------------
  // TESTIMONIALS
  // ---------------------------------------------------------------------------
  // OPTIONAL — empty array hides the Testimonials section entirely.
  testimonials: [],

  // ---------------------------------------------------------------------------
  // INSURANCE LOGOS
  // ---------------------------------------------------------------------------
  // OPTIONAL — array of image URLs/paths. Empty array hides Insurance section.
  // Tip: drop SVGs/PNGs in /assets/images/insurance/ and reference them here.
  insuranceLogos: [],

  // ---------------------------------------------------------------------------
  // SMILE GALLERY
  // ---------------------------------------------------------------------------
  // OPTIONAL — empty array hides the Gallery section.
  // Demo template images included — replace per client
  gallery: [
    "assets/images/gallery/IMG_0124.jpeg",
    "assets/images/gallery/IMG_0125.jpeg",
    "assets/images/gallery/IMG_0126.jpeg",
    "assets/images/gallery/IMG_0127.jpeg",
    "assets/images/gallery/IMG_0128.jpeg",
  ],

  // ---------------------------------------------------------------------------
  // SOCIAL LINKS
  // ---------------------------------------------------------------------------
  // OPTIONAL — leave blank to hide that icon in the footer
  socials: {
    instagram: "https://www.instagram.com/clinicadentalbonilla.hn",
    facebook: "https://www.facebook.com/cdentalbonilla.hn/",
  },
};

// Expose globally for app.js (no bundler / no modules required)
window.SITE_CONFIG = config;
