window.addEventListener('DOMContentLoaded',function(){
    console.log('content loaded ....');

   const content = document.querySelector('.main_wrapper'),
         menuToggle = document.querySelector('.menu_toggle');


    menuToggle.addEventListener('click',() => {
        console.log('click');
        content.classList.toggle('menu_on');
    });

    document.querySelector('.content').addEventListener('click', () => {
        content.removeClass('menu_on');
    });
});