//  string comparison
// .toLowerCase() , .toUpperCase() and .trim()
// | for string charecter case |     |for string blank-space  |


const school = "Bancharapur s.m. pilot model high school";
// console.log(school);


// const book = "Chemistry";
// const subject = "chemisTRY";
// if (book === subject) {
//     console.log('poira fatai felmu');
// } 
// else {
//   console.log('kichui kormu na');  
// }

//  output e amra dekhtechi je," book === subject" na karon ekhane "string" e sob charectar same na thakay. er jonno amra ".toUpperCase()" and ".toLowerCase()" use korbo

const book = "Chemistry";
const subject = "chemisTRY";
if (book.toLowerCase() === subject.toLowerCase()) {
    console.log('poira fatai felmu');
} 
else {
  console.log('kichui kormu na');  
}
//ekhon amra console e dekhte pabo je "book === subject" dekhaiteche.

//trim

const Name = '  water ';
const Name2 = 'water     ';

if (Name.trim() === Name2.trim()) {
    console.log('we drink sweet water');
} 
else {
  console.log("we don't drink salt water");   
}