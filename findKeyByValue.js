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
// assertEqual("bootcamp", "Bootcamp");

const findKeyByValue = function(obj,value){
  for (var key in obj){
    
    //console.log(obj[key]);
    if(obj[key] === value )
    {
      console.log(key);
      return key;
    }
    
  }
}






const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine", 
  drama:  "The Wire",
  mysterious: "Goorkan"
};
//findKeyByValue(bestTVShowsByGenre, "The Wire");
//indKeyByValue(bestTVShowsByGenre);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Goorkan"), "mysterious");



