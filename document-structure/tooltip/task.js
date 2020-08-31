const hasTooltip = document.querySelectorAll(".has-tooltip");

hasTooltip.forEach((element) => {
  element.insertAdjacentHTML("beforeEnd", `<div class="tooltip">${element.title}</div>`);

  element.addEventListener("click", (e) => {
    e.preventDefault();
    
    const tootlipElem = element.querySelector(".tooltip");
    if (tootlipElem.classList.contains("tooltip_active")) {
        tootlipElem.classList.remove("tooltip_active");
    } else {
      const tootlip = document.querySelectorAll(".tooltip");
      tootlip.forEach((e) => e.classList.remove("tooltip_active"));
      tootlipElem.classList.add("tooltip_active");
    }
  });
});
