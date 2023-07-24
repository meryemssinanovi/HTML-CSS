// Domaci:
// Napraviti objekat sa sledecim svojstvima:
// 1. firstName,
// 2. lastName,
// 3. language,
// 4. setLanguage - metoda za setovanje jezika,
// 5. setNickName - metoda (svaka osoba ima nadimak sastavljen od prva dva slova
// imena i prva dva slova prezimena)

let osoba = {
  firstName: "Meryem",
  lastName: "Sinanovic",
  language: ["srpski", "engleski", "turski"],
  setLanguage: function (jezik) {
    this.language = jezik;
  },
  setNickName: function () {
    let nadimak = this.firstName.slice(0, 2) + this.lastName.slice(0, 2);
    return nadimak;
  },
};
console.log(osoba.setNickName());
