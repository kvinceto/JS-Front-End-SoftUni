function solve(grade) {
    let result;

    if (grade >= 5.50) {
        result = 'Excellent'
    }
    else {
        result = 'Not excellent'
    }

    console.log(result)
}


let input = 5.50;

solve(input);

input = 4.35;

solve(input);