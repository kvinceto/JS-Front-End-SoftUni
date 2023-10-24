function formatGrade(grade) {
    let result;

    if (grade < 3.00) {
        result = 'Fail';
    }
    else if (grade < 3.50) {
        result = 'Poor';
    }
    else if (grade < 4.50) {
        result = 'Good';
    }
    else if (grade < 5.50) {
        result = 'Very good';
    }
    else {
        result = 'Excellent';
    }

    console.log(`${result} (${grade.toFixed(2)})`);
}

let grade = 3.33;

formatGrade(grade);

grade = 4.50;

formatGrade(grade);

grade = 2.99;

formatGrade(grade);