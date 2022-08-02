import api from "../helpers/json_api.js";
import { ProductCard } from "./ProductCards.js";
import { Registro } from "./Registro.js";
import { SliderCard } from "./SliderCard.js";
import { Title } from "./Title.js";
import { ModalPrincipal } from "./DatosModal.js";
import { Login } from "./login.js";
import { addCarrito } from "./AddCarrito.js";
import { Contacto } from "./Contacto.js";

const d = document;
const w = window;

export async function Router() {
  document.addEventListener("click", (e) => {
    document.getElementById("cards");
    addCarrito(e);
  });

  let { pathname } = w.location;
  console.log(pathname);

  if (!pathname || pathname === "/public/index.html") {
    d.getElementById("root").insertAdjacentElement("afterbegin", Title());
    if (!localStorage.getItem("inactivarModal")) {
      ModalPrincipal();
    }
    ProductCard(api.productos);
    let html = "";
    api.slider.forEach((slide) => (html += SliderCard(slide)));
    d.getElementById("slider").innerHTML = html;
  } else if (!pathname || pathname === "/public/carrito.html") {
  } else if (!pathname || pathname === "/public/registro.html") {
    d.getElementById("registro").appendChild(Registro());
  } else if (!pathname || pathname === "/public/login.html") {
    d.getElementById("login").appendChild(Login());
  } else if (!pathname || pathname === "/public/contacto.html") {
    d.getElementById("contacto").appendChild(Contacto());
  }
}
