const first = (recenica) => recenica.split(" ").length;

console.log(first("Koliko ima reci"));
console.log(first("Koliko"));
console.log(first(""));

const second = (String) => {
  let noviString = "";
  for (let i = String.length - 1; i >= 0; i--) {
    noviString += string[i];
  }
  return noviString;
};
console.log(second(""));

const third = (string) => {
  let brojac = 0;
  for (let i = 0; i <= string.length; i++) {
    if (!isNaN(string[i]) && str[i] !== "") {
      brojac++;
    }
  }
  return brojac;
};
console.log(third("Koliko ima cifara broj 256"));

// includes() metoda vraca boolean (true ili false ) u zavisnosti od toga da li se argument nalazi u stringu na kojem se primenjuje metoda ili ne.
// Opciono, drugi argument predstavlja poziciju od koje cemo traziti dati argument u stringu.

const recenica = "Dobar dan!";
console.log(recenica.includes("vece"));
console.log(recenica.includes("dan"));

const recenica2 = "Na koliko ste casova bili danas u skoli";

// match() metoda vraca niz u zavisnosti od toga u kom obliku smo poslali argument,dobijamo razlicite nizove.

console.log(recenica2.match("")); // niz sa informacijama vezano za argument i string na koji smo primenii metodu
console.log(recenica2.match(/a/g)); // niz sa elementima iste vrednosti (ima ih onoliko koliko se argument pojavljuje puta u stringu)
console.log(recenica2.match(/adfv/g)); // ako posaljemo argument koji se ne nalazi u stringu donijamo null.

/*naprviti funkciju koja ispituje koliko se puta nalazi rec ""ko osvaja 
Ako se pojavljuje vise puta dati string,vratiti poziciju prvog  i poslednjeg pojavljivanja,a ako se 
pojavljuje jednom,vratiti poziciju pojavljivanja,dok ako se ne pojavljuje dati string */

// console.log("ko osvaja je rec koju trazimo.".match(/ko osvaja/g));
// console.log(
//   "ko osvaja je rec koju trazimo.Dakle, ko osvaja.".match(/ko osvaja/g)
// );
// console.log("Dobro vece".match(/ko osvaja/g));

const zadatak = (recenica) => {
  if (!recenica.match(/ko osvaja/g)) {
    return "Nismo pronasli dati string";
  } else if (recenica.match(/ko osvaja/g).length === 1) {
    return recenica.indexof("ko osvaja ");
  } else {
    return ` pozicija prvog pojav;jivanja: ${recenica.indexof("ko osvaja")} 
    \n 
    pozicija poslednjeg pojavljivanja: ${recenica.lastindexof("ko osvaja")} `;
  }
};
console.log(zadatak("ko osvaja ligu sampiona"));
console.log(zadatak("ko osvaja ligu sampiona"));
console.log(zadatak("ko osvaja ligu sampiona ko osvaj ako osvaja"));
