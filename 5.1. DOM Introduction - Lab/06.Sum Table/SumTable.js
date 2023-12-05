function sumTable() {
    let sum = 0;
    const rows = document.querySelectorAll("tr");
    let n = 0;
    for (const r of rows) {
        n++;
        if (n === 1) {
            continue;
        }

        const data = Number(r.children[1].textContent);
        sum += data;
    }

    const last = rows[rows.length - 1].children[1];
    last.textContent = sum;
}