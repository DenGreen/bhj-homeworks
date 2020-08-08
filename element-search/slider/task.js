const arrowPrev = document.getElementsByClassName("slider__arrow slider__arrow_prev");
const arrowNext = document.getElementsByClassName("slider__arrow slider__arrow_next");
const sliderItem = document.querySelectorAll(".slider__item");

let arrSliderItem = Array.from(sliderItem);
let index;

const sliderDot = document.querySelectorAll(".slider__dot");
let arrSliderDot = Array.from(sliderDot);

function searchActiveSlide() {
  for (i = 0; i < arrSliderItem.length; i++) {
    if (arrSliderItem[i].className === "slider__item slider__item_active") {
      index = i;
    }
  }
}

arrowPrev[0].onclick = function () {
  searchActiveSlide();
  if (index === 0) {
    arrSliderItem[index].className = "slider__item";
    arrSliderDot[index].className = "slider__dot";
    arrSliderItem[arrSliderItem.length - 1].className = "slider__item slider__item_active";
    arrSliderDot[arrSliderItem.length - 1].className = "slider__dot slider__dot_active";
  } else {
    arrSliderItem[index].className = "slider__item";
    arrSliderItem[index - 1].className = "slider__item slider__item_active";
    arrSliderDot[index].className = "slider__dot";
    arrSliderDot[index - 1].className = "slider__dot slider__dot_active";
  }
};

arrowNext[0].onclick = function () {
    searchActiveSlide();
  if ((arrSliderItem.length - 1) === index) {
    arrSliderItem[index].className = "slider__item";
    arrSliderDot[index].className = "slider__dot";
    arrSliderItem[0].className = "slider__item slider__item_active";
    arrSliderDot[0].className = "slider__dot slider__dot_active";
  } else {
    arrSliderItem[index].className = "slider__item";
    arrSliderDot[index].className = "slider__dot";
    arrSliderItem[index + 1].className = "slider__item slider__item_active";
    arrSliderDot[index + 1].className = "slider__dot slider__dot_active";
  }
}
