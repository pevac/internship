$(document).ready(function(){
	$('#right').click(function(){
		$('.first_item').addClass('fiveth_item');
        $('.first_item').removeClass('first_item');

        $('.second_item').addClass('first_item');
        $('.second_item').removeClass('second_item'); //first_item

        $('.third_item').addClass('second_item');
        $('.third_item').removeClass('third_item');

        $('.fourth_item').addClass('third_item');
        $('.fourth_item').removeClass('fourth_item');

        if($('.fiveth_item:first').hasClass('four')){
        	$('.fiveth_item:first').addClass('fourth_item');
        	$('.fiveth_item:first').removeClass('fiveth_item');
        }else if($('.fiveth_item:last').hasClass('five')){
        	$('.fiveth_item:last').addClass('fourth_item');
        	$('.fiveth_item:last').removeClass('fiveth_item');
        }else if($('.fiveth_item:first').hasClass('three')){
        	$('.fiveth_item:first').addClass('fourth_item');
        	$('.fiveth_item:first').removeClass('fiveth_item');
        }else if($('.fiveth_item:first').hasClass('two')){
        	$('.fiveth_item:first').addClass('fourth_item');
        	$('.fiveth_item:first').removeClass('fiveth_item');
        }else if($('.fiveth_item:first').hasClass('one')){	
        	$('.fiveth_item:first').addClass('fourth_item');
        	$('.fiveth_item:first').removeClass('fiveth_item');
        }else{
        	alert('Unknown Error');
        }
	});

	$('#left').click(function(){
		if(($('.first_item').hasClass('active_item')) && ($('.fiveth_item').hasClass('last_item'))){
			$('.first_item').addClass('second_item');
			$('.first_item').removeClass('first_item');

			$('.second_item:last').addClass('third_item');
			$('.second_item:last').removeClass('second_item');

			$('.third_item:last').addClass('fourth_item');
			$('.third_item:last').removeClass('third_item');

			$('.fourth_item:last').addClass('fiveth_item');
			$('.fourth_item:last').removeClass('fourth_item');

			$('.fiveth_item:last').addClass('first_item');
			$('.fiveth_item:last').removeClass('fiveth_item');
		}else if(($('.second_item').hasClass('active_item')) && ($('.first_item').hasClass('last_item'))){
			$('.first_item').addClass('second_item');
			$('.first_item').removeClass('first_item');

			$('.second_item:first').addClass('third_item');
			$('.second_item:first').removeClass('second_item');

			$('.third_item:last').addClass('fourth_item');
			$('.third_item:last').removeClass('third_item');

			$('.fourth_item:last').addClass('fiveth_item');
			$('.fourth_item:last').removeClass('fourth_item');

			$('.fiveth_item:last').addClass('first_item');
			$('.fiveth_item:last').removeClass('fiveth_item');
		}else if(($('.third_item').hasClass('active_item')) && ($('.second_item').hasClass('last_item'))){
			$('.first_item').addClass('second_item');
			$('.first_item').removeClass('first_item');

			$('.second_item:last').addClass('third_item');
			$('.second_item:last').removeClass('second_item');

			$('.third_item:first').addClass('fourth_item');
			$('.third_item:first').removeClass('third_item');

			$('.fourth_item:last').addClass('fiveth_item');
			$('.fourth_item:last').removeClass('fourth_item');

			$('.fiveth_item:last').addClass('first_item');
			$('.fiveth_item:last').removeClass('fiveth_item');
		}else if(($('.fourth_item').hasClass('active_item')) && ($('.third_item').hasClass('last_item'))){
			$('.first_item').addClass('second_item');
			$('.first_item').removeClass('first_item');

			$('.second_item:last').addClass('third_item');
			$('.second_item:last').removeClass('second_item');

			$('.third_item:last').addClass('fourth_item');
			$('.third_item:last').removeClass('third_item');

			$('.fourth_item:first').addClass('fiveth_item');
			$('.fourth_item:first').removeClass('fourth_item');

			$('.fiveth_item:last').addClass('first_item');
			$('.fiveth_item:last').removeClass('fiveth_item');
		}else if(($('.fiveth_item').hasClass('active_item')) && ($('.fourth_item').hasClass('last_item'))){
			$('.first_item').addClass('second_item');
			$('.first_item').removeClass('first_item');

			$('.second_item:last').addClass('third_item');
			$('.second_item:last').removeClass('second_item');

			$('.third_item:last').addClass('fourth_item');
			$('.third_item:last').removeClass('third_item');

			$('.fourth_item:last').addClass('fiveth_item');
			$('.fourth_item:last').removeClass('fourth_item');

			$('.fiveth_item:first').addClass('first_item');
			$('.fiveth_item:first').removeClass('fiveth_item');
		}else{
			alert('Unknown Error');
		}
		

		/*$('.second_item:last').addClass('third_item');
		$('.second_item:last').removeClass('second_item');

		$('.third_item:last').addClass('fourth_item');
		$('.third_item:last').removeClass('third_item');

		$('.fourth_item:last').addClass('fiveth_item');
		$('.fourth_item:last').removeClass('fourth_item');

		$('.fiveth_item:last').addClass('first_item');
		$('.fiveth_item:last').removeClass('fiveth_item');

		if($('.first_item').hasClass('one')){
			$('.first_item:first').addClass('second_item');
			$('.first_item:first').removeClass('first_item');
		}else if($('first_item:last').hasClass('four')){
			$('.first_item:last').addClass('second_item');
			$('.first_item:last').removeClass('first_item');
		}else if($('.first_item').hasClass('third')){
			$('.first_item:first').addClass('second_item');
			$('.first_item:first').removeClass('first_item');
		}else if($('.first_item').hasClass('second')){
			$('.first_item:first').addClass('second_item');
			$('.first_item:first').removeClass('first_item');
		}else if($('.first_item').hasClass('five')){
			$('.first_item:last').addClass('second_item');
			$('.first_item:last').removeClass('first_item');
		}else{
			alert('Unknown Error');
		}*/

	});
});
