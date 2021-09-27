window.onload = function(){
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        var serviceID = "service_h6kdfkm";
        var templateID = "template_sdv48mc";
        

        emailjs.sendForm(serviceID, templateID, this)
        .then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        }); 


    });

}
