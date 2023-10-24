function repeatString(string, repeat) {
    let result = '';

    for (let i = 1; i <= repeat; i++) {
        result += string;
    }

    return result;
}


let string = 'abc';
let repeat = 3;

console.log(repeatString(string, repeat));

string = 'String';
repeat = 2;

console.log(repeatString(string, repeat));