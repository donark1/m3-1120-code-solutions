/* eslint-disable no-unused-vars */
const reverseWord = (word) => {
  return (word === '') ? '' : reverseWord(word.substr(1)) + word.charAt(0);
}
