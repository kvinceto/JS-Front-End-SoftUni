function calculator(numOne, numTwo, operator) {
    let result;

    switch (operator) {
        case 'multiply': result = numOne * numTwo; break;
        case 'divide': result = numOne / numTwo; break;
        case 'add': result = numOne + numTwo; break;
        case 'subtract': result = numOne - numTwo; break;
    }

    console.log(result);
}

let numOne = 5;
let numTwo = 5;
let operator = 'multiply';

calculator(numOne, numTwo, operator);

numOne = 40;
numTwo = 8;
operator = 'divide';

calculator(numOne, numTwo, operator);

numOne = 12;
numTwo = 19;
operator = 'add';

calculator(numOne, numTwo, operator);

numOne = 50;
numTwo = 13;
operator = 'subtract';

calculator(numOne, numTwo, operator);