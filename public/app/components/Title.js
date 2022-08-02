export function Title() {
  const $h1 = document.createElement("h1");
  $h1.id = "h1";
  $h1.innerHTML = "PRODUCTOS DISPONIBLES";

  const $stylos = document.createElement("style");
  $stylos.innerHTML = ` 
    #h1 {
    text-align: center;
    margin: 0 auto;
    font-size: 2.5rem;
    color: #6a6a6a;
    margin-top: 8rem;
    font-weight: 100;
    font-family: 'Roboto', sans-serif;
  }`;
  document.head.appendChild($stylos);
  return $h1;
}
