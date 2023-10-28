function modifyNumber(number) {
    function sumOfDigits(n) {
        numberAsString = String(n).split('');
        let sum = 0;

        while (numberAsString.length > 0) {
            let d = Number(numberAsString.pop());
            sum += d;
        }

        return sum;
    }

    number = String(number);
    let avg = sumOfDigits(number) / number.length;

    if (avg <= 5) {
        number = `${number}9`;
        modifyNumber(number)
    }
    else {
        console.log(number);
    }
}

modifyNumber(5835);
modifyNumber(101);