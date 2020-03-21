
$(document).ready(function(){
	if (window.matchMedia('(max-width: 768px)').matches)
	{
		$('#eclipse4').eclipse({
						margin: 10,
						slidesToShow: 1,
						slidesToMove: 1
                });
	}
	else 
	{
		$('#eclipse4').eclipse({
				margin: 20,
				slidesToShow: 5,
				slidesToMove: 1
		});
	}
	
	if (window.matchMedia('(max-width: 768px)').matches)
	{
		$('#eclipse1').eclipse({
						margin: 10,
						slidesToShow: 1,
						slidesToMove: 1
                });
	}
	else 
	{
		$('#eclipse1').eclipse({
				margin: 20,
				slidesToShow: 4,
				slidesToMove: 1
		});
	}
	
	
	
	
});

