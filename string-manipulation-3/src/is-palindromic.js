/* eslint-disable no-unused-vars */

const isPalindromic = string => {
  const newString = string.toLowerCase().replace(' ', '');
  for (var i = 0; i <= (newString.length / 2); i++) {
    if (newString[i] !== newString[newString.length - (i + 1)]) return false;
  }
  return true;
};
