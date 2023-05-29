// Uneti string se sifruje tako sto se zamenjuje redosled znacima u sringu.Prvi i drugi zamene mesta,zarim 3. i 4. zamene mesta i td.za string "pera ima devojku"
// treba dobiti "epaei..".Ako string ima neparan broj znakova,poslednji znak se ne dira.

const pera = "Pera ima devojku";

let epar = "";
//                 inace bi bilo
epar += pera[1]; // pera[0]
epar += pera[0]; // pera[1]
epar += pera[3]; // pera[2]
epar += pera[2]; // pera[3]
console.log(epar);

const zamenaMesta = (string) => {
  let noviString = "";
  for (let i = 0; i < string.length; i++) {
    if (string.length % 2 !== 0 && i === string.length - 1) {
      noviString += string[i];
    } else if (i % 2 !== 0) {
      noviString += string[i - 1];
    } else if (i % 2 === 0) {
      noviString += string[i + 1];
    }
  }
  return noviString;
};
console.log(zamenaMesta("Pera ima devojku"));
console.log(zamenaMesta("Neparni broj karaktera."));

// 2. Unose se dva string A i B.Kreirati novi string kao kombinaciju stringova A i B, tako sto se kombinuj
// prvi sa prvim,drugi sa drugim,treci sa trecim,itd.Ako je jedan string duzi od drugog , na kraju samo dodati stri
// ngove viska.Npr stringove "Pera" i "sladoled" dobija se Pselradoled.

const spajanje = (A, B) => {
  let duzina;
  // if(A.length > B.length ){
  //     duzina = A.length
  // }else {
  //     duzina = B.length
  // }
  duzina = A.length > B.length ? A.length : B.length; // ovo : znaci inace kod ternari operatora
  let noviString1 = "";
  for (let i = 0; i < duzina; i++) {
    if ([i] === undefined) {
      //!A[i] umesto A[i] === undefined
      noviString1 += B[i];
    } else if (B[i] === undefined) {
      noviString1 += A[i];
    } else {
      noviString1 += A[i] + B[i];
    }
  }
};
console.log(spajanje("PERA", "sladoled"));
