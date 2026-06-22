import { Accordion } from './Accordion.js';
import { animateStats } from './animateStats.js';

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggleButton = document.querySelector(
    '.navbar .mobile-menu-toggle',
  );

  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

  const navbar = document.querySelector('.navbar');

  mobileMenuToggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      navbar.classList.add('navbar-scroll');
    } else {
      navbar.classList.remove('navbar-scroll');
    }
  });

  const accordions = document.querySelectorAll('.accordion-item');

  accordions.forEach((accordion) => {
    new Accordion(accordion);
  });

  const observer = animateStats();

  const counters = document.querySelectorAll('.counter');
  counters.forEach((counter) => {
    observer.observe(counter);
  });
});
