/* eslint-disable no-unused-vars */
const initial = array => {
  const newArray = [];
  for (let a = 0; a <= array.length - 2; a++) {
    newArray.push(array[a]);
  }
  return newArray;
};
