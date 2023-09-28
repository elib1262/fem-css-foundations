const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const exit = document.querySelector(".close");
const body = document.querySelector(".body");

menu.addEventListener("click", () => {
  nav.classList.add("nav--visible");
  menu.classList.add("menu--hidden");
  exit.classList.add("close--show");
  body.classList.add("body-no--scroll");
});

exit.addEventListener("click", () => {
  nav.classList.remove("nav--visible");
  exit.classList.remove("close--show");
  menu.classList.remove("menu--hidden");
  body.classList.remove("body-no--scroll");
});
