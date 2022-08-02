const addAttributes = (element, attrObject) => {
  for (let attr in attrObject) {
    if (attrObject.hasOwnProperty(attr)) {
      element.setAttribute(attr, attrObject[attr]);
    }
  }
};

//Recibimos un elemento y un objeto con atributos y sus hijos
const createCustomElement = (element, attributes, children) => {
  let customElement = document.createElement(element);
  if (children !== undefined)
    children.forEach((child) => {
      if (child.nodeType) {
        if (child.nodeType === 1 || child.nodeType === 11)
          customElement.appendChild(child);
      } else {
        customElement.innerHTML += child;
      }
    });
  addAttributes(customElement, attributes);
  return customElement;
};

export const ventanaModal = (img, title, text, enlace) => {
  const modalClose = createCustomElement(
      "div",
      {
        class: "modal__close",
        id: "modal__close",
      },
      [enlace]
    ),
    modalParagraph = createCustomElement(
      "div",
      {
        class: "modal__paragraph",
        id: "modal__paragraph",
      },
      [text]
    ),
    modalTitle = createCustomElement(
      "div",
      {
        class: "modal__title",
        id: "modal__title",
      },
      [title]
    ),
    modalFigure = createCustomElement(
      "figure",
      {
        id: "modal__picture",
        class: "modal__picture",
      },
      [img]
    ),
    modalContainer = createCustomElement(
      "div",
      {
        id: "modal__container",
        class: "modal__container",
      },
      [modalFigure, modalTitle, modalParagraph, modalClose]
    ),
    modal = createCustomElement(
      "section",
      {
        id: "modal",
        class: "modal",
      },
      [modalContainer]
    );
  //Despliega la ventana modal
  document.body.appendChild(modal);

  const closeModal = () => {
    /*     document.body.removeChild(modal); */
    document.getElementById("modal").classList.add("is-active");
    document.getElementById("modal__container").classList.add("is-active");
    document.getElementById("modal__picture").classList.add("is-active");
  };
  //Añadimos el evento para cerrar la ventana modal
  modalContainer.addEventListener("click", (e) => {
    if (e.target.id === "modal__container") {
      closeModal();
      let inactivarModal = 1;
      localStorage.setItem("inactivarModal", inactivarModal);
    }
  });

  const $stylos = document.createElement("style");
  $stylos.innerHTML = `
  
 
  .header__modal {
  display: flex;
  margin: auto;
  background-color: #fff;
  width: 80%;
  max-width: 600px;
  max-height: 80%;
}

.cta {
  margin: auto;
  background-color: royalblue;
  color: #fff;
  text-decoration: none;
  border-radius: .4em;
  padding: 1.2em 3em;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  transition: opacity .5s ease-in-out;
  transform: translateY(0);
  z-index: 1;
}

@keyframes show {
  0% {
    transform: translateY(-150vh);
  }
}

.modal.is-active {
  pointer-events: none;
  opacity: 0;
}

@keyframes scale {
  0% {
    transform: scale(0);
  }
}

.modal__container {
  margin: auto;
  background-color: #fff;
  width: 90%;
  max-width: 600px;
  max-height: 90%;
  overflow: hidden;
  text-align: center;
  padding: 2.5em 1.5em;
  border-radius: 1em;
  animation: show 1s .5s backwards;
  z-index: 999;
}

.modal__picture {
  width: 90%;
  margin: 0 auto;
  max-width: 400px;
  margin-bottom: 2em;
  animation: scale .5s 1.5s backwards;
}

.modal__img {
  width: 100%;
  display: block;

}

.modal__title {
  font-size: 2.5rem;
  font-weight: 500;
}

.modal__title--bold {
  font-weight: 700;
}

.modal__paragraph {
  margin-top: 1em;
  margin-bottom: 1em;
  line-height: 1.5;
}

.modal__close a {
  display: inline-block;
  border: 1px solid;
  padding: 1em 2em;
  text-decoration: none;
  font-weight: 700;
  color: #333;
  border-radius: .4em;
}

@media (max-width: 600px) {
  .modal__title {
    font-size: 1.5rem;
  }

} `;
  document.head.appendChild($stylos);
};
