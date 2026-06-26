const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });
}

const infoButtons = document.querySelectorAll(".info-button");

infoButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const wrap = button.closest(".info-wrap");
    if (!wrap) return;

    const isOpen = wrap.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));

    document.querySelectorAll(".info-wrap.is-open").forEach((otherWrap) => {
      if (otherWrap !== wrap) {
        otherWrap.classList.remove("is-open");
        otherWrap.querySelector(".info-button")?.setAttribute("aria-expanded", "false");
      }
    });
  });
});

document.addEventListener("click", () => {
  document.querySelectorAll(".info-wrap.is-open").forEach((wrap) => {
    wrap.classList.remove("is-open");
    wrap.querySelector(".info-button")?.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    document.querySelectorAll(".info-wrap.is-open").forEach((wrap) => {
      wrap.classList.remove("is-open");
      wrap.querySelector(".info-button")?.setAttribute("aria-expanded", "false");
    });
  }
});
