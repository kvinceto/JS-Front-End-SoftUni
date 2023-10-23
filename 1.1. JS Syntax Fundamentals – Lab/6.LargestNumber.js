function solve(input) {
    let num1 = input[0];
    let num2 = input[1];
    let num3 = input[2];

    let result;

    if (num1 >= num2 && num1 >= num3) {
        result = num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        result = num2;
    }
    else if (num3 >= num1 && num3 >= num2) {
        result = num3;
    }

    console.log(`The largest number is ${result}.`)
}


let input = [5, -3, 16];

solve(input);

input = [-3, -5, -22.5];

solve(input);