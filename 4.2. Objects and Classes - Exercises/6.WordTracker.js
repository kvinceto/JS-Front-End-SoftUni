function findWords(arr) {
    let wordsToFind = (arr.shift()).split(' ');
    let map = new Map();
    wordsToFind.forEach(element => {
        map.set(element, 0);
    });

    arr.forEach(w => {
        if (map.has(w)) {
            let n = new Number(map.get(w)) + 1;
            map.set(w, n);
        }
    })

    let result = Array.from(map).sort((a, b) => b[1] - a[1]);
    let sortedMap = new Map(result);

    sortedMap.forEach((value, key) => {
        console.log(`${key} - ${value}`)
    })
}

findWords([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);

findWords([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);