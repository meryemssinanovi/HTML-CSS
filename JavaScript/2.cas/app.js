//Neku poruku  u JavaScriptu mozemo prikazati na vise nacin:

//1.innerHTML
naslov = document.getElementById("naslov");
naslov.innerHTML = "Prvi nacin ispisa";

//2. document.write - obicno se koristi za testiranje koda.

//3.Alert() - Upozorenje korisniku:

// alert("Jos jedan nacina za prikazivanje poruke");

//4. console.log()- Prikazivanje neki informacija u konzoli.Najcesce koriscen metod.

console.log("Poruka u konzoli");

//JavaScript nazivi promenljivih//

//Ime promenljive u JavaScriptu mora poceti:
//1.Velikim i malim slovom(A-Z ili a-z)
//2. $ (dollar sign)
// 3._ (donjom crtom)

//Broj moze biti sadrzan u nazivu promenljive, ali promenljiva ne sme poceti brojem.

//JavaScript je case sensitive(razlikuje velika i mala slova)!!!

a = 10;
//console.log(A); error A - is not defined
console.log(a);

//Zapisivanje promenljivih koje sadrze 2 ili vise reci:

// vecernji termin nije ispravan nacin da pravim razmak
vecernji_termin = 19.3; //ispravan nacin za zapisivanje promenljive.Underscore
VecernjiTermin = 19.3; //ispravan nacin za zapisivanje promenljive.Upper Camle Case (Pascal Case)
vecernjiTermin = 19.3; //ispravan nacin za zapisivanje promenljive.Najcesce koriscen nacin za ispisivanje promenljive.Lower Camle Case

// deklaracija i inicijalizacija
//Postoje 4 nacina za deklarisanje promenjive u JavaScriptu:

// 1. Koriscenjem var rezervisane reci (keyword).Vise je ranije bila koriscena (dok nismo dobili nove dve).

var a; //deklarisanje promenjive (obezbedjivanje lokacijske memorije za promenjivu a)
a = 10; // inicijalizacija promenljive (dodeljivanje vrednosti vec deklarisanoj promenljivoj a)

//Kroz jednu ljiniju koda mozemo takodje izvrsiti deklaraciju i inicijalizaciju
var a = 10;

// 2. Koriscenjem let rezervisane reci (keyword)Promenljive su sklone menjanju vrednosti.

//let b; deklarisanje promenljive b
//b = 14; inicijalizacija promenljive b

//Kroz jednu ljiniju koda mozemo takodje izvrsiti deklaraciju i inicijalizaciju
let b = 14;
console.log(b);

//3. Koriscenjem const rezervisane reci (keyword).Na ovaj nacin deklarisemo promenljive cija se vrednost nece menjati.

//Nije moguca posebna deklaracija i inicijalizacija za promenljive definisanne preko const keyword.
//const c;
//c = 20;

//Neophodno je odjednom iyvrsiti deklaraciju i inicijalizaciju
const c = 20;
console.log(c);

//4. Koriscenjenm nicega.
d = 5;
console.log(5);

// Varijable ( promwljive) u JavaScriptu predstavlja kontejnere za skladistenje vrednosti.
