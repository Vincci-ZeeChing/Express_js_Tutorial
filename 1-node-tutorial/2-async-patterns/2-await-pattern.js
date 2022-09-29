const {readFile,writeFile} = require('fs').promises;

// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


// console.log('Start')
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path,'utf8', (err, data)=>{
//             if (err){
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })
//     })
// }

const start = async () => {  //The keyword async before a function makes the function return a promise:
    try {
        const first = await readFile('./content/first.txt', 'utf8') //The keyword await before a function makes the function wait for a promise, await keyword can only be used inside an async function.
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-mind-grenade.txt',`This is awesome : ${first} ${second}`,{flag:'a '});
        console.log(first,second)
    }catch (error) {
        console.log(error);
    }
}

start();

// getText('./content/first.txt')
//     .then(result=>console.log(result))
//     .catch(err=>console.log(err))

