function toggle() {
    const span = document.getElementsByClassName("button")[0];
    const textArea = document.getElementById("extra");
    if (span.textContent === "More") {
        span.textContent = "Less";
        textArea.style.display = "block";
    } else {
        span.textContent = "More";
        textArea.style.display = "none";
    }
}