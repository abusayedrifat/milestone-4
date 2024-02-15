// layered discount dhorlam, 1st 50 unit  sobsomoy 100tk korei bikri hobe. jodi 100 ta ney tahole 90 kore kintu 1st 50 er jonno price 100 tk e thakbe baki 50 unit er jonno pricr 90 kore hobe.

/**
 * 1st 50 unit --> 100tk
 * 2nd 100 unit --> 90 tk;
 * 3rd 200 unit --> 80tk
 */

function layeredDiscount(quantity) {
    // firstAmount = 100;
    // secondAmount = 90;
    // thirdAmount = 80;
    if (quantity <= 50) {
        const firstUnitPrice = 100*quantity;
        return firstUnitPrice;

    } 
    else if(quantity <= 150) {
        const firstUnit = 50
        const secondUnit = quantity - 50;
        const secondUnitPrice = firstUnit*100 + secondUnit*90;
        return secondUnitPrice
    }
    else if(quantity <= 300) {
        const firstUnit = 50;
        const secondUnit = 100;
        const thirdUnit = quantity -firstUnit- secondUnit;
        const thirdUnitPrice = firstUnit*100+secondUnit*90+ thirdUnit*80;
        return thirdUnitPrice
    }
    else {
        const firstUnit = 50;
        const secondUnit = 100;
        const thirdUnit = 150;
        const fourthUnit = quantity - firstUnit- secondUnit- thirdUnit;
        const fourthUnitPrice = firstUnit*100+secondUnit*90+thirdUnit*80+fourthUnit*60;
    return fourthUnitPrice;
    }
}
const totalPrice = layeredDiscount(200);
console.log(totalPrice);