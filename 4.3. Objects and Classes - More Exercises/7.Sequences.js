function solve(input) {
    const uniqueArrays = new Set();
    input.forEach(jsonStr => {
        const array = JSON.parse(jsonStr);
        const sortedArray = array.slice().sort((a, b) => b - a);
        uniqueArrays.add(JSON.stringify(sortedArray));
    });

    const sortedArrays = Array.from(uniqueArrays)
        .map(jsonStr => JSON.parse(jsonStr))
        .sort((a, b) => {
            if (a.length !== b.length) {
                return a.length - b.length;
            } else {
                return inputData.indexOf(JSON.stringify(b)) - inputData.indexOf(JSON.stringify(a));
            }
        });

    sortedArrays.forEach(array => {
        console.log(`[${array.join(', ')}]`);
    });
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
);

solve(["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]
);