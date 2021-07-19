button = document.querySelector(".burger");
navList = document.querySelector(".nav-list");
button.addEventListener("click", () => {
  console.log("clciked");
  navList.classList.toggle("side-bar-visible");
  navList.classList.toggle("v-class-resp");
});
