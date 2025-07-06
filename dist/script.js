document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu (Hamburger) Functionality ---
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');

    // Define the paths to your icons
    const closeIconSrc = './assets/icon-close.svg'; // Make sure you have this icon
    const hamburgerIconSrc = './assets/icon-hamburger.svg';

    menuButton.addEventListener('click', () => {
        // Toggle the 'hidden' class on the menu
        mobileMenu.classList.toggle('hidden');

        // Toggle the body scroll to prevent scrolling when the menu is open
        document.body.classList.toggle('overflow-hidden');

        // Change the icon from hamburger to 'X' and back
        if (mobileMenu.classList.contains('hidden')) {
            hamburgerIcon.src = hamburgerIconSrc;
        } else {
            hamburgerIcon.src = closeIconSrc;
        }
    });

    // --- FAQ Accordion Functionality ---
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        const answerPanel = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        questionButton.addEventListener('click', () => {
            // Toggle the 'hidden' class on the answer to show/hide it
            answerPanel.classList.toggle('hidden');
            
            // Change the icon from '+' to '−'
            icon.textContent = answerPanel.classList.contains('hidden') ? '+' : '−';
        });
    });
});