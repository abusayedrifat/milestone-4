 const sentence = 'i love Bangladesh and this is my motherland';
let reverse ='';
 for(const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;

 }
//  console.log(reverse);

//another process of making reverse
let rev = '';
for(let i = 0; i < sentence.length ; i++){
    const letter = sentence[i];
    rev = letter+rev;  
}
// console.log(rev);
//-------------------------------------------------------------

const reversed = sentence.split('').reverse() ;
console.log(reversed);