function solve(input) {
    let result = new Map();
    input.forEach(item => {
        let [name, number] = item.split(' ');
        result.set(name, number);
    });

    result.forEach((number, name) => {
        console.log(`${name} -> ${number}`);
    })
    
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
);

solve(['George 0552554',
'Peter 087587',
'George 0453112',
'Bill 0845344']
);