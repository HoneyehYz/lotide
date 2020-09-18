// FUNCTION IMPLEMENTATION
const assertEqual = function(result) {
  //console.log(result);
  if (result[2]) {
    console.log(`✅✅✅Assertion Passed ${result[0]} = ${result[1]}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed ${result[0]} != ${result[1]}`);
  }

};



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

const assertArraysEqual = function(arrOne, arrTwo) {
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
      //console.log("Equal");
      return output;
    } else {
      //console.log("Not Equal");
      return output;
    }
  } else {
    output[2] = false
    return output;
  }
return "hi";
}




const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  // empty for now :)
const results = [];
for (let item of array) {
  results.push(callback(item));
}
return results;
}



// const results1 = map(words, word => word[0]);
// console.log(results1);


assertEqual(eqArrays(map(words,word => word[0]),[ 'g', 'c', 't', 'm', 't' ]));
// //assertEqual(1, 1);
// assertArraysEqual(eqArrays["hello", "Bootcamp"], ["h","B"]);
