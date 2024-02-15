// function password(data){
//  const password = data.website+"#"+data.Name+ "@" +data.birth;
//  console.log(password);
// }

// password(data);

// const data ={
//     Name:'kolimoddin',
//     birth:1999,
//     website:'google'
// }
//for in loop used for object
// for(const n in data){
//     console.log(`keys : ${n} | values : ${data[n]}`);
// }

// const arr =
//  // for of loop used for array
//  for(const m of arr){
//     if (arr === 'number') {
//      console.log(arr);
//         return arr
//     }
//  }

// function checkInvalids(arr){

//     const output = [];
//     for(const arrays of arr){
//      if (typeof arrays === 'number') {
//          output.push(arrays);
//        }
//     }
     
    
// return output
// }
// const arra =[29 ,38, 47, 'rifat', 'emon', 'arju', 'sifat', -34];
// console.log(checkInvalids(arra));

function password(data){
    data ={
        Name: 'kolimoddin',
        birth: 1999,
        website: 'google'
     }
 const password = data.website+"#"+data.Name+ "@" +data.birth;
 return password;
}


