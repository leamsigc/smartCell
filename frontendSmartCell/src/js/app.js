window.addEventListener('DOMContentLoaded', function () {
    console.log('content loaded ....');

    const menu = document.querySelector('nav'),
        menuToggle = document.querySelector('.menu_toggle');


    menuToggle.addEventListener('click', () => {
        console.log('click');
        menu.classList.toggle('active');
    });

    document.querySelector('.content').addEventListener('click', () => {
        content.removeClass('active');
    });
});