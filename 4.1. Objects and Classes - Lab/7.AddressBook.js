function solve(input) {
    let map = new Map();

    input.forEach(element => {
        let arr = element.split(':');
        let name = arr[0];
        let address = arr[1];

        map.set(name, address);
    });

    let sortedArray = Array.from(map).sort(([keyA], [keyB]) => keyA.localeCompare(keyB));

    let sortedMap = new Map(sortedArray);

    sortedMap.forEach((value, key) => {
        console.log(`${key} -> ${value}`);
    });
}

solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);

solve(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);