/* eslint-disable no-unused-vars */

const equal = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0, len = first.length; i < len; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};
