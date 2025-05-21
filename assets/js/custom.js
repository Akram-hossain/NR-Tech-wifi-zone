document.addEventListener('DOMContentLoaded', () => {
    // tabs
    const tabs = document.querySelectorAll('.tab');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            tab.classList.add('active');
            const target = document.getElementById(tab.getAttribute('data-target'));
            target.classList.add('active');
        });
    });


    // Show button after scrolling down
    const btn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('hidden', window.scrollY < 300);
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    // top header fixed
    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('fixed', 'top-0', 'left-0', 'shadow-md', 'z-50', 'w-full', 'bg-white');
        } else {
            header.classList.remove('fixed', 'top-0', 'left-0', 'shadow-md', 'z-50', 'w-full', 'bg-white');
        }
    });

    // active menu
    const currentPath = window.location.pathname.replace(/\/$/, ''); // Remove trailing slash
    const links = document.querySelectorAll('#mainMenu li a');

    links.forEach(link => {
        const linkPath = link.getAttribute('href').replace(/\/$/, '');
        // alert(linkPath);
        console.log({ linkPath, currentPath });
        if (linkPath == currentPath || (linkPath == '' && currentPath == '')) {
            link.classList.add('active'); // 🔴 Your active classes
        }
    });

});
