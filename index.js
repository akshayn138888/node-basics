const add = require("./add.js");
const primes = require("./primes.js");

console.log(primes.reduce(add, 0));