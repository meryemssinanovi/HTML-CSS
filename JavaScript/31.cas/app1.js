// keys () metoda vraca Array Iterator Object kljuceva nakon nekog niza.

const grupa = ["Emir", "Ajsa", "Selver", "Asija"];

// callback funcija predstavlj funkciju koju saljemo kao argument neke metode odnosno funkcije.

function glavnaFunkcija(callback) {
  console.log("Pocetak posla glavne funkcije");
  callback();
  console.log("Kraj posla glavne funkcije");
}
glavnaFunkcija(function () {
  console.log("Ovo je radnja iz callback funkcije");
});

// Napraviti glavnu funkciju koja ima callback funkciju, i jos 2 argumenta (broja),callback funkcija treba da ispise
// prvi broj stepenovan drugim i da se to izvrsi unutar glavne funkcije.

const main = (callback, num1, num2) => {
  callback(num1, num2);
};

console.log(main((a, b) => a ** b, 3, 2));
