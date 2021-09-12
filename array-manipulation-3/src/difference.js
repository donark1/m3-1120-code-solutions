/* eslint-disable no-unused-vars */

const difference = (first, second) => {
  const differenceArray = first.concat(second);
  const newArray = [];
  for (var i = 0; i <= differenceArray.length - 1; i++) {
    if ((first.includes(differenceArray[i]) && second.includes(differenceArray[i])) === false) {
      newArray.push(differenceArray[i]);
    }
  }
  return newArray;
};
