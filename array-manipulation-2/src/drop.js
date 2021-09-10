/* eslint-disable no-unused-vars */

const drop = (array, count) => {
  const newArray = [];
  if (array.length === 0) {
    return newArray;
  } else {
    return array.slice(count);
  }
};
