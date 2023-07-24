const radnik = {
  firstName: "Meryem",
  lastName: "Sinanovic",
  fullname: function () {
    return this.firstName + " " + this.lastName;
  },
  adresa: {
    ulica: "Gornji Aleksinac",
    broj: "26",
    grad: "Novi Pazar",
    getAdress: function () {
      return this.ulica + " " + this.broj + ", " + this.grad;
    },
  },
};
console.log(radnik.fullname() + " živi u " + radnik.adresa.getAdress() + ".");
// Vraca Meryem Sinanovic zivi u Gornji Aleksinac u Novom Pazaru.

const godine = [
  { starost: 17 },
  { starost: 17 },
  { starost: 22 },
  { starost: 27 },
  { starost: 22 },
  { starost: 19 },
];
const punoletni = godine.filter((osoba) => osoba.starost > 17);

const starostiPunoletnih = punoletni.map((osoba) => osoba.starost);

console.log(starostiPunoletnih);
// Napraviti niz(punoletni) koji ce sadrzati one elemente (objekte) cija starost je veca od 17.

// ... (spread) operator
// Spread operator nam sluzi za kloniranje niza ili objekta.

const punoletni3 = [20, ...starostiPunoletnih, 30];
console.log(punoletni3);

const radnik2 = {
  ...radnik,
  firstName: "Anastasija",
  lastName: "Milovic",
};
console.log(radnik2);
