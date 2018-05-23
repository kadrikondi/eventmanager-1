// import installed packages
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const router = require('./routes/index.js')


app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router)


// defining port for server to run on
const port = 3000

app.get('*', (req, res) => {
    res.send(`<h1>ERORR 404, PAGE NOT FOUND</h1>`)
})

// listen on the port
app.listen(port, () => {
    mongoose.connect('mongodb://eventmanager:kadzee222@ds231740.mlab.com:31740/kondipressdb')
    console.log(`our app is listening on port ${port}`)
})
