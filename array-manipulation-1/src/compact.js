/* eslint-disable no-unused-vars */
const compact = array => {
  const newArray = [];
  for (let a = 0; a <= array.length - 1; a++) {
    if (array[a] !== false && array[a] !== null && array[a] !== 0 && array[a] && array[a] !== undefined && array[a] !== '') {
      newArray.push(array[a]);
    }
  }
  return newArray;
};
