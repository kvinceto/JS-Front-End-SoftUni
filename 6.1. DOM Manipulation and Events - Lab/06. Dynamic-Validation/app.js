function validate() {
    const input = document.getElementById("email");
    input.addEventListener('change', change)

    function change(e) {
        const text = this.value;
        let regex = new RegExp(/[a-z]+@[a-z]+\.[a-z]+/gm);
        if (!regex.test(text)) {
            input.classList.add("error");
        } else {
            input.classList.remove("error");
        }

        this.value = "";
    }

}