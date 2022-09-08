ARRAY METHODS

- metode se mogu spajati, npr.
let numberArray = [1, 2, 3, 4, 5];
let returnValue = numberArray
	.map((num) => num * 2)
	.map((num) => toString())
	.map((string) => "$"+string);


//MIJENJANJE SADRŽAJA ARRAYA


pop() --> makne zadnji element arraya --> fruits.pop();

push() --> dodaje element na kraja arraya --> fruits.push("Kiwi");

shift () --> makne prvi element arraya i shifta sve elemente za jedno mjesto unaprijed --> fruits.shift();

unshift() --> dodaje element na prvo mjesto arraya --> fruits.unshift("Lemon");

splice() --> briše dijelove arraya i dodaje nove na njihovo mjesto
1. argument kaže s kojim elementom treba početi
2. argument govori koliko elemenata treba maknuti. 
3. argument govori što treba staviti umjesto elemenata koji su removani. 
npr.
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);

slice() --> kopira dio arraya u novi array, ostavlja stari array netaknutim
1. argument kaže s kojim elementom treba početi,
2. argument ja index prije kojeg treba završiti (njega neće uzeti)
npr.
const citrus = fruits.slice(1, 3);

copyWithin() --> Kopira sadržaj jednog dijela arraya na drugi dio arraya, stari elementi se obrišu, ne stvara nove elemente
1. argument kaže na koji index da se kopira (ako je negativan onda se 
  gleda od kraja arraya)
2. argument početak dijela koji se kopira (optional)
3. argument kraj dijela kojeg se kopira (optional)

fill() --> promjeni dijelove arraya novim sadržajem, mijenja originalni array, ako se ne specificira početna i završna točna onda 
po defaultu ide od početka do kraj arraya --> fruits.fill("Kiwi", 2, 4);


//STVARANJE ARRAYA


concat() --> spaja dva arraya u novi array, ne mijenja stare arraye --> const nesto = arr1.concat(arr2, arr3);

Array.of() --> stvara array, a argumenti su dijelovi arraya --> Array.of(7); // [7]

from() --> stvara array od bilo kojeg objekta koji ima length (npr. string) --> Array.from("ABCDEFG");


//STVARANJE STRINGA OD ARRAYA


toString() --> konvertira array u String, itemi su odvojeni sa zarezom --> fruits.toString();

join() --> spaja sve dijelove arraya u String, ali se sada može navesti što će se nalaziti između njih u stringu --> fruits.join(" ");


//SORTIRANJE


sort() --> sortira elemente arraya --> fruits.sort();
sort radi na principu sortiranja stringova, ako se želi uspoređivati 
brojeve mora se koristiti funkcija
npr.
let result = brojevi.sort(function(a, b){return a - b});

reverse() --> obrne elemente arraya, prvi postane zadnji, drugi 
predzadnji... --> fruits.reverse();


//PRETRAŽIVANJE ARRAYA


indexOf() / lastIndexOf() --> vraća poziciju (index) elementa arraya ukoliko postoji u njemu, a ako ne postoji onda vraća -1. 
Ako se element ponavlja više puta onda vraća prvu / posljednju poziciju.

fruits.indexOf('dates');

incluces() --> vraća true ako se element nalazi u arrayu (za razliku   od indexOf, ovdje se može pronaći i NaN) --> fruits.includes("Mango");

at() --> uzme broj i vrati element arraya koji se nalazi na toj poziciji (slično kao bracket notation), ako se postavi negativan 
broj onda gleda pozicije od kraja --> arr.at(-1);

flat() --> stvara novi array koji sve nested arraye povećava na višu razinu, broj govori koliko će se razina povećati (default je 1)
npr.
const arr = [0, 1, 2, [[[3, 4]]]];
console.log(arr.flat(2)); --> expected output: [0, 1, 2, [3, 4]]


//ARRAYI KOJI ZAHTJEVAJU FUNKCIJU


forEach() --> pozove funkciju jednom na svaki elementa arraya, ne vraća array niti mijenja dijelove arraya
npr.
const numbers = [45, 4, 9, 16, 25];
let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value + "<br>";
}

map() --> stvara novi array od trenutnog tako što odradi funkciju na svakom elementu arraya, ne mijenja stari array
npr.
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

function myFunction(value) {
  return value * 2;
}

flatMap() --> isto kao da se prvo napravio map(), a onda flat(), samo malo brže --> const flattened = arr.flatMap(num => num);

filter() --> stvara novi array s elementima arraya koji bi na upit funkcije odgovorili s true
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

reduce() / reduceRight() --> ponavlja funkciju dok se array ne smanji na samo jednu vrijednost.
1. argument funkcije kaže koja je total vrijednost,
2. argument funkcije govori koji je value onogo što se računa.
Rade s lijeva na desno ili s desna na lijevo.
npr. 
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction, 100);

function myFunction(total, value) {
  return total + value;
}

every() --> vraća true ako svaki element arraya odgovara funkciji
npr.
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}

some() --> vraća true ako neki element arraya odgovara funkciji
npr.
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value) {
  return value > 18;
}

find() / findIndex() --> vraća vrijednost / poziciju prvog elementa koji pozitivno udovoljava funkciji
npr.
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value) {
  return value > 18;
}


//RAZNO


Array.isArray() --> vraća true ako je objekt array --> let result = Array.isArray(fruits);

valueOf() --> array vraća samog sebe, originalni array se ne mijenja --> fruits.valueOf();