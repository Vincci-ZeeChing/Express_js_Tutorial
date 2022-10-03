const express = require('express');
const app = express();

const {people} = require('./data');

//static assets
app.use(express.static('./method-public'))

// parse form data
app.use(express.urlencoded({ extended:false }))  // urlencoded : is a middleware function. It parses incoming request with payload and is base on body-parser

// parse json
app.use(express.json())

app.get('/api/people',(req, res)=>{
    res.status(200).json({success: true,data:people});
})

app.post('/api/people',(req, res)=>{
    const {name} = req.body;
    if (!name){
        return res.status(400).json({success: false,msg:'Please provide name value'})
    }
    res.status(201).json({success: true,person:name});
})

app.post('/login',(req, res)=>{
    const {name} = req.body;
    if (name){
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('Please provider credentials')
    res.send('POST')
})

app.post('/api/postman/people',(req, res)=>{
    const {name} = req.body;
    if (!name){
        return res.status(400).json({success: false,msg:'Please provide name value'})
    }
    return res.status(200).json({success: true,data:[...people,name]})
})

app.put('/api/people/:id',(req, res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((person)=>person.id === Number(id))
    if (!person){
        return res.status(400).json({success: false,msg:`no person with id ${id}`})
    }
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success: true,data:newPeople})
})

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person)=>person.id === Number(req.params.id))
    if (!person){
        return res.status(404).json({success: false,msg:`no person with id ${res.params.id}`})
    }
})

app.listen(5000,()=>{
    console.log('listening on port 5000');
})