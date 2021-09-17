/* eslint-disable no-unused-vars */

const pick = (source, keys) => {
  var result = {};
  for (var key in keys) {
    for (var sourceKey in source) {
      if (keys[key] === sourceKey && source[sourceKey] !== undefined) {
        result[sourceKey] = source[sourceKey];
      }
    }
  }
  return result;
};
