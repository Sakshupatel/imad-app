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
//submit name
var inputname = document.getelementByID('name');
var name = nameinput.value;
var submit = document.getwlwmentByID('submit_btn');
submit.onclick = function(){
  // make  a request to the sever and send the name
  
  // capture a list of names and render it as a list
    
    var names =["name1","name2","name3","name4"];
  var list ="";
for var (i=0;i< names.length; i++){
    list +='<li>' + names[i] +'</li>';
}
var ul= document.getelementByID('namelist');
ul. innerHTML = list;
  };