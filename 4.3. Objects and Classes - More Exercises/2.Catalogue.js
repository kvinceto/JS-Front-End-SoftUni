function createCatalogue(input) {
    let map = new Map();
    let set = new Set();
    input.forEach(element => {
        let [product, price] = element.split(' : ');
        let char = product.charAt(0);
        if (!map.has(char)) {
            map.set(char, []);
            set.add(char);
        }

        map.get(char).push(`${product}: ${price}`)
    });

    let arr = Array.from(set.keys()).sort();

    arr.forEach(e => {
        let data = map.get(e).sort();
        console.log(e);
        data.forEach(d =>{
            console.log(`  ${d}`);
        })
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