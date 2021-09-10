/* eslint-disable no-unused-vars */

const takeRight = (array, count) => {
  const newArray = [];
  if (array.length === 0) {
    return newArray;
  } else {
    const length = array.length - count;
    for (let i = length; i <= array.length - 1; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
};
