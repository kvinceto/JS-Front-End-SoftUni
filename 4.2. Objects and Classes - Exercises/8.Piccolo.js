function parking(input) {
    let carsIn = new Set();

    input.forEach(element => {
        let [direction, carNumber] = element.split(', ');
        if (direction === 'IN') {
            carsIn.add(carNumber);
        } else if (direction === 'OUT') {
            carsIn.delete(carNumber);
        }
    });

    if (carsIn.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        let sorted = Array.from(carsIn).sort();
        sorted.forEach(w => {
            console.log(w);
        })
    }
}

parking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);

parking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);