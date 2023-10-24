function extractWords(input) {
    let string = input.toUpperCase();
    let regex = /[A-Za-z]+/gm;
    let arr = string.match(regex);
    console.log(arr.join(', '))
}

let input = 'Hi, how are you?';

extractWords(input);

input = 'hello';

extractWords(input);