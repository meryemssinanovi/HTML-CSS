const person = {
  firstName: "Hana",
  lastName: "Plojovic",
  age: 12,
  incrementScore:
};
console.log(person);

// Svi objekti i JS su povezani sa nekim prototype objketom,pa mozemo reci da svaki objekta ima protip.
// Prototype objekat sadrzi odredjena svojstav i metode.

// Construkto funkcija za pravljenje objekata:

function User(firstName, lastName, score) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.score = score;
}

User.prototype.incrementScore = function (){
    this.core++
}


const Meryem = new User("Meryem", "Sinanovic", 5);
const Asija = new User("Asija", "Sijaric", 5);
const Ajla = new User("Ajla", "Lomnicanin", 5);
const Hana= new User("Hana", "Plojovic", 5);
const Emir = new User(" Emir", "Marukic", 5);
console.log(Meryem);

Meryem.incrementScore()
console.log(Meryem)


setTimeout(()=>{
    console.log("1")
},2000);

setTimeout(()=>{
    console.log("2")
},1000);

setTimeout(()=>{
    console.log("3")
},2000);

console.log("4")
console.log("5")
console.log("6")
console.log("7")
console.log("8")
console.log("9")
console.log("10")
console.log("11")
console.log("12")
console.log("13")
console.log("14")
console.log("15")
console.log("16")
console.log("17")
console.log("18")
console.log("19")
console.log("20")
console.log("21")
console.log("22")
console.log("23")
console.log("24")
console.log("25")
setTimeout(()=>{
    console.log("26")
},900);