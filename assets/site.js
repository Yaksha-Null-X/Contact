
const selectableLinks = document.querySelectorAll(
  "a.link-card, a.action-button, a.downloads-button"
);

const selectableCards = document.querySelectorAll(".gallery-card");
const galleryMediaItems = document.querySelectorAll(".gallery-card .gallery-media");
const ARM_TIMEOUT = 2400;

let armedLink = null;
let disarmTimer = null;

function clearArmedState() {
  if (armedLink) {
    armedLink.classList.remove("is-armed");
    const parentCard = armedLink.closest(".gallery-card");
    if (parentCard) parentCard.classList.remove("is-armed");
  }

  armedLink = null;

  if (disarmTimer) {
    window.clearTimeout(disarmTimer);
    disarmTimer = null;
  }
}

function openLink(link) {
  const href = link.getAttribute("href");

  if (!href || href === "#") {
    clearArmedState();
    return;
  }

  const target = link.getAttribute("target");

  if (target === "_blank") {
    window.open(href, "_blank", "noopener,noreferrer");
    clearArmedState();
    return;
  }

  window.location.href = href;
}

function armLink(link) {
  clearArmedState();

  armedLink = link;
  link.classList.add("is-armed");

  const parentCard = link.closest(".gallery-card");
  if (parentCard) parentCard.classList.add("is-armed");

  if (!link.querySelector(".double-click-hint")) {
    const hint = document.createElement("span");
    hint.className = "double-click-hint";
    hint.textContent = "Again";
    link.appendChild(hint);
  }

  disarmTimer = window.setTimeout(clearArmedState, ARM_TIMEOUT);
}

selectableLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    if (armedLink === link) {
      openLink(link);
      return;
    }

    armLink(link);
  });

  link.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();

    if (armedLink === link) {
      openLink(link);
      return;
    }

    armLink(link);
  });
});

function closeGalleryCards(exceptCard = null) {
  selectableCards.forEach((card) => {
    if (card !== exceptCard) {
      card.classList.remove("is-open");
    }
  });
}

selectableCards.forEach((card) => {
  if (!card.hasAttribute("tabindex")) {
    card.setAttribute("tabindex", "0");
  }

  card.setAttribute("role", "button");
  card.setAttribute("aria-expanded", "false");

  const toggleCard = () => {
    const willOpen = !card.classList.contains("is-open");
    closeGalleryCards(willOpen ? card : null);
    card.classList.toggle("is-open", willOpen);
    card.setAttribute("aria-expanded", willOpen ? "true" : "false");
  };

  card.addEventListener("click", (event) => {
    const interactiveInsideOverlay = event.target.closest(
      ".gallery-body a, .gallery-body button"
    );

    if (interactiveInsideOverlay) return;

    event.preventDefault();
    toggleCard();
  });

  card.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    toggleCard();
  });
});

galleryMediaItems.forEach((media) => {
  media.addEventListener("click", (event) => {
    event.preventDefault();
  });
});

document.addEventListener("click", (event) => {
  const clickedInteractiveLink = event.target.closest(
    "a.link-card, a.action-button, a.downloads-button"
  );

  if (!clickedInteractiveLink && armedLink) {
    clearArmedState();
  }

  const clickedGalleryCard = event.target.closest(".gallery-card");
  if (!clickedGalleryCard) {
    closeGalleryCards();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    clearArmedState();
    closeGalleryCards();
  }
});

/* Tiny press feedback that preserves the original animations. */
selectableLinks.forEach((item) => {
  item.addEventListener("pointerdown", () => {
    item.classList.add("clicked");
  });

  item.addEventListener("pointerup", () => {
    window.setTimeout(() => {
      item.classList.remove("clicked");
    }, 140);
  });

  item.addEventListener("pointerleave", () => {
    item.classList.remove("clicked");
  });
});

selectableCards.forEach((card) => {
  card.addEventListener("pointerdown", () => {
    card.classList.add("clicked");
  });

  card.addEventListener("pointerup", () => {
    window.setTimeout(() => {
      card.classList.remove("clicked");
    }, 140);
  });

  card.addEventListener("pointerleave", () => {
    card.classList.remove("clicked");
  });
});
// Header con tope: fijo al inicio, bloqueado antes del avatar.
(() => {
  const header = document.querySelector(".site-header");
  const contactPage = document.querySelector(".contact-page");
  const contactTarget =
    document.querySelector(".profile-avatar") ||
    document.querySelector(".contact-card");

  if (!header || !contactPage || !contactTarget) return;

  let ticking = false;

  const updateHeaderLimit = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    const headerHeight = header.offsetHeight || 72;

    // Más alto = el header se bloquea más arriba.
    const safeGap = 64;

    const targetTopPage =
      contactTarget.getBoundingClientRect().top + scrollY;

    const stopPoint = targetTopPage - headerHeight - safeGap;

    if (scrollY >= stopPoint) {
      header.classList.add("header-park-contact");
      header.classList.remove("header-clear-contact");
      header.style.setProperty("--header-park-top", `${stopPoint}px`);
    } else {
      header.classList.remove("header-park-contact");
      header.classList.remove("header-clear-contact");
      header.style.removeProperty("--header-park-top");
    }

    ticking = false;
  };

  const requestUpdate = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateHeaderLimit);
      ticking = true;
    }
  };

  updateHeaderLimit();

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
})();
