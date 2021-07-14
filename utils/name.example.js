const data = require('../data/data.json');
const {
  getWaifuName,
  getWaifuLastName,
  getWaifuFullName,
} = require('./waifu');

console.log(getWaifuName(data));
console.log(getWaifuLastName(data));
console.log(getWaifuFullName(data));
