const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

//require config msg
const configMail = require('./configMail');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req , res) => {
    res.send('Hello world');
});

app.post('/form', (req,res) => {
    console.log(req.body);
    configMail(req.body);

    res.status(200).send();
});

app.listen(3000,() => {
    console.log('Server running..');
});