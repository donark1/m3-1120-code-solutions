/* eslint-disable no-unused-vars */
const numVowels = (string) => {
  return (string = string.match(/[aeiouAEIOU]/gi)) ? string.length : 0;
}
