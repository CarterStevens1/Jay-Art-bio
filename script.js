const nav = document.querySelector(".sidenav");
const burger = document.querySelector(".burger");
const closeNav = document.querySelector(".closebtn");

burger.addEventListener("click", function () {
  nav.style.width = "280px";
});
closeNav.addEventListener("click", function () {
  nav.style.removeProperty("width");
});
