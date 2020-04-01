// Use Multiple Conditional (Ternary) Operators

// In the previous challenge, you used a single conditional operator. You can also chain them together to check for multiple conditions.

// The following function uses if, else if, and else statements to check multiple conditions:

// function findGreaterOrEqual(a, b) {
//   if(a === b) {
//     return "a and b are equal";
//   }
//   else if(a > b) {
//     return "a is greater";
//   }
//   else {
//     return "b is greater";
//   }
// }
// The above function can be re-written using multiple conditional operators:

// function findGreaterOrEqual(a, b) {
//   return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
// }

function checkSign(num) {
  return (num === 0) ? "zero" : (num > 0) ? "positive" : "negative";
}

checkSign(10); // positive