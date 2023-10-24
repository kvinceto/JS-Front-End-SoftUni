function solve(array, step) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        if (i % step === 0) {
            result.push(array[i]);
        }
    }

    console.log(result)
}

let array = ['5', '20', '31', '4', '20'];
let step = 2;

solve(array, step);

array = ['dsa', 'asd', 'test', 'tset'];
step = 2;

solve(array, step);

array = ['1', '2', '3', '4', '5'];
step = 6;

solve(array, step);