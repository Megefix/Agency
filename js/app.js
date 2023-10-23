const swiper2 = new Swiper(".slider-2", {
  speed: 600,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
  },
});
const swiper1 = new Swiper(".slider-1", {
  direction: "horizontal",
  speed: 600,
  pagination: {
    el: ".pagination-1",
    clickable: true,
  },
  breakpoints: {
    500: {
      slidesPerView: 1,
    },
  },
});
const navBtn = document.querySelector(".mobile-nav-btn");
const nav = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".nav-icon");
const fade = document.querySelector(".mobile-nav-fade");
const navLink = document.querySelectorAll(".nav__link");

navBtn.onclick = function () {
  nav.classList.toggle("mobile-nav--open");
  fade.classList.toggle("mobile-nav-fade--open");
  menuIcon.classList.toggle("nav-icon--active");
  document.body.classList.toggle("no-scroll");
};
fade.onclick = function () {
  nav.classList.toggle("mobile-nav--open");
  fade.classList.toggle("mobile-nav-fade--open");
  menuIcon.classList.toggle("nav-icon--active");
  document.body.classList.toggle("no-scroll");
};
navLink.forEach(function (item) {
  item.onclick = function () {
    nav.classList.remove("mobile-nav--open");
    fade.classList.remove("mobile-nav-fade--open");
    menuIcon.classList.remove("nav-icon--active");
    document.body.classList.remove("no-scroll");
  };
});

AOS.init();
