//MIJENJANJE SADRŽAJA ARRAYA

splice() --> briše dijelove arraya i dodaje nove na njihovo mjesto

slice() --> kopira dio arraya u novi array, ostavlja stari array netaknutim

copyWithin() --> Kopira sadržaj jednog dijela arraya na drugi dio arraya, stari elementi se obrišu, ne stvara nove elemente

fill() --> promjeni dijelove arraya novim sadržajem, mijenja originalni array, ako se ne specificira početna i završna točna onda 
po defaultu ide od početka do kraj arraya --> fruits.fill("Kiwi", 2, 4);


//STVARANJE ARRAYA

Array.of() --> stvara array, a argumenti su dijelovi arraya --> Array.of(7); // [7]

from() --> stvara array od bilo kojeg objekta koji ima length (npr. string) --> Array.from("ABCDEFG");


//STVARANJE STRINGA OD ARRAYA


toString() --> konvertira array u String, itemi su odvojeni sa zarezom --> fruits.toString();

join() --> spaja sve dijelove arraya u String, ali se sada može navesti što će se nalaziti između njih u stringu --> fruits.join(" ");