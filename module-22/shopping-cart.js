const products = [
    {name: 'shirt' , price:500, quantity:4 },
    {name:'pant'  , price: 800, quantity:2 },
    {name: 'jacket' , price: 1200, quantity:1},
    {name: 'belt' , price: 300, quantity:1 }
]
function cartTotal(products) {
     let sum = 0;
    for (const product of products) {
        sum = sum + product.price*product.quantity
    }
    return sum;
}
const total = cartTotal(products);
console.log ('your total payable price is: '+ total+ ' taka');