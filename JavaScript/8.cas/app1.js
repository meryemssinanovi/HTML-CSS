// 1.
const broj = +prompt("unesite neki broj:");
if (isNaN(broj)) {
  console.log("niste uneli korektan broj.");
} else {
  console.log(broj ** 2);
}

2;

for (let i = 1; i < 101; i++)
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FIZZ BUZZ");
  } else if (i % 3 === 0) {
    console.log("FIZZ");
  } else if (i % 5 === 0) {
    console.log("BUZZ");
  } else {
    console.log(i);
  }

3;

let brojac = 1;
for (let i = 1; brojac < 4; i++) {
  if (i % 4 === 0 && i % 6 === 0) {
    console.log(i);
    brojac++;
  }
}
