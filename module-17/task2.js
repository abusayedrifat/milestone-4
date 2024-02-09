// grade
var marks = 50 ;
if (marks >= 0 && marks < 40) {
    console.log('failed');
}
else if (marks >= 40  &&  marks <= 49 ){
    console.log('C');
}
else if (marks >= 50    &&  marks <= 59 ){
    console.log('B');
}
else if (marks >= 60   &&  marks <= 69 ){
    console.log('-A');
}
else if (marks >= 70   &&  marks <= 79 ){
    console.log('A');
}
else if (marks >= 80   &&  marks <= 100 ){
    console.log('A+');
}
else{
    console.log('recheck your marks');
}