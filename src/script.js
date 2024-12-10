const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.nav-menu');
const menuFooter = document.querySelector('.menu-footer');

burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('expanded');
    menuFooter.classList.toggle('expanded');
});

document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll('.nav-menu a');
    const navMenu = document.querySelector('.nav-menu');
    const burgerMenu = document.querySelector('.burger-menu');

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Закриваємо меню після натискання
            navMenu.classList.add('hidden');
            navMenu.classList.remove('fade-in');
        });
    });

    burgerMenu.addEventListener('click', () => {
        // Відкриваємо або закриваємо меню
        navMenu.classList.toggle('hidden');
        navMenu.classList.toggle('fade-in');
    });
    
});

document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");

    // Залишаємо екран завантаження видимим протягом 5 секунд
    setTimeout(() => {
        loadingScreen.classList.add("hidden");
    }, 5000); // 5 секунд
});


document.addEventListener("DOMContentLoaded", function () {
    const toggleInput = document.querySelector('.toggle-state');
    const language = localStorage.getItem('language') || 'en';
    toggleInput.checked = language === 'en';

    function switchLanguage() {
        if (toggleInput.checked) {
            localStorage.setItem('language', 'en');
            window.location.href = 'en_language.html';
        } else {
            localStorage.setItem('language', 'ua');
            window.location.href = 'index.html';
        }
    }

    toggleInput.addEventListener('change', switchLanguage);
});


