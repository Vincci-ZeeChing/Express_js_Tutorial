const path = require('path');

console.log(path.sep)

const filePath = path.join('/content/','subfolder','test.txt')
console.log(filePath)

const basePath = path.basename(filePath)
console.log(basePath)

const absolute = path.resolve(__dirname,'content','subfolder','text.txt')
console.log(absolute)