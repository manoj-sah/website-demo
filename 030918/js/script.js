var getHeightofDisplayBlock = function(element){
  element.style.display = 'block';
  var height = element.scrollHeight+"px";
  console.log(height);
  element.style.display = '';
  return height;
}

function accordion() {
    var acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        var height = getHeightofDisplayBlock(this.nextElementSibling);
        var arrow = this.childNodes[1].classList;
        if(arrow.contains("fa-angle-up")){
            this.nextElementSibling.style.height = 0+"px";
            arrow.remove("fa-angle-up");
            arrow.add("fa-angle-down");
        }else{
            this.nextElementSibling.style.height = height;
            arrow.add("fa-angle-up");
            arrow.remove("fa-angle-down");
        }

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
