// Domaci zadaci:
// 1. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
function is_in_range(num1, num2) {
  if (
    (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) ||
    (num1 >= 70 && num1 <= 100 && num2 >= 70 && num2 <= 100)
  ) {
    return true;
  } else {
    return false;
  }
}
console.log(is_in_range(55, 59));
// 2. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

function find_largest(num1, num2) {
  if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
    return Math.max(num1, num2);
  } else {
    return "Both numbers must be in the range 40..60 inclusive";
  }
}
console.log(find_largest(45, 78));
console.log(find_largest(45, 55));
