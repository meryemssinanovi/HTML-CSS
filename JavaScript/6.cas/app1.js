// Ispisati brojeve od 1 do 10 u konzoli:

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// Za ispis vise brojeva je mnogo jednostavnije da koristimo neku petlju.
// For petlja:

// for(statement1; statement2; statement3){
// blok koda za izvrsavanje u svakoj interaciji
// }

// statement1 je deo koda koji se izvrsava samo na pocetku petlje i on predstavlja definisanje interatora.
// statement2 predstavlja uslov za izvrsavanje petlje.
// statement3 predstavlja promenu vrednosti interatora.

for (let i = 1; i <= 10; i++) {
  //i++ to je prosla vrednost i na nju dodaj 1
  console.log(i);
}

// Ispisati brojeve od 1 do 10, izuzev broja 5.

for (let i = 1; i < 11; i++) {
  if (i !== 2 && i !== 5) {
    console.log(i);
  }
}

// continue keyword koristimo kada zelimo da izbegnemoneki slucaj i da se osvrnemo na narednu interaciju.
// 2.nacin

for (let i = 1; i < 11; i++) {
  if (i === 2 || i === 5) {
    continue;
  } else {
    console.log(i);
  }
}

// break koristimo kada zelimo da prekinemo petlju.
// Ispisati sve brojeve od 1 do 10.Ako je neki broj deljiv sa 7 neka se prekine petlja.

for (let i = 1; i <= 10; i++) {
  if (i % 7 === 0) {
    break;
  } else {
    console.log(i);
  }
}

// Ispisati parne brojeve od 1 do 20 na dva nacina.
// 1. nacin
for (let i = 1; i < 21; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//2.nacin
// i +=2 === i = i + 2
for (let i = 2; i < 21; i += 2) {
  console.log(i);
}

// 1.
// Ispisati neparne brojeve od 1 do 20 na dva nacina.
// 2.
// Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5
// 3.
// Ispisati dvostruku vrednost prirodnih brojeva od 6 do 14.
// 4.
// Suma neparnih prirodnih brojeva od 10 do 20.

// 3.
for (let i = 6; i < 15; i++) {
  console.log(2 * i);
}

// 1. Ispisati neparne bojeve od 1 do 20 na dva nacina

for (let i = 1; i < 21; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

for (let i = 1; i < 21; i += 2) {
  console.log(i);
}

// 2.Ispisati sve brojeve od 50 do 100 koji su deljivi sa 5

for (let i = 50; i < 101; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// 4. Suma neparnih prirodnih brojeva od 10 do 20.

let zbir = 0;
for (let i = 11; i < 20; i += 2) {
  zbir += i;
}
console.log(zbir);
