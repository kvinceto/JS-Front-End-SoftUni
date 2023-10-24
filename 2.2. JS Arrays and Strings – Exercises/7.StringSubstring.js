function findWord(word, text) {
    text = text.toLowerCase();
    let arr = text.split(' ');
    for (const w of arr) {
        if (w === word) {
            return w;
        }
    }

    return `${word} not found!`;
}

let word = 'javascript';
let text = 'JavaScript is the best programming language';

console.log(findWord(word, text));

word = 'python';
text = 'JavaScript is the best programming language';

console.log(findWord(word, text));