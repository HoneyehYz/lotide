// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑Assertion failed: ${actual} !=== ${expected}`);
//   }

// };

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
//assertEqual("bootcamp", "Bootcamp");
const assertEqual = require('./assertEqual');

const head = function(arr) {
  let first = '';
  for(var i = 0; i < arr.length; i++){
    first = arr[0];
    if(arr === []) {
      return undefined;
    }
    
  }
  return first;
}

module.exports =head; 
