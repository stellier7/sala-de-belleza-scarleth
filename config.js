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
  heroHeadlineLines: ["Scarleth", "Sala de Belleza"],
  heroSub:
    "Porque un cabello saludable comienza con los productos adecuados.",

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
      // Scarleth Salón — 14.4565158, -87.6399456
      mapsEmbedUrl:
        "https://www.google.com/maps?q=14.4565158,-87.6399456&z=17&hl=es&output=embed",
    },
    {
      id: "scarleth-2",
      name: "Scarleth #2",
      address: "Cerca de Inversiones American Fashion, Comayagua",
      phoneDisplay: "+504 9875-0500",
      whatsappNumber: "50498750500",
      mapsUrl:
        "https://www.google.com/maps/place/F948%2BJCV+Inversiones+American+Fashion,+Comayagua/@14.4566119,-87.6339733,17z",
      // Inversiones American Fashion area — 14.4566119, -87.6339733
      mapsEmbedUrl:
        "https://www.google.com/maps?q=14.4566119,-87.6339733&z=17&hl=es&output=embed",
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

  // ---- Categorías de productos (orden del filtro) ----
  productCategories: [
    "Champús",
    "Tratamientos",
    "Color",
    "Styling",
  ],

  // ---- Productos (extraídos de fotos de Facebook) ----
  products: [
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
{
      id: "wella-eimi-thermal-image",
      name: "Spray Termoprotector Wella EIMI Thermal Image",
      category: "Styling",
      image: "images/products/photo-05-wella-eimi-thermal.jpg",
      crop: null,
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
{
      id: "olaplex-no8-moisture-mask",
      name: "Mascarilla Olaplex Nº.8 Bond Intense Moisture",
      category: "Tratamientos",
      image: "images/products/photo-07-olaplex-no8.jpg",
      crop: null,
      featured: true,
      price: null,
    },
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
      id: "truss-miracle-summer-mask",
      name: "Mascarilla Truss Miracle Summer",
      category: "Tratamientos",
      image: "images/products/photo-08-truss-miracle-summer.jpg",
      crop: { x: 68, y: 60, w: 32, h: 40 },
      featured: false,
      price: null,
    },
{
      id: "luseta-crema-rizos",
      name: "Crema para rizos Luseta",
      category: "Styling",
      image: "images/products/photo-09-luseta-curl-cream.jpg",
      crop: null,
      featured: true,
      price: null,
    },
{
      id: "chihtsai-instant-treatment-no12",
      name: "Tratamiento Instantáneo Chihtsai No. 12",
      category: "Tratamientos",
      image: "images/products/photo-10-chihtsai-no12.jpg",
      crop: null,
      featured: true,
      price: null,
    },
{
      id: "chihtsai-insight-caffeine-shampoo",
      name: "Champú de Cafeína Chihtsai INSIGHT",
      category: "Champús",
      image: "images/products/photo-11-chihtsai-insight.jpg",
      crop: { x: 6, y: 26, w: 32, h: 58 },
      featured: false,
      price: null,
    },
{
      id: "moroccanoil-intense-smoothing-serum",
      name: "Sérum Suavizante Intenso Moroccanoil",
      category: "Tratamientos",
      image: "images/products/photo-12-moroccanoil-serum.jpg",
      crop: null,
      featured: true,
      price: null,
    },
{
      id: "mineral-plus-mud",
      name: "Máscara Mineral+ Mud",
      category: "Tratamientos",
      image: "images/products/photo-13-mineral-mud.jpg",
      crop: null,
      featured: true,
      price: null,
    },
{
      id: "truss-deluxe-prime",
      name: "TRUSS Deluxe Prime Miracle",
      category: "Tratamientos",
      image: "images/products/photo-17-truss-deluxe-prime.jpg",
      crop: null,
      featured: true,
      price: null,
    },
{
      id: "olaplex-no4c-clarifying-shampoo",
      name: "Champú Clarificador Olaplex Nº.4C",
      category: "Champús",
      image: "images/products/photo-20-olaplex-4c-8.jpg",
      crop: { x: 8, y: 12, w: 42, h: 78 },
      featured: true,
      price: null,
    },
{
      id: "lakme-teknia-vital-lotion",
      name: "Loción Lakmé Teknia Scalp Care Vital",
      category: "Tratamientos",
      image: "images/products/photo-24-lakme-vital-lotion.jpg",
      crop: null,
      featured: true,
      price: null,
    },
{
      id: "ecosmetics-nutrition-resistance-mask",
      name: "Mascarilla ecosmetics Nutrition Resistência",
      category: "Tratamientos",
      image: "images/products/photo-27-ecosmetics-nutrition-mask.jpg",
      crop: null,
      featured: false,
      price: null,
    }
  ],

  // ---- Textos de interfaz ----
  ui: {
    metaDescription:
      "Scarleth — Sala de Belleza en Comayagua. Cabello, uñas, cejas, maquillaje y más en Scarleth #1 y Scarleth #2. Reserva por WhatsApp.",
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
    catalogAddToCart: "Agregar al carrito",
    catalogClose: "Cerrar",
    productPriceLabel: "Precio",
    cartLabel: "Carrito",
    cartTitle: "Tu carrito",
    cartEmpty: "Tu carrito está vacío.",
    cartCheckout: "Pedir por WhatsApp",
    cartClear: "Vaciar carrito",
    cartAdded: "Agregado",
    cartQty: "Cantidad",
    cartRemove: "Quitar",
    cartClose: "Cerrar carrito",
    cartItemLine: "{qty}× {name}",
    cartWhatsAppIntro: "Hola, me interesa este pedido:",
    cartWhatsAppOutro: "¡Gracias!",
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

// Expose for helpers that read window.CONFIG (const is lexical-only).
if (typeof window !== "undefined") window.CONFIG = CONFIG;
