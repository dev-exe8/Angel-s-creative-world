document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const themeToggle = document.getElementById('theme-toggle');
    const sections = document.querySelectorAll('section');

    // Hamburger menu toggle
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Theme toggle functionality
    if (themeToggle) {
        const themes = ['default', 'theme-sunset', 'theme-ocean', 'theme-lavender', 'theme-chocolate'];
        let currentThemeIndex = 0;

        themeToggle.addEventListener('click', () => {
            document.body.classList.remove(...themes);
            currentThemeIndex = (currentThemeIndex + 1) % themes.length;
            if (themes[currentThemeIndex] !== 'default') {
                document.body.classList.add(themes[currentThemeIndex]);
            }
        });
    }

    // Scroll animation functionality
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        const elements = section.querySelectorAll('.scroll-animate');
        elements.forEach(el => observer.observe(el));
    });
});