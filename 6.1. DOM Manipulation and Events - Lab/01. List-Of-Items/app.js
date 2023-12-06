function addItem() {
    const input = document.getElementById("newItemText");
    let text = input.value;
    const ul = document.getElementById("items");
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
    input.value = "";
}