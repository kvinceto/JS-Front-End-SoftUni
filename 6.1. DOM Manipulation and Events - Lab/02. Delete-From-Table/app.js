function deleteByEmail() {
    const inputElement = document.querySelectorAll("input")[0];
    let text = inputElement.value;
    const resultElement = document.getElementById("result");
    resultElement.textContent = "";
    const rows = document.querySelectorAll("tbody tr td");
    const arr = Array.from(rows);

    let isDeleted = false;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element.textContent === text) {
            const row = element.parentNode;
            row.parentNode.removeChild(row);
            isDeleted = true;
            break;
        }
    }
    if (isDeleted) {
        resultElement.textContent = "Deleted.";
    } else {
        resultElement.textContent = "Not found.";
    }

    inputElement.value = "";
}