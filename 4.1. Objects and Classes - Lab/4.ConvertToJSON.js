function solve(name, lastName, hairColor) {
    let object = {};
    
    object.name = name;
    object.lastName = lastName;
    object.hairColor = hairColor;

    let jsonStr = JSON.stringify(object);
    console.log(jsonStr);
}



solve('George', 'Jones', 'Brown');
solve('Peter', 'Smith', 'Blond');