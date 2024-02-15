//task-1
//Take four parameters. Multiply the four numbers and then return the result

function Multiply(num1, num2, num3, num4){
     const result = num1*num2*num3*num4;
     console.log(result);
     return result
}
Multiply(4, 5, 6, 3);


//task-2 
//Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function oddEven(number) {
     if (number % 2 === 0) {
          const result = number/2;
          console.log(result + ' . the input number was even');
          return result;
     } 
     else {
          const result = number*2;
          console.log(result + ' . the input number was odd');
          return result ;   
     }
}
oddEven(35)



//task-3
//Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr) {

     const len = nums.length;
     console.log('array length is = '+ len);

     let sum = 0;
     for(const numbers of arr){
       sum = sum + numbers;
     }
     const average = sum / len;
     console.log('avg. of arrays elements is = ' + average);
     return [average,len];
}
const nums = [2, 3, 4, 8, 7, 8, 9 , 10];
make_avg(nums)



// task- 4
//Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(binary, zero) {
 const Zeros = binary.filter(binary => binary === zero)

     const totalZeros = Zeros.length;
     console.log ('total zero of that binary array is = ', totalZeros , Zeros);
     return totalZeros;
}
const targetZero = 'rifat';
const binaryNumbers = [0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 'rifat','rifat','rifat','rifat', 'emon', true, true, true, false, true, false]
count_zero(binaryNumbers , targetZero)