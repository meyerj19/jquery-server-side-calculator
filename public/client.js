console.log('here');

$(document).ready(handleReady);

function handleReady(){
    console.log('in handleReady');
    getEquation();

    $('#equals').on('click', handleEquation)
}

function handleEquation(){
console.log('in handleEquation');

}


function getEquation(){
console.log('in getEquation');

}

