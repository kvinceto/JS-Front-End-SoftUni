function replace(words, template) {
    let arr = words.split(', ');

    for (const w of arr) {
        let string = '*'.repeat(w.length);
        template = template.replace(string, w);
    }

    console.log(template);
}

let words = 'great';
let template = 'softuni is ***** place for learning new programming languages';

replace(words, template);

words = 'great, learning';
template = 'softuni is ***** place for ******** new programming languages';

replace(words, template);