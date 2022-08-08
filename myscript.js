let password = document.querySelector("#user_password");
let confirmPassword = document.querySelector("#user_confirm_password");
let whitebox = document.getElementById("whitebox");

function checkPassword() {
    if(password.value!=confirmPassword.value){
        password.style.border = "2px solid red";
        confirmPassword.style.border = "2px solid red";
        document.getElementById("subbutton").disabled = true;
        document.getElementById("subbutton").style.backgroundColor = 'lightblue';
        
    }
    if(password.value==confirmPassword.value){
        password.style.border = "2px solid green";
        confirmPassword.style.border = "2px solid green";
        document.getElementById("subbutton").disabled = false;
        document.getElementById("subbutton").style.backgroundColor = '#038ce7';
    }
  }
  
  confirmPassword.addEventListener('keyup', checkPassword);