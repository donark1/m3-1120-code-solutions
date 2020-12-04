/* eslint-disable no-unused-vars */
const tail = array => {
  const newArray = [];
  for (let a = 1; a <= array.length - 1; a++) {
    newArray.push(array[a]);
  }
  return newArray;
};
