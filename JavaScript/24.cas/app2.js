// JavaScript Math Object //

// JavaScript Math Objekat nam dozvoljava da izvrsavamo razlicite zadatke sa brojevima.

// Math Propterise (Svojstva-Konstante)

// Bilo kojoj matematickoj konstanti mozemo pristupiti:
// Math.property_name

// JavaScript nam obezbedjuje 8 razlicitih matmatikih konstanti, kojiima jedino mozemo pristupiti preko Math
// objekata.

Math.E;
Math.PI;
Math.SQRT2;
Math.SQRT1_2;
Math.LN2;
Math.LN10;
Math.LOG2E;
Math.LOG10E;

// Write a JavaScript program to find the largest of three integers.

function najvecaOdTri(a, b, c) {
  let najveca = a;
  if (b >= a && b >= c) {
    b = najveca;
  } else if (c > a && c >= b) {
    c = najveca;
  }
  return najveca;
}
console.log(najvecaOdTri(2, 4, 6));
console.log(najvecaOdTri(4, 8, 6));
