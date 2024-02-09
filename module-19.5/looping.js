/*
1.while loop
2.do while loop
3.for loop
4.for of - array looping
5.for in - onject looping

*/

const friends =['elon', 'bill', 'mark', 'warren']
for(let friend of friends){
    // console.log(friend);
}

for(let i = 0 ; i < 10 ; i++){
    console.log(i);
    console.log(friends[i]);
}
for(let i = 0 ; i < friends.length ; i++){
    console.log(i);
    console.log(friends[i]);
}


