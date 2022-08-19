(function () {
  var loader = new SVGLoader(document.getElementById("loader"), {
    speedIn: 300,
    easingIn: mina.easeinout,
  });
  const preloader = document.querySelector("#preloader");
  const content = document.querySelector("#content");
  const startAnimationPreloader = 300;
  const finishAnimationPreloader = startAnimationPreloader + 300;
  function init() {
    setTimeout(() => {
      loader.show();
    }, startAnimationPreloader);

    window.onload = function () {
      setTimeout(function () {
        loader.hide();
        classie.removeClass(preloader, "show");
        classie.addClass(content, "show");
      }, finishAnimationPreloader);
    };
  }

  init();
})();

const toggleMenu = (menu, classname) => {
  menu.classList.toggle(classname);
};

/* Mobile menu */
try {
  const burger_btn = document.querySelector("#burger");
  const burger_menu = document.querySelector("#mobile_menu");
  const menu_items = document.querySelector("#menu");
  const header_download = document.querySelector("#header_download");

  const menu_items_copy = menu_items.cloneNode(true);
  const header_download_copy = header_download.cloneNode(true);
  menu_items_copy.id = "menu_items_copy";
  header_download_copy.id = "header_download_copy";
  burger_menu.appendChild(menu_items_copy);
  burger_menu.appendChild(header_download_copy);

  burger_btn.addEventListener("click", () => {
    toggleMenu(burger_menu, "show");
  });
} catch (error) {
  console.log(error);
}
/* Mobile menu */
