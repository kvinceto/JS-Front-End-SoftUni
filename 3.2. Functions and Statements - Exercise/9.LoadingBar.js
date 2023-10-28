function loadBar(persent) {
    let bar = ['.', '.', '.', '.', '.', '.', '.', '.', '.', '.'];

    let p = persent / 10;
    for (let i = 0; i < p; i++) {
        bar[i] = '%';
    }

    console.log(`${persent}% [${bar.join('')}]`)
}

loadBar(30);
loadBar(50);
loadBar(100);