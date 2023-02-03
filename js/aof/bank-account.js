$(document).ready(function() {    
    $("#bankAccountForm").validate({
        rules:{     
          bank_account_number: {
              required: true
          },              
          ifsc_code: {
              required: true
          }
        },
        messages: {                
          bank_account_number: {
              required: "Enter Valid Bank Account Number"
          },              
          ifsc_code: {
              required: "Enter Valid Bank IFSC Code"
          }                               
        },


        errorElement: "div",
        errorPlacement: function(error, element) {
            error.insertAfter(element);        
        },

        submitHandler: function (form) {

            // $("#otherBankDetails").show();

            window.location.href = "trading-segment.html" 
        }
  });
});