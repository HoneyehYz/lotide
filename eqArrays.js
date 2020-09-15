// FUNCTION IMPLEMENTATION
const assertEqual = function(result) {
  if (result == true) {
    console.log(`✅✅✅Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑Assertion failed`);
  }

};


const eqArrays = function(arrOne, arrTwo) {
  if(arrOne.length == arrTwo.length){
    let result = true ;
    for(var i = 0; i < arrOne.length; i++){
      if(arrOne[i] !== arrTwo[i]) {
        result = false;
      } 
    
    }
    if(result == true)
    {
      //console.log("Equal");
      return true;
    } else {
      //console.log("Not Equal");
      return false;
    }
  } else {
    //console.log("Not Equal");
    return false;
  }

  return arrOne,arrTwo;
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
//assertEqual(1, 1);
//assertEqual("bootcamp", "Bootcamp");
