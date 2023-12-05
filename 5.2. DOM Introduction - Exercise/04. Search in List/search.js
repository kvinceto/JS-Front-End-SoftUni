function search() {
   const text = document.getElementById("searchText").value;
   const listItems = Array.from(document.querySelectorAll("li"));
   const result = document.getElementById("result");
   result.textContent = "";
   let n = 0;
   for (let index = 0; index < listItems.length; index++) {
      const element = listItems[index];
      if (element.textContent.includes(text)) {
         element.style.textDecoration = "underline";
         element.style.fontWeight = "bold";
         n++;
      } else {
         element.style.textDecoration = "none";
         element.style.fontWeight = "100";
      }
   }
   result.textContent = `${n} matches found`;
}
