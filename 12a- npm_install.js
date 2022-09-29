// npm - global commands, come with node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const __ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = __.flattenDeep(items);
console.log(newItems)
console.log("hello world!")