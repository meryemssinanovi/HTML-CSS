// 9.Za uneti string A treba kreirati novi string B koji se sastoji od prve i poslednje reci (odvojenih razmakom)
// untego stringa.Na primer A= "svuda podji kuci dodji " dobija se B = "Svuda dodji "
// Podrazumeva se da uneti string nema vodece ili pratece razmake

const firstAndLastWord = (A) => {
  const arr = A.split(" ");
  const firstWord = arr[0];
  const lastWord = arr[arr.length - 1];
  const B = `${firstWord} ${lastWord}`;
  // return firstWord + "" + lastWord
  // return firstWord .concat(" " , lastWord)
  return B;
};

console.log(firstAndLastWord("Svuda podji, kuci dodji"));

// 10. Iz unetog string atreba izdvojiti N znakova sa leve strane.Npr. za string "Pera ima devojku" i N = 6,dobija se "Pera i".Ako je
// N vece od duzine stringa,kao rezultat dobijamo ceo string.

function firstSix(recenica, N) {
  if (N > recenica.length) {
    return recenica;
  } else {
    return recenica.substr(0, N);
  }
}

console.log(firstSix("Pera ima devojku", 7));

// 12. Za uneti string A,treba izvdojiti podstring B,koji krece od unete pozicije N i ima M znakova.Na primer za string "Pera ima devojku"
// , N = 6 i M = 7,dobija se B= "ima dev".

const subStr2 = (recenica, N, M) => {
  //   return recenica.subString(N, N + M);
  return recenica.substr(N, M);
};
console.log(subStr2("Pera ima devojku", 6, 7));

// 13.

const rec = "Madagarskar";
console.log(rec.replace(/a/g, " "));

const noviString = (A, Z) => {
  let noviString = "";
  let i = 0;
  while (i < A.length) {
    if (A[i] !== Z) {
      noviString += A[i];
    }
    i++;
  }
  return noviString;
};

console.log(noviString("Madagaskar", "a"));
