// Shared product helpers for index.html and productos.html (no modules).
(function (global) {
  "use strict";

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, (ch) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[ch]
    );
  }

  function getConfig() {
    // Classic <script> shares lexical CONFIG from config.js; it is not on window.
    if (typeof CONFIG !== "undefined") return CONFIG;
    return global.CONFIG || {};
  }

  function getProducts() {
    const c = getConfig();
    return Array.isArray(c.products) ? c.products : [];
  }

  function getCategories() {
    const c = getConfig();
    const configured = Array.isArray(c.productCategories)
      ? c.productCategories
      : [];
    if (configured.length) return configured.slice();
    const seen = new Set();
    getProducts().forEach((p) => {
      if (p.category) seen.add(p.category);
    });
    return Array.from(seen);
  }

  function getWhatsAppNumber() {
    const c = getConfig();
    if (c.whatsappNumber) return String(c.whatsappNumber).replace(/\D/g, "");
    const first = Array.isArray(c.locations) && c.locations[0];
    if (first && first.whatsappNumber) {
      return String(first.whatsappNumber).replace(/\D/g, "");
    }
    return "";
  }

  function productWhatsAppUrl(product) {
    const number = getWhatsAppNumber();
    const name = (product && product.name) || "este producto";
    const message = `Hola, me interesa ${name}`;
    if (!number) return `https://wa.me/?text=${encodeURIComponent(message)}`;
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }

  /**
   * Apply crop percentages to an <img> inside an overflow-hidden wrapper.
   * crop: { x, y, w, h } in 0–100 of the source photo.
   */
  function applyProductCrop(img, crop) {
    if (!img) return;
    img.classList.remove("is-cropped");
    img.style.removeProperty("width");
    img.style.removeProperty("height");
    img.style.removeProperty("left");
    img.style.removeProperty("top");
    img.style.removeProperty("right");
    img.style.removeProperty("bottom");
    img.style.removeProperty("object-fit");
    img.style.removeProperty("max-width");

    if (!crop || crop.w <= 0 || crop.h <= 0) return;

    const x = Number(crop.x) || 0;
    const y = Number(crop.y) || 0;
    const w = Number(crop.w);
    const h = Number(crop.h);

    img.classList.add("is-cropped");
    img.style.maxWidth = "none";
    img.style.width = `${(100 / w) * 100}%`;
    img.style.height = `${(100 / h) * 100}%`;
    img.style.left = `${-(x / w) * 100}%`;
    img.style.top = `${-(y / h) * 100}%`;
    img.style.objectFit = "fill";
  }

  function formatPrice(price) {
    if (price == null || price === "") return "";
    if (typeof price === "number") {
      return `L ${price.toLocaleString("es-HN", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
      })}`;
    }
    return String(price);
  }

  function createProductCard(product, options) {
    const opts = options || {};
    const interactive = opts.interactive !== false;
    const card = document.createElement(interactive ? "button" : "article");
    card.className = "product-card";
    card.type = interactive ? "button" : undefined;
    card.dataset.productId = product.id || "";

    const media = document.createElement("div");
    media.className = "product-media";

    const img = document.createElement("img");
    img.src = product.image || "";
    img.alt = product.name || "";
    img.loading = "lazy";
    img.decoding = "async";
    img.draggable = false;
    media.appendChild(img);
    applyProductCrop(img, product.crop);

    const body = document.createElement("div");
    body.className = "product-card-body";

    if (product.category) {
      const tag = document.createElement("span");
      tag.className = "product-tag";
      tag.textContent = product.category;
      body.appendChild(tag);
    }

    const title = document.createElement("h3");
    title.className = "product-name";
    title.textContent = product.name || "";
    body.appendChild(title);

    const priceText = formatPrice(product.price);
    if (priceText) {
      const price = document.createElement("p");
      price.className = "product-price";
      price.textContent = priceText;
      body.appendChild(price);
    }

    card.appendChild(media);
    card.appendChild(body);

    if (interactive && typeof opts.onSelect === "function") {
      card.addEventListener("click", () => opts.onSelect(product));
    }

    return card;
  }

  function initFeaturedMarquee(root) {
    if (!root) return;
    const products = getProducts().filter((p) => p.featured);
    const track = root.querySelector("[data-marquee-track]");
    const cta = root.querySelector("[data-products-cta]");
    const ui = getConfig().ui || {};

    if (cta) {
      cta.textContent = ui.productsViewAll || "Ver todos los productos";
      cta.href = "productos.html";
    }

    if (!track || !products.length) {
      root.hidden = true;
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.innerHTML = "";

    const appendSet = () => {
      products.forEach((product) => {
        const card = createProductCard(product, { interactive: false });
        card.setAttribute("tabindex", "-1");
        track.appendChild(card);
      });
    };

    appendSet();
    if (!reduced) appendSet();

    root.classList.toggle("is-reduced", reduced);

    if (reduced) return;

    const pause = () => root.classList.add("is-paused");
    const resume = () => root.classList.remove("is-paused");

    root.addEventListener("mouseenter", pause);
    root.addEventListener("mouseleave", resume);
    root.addEventListener(
      "pointerdown",
      (event) => {
        if (event.pointerType === "mouse" && event.button !== 0) return;
        pause();
      },
      { passive: true }
    );
    root.addEventListener("pointerup", resume, { passive: true });
    root.addEventListener("pointercancel", resume, { passive: true });
    root.addEventListener(
      "touchstart",
      () => {
        pause();
      },
      { passive: true }
    );
    root.addEventListener("touchend", resume, { passive: true });
  }

  function initCatalogPage() {
    const grid = document.getElementById("catalog-grid");
    if (!grid) return;

    const c = getConfig();
    const ui = c.ui || {};
    const products = getProducts();
    const categories = getCategories();

    const chipsEl = document.getElementById("catalog-chips");
    const searchEl = document.getElementById("catalog-search");
    const emptyEl = document.getElementById("catalog-empty");
    const modal = document.getElementById("product-modal");
    const modalImg = document.getElementById("product-modal-img");
    const modalMedia = document.getElementById("product-modal-media");
    const modalName = document.getElementById("product-modal-name");
    const modalCategory = document.getElementById("product-modal-category");
    const modalPrice = document.getElementById("product-modal-price");
    const modalWa = document.getElementById("product-modal-whatsapp");
    const modalClose = document.getElementById("product-modal-close");
    const modalBackdrop = document.getElementById("product-modal-backdrop");

    let activeCategory = "";
    let query = "";
    let lastFocus = null;
    let activeProduct = null;

    document.getElementById("catalog-title").textContent =
      ui.catalogTitle || "Catálogo";
    document.getElementById("catalog-subtitle").textContent =
      ui.catalogSubtitle || "";
    if (searchEl) {
      searchEl.placeholder = ui.catalogSearchPlaceholder || "Buscar…";
      searchEl.setAttribute(
        "aria-label",
        ui.catalogSearchPlaceholder || "Buscar producto"
      );
    }
    if (emptyEl) emptyEl.textContent = ui.catalogEmpty || "";
    if (modalWa) {
      modalWa.innerHTML = `
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.13-2.9-7C17.18 3.03 14.7 2 12.04 2Zm0 18.14h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.23 8.23 0 0 1-1.26-4.37c0-4.55 3.7-8.25 8.26-8.25 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.84c0 4.55-3.71 8.22-8.25 8.22Z"/></svg>
        <span>${esc(ui.catalogWhatsApp || "Consultar por WhatsApp")}</span>`;
    }
    if (modalClose) {
      modalClose.setAttribute("aria-label", ui.catalogClose || "Cerrar");
    }
    if (modalBackdrop) {
      modalBackdrop.setAttribute("aria-label", ui.catalogClose || "Cerrar");
    }

    if (chipsEl) {
      const allLabel = ui.catalogFilterAll || "Todos";
      const chipHtml = [
        `<button type="button" class="catalog-chip is-active" data-category="" aria-pressed="true">${esc(
          allLabel
        )}</button>`,
      ]
        .concat(
          categories.map(
            (cat) =>
              `<button type="button" class="catalog-chip" data-category="${esc(
                cat
              )}" aria-pressed="false">${esc(cat)}</button>`
          )
        )
        .join("");
      chipsEl.innerHTML = chipHtml;

      chipsEl.addEventListener("click", (event) => {
        const btn = event.target.closest(".catalog-chip");
        if (!btn || !chipsEl.contains(btn)) return;
        activeCategory = btn.dataset.category || "";
        chipsEl.querySelectorAll(".catalog-chip").forEach((chip) => {
          const on = chip === btn;
          chip.classList.toggle("is-active", on);
          chip.setAttribute("aria-pressed", on ? "true" : "false");
        });
        render();
      });
    }

    if (searchEl) {
      searchEl.addEventListener("input", () => {
        query = searchEl.value.trim().toLowerCase();
        render();
      });
    }

    function matches(product) {
      if (activeCategory && product.category !== activeCategory) return false;
      if (!query) return true;
      const hay = `${product.name || ""} ${product.category || ""}`.toLowerCase();
      return hay.includes(query);
    }

    function closeModal() {
      if (!modal || modal.hidden) return;
      modal.hidden = true;
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("product-modal-open");
      activeProduct = null;
      if (modalImg) {
        modalImg.removeAttribute("src");
        applyProductCrop(modalImg, null);
      }
      if (lastFocus && typeof lastFocus.focus === "function") lastFocus.focus();
    }

    function openModal(product, trigger) {
      if (!modal || !product) return;
      activeProduct = product;
      lastFocus = trigger || document.activeElement;
      if (modalName) modalName.textContent = product.name || "";
      if (modalCategory) {
        modalCategory.textContent = product.category || "";
        modalCategory.hidden = !product.category;
      }
      const priceText = formatPrice(product.price);
      if (modalPrice) {
        modalPrice.textContent = priceText;
        modalPrice.hidden = !priceText;
      }
      if (modalImg) {
        modalImg.src = product.image || "";
        modalImg.alt = product.name || "";
        applyProductCrop(modalImg, product.crop);
      }
      if (modalMedia) {
        modalMedia.classList.toggle("has-crop", Boolean(product.crop));
      }
      if (modalWa) {
        modalWa.href = productWhatsAppUrl(product);
      }
      modal.hidden = false;
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("product-modal-open");
      if (modalClose) modalClose.focus();
    }

    function render() {
      const filtered = products.filter(matches);
      grid.innerHTML = "";
      filtered.forEach((product) => {
        const card = createProductCard(product, {
          interactive: true,
          onSelect: (p) => openModal(p, card),
        });
        grid.appendChild(card);
      });
      if (emptyEl) emptyEl.hidden = filtered.length > 0;
    }

    if (modalClose) modalClose.addEventListener("click", closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener("click", closeModal);
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeModal();
    });

    render();
  }

  function applyBrandChrome() {
    const c = getConfig();
    if (!c || !c.brandName) return;
    const ui = c.ui || {};

    document.documentElement.lang = c.lang || "es";

    const colorMap = {
      cream: "--cream",
      cream2: "--cream-2",
      ink: "--ink",
      inkSoft: "--ink-soft",
      inkFaint: "--ink-faint",
      accent: "--accent",
      accentInv: "--accent-inv",
      accentHover: "--accent-hover",
      gray: "--gray",
      grayLight: "--gray-light",
      line: "--line",
      lineStrong: "--line-strong",
    };
    const rootStyle = document.documentElement.style;
    Object.entries(colorMap).forEach(([key, cssVar]) => {
      if (c.colors && c.colors[key]) rootStyle.setProperty(cssVar, c.colors[key]);
    });

    const navName = document.getElementById("nav-name");
    const navSubtitle = document.getElementById("nav-subtitle");
    const navLogo = document.getElementById("nav-logo");
    if (navName) navName.textContent = c.brandName;
    if (navSubtitle) navSubtitle.textContent = c.brandSubtitle || "";
    if (navLogo && c.logoImage) {
      navLogo.src = c.logoImage;
      navLogo.alt = `${c.brandName} — ${c.brandSubtitle || c.tagline}`;
    }

    const navProducts = document.getElementById("nav-products");
    if (navProducts) navProducts.textContent = ui.navProducts || "Productos";

    const navCta = document.getElementById("nav-cta-label");
    if (navCta) navCta.textContent = ui.navBook || "Reservar";

    const footerBrand = document.getElementById("footer-brand");
    const footerMeta = document.getElementById("footer-meta");
    const footerInsta = document.getElementById("footer-insta");
    if (footerBrand) {
      footerBrand.textContent = `${c.brandName} — ${c.brandSubtitle || c.tagline}`;
    }
    if (footerMeta) {
      const locations = Array.isArray(c.locations) ? c.locations : [];
      footerMeta.textContent =
        locations.map((loc) => loc.name).join(" · ") || c.tagline;
    }
    if (footerInsta) {
      footerInsta.href = c.instagramUrl || "#";
      footerInsta.textContent = c.instagramHandle || "Instagram";
      footerInsta.setAttribute(
        "aria-label",
        c.instagramHandle || "Instagram"
      );
    }
  }

  global.ProductsUI = {
    esc,
    getProducts,
    getCategories,
    getWhatsAppNumber,
    productWhatsAppUrl,
    applyProductCrop,
    formatPrice,
    createProductCard,
    initFeaturedMarquee,
    initCatalogPage,
    applyBrandChrome,
  };
})(window);
