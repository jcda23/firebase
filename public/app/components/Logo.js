export function Logo() {
  const $logo = document.createElement("div");
  $logo.id = "data-dark";
  $logo.classList.add("data-dark");
  $logo.innerHTML = `
  <section id="container__logo" class="container__logo" data-dark>    
  <header class="header__one">
      <img id="logo" class="logo" src="app/assets/img/merximport-b.png" alt="logo">
      <span class="logotype">
        <h2>MERXIMPORT</h2>
      </span>
    </header>
  </section>`;

  const $stylos = document.createElement("style");
  $stylos.innerHTML = `
  .container__logo {
    background-color: white;
    opacity: 1;
    visibility: hidden;
  }

  .container__logo.active {
    background-color: rgb(38, 37, 37);
  }

   .header__one {
    margin: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
  }

  @media screen and (min-width: 1024px) {
    .container__logo {
      width: 100%;
      z-index: 999;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      opacity: 1;
      visibility: visible;
      height: 6rem;
      display: flex;
    }

    .header__one {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: start;
      align-items: center;
      letter-spacing: 0.1rem;
      text-transform: uppercase;
    }

    .logo {
      width: 3rem;
      height: 3rem;
      object-fit: cover;
      color: red;
    }

    .logotype {
      font-size: 1.5rem;
      /*  font-weight: bold; */
    }
  }

  `;
  document.head.appendChild($stylos);

  return $logo;
}
