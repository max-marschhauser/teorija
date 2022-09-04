ARRAY METHODS
reduce() --> smanji array u jednu vrijednost, od lijevo do desno. Uzima dva parametra, prvi je funkcija, a drugi je početna 
vrijednost total parametra. Funkcija uzima dva parametra, jedan je total, a drugi je ono što računamo. 
npr. const totalPrice = items.reduce((total, item) => { 
   return total + item.price
 }, 0)

2.primjer
const ageSum = ages.reduce(function(total, age) {
   return total + age
}, 0);

kraće
const ageSum = ages.reduce((total, age) => total + age, 0);

filter() --> vrati samo elemente arraya koji bi na upit odgovorili s true
npr. const filtered = numbers.filter(n => n >= 0);


map() --> stvara novi array od trenutnog arraya ili objekta, koristan kad se žele koristiti dijelovi jednog arraya ili objekta u novom arrayu
npr. const companyNames = companies.map(function(company) {
   return company.name;
})
npr. const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

sort() --> uzme dvije varijable, uspoređuje ih i sortira elemente arraya
npr. const byMass = characters.sort((a, b) => {
   return a.mass - b.mass;
}); 
--> ako želim da se poredaju u suprotnom redu onda se stavi b.mass - a.mass

flat() --> kod nested arraya dovodi do izravnavanja, npr. [a, [b]] postane [a, b], arraji se povišavaju za onoliko razina koliko se postavi

MOGUĆ I CHAINING FUNCKIJA
const items = numbers
    .filter(n => n>= 0)
    .map(n => ({ value: n }));    

--> funckija u mapi se ovako piše jer se želi dobiti objekt, tada se dodaju vanjske zagrade jer inače kod zagrade od objekta percepira kao zagrade od neke nove funkcije.


SPLICE
array.splice() --> remova elemente arraya, može removati bilo gdje u arrayu i bilo koju količinu elemenata. Uzima 2 ili 3 argumenta. 
1. argument kaže s kojim elementom treba početi, a drugi argument govori koliko elemenata treba maknuti. 
3. argument govori što treba staviti umjesto elemenata koji su removani. npr.
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);

SLICE
array.slice() --> za razliku od splice koji briše elemente arraya, slice ih samo kopira u novi array, ostavljajući stari array netaknutim. 
Uzima dva argumenta, prvi je index početnog elemeta, a drugi je index prije kojeg treba završiti, ali ne uzeti i njega. 

kombinaciom slicea i spread operatora može se jako lagano kopirati cijeli array
newArr.push([...arr]);

indexOf() --> vraća poziciju (index) elementa arraya ukoliko postoji u njemu, a ako ne postoji onda vraća -1

fruits.indexOf('dates');