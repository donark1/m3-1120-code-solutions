/* eslint-disable no-unused-vars */
const toObject = (keyValuePair) => {
  const object = {};
  const propertyOne = keyValuePair[0];
  object[propertyOne] = keyValuePair[1];
  return object;
}
