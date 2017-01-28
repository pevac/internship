$(document).ready(function(){
	$('.item .effect_first').click(function(){//.active
		$('.projects_information .information_first').css('display', 'block');
	});
	$('.item .effect_second').click(function(){//.active
		$('.projects_information .information_second').css('display', 'block');
	});
	$('.item .effect_third').click(function(){//.active
		$('.projects_information .information_third').css('display', 'block');
	});
	$('.item .effect_fourth').click(function(){//.active
		$('.projects_information .information_fourth').css('display', 'block');
	});
	$('.item .effect_fiveth').click(function(){//.active
		$('.projects_information .information_fiveth').css('display', 'block');
	});
	$('.item .effect_sixth').click(function(){//.active
		$('.projects_information .information_sixth').css('display', 'block');
	});
	$('.close_information').click(function(){
		$('.information').css('display', 'none');
	});
});