function validatePass(input) {
    input = String(input);
    let lengthMessage;

    let invalidCount = 0;

    if (input.length < 6 || input.length > 10) {
        lengthMessage = 'Password must be between 6 and 10 characters';
        isValid = false;
        invalidCount++;
    }

    let hasInvalidChar = false;
    for (let i = 0; i < input.length; i++) {
        let char = String(input[i]);
        if (!(char.match(/[A-Z]/gm)) && !(char.match(/[a-z]/gm)) && !(char.match(/[0-9]/gm))) {
            hasInvalidChar = true;
            break;
        }
    }

    let charsMessage;
    if (hasInvalidChar) {
        charsMessage = 'Password must consist only of letters and digits';
        invalidCount++;
    }

    let digitsCount = 0;
    for (let i = 0; i < input.length; i++) {
        let char = String(input[i]);
        if (char.match(/[0-9]/gm)) {
            digitsCount++;
        }
    }

    let digitsMessage;
    if (digitsCount < 2) {
        digitsMessage = 'Password must have at least 2 digits';
        invalidCount++;
    }

    if (invalidCount === 0) {
        console.log('Password is valid');
    }
    else {
        if (lengthMessage) {
            console.log(lengthMessage);
        }
        if (charsMessage) {
            console.log(charsMessage);
        }
        if (digitsMessage) {
            console.log(digitsMessage);
        }
    }

}

let input = 'logIn';
validatePass(input);

input = 'MyPass123';
validatePass(input);

input = 'Pa$s$s';
validatePass(input);