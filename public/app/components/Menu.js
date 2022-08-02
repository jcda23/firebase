import { DarkMode } from "./DarkMode.js";
import { MenuHamburguer } from "./HamburguerMenu.js";
import { SearchBar } from "./SearchBar.js";
import { ShoppingCar } from "./BtnShoppingCar.js";

export function Menu() {
  const $menu = document.createElement("header");
  $menu.classList.add("container__menu");
  $menu.id = "container__menu";
  const $content = document.createElement("section");
  $content.classList.add("content__menu");
  const $nav = document.createElement("nav");
  $nav.classList.add("menu", "panel");
  const $a1 = document.createElement("a");
  $a1.href = "index.html";
  $a1.textContent = "Home";
  const $a2 = document.createElement("a");
  $a2.href = "./registro.html";
  $a2.textContent = "Registro";
  const $a3 = document.createElement("a");
  $a3.href = "./login.html";
  $a3.textContent = "Login";
  const $a4 = document.createElement("a");
  $a4.href = "./contacto.html";
  $a4.textContent = "Contacto";
  const $a5 = document.createElement("a");
  $a5.id = "carrito";
  $a5.href = "./carrito.html";
  $a5.textContent = "Carrito";
  $nav.appendChild($a1);
  $nav.appendChild($a2);
  $nav.appendChild($a3);
  $nav.appendChild($a4);
  $nav.appendChild($a5);
  $content.appendChild($nav);
  $content.appendChild(SearchBar());
  $content.appendChild(DarkMode());
  $content.appendChild(ShoppingCar());
  $content.appendChild(MenuHamburguer());
  $menu.appendChild($content);

  const $stylos = document.createElement("style");
  $stylos.innerHTML = `
  
    .container__menu {
    height: 4rem;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    border-top: thin solid black;
    background-color: white;
    z-index: 999;
  }

  .content__menu {
    margin: 0 1rem;
    display: flex;
    justify-content: space-between;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    align-items: center;
  }

  .menu {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 5rem;
    z-index: 990;
    overflow: hidden;
    transition: transform 0.5s ease-in-out;
    transform: translate(0, 100%);
    background-color: white;
  }

  .menu.is-active {
    transform: translate(0, 0);
  }

  .menu>* {
    padding: 1rem;
    color: black;
  }

  .menu a:hover {
    color: white;
    background-color: black;
  }

 @media screen and (min-width: 1024px) {
    .container__menu {
      background-color: rgba(0, 0, 0, 0.6);
      position: fixed;
      width: 100%;
      height: 4rem;
      top: 6rem;
      left: 0;
      right: 0;
      border-top: thin solid black;
    }

    .content__menu {
      align-items: center;
      max-width: 1200px;
      width: 100%;
      height: 100%;
      margin: auto;
      z-index: 980;

    }

    .menu {
      background-color: transparent;
      justify-content: space-evenly;
      flex-direction: row;
      position: initial;
      flex: 0 0 80%;
      z-index: 999;
      transition: none;
      transform: none;
      margin: auto;
    }

    .menu a {
      color: white;
    }

    .menu a:hover {
      color: black;
      background-color: white;
    }

    .menu>* {
      padding: 1rem;
      color: #fff;
    }`;

  document.head.appendChild($stylos);

  return $menu;
}
