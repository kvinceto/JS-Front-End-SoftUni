function sighnCheck(numOne, numTwo, numThree) {
    let n = 0;
    if (numOne < 0) {
        n++;
    }
    if (numTwo < 0) {
        n++;
    } if (numThree < 0) {
        n++;
    }

    if (numOne === 0 || numTwo === 0 || numThree === 0) {
        return 'Positive';
    }

    if (n % 2 === 0) {
        return 'Positive';
    }
    else {
        return 'Negative';
    }
}

let numOne = 5;
let numTwo = 12;
let numThree = -15;

console.log(sighnCheck(numOne, numTwo, numThree));

numOne = -6;
numTwo = -12;
numThree = 14;

console.log(sighnCheck(numOne, numTwo, numThree));

numOne = -1;
numTwo = -2;
numThree = -3;

console.log(sighnCheck(numOne, numTwo, numThree));

numOne = -5;
numTwo = 1;
numThree = 1;

console.log(sighnCheck(numOne, numTwo, numThree));