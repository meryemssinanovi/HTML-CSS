// Domaci zadaci:
// 1.	Sva velika slova u stringu treba svesti na mala slova. Npr. za uneto 'WEBnSTUDY.com', dobija se novi string 'webnstudy.com'. Slova koja se koriste u stringu pripadaju isključivo engleskoj abecedi.

// let i = "WeBNstuDY.cOM";
// let noviString = str.toLowerCase();
// console.log(noviString);

// 2.	Pronaći poziciju poslednjeg razmaka u stringu. Npr. za uneto 'Pera ima devojku', rezultat je 8.

// let str = "Pera ima devojku";
// let lastSpace = str.lastIndexOf(" ");
// console.log(lastSpace);

// 3.	Ispisati dužinu prve reči unetog stringa. Npr. za uneto 'Pera ima devojku', rezultat je 4. Podrazumeva se da uneti string nema vodeće razmake.\/

const rec = "Pera ima devojku";
const third = (recenica) => {
  const prviRazmak = recenica.indexOf(" ");
  const prvaRec = recenica.slice(0, prviRazmak);
  const duzina = prvaRec.length;
  return duzina;
};
console.log(third("Pera ima devojku"));

// let string2 = "Pera ima devojku";
// let firstWord = "";
// console.log();
