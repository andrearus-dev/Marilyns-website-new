const closeButton = document.querySelector('.close-nav');

const openButton = document.querySelector('.open-nav');

const nav = document.querySelector('.nav');

closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');
}); 

openButton.addEventListener("click", () => {
    nav.classList.add('navigation-open');
}); 


//Grab elements

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');


function showError(input, message) {

    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = document.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    
}




form.addEventListener('submit', function(e) {

    e.preventDefault();

    if(name.value === '') {
        showError(name, '* Name is required');
    } else {
        showSuccess(name);
    }
});