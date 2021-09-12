/* eslint-disable no-unused-vars */

const intersection = (first, second) => {
  const filteredSet = new Set(second);
  return [...new Set(first)].filter(x => filteredSet.has(x));
};
