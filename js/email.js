window.onload = function(){
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var serviceID = "service_h6kdfkm";
        var templateID = "template_sdv48mc";
        
        //reset input border colors so validation visualization is updated correctly
        document.getElementById("user_fname").style = "border: 2px solid #343536;";
        document.getElementById("user_lname").style = "border: 2px solid #343536";
        document.getElementById("user_email").style = "border: 2px solid #343536";
        document.getElementById("user_phone").style = "border: 2px solid #343536";
        document.getElementById("user_message").style = "border: 2px solid #343536";

        //if all input is valid, sends email and tells user email was sent
        if(isValidInput()){
        emailjs.sendForm(serviceID, templateID, this)
        .then(function() {
            document.getElementById("submit").value = "Sent!";
        }, function(error) {
            console.log('FAILED...', error);
        });
        }
    });
}

function isValidInput(){
    var user_fname = document.getElementById("user_fname").value;
    var user_lname = document.getElementById("user_lname").value;
    var user_email = document.getElementById("user_email").value;
    var user_phone = document.getElementById("user_phone").value;
    var user_message = document.getElementById("user_message").value;
    var isValid = true;

    //test each input if they are null or incorrect format, if so, visualize by setting border to different color
    if(user_fname == ""){ 
        document.getElementById("user_fname").style = "border: 2px solid #C23B22";
        isValid = false;
    }if(user_lname == ""){ 
        document.getElementById("user_lname").style = "border: 2px solid #C23B22";
        isValid = false;
    }if(!user_email.match(/^([a-zA-Z0-9]+)@([[a-zA-Z]+)\.([a-zA-Z]{2,5})$/)){
        document.getElementById("user_email").style = "border: 2px solid #C23B22";
        isValid = false;
    }if(!user_phone.match(/^([0-9]{3})-([0-9]{3})-([0-9]{4})$/)){
        document.getElementById("user_phone").style = "border: 2px solid #C23B22";
        isValid = false;
    }if(user_message == ""){
        document.getElementById("user_message").style = "border: 2px solid #C23B22";
        isValid = false;
    }
    return isValid;
}