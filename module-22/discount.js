/**
 * upto 100 ---> 100
 * 101 t0 200 ---> 90
 * more than 200 ----> 80
 
 */

function discount(quantity) {
    if (quantity <= 100) {
        const price = 100*quantity;
        return price
    }
     else if(quantity <= 200) {
        const price = 90*quantity;
        return price;
    }
    else{
        const price = 80*quantity;
        return price;
    }
}
const total = discount(101);
console.log(total);



