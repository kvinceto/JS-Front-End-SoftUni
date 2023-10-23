function printTable(number) {
    for (let i = 1; i <= 10; i++) {
        let product = number * i;
        console.log(`${number} X ${i} = ${product}`)
    }
}

let number = 5;

printTable(number);

number = 2;

printTable(number);