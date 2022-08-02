const templateCard = document.getElementById("template__card").content;
const fragment = document.createDocumentFragment();

export const ProductCard = (props) => {
  props.forEach((producto) => {
    templateCard.querySelector("h5").textContent = producto.title;
    templateCard.querySelector("h6").textContent = "Precio: $";
    templateCard.querySelector("p").textContent = producto.precio;
    templateCard
      .querySelector("img")
      .setAttribute("src", producto.thumbnailUrl);
    //botones
    templateCard.querySelector(".btn-buy").dataset.id = producto.id;
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);

  const $stylos = document.createElement("style");
  $stylos.innerHTML += `   

    .container__cards {
      margin-top: 5rem;
     padding: 0 1rem;
      border: none;
    }

    .container__cards .row {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-gap: 15px;
      padding: 0 1rem;
    }

    .card {
      border-radius: 8px;
      box-shadow: 2px 4px 2px 1px rgba(0, 0, 0, 0.3);
      overflow: hidden;
      text-align: center;
      transition: all 0.25s;
      background-color: #ffffff;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 16px rgba(0, 0, 0, 0.);
    }

    .card-body {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around
    }

    .img__card {
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    #price__card,
    #id {
       color: #212529;
    }

    .title__card {
      font-weight: 600;
      width: 100%;
      color: #212529;
    }

    .price__card {
      padding: 0 1rem;
      font-size: 16px;
      font-weight: 300;
    }

    .btn-buy {
      background-color: #3498db;
      margin-right: 10px;
      border: none
    }

    .btn-buy:hover {
      background-color: #3498db;
      opacity: .8;
    }

    .btn-buy>* {
      margin-left: 10px;
    }

    @media screen and (min-width: 768px) {
      .container__cards .row {
        display: grid;
        grid-template-columns: repeat(3, 230px);
        grid-gap: 15px;
        margin: 0 auto;
        padding: 0 1rem;
      }
    }

    @media screen and (min-width: 1024px) {

      .container__cards {
        max-width: 1200px;
        width: 100%;
        margin: 0 auto;
        padding: 5rem 0;
      }

      .container__cards .row {
        display: grid;
        grid-template-columns: repeat(5, 227px);
        grid-gap: 16px;
        margin: 0 auto;
      }

      .container__cards .cards .card__body {
        background-color: var(--second-color);
        color: var(--main-color);
        transition: all 0.3s ease;
      }

      .container__cards .cards .card__body .card__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

    }   `;
  document.head.appendChild($stylos);
};
