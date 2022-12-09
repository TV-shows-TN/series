function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
   if((username == "med13nacef" && password == "azerty13") || (username == "med17ali" && password == "azerty17")){
    alert("Login successfully to watch TN"); 
     window.location = "../home/html.html";
   }
     else {
      alert("You have enetered wrong inputs")
     }
     return false;
  }              
          
        