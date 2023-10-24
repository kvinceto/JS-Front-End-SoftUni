function calculator(num1, operator, num2) {
    let result;

    switch (operator) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '/': result = num1 / num2; break;
        case '*': result = num1 * num2; break;
    }

    console.log(result.toFixed(2));
}

let num1 = 5;
let operator = '+';
let num2 = 10;

calculator(num1, operator, num2);

num1 = 25.5;
operator = '-';
num2 = 3;

calculator(num1, operator, num2);