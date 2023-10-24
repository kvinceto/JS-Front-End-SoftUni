function findWords(text) {
    let regex = /#[A-Za-z]+\b/gm;

    let arr = text.match(regex);

    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let wordToArray = word.split('#').filter(e => e);
        arr[i] = wordToArray.join();
    }

    arr.forEach(element => {
        console.log(element);
    });
}


let text = 'Nowadays everyone uses # to tag a #special word in #socialMedia';

findWords(text);

text = 'The symbol # is known #variously in English-speaking #regions as the #number sign';

findWords(text);