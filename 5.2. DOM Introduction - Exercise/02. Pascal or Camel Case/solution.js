function solve() {
  const text = document.getElementById("text").value;
  const convention = document.getElementById("naming-convention").value;
  let result = "";

  if (convention === "Camel Case") {
    let words = text.toLowerCase().split(" ");
    let n = 0;
    for (let word of words) {
      n++;
      if (n === 1) {
        result += word;
        continue;
      }

      let [char, ...rest] = word.split("");
      char = char.toUpperCase();
      word = char + String(rest.join(""));
      result += word;
    }

  } else if (convention === "Pascal Case") {
    let words = text.toLowerCase().split(" ");
    for (let word of words) {
      let [char, ...rest] = word.split("");
      char = char.toUpperCase();
      word = char + String(rest.join(""));
      result += word;
    }
  } else {
    result = "Error!";
  }
  const res = document.getElementById("result");
  res.textContent = result;
}