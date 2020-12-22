
console.log('here');

$(document).ready(handleReady);

function handleReady() {
    console.log('in handleReady');
    getTotal();
    
    //click
    $('#equals').on('click', handleEquation)
    $('.operand').on('click', determineOperation)
    $('#clear').on('click', clearFields)

}

let operand;

function handleEquation() {
    console.log('in handleEquation');
    let equationToSend = {
        firstNumber: $('#firstNumber').val(),
        operation: operand,
        secondNumber: $('#secondNumber').val(),
    }
    console.log('ets', equationToSend);
    //send to server
    $.ajax({
      url: '/data',
      type: 'POST',
      data: equationToSend
    }).then(function(response){
        console.log(response);
        getTotal();
    
    })
}


function determineOperation(){
    console.log('in determineOperation');
  operand = $(this).data('operator');
  
}
console.log(operand);

function getTotal(){
    console.log('in getTotal');
    $.ajax({
        url: '/data',
        type: 'GET'
    }).then(function (response) {
        console.log(response);
        $('#answer').empty();
        $('#answer').append(response.lastResult);
        $('#equation').empty();
        let responseList = '';
        for (let i=0; i<response.equations.length; i++){
         const currentEquation = response.equations[i];
         responseList += "<li>"+currentEquation + "</li>"
        }
        console.log(responseList);
        $('#equation').append(responseList);
    
    });

}

function clearFields() {
    console.log('in clearFields');
    $(('#firstNumber')).val('');
    $(('#secondNumber')).val('');
    console.log(this);

}

