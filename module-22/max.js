const heigth = [58, 67, 66, 78, 89, 65, 56]
function getMax(numbers) {
    let max = numbers[0];
    for(const num of numbers){
        
        if (num > max) {
            max = num;
            
        }
    }
    return max
}
const maximum = getMax(heigth);
console.log('maximum height is : ',maximum);



