// script.js
const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");
const navLinks = navMenu.querySelectorAll("a");

burger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

// Закрытие меню при клике на ссылку
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
            navMenu.classList.remove("active");
        }
    });
});

// Анимация появления при прокрутке
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
