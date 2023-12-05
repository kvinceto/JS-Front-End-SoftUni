function calc() {
    const firstNum = Number(document.getElementById('num1').value);
    const secondNum = Number(document.getElementById('num2').value);
    let sum = firstNum + secondNum;

    const result = document.getElementById('sum');
    result.value = sum;
}
