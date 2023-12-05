function editElement(ref, textToReplace, replacer) {
    const content = ref.textContent;
    const newText = content.replace(new RegExp(textToReplace, 'g'), replacer);
    ref.textContent = newText;
}