$(document).ready(function() {                   
  $("#contact-form").validate({
    rules:{
     
      inputName: {
          required: true
      },              
      inputEmail: {
          required: true
      },
      inputNumber: {
          required: true
      }      
      
    },
    messages: {                
        inputName: {
            required: "Please enter your full name."
        },
        inputEmail: {
            required: "Please enter your email address."
        },
        inputNumber: {
            required: "Please enter your mobile number."
        }                                               
    },
  
    submitHandler: function (form) {    

        // function after_form_submitted(data) {
        //     if (data.result == 'success') {                            
        //         $("#reused_form").text('Submit');      
        //         location.href = "https://trustsecurities.in/primary_bond_list.php"
        //     }
        //     else {
        //         $('#error_message').append('<ul></ul>');
        //         jQuery.each(data.errors, function (key, val) {
        //             $('#error_message ul').append('<li>' + key + ':' + val + '</li>');
        //         });
        //         $('#success_message').hide();            
        //         //reverse the response on the button
        //         $("#reused_form").text('Error...');
        //     }//else
        // }
        



    // $form = $(this);

        $("#reused_form").text('Processing...');      

        var inputName = $("#inputName").val();
        var inputNumber = $("#inputNumber").val();
        var inputEmail = $("#inputEmail").val();
       
        const person = {
            name: inputName,                 
            email: inputEmail,
            mobile:inputNumber            
        }     
       

        console.log(person);        

        $.ajax({
            url:"https://api.apispreadsheets.com/data/20tcEyvwetnN4YOr/",
            type:"post",
            data:person,
            success: function(){
                // alert("Form Data Submitted :)")
                $("#reused_form").text('Submit');
            },
            error: function(){
                // alert("There was an error :(")
                $("#reused_form").text('Error...');
            }
        });       
    }



  });          
});


