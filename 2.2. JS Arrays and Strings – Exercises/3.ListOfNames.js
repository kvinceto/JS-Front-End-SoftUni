function sort(array) {
    let counter = 0;
    array.sort();
    for (const name of array) {
        counter++;
        console.log(`${counter}.${name}`)
    }
}

let array = ["John", "Bob", "Christina", "Ema"];

sort(array);