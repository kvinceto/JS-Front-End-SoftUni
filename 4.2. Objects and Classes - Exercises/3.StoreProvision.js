function solve(arr1, arr2) {
    let map = new Map();

    for (let i = 0; i < arr1.length; i++) {
        let name;
        let quantity;

        if (i % 2 === 0) {
            name = arr1[i];
        } else {
            name = arr1[i - 1];
            quantity = new Number(arr1[i]);
        }

        if (!map.has(name)) {
            map.set(name, 0)
        } else {
            let currentValue = map.get(name);
            let updatedValue = currentValue + quantity;
            map.set(name, updatedValue);
        }
    }

    for (let i = 0; i < arr2.length; i += 2) {
        let name = arr2[i];
        let quantity = new Number(arr2[i + 1]);
        if (!map.has(name)) {
            map.set(name, quantity);
        } else {
            let currentValue = map.get(name);
            let updatedValue = currentValue + quantity;
            map.set(name, updatedValue);
        }
    }

    for (let [key, value] of map.entries()) {
        console.log(`${key} -> ${value}`);
    }
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);

solve([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
);