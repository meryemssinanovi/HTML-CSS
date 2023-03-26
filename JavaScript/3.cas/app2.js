//OPERATORI U JS //

//Postoji 6 vrsta operatora u JS:

// 1. Aritmeticki opretori;
// 2. Operatori dodele vrednosti;
// 3. String operatori;
// 4. Operatori poredjenje;
// 5. Logicki operatori;
// 6.Tipovni operatori

// 1. Aritmeticki operatori

// + Sabiranje
console.log(10 + 15);

// - Oduzimanje
console.log(10 - 15);

// * Mnozenje
console.log(3 * 7);

// ** Stepenovanje
console.log(2 ** 3);

// / Deljenje
console.log(8 / 2);

// % Modul (ostatak pri deljenju )
console.log(12 % 5);

//Parni brojevi:
// x % 2 = 0
// Neparni brojevi:
// x % 2 !=0

//++ Increment (povecanje vrednosti za 1)
x = 5;
x++; // x = x+1
console.log(x);

// -- Decrement (smanjenje vrednosti za 1)

y = 10;
y--; //y=y-1
console.log(y);

// 2. Operator dodele vrednosti:

// = Dodeljivanje vrednosti nekoj promeljivoj
a = 5;

// + = Dodavanje nove vrednosti na postojecu

a += 5; // a = a + 5
console.log(a);

// - = Smanjenje vredosti postojece promenljive:

a -= 7;
console.log(a);

// *= Mnozenje postojece vrednosti sa odredjenim brojem:
a *= 3;
console.log(a);

// /= Deljenje postojece vrednosti sa odredjenim brojem:
a /= 3;
console.log(a);

// %= Ostatak pri deljenju trenutne vrednosti nekim brojem

a %= 2; // a = a % 2
console.log(a);

// **= Stepenovanje postojuce vrednosti nekim brojem:
a = 5;
a **= 2; // a = a **2
console.log(a);

// 3. String operatori: (vazno pravilo)

//Pored osnovne namene za sabiranje brojeva, = operator sluzi za spajanje stringova:

console.log(4 + 4);
console.log("Dobar", "+", "dan");

console.log(5 + "25");
console.log(typeof (5 + "25"));
console.log(4 + "nedelja");

console.log(25 - "15");

console.log(5 * "5");
console.log("10" / 2);

// Dobijamo NaN (Not a Number)
console.log(5 - "string");
console.log(5 * "string");
console.log(typeof (5 * "string"));
//NaN je broj cija  vrednost nije korektna.
//Tio je NaN number
