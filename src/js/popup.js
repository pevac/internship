$(document).ready(function(){
	$('.sing_in').click(function(){
		var log = login.value;
		var pass = password.value;
		if (log == 'hello' && pass == "world"){
			$('.modal-dialog.request').show();
			$('.modal-dialog.singin').css('opacity', '0');
		} else if(log === '' && pass === ''){
			alert('Не введено дані!');
		} else if (log == 'hello' && pass !== 'world'){
			$('.modal-dialog.send_error_login').show();
		} else if(log !== 'hello' && pass == 'world'){
			$('.modal-dialog.send_error_password').show();
		} else if(log !== 'hello' && pass !== 'world'){
			$('.modal-dialog.send_error_notAlumnus').show();
		}
		//$('.modal-dialog.send_success').show();
	});
	$('.close').click(function(){
		$('.can_close').css('display', 'none');
	});



	//-----limit checkbox-----//
	$(".checkbox").change(function () {
        var maxAllowed = 2;
        var cnt = $(".checkbox:checked").length;
        if (cnt > maxAllowed) {
            $(this).prop("checked", "");
            //alert('Вибачте, але можна обрати лише' + maxAllowed + ' технології');
        }
    });


	$('.send').click(function(){
		var cnt = $(".checkbox:checked").length;
		if (cnt < 1){
			alert('Для подачі заявки необхідно вибрати хоча б один напрям.');
		} else if (cnt >=1 && cnt <= 2){
			$('.modal-dialog.send_success').show();
			$('.modal-dialog.request').css('opacity', '0');
		}
	});

});