function solve(jsonStr){
    let person = JSON.parse(jsonStr);

    for (const key in person) {
        if (Object.hasOwnProperty.call(person, key)) {
            const element = person[key];
            console.log(`${key}: ${element}`)
        }
    }
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}');