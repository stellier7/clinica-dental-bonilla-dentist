/**
 * Clínica Dental Bonilla — Comayagua, Honduras
 */

const config = {
  defaultLanguage: "es",

  practice: {
    name: "Clínica Dental Bonilla",
    tagline: {
      en: "We offer all types of dental treatments with a team of specialists.",
      es: "Ofrecemos todo tipo de tratamientos dentales, contamos con un equipo de especialistas.",
    },
    phone: "+504 9887-5558",
    phoneTel: "50498875558",
    phoneCountryCode: "504",
    address: {
      street: "Pasaje Andará - Flores, Primera planta, Barrio Torondón",
      city: "Comayagua",
      state: "Honduras",
      zip: "12101",
      mapsQuery: "Pasaje Andará Flores, Barrio Torondón, Comayagua, Honduras",
    },
    hours: {
      mon: "8:00 AM – 5:00 PM", tue: "8:00 AM – 5:00 PM", wed: "8:00 AM – 5:00 PM",
      thu: "8:00 AM – 5:00 PM", fri: "8:00 AM – 5:00 PM", sat: "8:00 AM – 5:00 PM", sun: "",
    },
    email: "clinicadentalbonillahn@gmail.com",
    yearsInPractice: "",
    patientRating: "",
    insuranceAccepted: false,
  },

  branding: {
    primaryColor: "#0B5EA8",
    accentColor: "#00C4E0",
    primaryDark: "#073F70",
    softBg: "#F0F8FF",
    logoUrl: "assets/images/LOGO.jpeg",
    heroImageUrl: "assets/images/hero.jpg",
  },

  ui: {
    en: {
      nav: {
        home: "Home", services: "Services", dentists: "Our Team", gallery: "Gallery",
        testimonials: "Reviews", financing: "Financing", location: "Location",
        book: "Book Appointment", openMenu: "Open menu", closeMenu: "Close menu",
      },
      hero: { badge: "New Patients Welcome", cta: "Book Appointment" },
      trust: {
        years: "Years in practice", rating: "Patient rating",
        insurance: "Insurance accepted", licensed: "Licensed & certified",
      },
      sections: {
        services: "Our Services", servicesLead: "Comprehensive care for every smile.",
        dentists: "Meet Our Dentists", dentistsLead: "Specialized care from experienced professionals.",
        gallery: "Smile Gallery", galleryLead: "Real results from patients like you.",
        testimonials: "What Patients Say", testimonialsLead: "Trusted by families in our community.",
        financing: "Financing", financingLead: "Flexible payment options to fit your budget.",
        location: "Visit Us", locationLead: "Conveniently located in Comayagua — we look forward to seeing you.",
      },
      services: { expand: "Learn more", collapse: "Show less" },
      location: {
        hours: "Hours", call: "Call Us", directions: "Get Directions", closed: "Closed",
        chooseApp: "Open directions in",
        cancel: "Cancel",
        copyAddress: "Copy address",
        addressCopied: "Address copied",
        mapInteract: "Tap to interact with the map",
        days: { mon: "Monday", tue: "Tuesday", wed: "Wednesday", thu: "Thursday", fri: "Friday", sat: "Saturday", sun: "Sunday" },
      },
      stickyBar: { cta: "Book Appointment" },
      footer: { contact: "Contact", hours: "Hours", follow: "Follow Us", rights: "All rights reserved." },
      langToggle: { label: "Language", en: "EN", es: "ES" },
      gallery: {
        viewImage: "View image", close: "Close preview", previous: "Previous image",
        next: "Next image", preview: "Image preview",
      },
    },
    es: {
      nav: {
        home: "Inicio", services: "Servicios", dentists: "Nuestro Equipo", gallery: "Galería",
        testimonials: "Opiniones", financing: "Financiamiento", location: "Ubicación",
        book: "Agendar Cita", openMenu: "Abrir menú", closeMenu: "Cerrar menú",
      },
      hero: { badge: "Nuevos Pacientes Bienvenidos", cta: "Agendar Cita" },
      trust: {
        years: "Años de experiencia", rating: "Calificación de pacientes",
        insurance: "Aceptamos seguros", licensed: "Licenciados y certificados",
      },
      sections: {
        services: "Nuestros Servicios", servicesLead: "Cuidado integral para cada sonrisa.",
        dentists: "Nuestros Dentistas", dentistsLead: "Atención especializada de profesionales experimentados.",
        gallery: "Galería de Sonrisas", galleryLead: "Resultados reales de pacientes como tú.",
        testimonials: "Lo Que Dicen Nuestros Pacientes", testimonialsLead: "La confianza de familias de nuestra comunidad.",
        financing: "Financiamiento", financingLead: "Opciones de pago flexibles que se adaptan a tu presupuesto.",
        location: "Visítanos", locationLead: "Ubicación conveniente en Comayagua — te esperamos con gusto.",
      },
      services: { expand: "Ver más", collapse: "Ver menos" },
      location: {
        hours: "Horario", call: "Llámanos", directions: "Cómo Llegar", closed: "Cerrado",
        chooseApp: "Abrir direcciones en",
        cancel: "Cancelar",
        copyAddress: "Copiar dirección",
        addressCopied: "Dirección copiada",
        mapInteract: "Toca para interactuar con el mapa",
        days: { mon: "Lunes", tue: "Martes", wed: "Miércoles", thu: "Jueves", fri: "Viernes", sat: "Sábado", sun: "Domingo" },
      },
      stickyBar: { cta: "Agendar Cita" },
      footer: { contact: "Contacto", hours: "Horario", follow: "Síguenos", rights: "Todos los derechos reservados." },
      langToggle: { label: "Idioma", en: "EN", es: "ES" },
      gallery: {
        viewImage: "Ver imagen", close: "Cerrar vista previa", previous: "Imagen anterior",
        next: "Imagen siguiente", preview: "Vista previa de imagen",
      },
    },
  },

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
      photoUrl: "assets/images/dentist-bonilla.jpeg",
    },
    {
      name: "Dr. Jorge Macia",
      title: { en: "General Dentist", es: "Odontólogo General" },
      bio: {
        en: "Dr. Macia provides comprehensive dental care with a gentle touch. His focus on patient comfort and thorough communication ensures every visit is a positive experience for patients of all ages.",
        es: "El Dr. Macia brinda atención dental integral con un toque gentil. Su enfoque en la comodidad del paciente y la comunicación clara garantiza que cada visita sea una experiencia positiva para pacientes de todas las edades.",
      },
      photoUrl: "assets/images/dentist-macia.jpeg",
    },
  ],

  services: [
    { name: { en: "Dental Cleanings & Prevention", es: "Limpiezas Dentales y Prevención" }, description: { en: "Professional cleanings to remove plaque and tartar, keeping your teeth and gums healthy. Regular cleanings help prevent cavities and gum disease.", es: "Limpiezas profesionales para eliminar placa y sarro, manteniendo sus dientes y encías saludables. Las limpiezas regulares ayudan a prevenir caries y enfermedades de las encías." }, icon: "cleaning" },
    { name: { en: "Aesthetic Restorations", es: "Restauraciones Estéticas" }, description: { en: "Natural-looking fillings and restorations that blend seamlessly with your teeth, restoring both function and beauty to damaged teeth.", es: "Rellenos y restauraciones de aspecto natural que se integran perfectamente con sus dientes, restaurando función y belleza a dientes dañados." }, icon: "cosmetic" },
    { name: { en: "Cavity Treatment", es: "Tratamiento de Caries" }, description: { en: "Early detection and gentle treatment of cavities to prevent further decay and preserve your natural tooth structure.", es: "Detección temprana y tratamiento suave de caries para prevenir mayor deterioro y preservar la estructura natural del diente." }, icon: "general" },
    { name: { en: "Root Canal Therapy", es: "Endodoncia" }, description: { en: "Advanced root canal treatment to save infected teeth and eliminate pain, performed with precision and care for maximum comfort.", es: "Tratamiento avanzado de conducto radicular para salvar dientes infectados y eliminar el dolor, realizado con precisión y cuidado para máxima comodidad." }, icon: "emergency" },
    { name: { en: "Tooth Extractions", es: "Extracciones Dentales" }, description: { en: "Safe and comfortable tooth removal when necessary, with options for sedation and detailed aftercare instructions for quick healing.", es: "Extracción dental segura y cómoda cuando es necesario, con opciones de sedación e instrucciones detalladas de cuidado posterior para una rápida recuperación." }, icon: "general" },
    { name: { en: "Dental Prosthetics & Dentures", es: "Prótesis Dentales" }, description: { en: "Custom-fitted dentures and prosthetics to restore your smile and chewing function, designed for comfort and natural appearance.", es: "Dentaduras y prótesis hechas a medida para restaurar su sonrisa y función masticatoria, diseñadas para comodidad y apariencia natural." }, icon: "implants" },
    { name: { en: "Professional Teeth Whitening", es: "Blanqueamiento Dental Profesional" }, description: { en: "Safe, effective whitening treatments that brighten your smile several shades, with results that last and look naturally radiant.", es: "Tratamientos de blanqueamiento seguros y efectivos que iluminan su sonrisa varios tonos, con resultados duraderos y aspecto naturalmente radiante." }, icon: "whitening" },
    { name: { en: "Orthodontics & Braces", es: "Ortodoncia y Frenillos" }, description: { en: "Comprehensive orthodontic treatment including traditional braces and modern options to straighten teeth and improve bite alignment.", es: "Tratamiento de ortodoncia integral que incluye brackets tradicionales y opciones modernas para enderezar dientes y mejorar la alineación de la mordida." }, icon: "aligners" },
    { name: { en: "Mulligan Arch Appliance", es: "Arco Mulligan" }, description: { en: "Specialized orthodontic appliance for arch development and bite correction, custom-designed for optimal results and patient comfort.", es: "Aparato de ortodoncia especializado para desarrollo del arco y corrección de mordida, diseñado a medida para resultados óptimos y comodidad del paciente." }, icon: "aligners" },
  ],

  testimonials: [],

  financingImages: [
    { src: "assets/images/financing/Bac.png", alt: { en: "BAC Credomatic financing", es: "Financiamiento BAC Credomatic" } },
    { src: "assets/images/financing/Ficohsa.png", alt: { en: "Ficohsa financing", es: "Financiamiento Ficohsa" } },
  ],

  gallery: [
    "assets/images/gallery/IMG_0124.jpeg",
    "assets/images/gallery/IMG_0125.jpeg",
    "assets/images/gallery/IMG_0126.jpeg",
    "assets/images/gallery/IMG_0127.jpeg",
    "assets/images/gallery/IMG_0128.jpeg",
  ],

  socials: {
    instagram: "https://www.instagram.com/clinicadentalbonilla.hn",
    facebook: "https://www.facebook.com/cdentalbonilla.hn/",
  },
};

window.SITE_CONFIG = config;
