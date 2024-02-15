

const student = {
    name: 'abu sayed rifat',
    id: 2210227103,
    address: 'binodpur, Rajshahi',
    friends:['shawon', 'sourav', 'kawsar', 'minhaz', 'emran', 'sifat'],
    act: function(num) {
        multiply = num**3;

        return console.log(multiply);
    },
    cycle: {
        brand: 'Voyger',
        price: 9000,
        feature: 'paddel',
        manufacturer: {
            name: 'shimano',
            ceo: 'xijingpao chii',
            address: 'china'
        }
    }

}
// console.log(student.act(2));
student.act(4)



