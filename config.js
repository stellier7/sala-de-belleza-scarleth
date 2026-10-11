// ============================================================
// SCARLETH — Sala de Belleza
// Contenido del cliente. Edita este archivo para re-skinear.
// ============================================================

const CONFIG = {
  lang: "es",

  // ---- Marca ----
  brandName: "Scarleth",
  brandSubtitle: "Sala de Belleza",
  brandNameShort: "Scarleth",
  tagline: "Belleza completa",
  heroEyebrow: "Comayagua",
  heroHeadlineLines: ["Tu momento", "de brillar"],
  heroSub:
    "Cabello, uñas, cejas y más — con atención cercana en dos sucursales. Reserva por WhatsApp y elige Scarleth #1 o Scarleth #2.",

  // ---- Contacto / Reservas (2 sucursales) ----
  whatsappDefaultMessage: "¡Hola! Me gustaría reservar una cita en Scarleth.",
  locations: [
    {
      id: "scarleth-1",
      name: "Scarleth #1",
      address: "Avenida 2 NE, Comayagua",
      phoneDisplay: "+504 9838-6397",
      whatsappNumber: "50498386397",
      mapsUrl: "https://maps.app.goo.gl/DjYNgpmWiXEizpyY6",
    },
    {
      id: "scarleth-2",
      name: "Scarleth #2",
      address: "Cerca de Inversiones American Fashion, Comayagua",
      phoneDisplay: "+504 9875-0500",
      whatsappNumber: "50498750500",
      mapsUrl:
        "https://www.google.com/maps/place/F948%2BJCV+Inversiones+American+Fashion,+Comayagua/@14.456672,-87.6343313,20z",
    },
  ],
  hours: [
    { day: "Lun — Sáb", time: "8:00 AM – 7:00 PM" },
    { day: "Domingo", time: "8:00 AM – 1:00 PM" },
  ],
  instagramHandle: "@scarlethsalon_",
  instagramUrl: "https://www.instagram.com/scarlethsalon_/",
  facebookUrl: "https://www.facebook.com/p/Sala-de-Belleza-Scarleth-100063622987668/",
  tiktokHandle: "@scarlethsalon_",
  tiktokUrl: "https://www.tiktok.com/@scarlethsalon_",

  // ---- Colores (logo: cream + negro) ----
  colors: {
    cream: "#F2F2F0",
    cream2: "#EAEAE6",
    ink: "#000000",
    inkSoft: "#4A4A4A",
    inkFaint: "#7A7A7A",
    accent: "#000000",
    accentInv: "#F2F2F0",
    accentHover: "rgba(0,0,0,0.06)",
    gray: "#E8E8E4",
    grayLight: "#F7F7F5",
    line: "rgba(0,0,0,0.12)",
    lineStrong: "rgba(0,0,0,0.22)",
  },

  // ---- Servicios ----
  services: [
    {
      label: "Cabello",
      name: "Estudio de Cabello",
      description:
        "Cortes, color, alisados y peinados con productos profesionales para un resultado que se nota.",
      items: [
        "Corte de damas y caballeros",
        "Lavado y peinado / blowout",
        "Color, mechas y balayage",
        "Nanoplastia y alisados",
        "Keratina y tratamientos de brillo",
        "Hidratación y reparación profunda",
        "Peinados para bodas y eventos",
        "Retoque de raíces",
      ],
    },
    {
      label: "Uñas",
      name: "Uñas & Manicura",
      description:
        "Manicura y pedicura con acabado limpio, duradero y cuidado en cada detalle.",
      items: [
        "Manicura tradicional",
        "Manicura en gel / semipermanente",
        "Pedicura spa",
        "Uñas acrílicas y soft gel",
        "Polygel y builder gel",
        "Nail art sencillo",
        "Retiro y mantenimiento",
        "Tratamiento para cutículas",
      ],
    },
    {
      label: "Cejas & Pestañas",
      name: "Mirada Definida",
      description:
        "Diseño de cejas y pestañas para enmarcar tu rostro con un acabado natural o más marcado.",
      items: [
        "Diseño y depilación de cejas",
        "Tinte de cejas",
        "Laminado de cejas",
        "Tinte de pestañas",
        "Lifting de pestañas",
        "Extensiones de pestañas (clásicas)",
      ],
    },
    {
      label: "Maquillaje",
      name: "Maquillaje Profesional",
      description:
        "Looks para el día a día, eventos y ocasiones especiales, con productos de larga duración.",
      items: [
        "Maquillaje social / de día",
        "Maquillaje para eventos",
        "Maquillaje de novia",
        "Maquillaje de graduación",
        "Prueba de maquillaje",
      ],
    },
    {
      label: "Piel",
      name: "Cuidado de la Piel",
      description:
        "Limpiezas y tratamientos faciales para dejar la piel fresca, suave y radiante.",
      items: [
        "Limpieza facial básica",
        "Limpieza facial profunda",
        "Facial hidratante",
        "Exfoliación y mascarilla",
        "Depilación facial (cejas, labio, mentón)",
      ],
    },
    {
      label: "Paquetes",
      name: "Combos & Eventos",
      description:
        "Combina servicios para salir lista — ideal para citas, fiestas y preparación de eventos.",
      items: [
        "Corte + peinado",
        "Manicura + pedicura",
        "Cejas + pestañas",
        "Peinado + maquillaje",
        "Prep para novias y quinceañeras",
      ],
    },
  ],

  // ---- Cuidado profesional (antes: ritual) ----
  ritualSteps: [
    {
      time: "01",
      title: "Hidratar",
      text: "Nutrición profunda para devolver suavidad, brillo y movimiento al cabello reseco.",
      img: "images/product-01-hidratar.jpg",
    },
    {
      time: "02",
      title: "Reparar",
      text: "Protocolos de reparación que fortalecen la fibra y recuperan el cabello maltratado.",
      img: "images/product-02-reparar.jpg",
    },
    {
      time: "03",
      title: "Fortalecer",
      text: "Máscaras y tratamientos intensivos para cabello más resistente día a día.",
      img: "images/product-03-fortalecer.jpg",
    },
    {
      time: "04",
      title: "Proteger el color",
      text: "Cuidado pensado para fijar el tono, sumar brillo y alargar tu coloración.",
      img: "images/product-04-color.jpg",
    },
  ],

  // ---- Galería (8) ----
  gallery: [
    "images/gallery-01.jpg",
    "images/gallery-02.jpg",
    "images/gallery-03.jpg",
    "images/gallery-04.jpg",
    "images/gallery-05.jpg",
    "images/gallery-06.jpg",
    "images/gallery-07.jpg",
    "images/gallery-08.jpg",
  ],

  // ---- Testimonios (Google) ----
  testimonials: [
    {
      quote:
        "Buen servicio, me gusta que está abierto desde las 8 am; y te atienden sin hacer cita previa.",
      name: "Marilyn Monroy",
    },
    {
      quote: "Servicio de excelencia. Buen trato. Buen precio.",
      name: "Dunia Andara",
    },
    {
      quote: "Un salón de belleza completamente con todo.",
      name: "Julizza Peña",
    },
    {
      quote: "Excelente precio y servicio.",
      name: "Oscar Solis",
    },
  ],

  // ---- Imágenes ----
  logoImage: "images/logo.jpg",
  heroImage: "images/hero.jpg",
  visitImage: "images/visit.jpg",

  // ---- Textos de interfaz ----
  ui: {
    metaDescription:
      "Scarleth — Sala de Belleza en Comayagua. Cabello, uñas, cejas, maquillaje y más en Scarleth #1 y Scarleth #2. Reserva por WhatsApp.",
    navServices: "Servicios",
    navExperience: "Cuidado",
    navGallery: "Galería",
    navVisit: "Visítanos",
    navBook: "Reservar",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    heroCta: "Reservar por WhatsApp",
    heroSecondary: "Ver servicios",
    heroScroll: "Desliza",
    servicesEyebrow: "Lo Que Hacemos",
    servicesTitle: "Todo lo que necesitas, en un solo salón.",
    ritualEyebrow: "Cuidado Profesional",
    ritualTitle: "Cuatro pasos para un cabello sano.",
    galleryEyebrow: "Nuestro Trabajo",
    galleryTitle: "Resultados que hablan solos.",
    galleryImageAlt: "Imagen de galería",
    testimonialsEyebrow: "Clientas",
    testimonialsTitle: "Lo que dicen en Google.",
    visitEyebrow: "Dos Sucursales",
    visitTitle: "Visítanos en Comayagua.",
    visitImageAlt: "Interior del salón",
    footerEyebrow: "Cuando Quieras",
    footerTitle: "Reserva tu cita.",
    footerCta: "Escríbenos por WhatsApp",
    whatsappLabel: "WhatsApp",
    metaSpecialty: "Especialidad",
    metaHours: "Horario",
    metaContact: "Sucursales",
    gallerySoon: "Foto próximamente",
    lightboxLabel: "Vista previa de galería",
    lightboxClose: "Cerrar",
    lightboxPrev: "Anterior",
    lightboxNext: "Siguiente",
    locationPickerTitle: "¿En cuál sucursal?",
    locationPickerHint: "Te abrimos WhatsApp con la sucursal que elijas.",
    locationPickerClose: "Cerrar",
    mapsLabel: "Ver en Maps",
  },
};
