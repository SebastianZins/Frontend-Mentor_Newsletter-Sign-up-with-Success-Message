/*
 * triggered by subscribe and dismiss button
 */
function toggle_successMessageActive() {
    // check if mail input is valid
    const isValid = check_validInput();
    if (!isValid) {
        // if invalid show error and skip
        document.getElementById('notice-label').classList.add('invalid');
        document.getElementById('mail-input').classList.add('invalid');
        return;
    }

    // check if success message is active / is being shown
    const isActive = document
        .getElementById('success-message')
        .classList.contains('active');

    if (isActive) {
        // if active dismiss success message
        document.getElementById('success-message').classList.remove('active');
        document.getElementById('sign-up').classList.add('active');
    } else {
        // if not active show success message and remove invalid label
        document.getElementById('success-message').classList.add('active');
        document.getElementById('sign-up').classList.remove('active');
        document.getElementById('notice-label').classList.remove('invalid');
        document.getElementById('mail-input').classList.remove('invalid');
    }
}

/*
 * check validity of mail input string
 * by validating agaings mail regex and test if empty
 */
function check_validInput() {
    const value = document.getElementById('mail-input').value;
    const isNonEmpty = value.length > 0;

    const re = /\S+@\S+\.\S+/;
    const isEmail = re.test(value);

    return isNonEmpty && isEmail;
}
