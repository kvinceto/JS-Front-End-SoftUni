function hasSameDigits(number) {
    let arr = String(number);

    let digit = arr[0];
    let isSame = true;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === digit) {
            continue;
        }
        else {
            isSame = false;
            break;
        }
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }

    console.log(isSame);
    console.log(sum);
}

let number = 2222222;

hasSameDigits(number);

number = 1234;

hasSameDigits(number);