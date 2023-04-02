// JavaScript Switch naredba //

//Switch naredbu koristimo kada imamo slucajave koji preciziraju vrednost nekog izraza:

// switch (izraz) {
//   case vrednost1:
//     //blok koda koji ce da se izvrsi u slucaju da je  izraz === vrednosti1
//     break;
//   case vrednost2:
//     //blok koda koji ce da se izvrsi u slucaju da je  izraz === vrednosti2
//     break;
//   default:
//   //blok koda koji ce da se izvrsi u slucaju da je  izraz nije jednak prethodnim vrednostima.
//   // break; nije neophodno koristiti break na poslednjem slucaju.
// }

// break keyword daje naredbu prestanka switch naredbe.
// break se ne sme izostaviti na kraju nekog slucaja(sem zadnjeg).
// Ako izostavimo break u slucaju koji je zadovoljen , izvrsice se i sledeci slucaj koji nije zadovoljen.

//Korisnik unosi broj:
// Ako je uneo broj izmedju 12 i 15 (ukljucujuci oba ) neka se ispise poruka:"uneli ste vrednostBroja"
// Defaultno:Niste uneli broj iz trazenog opsega.

const broj = Number(prompt("Unesite broj iz intervala [12,15]"));
switch (broj) {
  case 12:
    console.log("Uneli ste broj " + broj);
    break;
  case 13:
    console.log("Uneli ste broj " + broj);
    break;
  case 14:
    console.log("Uneli ste broj " + broj);
    break;
  case 15:
    console.log("Uneli ste broj " + broj);
    break;
  default:
    console.log("Niste uneli broj iz trazenog opsega");
}

//domaci

const br1 = +prompt("Unesite prvi broj: ");
const br2 = +prompt("Unesite drugi broj: ");

if (isNaN(br1) || isNaN(br2)) {
  console.log("Uneti brojevi moraju biti ispravni");
} else if (br <= 0 || br2 <= 0) {
  console.log("Uneti brojevi moraju biti pozitivni");
} else if (br1 === br2) {
  console.log("Povrsina kvadrata je" + br1 * br2);
} else {
  console.log("Povrsina kvadrata je" + br1 * br2);
}

// 2. zadata domaceg

const x = +prompt("Unesite prvi broj: ");
const y = Number(prompt("Unesite drugi broj: "));

switch (y) {
  case 0:
    console.log("Deljenje nulom je nemoguca.");
    break;
  default:
    console.log("Kolicnik unetih brojevaje :" + x / y);
}
