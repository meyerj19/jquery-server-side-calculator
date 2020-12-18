const express = require('express');
const bodyParser = ('body-parser');

//call express function, create server & save in app
const app = express();
const PORT = 5000;

//serve static files - html. css, js, etc
app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({extended : true}));















//this starts up server
app.listen(PORT, () => {
   //this log should run when server starts
   console.log('server running on PORT', PORT)
});