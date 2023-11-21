function createGarage(input) {
    let garage = new Map();

    input.forEach(element => {
        let [number, car] = element.split(' - ');
        let regex = new RegExp(': ', 'g');
        car = car.replace(regex, ' - ');
        if (!garage.has(number)) {
            garage.set(number, [])
        }

        let value = garage.get(number);
        value.push(car);
        garage.set(number, value);
    });

    let keys = garage.keys();

    for (const iterator of keys) {
        console.log(`Garage № ${iterator}`);
        let cars = garage.get(iterator);
        cars.forEach(c => {
            console.log(`--- ${c}`)
        })
    }
}

createGarage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi', '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']
);
createGarage(['1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol']
);