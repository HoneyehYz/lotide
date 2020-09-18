// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !=== ${expected}`);
  }

};

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("bootcamp", "Bootcamp");


const findKey = function(obj, callback) {
  // empty for now :)

  for (let item in obj){
    //console.log(obj[item].stars);
    //console.log(obj[key]);
     
    if(callback(obj[item]))
    {
      console.log(item);
      return item;
    }
    
  }

  return undefined;
}






assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma")// => "noma"
//console.log(result)