$(document).ready(function() {    

  $("#whatsappOpt").on("change", function(){
    if($(this).prop("checked")==false){
        $(this).val("un subscribed");
    }else{
       $(this).val("Subscribed"); 
    }
  });
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

        var mobileOTP = Math.floor(1000 + Math.random() * 1234);
        var emailOTP = Math.floor(1000 + Math.random() * 4321);

        // console.log(mobileOTP);

        const person = {
            name: name,                 
            email: mobile,
            mobile:email,
            whatsApp: whatsApp,
            otp:{
                mobileOTP: mobileOTP,
                emailOTP: emailOTP
            }
        }
        console.log(person);
        localStorage.setItem("person", JSON.stringify(person));

        $.ajax({
            url:"https://api.apispreadsheets.com/data/HjKnZOLJqlDeDv9V/",
            type:"post",
            data:person,
            success: function(){ 

                // $("#registerBtn").text('Submit');
                // $("#registerArea").remove();
                // $("#otpArea").fadeIn();

                window.location.href = 'aof/kyc-check.html'
            },
            error: function(){
                // alert("There was an error :(")
                $("#registerBtn").text('Error...');
            }
        });       
    }

  });


  $("#loginForm").validate({
    rules:{     
      pan_number: {
          required: true
      },              
      password: {
          required: true
      }
      
    },
    messages: {                
        pan_number: {
            required: "Please enter your PAN Number."
        },
        password: {
            required: "Please enter your password"
        }                                            
    },

    errorElement: "div",
    errorPlacement: function(error, element) {
        error.insertAfter(element);     
    },
  
    submitHandler: function (form) {
        $("#loginBtn").text('Processing...');
        var pan_number = $("#pan_number").val();
        var password = $("#password").val();
       
        var mobileOTP = Math.floor(1000 + Math.random() * 1234);
        // var emailOTP = Math.floor(1000 + Math.random() * 4321);

        // console.log(mobileOTP);

        const person = {
            pan_number: pan_number,                 
            password: password,          
            otp:{
                mobileOTP: mobileOTP
           
            }
        }
        console.log(person);
        localStorage.setItem("person", JSON.stringify(person));

        $.ajax({
            url:"https://api.apispreadsheets.com/data/HjKnZOLJqlDeDv9V/",
            type:"post",
            data:person,
            success: function(){ 
                $("#loginBtn").text('Submit');
                // $("#registerArea").remove();
                $("#otpArea").fadeIn();
                window.location.replace("dashboard.html");
            },
            error: function(){
                // alert("There was an error :(")
                $("#loginBtn").text('Error...');
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

        var personData =  JSON.parse(localStorage.getItem("person"));
        console.log(JSON.stringify(personData.otp.emailOTP));
        console.log(JSON.stringify(personData.otp.mobileOTP));

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


// mobile OTP Generator




