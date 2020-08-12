const arrowPrev = document.getElementsByClassName(
  "slider__arrow slider__arrow_prev"
);
const arrowNext = document.getElementsByClassName(
  "slider__arrow slider__arrow_next"
);
const sliderItem = document.querySelectorAll(".slider__item");

let arrSliderItem = Array.from(sliderItem);
let indexActiv;

function searchActiveSlide() {
  indexActiv = arrSliderItem.findIndex(function (element) {
    return element.className === "slider__item slider__item_active"
      ? true
      : false;
  });
  arrSliderItem[indexActiv].className = "slider__item";
}

arrowPrev[0].onclick = function () {
  searchActiveSlide();
  indexActiv === 0
    ? (arrSliderItem[arrSliderItem.length - 1].className =
        "slider__item slider__item_active")
    : (arrSliderItem[indexActiv - 1].className =
        "slider__item slider__item_active");
};

arrowNext[0].onclick = function () {
  searchActiveSlide();
  indexActiv === (arrSliderItem.length - 1)
    ? (arrSliderItem[0].className = "slider__item slider__item_active")
    : (arrSliderItem[indexActiv + 1].className = "slider__item slider__item_active");
};