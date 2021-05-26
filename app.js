// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const Director = document.getElementById("Director");
const meetDirBtn = document.getElementById("meetDirBtn");

// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});



meetDirBtn.addEventListener("click", () => {
  Director.classList.add("showDir");
});

DirClose.addEventListener("click", () => {
  Director.classList.remove("showDir");
});