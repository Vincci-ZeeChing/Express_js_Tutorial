const express = require('express')
const app = express()
const morgan  = require('morgan')
const logger = require('./logger')
const authorize = require('./authorize')
//req => middleware  => res

// 1. use vs route
// 2. options - our own / express / third party

// const logger = (req,res,next) =>{
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method,url,time)
//     next()
// }

// app.use([logger, authorize])
// api/home/about/products

app.use(morgan('tiny'))

app.use(express.static('./public'))

app.get('/',(req, res) => {
    res.send('Home')
})

app.get('/about',(req, res) => {
    res.send('About')
})

app.get('/api/items',(req, res) => {
    console.log(req.user)
    res.send('Items')
})

app.get('/api/products',(req, res) => {
    res.send('Products')
})




app.listen(5000,()=>{
    console.log('Server listening on port 5000')
})
