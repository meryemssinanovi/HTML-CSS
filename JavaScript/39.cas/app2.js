// Unutar postojeceg objekta dodati nova svojstva:
// 1. trenutnaBrzina: 0,
// 2. maksimalnaBrzina: 260,
// 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).

const myCar = {
  id: 1,
  marka: "Audi",
  model: "a4",
  boja: "Crvena",
  pogon: "prednji",
  menjac: "automatski",
  kontakt: ["0622222", "02033322"],
  servis: {
    datum: "04,maj",
    km: 23000,
    serviser: "Pasovic",
  },
  udaran: true,
};

myCar.trenutnaBrzina = 0;
myCar.maksimalnaBrzina = 260;

myCar.povecanjeBrzine = function (vrednost) {
  if (this.trenutnaBrzina + vrednost <= this.maksimalnaBrzina) {
    this.trenutnaBrzina += vrednost;
    return "Ubrzanje je povecano";
  } else {
    return "Ne brze od zivota!";
  }
};
myCar.smanjenjeBrzine = function (vrednost) {
  if (this.trenutnaBrzina - vrednost >= 0) {
    this.trenutnaBrzina -= vrednost;
    return "Brzina je umanjena.";
  } else {
    return "nije moguce smanjiti brzinu";
  }
};
console.log(myCar.trenutnaBrzina);
myCar.povecanjeBrzine(80);
console.log(myCar.trenutnaBrzina);
myCar.povecanjeBrzine(100);
console.log(myCar.trenutnaBrzina);
myCar.povecanjeBrzine(100);
console.log(myCar.trenutnaBrzina);
myCar.smanjenjeBrzine(90);
console.log(myCar.trenutnaBrzina);
console.log(smanjenjeBrzine(100));
console.log(trenutnaBrzina);
console.log(smanjenjeBrzine(20));
console.log(trenutnaBrzina);
