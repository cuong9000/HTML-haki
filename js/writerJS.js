
$(document).ready(function(){
	$('.top_number_adult').click(function(){
		$(this).parent().toggleClass("active");
	  });
	$('.destination-popup__close').click(function(){
		$(".top_input_search").removeClass('active');
	  });
	
	$('.row3_search a').click(function(){
		$(".line_search_flight").removeClass('active');
		$(this).parent().parent().parent().toggleClass("active");
	  });
	
});