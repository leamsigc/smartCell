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
    const form = document.querySelector('#contact');
    form.addEventListener('submit', e => {
        const name = document.querySelector('input[type=text]').value;
        if(name.length <= 1){
            alertMessage('red','Please enter a valid name!');
            e.preventDefault();
        }
    });
});

function alertMessage(color, msg){

    const parentElement = document.querySelector('#contact');
    const beforeElement = document.querySelector('#contact > fieldset:first-of-type');
    let div = document.createElement('div');
    div.className = 'alert';
    div.style.background = color;

    div.appendChild(document.createTextNode(msg));
    parentElement.insertBefore(div,beforeElement);
    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 2000);
}