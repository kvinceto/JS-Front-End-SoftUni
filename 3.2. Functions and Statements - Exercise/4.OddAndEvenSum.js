function findSumOfEvanAndOdds(number) {
    let even = [];
    let odds = [];

    while (number > 0) {
        let n = number % 10;
        number = Math.floor(number / 10);
        if (n % 2 === 0) {
            even.push(n);
        }
        else {
            odds.push(n);
        }
    }

    let sumEven = 0;
    even.forEach(element => {
        sumEven += element;
    });

    let sumOdds = 0;
    odds.forEach(element => {
        sumOdds += element;
    });

    console.log(`Odd sum = ${sumOdds}`)
    console.log(`Even sum = ${sumEven}`)
}

let number = 1000435;
findSumOfEvanAndOdds(number);

number = 3495892137259234;
findSumOfEvanAndOdds(number);