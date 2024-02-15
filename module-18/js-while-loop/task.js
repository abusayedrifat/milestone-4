//"i will invest at least 6 hours every single day next 6 months" display this line 60 times

 let sentence = 0;
while (sentence < 60) {
    console.log("i will invest at least 6 hours every single day next 6 months");
    sentence++
}

//------------------------------------------------------------------------------------------------------------

// find all odd numbers between 61 to 100

let numStrat = 61;
while (numStrat <=  100) {
    if (numStrat % 2 !==0) {
        console.log('odd number is :' , numStrat);
    }
    numStrat++ //updates number and go to the loop again and again until condition meets. when conditon doesn't meet then it stops the loop
}
// for even numbers

let numSt = 61;
while (numSt <=  100) {
    if (numSt % 2 == 0) {
        console.log('even number is :' , numSt);
    }
    numSt++ //updates number and go to the loop again and again until condition meets. when conditon doesn't meet then it stops the loop
}

//--------------------------------------------------------------------------

