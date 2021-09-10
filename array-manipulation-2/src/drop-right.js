/* eslint-disable no-unused-vars */

const dropRight = (array, count) => {
  const newArray = [];
  if (array.length === 0) {
    return newArray;
  } else {
    const length = array.length - count;
    for (let i = 0; i < length; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
};
