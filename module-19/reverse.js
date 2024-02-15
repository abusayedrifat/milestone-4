 const sentence = 'i love Bangladesh and this is my motherland';
let reverse ='';
 for(const letter of string){
    // console.log(letter);
    reverse = letter + reverse;

 }
//  console.log(reverse);

//another process of making reverse
let rev = '';
for(let i = 0; i < string.length ; i++){
    const letter = string[i];
    rev = letter+rev;  
}
// console.log(rev);
//-------------------------------------------------------------

const reversed = string.split('').reverse() ;
console.log(reversed);