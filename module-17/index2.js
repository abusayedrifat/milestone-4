// যদি ৩০০০ টাকার কেনাকাটা করে তাহলে ১২% ছাড় আর যদি ২৫০০ টাকার কেনাকাটা করে তাহলে ৭% ছাড়
const price = 3500 ;
if (price >= 3000) {
    const offerPrice = price*0.12;
    const paybleAmount = price - offerPrice;
    console.log(paybleAmount);
}
else if (price >=2500 && price < 3000) {
    const secondOfferPrice = 250 ;
    const payable = 2500 -250 ;
    console.log('payable amount is' + payable +'tk');
    console.log('you saved'+secondOfferPrice+'tk');
} 
else{
    console.log('your payable amount is' + price +  'tk');
    console.log('we are sorry to say that you got no offer');
}