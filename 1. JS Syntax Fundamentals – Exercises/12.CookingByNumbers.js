function solve(input, operations) {
    let n = parseInt(input);

    for (let i = 0; i < operations.length; i++) {
        let operation = operations[i];

        switch (operation) {
            case 'chop': n = n / 2; break;
            case 'dice': n = Math.sqrt(n); break;
            case 'spice': n = n + 1; break;
            case 'bake': n = n * 3; break;
            case 'fillet': n = n - (n * 0.2); break;
        }

        console.log(n);
    }
}

let input = '32';
let operations = ['chop', 'chop', 'chop', 'chop', 'chop'];

solve(input, operations);

input = '9';
operations = ['dice', 'spice', 'chop', 'bake', 'fillet'];

solve(input, operations);