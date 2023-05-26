const form         = document.getElementById('form');
const error        = document.getElementById('error');
const submitButton = document.getElementById('submitButton');
const phoneError   = document.getElementById('phoneFormat');

const nameInput    = document.getElementById('name');
const emailInput   = document.getElementById('email');
const phoneInput   = document.getElementById('phone');
const messageInput = document.getElementById('message');
const emptyInputs  = document.getElementById('empty');

function isFormReady() {
    if (nameInput.value !== "" && emailInput.value !== "" && messageInput.value !== "" ) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(input) {
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (input.value.match(validRegex)) {
        error.classList.remove("empty--error");
        return true;
    } else {
        error.classList.add("empty--error");
        return false;
    }
}

function validatePhoneNumber(input_str) {
    var re = /^\(?([0-9]{3})\)?[-]?([0-9]{3})[-]?([0-9]{4})$/;
    return re.test(input_str);
}

nameInput.addEventListener("keyup", () => {
    if (nameInput.value !== "") {
        emptyInputs.children[0].classList.remove("empty--name");
    } 
});

emailInput.addEventListener("keyup", () => {
    if (emailInput.value !== "") {
        emptyInputs.children[1].classList.remove("empty--email");
        validateEmail(emailInput);
    } else {
        error.classList.remove("empty--error");
    }
});

phoneInput.addEventListener("keyup", () => {
    if(validatePhoneNumber(phoneInput.value) || phoneInput.value === "") {
        phoneError.classList.remove("empty--phone");
    } else {
        phoneError.classList.add("empty--phone");
    }
});

phoneInput.addEventListener('invalid', (function(){
    return function(event) {
      event.preventDefault();
    };
})(), true);

messageInput.addEventListener("keyup", () => {
    if (messageInput.value !== "") {
        emptyInputs.children[2].classList.remove("empty--message");
    } 
});

submitButton.addEventListener("click", (event) => {
    if( !isFormReady() ) {
        event.preventDefault()
        if (nameInput.value == "") {
            emptyInputs.children[0].classList.add("empty--name");
        }
        if (emailInput.value == "") {
            emptyInputs.children[1].classList.add("empty--email");
        }
        if (messageInput.value == "") {
            emptyInputs.children[2].classList.add("empty--message");
        }
    } else {
        form.submit();
        form.reset();
        return false;
    }
});