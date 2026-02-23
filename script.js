const banner = document.getElementById('mainBanner');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 90) {
        // Scrolling DOWN and past the banner height → hide it
        banner.classList.add('hidden');
    } else {
        // Scrolling UP → show it
        banner.classList.remove('hidden');
    }

    lastScrollY = currentScrollY;
});

const menuBtn = document.querySelector('.menu-btn');
const dropdown = document.getElementById('dropdown');

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();                  // prevents click from bubbling to window
    dropdown.classList.toggle('open');    // toggle open/closed on each click
});

// Clicking anywhere outside closes the dropdown
window.addEventListener('click', () => {
    dropdown.classList.remove('open');
});