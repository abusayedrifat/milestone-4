function oddAvg(avg) {
    odds= [];
   for(const oddNumbers of avg){
    if (oddNumbers % 2 == 1) {
       
        // console.log(oddNumbers);
        odds.push(oddNumbers)
     }
   }
   let sum = 0;
   for(const number of odds){
    console.log(number);
        sum = sum + number;
       console.log( sum);
       
   }
   const len = odds.length;
   const average = sum / len;
 return average;
}
const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const avgfOdds = oddAvg(arr);
console.log('average of odd numbers from array = ', avgfOdds);

