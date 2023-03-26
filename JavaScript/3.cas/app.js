// var
var x = 10;
console.log(x);
x = 14;
console.log(x);

var x = 25;
console.log(x);

// Za sve promenljive definisane preko var keyword je moguce izvrsiti redeklaraciju (ponovo definisane promenljive) i reincijalizaciju (dodeljivanje nove vreednosti)

//let
let y = 30;
console.log(y);
{
}
y = 15;
console.log(y);
{
}
// let y =

// Za sve promenljive definisane preko let keyword je moguce izvrsiti reinicijalizaciju( dodeljivanje nove vrednosti), ali kada govorimo o istom prostoru( scope) necee biti moguca redeklaracija (novo obezbedjivanje memorije u oprostoru).

//let i const key word nam obezbedjuju takozvani block scope (dodatni prostor za definisanje promenljivih)
//Promenljive definisane preko let ili const key word su block scope promenljive.
{
  let y = 50;
  console.log(y);
}
console.log(y);

// Dakle u nekom block scope je moguce izvrsiti i redeklaraciju i reinicijalizaciju.

//const

//const w
// w = 18

const w = 18;
console.log(w);

// const w = 90;
// w = 90;
// console.log(w);

// Promenljive definisane preko const(u istom prostoru) nije moguce izvrsiti redeklaraciju niti inicijalizaciju.

{
  const w = 90;
  console.log(w);
}

// S ve karakteristike koje vaze za promenljivu definisanu preko let, vaze i za promeljive definisane preko const key word, kada govorimo o block scope.

const niz = [12, 13, 15, 16];
// niz = ["bilo","sta"]:
console.log(niz);
// Postoje metode koje nam dozvoljavaju izmenu naseg niza bez obzira sto se radi o promenljivoj definisanoj preko const keyword.
