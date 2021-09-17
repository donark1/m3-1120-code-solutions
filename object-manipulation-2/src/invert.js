/* eslint-disable no-unused-vars */
const invert = source => {
  var reverse = {};
  for (var key in source) {
    reverse[source[key]] = key;
  }
  return reverse;
};
