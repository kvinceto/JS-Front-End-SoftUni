function getEmployees(input) {
    let employees = [];

    class Employee{
        constructor(name, personelNumber){
            this.name = name;
            this.personelNumber = personelNumber;
        }
    }

    input.forEach(item => {
        employees.push(new Employee(item, item.length));
    });

    for (const iterator of employees) {
        console.log(`Name: ${iterator.name} -- Personal Number: ${iterator.personelNumber}`)
    }
}

getEmployees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);

getEmployees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]
);

