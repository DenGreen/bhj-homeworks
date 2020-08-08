const menu = document.querySelectorAll(".menu_main");

for (u = 0; u < menu.length; u++){
  let menuLinks = menu[u].querySelectorAll(".menu__item ul");
  
  for (i = 0; i < menuLinks.length; i++) {
    let menuSub = menuLinks[i];
    let menuLink = menuSub.closest("li").querySelector("a");

    menuLink.onclick = function () {
      if (menuSub.className === "menu menu_sub") {
          for (y = 0; y < menuLinks.length; y++){
              menuLinks[y].className = "menu menu_sub";
          };
        menuSub.className = "menu menu_sub menu_active";
      } else {
        menuSub.className = "menu menu_sub";
      };
      return false;
    };
  };
};