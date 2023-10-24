
function calculateOrder(product, quantity) {
    function getPrice(product) {
        let price;

        switch (product) {
            case 'coffee': price = 1.50; break;
            case 'water': price = 1.00; break;
            case 'coke': price = 1.40; break;
            case 'snacks': price = 2.00; break;
        }

        return price;
    }

    let result = getPrice(product) * quantity;
    console.log(`${result.toFixed(2)}`)
}


let product = 'water';
let quantity = 5;

calculateOrder(product, quantity);

product = 'coffee';
quantity = 2;

calculateOrder(product, quantity);