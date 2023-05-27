const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const app = new express()
require('./middleware/mongodb')
const path = require('path');

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(logger('dev'))
const api = require('./routes/api')
app.use('/api',api)
app.use(express.static(`./dist/<exitmean>`));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/exitmean/index.html'));
});

app.listen(3000,()=>{
    console.log("Server running at 3000")
})