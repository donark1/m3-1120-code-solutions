/* eslint-disable no-unused-vars */
const ransomCase = (string) => {
  return string.split('').map((v, i) => i % 2 == 0 ? v.toLowerCase() : v.toUpperCase()).join('');
}
