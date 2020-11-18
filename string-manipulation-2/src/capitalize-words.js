/* eslint-disable no-unused-vars */
const capitalizeWords = (string) => {
  return string.toLowerCase().replace(/\b./g, function (a) { return a.toUpperCase(); });
}
