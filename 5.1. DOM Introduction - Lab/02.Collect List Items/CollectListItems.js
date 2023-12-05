function extractText() {
    const items = document.querySelectorAll('li');
    let result = [];
    for (const iterator of Array.from(items)) {
        let text = iterator.textContent;
        result.push(text);
    }

    const textArea = document.getElementById('result');
    textArea.textContent = result.join('\n');
}