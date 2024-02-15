
// how can we reove duplicate  items in an array
// .includes() diye amra check korte pari kono ekta upadan oi array te ache kina. jodi thake tahole 'true' r na thakle 'false'.
// ekhane jeheto amra duplicate item gula abad dibo tai ekhane condition er maddhome check kore dekhte hobe je oi upadan gula nai kina. jodi na thake tahole include korbe.

function removeDuplicate(arr) {
        const container = [];
       for (const Name of arr) {
        // container.push(Name);
        // console.log(Name);
        if (container.includes(Name) === false) { // ekhane jeheto container e oi upadanta nai seheto false. false hoyay etake amra include korbo r jodi true hoy tar mane oi array already upadanta ache tai eta nibo na. r emon kore continue loop cholbe.
            container.push(Name);
            console.log(Name);
         }
       }
 return container;
}
const peoples = ['rifat', 'emon', 'hasib', 'sourav', 'rifat', 'sifat','emon', 'rifat'];
const see = removeDuplicate(peoples);
console.log(see);