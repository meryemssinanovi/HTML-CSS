// 3. zadatak

// "123"
// "321"
function jeLiPolindrom(broj) {
  const strBroj = broj.toString();
  let obrnutiBroj = "";
  for (let i = strBroj.length - 1; i >= 0; i--) {
    obrnutiBroj += strBroj[i];
  }
  //   if (strBroj === obrnutiBroj) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return strBroj === obrnutiBroj;
}
console.log(jeLiPolindrom(123));
console.log(jeLiPolindrom(101));
function najveciPolindrom() {
  let najveciPolindrom = 0;
  for (let i = 999; i > 99; i--) {
    for (let j = i; j > 99; i--) {
      if (jeLiPolindrom9(i * j) && i * j > najveciPolindrom) {
        najveciPolindrom = i * j;
      }
    }
  }
  return najveciPolindrom;
}
console.log(najveciPolindrom());
