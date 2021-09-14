/* eslint-disable no-unused-vars */
const isAnagram = (firstString, secondString) => {
  const newFirstString = firstString.split('').sort().join('').replace(/[^a-z\d]/g, '');
  const newSecondString = secondString.split('').sort().join('').replace(/[^a-z\d]/g, '');
  if (newFirstString === newSecondString) {
    return true;
  } else {
    return false;
  }
};
