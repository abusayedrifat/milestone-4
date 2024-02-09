const versity = {
    name: 'ru',
    dept: 'pshrd',
    events: ['science fair', 'cricket', 'football'],
    unique:{
        area : '753acre',
        environment:{
            stadium: true,
            gymnasium: true,

        }
    }
}
// versity.name = 'ruet';
// console.log(versity.unique.environment);
// console.log(versity['unique'].environment);
// console.log(versity['unique']['environment']);
delete versity.dept
console.log(versity);

