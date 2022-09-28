//Global - No Windows !!!

// dirname - path to current directory
// __filename - file name
// require function to use module (CommonJS)
// module - info about current module (file)
// process - info about env where the program is being executed

// print every one second
console.log(__dirname)
 setInterval(()=>{
     console.log("Hello world!")
 },1000)