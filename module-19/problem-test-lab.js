// const sent = 'I am learning Programming to become a programmer';
// const words = sent.split(' ');//using empty qoute with sapce it split in words.
// console.log(words);


function longWrd(string){

    let words = string.split(' ');
    let wordsLen = words.map(word => word.length);
    // console.log(wordsLen);
    return wordsLen

}
const string = 'I am learning Programming to become a programmer';
const lgWrd = longWrd(string);
console.log(lgWrd);

const longestWord = Math.max(...lgWrd);


console.log(longestWord);


