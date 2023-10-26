function passwordValidate(password) {
    password = password.toString();
    let hasLength;
    let onlyLetterAndDigits;
    let hasMinimum2Digits;
    let digitsCount = 0;

    if (password.length >= 6 && password.length <= 10) {
        hasLength = true;
    }
    else {
        hasLength = false;
    }

    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (isNaN(char)) {
            onlyLetterAndDigits = false;
            break
        }

        onlyLetterAndDigits = true;
        if (char.test(/[0-9]/gm)) {
            digitsCount++;
        }
    }

    if (digitsCount >= 2) {
        hasMinimum2Digits = true;
    }
    else {
        hasMinimum2Digits = false;
    }

    if (hasLength && onlyLetterAndDigits && hasMinimum2Digits) {
        console.log('Password is valid');
    }
    else {
        if (!hasLength) {
            console.log('Password must be between 6 and 10 characters');
        }
        if (!onlyLetterAndDigits) {
            console.log('Password must consist only of letters and digits');
        }
        if (!hasMinimum2Digits) {
            console.log('Password must have at least 2 digits');
        }
    }
}

let password = 'logIn';
passwordValidate(password);

password = 'MyPass123';
passwordValidate(password);

password = 'Pa$s$s';
passwordValidate(password);