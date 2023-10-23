function calculateAmount(fruit, grams, kg) {
    let kgNeeded = grams / 1000;
    let amount = kgNeeded * kg;

    console.log(`I need $${amount.toFixed(2)} to buy ${kgNeeded.toFixed(2)} kilograms ${fruit}.`)
}

let fruit = 'orange';
let grams = 2500;
let price = 1.80;

calculateAmount(fruit, grams, price);

fruit = 'apple';
grams = 1563;
price = 2.35;

calculateAmount(fruit, grams, price);