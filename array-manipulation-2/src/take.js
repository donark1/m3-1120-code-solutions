/* eslint-disable no-unused-vars */

const take = (array, count) => {
  const newArray = [];
  if (array.length === 0) {
    return newArray;
  } else {
    for (let i = 0; i <= count - 1; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
};
