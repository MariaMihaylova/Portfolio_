const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 100);
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const sections = document.querySelectorAll('.section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});