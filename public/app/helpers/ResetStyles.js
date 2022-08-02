//footer
export function ResetStyles() {
  const $stylos = document.getElementById("reset-styles");
  $stylos.innerHTML = ` 
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Roboto');
  
.swal2-styled.swal2-confirm.swalBtnColor {
  color: #FFC900
}

html {
    box-sizing: border-box;
    font-family: sans-serif;
    font-size: 16px;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    line-height: 1;
    display: flex;
    flex-direction: column;
    background-image: radial-gradient(circle at -11.24% 14.64%, #c4f6a2 0, #aef19f 16.67%, #91e699 33.33%, #6cd890 50%, #3bca89 66.67%, #00bf88 83.33%, #00b88c 100%);
  }

  body > * {
      font-family: 'Roboto', sans-serif;
  }

  main {
    flex-grow: 1;
    min-height: 100vh;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: color 0.3s ease;
    background: transparent;
  }

  a:hover {
    color: var(--main-color);
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  h1 {
    text-align: center;
  }

  main {
    flex-grow: 1;
  }

  .data-dark {
    background-color: white;
  }

  .error {
    padding: 1rem;
    font-size: 150%;
    font-weight: bold;
    text-align: center;
    color: #fff;
    background-color: red;
  }

  .container {
    margin: auto;
    max-width: 1200px;
  }

      .hidden {
       display: none;
     }
      .table{
        margin: 0 1rem ;
      }

     .img__car {
        width: 5rem;
        height: auto;
        object-fit: cover;

      }

     .title__car {
      padding-top: 5rem;
      text-align: center;
      margin: 0 auto;
      font-size: 2.5rem;
      color: #6a6a6a;
      font-weight: 100;
      font-family: 'Roboto', sans-serif;
      margin-top: 12rem;
  }
  
  @media screen and (min-width: 1024px) {

      .table {
        max-width: 1200px;
        margin: 8rem auto;
        box-shadow: 2px 4px 20px 20px rgba(0, 0, 0, 0.5);
        margin-top: 5rem;
      }

      .table__content {
        border: 2px solid #eaeaea;
      }

      .table__principal {
        border: 2px solid #eaeaea;
      }

      tbody>* {
        border: 2px solid
      }
    }`;

  return $stylos;
}
