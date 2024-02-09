//BMI calculator 
var weight = 45 ;
var height = .56 ;
var BMI = weight / height**2

if( BMI >= 8 && BMI < 18.5){
    console.log('under weight');
}
 else if (BMI >= 18.5 && BMI <= 24.9 ) {
    console.log('healthy weight');
}
else if ( BMI >= 25  && BMI <= 29.9) {
console.log('over weight');
}
else if( BMI >= 30 && BMI <= 34.9){
    console.log('obess step 1');
}
else if( BMI >= 35 && BMI <= 39.9){
    console.log('obess step 2');
}
else if( BMI >= 40 && BMI <= 44.9){
    console.log('obess step 3 and high risk of death');
}
else{
    console.log('you may check your data properly. is it correct or not')
}
