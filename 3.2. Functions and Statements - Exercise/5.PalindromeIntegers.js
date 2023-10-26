function palindromeCheck(array) {

    for (let i = 0; i < array.length; i++) {
        let n = array[i].toString();
        let m = '';
        for (let j = n.length - 1; j >= 0; j--) {
            let d = n[j];
            m = m.concat(d)
        }
        if (n === m) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}

let array = [123, 323, 421, 121];

palindromeCheck(array);

array = [32, 2, 232, 1010];

palindromeCheck(array);