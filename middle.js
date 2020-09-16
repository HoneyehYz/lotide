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

//eqArrays([1, 2, 3], [1, 2,3]);
//eqArrays([1, 2, 3], [3, 2, 1]);
//eqArrays(["1", "2", "3"], ["1", "2", "3"]);
//eqArrays(["1", "2", "3"], ["1", "2", 3]);



// FUNCTION IMPLEMENTATION
const assertEqual = function(arr) {
  //console.log(result);
  if (arr) {
    console.log(`✅✅✅Assertion Passed`);
  } else {
    console.log(`🛑🛑🛑Assertion failed`);
  }

};


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

//assertEqual(assertArraysEqual([1, 2, 3], [1, 2,3]));
//assertEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]));
//assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
//assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]));

const middle = function(arr) {
  let middleArray = [];
  
    if(arr.length == 1 || arr.length == 2) {
      arr = [];
    } else if (arr.length % 2 == 1) {
      middleArray = [arr[Math.floor(arr.length/2)]];
    } else if (arr.length % 2 == 0) {
      middleArray = [arr[(arr.length/2)-1], arr[(arr.length/2)]]; 
    }
    console.log("this is middle array:", middleArray);
    return middleArray;

}

assertEqual(middle([1])); // => []
assertEqual(middle([1, 2])); // => []

assertEqual(middle([1, 2, 3])); // => [2]
assertEqual(middle([1, 2, 3, 4, 5])); // => [3]
assertEqual(middle([1, 2, 3, 4])); // => [2, 3]
assertEqual(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
