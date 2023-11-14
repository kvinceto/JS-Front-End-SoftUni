function createCatalogue(input) {
    let map = new Map();

    input.forEach(element => {
        let [product, price] = element.split(' : ');
        let data = {name: product, productPrice: price}
        let letter = product.split('')[0];
        if (!map.has(letter)) {
            map.set(letter, [])
        }

        let oldValue = map.get(letter);
        let newValue = oldValue.push(data);
        map.set(letter, newValue);
    });

    map.forEach((value, key) => {
        console.log(key);
        let sorted = value.sort();
    })
}

createCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);

createCatalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]);