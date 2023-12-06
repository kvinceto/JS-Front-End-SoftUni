function addItem() {
    //Add
    const input = document.getElementById("newItemText");
    let text = input.value;
    const ul = document.getElementById("items");
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);
    input.value = "";

    //Delete
    const aTag = document.createElement("a");
    aTag.href = '#';
    aTag.textContent = "[Delete]";
    li.appendChild(aTag);

    aTag.addEventListener('click', deleteRow);

    function deleteRow(e) {
       const li = this.parentElement;
       li.parentElement.removeChild(li);
    }
}