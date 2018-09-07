function accordion() {
    var acc = document.getElementsByClassName("accordion");
    var arrow = document.getElementsByClassName("arrow-style");
    var i;
    for (i = 0; i < acc.length; i++) {
        
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("panel-show");
    });
}
}

function validate(){
    var password = document.getElementById("transaction-password-input").value;
    var allowedCharacters = /^[0-9a-zA-Z]+$/;
    var messageDiv = document.getElementById("warnning-message");
    messageDiv.classList.add("show")
    if(password.length > 0){
       if(password.match(allowedCharacters)){
        messageDiv.classList.remove("show");
        alert("Password accepted");
    }
    else{
        
        messageDiv.innerHTML="Please enter password which should not contain any symbols";
    }
    }else{
        messageDiv.innerHTML="Please enter password which should not contain any symbols";
       }
}

function removeMsg(){
    document.getElementById("warnning-message").classList.remove("show");
}