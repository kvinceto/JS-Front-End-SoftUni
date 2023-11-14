function solve(input) {
    let schedule = new Map();

    input.forEach(element => {
        let arr = element.split(' ');
        let day = arr[0];
        let person = arr[1];

        if (schedule.has(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            schedule.set(day, person);
            console.log(`Scheduled for ${day}`)
        }
    });

    schedule.forEach((value, key) => {
        console.log(`${key} -> ${value}`)
    })
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
);

solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George']
);