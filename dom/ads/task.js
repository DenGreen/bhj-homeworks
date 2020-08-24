const rotator = document.getElementsByClassName("rotator");

for (const rot of rotator) {
  const rotatorCase = rot.getElementsByClassName("rotator__case");

  let timerId = setInterval(() => {
    let arrRotatorCase = Array.from(rotatorCase);
    let index = 0;

    arrRotatorCase.forEach((element, i) => {
      if (element.classList.contains("rotator__case_active")) {
        index = i;
        return element.classList.remove("rotator__case_active");
      }
    });

    if (index === rotatorCase.length - 1) {
      index = 0;
      rotatorCase[index].classList.add("rotator__case_active");
    } else {
      rotatorCase[index + 1].classList.add("rotator__case_active");
    }
  }, 1000);
}
