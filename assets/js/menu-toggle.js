document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const menuBg = document.getElementById('menuBg');
  const closeMenu = document.getElementById('closeMenu');

  closeMenu.addEventListener('click', function () {
    menuBg.classList.remove('translate-x-[0%]');
    menuBg.classList.add('translate-x-[100%]');
  });

  hamburger.addEventListener('click', function () {
    if (menuBg.classList.contains('translate-x-[100%]')) {
      menuBg.classList.remove('translate-x-[100%]');
      menuBg.classList.add('translate-x-[0%]');
    } else {
      menuBg.classList.remove('translate-x-[0%]');
      menuBg.classList.add('translate-x-[100%]');
    }
  });
});