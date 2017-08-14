//counter code
var button = document.getElementByID('counter');

button.onclick = function(){
    
  //  create the request object
  var request =new XMLHtpprequest();
  
  // capture the response and it in a variable
  request.onreadystatechange = function() {
if (request.readystatechange === XMLHtpprequest.DONE) {
    // take some action
    if(request.status===200) {
        var counter = request.resposeText;
        var span = document.getElementByID('count');
         span.innerHTML =counter.tostring();
}
}
    // not done yet
  };
// make  the request  
request.open('GET','https://sakshipatel5555.imad.hasura.io/counter',true);
request.send(null);
};