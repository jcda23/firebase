export function MenuHamburguer() {
  const $menuHamburguer = document.createElement("button");
  $menuHamburguer.id = "hamburguer";
  $menuHamburguer.classList.add(
    "hamburguer",
    "panel__mobile",
    "hamburger",
    "hamburger--vortex",
    "panel__btn"
  );
  $menuHamburguer.innerHTML = `
  <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>`;

  const $stylos = document.createElement("style");
  $stylos.innerHTML = `
  .panel__mobile {
    z-index: 999;
    padding-right: .5rem;
  }
   @media screen and (min-width: 1024px) {
    .panel__mobile {
        display: none
      }
    }`;
  document.head.appendChild($stylos);

  return $menuHamburguer;
}

export function menuMobile(panelBtn, panel, linkMenu) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      d.querySelector(panel).classList.toggle("is-active");
      d.querySelector(panelBtn).classList.toggle("is-active");
    }
    if (e.target.matches(linkMenu)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
    }
  });
}
