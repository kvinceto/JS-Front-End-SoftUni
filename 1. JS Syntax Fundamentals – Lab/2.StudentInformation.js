function solve(name, age, grade) {
    console.log(`Name: ${name}, Age: ${age}, Grade: ${grade.toFixed(2)}`)
}

let input = ['John', 15, 5.54678];
let name = input[0];
let age = input[1];
let grade = input[2];

solve(name, age, grade);