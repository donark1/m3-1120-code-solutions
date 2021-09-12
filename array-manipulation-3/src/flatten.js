/* eslint-disable no-unused-vars */

const flatten = array => {
  const combinedArray = [].concat.apply([], array);
  return combinedArray;
};
