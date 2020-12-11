/* eslint-disable no-unused-vars, no-console */
const takeAChance = require('./take-a-chance');

const name = takeAChance('Don');

name.then(a => {
  console.log(a);
});

name.catch(error => {
  console.error(error);
});
