function sumDigits(number) {
    let sum = 0;

    for (let i = 0; i < number.toString().length; i++) {
        sum += parseInt(number.toString()[i]);
    }

    console.log(sum);
}


let number = 245678;

sumDigits(number);

number = 97561;

sumDigits(number);

number = 543;

sumDigits(number);