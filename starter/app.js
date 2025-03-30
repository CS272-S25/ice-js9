/**
 * Called whenever the "Add Email" button is pressed.
 * Adds the given email to the DOM.
 */
function addEmailToDOM() {
    const emailInputsNode = document.getElementById("email-inputs");
    const newNode = document.createElement("input");
    newNode.className = 'form-control mb-2';
    newNode.placeholder = 'Type your email here...';
    newNode.style.maxWidth = '25em'
    emailInputsNode.appendChild(newNode);
}

/**
 * Called whenever the "Validate" button is pressed.
 * Checks whether the given name and email(s) are valid.
 * If they are invalid, it will set the error text elements.
 * Otherwise, it will reset the error text elements.
 */
function validate() {
    const name = document.getElementById("pii-name").value;
    
    // Perform name validation
    const nameErrorTextNode = document.getElementById("pii-name-error-text");
    const nameInputNode = document.getElementById("pii-name");
    if (validateName(name)) {
        nameErrorTextNode.innerText = "";
        nameInputNode.className = "form-control"
    } else {
        nameErrorTextNode.innerText = "Please specify a valid name!";
        nameInputNode.className = "form-control is-invalid"
    }

    // Perform email validation
    const emailsErrorTextNode = document.getElementById("email-inputs-error-text");
    if (validateEmails()) {
        emailsErrorTextNode.innerText = "";
    } else {
        emailsErrorTextNode.innerText = "Please check your emails!";
    }
}

/**
 * Validates a name such that it has 1+ alpha or space characters.
 * @param {string} name name to validate
 * @returns {boolean} true if matches, false otherwise
 */
function validateName(name) {
    return false; // TODO: Validate the name!
}

/**
 * Iterates over all inputs within `email-inputs` to check that 
 * each value has a valid email address.
 * @returns {boolean} false if no emails or any email is invalid, true otherwise
 */
function validateEmails() {
    const allInputs = document.getElementById("email-inputs").getElementsByTagName("input");
    
    if (allInputs.length === 0) {
        return false;
    }

    // TODO: Rather than just checking the first email, check every email!
    // HINT: You'll likely need to use a loop!
    const isFirstEmailValid = validateEmail(allInputs[0].value)
    return isFirstEmailValid;
}

/**
 * Validates an email such that it is some number of characters,
 * followed by an @ symbol, followed by some number of characters,
 * followed by a dot symbol.
 * @param {string} email email to validate
 * @returns {boolean} true if matches, false otherwise
 */
function validateEmail(email) {
    return false; // TODO: Validate the email!
}

/**
 * Validates a character such that it is a space
 * @param {string} c character to validate
 * @returns {boolean} true if matches, false otherwise
 */
function isSpace(c) {
    return /^ $/.test(c);
}

/**
 * Validates a character such that it is alpha
 * @param {string} c character to validate
 * @returns {boolean} true if matches, false otherwise
 */
function isLetter(c) {
    return /^[a-zA-Z]$/.test(c);
}
