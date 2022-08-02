export function Slider() {
  const $slider = document.createElement("section");
  $slider.id = "slider";
  $slider.classList.add("slider");
  return $slider;
}

export function BtnSlider() {
  const $btnLeft = document.createElement("div");
  $btnLeft.id = "btn-left";
  $btnLeft.classList.add("slider__btn", "slider__btn--left");
  $btnLeft.innerHTML = "&#60;";

  const $btnRight = document.createElement("div");
  $btnRight.id = "btn-right";
  $btnRight.classList.add("slider__btn", "slider__btn--right");
  $btnRight.innerHTML = "&#62;";

  const $btnSlider = document.getElementById("container__slider");
  $btnSlider.appendChild($btnLeft);
  $btnSlider.appendChild($btnRight);

  return $btnSlider;
}
