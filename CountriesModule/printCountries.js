// The 'require' function will return the value assigned
// to 'module.exports' in the file given as path in the argument
const countries = require("./countries.js");

console.log("I want to visit: ");
for (let country of countries) {
  console.log(` - ${country}(${country.length})`);
}