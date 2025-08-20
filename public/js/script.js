const menus = document.querySelector("#menus");
const navMenu = document.querySelector("#nav-menu");
menus.addEventListener("click", () => {
  menus.classList.toggle("menus-active");
  navMenu.classList.remove("opacity-0");
  navMenu.classList.toggle("hidden");
});
window.addEventListener("click", function (e) {
  if (e.target != menus && e.target != navMenu) {
    menus.classList.remove("menus-active");
    navMenu.classList.add("hidden");
    if (!menus.classList.contains("menus-active")) {
      navMenu.classList.add("opacity-0");
    }
  }
});

window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#toTop");

  if (window.pageYOffset > fixedNav) {
    toTop.classList.add("flex");
    toTop.classList.remove("hidden");
  } else {
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};
