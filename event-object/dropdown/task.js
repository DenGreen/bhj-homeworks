const dropdownValue = document.querySelectorAll(".dropdown__value");
const dropdownList = document.querySelectorAll(".dropdown__list");
const dropdownItem = document.querySelectorAll(".dropdown__item");
const dropdownLink = document.querySelectorAll(".dropdown__link");
let index;

dropdownLink.forEach((e) =>
  e.addEventListener(
    "click",
    function (e) {
      e.preventDefault();
    },
    false
  )
);

dropdownValue.forEach((eValue, i) => {
  eValue.addEventListener("click", function () {
    dropdownList[i].classList.toggle("dropdown__list_active");
    index = i;
  });
});

dropdownList.forEach((eList) => {
  let dropdownItem = eList
    .closest(".dropdown__list")
    .querySelectorAll(".dropdown__item");
  let d = eList.closest(".dropdown").querySelector(".dropdown__value");

  dropdownItem.forEach((eItem) => {
    eItem.addEventListener("click", function () {
      d.textContent = eItem.textContent;
      dropdownList[index].classList.remove("dropdown__list_active");
    });
  });
});
