function printAndSum(input) {
    let num1 = input[0];
    let num2 = input[1];

    let result = 0;
    let nums = [];

    for (let i = num1; i <= num2; i++) {
        result += i;
        nums.push(i);
    }

    console.log(nums.join(' '));
    console.log(`Sum: ${result}`);
}

let input = [5, 10];

printAndSum(input);

input = [0, 26];

printAndSum(input);

input = [50, 60];

printAndSum(input);