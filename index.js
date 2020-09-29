// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const without = require('./without');
const takeUntil = require('./takeUntil')
const map = require('./map');
const letterPositions = require('./letterPositions'),
const findKeyByValue = require('./findKeyByValue'),
const findKey = require('./findKey'),
const eqObjects = require('./eqObjects'),
const eqArraysNew = require('./eqArraysNew'),
const eqArrays = require('./eqArrays')




module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  without: without,
  takeUntil: takeUntil,
  map: map,
  letterPositions: letterPositions, 
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  eqObjects: eqObjects,
  eqArraysNew: eqArraysNew,
  eqArrays: eqArrays

};