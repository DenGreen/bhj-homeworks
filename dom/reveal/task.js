window.addEventListener("scroll", function () {
  const isInViewport = function (element) {
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;

    if (
      elementTop < viewportHeight &&
      elementTop > 0 &&
      elementBottom < viewportHeight &&
      elementBottom > 0
    ) {
      return element.classList.add("reveal_active");
    } else {
      return element.classList.remove("reveal_active");
    }
  };

  const reveal = document.getElementsByClassName("reveal");

  for (const rev of reveal) {
    isInViewport(rev);
  }
});
