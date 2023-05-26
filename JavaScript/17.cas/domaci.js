function argument(recenica) {
  if (recenica.includes("skola")) {
    return recenica.indexof("skola");
  } else if (recenica.stratsWith("automobil")) {
    return true;
  } else if (recenica.length % 2 === 0) {
    let brojPojavljivanja = recenica.split("kuca").length - 1;
    return brojPojavljivanja;
  } else {
    return recenica.length;
  }
}

console.log(argument("Desno od marketa se nalazi kuca,a levo se nalzi skola"));
console.log(argument("Automobil ima lepu boju."));
console.log(argument("lepa kuca lepa kuca"));
console.log(argument("Venova zbirka"));

function brojacMalihSlova(string) {
  let brojacMalihSlova = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] > +`a` && string[i] <= `z`) {
      brojacMalihSlova;
    }
  }
  return brojacMalihSlova;
}

console.log(brojacMalihSlova("ProGramiRanjE je dobRo ali ZahtEvNo."));

console.log("a");
console.log("b");

console.log("a" > "b");
console.log("a" > "A");
// Prvo idu velika slova, pa onda mala.
console.log("A".charCodeAt(0));
console.log("Z".charCodeAt(0));
console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));
