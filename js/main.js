const form = document.querySelector('form');
const submitBtn = document.getElementById('submit');

/**
* Checks if the form is validated before sending.
**/
submitBtn.addEventListener('click', (e) => {
    // Scoped variables
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const nameError = document.querySelector('.form-error:nth-of-type(1)');
    const emailError = document.querySelector('.form-error:nth-of-type(2)');
    const messageError = document.querySelector('.form-error:nth-of-type(3)');
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    
    // Reset form without error messages
    name.style.border = "";
    nameError.style.display = "none";
    email.style.border = "";
    emailError.style.display = "none";
    message.style.border = "";
    messageError.style.display = "none";
    // Used to focus on the first invalid input
    let hasError = false;
    
    // Check if user input is invalidated
    if (!name.value ?? null) {
        hasError = true;
        e.preventDefault();
        name.focus();
        nameError.style.display = "block";
        name.style.border = "1px solid red";
    }
    if (!emailRegex.test(email.value)) {
        switch (hasError) {
            case false:
                hasError = true;
                email.focus();
                break;
            default:
                break;
        }
        e.preventDefault();
        emailError.style.display = "block";
        email.style.border = "1px solid red";
    }
    if (!message.value ?? null) {
        switch (hasError) {
            case false:
                hasError = true;
                message.focus();
                break;
            default:
                break;
        }
        e.preventDefault();
        messageError.style.display = "block";
        message.style.border = "1px solid red";
    }
});

// Reset form on successful submission.
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
        email.style.border = "none";
    }
}



