const form = document.querySelector('.form1');
const home = document.querySelector('.home');

form.addEventListener('click', irForm); 
home.addEventListener('click', irHome); 

function irForm () {
    window.location.href = 'form.html'
}

function irHome () {
    window.location.href = 'index.html'
}

