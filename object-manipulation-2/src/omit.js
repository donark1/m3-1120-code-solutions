/* eslint-disable no-unused-vars */

const omit = (source, keys) => {
  var target = {};
  for (var i in source) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(source, i)) continue;
    target[i] = source[i];
  }
  return target;
};
