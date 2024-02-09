//while loop
// let num = 0;//loop variable
// while (num < 5) {
//     console.log('loop', num);
//     num += 1
// }
//----------------------------------

let num = 1;
let sum = 0;
while (num <=10 ) {
    console.log(num);
    sum = sum+num ;
    console.log('sum :',sum);
    
    // we can also add even number
    if (num % 2 === 0) {
        console.log('even number ;', num);
    }
    num++
}