// // for (let i = 1; i <= 5; i++) {
// //   console.log(i);
// // }

// // while petlja se takodje koristi za interaciju kroz neki objekat i izvrsavanje odredjenog koda.
// let i = 1;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// // do while petlja se koristi za interaciju kroz neki objetak, a tim sto u ovakvoj petlji imamo izvrsavanje koda pa tek onda ispitivanje uslova.
// let k = 5;
// do {
//   console.log(k);
//   k++;
// } while (i <= 10);

// let k = 15;
// do {
//   console.log(k);
//   broj++;
// } while (i <= 10);

// traziti od korisnika da unese neki broj
// na osnovu te vrednosti izvrsiti ispis kvadrata brojeva od 1 do tog unetog broja:

// const broj2 = +prompt("unesite neki broj;");
// let interator = 1;
// while (interator <= broj2) {
//   console.log(interator ** 2);
//   interator++;
// }

// traziti od korisnika da unsese broj sve dok ne unese 0:

let vrednost = 1; // sve sem nule
while (vrednost !== 0) {
  vrednost = +prompt("unesite neku vrednost:");
}
