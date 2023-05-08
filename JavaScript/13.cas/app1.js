const zbirKvadrata = function (a, b) {
  if (a === b) {
    return "Povrsina kvadrata iznosi:" + a * b;
  } else {
    return "Povrsina pravougaonika iznosi:" + a * b;
  }
};
console.log(zbirKvadrata(4, 5));
console.log(zbirKvadrata(4, 5));

// Arrow function:
const kvadrataBroja = (a) => {
  return a ** 2;
};
console.log(kvadrataBroja(4));

// Ako arrpw function ima samo jedan parametar, nije neophodno stavljati ga u zagradama.
// Ako funkcija vraca neki jednostavana izraz (prethodno nije bilo dodatnog koda )mozemo izostaviti viticaste zagrade i return key word

// const kvadrataBroja2 = (a) => a ** 2;

const broj = (a) => {
  if (a === 0) {
    return "Uneta je nula";
  } else if (a < 0) {
    return "Uneli ste negativan broj";
  } else if (a > 0) {
    return "Uneli ste pozitivan broj";
  } else if (isNaN(a)) {
    return "Uneta vrednost nije broj";
  }
};
// a = prompt("unesite neki broj");
// console.log(broj(a));

const vreme = (sat, minut) => {
  if (sat < 9 || sat >= 17 || minut > 59 || minut < 0) {
    return "Niste poslali e-mail u toku radnog vremena";
  } else {
    return "Poslali ste u toku radnog vremena";
  }
};
console.log(vreme(11, 45));
console.log(vreme(7, 45));
console.log(vreme(16, 60));
