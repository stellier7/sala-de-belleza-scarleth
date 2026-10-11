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
  tagline: "Cabello y uñas",
  heroEyebrow: "Comayagua",
  heroHeadlineLines: ["Tu momento", "de brillar"],
  heroSub:
    "Cabello y uñas con atención cercana en dos sucursales. Reserva por WhatsApp y elige Scarleth #1 o Scarleth #2.",

  // ---- Contacto / Reservas (2 sucursales) ----
  whatsappDefaultMessage: "¡Hola! Me gustaría reservar una cita en Scarleth.",
  // Número principal para consultas de productos (Scarleth #1)
  whatsappNumber: "50498386397",
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
        "Corte y peinado",
        "Color, mechas y balayage",
        "Nanoplastia y alisados",
        "Tratamientos de hidratación y reparación",
        "Peinados para eventos",
      ],
    },
    {
      label: "Uñas",
      name: "Uñas & Manicura",
      description:
        "Manicura y pedicura con acabado limpio, duradero y cuidado en cada detalle.",
      items: [
        "Manicura tradicional y gel",
        "Pedicura spa",
        "Uñas acrílicas y soft gel",
        "Nail art sencillo",
        "Retoque y mantenimiento",
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

  // ---- Categorías de productos (orden del filtro) ----
  productCategories: [
    "Champús",
    "Acondicionadores",
    "Tratamientos",
    "Color",
    "Styling",
  ],

  // ---- Productos (extraídos de fotos de Facebook) ----
  products: [
    // photo-01 — Maxybelt Tono a Tono (4)
    {
      id: "maxybelt-tono-cobre",
      name: "Shampoo Tono a Tono Cobre Maxybelt",
      category: "Color",
      image: "images/products/photo-01-maxybelt-tono.jpg",
      crop: { x: 0, y: 0, w: 50, h: 50 },
      featured: true,
      price: null,
    },
    {
      id: "maxybelt-tono-negro-noche",
      name: "Shampoo Tono a Tono Negro Noche Maxybelt",
      category: "Color",
      image: "images/products/photo-01-maxybelt-tono.jpg",
      crop: { x: 50, y: 0, w: 50, h: 50 },
      featured: false,
      price: null,
    },
    {
      id: "maxybelt-tono-beige-almendra",
      name: "Shampoo Tono a Tono Beige Almendra Maxybelt",
      category: "Color",
      image: "images/products/photo-01-maxybelt-tono.jpg",
      crop: { x: 0, y: 50, w: 50, h: 50 },
      featured: false,
      price: null,
    },
    {
      id: "maxybelt-tono-chocolate-carioca",
      name: "Tratamiento Tono a Tono Chocolate Carioca Maxybelt",
      category: "Color",
      image: "images/products/photo-01-maxybelt-tono.jpg",
      crop: { x: 50, y: 50, w: 50, h: 50 },
      featured: false,
      price: null,
    },

    // photo-02 — Wella Ultimate Repair (4)
    {
      id: "wella-ultimate-repair-shampoo",
      name: "Champú Wella Ultimate Repair (Paso 1)",
      category: "Champús",
      image: "images/products/photo-02-wella-ultimate-repair.jpg",
      crop: { x: 16, y: 48, w: 19, h: 40 },
      featured: true,
      price: null,
    },
    {
      id: "wella-ultimate-repair-mask",
      name: "Mascarilla Wella Ultimate Repair",
      category: "Tratamientos",
      image: "images/products/photo-02-wella-ultimate-repair.jpg",
      crop: { x: 31, y: 71, w: 28, h: 20 },
      featured: false,
      price: null,
    },
    {
      id: "wella-ultimate-repair-miracle-rescue",
      name: "Tratamiento Wella Miracle Hair Rescue (Paso 3)",
      category: "Tratamientos",
      image: "images/products/photo-02-wella-ultimate-repair.jpg",
      crop: { x: 63, y: 60, w: 12, h: 32 },
      featured: false,
      price: null,
    },
    {
      id: "wella-ultimate-repair-protective-leave-in",
      name: "Protector sin Aclarado Wella Ultimate Repair (Paso 4)",
      category: "Tratamientos",
      image: "images/products/photo-02-wella-ultimate-repair.jpg",
      crop: { x: 75, y: 39, w: 16, h: 52 },
      featured: true,
      price: null,
    },

    // photo-03 — Wella Fusion (3)
    {
      id: "wella-fusion-shampoo",
      name: "Champú Wella Fusion Intense Repair",
      category: "Champús",
      image: "images/products/photo-03-wella-fusion.jpg",
      crop: { x: 34, y: 28, w: 16, h: 59 },
      featured: true,
      price: null,
    },
    {
      id: "wella-fusion-conditioner",
      name: "Acondicionador Wella Fusion Intense Repair",
      category: "Acondicionadores",
      image: "images/products/photo-03-wella-fusion.jpg",
      crop: { x: 62, y: 30, w: 26, h: 56 },
      featured: false,
      price: null,
    },
    {
      id: "wella-fusion-mask",
      name: "Mascarilla Wella Fusion Intense Repair",
      category: "Tratamientos",
      image: "images/products/photo-03-wella-fusion.jpg",
      crop: { x: 47, y: 70, w: 26, h: 23 },
      featured: true,
      price: null,
    },

    // photo-04 — Wella Color Motion+ (3)
    {
      id: "wella-color-motion-shampoo",
      name: "Champú Wella Color Motion+",
      category: "Champús",
      image: "images/products/photo-04-wella-color-motion.jpg",
      crop: { x: 17, y: 28, w: 16, h: 58 },
      featured: true,
      price: null,
    },
    {
      id: "wella-color-motion-conditioner",
      name: "Acondicionador Wella Color Motion+",
      category: "Acondicionadores",
      image: "images/products/photo-04-wella-color-motion.jpg",
      crop: { x: 34, y: 31, w: 21, h: 50 },
      featured: false,
      price: null,
    },
    {
      id: "wella-color-motion-mask",
      name: "Mascarilla Structure+ Wella Color Motion+",
      category: "Tratamientos",
      image: "images/products/photo-04-wella-color-motion.jpg",
      crop: { x: 52, y: 62, w: 24, h: 20 },
      featured: false,
      price: null,
    },

    // photo-05 — Wella EIMI Thermal Image (1)
    {
      id: "wella-eimi-thermal-image",
      name: "Spray Termoprotector Wella EIMI Thermal Image",
      category: "Styling",
      image: "images/products/photo-05-wella-eimi-thermal.jpg",
      crop: null,
      featured: true,
      price: null,
    },

    // photo-06 — Firenze Professional (2)
    {
      id: "firenze-keratin-antifrizz-serum",
      name: "Serum Keratin Antifrizz Firenze Professional",
      category: "Tratamientos",
      image: "images/products/photo-06-firenze-keratin.jpg",
      crop: { x: 38, y: 13, w: 30, h: 72 },
      featured: true,
      price: null,
    },
    {
      id: "firenze-keratin-leave-in-ampoules",
      name: "Ampollas Keratin Leave-In Firenze",
      category: "Tratamientos",
      image: "images/products/photo-06-firenze-keratin.jpg",
      crop: { x: 65, y: 64, w: 22, h: 28 },
      featured: false,
      price: null,
    },

    // photo-07 — Olaplex Nº.8 (1)
    {
      id: "olaplex-no8-moisture-mask",
      name: "Mascarilla Olaplex Nº.8 Bond Intense Moisture",
      category: "Tratamientos",
      image: "images/products/photo-07-olaplex-no8.jpg",
      crop: null,
      featured: true,
      price: null,
    },

    // photo-08 — TRUSS Miracle Summer (3)
    {
      id: "truss-miracle-summer-shampoo",
      name: "Champú Truss Miracle Summer",
      category: "Champús",
      image: "images/products/photo-08-truss-miracle-summer.jpg",
      crop: { x: 0, y: 0, w: 48, h: 95 },
      featured: false,
      price: null,
    },
    {
      id: "truss-miracle-summer-conditioner",
      name: "Acondicionador Truss Miracle Summer",
      category: "Acondicionadores",
      image: "images/products/photo-08-truss-miracle-summer.jpg",
      crop: { x: 45, y: 0, w: 25, h: 95 },
      featured: false,
      price: null,
    },
    {
      id: "truss-miracle-summer-mask",
      name: "Mascarilla Truss Miracle Summer",
      category: "Tratamientos",
      image: "images/products/photo-08-truss-miracle-summer.jpg",
      crop: { x: 68, y: 60, w: 32, h: 40 },
      featured: false,
      price: null,
    },

    // photo-09 — Luseta Curl Cream (1)
    {
      id: "luseta-crema-rizos",
      name: "Crema para rizos Luseta",
      category: "Styling",
      image: "images/products/photo-09-luseta-curl-cream.jpg",
      crop: null,
      featured: true,
      price: null,
    },
  ],

  // ---- Textos de interfaz ----
  ui: {
    metaDescription:
      "Scarleth — Sala de Belleza en Comayagua. Cabello y uñas en Scarleth #1 y Scarleth #2. Reserva por WhatsApp.",
    navServices: "Servicios",
    navExperience: "Cuidado",
    navGallery: "Galería",
    navVisit: "Visítanos",
    navProducts: "Productos",
    navBook: "Reservar",
    productsEyebrow: "Tienda",
    productsTitle: "Productos destacados",
    productsSubtitle: "Cuidado profesional para llevar a casa.",
    productsViewAll: "Ver todos los productos",
    catalogTitle: "Catálogo",
    catalogSubtitle: "Productos profesionales disponibles en el salón. Pregunta por disponibilidad.",
    catalogSearchPlaceholder: "Buscar producto…",
    catalogFilterAll: "Todos",
    catalogEmpty: "No encontramos productos con ese filtro.",
    catalogBack: "Volver al inicio",
    catalogWhatsApp: "Consultar por WhatsApp",
    catalogClose: "Cerrar",
    productPriceLabel: "Precio",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    heroCta: "Reservar por WhatsApp",
    heroSecondary: "Ver servicios",
    heroScroll: "Desliza",
    servicesEyebrow: "Lo Que Hacemos",
    servicesTitle: "Cabello y uñas, con el mismo cuidado.",
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

// Expose for helpers that read window.CONFIG (const is lexical-only).
if (typeof window !== "undefined") window.CONFIG = CONFIG;
