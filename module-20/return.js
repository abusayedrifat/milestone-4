// function tenTimes(number) {

//     const result = number *10;
//     return result
    
// }
// tenTimes(5);
// const output = tenTimes(5);
// console.log(output);

//-----------------------------------------------

//assignment prblm soln- 1
function calculateMoney(totalTicket , gaurd, stuff){
    if (totalTicket< 0 ) {
        const msg = 'Invalid input';
        return msg;
    }
    else if (gaurd < 0){
        const msg = 'Invalid input';
        return msg;
    }
    else if (stuff < 0){
        const msg = 'Invalid input';
        return msg;
    }
    else{
    const result = (totalTicket*120) - gaurd - (stuff*8);
     return result;
    }
}
calculateMoney(10 , 500, 50);

// const result = calculateMoney(10, 500, 50);
// console.log(result);


// assignment prblm soln- 2

function checkName(Name) {

    Name = Name.toLowerCase();

    const checkLetter = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    const lastLetter = Name.charAt(Name.length - 1);

     if (checkLetter.includes(lastLetter)) {
        return "good name"
     } 
    
     else{
        return "bad name"
     }
    
  }

  checkName('rifat')



  //problem - 3

  function deleteInvalids(arrays) {
    return arrays.filter( arrays => typeof arrays == "number")
}
deleteInvalids([23, 234, 9, 98, 324, 'rifat', 'nehan', 'ifraim', 'shehjad'])



// problem-4

function password(data){
    data ={
        Name: 'kolimoddin',
        birth: 1999,
        website: 'google'
     }
 const password = data.website+"#"+data.Name+ "@" +data.birth;
 return password;
}
password();

// problem 5 