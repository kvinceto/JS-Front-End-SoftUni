function rotate(array, rotatins) {
    for (let i = 0; i < rotatins; i++) {
        let number = array.shift();
        array.push(number);
    }

    console.log(array.join(' '));
}


let array = [51, 47, 32, 61, 21];
let rotatins = 2;

rotate(array, rotatins);

array = [32, 21, 61, 1];
rotatins = 4;

rotate(array, rotatins);

array = [2, 4, 15, 31];
rotatins = 5;

rotate(array, rotatins);