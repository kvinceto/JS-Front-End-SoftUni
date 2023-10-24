function sumFirstAndLast(array) {
    let result;

    result = array[0] + array[array.length - 1];

    console.log(result);
}

let arr = [20, 30, 40];

sumFirstAndLast(arr);

arr = [10, 17, 22, 33];

sumFirstAndLast(arr);

arr = [11, 58, 69];

sumFirstAndLast(arr);