function validateEmail() {
    var inputEmail = document.getElementById("email").value;
    console.log(inputEmail);
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputEmail.match(mailformat)) {
      return true  
    } else {
        alert("Invalid email address!");
        
    }
}



function checkPass() {
    var inputPass = document.getElementById("pswd").value;
    console.log("");
    var validPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (inputPass.match(validPass)) {
       return true
    } else {
        alert('Password should be: 8 to 15 characters which contains at least one lowercase letter, one uppercase letter, one number and one special character')
        
    }
}