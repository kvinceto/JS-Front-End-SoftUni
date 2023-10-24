function solve(array) {
    let sumEven = 0;
    let sumOdd = 0;

    for (const number of array) {
        if (number % 2 === 0) {
            sumEven += number;
        }
        else {
            sumOdd += number;
        }
    }

    let result = sumEven - sumOdd;

    console.log(result);
}


let array = [1, 2, 3, 4, 5, 6];

solve(array);

array = [3, 5, 7, 9];

solve(array);

array = [2, 4, 6, 8, 10];

solve(array);