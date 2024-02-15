const mobiles =[
    {name: 'samsung', price: 120000 , camera :'200mp', color:'white' },
    {name: 'Nokia', price: 40000 , camera :'20mp', color:'blue' },
    {name: 'Oppo', price: 25000 , camera :'50mp', color:'offWhite' },
    {name: 'Redmi', price: 15000 , camera :'120mp', color:'black' },
    {name: 'xiaomi', price: 23000 , camera :'48mp', color:'mendarin' }

]

function getCheapestPhone(phones) {
    let minimum = phones[1];
   for (const phone of phones) {
    if (phone.price < minimum.price) {
        minimum = phone;
    }
   }
   return minimum;
}
const cheap = getCheapestPhone(mobiles);
console.log('chepest mobile phone is: ',cheap);

