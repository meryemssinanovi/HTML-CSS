// JSON JS Object Nitation//

// JSON je format za skladistenje i prenos podataka najcesce se koristi kada se podaci salju sa bekenda ka
//  WEB stranici.
// Sintaksa je vrlo slicna JS objektima:

// const person = {
// "firstName":"Meryem",
// "lastName":"Sinanovic",
// "age":17

// }

// JSON.stringify() metoda koja neki JSON format pretvra u string.

const person = {
  firstName: "Meryem",
  lastName: "Sinanovic",
  age: 17,
};

const strJSON = JSON.stringify(person);
console.log(strJSON);
console.log(typeof strJSON);

// JSON.parse() metoda koja od nekog stringa pokusava dobiti objekat.

const obj = JSON.parse(strJSON);
console.log(obj);
