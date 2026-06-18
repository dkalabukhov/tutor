document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuToggleButton = document.querySelector(
    '.navbar .mobile-menu-toggle',
  );

  const mobileMenu = document.querySelector('.navbar .mobile-menu-items');

  mobileMenuToggleButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
});
