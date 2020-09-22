
const assertArraysEqual = require('../assertArraysEqual');
const eqArraysNew = require('../eqArraysNew')

eqArraysNew(assertArraysEqual([1, 2, 3], [1, 2,3]));
eqArraysNew(assertArraysEqual([1, 2, 3], [3, 2, 1]));
eqArraysNew(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
eqArraysNew(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]));

