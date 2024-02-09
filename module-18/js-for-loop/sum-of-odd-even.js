let sumEven = 0;
for(let i = 1 ; i <= 100 ; i++ ){
    if (i % 2 == 0) {
        sumEven += i;
    
    }
   
} 
console.log('sum of even numbers',sumEven)

//for odd numbers

let sumOdd = 0;
for(let i = 1 ; i <= 100 ; i++) {
    if (i % 2 !== 0) {
        sumOdd += i;
    }
}
console.log('sum of odd numbers :',sumOdd);