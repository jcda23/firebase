import { ventanaModal } from "./WindowModal.js";

const datos = {
  img: `<img src="app/assets/img/modal.svg" class="modal__img">`,
  title: `<h2 class="modal__title">Bienvenidos a mi tienda<span class="modal__title modal__title--bold"> Registrate!</span></h2>`,
  text: `<p class="modal__paragraph">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse ea perferendis officiis?</p>`,
  enlace: `<a id="modal__close" class="modal__close" href="/spa/registro.html">Registrate</a>`,
};

export function ModalPrincipal() {
  let { img, title, text, enlace } = datos;

  ventanaModal(img, title, text, enlace);
}
