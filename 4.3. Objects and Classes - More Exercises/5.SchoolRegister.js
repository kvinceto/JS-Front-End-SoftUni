function createRegister(input) {
    class Student {
        constructor(grade, name, score) {
            this.grade = grade;
            this.name = name;
            this.score = score;
        }
    }
    let register = {};
    input.forEach(element => {
        let [first, second, last] = element.split(', ');
        let name = first.split('Student name: ')[1];
        let grade = Number(second.split('Grade: ')[1]) + 1;
        let score = Number(last.split('Graduated with an average score: ')[1]);
        if (score >= 3) {
            let student = new Student(grade, name, score);
            if (!register.hasOwnProperty(grade)) {
            }
            let values = register[grade];
            values.push(student);
            register[grade] = values;
        }
    });

    let keys = Object.keys(register);
    keys.forEach(k => {
        let students = register[k];
        let names = [];
        let scores = [];
        students.forEach(s => {
            names.push(s.name);
            scores.push(s.score);
        })
        let sum = 0;
        scores.forEach(s =>{
            sum += s;
        })
        let avg = (sum / scores.length).toFixed(2);
        console.log(`${k} Grade`);
        console.log(`List of students: ${names.join(', ')}`);
        console.log(`Average annual score from last year: ${avg}`)
        console.log();
    })
}

createRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]
);

createRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
]
);