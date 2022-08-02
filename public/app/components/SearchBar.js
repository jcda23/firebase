export function SearchBar() {
  const $searchBar = document.createElement("form");
  $searchBar.id = "search__bar";
  $searchBar.classList.add("search__bar");
  $searchBar.innerHTML = `
  <input type="search" id="search__bar-input" class="search__bar-input fontawesome" name="search"
  placeholder="Buscar">`;

  const $estylos = document.createElement("style");
  $estylos.innerHTML = `

     .filter {
     visibility: hidden;
     opacity: 0;
     order: 1;
    }


.search__bar {
    height: 5rem;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 980;
    border-bottom: thin solid black;
  }

  .search__bar-input {
    width: 80%;
    height: 2rem;
    border-radius: 1rem;
    padding: 0 1rem;
     background-image: radial-gradient(circle at -11.24% 14.64%, #c4f6a2 0, #aef19f 16.67%, #91e699 33.33%, #6cd890 50%, #3bca89 66.67%, #00bf88 83.33%, #00b88c 100%);
  }

    @media screen and (min-width: 1024px) {
 .search__bar {
      height: 6rem;
      background-color: transparent;
      max-width: 40vw;
      position: initial;
      position: fixed;
      bottom: var(100% -20rem);
      left: 35vw;
      border: none;
    }

    .search__bar-input {
      border: thin solid #000000;
      height: 2.5rem;
      background-image: radial-gradient(circle at -11.24% 14.64%, #fff 0, #fff 16.67%, #fff 33.33%, #fff 50%, #fff 66.67%, #fff 83.33%, #fff 100%);
    }
  }
  
  `;
  document.head.appendChild($estylos);

  return $searchBar;
}

export default function searchFilter(input, selector) {
  document.addEventListener("keyup", (e) => {
    console.log(e.target.value);
    if (e.target.matches(input)) {
      if (e.key === "Escape") e.target.value = "";
      document.querySelectorAll(selector).forEach((item) => {
        item.textContent.toLowerCase().includes(e.target.value)
          ? item.classList.remove("filter")
          : item.classList.add("filter");
      });
    }
  });
}
