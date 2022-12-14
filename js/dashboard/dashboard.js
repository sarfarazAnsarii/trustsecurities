$(document).mouseup(function(e) 
{
    var container = $("#searchBox");  
    var dashProfile = $("#dashProfile")     
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
        container.parents(".search-box").removeClass("active");
        dashProfile.hide();
    }
});
$("#ds-search").on("keyup", function(){

    $("#searchBox").fadeIn();

    var searchText = $(this).val();

    $("#searchBox .search-list li a span").each(function(){
        

        var currentLiText = $(this).text(),
            showCurrentLi = currentLiText.toLowerCase().indexOf(searchText.toLowerCase()) !== -1;

            $(this).parents("li").toggle(showCurrentLi);

            if(currentLiText.toLowerCase().indexOf(searchText.toLowerCase()) !== -1){
                $("#searchBox .not-found").hide();
                $("#searchBox .not-found").html('');

            }else{
                
                $("#searchBox .not-found").show();
                $("#searchBox .not-found").html('<li><a><img src="images/dashboard/icons/not-found.svg"><span>Not Found "'+searchText+'"</span></a></li>');
            }

    });     

});

$("#scrollTop").on("click", function(e){
	$('html, body').animate({
      scrollTop: $('html, body').offset().top,
   });
	e.preventDefault();
});



$('.main-nav li').hover(function () {
    $(this).find(".drop-down").stop(true, true ).delay(200).fadeIn();
}, function () {
    $(this).find(".drop-down").stop(true, true ).delay(200).fadeOut();
});


$(".st-open-modal").on("click", function () {
  var dataModal = $(this).attr("href").split('#')[1];
  $("body").addClass("over-hide");
  $("body").find('.st-modal[data-modal="' + dataModal + '"]').addClass("active");
});


$(".ds-close").on("click", function () {
  $(this).parents(".st-modal").removeClass("active");
  $("body").removeClass("over-hide");

});

$("#daToggleMenu").on("click", function(){
    $(this).toggleClass("active");
    $(this).parents(".ds-sidebar").toggleClass("active");
    $(this).parents(".ds-sidebar").siblings(".ds-wrap").toggleClass("active");
    $("#dashHeaderMenu").removeClass("active")
});

$("#dashHeaderMenu").on("click", function(){
    // $(this).toggleClass("active");
    $(this).parents(".ds-wrap").toggleClass("active");
    $(this).parents(".ds-wrap").siblings(".ds-sidebar").toggleClass("active");
    $("#daToggleMenu").toggleClass("active")
});

$(".ds-search-icon-mob").on("click", function(){
    $("#searchArea").addClass("active");
    $("#ds-search").focus();
});



$(".ds-search-close").on("click", function(){
    $("#searchArea").removeClass("active");
});

$("#dashProfileTab").on("click", function(){
    $("#dashProfile").fadeIn();
});