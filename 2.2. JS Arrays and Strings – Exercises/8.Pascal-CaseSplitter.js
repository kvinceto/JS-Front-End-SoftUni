function splitWords(text) {
    let regex = /[A-Z]{1}[a-z]+/gm;
    let words = text.match(regex);

    console.log(words.join(', '));
}

let text = 'SplitMeIfYouCanHaHaYouCantOrYouCan';

splitWords(text);

text = 'HoldTheDoor';

splitWords(text);

text = 'ThisIsSoAnnoyingToDo';

splitWords(text);