function printMatrix(number) {
    number = Number(number);

    let arr = [];

    for (let i = 0; i < number; i++) {
        let str = (`${number} `.repeat(number)).trimEnd();
        arr[i] = str.split(' ');
    }

    arr.forEach(e => {
        console.log(e.join(' '));
    })
}

printMatrix(3);
printMatrix(7);
printMatrix(2);