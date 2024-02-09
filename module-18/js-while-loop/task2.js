// "Display sum of all the odd numbers from 81 to 131."

// using for loop
// let sumOfOdd = 0;
//     for (let i = 81; i <= 131 ; i+= 2 ) {
//        sumOfOdd += i;
//     }
//    console.log(sumOfOdd);

//using while loop

let sum = 0;
let numStart = 81;
while ( numStart <= 131) {
   if (numStart % 2 == 0 ) {
      sum += numStart
   }
   numStart++
}
console.log(sum);