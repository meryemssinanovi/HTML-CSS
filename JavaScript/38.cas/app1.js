const arr = ["Emir", "Ajsa", "Dzenan"];
//             0      1       2

// Objekti su struktura podataka koja moze da skladisti vise vrednost.
// Elementi su zapisani u key/value (name/value) parovima.
// key/value (name/value) parovi u JS objektima se zovu svojstva(proprties).

const car = {
  type: "Fiat",
  model: 500,
  color: "white",
};

// Pristupanje nekoj vrednosti svojstva(proprety) mozemo izvrsiti na dva nacina.

// 1. obj.propretyName

console.log(car.type);

// 2. obj["propertyName"]

console.log(car["type"]);

// Objekti takodje mogu imati metode.
// Metode predstavljaju funkcije koje se ixvrsavaju na objektu.

const person = {
  name: "Meryem",
  lastName: "Sinanovic",
  age: 17,
  fullName: function () {
    return this.name + " " + this.lastName;
  },
};
console.log(person.fullName());

// U JS this referencira (ukazuje) na neki objekat.
// this nije promenljiva vec rezervisana rec (keyword).
// Ne moze promeniti vrednost this.

const x = person;
console.log(x);

// Promena vrednosti svijstva:

person.name = "Merjem";
console.log(person);

// Dodavanje novog svojstva:

person.adult = true;
console.log(person);
console.log(x);

// Brisanje svojstva objekta:
// delete keyword brise i property name i value
// delete x.adult;
delete x["adult"];

console.log(x);

// Vrednost nekog svojstva u objektu moze biti objekat, niz..

// Od objekta mozeml dobiti niz pomocu metode Object.values()

const personArr = Object.values(person);

console.log(personArr);

// Write a JavaScript program

const sub = (str) => {
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    for (let k = i; k < str.length; k++) {
      arr.push(str.slice(i, k + 1));
    }
  }
  return arr;
};
console.log(sub("dog"));
