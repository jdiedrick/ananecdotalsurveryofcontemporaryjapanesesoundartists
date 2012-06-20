/* Author:

*/

$("document").ready(function(){

	$('a#hello').click(function(){
	
		$('html, body').animate({
			scrollTop: $("#aboutme").offset().top
		}, 2000);
	
	});

	
	$('a#aboutme').click(function(){
		
		$('html, body').animate({
			scrollTop: $("#background").offset().top
		}, 2000);
	});


	$('a#background').click(function(){

		$('html, body').animate({
			scrollTop: $("#postcollege").offset().top
		}, 2000);

	});

	
	$('a#postcollege').click(function(){

		$('html, body').animate({
			scrollTop: $("#itp").offset().top
		}, 2000);
	});


	$('a#itp').click(function(){

		$('html, body').animate({
			scrollTop: $("#classes").offset().top
		}, 2000);
	});


	$('a#classes').click(function(){
	
		$('html, body').animate({
			scrollTop: $("#threeprojects").offset().top
		}, 2000);
	
	});

	$('a#threeprojects_strings').click(function(){
	
		$('html, body').animate({
		
			scrollTop: $("#strings").offset().top
		}, 2000);
	});


	$('a#threeprojects_granddream').click(function(){
		
		$('html, body').animate({
			scrollTop: $("#granddream").offset().top
		}, 2000);

	});

	$('a#threeprojects_digitaldecay').click(function(){
	
		$('html, body').animate({
			scrollTop: $("#digitaldecay").offset().top
		}, 2000);
	
	});


	$('a#activities').click(function(){
	
		$('html, body').animate({
			scrollTop: $("#ycam").offset().top
		}, 2000);

	});

	$('a#ycam').click(function(){
		$('html, body').animate({
			scrollTop: $("#aspirations").offset().top
		}, 2000);
	});

	$('a#aspirations').click(function(){
		$('html, body').animate({
			scrollTop: $("#thanks").offset().top
		}, 2000);
	});


	$('a#thanks').click(function(){
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 2000);
	});




});



