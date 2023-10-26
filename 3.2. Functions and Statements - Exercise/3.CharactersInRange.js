function charsInBetween(char1, char2) {
    let n = char1.charCodeAt(0);
    let m = char2.charCodeAt(0);

    let min = Math.min(n, m);
    let max = Math.max(n, m);

    let arr = [];
    for (let i = min + 1; i < max; i++) {
        arr.push(String.fromCharCode(i));
    }

    console.log(arr.join(' '));
}

let char1 = 'a';
let char2 = 'd';

charsInBetween(char1, char2);

char1 = '#';
char2 = ':';

charsInBetween(char1, char2);

char1 = 'C';
char2 = '#';

charsInBetween(char1, char2);