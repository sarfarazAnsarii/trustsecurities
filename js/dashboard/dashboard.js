$(document).mouseup(function(e) 
{
    var container = $("#searchBox");       
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        container.hide();
        container.parents(".search-box").removeClass("active");
    }
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