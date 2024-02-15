
//minimum value ber korar jonno kono ekta value ke set kore niye oita sathe compare korbo "for loop" chalanor maddhome with conditon.

const prices =[12000, 13500, 16799, 40599, 11000, 120000]

function getMin(numbers) {
   let mobilePrice = numbers[0];
    for (const min of numbers) {  
        if (min < mobilePrice) {
            mobilePrice = min;
        }
    }
return mobilePrice;
}
const minPrices = getMin(prices);
console.log('lowest price of phone is : '+ minPrices+' taka');





