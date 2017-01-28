$(document).ready(function(){
	$('.div_yellow.one').mouseenter(function(){
		$('.div_yellow.one').css({'width':'80px', 'height':'80px','padding-top':'2px', 'top':'-320px', 'right':'210px'});
		$('.one h3').css('font-size', '18px');
		$('.one h4').css('display', 'none');
	});
	$('.div_yellow.two').mouseenter(function(){
		$('.div_yellow.two').css({'width':'80px', 'height':'80px','padding-top':'10px', 'top':'-320px', 'right':'210px'});
		$('.two h3').css({'font-size':'18px'});
		$('.two h4').css('display', 'none');
	});
	$('.div_yellow.three').mouseenter(function(){
		$('.div_yellow.three').css({'width':'80px', 'height':'80px','padding-top':'10px', 'top':'-320px', 'right':'210px'});
		$('.three h3').css({'font-size':'18px'});
		$('.three h4').css('display', 'none');
	});
	$('.div_yellow.four').mouseenter(function(){
		$('.div_yellow.four').css({'width':'80px', 'height':'80px','padding-top':'10px', 'top':'-320px', 'right':'210px'});
		$('.four h3').css({'font-size':'18px'});
		$('.four h4').css('display', 'none');
	});

	$('.div_blue.one').mouseleave(function(){
		$('.div_yellow.one').css({'width':'246px', 'height':'260px', 'padding-top':'40px', 'top':'-280px', 'right':'10px'});
		$('.one h3').css('font-size', '32px');
		$('.one h4').css('display', 'block');
	});
	$('.div_blue.two').mouseleave(function(){
		$('.div_yellow.two').css({'width':'246px', 'height':'260px', 'padding-top':'40px', 'top':'-280px', 'right':'10px'});
		$('.two h3').css('font-size', '32px');
		$('.two h4').css('display', 'block');
	});
	$('.div_blue.three').mouseleave(function(){
		$('.div_yellow.three').css({'width':'246px', 'height':'260px', 'padding-top':'40px', 'top':'-280px', 'right':'10px'});
		$('.three h3').css('font-size', '32px');
		$('.three h4').css('display', 'block');
	});
	$('.div_blue.four').mouseleave(function(){
		$('.div_yellow.four').css({'width':'246px', 'height':'260px', 'padding-top':'40px', 'top':'-280px', 'right':'10px'});
		$('.four h3').css('font-size', '32px');
		$('.four h4').css('display', 'block');
	});
});