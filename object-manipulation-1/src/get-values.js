/* eslint-disable no-unused-vars */
const getValues = (object) => {
  const array = [];
  for (let a in object) {
    array.push(object[a]);
  }
  return array;
}
