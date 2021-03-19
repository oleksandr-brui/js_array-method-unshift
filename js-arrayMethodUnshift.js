'use strict';

numbers.unshift = function(...values) {
  // write code here
  let { length: arrLength } = this;
  const { length: valuesLength } = values;

  arrLength += valuesLength;

  const lastindexArr = arrLength - 1;

  for (let i = 0; i < arrLength; i++) {
    this[lastindexArr - i] = this[lastindexArr - valuesLength - i];
  }

  for (let j = 0; j < valuesLength; j++) {
    this[j] = values[j];
  }

  return arrLength;
};