export function SliderCard(props) {
  let { title, diapositiva, content, texto, boton } = props;

  const html = `
    <div class="slider__section">
        <img src="${diapositiva}" alt="" class="slider__img">
        <div class="slider__content">
          <h2 class="slider__title">${content}</h2>
          <p class="slider__txt">${texto}</p>
        </div>
  </div>`;

  const $stylos = document.createElement("style");
  $stylos.innerHTML = `

    .container__slider {
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      z-index: 1;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.4);
    }

    .slider {
      display: flex;
      width: 400%;
      height: 100%;
      margin-left: -100%;
      position: relative;
    }

    .slider:before {
      content: "";
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      background: rgba(0, 0, 0, 0.1);
      height: 100%;
    }

    .slider__section {
      max-width: 100%;
      width: 100%;
      position: relative;
    }

    .slider__img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    .slider__content {
      position: absolute;
      top: 50%;
      left: 50%;
      color: white;
      transform: translate(-50%, -50%);
      width: 60%;
      text-align: center;
      z-index: 999;
    }

    .slider__title {
      font-size: 2.2em;
      margin: 0;
    }

    .slider__txt {
      margin: 5px 0;
    }

    .slider__btn {
      position: absolute;
      width: 50px;
      height: 50px;
      background: rgba(0, 0, 0, 0.2);
      top: 50%;
      transform: translateY(-50%);
      font-size: 30px;
      font-weight: bold;
      font-family: monospace;
      text-align: center;
      border-radius: 50%;
      cursor: pointer;
      padding-top: 10px;
      z-index: 997;
      color: rgba(0, 0, 0, 0.5)
    }

    .slider__btn:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .slider__btn--left {
      left: 10px;
    }

    .slider__btn--right {
      right: 10px;
    }

    @media screen and (min-width: 768px) {

      .slider {
        height: 350px;
      }
    }

    @media screen and (min-width: 1024px) {
      .container-slider {
        padding-top: 100px;
        margin-top: 6rem;
        height: 400px;
     
      }

      .slider {
        height: 400px;
      }
    }

    @media screen and (min-width:1280px) {
      .slider {
        height: 450px;
        font-size: 1.5em;
      }
    }

    @media screen and (min-width:1600px) {
      .slider {
        height: 600px;
      }
    }`;
  document.head.appendChild($stylos);

  function launchSlider() {
    const slider = document.querySelector("#slider");
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];

    const btnLeft = document.querySelector("#btn-left");
    const btnRight = document.querySelector("#btn-right");

    slider.insertAdjacentElement("afterbegin", sliderSectionLast);

    function Next() {
      let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
      slider.style.marginLeft = "-200%";
      slider.style.transition = "all 0.5s";
      setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
      }, 500);
    }

    function Prev() {
      let sliderSection = document.querySelectorAll(".slider__section");
      let sliderSectionLast = sliderSection[sliderSection.length - 1];
      slider.style.marginLeft = "0";
      slider.style.transition = "all 0.5s";
      setTimeout(function () {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
      }, 500);
    }

    btnRight.addEventListener("click", function () {
      Next();
    });

    btnLeft.addEventListener("click", function () {
      Prev();
    });

    setInterval(function () {
      Next();
    }, 5000);
  }

  setTimeout(() => launchSlider(), 100);

  return html;
}
