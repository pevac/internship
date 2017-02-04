$(document).ready(function(){
	$('.item .effect_first').click(function(){//.active
		$('.projects_information .information_first').show().siblings('.information').not().hide();
	});
	$('.item .effect_second').click(function(){//.active
		$('.projects_information .information_second').show().siblings('.information').not().hide();
	});
	$('.item .effect_third').click(function(){//.active
		$('.projects_information .information_third').show().siblings('.information').not().hide();
	});
	$('.item .effect_fourth').click(function(){//.active
		$('.projects_information .information_fourth').show().siblings('.information').not().hide();
	});
	$('.item .effect_fiveth').click(function(){//.active
		$('.projects_information .information_fiveth').show().siblings('.information').not().hide();
	});
	$('.item .effect_sixth').click(function(){//.active
		$('.projects_information .information_sixth').show().siblings('.information').not().hide();
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