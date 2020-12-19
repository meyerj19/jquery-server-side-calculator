console.log('here');

$(document).ready(handleReady);

function handleReady() {
    console.log('in handleReady');
    getTotal();
    
    //click
    $('#equals').on('click', handleEquation)
    $('#add').on('click', determineOperationAdd)
}

function handleEquation(sign) {
    console.log('in handleEquation');
    let equationToSend = {
        firstNumber: $('#firstNumber').val(),
        operation: "+",
        secondNumber: $('#secondNumber').val(),
    }
    console.log(equationToSend);
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

//let sign = "";
function determineOperationAdd(){
    console.log('in determineOperationAdd');
  //sign = "+";
  sign = $('#add')
  console.log(sign);
  return  sign;
}

function getTotal(){
    console.log('in getTotal');
}

function getEquation() {
    console.log('in getEquation');

}

