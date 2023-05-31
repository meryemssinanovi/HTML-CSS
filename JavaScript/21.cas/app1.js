prva();

function prva() {
  console.log("prva");
}
// U prvom slucaju vazi hoisting.Deklarisanje funkcija na vrhu fajla.Stroga ih mozemo pozvati pre definisanja.

druga();
const druga = () => console.log("druga");

// Za arrow funkcije ne vazi hoisting.Moramo je definisati pre koriscenja.
