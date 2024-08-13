// javascript/javascript.js

document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
});
