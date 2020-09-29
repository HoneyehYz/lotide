// const tail = require('../tail');
// const assertEqual = require('../assertEqual');


// assertEqual([5,6,7],tail([5,6,7]));



const assert = require('chai').assert;
const tail = require('../tail');;

describe("#tail", () => {
  
  it("returns [ 2, 3 ] for [ 1, 2, 3 ]", () => {
    assert.strictEqual(tail([ 1, 2, 3 ]), [ 2, 3 ]);
  });

});


