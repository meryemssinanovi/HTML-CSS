// 1. Iz niza od 10 elemenata iyracunti sumu parnih brojeva niza.

const numbers = [2, 4, 5, 7, 8, 10, 11, 14, 16];
const sum = (arr) => {
  const sum = arr.reduce((prev, curr) => {
    if (curr % 2 === 0) {
      return prev + curr;
    } else {
      return prev;
    }
  }, 0);
  return sum;
};
console.log(sum(numbers));

// ugnjezdena for petlja
// 3. write a JavaScript program to find the most requent item of an array.
// simple array

const arr1 = [3, 4, 5, 6, 7, 7, 7, 7, 8, 9, 9, 1, 1, 1, 2, 3];

for (let i = 0; i < arr11.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    console.log(arr11[i], arr1[j]);
  }
}
