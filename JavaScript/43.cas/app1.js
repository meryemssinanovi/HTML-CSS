// Promise (obecenje) je JavaScript objekat koji prestavlja mesto za rezultete asinhrone funkcije sve dok traje izvrsavanje asinhgrone operacije..

const obecanje = new Promise((resolve, reject) => {
  const response = 200;
  if (response === 200) {
    resolve();
  } else {
    reject();
  }
});

// them metoda predstavlja mesto za izvrsavanje funkcije u slucaju resolve()
// catch metoda predstavlja mesto za izvrsavanje funkcije u slucaju reject()
obecanje
  .then(() => {
    console.log("uspesno dobijeni podaci.");
  })
  .catch(() => {
    console.log("nisu dobijeni podaci.");
  })
  .finally(() => {
    console.log("Izvrsava se u svakom slucaju");
  });

//   Naprsaviti promise koji proverava d ali je neki objekat ispunio uslov da je njegov objekat ispunio uslov
// da je njegov proprety veci od 17 ili nije.
// U slucaju da je osoba punoletna then() funkcija vraca poruku "Vi ste punoletni."
// Uslucaju da osoba nije punoletna cath() vraca broj godina osobe.

const punoletna = new Promise((resolve, reject) => {
  const person = {
    firstName: Merjem,
    lastName: Sinanovic,
    age: 17,
  };
  if (person.age > 17) {
    resolve();
  } else {
    reject(person.age);
  }
});
punoletna
  .then(() => {
    console.log("Punoletni ste");
  })
  .catch((years) => {
    console.log(years);
  });

const chain = new Promise((resolve, reject) => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, -2, -4, -6, -8];
  if (arr.every((num) => typeof num === "number")) {
    resolve(arr);
  } else {
    const errorMasage = "Donijeni niz ima vrednosti koje nisu brojevi.";
    reject();
  }
});

chain
  .then((dobijeniNzi) => {
    console.log();
  })
  .catch((poruka) => {
    console.log(poruka);
  });
