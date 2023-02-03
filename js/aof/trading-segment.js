$(document).ready(function() {    
    $("#tadingSegmentForm").validate({
        rules:{     
          dp_id: {
              required: true
          },              
          dp_name: {
              required: true
          },
          dp_Code_id: {
              required: true
          }
          
        },
        messages: {                
          dp_id: {
              required: "Enter DP Id"
          },              
          dp_name: {
              required: "Enter DP Name"
          },
          dp_Code_id: {
              required: "Enter DP code ID"
          }                                 
        },


        errorElement: "div",
        errorPlacement: function(error, element) {
            error.insertAfter(element);        
        },

        submitHandler: function (form) {
            window.location.href = "additional-details.html" 
        }
  });
});