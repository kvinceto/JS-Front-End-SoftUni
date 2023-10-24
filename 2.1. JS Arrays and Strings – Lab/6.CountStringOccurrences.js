function solve(text, word) {
    let counter = 0;
    let arr = text.split(' ');

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === word) {
            counter++;
        }
    }

    console.log(counter);
}


let text = 'This is a word and it also is a sentence';
let word = 'is';

solve(text, word);

text = 'softuni is great place for learning new programming languages';
word = 'softuni';

solve(text, word);