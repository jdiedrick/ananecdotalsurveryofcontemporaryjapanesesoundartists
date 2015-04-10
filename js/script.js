/* Author:

*/

$("document").ready(function(){

	$('a#hello').click(function(){
	
		$('html, body').animate({
			scrollTop: $("#aboutme").offset().top
		}, 2000);
		return false;	
	});

	
	$('a#aboutme').click(function(){
		
		$('html, body').animate({
			scrollTop: $("div#background").offset().top
		}, 2000);
		return false;
	});


	$('a#background').click(function(){

		$('html, body').animate({
			scrollTop: $("#postcollege").offset().top
		}, 2000);
		return false;
	});

	
	$('a#postcollege').click(function(){

		$('html, body').animate({
			scrollTop: $("#itp").offset().top
		}, 2000);
		return false;
	});


	$('a#itp').click(function(){

		$('html, body').animate({
			scrollTop: $("#classes").offset().top
		}, 2000);
		return false;
	});


	$('a#classes').click(function(){
	
		$('html, body').animate({
			scrollTop: $("#threeprojects").offset().top
		}, 2000);
		return false;
	});

	$('a#threeprojects_strings').click(function(){
	
		$('html, body').animate({
		
			scrollTop: $("#strings").offset().top
		}, 2000);
		return false;
	});

	$('a#strings').click(function(){

		$('html, body').animate({
			scrollTop: $("#strings_details").offset().top
		}, 2000);
		return false;
	});

	$('a#threeprojects_granddream').click(function(){
		
		$('html, body').animate({
			scrollTop: $("#granddream").offset().top
		}, 2000);
		return false;
	});

	$('a#strings_details').click(function(){
		$('html, body').animate({
			scrollTop: $("#granddream").offset().top
		}, 2000);
		return false;

	});

	$('a#granddream').click(function(){

		$('html, body').animate({
			scrollTop: $("#granddream_details").offset().top
		}, 2000);
		return false;

	});

	$('a#threeprojects_digitaldecay').click(function(){
	
		$('html, body').animate({
			scrollTop: $("#digitaldecay").offset().top
		}, 2000);
		return false;
	
	});

	$('a#granddream_details').click(function(){
		
		$('html, body').animate({
			scrollTop: $("#digitaldecay").offset().top
		}, 2000);

		return false;

	});


	$('a#digitaldecay').click(function(){
		
		$('html, body').animate({
			scrollTop: $("#digitaldecay_details").offset().top
		}, 2000);

		return false;

	});


	$('a#digitaldecay_details').click(function(){
		$('html, body').animate({
			scrollTop: $("#activities").offset().top
		}, 2000);

		return false;
	});


	$('a#activities').click(function(){
	
		$('html, body').animate({
			scrollTop: $("#ycam").offset().top
		}, 2000);

		return false;

	});

	$('a#ycam').click(function(){
		$('html, body').animate({
			scrollTop: $("#aspirations").offset().top
		}, 2000);

		return false;
	});

	$('a#aspirations').click(function(){
		$('html, body').animate({
			scrollTop: $("#thanks").offset().top
		}, 2000);

		return false;
	});


	$('a#thanks').click(function(){
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 2000);

		return false;
	});

	$('#name').bind({
		click: function(){
		       if($('#age').is(':hidden')){
				$('#age').slideDown('slow');
		       }
		       
		return false;	       
		       }
	});	


});



