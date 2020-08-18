const tabs = document.querySelectorAll(".tabs");

tabs.forEach((eTabs) => {
  const tab = eTabs.getElementsByClassName("tab");
  const tabContents = eTabs.getElementsByClassName("tab__content");

  let arrTab = Array.from(tab);
  let arrContents = Array.from(tabContents);

  arrTab.forEach((e, i) => {
    e.addEventListener("click", () => {
      if (e.className === "tab") {
        arrTab.forEach((element) => (element.className = "tab"));
        arrContents.forEach((element) => (element.className = "tab__content"));
        e.className = "tab tab_active";
        arrContents[i].className = "tab__content tab__content_active";
      }
    });
  });
});