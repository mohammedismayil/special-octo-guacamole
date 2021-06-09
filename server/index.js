const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3001
const db = require('./db')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


// connecting the mongo database


db.on('error', console.error.bind(console, 'MongoDB connection error:'))
app.get('/', (req, res) => {
    // res.send('Hello/ World!')

    res.json({"user_name":"ismayilll","age":240})



})

app.listen(apiPort,()=>{
    console.log(`Server running on port ${apiPort}`) 
    console.log(`Again Server running on port ${apiPort}`)
})


// console.log(`Server running on port ${apiPort}`)

// console.log(`Again Server running on port ${apiPort}`)


