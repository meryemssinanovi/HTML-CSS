// 1. Napraviti novi niz koji filtrira postojeci i vraca novi sa onim elementima cija je duzina <= 6.

const originalniNiz = [
  "jabuka",
  "kruska",
  "nar",
  "ananas",
  "kivi",
  "narandza",
  "jagoda",
];
const noviNiz = [];

for (let i = 0; i < originalniNiz.length; i++) {
  if (originalniNiz[i].length <= 6) {
    noviNiz.push(originalniNiz[i]);
  }
}
console.log(noviNiz);

// 2. Napraviti novi niz koji filtrira postojeci i vraca novi
//  sa onim elementima ciji je tip "boolean".
const originalniNiz1 = [true, 1, "jabuka", false, "banana", true, 0];
const noviNiz1 = [];

for (let i = 0; i < originalniNiz1.length; i++) {
  if (typeof originalniNiz1[i] === "boolean") {
    noviNiz1.push(originalniNiz1[i]);
  }
}

console.log(noviNiz1);

// 3. Napraviti funkciju koja pravi niz koji ce iz postojeceg napraviti novi uz ispunjenje uslova:
//    value > 2 => value * 7
//    value >2 and value <8 => (value*4)/2
//    Ostale vrednosti da ne uzima u obzir
//    I na kraju treba novi niz vratiti sa godinama <10.

// 1.nacin
const originalniNiz2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const noviNiz2 = [];

function napraviNoviNiz2(niz) {
  for (let i = 0; i < niz.length; i++) {
    if (niz[i] > 2 && niz[i] < 8) {
      noviNiz2.push((niz[i] * 4) / 2);
    } else if (niz[i] > 2) {
      noviNiz2.push(niz[i] * 7);
    }
  }
  return noviNiz2.filter((godina) => godina < 10);
}

console.log(napraviNoviNiz2(originalniNiz2));

// 2.nacin

const third = (arr) => {
  const arr2 = arr.filter((value) => typeof value === "number" && value > 2);
  const arr3 = arr2.map((value) => {
    if (value < 8) {
      return value * 2;
    } else {
      return value * 7;
    }
  });
  return arr3.filter((value) => value < 10);
};
console.log(third([1, 2, 3, 5, 7, 9, 11]));

// 4. Write a function that converts an array of values from miles to kilometres using the map method.
// In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and
// return this variable.

const nizMilja = [10, 20, 30];
const ukupnaDistancaUKilometrima = konvertujMiljeUKilometre(nizMilja);

function konvertujMiljeUKilometre(nizMilja) {
  const nizKilometara = nizMilja.map((milje) => milje * 1.60934);
  const ukupnaDistancaUKilometrima = nizKilometara.reduce(
    (ukupno, kilometri) => ukupno + kilometri,
    0
  );
  return ukupnaDistancaUKilometrima;
}

console.log(ukupnaDistancaUKilometrima);

// 5. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays. Go to the editor
// Sample array :
array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

const niz1 = [1, 0, 2, 3, 4];
const niz2 = [3, 5, 6, 7, 8, 13];
const rezultat = izracunajSumu(niz1, niz2);

function izracunajSumu(niz1, niz2) {
  const duziNiz = niz1.length > niz2.length ? niz1 : niz2;
  const kraciNiz = niz1.length >= niz2.length ? niz2 : niz1;
  const rezultat = duziNiz.map(
    (vrednost, indeks) => vrednost + (kraciNiz[indeks] || 0)
  );
  return rezultat;
}

console.log(rezultat);
