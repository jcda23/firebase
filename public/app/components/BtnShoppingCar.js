export function ShoppingCar() {
  let $btnShoppingCar = document.createElement("div");
  $btnShoppingCar.id = "panel__carBuy";
  $btnShoppingCar.classList.add("panel__carBuy", "panel__shopping-car");
  $btnShoppingCar.innerHTML = `<a id="cart" class="cart" href="./carrito.html"><i class="fas fa-shopping-cart"><i><span id="cart_menu_num"
          data-action="cart-can" class="shop badge rounded-circle">0</span></a>`;

  const $stylos = document.createElement("style");
  $stylos.innerHTML = `
  
    .panel__shopping-car {
    z-index: 999;
    font-size: 1.8rem;
  }
  
  .cart {
  position: relative;
  background-color: transparent;
  color: black;
}

#cart_menu_num {
  position: absolute;
  top: 0;
  left: 80%;
  background: red;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  padding: 2px;
  font-size: 1rem;
  z-index: 999;

}

@media screen and (min-width: 1024px) {
  
      .panel__shopping-car {
      height: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      color: black;
      position: fixed;
      top: 3rem;
      left: 84vw;
    }

  
  .cart {
    position: relative;
  }

  /* 
  .dark__theme-btn {
    position: fixed;
    top: 2rem;
    left: 80vw;
  } */

  .cart {
    background-color: initial;
  }

  .cart.active {
    color: white;
  }

  #carrito {
    display: none;
    visibility: hidden;
  }
`;
  document.head.appendChild($stylos);

  return $btnShoppingCar;
}

//nItemsCar.innerHTML = `<a href="#table"><i class="fa fa-shopping-cart" aria-hidden="true"><span class="navbar__car badge badge-pill badge-danger">${nCantidad}</span>`;
