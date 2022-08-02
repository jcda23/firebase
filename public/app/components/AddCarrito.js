const items = document.getElementById("items");
const footer = document.getElementById("footer");
const templateFooter = document.getElementById("template__footer").content;
const templateCar = document.getElementById("template__car").content;
const fragment = document.createDocumentFragment();

export let shopCar = {};
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    shopCar = JSON.parse(localStorage.getItem("carrito"));
    PaintCarrito();
  }
});

export const addCarrito = (e) => {
  if (e.target.classList.contains("more")) {
    btnSelect(e);
  }
  if (e.target.classList.contains("less")) {
    btnSelect(e);
  }
  if (e.target.classList.contains("empty__car")) {
    shopCar = {};
    setTimeout(() => {
      updateCarDom(shopCar);
    }, 100);
    PaintCarrito();
  }
  if (e.target.classList.contains("btn-buy")) {
    getCarrito(e.target.parentElement);
  }
  if (e.target.matches(".pay__car")) {
    shopCar = {};
    let text = "Pago realizado";
    setTimeout(() => {
      alerta(text, 2);
    }, 100);
    PaintCarrito();
  }
  e.stopPropagation();
};

const getCarrito = (data) => {
  let { id, title, precio, thumbnailUrl } = data;
  let product = {
    id: data.querySelector(".btn-buy").dataset.id,
    title: data.querySelector(".title__card").textContent,
    precio: data.querySelector(".price__card").textContent,
    thumbnailUrl: data.querySelector("img").getAttribute("src"),
    cantidad: 1,
  };
  if (shopCar.hasOwnProperty(product.id)) {
    product.cantidad = shopCar[product.id].cantidad + 1;
  }
  shopCar[product.id] = { ...product };
  let text = "Agregado";
  PaintCarrito();
  alerta(text, 1);

  //console.log(product);
};

export function PaintCarrito() {
  items.innerHTML = "";
  Object.values(shopCar).forEach((product) => {
    templateCar.querySelector("th").textContent = product.id;
    templateCar.querySelector("img").setAttribute("src", product.thumbnailUrl);
    templateCar.querySelectorAll("td")[1].textContent = product.title;
    templateCar.querySelectorAll("td")[2].textContent = product.cantidad;
    templateCar.querySelector("span").textContent =
      product.cantidad * product.precio;
    //botones
    templateCar.querySelector(".btn-info").dataset.id = product.id;
    templateCar.querySelector(".btn-danger").dataset.id = product.id;

    const clone = templateCar.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);
  PaintFooter();
  localStorage.setItem("carrito", JSON.stringify(shopCar));
}

function PaintFooter() {
  footer.innerHTML = "";
  if (Object.keys(shopCar).length < 0) {
    footer.innerHTML = `<th scope="row" colspan="6">Carrito vacío</th>`;
    return;
  }
  const nCantidad = Object.values(shopCar).reduce(
    (acc, { cantidad }) => acc + cantidad,
    0
  );

  const nprecio = Object.values(shopCar).reduce(
    (acc, { cantidad, precio }) => acc + cantidad * precio,
    0
  );

  templateFooter.querySelector("span").textContent = nprecio;

  const clone = templateFooter.cloneNode(true);
  fragment.appendChild(clone);
  footer.appendChild(fragment);

  setTimeout(() => {
    updateCarDom(nCantidad);
  }, 100);
}

const btnSelect = (e) => {
  if (e.target.classList.contains("btn-info")) {
    const producto = shopCar[e.target.dataset.id];
    producto.cantidad++;
    shopCar[e.target.dataset.id] = { ...producto };
    PaintCarrito();
  }

  if (e.target.classList.contains("btn-danger")) {
    const producto = shopCar[e.target.dataset.id];
    producto.cantidad--;
    if (producto.cantidad === 0) {
      delete shopCar[e.target.dataset.id];
    } else {
      shopCar[e.target.dataset.id] = { ...producto };
    }
    PaintCarrito();
  }
  e.stopPropagation();
};

const alerta = (text, value) => {
  switch (value) {
    case 1:
      const Toast = Swal.mixin({
        toast: true,
        position: "center-end",
        showConfirmButton: false,
        timer: 500,
        timerProgressBar: false,
        background: "#6cd890",
        color: "#000",
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: `${text}`,
      });
      break;

    case 2:
      Swal.fire({
        position: "center",
        icon: "success",
        title: `${text}`,
        showConfirmButton: false,
        timer: 1500,
        background: "#6cd890",
        color: "#fff",
      });
      break;
  }
};

const updateCarDom = (valor) => {
  document.getElementById(
    "panel__carBuy"
  ).innerHTML = `<a id="cart" class="cart" href="./carrito.html"><i class="fas fa-shopping-cart"><i><span id="cart_menu_num"
  data-action="cart-can" class="badge rounded-circle">${valor}</span></a>`;
};
