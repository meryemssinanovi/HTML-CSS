const godine = [17, 17, 21, 27, 19];
// 1. Napraviti novi niz,koji ce sadrzati samo godine vece od 17.

const godineVeceOd17 = [];
godine.forEach((godina) => {
  //   if (godina > 17) {
  //     godineVeceOd17.push(godina);
  //   }
  godina > 17 && godineVeceOd17.push(godina);
});
console.log(godineVeceOd17);

// filter() metoda pravi novi niz sa onli elementima koji su prosli test.
// Novi niz moze biti prazan,iste duzine kao originalni ili imati manje elemenata od originalnog.
// Zavisi od toga koliko je elemenata proslo test.
// callback funkcija vraca uslov koji neki element treba da zadovoljava kako bi prosao test(kako bi bio dodat u novom nizu).

const godineVeceOd16 = godine.filter((godina) => godina > 17);
console.log(godineVeceOd16);

// 1.
// prvi deo. napraviti pomocni niz koji ce sadrzati elemente od oba niza.
// drugi deo. napraviti jos jedan pomocni niz koji ce iz prvog dodatnog niza uzeti parne brojeve.
// treci deo. u drugom pomocnom nizu umetnuti na prva dva mesta 10 i 20
// funkcija na kraju treba da vrati dvav napravljena pomocna niza

function helpers(arr1, arr2) {
  const helper1 = arr1.concat(arr2);
  const helper2 = helper1.filter((broj) => broj % 2 === 0);
  helper2.unshift(10, 20);
  return `first helper: ${helper1}\n
  second helper: ${helper2}`;
}
console.log(helpers([1, 2, 3, 4, 5], [6, 7, 8, 9]));

const student = [
  "Anastasija",
  "Meryem",
  "Emir",
  "Nedim",
  "Selver",
  "Ajla",
  "Asija",
];
// Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima starog niza,gde je drugo slovo "e".

const student2 = student.filter((student) => student[1] === "e");
console.log(student2);

// reduce() metoda izvrsava callback funkciju za svaki element jednom i vraca nam jednu vrednost.
// reduce() metoda se izvrsava sa leve na desnu stranu
// callback funkcija reduce metode moze imati 4 argumenta:
// (previousValue , currentValue , index , array)

const suma = godine.reduce((prev, curr) => prev + curr);
console.log(suma);

// Mozemo dodati pocetnu vrednost, ona predstavlja drugi parametar callback funkcije.
const suma2 = godine.reduce((prev, curr) => prev + curr, 100);
console.log(suma2);
