function printAndSum(num1, num2) {

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

printAndSum(inpu[0], input[1]);

input = [0, 26];

printAndSum(inpu[0], input[1]);

input = [50, 60];

printAndSum(inpu[0], input[1]);
