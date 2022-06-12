const express = require('express')
const cors = require('cors');

const app = express()

app.use(cors({
    origin: '*'
}));

app.get('/', function (req, res) {
    res.send('Aula')
})

app.get('endpoint2', function (req, res) {
    res.send('endpoint')
 })

app.listen(3001, function (){
    console.log("OK!")
})

