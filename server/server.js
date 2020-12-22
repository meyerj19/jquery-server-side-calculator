const express = require('express');
const bodyParser = require('body-parser');

//call express function, create server & save in app
const app = express();
const PORT = 5000;

//serve static files - html. css, js, etc
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));


//serve data
const equation = [];
console.log('first', equation);
app.post('/data', (req, res) => {
    //retrieve sent data
    let newEquation = req.body;
    console.log('r', req.body)
    console.log('newEquation', newEquation)
    equation.push(newEquation);
    res.sendStatus(201);  
    calculation(equation);


});

//get route
app.get('/data', (req, res) => {
    console.log('to /data');
    const allEquations = calculation()
    res.send(allEquations);
});

function calculation() {
    console.log(equation);
    
    let result = [];
    let lastResult = '';
    for (let i = 0; i < equation.length; i++ ) {
        let total = 0 
        const expression = equation[i];
        const firstNumber = expression.firstNumber;
        const secondNumber = expression.secondNumber;
        const operation = expression.operation
        let expressionDisplay = '';
        // const { operation: [firstNumber, secondNumber]} = expression
        if (operation === "add"){
            total = Number(firstNumber) + Number(secondNumber)
            expressionDisplay = firstNumber + " + " + secondNumber + " = " + total
            console.log('total', total)
        } else if (operation === "minus") {
            total = Number(firstNumber) - Number(secondNumber)
            expressionDisplay = firstNumber + " - " + secondNumber + " = " + total
        } else if (operation === "multiply") {
            total = Number(firstNumber) * Number(secondNumber)
            expressionDisplay = firstNumber + " * " + secondNumber + " = " + total
        } else if (operation === "divide") {
            total = Number(firstNumber) / Number(secondNumber)
            expressionDisplay = firstNumber + " / " + secondNumber + " = " + total
        }
        result.push(expressionDisplay);
        console.log(total);
        lastResult = total;
    }
    return {equations: result, lastResult: lastResult};
}






//this starts up server
app.listen(PORT, () => {
    //this log should run when server starts
    console.log('server running on PORT', PORT)
});