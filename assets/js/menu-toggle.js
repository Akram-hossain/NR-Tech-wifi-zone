document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');
    const firstSpan = hamburger.querySelector('span:first-child');
    const lastSpan = hamburger.querySelector('span:last-child');


    // Function to toggle menu visibility and hamburger icon state
    function toggleMenu() {
      if (menu.classList.contains('translate-x-[120%]')) {
        menu.classList.remove('translate-x-[120%]');

        firstSpan.classList.add('w-[20px]'); 
        lastSpan.classList.add('w-[20px]'); 

        menu.classList.add('translate-x-[0%]');
        hamburger.classList.add('hamburger-active'); // Add active class
      } else {
        menu.classList.remove('translate-x-[0%]');

        firstSpan.classList.remove('w-[20px]'); 
        lastSpan.classList.remove('w-[20px]'); 
        
        menu.classList.add('translate-x-[120%]');
        hamburger.classList.remove('hamburger-active'); // Remove active class
      }
    }

    // Function to hide menu and reset hamburger icon state
    function hideMenu() {
      menu.classList.remove('translate-x-[0%]');
      menu.classList.add('translate-x-[120%]');
      hamburger.classList.remove('hamburger-active'); // Remove active class
    }

    // Toggle menu when hamburger icon is clicked
    hamburger.addEventListener('click', function (event) {
      event.stopPropagation();
      toggleMenu();
    });

    // Hide menu when clicking outside of it
    document.addEventListener('click', function (event) {
      if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        hideMenu();
      }
    });

    // Hide menu when a link inside the menu is clicked
    menu.addEventListener('click', function (event) {
      if (event.target.tagName === 'A') {
        hideMenu();
      }
    });
  });