// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !=== ${expected}`);
  }

};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("bootcamp", "Bootcamp";

const countLetters = function(inputString) {

const vocab = {}
for(letters of inputString) {
  if(vocab[letters]){
    vocab[letters] += 1  ;
  } else {
    vocab[letters] = 1;
  }
  
}
console.log(vocab);
}

assertEqual(countLetters('LHL'));