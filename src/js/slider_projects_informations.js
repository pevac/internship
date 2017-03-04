$(document).ready(function(){
	$('.item .effect_first').click(function(){
		$('.projects_information .information_first').show().siblings('.information').not().hide();
	});
	$('.item .effect_second').click(function(){
		$('.projects_information .information_second').show().siblings('.information').not().hide();
	});
	$('.item .effect_third').click(function(){
		$('.projects_information .information_third').show().siblings('.information').not().hide();
	});
	$('.item .effect_fourth').click(function(){
		$('.projects_information .information_fourth').show().siblings('.information').not().hide();
	});
	$('.item .effect_fiveth').click(function(){
		$('.projects_information .information_fiveth').show().siblings('.information').not().hide();
	});
	$('.item .effect_sixth').click(function(){
		$('.projects_information .information_sixth').show().siblings('.information').not().hide();
	});
	$('.item .effect_seventh').click(function(){
		$('.projects_information .information_seventh').show().siblings('.information').not().hide();
	});
	$('.item .effect_eighth').click(function(){
		$('.projects_information .information_eighth').show().siblings('.information').not().hide();
	});
	$('.item .effect_nineth').click(function(){
		$('.projects_information .information_nineth').show().siblings('.information').not().hide();
	});
	$('.item .effect_tenth').click(function(){
		$('.projects_information .information_tenth').show().siblings('.information').not().hide();
	});
	$('.item .effect_eleventh').click(function(){
		$('.projects_information .information_eleventh').show().siblings('.information').not().hide();
	});
	$('.item .effect_twelfth').click(function(){
		$('.projects_information .information_twelfth').show().siblings('.information').not().hide();
	});


	$('.close_information').click(function(){
		$(this).parent().css('display', 'none');
	});


	$('.step_left').click(function(){
		$('.information').hide();
	});
	$('.step_right').click(function(){
		$('.information').hide();
	});
});