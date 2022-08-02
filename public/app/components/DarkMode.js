export function DarkMode() {
  const $darkMode = document.createElement("button");
  $darkMode.id = "dark__theme-btn";
  $darkMode.classList.add("dark__theme-btn");
  $darkMode.textContent = "🌙";

  const $stylos = document.createElement("style");
  $stylos.innerHTML = `

.dark__theme-btn {
  background-color: black;
  height: 2.5rem;
  width: 2.5rem;
  font-size: 1.5rem;
  position: fixed;
  bottom: 1rem;
  left: 50vw;
  right: 50vw;
  border: none;
  border-radius: 50%;
  outline: thin solid #000000;
  z-index: 999;
}

.dark__theme-btn:hover {
  background-color: black
}

.dark__mode {
background:
radial-gradient(black 15%, transparent 16%) 0 0,
radial-gradient(black 15%, transparent 16%) 8px 8px,
radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,
radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;
background-color:#282828;
background-size:16px 16px;
  color: white;
}

@media screen and (min-width: 1024px) {
  .dark__theme-btn {
    position: fixed;
    top: 2rem;
    left: 80vw;
  }
}`;
  document.head.appendChild($stylos);

  return $darkMode;
}

export function darkTheme(btn, classDark) {
  const $themeBtn = document.querySelector(btn),
    $selectors = document.querySelectorAll("[data-dark]");

  let moon = "🌙",
    sun = "🌞";

  const lightMode = () => {
    $selectors.forEach(($selector) => $selector.classList.remove(classDark));
    $themeBtn.textContent = moon;
    localStorage.setItem("theme", "light");
  };
  const darkMode = () => {
    if ($themeBtn) {
      $selectors.forEach(($selector) => $selector.classList.add(classDark));
      $themeBtn.textContent = sun;
      localStorage.setItem("theme", "dark");
    }
  };
  // <i class="fas fa-sun"></i>

  let $logo_bg = document.querySelector("#container__logo");
  let $logo = document.getElementById("logo");
  let $cart = document.querySelector("#cart");
  document.addEventListener("click", (e) => {
    if ($themeBtn) {
      if (e.target.matches(btn)) {
        if ($themeBtn.textContent === moon) {
          darkMode();
          $logo_bg.classList.add("active");
          $logo.setAttribute("src", "app/assets/img/merximport-w.png");
          $cart.classList.add("active");
        } else {
          lightMode();
          $logo_bg.classList.remove("active");
          $logo.setAttribute("src", "app/assets/img/merximport-b.png");
          $cart.classList.remove("active");
        }
      }
    }
  });

  if (localStorage.getItem("theme") === "null")
    localStorage.setItem("theme", "light");
  $logo_bg.classList.remove("active");
  $logo.setAttribute("src", "app/assets/img/merximport-b.png");
  $cart.classList.remove("active");
  if (localStorage.getItem("theme") === "light") {
    lightMode();
    $logo_bg.classList.remove("active");
    $logo.setAttribute("src", "app/assets/img/merximport-b.png");
    $cart.classList.remove("active");
  }
  if (localStorage.getItem("theme") === "dark") {
    darkMode();
    $logo_bg.classList.add("active");
    $logo.setAttribute("src", "app/assets/img/merximport-w.png");
    $cart.classList.add("active");
  }
}
