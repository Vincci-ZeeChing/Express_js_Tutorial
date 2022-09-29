//CommonJS, every file is module (by default)
// Modules - Encapsulates Code (only share minimum // what we want)

const name = require('./4-names');
const sayHI = require('./5-utils')
// console.log(name)
// console.log(sayHI)
// sayHI('susan')
// sayHI(name.john)
// sayHI(name.peter)

const data = require('./6-alternative_flavor')
// console.log(data)

require('./7-mind-grenade')

