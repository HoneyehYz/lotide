// FUNCTION IMPLEMENTATION
/*const assertEqual = function(result) {
  //console.log(result);
  if (result[2]) {
    console.log(`✅✅✅Assertion Passed ${result[0]} = ${result[1]}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed ${result[0]} != ${result[1]}`);
  }

};*/


const eqArrays = function(arrOne, arrTwo) {
  let output = [];
  output[0] = arrOne;
  output[1] = arrTwo;
  
  if(arrOne.length == arrTwo.length){
    output[2] = true ;
    for(var i = 0; i < arrOne.length; i++){
      if(arrOne[i] !== arrTwo[i]) {
        output[2] = false;
      } 
    
    }
    if(output[2] == true)
    {
      console.log("Equal");
      return output;
    } else {
      console.log("Not Equal");
      return output;
    }
  } else {
    console.log("Not Equal");
    output[2] = false
    return output;
  }
return "hi";
}

eqArrays([1, 2, 3], [1, 2,3]);
eqArrays([1, 2, 3], [3, 2, 1]);
eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]));

