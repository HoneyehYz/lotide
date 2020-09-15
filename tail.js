// FUNCTION IMPLEMENTATION
const assertEqual = function(arr, newArr) {
  if (arr.length === newArr.length) {
    console.log(`✅✅✅Assertion Passed: ${arr.length} === ${newArr.length}`);
  } else {
    console.log(`🛑🛑🛑Assertion failed: ${arr.length} !=== ${newArr.length}`);
  }
};

// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);
//assertEqual("bootcamp", "Bootcamp");
const tail = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArr[i] = arr[i + 1];
    console.log(newArr);
  }
  return newArr;
};

assertEqual([5,6,7],tail([5,6,7]));