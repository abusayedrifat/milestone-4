// find the maximum price of a phone 
const mobilePhones =[
    {name: 'samsung', price: 120000 , camera :'200mp', color:'white' },
    {name: 'Nokia', price: 40000 , camera :'20mp', color:'blue' },
    {name: 'Oppo', price: 25000 , camera :'50mp', color:'offWhite' },
    {name: 'Redmi', price: 15000 , camera :'120mp', color:'black' },
    {name: 'xiaomi', price: 23000 , camera :'48mp', color:'mendarin' },
    {name: 'iphone', price: 150000 , camera :'100mp', color:'olive' }

]

function getHighPrice(mobiles) {
    let min = mobiles[0];
 for (const mobile of mobiles) {
    if (mobile.price > min.price) {
        min = mobile;
    }

 }
return min;
}
const highest = getHighPrice(mobilePhones);
console.log(highest);

