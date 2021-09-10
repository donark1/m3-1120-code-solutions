/* eslint-disable no-unused-vars */

const chunk = (array, size) => {
  const newArray = [];
  for (let i = 0; i <= array.length - 1; i++) {
    const lastItem = newArray[newArray.length - 1];
    if (!lastItem || lastItem.length === size) {
      newArray.push([array[i]]);
    } else {
      lastItem.push(array[i]);
    }
  }
  return newArray;
};
