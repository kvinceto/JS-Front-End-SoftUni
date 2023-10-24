function reverse(number, array) {
    let arr = [];

    for (let i = 0; i < number; i++) {
        arr.push(array[i]);
    }

    arr.reverse();

    console.log(arr.join(' '))
}


let n = 3;
let array = [10, 20, 30, 40, 50];

reverse(n, array);

n = 4;
array = [-1, 20, 99, 5];

reverse(n, array);

n = 2;
array = [66, 43, 75, 89, 47];

reverse(n, array);