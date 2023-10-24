function solve(string, startIndex, count) {
    let result = string.slice(startIndex, (startIndex + count));
    console.log(result);
}


let text = 'ASentence';
let num1 = 1;
let num2 = 8;

solve(text, num1, num2);

text = 'SkipWord';
num1 = 4;
num2 = 7;

solve(text, num1, num2);