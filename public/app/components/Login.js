export function Login() {
  const $login = document.createElement("div");
  $login.classList.add("continer");
  $login.innerHTML = `
  
 <div class="row justify-content-center">
    <div class="col-md-6 text-center mb-1 title__login" id="reg">
      <h2 class="heading-section animate__animated animate__bounce title__login">INICIAR SESION</h2>
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-md-7 col-lg-5">
      <div class="login-wrap p-4 p-md-5 prueba">
        <form id="login-form" action="#" class="login-form">
          <div class="form-group" id="group__email">
            <!--   <label for="correo" class="formulario__label">Correo Electrónico</label> -->
            <div class="formulario__grupo-input">
              <input id="email3" type="text" class="form-control rounded-left my-2 formulario__input" placeholder="email"
                name="email" required>
              <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y
              guion
              bajo.</p>
          </div>
          <div class="form-group" id="group__password">
            <!--   <label for="password" class="formulario__label">Contraseña</label> -->
            <div class="formulario__grupo-input">
              <input id="password3" type="password" class="form-control rounded-left my-2 formulario__input"
                placeholder="Contraseña" name="password" required>
              <i class="formulario__validacion-estado fas fa-times-circle"></i>
            </div>
            <p class="formulario__input-error">La contraseña tiene que ser de 3 a 5 dígitos.</p>
          </div>
          <!-- Grupo: Guardar Datos -->
          <div class="formulario__grupo" id="grupo__datos">
            <label class="formulario__label">
              <input class="formulario__checkbox" type="checkbox" name="datos" id="datos">
              Guardar Datos
            </label>
          </div>
          <div class="formulario__mensaje2 aviso" id="formulario__mensaje2">
              <p><i class="fas fa-exclamation-triangle"></i> <b>Error: </b> Usuario no existe / Datos incompletos.</p>
            </div
          <div class="form-group d-flex align-items-center formulario__grupo formulario__grupo-btn-enviar">
            <div class="w-100 d-flex justify-content-end">
              <button type="submit" class="btn btn-dark rounded submit formulario__btn">Ingresar</button>
            </div>
              <div class="w-100 d-flex justify-content-end">
              <button id="erase" type="submit" class="erase btn btn-dark rounded submit formulario__btn">Salir</button>
            </div>
          </div>
          <div>
            <p class="formulario__mensaje-exito aviso" id="formulario__mensaje-exito">Usuario
              exitosamente!</p>
          </div>
          <div class="form-group mt-4">
            <div class="w-100 text-center">
              <p class="mb-1">Ya tienes una Cuenta? <a href="./login.html">Inicia Sesión</a></p>
            </div>
          </div>
          <!--  <div class="formulario__grupo formulario__grupo-btn-enviar">
                  <button type="submit" class="formulario__btn">Enviar</button>
                  <p class="formulario__mensaje-exito" id="formulario__mensaje-exito">Formulario enviado exitosamente!</p>
                </div> -->
        </form>
      </div>
    </div>
  </div>`;

  const $stylos = document.createElement("style");
  $stylos.innerHTML = `
  
     .title__login{
      padding-top: 5rem;
      text-align: center;
      margin: 0 auto;
      font-size: 2.5rem;
      color: #6a6a6a;
      font-weight: 100;
      font-family: 'Roboto', sans-serif;
    }

      #registro {
      margin-top: 6rem;
    }

    .is-invalid {
      border-color: red;
    }

    .formulario__checkbox {
      margin-right: 10px;
    }

    .formulario__validacion-estado {
      position: absolute;
      right: 10px;
      bottom: 15px;
      z-index: 100;
      font-size: 16px;
      opacity: 0;
    }

    .formulario__label {
      display: block;
      font-weight: 700;
      padding: 10px;
      cursor: pointer;
    }

    .formulario__grupo-input {
      position: relative;
    }

    .formulario__input {
      width: 100%;
      background: #fff;
      border: thin solid #000;
      border-radius: 3px;
      height: 45px;
      line-height: 45px;
      padding: 0 40px 0 10px;
      transition: .3s ease all;
    }

    .formulario__input:focus {
      border: 3px solid #0075FF;
      outline: none;
      box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    }

    .formulario__input-error {
      font-size: 12px;
      margin-bottom: 0;
      display: none;
    }

    .formulario__input-error-activo {
      display: block;
    }

    .formulario__validacion-estado {
      position: absolute;
      right: 10px;
      bottom: 15px;
      z-index: 100;
      font-size: 16px;
      opacity: 0;
    }

    .formulario__checkbox {
      margin-right: 10px;
    }

    .formulario__grupo-terminos,
    .formulario__mensaje,
    .formulario__grupo-btn-enviar {
      display: grid;
      grid-column: span 2;
    }

    .formulario__grupo-input {
      position: relative;
    }

    .formulario__mensaje2,
    .formulario__mensaje {
      height: 45px;
      width: 100%;
      line-height: 45px;
      background: #F66060;
      padding: 0 10px;
      border-radius: 3px;
      display: none;
    }

    .formulario__mensaje-activo {
      display: block;
    }

    .formulario__mensaje2,
    .formulario__mensaje p {
      margin: 0;
      text-align: start;
      padding: 0;
      font-size: 0.9rem;
    }

    .formulario__grupo-btn-enviar {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .formulario__btn {
      margin-top: 10px;
      font-weight: bold;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      transition: .1s ease all;
    }

    .formulario__btn:hover {
      box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
    }

    .formulario__mensaje-exito {
      font-size: 14px;
      color: #119200;
      display: none;
    }

    .formulario__mensaje-exito-activo {
      margin: 20px 0;
      display: block;
    }

    /* ----- -----  Estilos para Validacion ----- ----- */
    .is-valid .formulario__validacion-estado {
      color: #1ed12d;
      opacity: 1;
    }

    .is-invalid .formulario__label {
      color: #bb2929;
    }

    .is-invalid .formulario__validacion-estado {
      color: #bb2929;
      opacity: 1;
    }

    .is-invalid .formulario__input {
      border: 3px solid #bb2929;
    }

    #reg,
    #log,
    #contact {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 8rem;
    }`;
  document.head.appendChild($stylos);

  function launchLogin() {
    let sesion = [];
    let verificado = false;
    let sesionActual = localStorage.getItem("loginActive");
    let activa = JSON.parse(sesionActual);

    const formulario = document.getElementById("login-form");
    const inputs = document.querySelectorAll("#login-form input");
    const expresiones = {
      nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
      password: /^.{3,5}$/, // 3 a 5 digitos.
      email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };
    const campos = {
      nombre: false,
      email: false,
      password: false,
      password2: false,
    };

    const validarRegistro = (e) => {
      switch (e.target.name) {
        case "email":
          validarInput(expresiones.email, e.target, "email");
          break;
        case "password":
          validarInput(expresiones.password, e.target, "password");
          break;
      }
    };

    const validarInput = (expresion, input, campo) => {
      if (expresion.test(input.value)) {
        document
          .getElementById(`group__${campo}`)
          .classList.remove(`is-invalid`);
        document.getElementById(`group__${campo}`).classList.add(`is-valid`);
        document
          .querySelector(`#group__${campo} i`)
          .classList.add(`fa-check-circle`);
        document
          .querySelector(`#group__${campo} i`)
          .classList.remove(`fa-times-circle`);
        document
          .querySelector(`#group__${campo} .formulario__input-error`)
          .classList.remove(`formulario__input-error-activo`);
        campos[campo] = true;
      } else {
        document.getElementById(`group__${campo}`).classList.add(`is-invalid`);
        document.getElementById(`group__${campo}`).classList.remove(`is-valid`);
        document
          .querySelector(`#group__${campo} i`)
          .classList.add(`fa-times-circle`);
        document
          .querySelector(`#group__${campo} i`)
          .classList.remove(`fa-check-circle`);
        document
          .querySelector(`#group__${campo} .formulario__input-error`)
          .classList.add(`formulario__input-error-activo`);
        campos[campo] = false;
      }
    };

    inputs.forEach((input) => {
      input.addEventListener("keyup", validarRegistro);
      input.addEventListener("blur", validarRegistro);
    });

    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      const datos = document.getElementById("datos");

      if (campos.password && campos.email && datos.checked) {
        iniciarSesion();
        formulario.reset();
      } else {
        document
          .getElementById("formulario__mensaje2")
          .classList.add("formulario__mensaje-activo");
        setTimeout(() => {
          document
            .getElementById("formulario__mensaje2")
            .classList.remove("formulario__mensaje-activo");
        }, 5000);
      }
    });

    function iniciarSesion() {
      class User {
        constructor(email, password) {
          this.email = email;
          this.password = password;
        }
      }

      let mail = document.getElementById("email3").value;
      let pass = document.getElementById("password3").value;
      let loginUser = new User(mail, pass);
      sesion.push(loginUser);
      console.log("sesion" + sesion);

      let baseDatos = localStorage.getItem("addNewUser");
      if (baseDatos == "") {
        document
          .getElementById("formulario__mensaje2")
          .classList.add("formulario__mensaje-activo");
        setTimeout(() => {
          document
            .getElementById("formulario__mensaje2")
            .classList.remove("formulario__mensaje-activo");
        }, 2000);
      }
      if (baseDatos !== "" && sesion !== "") {
        let user = JSON.parse(baseDatos);
        for (let i = 0; i < user.length; i++) {
          if (user[i].email == sesion[0].email) {
            if (user[i].password == sesion[1].password) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Bienvenido ${user[i].nombre}`,
                showConfirmButton: false,
                timer: 1500,
              });
              setTimeout(() => {
                window.location.pathname = "/index.html";
              }, 5000);
            }
          } else {
            verificado = false;
            localStorage.setItem("loginActive", verificado);
            document
              .getElementById("formulario__mensaje2")
              .classList.add("formulario__mensaje-activo");
            setTimeout(() => {
              document
                .getElementById("formulario__mensaje2")
                .classList.remove("formulario__mensaje-activo");
            }, 2000);
            setTimeout(() => launchLogin(), 100);
            return $login;
          }
        }
      }
    }
  }
  setTimeout(() => launchLogin(), 100);
  return $login;
}
