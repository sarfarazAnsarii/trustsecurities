$(document).ready(function() {    

  $("#whatsappOpt").on("change", function(){
    if($(this).prop("checked")==false){
        $(this).val("un subscribed");
    }else{
       $(this).val("Subscribed"); 
    }
  })  
  $("#registerForm").validate({
    rules:{
     
      name: {
          required: true
      },              
      email: {
          required: true
      },
      mobile: {
          required: true
      },

      termsCondition: {
        required: true
      }   
      
    },
    messages: {                
        name: {
            required: "Please enter your full name."
        },
        email: {
            required: "Please enter your email address."
        },
        mobile: {
            required: "Please enter your mobile number."
        },
        termsCondition: {
            required: "Please accept the terms and conditions"
        }                                             
    },

    errorElement: "div",
    errorPlacement: function(error, element) {
        if(element.attr("name")=="termsCondition"){
            error.appendTo("#termsError");
        }else{
            error.insertAfter(element);
        }        
    },
  
    submitHandler: function (form) {
        $("#registerBtn").text('Processing...');
        var name = $("#name").val();
        var mobile = $("#mobile").val();
        var email = $("#email").val();
        var whatsApp = $("#whatsappOpt").val();
        const person = {
            name: name,                 
            email: mobile,
            mobile:email,
            whatsApp: whatsApp,        
        }
        console.log(person);        
        $.ajax({
            url:"https://api.apispreadsheets.com/data/HjKnZOLJqlDeDv9V/",
            type:"post",
            data:person,
            success: function(){ 

                $("#registerBtn").text('Submit');
                $("#registerArea").remove();
                $("#otpArea").fadeIn();
            },
            error: function(){
                // alert("There was an error :(")
                $("#registerBtn").text('Error...');
            }
        });       
    }

  });

  $("#optForm").validate({
    rules:{     
      mobileOTP: {
          required: true
      },              
      emailOTP: {
          required: true
      }        
    },
    messages: {                
        mobileOTP: {
            required: "Please enter your mobile OTP."
        },
        emailOTP: {
            required: "Please enter your email OTP."
        }                                          
    },
    errorElement: "div",
    errorPlacement: function(error, element) {
        error.insertAfter(element);
    },  
    submitHandler: function (form) {
        $("#submitOTP").text('Processing...');
        var mobileOTP = $("#mobileOTP").val();
        var emailOTP = $("#emailOTP").val();
        const verifyOTP = {
            mobileOTP: mobileOTP,                 
            emailOTP: emailOTP,                  
        }
        console.log(verifyOTP);      
        $.ajax({
            url:"https://api/",
            type:"post",
            data:verifyOTP,
            success: function(){ 
                $("#submitOTP").text('Verified');
            },
            error: function(){
                // alert("There was an error :(")
                $("#submitOTP").text('Error...');
            }
        });       
    }
  });      
});




