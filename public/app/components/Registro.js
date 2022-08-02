export function Registro() {
  const $registro = document.createElement("div");
  $registro.classList.add("container__lognin", "container");
  $registro.innerHTML = `
  <div class="row justify-content-center title__registro">
        <div class="col-md-6 text-center mb-1" id="reg">
          <h2 class="heading-section animate__animated animate__bounce">REGISTRO DE USUARIO</h2>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-md-7 col-lg-5">
          <div class="login-wrap p-4 p-md-5 prueba">
            <form id="register-form" action="#" class="register-form">
              <div class="form-group" id="group__nombre">
                <!-- <label for="usuario" class="formulario__label">Nombre</label> -->
                <div class="formulario__grupo-input">
                  <input id="nombre" type="text" class="form-control rounded-left my-2 formulario__input"
                    placeholder="Nombre" name="nombre" required>
                  <i class="formulario__validacion-estado fas fa-times-circle"></i>
                </div>
                <p class="formulario__input-error">El nombre solo puede contener letras.</p>
              </div>
              <div class="form-group" id="group__email">
                <!--   <label for="correo" class="formulario__label">Correo Electrónico</label> -->
                <div class="formulario__grupo-input">
                  <input id="email" type="text" class="form-control rounded-left my-2 formulario__input"
                    placeholder="email" name="email" required>
                  <i class="formulario__validacion-estado fas fa-times-circle"></i>
                </div>
                <p class="formulario__input-error">El correo solo puede contener letras, numeros, puntos, guiones y
                  guion
                  bajo.</p>
              </div>
              <div class="form-group" id="group__password">
                <!--   <label for="password" class="formulario__label">Contraseña</label> -->
                <div class="formulario__grupo-input">
                  <input id="password" type="password" class="form-control rounded-left my-2 formulario__input"
                    placeholder="Contraseña" name="password" required>
                  <i class="formulario__validacion-estado fas fa-times-circle"></i>
                </div>
                <p class="formulario__input-error">La contraseña tiene que ser de 3 a 5 dígitos.</p>
              </div>
              <div class="form-group" id="group__password2">
                <!--   <label for="password" class="formulario__label">Contraseña</label> -->
                <div class="formulario__grupo-input">
                  <input id="password2" type="password" class="form-control rounded-left my-2 formulario__input"
                    placeholder="Repetir Contraseña" name="password2" required>
                  <i class="formulario__validacion-estado fas fa-times-circle"></i>
                </div>
                <p class="formulario__input-error">Ambas contraseñas deben ser iguales.</p>
              </div>
              <!-- Grupo: Terminos y Condiciones -->
              <div class="formulario__grupo" id="grupo__terminos">
                <label class="formulario__label">
                  <input class="formulario__checkbox" type="checkbox" name="terminos" id="terminos">
                  Acepto los Terminos y Condiciones
                </label>
              </div>
              <div class="formulario__mensaje aviso" id="formulario__mensaje">
                <p><i class="fas fa-exclamation-triangle"></i> <b>Error: </b> Por favor rellena el formulario
                  correctamente.</p>
              </div>
              <div class="form-group d-flex align-items-center formulario__grupo formulario__grupo-btn-enviar">
                <div class="w-100 d-flex justify-content-end">
                  <button type="submit" class="btn btn-dark rounded submit formulario__btn">Registrarse</button>
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
            </form>
          </div>
        </div>
      </div>`;

  const $stylos = document.createElement("style");
  $stylos.innerHTML = `
  
     .title__registro {
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

  function launchRegistro() {
    const formulario = document.getElementById("register-form");
    const inputs = document.querySelectorAll("#register-form input");
    const expresiones = {
      nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
      password: /^.{3,5}$/,
      email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };

    const campos = {
      nombre: false,
      email: false,
      password: false,
      password2: false,
    };
    const addNewUser = [];

    const validarRegistro = (e) => {
      switch (e.target.name) {
        case "nombre":
          validarInput(expresiones.nombre, e.target, "nombre");
          break;
        case "email":
          validarInput(expresiones.email, e.target, "email");
          break;
        case "password":
          validarInput(expresiones.password, e.target, "password");
          validarPassword();
          break;
        case "password2":
          validarPassword();
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

    const validarPassword = () => {
      const inputPassword1 = document.getElementById("password");
      const inputPassword2 = document.getElementById("password2");

      if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById("group__password2").classList.add(`is-invalid`);
        document
          .getElementById("group__password2")
          .classList.remove(`is-valid`);
        document
          .querySelector(`#group__password2 i`)
          .classList.add(`fa-times-circle`);
        document
          .querySelector(`#group__password2 i`)
          .classList.remove(`fa-check-circle`);
        document
          .querySelector(`#group__password2 .formulario__input-error`)
          .classList.add(`formulario__input-error-activo`);
        campos["password"] = false;
      } else {
        document
          .getElementById("group__password2")
          .classList.remove(`is-invalid`);
        document.getElementById("group__password2").classList.add(`is-valid`);
        document
          .querySelector(`#group__password2 i`)
          .classList.remove(`fa-times-circle`);
        document
          .querySelector(`#group__password2 i`)
          .classList.add(`fa-check-circle`);
        document
          .querySelector(`#group__password2 .formulario__input-error`)
          .classList.remove(`formulario__input-error-activo`);
        campos["password"] = true;
      }
    };

    inputs.forEach((input) => {
      input.addEventListener("keyup", validarRegistro);
      input.addEventListener("blur", validarRegistro);
    });

    formulario.addEventListener("submit", (e) => {
      e.preventDefault();
      const terminos = document.getElementById("terminos");

      if (
        campos.nombre &&
        campos.password &&
        campos.email &&
        terminos.checked
      ) {
        crearUsuario();
        formulario.reset();
      } else {
        document
          .getElementById("formulario__mensaje")
          .classList.add("formulario__mensaje-activo");
        setTimeout(() => {
          document
            .getElementById("formulario__mensaje")
            .classList.remove("formulario__mensaje-activo");
        }, 5000);
      }
    });

    function crearUsuario() {
      class User {
        constructor(nombre, email, password, password2) {
          this.nombre = nombre;
          this.email = email;
          this.password = password;
          this.password2 = password2;
        }
      }
      let agregarNombre = document.getElementById("nombre").value;
      let agregarEmail = document.getElementById("email").value;
      let agregarPassword = document.getElementById("password").value;
      let agregarPassword2 = document.getElementById("password2").value;
      let newUser = new User(
        agregarNombre,
        agregarEmail,
        agregarPassword,
        agregarPassword2
      );
      addNewUser.push(newUser);
      localStorage.setItem("addNewUser", JSON.stringify(addNewUser));
      console.log(addNewUser);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Usuario creado correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
      document
        .getElementById("formulario__mensaje-exito")
        .classList.add("formulario__mensaje-exito-activo");
      setTimeout(() => {
        document
          .getElementById("formulario__mensaje-exito")
          .classList.remove("formulario__mensaje-exito-activo");
        window.location.pathname = "/login.html";
      }, 2000);

      document.querySelectorAll(".is-valid").forEach((icono) => {
        icono.classList.remove("is-valid");
      });
    }
  }
  setTimeout(() => launchRegistro(), 100);
  return $registro;
}
