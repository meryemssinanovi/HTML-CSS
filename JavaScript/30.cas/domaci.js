let tipa_string = 0;
let tipa_broj = 0;
let tipa_boolean = 0;
let tipa_array = 0;
for (let i = 0; i < niz.length; i++) {
  const element = niz[i];
  if (typeof element === "string") {
    tipa_string++;
  } else if (typeof element === "number") {
    tipa_broj++;
  }else if (typeof element === "boolean") {
    tipa_boolean++;
  }else (Array.isArray(element)){
    tipa_array++
  }
 }
console.log("broj elemenata koji su tipa string", tipa_string)
console.log("broj elemenata koji su tipa string", tipa_string)
console.log("broj elemenata koji su tipa string", tipa_string)
console.log("broj elemenata koji su tipa string", tipa_string)