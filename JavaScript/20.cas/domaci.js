// Domaci:
// 1.	Izdvojiti N znakova sa desne strane (poslednjih N znakova) unetog stringa. Npr. za string 'Pera ima devojku' i N=5, dobija se 'vojku'.

function lastSix(recenica, n) {
  if (n >= recenica.length) {
    return recenica;
  } else {
    return recenica.slice(-n);
  }
}
console.log(lastSix("Pera ima devojku", 5));
