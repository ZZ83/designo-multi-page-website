const form         = document.getElementById('form');
const error        = document.getElementById('error');
const submitButton = document.getElementById('submitButton');
const phoneError   = document.getElementById('phoneFormat');

const nameInput    = document.getElementById('name');
const emailInput   = document.getElementById('email');
const phoneInput   = document.getElementById('phone');
const messageInput = document.getElementById('message');

function validateEmail (input) {
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.value.match(validRegex)) {
        error.classList.remove("-error");
        return true;
    } else {
        error.classList.add("-error");
        return false;
    }
}

function validatePhoneNumber (input_str) {
    var re = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
    return re.test(input_str);
}

function isFormReady () {
    if ( nameInput.value    !== "" && 
         emailInput.value   !== "" && 
         messageInput.value !== "" && 
         (validatePhoneNumber(phoneInput.value) || phoneInput.value === "") &&
         (validateEmail(emailInput)) ) {
        return true;
    } else {
        return false;
    }
}

nameInput.addEventListener("keyup", () => {
    if (nameInput.value !== "") {
        nameInput.nextElementSibling.classList.remove("-message");
    } 
});

emailInput.addEventListener("keyup", () => {
    if (emailInput.value !== "") {
        emailInput.nextElementSibling.classList.remove("-message");
        validateEmail(emailInput);
    } else {
        error.classList.remove("-error");
    }
});

phoneInput.addEventListener("keyup", () => {
    if(validatePhoneNumber(phoneInput.value) || phoneInput.value === "") {
        phoneError.classList.remove("-error");
    } else {
        phoneError.classList.add("-error");
    }
});

phoneInput.addEventListener('invalid', (function(){
    return function(event) {
      event.preventDefault();
    };
})(), true);

messageInput.addEventListener("keyup", () => {
    if (messageInput.value !== "") {
        messageInput.nextElementSibling.classList.remove("-message");
    } 
});

submitButton.addEventListener("click", (event) => {
    if( !isFormReady() ) {
        event.preventDefault()
        if (nameInput.value === "") {
            nameInput.nextElementSibling.classList.add("-message");
        }
        if (emailInput.value === "") {
            emailInput.nextElementSibling.classList.add("-message");
        }
        if (messageInput.value === "") {
            messageInput.nextElementSibling.classList.add("-message");
        }
    } else {
        form.submit();
        form.reset();
        return false;
    }
});