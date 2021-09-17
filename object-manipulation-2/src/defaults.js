/* eslint-disable no-unused-vars */
const defaults = (target, source) => {
  var targetKeys = Object.keys(target);
  var sourceKeys = Object.keys(source);
  var counter = 0;
  for (var i = 0; i <= sourceKeys.length - 1; i++) {
    if (sourceKeys[i] === targetKeys[counter]) {
      counter++;
    } else {
      target[sourceKeys[i]] = source[sourceKeys[i]];
    }
  }
};
