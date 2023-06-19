// Napraviti funkciju koja racuna razliku u danima izmedju sledeca dva datuma:
// "1999-05-24" i "2004-09-15"

// function razlikaUDatumima(datum1, datum2) {
//   let razlikaUDatumima = Math.round((datum2 - datum1) / (1000 * 60 * 60 * 24));
//   return razlikaUDatumima;
// }
// console.log(razlikaUDatumima());
// console.log(razlikaUDatumima());
// let datum1 = new Date("1999-05-24");
// let datum2 = new Date("2004-09-15");

function countMyAge(birthtDate) {
  const birthtDate = new Date(birthtDateString);
  const currentDate = new Date();
  const birthMiliseconds = Date.parse(birthtDate);
  const currentTimeMiliseconds = Date.parse(currentDate);

  const sub = currentTimeMiliseconds - birthMiliseconds;
  const year = new Date(sub).getFullYear() - 1970;
  return year;
}
console.log(countMyAge("1996-06-24"));
