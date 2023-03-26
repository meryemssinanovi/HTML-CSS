console.log("Prvi cas javascripta");
console.log("nova poruka");

text = document.getElementById("paragraf");
console.log(text);

text.innerHTML = "<em>Da li se vidi paragraf<em>";
//TIPOVI PODATAKA//

//Postoje;
//1. primitivni(vrednosni) tipovi podataka i
//2.neprimitivni(referentni)tipovi podataka
//Za potrebu tipa odrednje promenljive(varijable )se koristi typeoff operator.

//PRIMITIVNI (VREDNOSNI) TIP PODATAKA:

//1.stringh - promenljiva koja je zapisana unutar navodnika(obicnih ili duplih):

console.log("neki string");
console.log(typeof "neki string");

//2. number - brojevi mogu biti zapisani sa ili bez decimalnog zareza(.)

console.log(56);
console.log(typeof 56);
console.log(56.56);
console.log(typeof 56.56);

//3.bigInt- brojevi koji su iznad ogranicenja za number tip podatka.

console.log(BigInt(3256534758694584736251));
console.log(typeof BigInt(3256534758694584736251));

//4.boolean - Logicki entitet koji ima dve vrednosti:
//true
//false

console.log(true);
console.log(typeof true);

//5.undefined - Promeljiva koja je definisana u memoriji ali joj nije dodeljena vrednost ima:
//tip:undefined i
// vrednost:undefined.

var a;

console.log(a);
console.log(typeof a);

//6. null - Nepostojeca ili nekorektna promenljiva ima vrednost null.
// tip promenljive cija je vrednost null u JavaScript je object.

b = null;
console.log(b);
console.log(typeof b);

//7. Symbol - koristi se za promenljive koje su anonimne ili jeidnstvene.

c = Symbol("IT Camp");
console.log(c);
console.log(typeof c);

//Svi tipovi podataka koji nisu primitivni su tipa object.
//Promenljive koje  mogub sadrzati vise( od jedne ) vrednosti su referentnog(neprimitivnog) tipa.

// 1. Arraz(niz) - Struktura podataka za skladistenje vise vrednosti (te vrednosti mogu biti raylicitog tipa).
niz = ["Emir", 21, true];
console.log(niz);
console.log(typeof niz);

//2. Object (objekat)-Struktura podataka za skladistenje vise vrednosti(te vrenosti mogu biti razlicitog tipa).
//Te vrednosti su prikazabe u key:value( name:value) paru.

obj = { ime: "Emir", prezime: "Marukic", punoletan: true };

console.log(obj);
console.log(typeof obj);

//3. Set - Struktura podataka za skladistenje vise vrednosti koja ne dozvoljava duplikate.Slicna je nizu ,a sintaksa za prevljenje seta je:

set = new Set(["Asija", "Melida", "Dino", 19, 31, 25, "Dino"]); //Svako movo svojstvo pojavljivane elemenata u setu se nece primeniti.
console.log(set);

//4.Map- Struktura podataka za skladistenje vise vrednosti i slicna je objektu.Sintaksa za pravljenje mape je:

map = new Map([
  ["banane", 160],
  [("jagoda", 240)],
  [("kruska", 140)],
  [("ananas", 289)],
]);
console.log(map);
