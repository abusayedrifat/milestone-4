// function Name(parameter){
//     ...............
//     ...............
//     ...............
//     ...............
// }
// Name()//call the function

//--------------------------------------------------------

// function fanOffKor() {
//     console.log('bosa theke utho');
//     console.log('switch er kache jao');
//     console.log('switch chapo');
// }
// fanOffKor();

//--------------------------------------------------
//parameter

function square(number){
    console.log('value of the parameter', number);
    const borgo = number**2;
    console.log('borgo of the number:' ,borgo);
}
square(5);
square(8);
square(12);
square(19);

function addition(num1, num2, num3) {
    const result = num1+num2+num3;
    console.log('addition result :', result);
}
addition(1,2,3)

//what would happen if i don't put a value. in output it will show NaN.

function multiplication(num1, num2, num3) {
    const result = num1*num2*num3;
    console.log('multiplication result is :', result);
}
multiplication(1,2,5)