//counter code
var button = document.getElementByID('counter');
var counter=0;
button.onclick = function(){
  // make  to the counter endpoint
  
  // capture the response and it in a variable
  
  // render the variable in the correct span
  counter = counter +1;
  var span = document.getElementByID('count');
  span.innerHTML =counter.tostring();
  
    
};