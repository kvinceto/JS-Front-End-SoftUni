function solve(text, word) {
    let replaceWith = '*'.repeat(word.length);

    let result = text.replaceAll(word, replaceWith);

    console.log(result);
}


let text = 'A small sentence with some words';
let word = 'small';

solve(text, word);

text = 'Find the hidden word';
word = 'hidden';

solve(text, word);