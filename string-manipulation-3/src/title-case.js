/* eslint-disable no-unused-vars */

const titleCase = string => {
  string = string.toLowerCase();
  const stringArray = string.split(' ');
  const exclude = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  const newArray = [];
  for (var i = 0; i <= stringArray.length - 1; i++) {
    if (i !== 0 && exclude.includes(stringArray[i])) {
      if (stringArray[i - 1][stringArray[i - 1].length - 1] === ':') {
        const wordBreak = stringArray[i].split('');
        wordBreak[0] = wordBreak[0].toUpperCase();
        newArray.push(wordBreak.join(''));
        if (i < stringArray.length - 1) {
          newArray.push(' ');
        }
      } else {
        newArray.push(stringArray[i]);
        newArray.push(' ');
      }
    } else if (stringArray[i] === 'javascript') {
      newArray.push('JavaScript');
      if (i < stringArray.length - 1) {
        newArray.push(' ');
      }
    } else if (stringArray[i] === 'api') {
      newArray.push('API');
      if (i < stringArray.length - 1) {
        newArray.push(' ');
      }
    } else {
      const wordBreak2 = stringArray[i].split('');
      wordBreak2[0] = wordBreak2[0].toUpperCase();
      newArray.push(wordBreak2.join(''));
      if (i < stringArray.length - 1) {
        newArray.push(' ');
      }
    }
  }

  var word = newArray.join('');

  if (word.includes('Javascript:')) {
    word = word.replace('Javascript:', 'JavaScript:');
  }

  if (word.includes('-')) {
    const index = word.indexOf('-');
    word = word.replace(word[index + 1], word[index + 1].toUpperCase());
  }

  return word;
};
