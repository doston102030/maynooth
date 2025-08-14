const showSitenavBtn = document.querySelector(".header__search-btn");

const overlay = document.querySelector(".mobile__sitenav-overlay");
const Sitenav = document.querySelector(".mobaile__sitenav");
const closeBtn = document.querySelector(".mobaile__sitenav button");

showSitenavBtn.addEventListener("click", function () {
  overlay.style.display = "block";
  overlay.style.transform = "translateX(0)";

  Sitenav.style.transform = "translateX(0)";
});

overlay.addEventListener("click", function (e) {
  overlay.style.transform = "translateX(100%)";
  Sitenav.style.transform = "translateX(100%)";
});

closeBtn.addEventListener("click", function (e) {
  overlay.style.transform = "translateX(100%)";
  Sitenav.style.transform = "translateX(100%)";
});
