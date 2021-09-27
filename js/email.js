window.onload = function(){
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var serviceID = "service_h6kdfkm";
        var templateID = "template_sdv48mc";
        
        if(isValidInput()){
        emailjs.sendForm(serviceID, templateID, this)
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });
        console.log("input is valid!");
        }else{

        }

    });

}

//TODO: validate email input
function isValidInput(){
    var user_fname = document.getElementById("user_fname").value;
    var user_lname = document.getElementById("user_lname").value;
    var user_phone = document.getElementById("user_phone").value;
    var user_message = document.getElementById("user_message").value;

    if(user_fname == "" || user_lname == ""){ //validate names
        console.log("first/last name is empty!");
        return false;
    }else if(!user_phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){ //validate phone number. found regex from https://www.w3resource.com/javascript/form/phone-no-validation.php
        console.log("number format is wrong!");
        return false;
    }else if(user_message == ""){
        console.log("Message is empty! Message: " + user_message);
        return false;
    }

    return true;

}
