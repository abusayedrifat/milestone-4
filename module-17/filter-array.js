function filter( numbers){

 const filterNumbers = numbers.filter(numbers => typeof numbers === 'number') ;
 const len = filterNumbers.length;
 console.log(filterNumbers, len);
 return [filterNumbers, len]
}
const nums = [93,2,84,2,3,4, 'rifat', 'emon', 'hasib', -345, 0 , true, false]
filter(nums)