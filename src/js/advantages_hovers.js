$(document).ready(function(){
	$('.advantage.first').mouseenter(function(){
		$('.advantage.first .advantage_img img').attr('src', '../img/advantage_active_first.png');
		/*alert('hello');*/
	});
	$('.advantage.second').mouseenter(function(){
		$('.advantage.second .advantage_img img').attr('src', '../img/advantage_active_second.png');
	});
	$('.advantage.third').mouseenter(function(){
		$('.advantage.third .advantage_img img').attr('src', '../img/advantage_active_third.png');
	});
	$('.advantage.fourth').mouseenter(function(){
		$('.advantage.fourth .advantage_img img').attr('src', '../img/advantage_active_fourth.png');
	});
	$('.advantage.fiveth').mouseenter(function(){
		$('.advantage.fiveth .advantage_img img').attr('src', '../img/advantage_active_fiveth.png');
	});
	$('.advantage.sixth').mouseenter(function(){
		$('.advantage.sixth .advantage_img img').attr('src', '../img/advantage_active_sixth.png');
	});

	$('.advantage.first').mouseleave(function(){
		$('.advantage.first .advantage_img img').attr('src', '../img/advantage_first.png');
	});
	$('.advantage.second').mouseleave(function(){
		$('.advantage.second .advantage_img img').attr('src', '../img/advantage_second.png');
	});
	$('.advantage.third').mouseleave(function(){
		$('.advantage.third .advantage_img img').attr('src', '../img/advantage_third.png');
	});
	$('.advantage.fourth').mouseleave(function(){
		$('.advantage.fourth .advantage_img img').attr('src', '../img/advantage_fourth.png');
	});
	$('.advantage.fiveth').mouseleave(function(){
		$('.advantage.fiveth .advantage_img img').attr('src', '../img/advantage_fiveth.png');
	});
	$('.advantage.sixth').mouseleave(function(){
		$('.advantage.sixth .advantage_img img').attr('src', '../img/advantage_sixth.png');
	});
});