// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${actual} !=== ${expected}`);
  }

};

const eqArrays = function(arrOne, arrTwo) {
  let output;

  
  if(arrOne.length == arrTwo.length){
    output = true ;
    for(var i = 0; i < arrOne.length; i++){
      if(arrOne[i] !== arrTwo[i]) {
        output = false;
      } 
    
    }
    if(output == true)
    {
      return output;
    } else {
      return output;
    }
  } else {
    output = false
    return output;
  }
}






// console.log(eqArrays([1,2],[1,2]));

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("bootcamp", "Bootcamp");



const eqObjects = function(object1, object2) {
  if(Object.keys(object1).length !== Object.keys(object2).length){
    return false;
  } else {

    
    for(key1 in object1){
      let tmp = 0;
      for(key2 in object2)
      {
        // console.log(key1);
        // console.log(key2);

        if (key1 === key2){
          tmp = 1;
          break;
        }
      }

      if (tmp == 0 ){
        return false;
      }



      for(key in object1){
        if( !(eqArrays(object1[key],object2[key]))) {
          return false; 
        }
      }

        
        

      

    }
    
    

      
      
    }
  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2)); // => false

