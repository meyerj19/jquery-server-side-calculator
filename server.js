const express = require('express');
const bodyParser = require('body-parser');

//call express function, create server & save in app
const app = express();
const PORT = 5000;

//serve static files - html. css, js, etc
app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended : true}));

//serve data
const equation = [first, sign, second];
app.post('/data', (req, res) => {
    //retrieve sent data
    let newEquation = req.body;
    console.log(newEquation)
    equation.push(newEquation);
    res.sendStatus(201);
});
















//this starts up server
app.listen(PORT, () => {
   //this log should run when server starts
   console.log('server running on PORT', PORT)
});