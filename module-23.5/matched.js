const products =[
    {id:1, name:'xiaomi phone', price:16000},
    {id:2, name:'iphone', price:160000},
    {id:3, name:'samsung phone', price:40000},
    {id:4, name:'lenovo laptop', price:123000},
    {id:5, name:'MSI laptop', price:230000},
    {id:6, name:'samsumg s24 Ultra phone', price:150000},
    {id:7, name:'daimond set', price:6500050},
    {id:8, name:'tesla model3', price:5050000},
    {id:9, name:'one+ Phone', price:70000}
]
// for(const i = 0; i<){

// }

// for (const product of products) {
//     console.log(product);
// }

function matchedProducts(products , search) {
    const matched = []
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product)
        }
    }
 return matched
}
const result = matchedProducts(products, 'laptop');
console.log(result);



