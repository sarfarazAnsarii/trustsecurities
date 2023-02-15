$(document).ready(function() {    
  $("#registerForm").validate({
    rules:{           
      mobile: {
          required: true
      }             
    },
    messages: {                
        
        mobile: {
            required: "Please enter your mobile number."
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
        var mobile = $("#mobile").val();       
        var mobileOTP = Math.floor(1000 + Math.random() * 1234);        
        const person = {            
            mobile:mobile,            
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

  

  


  $("#panEmailRegister").validate({
    rules:{  
       
      pan: {
          required: true
      },
      email: {
          required: true
      }              
      
      
    },
    messages: {  

        pan: {
            required: "Please enter your PAN Number."
        },
        email: {
            required: "Please enter your email"
        }               
                                                  
    },

    errorElement: "div",
    errorPlacement: function(error, element) {
        error.insertAfter(element);     
    },
  
    submitHandler: function (form) {
        $("#panEmailBtn").text('Processing...');
        var pan_number = $("#pan").val();
        var email = $("#email").val();
       
        var emailOTP = Math.floor(1000 + Math.random() * 1234);
        // var emailOTP = Math.floor(1000 + Math.random() * 4321);

        // console.log(mobileOTP);

        const person = {
            email: email, 
            pan_number: pan_number,                 
                   
            otp:{
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
                $("#panEmailBtn").text('Submitted');
                // $("#registerArea").remove();
                $("#emailOtpArea").fadeIn();
                $("#panArea").hide();
                // $("#mobileOTP").focus();
                // window.location.replace("dashboard.html");
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
      }       
    },
    messages: {                
        mobileOTP: {
            required: "Please enter your mobile OTP."
        }                                        
    },


    errorElement: "div",
    errorPlacement: function(error, element) {
        error.insertAfter(element);        
    },

    submitHandler: function (form) {
        $("#submitOTP").text('Processing...');
        var mobileOTP = $("#mobileOTP").val();
       

        var verifyOTP =  JSON.parse(localStorage.getItem("person"));
        console.log(JSON.stringify(verifyOTP.otp.mobileOTP));

        $.ajax({
            url:"https://api.apispreadsheets.com/data/HjKnZOLJqlDeDv9V/",
            type:"post",
            data:verifyOTP,
            success: function(){ 
                $("#submitOTP").text('Verified');

                $("#submitOTP").text('Verified');
                $("#panArea").show();
                $("#otpArea").hide();
                $("#pan").focus();

            },
            error: function(){
                // alert("There was an error :(")
                $("#submitOTP").text('Error...');
            }
        });       
    }
  });    


  $("#emailOptForm").validate({
    rules:{     
      emailOTP: {
          required: true
      }       
    },
    messages: {                
        emailOTP: {
            required: "Please enter your Email OTP."
        }                                        
    },


    errorElement: "div",
    errorPlacement: function(error, element) {
        error.insertAfter(element);        
    },

    submitHandler: function (form) {
        $("#submitEmailOTP").text('Processing...');
        var emailOTP = $("#emailOTP").val();
       

        var verifyOTP =  JSON.parse(localStorage.getItem("person"));
        console.log(JSON.stringify(verifyOTP.otp.emailOTP));

        $.ajax({
            url:"https://api.apispreadsheets.com/data/HjKnZOLJqlDeDv9V/",
            type:"post",
            data:verifyOTP,
            success: function(){ 
                $("#submitEmailOTP").text('Verified');

                window.location.href = "ipo-order.html"

            },
            error: function(){
                // alert("There was an error :(")
                $("#submitEmailOTP").text('Error...');
            }
        });       
    }
  }); 

});









