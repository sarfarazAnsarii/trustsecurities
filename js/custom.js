$(".toggleMenu").on("click", function(){
	$(this).toggleClass("active");
	$(this).siblings(".main-nav").toggleClass("active");	
});
$("#search").on("input", function(){
  if($(this).val()==''){ 
    $("#searchBox").hide();
    $(this).parents(".search-box").removeClass("active");
  }
  else{
    $("#searchBox").fadeIn();
    $(this).parents(".search-box").addClass("active");
  }
});

$(window).scroll(function(){
	var scroll = $(this).scrollTop();
	if(scroll >=21.1562){
		$("header").addClass("active");
	}else{
		$("header").removeClass("active")
	}

	if(scroll >= 200){
		$("#bondBrand").fadeIn();
	}else{
		$("#bondBrand").hide();
	}

	if(scroll >= 300){
		$("#scrollTop").fadeIn();
		$(".invest-now-mob").addClass("active");
		$(".fixed-btm").addClass("active");
	}else{
		$("#scrollTop").fadeOut();
		$(".invest-now-mob").removeClass("active");
		$(".fixed-btm").removeClass("active");
	}

})
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



$(".tab-item li a").on("click", function(e){
	e.preventDefault()
	$(this).parent().addClass("active");
	$(this).parent().siblings().removeClass("active");
	let hrefData =  $(this).attr("href").split("#")[1];
	// console.log(hrefData);
	$(this).parents(".tab-section").find(".tab-list[id="+hrefData+"]").fadeIn();
	$(this).parents(".tab-section").find(".tab-list[id!="+hrefData+"]").hide();
	if(hrefData=="partner"){
		$("#dc_code").focus();
	}else if(hrefData=="client"){
		$("#pan").focus();
	}
})

var fullYear = new Date().getFullYear();
document.getElementById("fullYear").textContent = fullYear;