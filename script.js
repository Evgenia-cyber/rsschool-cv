const body = document.querySelector('body');
const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('.burger-menu-icon-close');
const burgerIcon = document.querySelector('.burger-menu-icon');

const openMenu = () => {
  menu.classList.add('menu-active');
};

const closeMenu = () => {
  menu.classList.remove('menu-active');
};

burgerIcon.addEventListener('click', openMenu);

closeIcon.addEventListener('click', closeMenu);

body.addEventListener('click', (event) => {
  if (!burgerIcon.contains(event.target)) {
    closeMenu();
  }
});
