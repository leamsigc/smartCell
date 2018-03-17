const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const expHandleBars =require('express-handlebars');

//require config msg
const configMail = require('./configMail');

const app = express();
app.engine('handlebars', expHandleBars());
app.set('view engine', 'handlebars');

//static folder
app.use('/public',express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());


app.get('/', (req , res) => {
    res.render('index');
});
app.post('/send', (req,res) => {
  // console.log(req.body);
    configMail(req.body);
    res.render('index',{msg:'Email has been sent Thank You!'});
});

app.listen(3000,() => {
    console.log('Server running..');
});