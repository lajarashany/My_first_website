/* functions for my quiz form */

function SendContact(){
var thyName = document.getElementById("infname");
var thyEmail = document.getElementById("inemail");
var thyMessage = document.getElementById("inmessage");
	
	var msg = "";
  if(thyName.value.length < 0){
    var msg = "Did you forget to input your name?";
  }

  else if(thyEmail.value.length < 5){
  	var msg = "That email is no good!";
  }

  else if(thyMessage.value.length < 3){
  	var msg = "Well, not much we can help you with";
  }

  else{
  	var msg = "We appreciate your feedback."
  }
  
  return alert(msg);


}

  
  