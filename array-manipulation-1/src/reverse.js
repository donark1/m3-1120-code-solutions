/* eslint-disable no-unused-vars */
const reverse = array => {
  for (let a = 0; a <= Math.floor((array.length - 1) / 2); a++) {
    const newArray = array[a];
    array[a] = array[array.length - 1 - a];
    array[array.length - 1 - a] = newArray;
  }
  return array;
};
