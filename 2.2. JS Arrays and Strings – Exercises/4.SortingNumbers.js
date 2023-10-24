function sort(array) {
    array.sort((a, b) => a - b);

    let result = [];
    let counter = 0;
    while (array.length > 0) {
        counter++;
        if (counter % 2 === 0) {
            result.push(array.pop())
        }
        else {
            result.push(array.shift())
        }
    }

    console.log(result);
}

let array = [1, 65, 3, 52, 48, 63, 31, -3, 18, 56];

sort(array);