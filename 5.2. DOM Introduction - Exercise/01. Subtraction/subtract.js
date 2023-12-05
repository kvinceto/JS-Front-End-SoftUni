function subtract() {
    const first = document.getElementById("firstNumber");
    const second = document.getElementById("secondNumber");

    const result = Number(first.value) - Number(second.value);
    const res = document.getElementById("result");
    res.textContent = result;
}