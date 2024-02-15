function inchToFt(inch){
// 1 feet = 12 inch
const feet = parseInt(inch / 12);
const inchRemainder = inch % 12;
console.log(feet+' ft '+ inchRemainder+ ' inch ');
return [feet, inchRemainder]

}

const rifatHeight = inchToFt(180);

//--------------------------------------------------------

function mileToKm(km){
// 1 mile = 1.6 km

const mile = parseInt(km /1.6);
const meter = km % 1.6 ;
const points = meter.toFixed(2);

console.log(mile+'mile '+points+'mt.');
return [mile, points]

}
mileToKm(49.8)

