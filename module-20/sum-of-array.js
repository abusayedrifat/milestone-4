//promlem solve korar somoy step by step korte hobe ebong code chaliye dekhte hobe
// tahole code er vul dhorte subidha hobe

// sum of an array

// function sumOfnumbers(numbers) {
//     let sum =0 ;
//     for(const number of numbers){
//         console.log(number);
//        sum = sum+number;
       
//     }
//     return sum
// }
// const nums = [1, 2, 3, 4, 5];
// const result = sumOfnumbers(nums);
// console.log(result);



// sum the odd numbers of array

function sumOfOdd(numbers){
    let sum = 0 ;
 for(const number of numbers){
    
     if (number % 2 == 1) {
        console.log(number);
        sum = sum + number  
       }
 }
 return sum;
}
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const result = sumOfOdd(nums);
console.log(result);
