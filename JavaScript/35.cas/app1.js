// U Fibonacijevom nizu cije vrednosti ne prelaze 4 miliona,pronaci sumu parnih elemenata.

const fibonaci = () => {
  const arr = [1, 1];
  let i = 2;
  while (arr[i - 2] + arr[i - 1] <= 4000000) {
    arr.push(arr[i - 2] + arr[i - 1]);
    i++;
  }
  return arr.filter((el) => el % 2 === 0).reduce((prev, curr) => prev + curr);
};
console.log(fibonaci());

// every() Array iterator metoda nam sluzi za proveru da li je svaki elememt niza prosao test.
// Ova metoda vraca boolean.

const godine = [17, 22, 18, 22, 19];

const isEveryAdult = godine.every((student) => student > 17);
console.log(isEveryAdult);

// some() metoda proverava da li je bar jedan element niza prosao test.
// Ova metoda vraca boolean.

const isSomeAdult = godine.some((student) => student > 17);
console.log(isSomeAdult);
