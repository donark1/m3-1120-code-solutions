/* eslint-disable no-unused-vars */

const zip = (first, second) => {
  const newArray = [];
  for (var i = 0; i <= first.length - 1; i++) {
    if (first[i] !== undefined && second[i] !== undefined) {
      var items = [];
      items.push(first[i]);
      items.push(second[i]);
      newArray.push(items);
    }
  }
  return newArray;
};
