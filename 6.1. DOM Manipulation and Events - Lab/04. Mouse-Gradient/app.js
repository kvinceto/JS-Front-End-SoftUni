function attachGradientEvents() {
    const gradient = document.getElementById("gradient");
    const result = document.getElementById("result");
    gradient.addEventListener('mousemove', calc);

    function calc(e) {
        let power = e.offsetX / (e.target.clientWidth - 1);
        // Convert the relative position to a percentage by multiplying it with 100
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";
    }

    gradient.addEventListener('mouseout', clear);

    function clear(e) {
        result.textContent = "";
    }
}