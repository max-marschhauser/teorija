//MIJENJANJE SADRŽAJA ARRAYA

splice() --> briše dijelove arraya i dodaje nove na njihovo mjesto

slice() --> kopira dio arraya u novi array, ostavlja stari array netaknutim

copyWithin() --> Kopira sadržaj jednog dijela arraya na drugi dio arraya, stari elementi se obrišu, ne stvara nove elemente

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

reverse() --> obrne elemente arraya, prvi postane zadnji, drugi 
predzadnji... --> fruits.reverse();


//PRETRAŽIVANJE ARRAYA


indexOf() / lastIndexOf() --> vraća poziciju (index) elementa arraya ukoliko postoji u njemu, a ako ne postoji onda vraća -1. 
Ako se element ponavlja više puta onda vraća prvu / posljednju poziciju.

fruits.indexOf('dates');

at() --> uzme broj i vrati element arraya koji se nalazi na toj poziciji (slično kao bracket notation), ako se postavi negativan 
broj onda gleda pozicije od kraja --> arr.at(-1);

flat() --> stvara novi array koji sve nested arraye povećava na višu razinu, broj govori koliko će se razina povećati (default je 1)


//ARRAYI KOJI ZAHTJEVAJU FUNKCIJU

filter() --> stvara novi array s elementima arraya koji bi na upit funkcije odgovorili s true

reduce() / reduceRight() --> ponavlja funkciju dok se array ne smanji na samo jednu vrijednost.

find() / findIndex() --> vraća vrijednost / poziciju prvog elementa koji pozitivno udovoljava funkciji