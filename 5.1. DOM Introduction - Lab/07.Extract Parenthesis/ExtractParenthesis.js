function extract(content) {
    let c = document.getElementById(content).textContent;
    let pattern = /\((.+?)\)/g;
    let match = pattern.exec(c);
    let result = [];
    while (match) {
        result.push(match[1]);
        match = pattern.exec(c);
    }
    return result.join("; ")
}