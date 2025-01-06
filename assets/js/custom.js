document.addEventListener('mousemove', (event) => {
    const svg = document.getElementById('mySVG');
    const { clientX: mouseX, clientY: mouseY } = event;
    const { innerWidth: width, innerHeight: height } = window;
    const svgWidth = svg.clientWidth;
    const svgHeight = svg.clientHeight;
 
    let offsetX = mouseX - svgWidth / 2;
    let offsetY = mouseY - svgHeight / 2;
 
    offsetX = Math.max(0, Math.min(offsetX, width - svgWidth));
    offsetY = Math.max(0, Math.min(offsetY, height - svgHeight));

    svg.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

// smooth scroll to next sec
const scrollButton = document.getElementById('scrollButton');
if (scrollButton) {
    scrollButton.addEventListener('click', (e) => {
        e.preventDefault();
        const nextSection = document.querySelector('#aboutSection');

        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
            nextSection.classList.add('scrolled');
        }
    });
}
 
document.addEventListener('DOMContentLoaded', function () {
    var animatedTexts = document.querySelectorAll('.animated-text');

    function isInViewport(element) {
        var bounding = element.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkViewport() {
        animatedTexts.forEach(function (animatedText) {
            if (isInViewport(animatedText)) {
                animatedText.classList.add('show');
            } else {
                animatedText.classList.remove('show');
            }
        });
    }
 
    checkViewport();
 
    window.addEventListener('scroll', checkViewport);
});

// text animation
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('animated-wave');

    if(textElement){
        const text = textElement.innerText;
        textElement.innerHTML = '';
     
        const letters = text.split('').map(letter => {
            const span = document.createElement('span');
            span.className = 'letter';
            span.innerText = letter;
            return span;
        });
     
        letters.forEach(letter => textElement.appendChild(letter));
        let currentIndex = 0;
        function animateLetters() { 
            letters.forEach(letter => letter.classList.remove('active')); 
            letters[currentIndex].classList.add('active'); 
            currentIndex = (currentIndex + 1) % letters.length; 
            setTimeout(animateLetters, 800);
        }
        animateLetters();
    }
 
});

// toggle darkmode 
document.getElementById('toggleDarkMode').onclick = function () {
    document.documentElement.classList.toggle('dark');
    // Save the current mode to localStorage
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
};

document.getElementById('toggleDarkModeMobile').onclick = function () {
    document.documentElement.classList.toggle('dark');
    // Save the current mode to localStorage
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
};

// remove url
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a');

    links.forEach(function(link) { 
        if (link.getAttribute('href').endsWith('.html')) { 
            link.setAttribute('href', link.getAttribute('href').replace('.html', ''));
        }
    });
});
