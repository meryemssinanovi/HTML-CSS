//  map() metoda kreira novi niz,na nacin da se callback funkcija (argument map metode) izvrsava za svaki element.
// Duzina novodobijenog niza je jednaka duzini orgiginalnog niza.
// map () metoda ne menja originalni niz , vec pravi novi.

const brojevi = [2, 4, 6, 8, 10, 12];

const brojevi2 = brojevi.map(function (broj) {
  return broj;
});
console.log(brojevi2);

// Napraviti brojevi3 koji ce sadrzati kvadrate elemenata niza brojevi.

const brojevi3 = brojevi.map((broj) => broj * broj);
console.log(brojevi3);

const studenti = [
  "asija",
  "ajla",
  "selver",
  "nedim",
  "ajsa",
  "emir",
  "meryem",
  "anastasija",
];
// preko map metode napraviti novi niz gde ce imena svih studenata pocinjati velikim slovom.

// const studenti1 = studenti.map((studenti) => studenti.slice(0).toUpperCase());
// console.log(studenti1);

const studenti2 = studenti.map(
  (student) => student[0].toUpperCase() + student.slice(1)
);
console.log(studenti2);

// Napraviti novi niz koji ce sadrzati samo prva tri elementa postojeceg niza.
const studenti3 = studenti.map(function (student, pozicija) {
  if (pozicija < 3) {
    return student;
  } else {
    return;
  }
});
console.log(studenti3);

// Ako zelimo da iskljucimo neke elemente onda ce se na tim pozicijama dobit undefined.

// Napraviti novi niz mapirajuci niz brojeva,koji ce imati sve elemente iste,dok elementi na pozicijama 0,3,5ce biti kvadrirani.

const brojevi4 = brojevi.map(() => {
  if (pozicija === 0 || pozicija === 3 || pozicija === 5) {
    return broj ** 2;
  } else {
    return broj;
  }
});
console.log(brojevi4);

const numbers = [2, 7, 5, 17, 28, 55, 34];

// Napraviti novi niz koji sadrzii kvadrate parnih elemenata postojeceg niza.Dok za neparne elemente treba vratiti aritmeticku vrednost prethognog elementa,datog i narednog

const numbers2 = numbers.map((num, index, arr) => {
  if (num % 2 === 0) {
    return num ** 2;
  } else {
    return (arr[index - 1] + num + arr[index + 1] / 3).toFixed(2);
  }
});
console.log(numbers2);
