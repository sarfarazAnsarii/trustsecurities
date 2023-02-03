$(".ds-search-close").on("click", function(){
    $("#searchArea").removeClass("active");
});

$("#dashProfileTab").on("click", function(){
    $("#dashProfile").fadeIn();
});

$(document).mouseup(function(e) 
{
    var container = $("#dashProfile");    
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {        
        container.hide();
    }


    var container = $(".slideDown");    
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {        
        container.slideUp();
    }

});

$("#stepsList").on("click", function(){
    $("#kycStatus").slideToggle();
});

$("#questionMark").on("click", function(){    
    if($(this).children("img").attr("src")=="../images/aof/question-mark.svg"){
      $(this).children("img").attr("src", "../images/aof/close-mark.svg");
    }else{
      $(this).children("img").attr("src", "../images/aof/question-mark.svg");
    }
    $("#answerChatBox").slideToggle("fast");
});

$(document).ready(function(){
    setTimeout(function(){
      
      $("#snackbar").addClass("show");      
    },100)

    setTimeout(function()
      {         
        $("#snackbar").removeClass("show");        
      }, 3000);
  });
