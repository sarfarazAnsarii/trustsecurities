$(document).ready(function() {  
    $("#profileCheck").on("click", function(){

      $("#profileCreationForm").validate({

          rules:{  

            new_id_address:{
              new_id_address:true
            }, 
            orrespondence_address_1: {
                required: true
            },
            orrespondence_address_2: {
                required: true
            },
            orrespondence_address_3: {
                required: true
            },
            country: {
                required: true
            },
            state: {
                required: true
            },
            city: {
                required: true
            }
            
          },
          messages: {  

            new_id_address:{
              new_id_address:"Enter Valid PAN Number"
            },   

             new_id_address: {
                required: "Enter Aadhar Card ID Number"
            },              
            orrespondence_address_1: {
                required: "Enter Address line 1"
            },
            orrespondence_address_2: {
                required: "Enter Address line 2"
            },
            orrespondence_address_3: {
                required: "Enter Address line 3"
            },
            country: {
                required: "Enter Country"
            },
            state: {
                required: "Enter State"
            },
            city: {
                required: "Enter City"
            }                                  
          },

          errorElement: "div",
          errorPlacement: function(error, element) {
              error.insertAfter(element);   
          },

          submitHandler: function (form) {
              window.location.href = "bank-and-income-details.html"              
          }
    });
  });

});  