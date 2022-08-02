import { Header } from "./components/header.js";
import { Router } from "./components/router.js";
import { Slider } from "./components/Slider.js";
import { BtnSlider } from "./components/Slider.js";
import { darkTheme } from "./components/DarkMode.js";
import { menuMobile } from "./components/HamburguerMenu.js";
import searchFilter from "./components/SearchBar.js";
import { Footer } from "./components/Footer.js";
import { ResetStyles } from "./helpers/ResetStyles.js";

const d = document;

export function App() {
  d.getElementById("header__container").appendChild(Header());
  d.getElementById("container__slider").appendChild(Slider());
  d.getElementById("end").appendChild(Footer());
  darkTheme(".dark__theme-btn", "dark__mode");
  menuMobile(".panel__btn", ".panel", ".menu a");
  searchFilter(".search__bar-input", ".card");
  ResetStyles();
  BtnSlider();
  Router();
}
