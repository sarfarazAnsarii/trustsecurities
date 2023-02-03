$(document).ready(function() {  
 
$("#kycSubmit").on("click", function(){

      $("#kycCheck").validate({

          rules: {
            PAN:{
              required: true
            },
            dd: {
                required: true
            },              
            mm: {
                required: true
            },
            mm: {
                required: true
            },
            yyyy: {
                required: true
            },
            first_name: {
                required: true
            },
            middle_name: {
                required: true
            },
            last_name: {
                required: true
            },
            spouse_and_father_name: {
                required: true
            },
            mother_name: {
                required: true
            } 
          },
          messages: { 
            pan:{
              required:"Please Enter Your PAN Number"
            },              
              dd: {
                required: "Required"
            },              
            mm: {
                required: "Required"
            },
            mm: {
                required: "Required"
            },
            yyyy: {
                required: "Required"
            },
            first_name: {
                required: "First Name Required"
            },
            middle_name: {
                required: "Middle Name Required"
            },
            last_name: {
                required: "Last Name Required"
            },
            spouse_and_father_name: {
                required: "Father/Spouse Name Required"
            },
            mother_name: {
                required: "MOther Name Required"
            }                                         
          },


          errorElement: "div",
          errorPlacement: function(error, element) {
              error.insertAfter(element);        
          },

          submitHandler: function (form) {
              

              // $("#kycSubmit").attr("href", "profile-creation.html");

              window.location.href = "profile-creation.html" 
          }
    });
  });
});