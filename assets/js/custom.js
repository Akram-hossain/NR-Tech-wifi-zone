document.addEventListener('DOMContentLoaded', () => {
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

    const btn = document.getElementById('backToTop');

    // Show button after scrolling down
    window.addEventListener('scroll', () => {
        btn.classList.toggle('hidden', window.scrollY < 300);
    });

    // Smooth scroll to top on click
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
