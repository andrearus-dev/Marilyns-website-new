const closeButton = document.querySelector('.close-nav');

const openButton = document.querySelector('.open-nav');

const nav = document.querySelector('.nav');

closeButton.addEventListener("click", () => {
    nav.classList.remove('navigation-open');
}); 

openButton.addEventListener("click", () => {
    nav.classList.add('navigation-open');
}); 

//Form validation


//Grab elements

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const textArea = document.getElementById('text-area');

const inputArr = [name,email,textArea];


function showError(input, message) {

    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = document.querySelector('small');
    small.innerText = message;
}


function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkRequired() {
    inputArr.forEach(function(input) {
    if(input.value.trim() === '') {
        showError(input, `${getFieldName
        (input)} is required`); 
    } else {
        showSuccess(input)
    }
});
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}




form.addEventListener('submit', function(e) {
    
    e.preventDefault();
    checkRequired();

});

