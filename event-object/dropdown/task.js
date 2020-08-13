const dropdownValue = document.querySelectorAll(".dropdown__value");
const dropdownList = document.querySelectorAll(".dropdown__list");
const dropdownItem = document.querySelectorAll(".dropdown__item");
let dropdownLink = document.querySelectorAll(".dropdown__link");

dropdownLink.forEach((e) => e.addEventListener("click", function (e) { 
    e.preventDefault();
    },
    false
  )
);

dropdownValue.forEach((eValue, i) => {
  eValue.addEventListener("click", function () {
    dropdownList[i].classList.toggle("dropdown__list_active");

    dropdownList.forEach((eList) => {
      let dropdownItem = eList
        .closest(".dropdown__list")
        .querySelectorAll(".dropdown__item");
        
      dropdownItem.forEach((eItem) => {
        eItem.addEventListener("click", function () {
          eValue.textContent = eItem.textContent;
          dropdownList[i].classList.remove("dropdown__list_active");
        });
      });
    });
  });
});
