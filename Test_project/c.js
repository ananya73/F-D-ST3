const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


const validateInputs = () => {
    const usernameValue = username.value.trim();
    const fnameValue = fname.value.trim();
    const emailValue = email.value.trim();
    const mnameValue = mname.value.trim();

    if(usernameValue === '') {
        setError(username, '*Name is required');
    } else {
        setSuccess(username);
    }
    if(mnameValue === '') {
        setError(mname, '*Mobile Number is required');
    } 
    else if(mnameValue.length < 9){
        setError(mname, '*Invalid Mobile Number');
    }
    else if(mnameValue.length > 10){
        setError(mname, '*More than 10 digits');
    }
    else {
        setSuccess(mname);
    }

    if(fnameValue === '') {
        setError(fname, "*Father's Name is required");
    } else {
        setSuccess(fname);
    }

    if(emailValue === '') {
        setError(email, '*Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, '*Provide a valid email address');
    } else {
        setSuccess(email);
    }

  


};
