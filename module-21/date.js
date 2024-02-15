const today = new Date();
const date = new Date('2029-10-09');
console.log(date.getMonth());
console.log(date.getDay());
const specificDate = new Date(2091, 0 , 26);
console.log(specificDate);
specificDate.setMonth(10);
console.log(specificDate.toLocaleDateString("en-BG"));

// unix epoc( comapre two diffrent time)






