const body = document.querySelector("body");
const menu = document.querySelector(".menu");
const closeIcon = document.querySelector(".burger-menu-icon-close");
const burgerIcon = document.querySelector(".burger-menu-icon");

// menu
const openMenu = () => {
  menu.classList.add("menu-active");
};

const closeMenu = () => {
  menu.classList.remove("menu-active");
};

burgerIcon.addEventListener("click", openMenu);

closeIcon.addEventListener("click", closeMenu);

body.addEventListener("click", (event) => {
  if (!burgerIcon.contains(event.target)) {
    closeMenu();
  }
});

// slider
const swiper = new Swiper(".projects-swiper", {
  // Optional parameters
  mousewheel: true,
  keyboard: {
    onlyInViewport: true, // чтобы слайдер листался с клавиатуры только тогда, когда мы до него доскроллили, а не всегда
  },
  grabCursor: true,
  // effect: "cube",
  // cubeEffect: {
  //   slideShadows: true,
  //   shadow: true,
  //   shadowOffset: 20,
  //   shadowScale: 0.94,
  // },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
