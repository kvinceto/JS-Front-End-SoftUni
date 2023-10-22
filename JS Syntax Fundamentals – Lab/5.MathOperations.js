function solve(firstNumber, secondNumber, operator) {
    let result;

    switch (operator) {
        case '+': result = firstNumber + secondNumber; break;
        case '-': result = firstNumber - secondNumber; break;
        case '/': result = firstNumber / secondNumber; break;
        case '*': result = firstNumber * secondNumber; break;
        case '%': result = firstNumber % secondNumber; break;
        case '**': result = firstNumber ** secondNumber; break;
        default: result = 'Error!'; break;
    }

    console.log(result);
}

let num1 = 5;
let num2 = 6;
let operator = '+';

solve(num1, num2, operator);

num1 = 3;
num2 = 5.5;
operator = '*';

solve(num1, num2, operator);