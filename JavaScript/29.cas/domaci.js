// Domaci:
// 1. Write a JavaScript function to check whether an `input` is an array or not.

// function isArray(arr)
// 2. Write a JavaScript function to clone an array.

cloneArr = (arr) => {
  const arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
};
console.log(cloneArr([1, 2, 3, 4, 5, 6, 7, 8, 8]));
// FOr petlja se koristi kodd iterirajucih objekata(2.verzija)
//  for (let element of arr) {
//     arr2[i] = element;
//   }DIREKTNO IMAMO ELEMENT (NIJE NEOPHOFNI PRISTUPANI PREKO INDEKSA)

// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

const firstN = (arr, n) => {
  // if (n === undefined){
  //     return arr[0]
  // }else {

  // }
  for (let i = 0; i < n; i++) {
    console.log(arr[i]);
  }
  return;
};
console.log(firstN[(5, 4, 3, 2, 1)]);
console.log(firstN[(5, 4, 3, 2, 1)], 3);
