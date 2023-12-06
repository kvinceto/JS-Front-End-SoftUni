function solve() {
   const addBtns = Array.from(document.querySelectorAll("button.add-product"));
   const textArea = document.querySelectorAll("textarea")[0];
   addBtns.forEach(b => {
      b.addEventListener('click', addProduct)
   })
   let sum = 0;
   let set = [];
   function addProduct(e) {
      const product = this.parentElement.parentElement;
      const name = product.querySelectorAll(".product-title")[0].textContent;
      const price = Number(product.querySelectorAll(".product-line-price")[0].textContent);
      textArea.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      if (!set.includes(name)) {
         set.push(name);
         sum += price;
      }
   }

   const checkoutElement = document.querySelectorAll("button.checkout")[0];
   checkoutElement.addEventListener('click', solve);

   function solve(e) {
      textArea.textContent += `You bought ${set.join(', ')} for ${sum.toFixed(2)}.`;
      addBtns.forEach(b => {
         b.removeEventListener('click', addProduct)
      })
   }
}