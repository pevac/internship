$(document).ready(function(){
	$('.sing_in').click(function(){
		var log = login.value;
		var pass = password.value;
		if (log == 'hello' && pass == "world"){
			$('.modal-dialog.send_success').show();
		} else if(log === '' && pass === ''){
			alert('Не введено дані!');
		} else if (log == 'hello' && pass !== 'world'){
			$('.modal-dialog.send_error_login').show();
		} else if(log !== 'hello' && pass == 'world'){
			$('.modal-dialog.send_error_password').show();
		} else if(log !== 'hello' && pass !== 'world'){
			$('.modal-dialog.send_error_notAlumnus').show();
		}
		//$('.request').hide();
		//$('.modal-dialog.send_success').show();
	});
	$('.close').click(function(){
		$('.can_close').css('display', 'none');
	});
});