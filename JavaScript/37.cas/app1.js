const output = (arr) => {
  forEach((element, index) => {
    console.log(`row${index + 1``}`);
    element.forEach((el) => {
      console.log(el);
    });
  });
  return "";
};
console.log(output(a));

console.log(55);
console.log(!55); //false
console.log(!!55); // true
console.log(!!0); //false

const prom = !(55 + "");
console.log(typeof (55 + ""));
console.log(prom);

// Rekurzivna funkcija //

// Rekuzivna funkcija je funkcija koja zahteva izvrsavanje same sebe unutar definisanja funkcije.
// Pomocu rekuzivne funkcije mozemo postici efekat petlje.

for (let i = 10; i > 0; i--) {
  console.log(i);
}

function petlja(n) {
  console.log(n);
  if (n - 1 > 0) {
    petlja(n - 1);
  }
}
petlja(10);

// Napraviti glavnu funkciju koja ispisuje poruku da se radi o glavnoj funkciji,ali ispod toga neka se izvrsi
// pozivanje callback funkcije koja ima zadatak da izracuna aritmeticku sredinu 3 broja koju predstavljaju argumente
// callback funkcije.

const main = (callback) => {
  console.log("Radi se o glavnoj funkciji");
  callback(3, 4, 5);
};

const average = (a, b, c) => {
  console.log(a + b + c) / 3;
};
console.log(main(average));

// CL0SURE FUNKCIJE //

function zbir() {
  const a = 5;
  const b = 3;
  return a + b;
}
console.log(zbir());

// Poznata je cinjenicxa da kada se zivrsi neka funkcija sve njene lokalne promenljive garbage colectir i one
// prestaju da postoje u memoriji.
// Medjutim to nije slucaj za funkcije koje unutar sebe sadrze clouser funkciju.

// Closure su funkcije koje imaju pravo pristupa promenljivim iz domena neke druge funkcije.

const proizvod = () => {
  const x = 5;
  const y = 10;
  const clouser = () => {
    console.log(x * y);
  };
  clouser();
};
proizvod();

// Napraviti funkciju koja vraca niz prestupnih godina u segmentu [pocetnaGodina,krajnjaGodina]
// Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.

const  prestupnaGodina = (form,to)=>{
  const prestupnaGodina =[]
  for(let i = form; i<=to i++){
    if ((i% 4 ===0 && i % 100 !==0)|| (i % 400 ===0)){
      prestupnaGodina.push(i)

    }
  }
  return prestupnaGodina
}
console.log(prestupnaGodina(2000,2020))