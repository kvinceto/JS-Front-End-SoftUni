function claculatePower(number, power) {
    let result = 1;

    for (let i = 1; i <= power; i++) {
        result *= number;
    }

    console.log(result);
}

let number = 2;
let power = 8;

claculatePower(number, power);

number = 3;
power = 4;

claculatePower(number, power);
