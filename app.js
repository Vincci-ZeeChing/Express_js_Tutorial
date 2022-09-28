//CommonJS, every file is module (by default)
// Modules - Encapsulates Code (only share minimum // what we want)
const sayHI = require('./5-utils')
const name = require('./4-names');

console.log(name)
console.log(sayHI)

sayHI('susan')
sayHI(name.john)
sayHI(name.peter)