const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const retype_password = document.getElementById('retype-password');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message');

    errorDisplay.innerText = message;
    inputControl.classList.add('error-box');
    inputControl.classList.remove('success'); 
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error-message');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error-box'); 
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validateInputs ()  {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const retypePasswordValue = retype_password.value.trim();

    if(usernameValue === ''){
        setError(username, 'Username is requred');
    } else {  
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'Email is required')
    }else if (!isValidEmail(emailValue)){
         setError(email, 'Provide a valid email address')
    } else {
        setSuccess(email)
    }

    if(passwordValue === ''){
        setError(password, 'Password is required')
    } else if (passwordValue.length<8) {
        setError(password, 'Password must be at least 8 character')
    } else {
        setSuccess(password)
    }

    if(retypePasswordValue === ''){
        setError(retype_password, 'Please confirm your password')
    } 
    else if (retypePasswordValue !== passwordValue) {
        setError(retype_password, "Passwords doesn't match")
    } else {
        setSuccess(retype_password)
    }
};
