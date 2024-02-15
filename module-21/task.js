// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function FerhToCel(fahrenheit) {
    // const nums = [];
    const celci = []
    for(const number of fahrenheit){
        // nums.push(number);
        const celcius = (number - 32)/5;
        console.log(celcius+'C');
        celci.push(number)
    }
    
    return celci
   
}
const multiFerh = [34,324,92,3049]
const result = FerhToCel(multiFerh);
console.log(result);

//----------------------------------------------------------


// Task-2:
// You are given an array of numbers. Count how many times a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// function repeat(numbers){
//     const filter = numbers.filter( nums => nums === targetNum)
//    const countLen = filter.length;
// //    console.log(countLen);
//    return countLen;
// }
// const targetNum = 5;
// const nums = [5,6,11,12,98, 5];
// const count = repeat(nums);
// console.log('here "'+ targetNum+ '" repeated '+count+ ' times');
//====================================================
function repeat(numbers){
   
    if (numbers.includes(25) === true) {
        const countLen = numbers.length;
        console.log(countLen);
    }
   
//    console.log(countLen);
   return
}
const nums = [5,6,11,12,98, 5];
const count = repeat(nums);
// console.log('here "'+ targetNum+ '" repeated '+count+ ' times');

//-----------------------------------------------------------------------------

//task-3
// const sentence = 'human resource management is an interrelated and integrated functions, proceses and systems that focus on the effective utilization of people working in an organization.'


function vowels(string) {
    let vowel = 'a,e,i,o,u';
    let countVowel = string.split('').filter( string => vowel.includes(string)).length;
    console.log(countVowel);
    return countVowel;
     
 }

// const string = 'human resource management is essential part of an organization.'
const string = 'how are you?'
const totalVowel = vowels(string.toLowerCase());
console.log('total vowel in that string is = ', totalVowel);

