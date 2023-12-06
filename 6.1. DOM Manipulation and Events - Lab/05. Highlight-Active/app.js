function focused() {
    const divs = Array.from(document.querySelectorAll("div input"));
    divs.forEach(d => {
        d.addEventListener('focus', focus);
        d.addEventListener('blur', blur)
    })

    function focus(e) {
        const div = this.parentElement;
        div.classList.add("focused");
    }

    function blur(e) {
        const div = this.parentElement;
        div.classList.remove("focused");
    }
}