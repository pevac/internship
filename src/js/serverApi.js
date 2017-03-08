var reviews1_data = document.getElementById('reviews1_data');
var reviews2_data = document.getElementById('reviews2_data');
var reviews3_data = document.getElementById('reviews3_data');
var reviews4_data = document.getElementById('reviews4_data');
var reviews5_data = document.getElementById('reviews5_data');
var reviews6_data = document.getElementById('reviews6_data');
var reviews7_data = document.getElementById('reviews7_data');
var reviews8_data = document.getElementById('reviews8_data');
var reviews9_data = document.getElementById('reviews9_data');

var project1_info = document.getElementById('information_first');
var project2_info = document.getElementById('information_second');
var project3_info = document.getElementById('information_third');
var project4_info = document.getElementById('information_fourth');
var project5_info = document.getElementById('information_fiveth');
var project6_info = document.getElementById('information_sixth');
var project7_info = document.getElementById('information_seventh');
var project8_info = document.getElementById('information_eighth');
var project9_info = document.getElementById('information_nineth');
var project10_info = document.getElementById('information_tenth');
var project11_info = document.getElementById('information_eleventh');
var project12_info = document.getElementById('information_twelfth');

var proj1_img = document.getElementById('proj_img1');
var proj2_img = document.getElementById('proj_img2');
var proj3_img = document.getElementById('proj_img3');
var proj4_img = document.getElementById('proj_img4');
var proj5_img = document.getElementById('proj_img5');
var proj6_img = document.getElementById('proj_img6');
var proj7_img = document.getElementById('proj_img7');
var proj8_img = document.getElementById('proj_img8');
var proj9_img = document.getElementById('proj_img9');
var proj10_img = document.getElementById('proj_img10');
var proj11_img = document.getElementById('proj_img11');
var proj12_img = document.getElementById('proj_img12');


//http://62.80.173.67:8888/dev-studio/api/public/internshipprojects

$(document).ready(function(){
	var ourRequest = new XMLHttpRequest();
	var ourInformation = new XMLHttpRequest();
	var ourInfoImg = new XMLHttpRequest();

	ourRequest.open('GET', 'http://www.edu.bionic-university.com:2101/dev-studio/api/public/internshipfeedbacks');
	ourInformation.open('GET', 'http://www.edu.bionic-university.com:2101/dev-studio/api/public/internshipprojects');
	ourInfoImg.open("GET", 'http://www.edu.bionic-university.com:2101/dev-studio/api/public/internshipprojects');

	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
	}
	ourInformation.onload = function(){
		var ourInfo = JSON.parse(ourInformation.responseText);
		addProjectsInfo(ourInfo);
	}
	ourInfoImg.onload = function(){
		var ourImg = JSON.parse(ourInfoImg.responseText);
		addProjectsImg(ourImg);
	}

	ourRequest.send();
	ourInformation.send();
	ourInfoImg.send();

});

function renderHTML(data){
	var data_reviews1 = '';
	var data_reviews2 = '';
	var data_reviews3 = '';
	var data_reviews4 = '';
	var data_reviews5 = '';
	var data_reviews6 = '';
	var data_reviews7 = '';
	var data_reviews8 = '';
	var data_reviews9 = '';

	data_reviews1 += '<img alt="" src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[0].id + '/' + data[0].img + '" class="circl_img">' + 
	'<p><span class="span_visible">' + data[0].description.substring(17, 190) + 
	'</span><span class="dots">' + '...' + '</span><span class="span_hidden">' +
	data[0].description.substring(190) + '</span></p>' + 
	'<h3>' + data[0].name + '</h3>' + 
	'<h4>' + data[0].jobPosition.name + '</h4>';
	reviews1_data.insertAdjacentHTML('beforeend', data_reviews1);

	data_reviews2 += '<img alt="" src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[1].id + '/' + data[1].img + '" class="circl_img">' + 
	'<p><span class="span_visible">' + data[1].description.substring(17, 190) + 
	'</span><span class="dots">' + '...' + '</span><span class="span_hidden">' +
	data[1].description.substring(190) + '</span></p>' + 
	'<h3>' + data[1].name + '</h3>' + 
	'<h4>' + data[1].jobPosition.name + '</h4>';
	reviews2_data.insertAdjacentHTML('beforeend', data_reviews2);

	data_reviews3 += '<img alt="" src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[2].id + '/' + data[2].img + '" class="circl_img">' + 
	'<p><span class="span_visible">' + data[2].description.substring(17, 190) + 
	'</span><span class="dots">' + '...' + '</span><span class="span_hidden">' +
	data[2].description.substring(190) + '</span></p>' + 
	'<h3>' + data[2].name + '</h3>' + 
	'<h4>' + data[2].jobPosition.name + '</h4>';
	reviews3_data.insertAdjacentHTML('beforeend', data_reviews3);

	data_reviews4 += '<img alt="" src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[3].id + '/' + data[3].img + '" class="circl_img">' + 
	'<p><span class="span_visible">' + data[3].description.substring(17, 190) + 
	'</span><span class="dots">' + '...' + '</span><span class="span_hidden">' +
	data[3].description.substring(190) + '</span></p>' + 
	'<h3>' + data[3].name + '</h3>' + 
	'<h4>' + data[3].jobPosition.name + '</h4>';
	reviews4_data.insertAdjacentHTML('beforeend', data_reviews4);

	data_reviews5 += '<img alt="" src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[4].id + '/' + data[4].img + '" class="circl_img">' + 
	'<p><span class="span_visible">' + data[4].description.substring(17, 190) + 
	'</span><span class="dots">' + '...' + '</span><span class="span_hidden">' +
	data[4].description.substring(190)+ '</span></p>' + 
	'<h3>' + data[4].name + '</h3>' + 
	'<h4>' + data[4].jobPosition.name + '</h4>';
	reviews5_data.insertAdjacentHTML('beforeend', data_reviews5);

	data_reviews6 += '<img alt="" src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[5].id + '/' + data[5].img + '" class="circl_img">' + 
	'<p><span class="span_visible">' + data[5].description.substring(17, 190) + 
	'</span><span class="dots">' + '...' + '</span><span class="span_hidden">' +
	data[5].description.substring(190) + '</span></p>' + 
	'<h3>' + data[5].name + '</h3>' + 
	'<h4>' + data[5].jobPosition.name + '</h4>';
	reviews6_data.insertAdjacentHTML('beforeend', data_reviews6);

	data_reviews7 += '<img alt="" src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[6].id + '/' + data[6].img + '" class="circl_img">' + 
	'<p><span class="span_visible">' + data[6].description.substring(17, 190) + 
	'</span><span class="dots">' + '...' + '</span><span class="span_hidden">' +
	data[6].description.substring(190) + '</span></p>' + 
	'<h3>' + data[6].name + '</h3>' + 
	'<h4>' + data[6].jobPosition.name + '</h4>';
	reviews7_data.insertAdjacentHTML('beforeend', data_reviews7);

	data_reviews8 += '<img alt="" src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[7].id + '/' + data[7].img + '" class="circl_img">' + 
	'<p><span class="span_visible">' + data[7].description.substring(17, 190) + 
	'</span><span class="dots">' + '...' + '</span><span class="span_hidden">' +
	data[6].description.substring(190) + '</span></p>' + 
	'<h3>' + data[7].name + '</h3>' + 
	'<h4>' + data[7].jobPosition.name + '</h4>';
	reviews8_data.insertAdjacentHTML('beforeend', data_reviews8);

	data_reviews9 += '<img alt="" src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[8].id + '/' + data[8].img + '" class="circl_img">' + 
	'<p><span class="span_visible">' + data[8].description.substring(17, 190) + 
	'</span><span class="dots">' + '...' + '</span><span class="span_hidden">' +
	data[7].description.substring(190) + '</span></p>' + 
	'<h3>' + data[8].name + '</h3>' + 
	'<h4>' + data[8].jobPosition.name + '</h4>';
	reviews9_data.insertAdjacentHTML('beforeend', data_reviews9);
};

function addProjectsInfo(data){
	var info_project1 = '';
	var info_project2 = '';
	var info_project3 = '';
	var info_project4 = '';
	var info_project5 = '';
	var info_project6 = '';
	var info_project7 = '';
	var info_project8 = '';
	var info_project9 = '';
	var info_project10 = '';
	var info_project11 = '';
	var info_project12 = '';

	info_project1 += '<h5>' + data[0].name + '</h5>' +
	'<h6><img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[0].id + '/' + data[0].img + '" alt=""><span>' + 
	data[0].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + data[0].description + '</p>' + 
	'<p>Sponsored link</p>';
	project1_info.insertAdjacentHTML('beforeend', info_project1);

	info_project2 += '<h5>' + data[1].name + '</h5>' +
	'<h6><img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[1].id + '/' + data[1].img + '" alt=""><span>' + 
	data[1].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + data[1].description + '</p>' + 
	'<p>Sponsored link</p>';
	project2_info.insertAdjacentHTML('beforeend', info_project2);

	info_project3 += '<h5>' + data[2].name + '</h5>' +
	'<h6><img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[2].id + '/' + data[2].img + '" alt=""><span>' + 
	data[2].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + data[2].description + '</p>' + 
	'<p>Sponsored link</p>';
	project3_info.insertAdjacentHTML('beforeend', info_project3);

	info_project4 += '<h5>' + data[3].name + '</h5>' +
	'<h6><img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[3].id + '/' + data[3].img + '" alt=""><span>' + 
	data[3].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + data[3].description + '</p>' + 
	'<p>Sponsored link</p>';
	project4_info.insertAdjacentHTML('beforeend', info_project4);

	info_project5 += '<h5>' + data[4].name + '</h5>' +
	'<h6><img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[4].id + '/' + data[4].img + '" alt=""><span>' + 
	data[4].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + data[4].description + '</p>' + 
	'<p>Sponsored link</p>';
	project5_info.insertAdjacentHTML('beforeend', info_project5);

	info_project6 += '<h5>' + data[5].name + '</h5>' +
	'<h6><img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[5].id + '/' + data[5].img + '" alt=""><span>' + 
	data[5].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + data[5].description + '</p>' + 
	'<p>Sponsored link</p>';
	project6_info.insertAdjacentHTML('beforeend', info_project6);

	info_project7 += '<h5>' + data[6].name + '</h5>' +
	'<h6><img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[6].id + '/' + data[6].img + '" alt=""><span>' + 
	data[6].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + data[6].description + '</p>' + 
	'<p>Sponsored link</p>';
	project7_info.insertAdjacentHTML('beforeend', info_project7);

	info_project8 += '<h5>' + data[7].name + '</h5>' +
	'<h6><img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[7].id + '/' + data[7].img + '" alt=""><span>' + 
	data[7].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + data[7].description + '</p>' + 
	'<p>Sponsored link</p>';
	project8_info.insertAdjacentHTML('beforeend', info_project8);

	info_project9 += '<h5>' + data[8].name + '</h5>' +
	'<h6><img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[8].id + '/' + data[8].img + '" alt=""><span>' + 
	data[8].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + data[8].description + '</p>' + 
	'<p>Sponsored link</p>';
	project9_info.insertAdjacentHTML('beforeend', info_project9);

	info_project10 += '<h5>' + data[9].name + '</h5>' +
	'<h6><img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[9].id + '/' + data[9].img + '" alt=""><span>' + 
	data[9].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + data[9].description + '</p>' + 
	'<p>Sponsored link</p>';
	project10_info.insertAdjacentHTML('beforeend', info_project10);

	info_project11 += '<h5>' + data[10].name + '</h5>' +
	'<h6><img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[10].id + '/' + data[10].img + '" alt=""><span>' + 
	data[10].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + data[10].description + '</p>' + 
	'<p>Sponsored link</p>';
	project11_info.insertAdjacentHTML('beforeend', info_project11);

	info_project12 += '<h5>' + data[11].name + '</h5>' +
	'<h6><img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[11].id + '/' + data[11].img + '" alt=""><span>' + 
	data[11].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + data[11].description + '</p>' + 
	'<p>Sponsored link</p>';
	project12_info.insertAdjacentHTML('beforeend', info_project12);

	console.log(data.id);
};

function addProjectsImg(data){
	var img_proj1 = '';
	var img_proj2 = '';
	var img_proj3 = '';
	var img_proj4 = '';
	var img_proj5 = '';
	var img_proj6 = '';
	var img_proj7 = '';
	var img_proj8 = '';
	var img_proj9 = '';
	var img_proj10 = '';
	var img_proj11 = '';
	var img_proj12 = '';

	img_proj1 += '<div class="caption caption_first" id="caption_first">' + '<h3>' + data[0].name + '</h3>' + '</div>' + '<img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[0].id + '/' + data[0].img + '" alt="Image" style="max-width:100%;">';
	proj1_img.insertAdjacentHTML('beforeend', img_proj1);

	img_proj2 += '<div class="caption caption_second" id="caption_second">' + '<h3>' + data[1].name + '</h3>' + '</div>' + '<img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[1].id + '/' + data[1].img + '" alt="Image" style="max-width:100%;">';
	proj2_img.insertAdjacentHTML('beforeend', img_proj2);

	img_proj3 += '<div class="caption caption_third" id="caption_third">' + '<h3>' + data[2].name + '</h3>' + '</div>' + '<img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[2].id + '/' + data[2].img + '" alt="Image" style="max-width:100%;">';
	proj3_img.insertAdjacentHTML('beforeend', img_proj3);

	img_proj4 += '<div class="caption caption_fourth" id="caption_fourth">' + '<h3>' + data[3].name + '</h3>' + '</div>' + '<img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[3].id + '/' + data[3].img + '" alt="Image" style="max-width:100%;">';
	proj4_img.insertAdjacentHTML('beforeend', img_proj4);

	img_proj5 += '<div class="caption caption_fiveth" id="caption_fiveth">' + '<h3>' + data[4].name + '</h3>' + '</div>' + '<img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[4].id + '/' + data[4].img + '" alt="Image" style="max-width:100%;">';
	proj5_img.insertAdjacentHTML('beforeend', img_proj5);

	img_proj6 += '<div class="caption caption_sixth" id="caption_sixth">' + '<h3>' + data[5].name + '</h3>' + '</div>' + '<img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[5].id + '/' + data[5].img + '" alt="Image" style="max-width:100%;">';
	proj6_img.insertAdjacentHTML('beforeend', img_proj6);

	img_proj7 += '<div class="caption caption_seventh" id="caption_seventh">' + '<h3>' + data[6].name + '</h3>' + '</div>' + '<img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[6].id + '/' + data[6].img + '" alt="Image" style="max-width:100%;">';
	proj7_img.insertAdjacentHTML('beforeend', img_proj7);

	img_proj8 += '<div class="caption caption_eighth" id="caption_eighth">' + '<h3>' + data[7].name + '</h3>' + '</div>' + '<img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[7].id + '/' + data[7].img + '" alt="Image" style="max-width:100%;">';
	proj8_img.insertAdjacentHTML('beforeend', img_proj8);

	img_proj9 += '<div class="caption caption_nineth" id="caption_nineth">' + '<h3>' + data[8].name + '</h3>' + '</div>' + '<img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[8].id + '/' + data[8].img + '" alt="Image" style="max-width:100%;">';
	proj9_img.insertAdjacentHTML('beforeend', img_proj9);

	img_proj10 += '<div class="caption caption_tenth" id="caption_tenth">' + '<h3>' + data[9].name + '</h3>' + '</div>' + '<img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[9].id + '/' + data[9].img + '" alt="Image" style="max-width:100%;">';
	proj10_img.insertAdjacentHTML('beforeend', img_proj10);

	img_proj11 += '<div class="caption caption_eleventh" id="caption_eleventh">' + '<h3>' + data[10].name + '</h3>' + '</div>' + '<img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[10].id + '/' + data[10].img + '" alt="Image" style="max-width:100%;">';
	proj11_img.insertAdjacentHTML('beforeend', img_proj11);

	img_proj12 += '<div class="caption caption_twelfth" id="caption_twelfth">' + '<h3>' + data[11].name + '</h3>' + '</div>' + '<img src="http://www.edu.bionic-university.com:2101/dev-studio/api/images/' + data[11].id + '/' + data[11].img + '" alt="Image" style="max-width:100%;">';
	proj12_img.insertAdjacentHTML('beforeend', img_proj12);
}
