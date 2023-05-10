const isSunny = true;

if (isSunny) {
  console.log("Napolju je suncano.");
} else {
  console.log("Napolju nije suncano.");
}

// Postoji 8 FALSY vreednosti,to su:

// 1. false
// 2. ""
// 3. 0
// 4.-0
// 5. 0n
// 6. NaN
// 7. undefined
// 8. null

// Napraviti funkciju gde se trazi unos od stane korisnika i varaca poruka da li je uneta TRUTHY ili FALSY vrednos.
// const broj = () => {
//   const a = prompt("unesite neki broj");
//   if (a) {
//     return "Uneli ste dobru vrednost";
//   } else {
//     return "Niste uneli dobru vrednost";
//   }
// };
// console.log(broj());   -moj pokusaj(dobar)

function isTruthy() {
  const userInput = prompt("Unesite neku poruku:");
  if (userInput) {
    return "Uneli ste TRUTHY vrednost";
  } else {
    return "Uneli ste FALSY vrednost";
  }
}
console.log(isTruthy());

// Ako korisnik unosi broj:

function isTruthyNumber() {
  const userInput = +prompt("Unesite neki broj:");
  if (userInput) {
    return "Uneli ste TRUTHY vrednost";
  } else {
    return "Uneli ste FALSY vrednost";
  }
}
console.log(isTruthyNumber());

// Trazi se unos od strane korisnika sve dok nen unes e bilo sta:

let recenica = "";
while (!recenica) {
  recenica = prompt("Unesite neku recenicu:");
}
