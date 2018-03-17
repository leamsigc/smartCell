window.addEventListener('DOMContentLoaded', function () {
    console.log('content loaded ....');

    const menu = document.querySelector('nav'),
        menuToggle = document.querySelector('.menu_toggle');


    menuToggle.addEventListener('click', () => {
        console.log('click');
        menu.classList.toggle('active');
    });
    // const linkElements = document.querySelectorAll('nav > a[href ^= "#"]');
    // console.log(linkElements);
    // linkElements.forEach(link => {
    //     console.log(link.getAttribute('href'));
    //     link.addEventListener('click',scroll);

    // });

    // // scroll function 
    // function scroll(link){
    //     let linkAttribute = this.getAttribute('href');

    //     console.log(linkAttribute);
    // }
});