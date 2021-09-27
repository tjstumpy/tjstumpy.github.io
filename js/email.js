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
        alert("First/Last name is required!");
        return false;
    }else if(!user_phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)){ //validate phone number. found regex from https://www.w3resource.com/javascript/form/phone-no-validation.php
        alert("Number format is wrong!\n\nAcceptable Formats:\n000 000 0000\n000-000-0000\n000.000.0000");
        return false;
    }else if(user_message == ""){
        alert("Please enter a message.");
        return false;
    }

    return true;

}
