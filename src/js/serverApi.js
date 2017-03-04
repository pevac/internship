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


//http://62.80.173.67:8888/dev-studio/api/public/internshipprojects

$(document).ready(function(){
	var ourRequest = new XMLHttpRequest();
	var ourInformation = new XMLHttpRequest();

	ourRequest.open('GET', 'http://62.80.173.67:8888/dev-studio/api/internshipfeedbacks');
	ourInformation.open('GET', 'http://62.80.173.67:8888/dev-studio/api/public/internshipprojects');

	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
	}
	ourInformation.onload = function(){
		var ourInfo = JSON.parse(ourInformation.responseText);
		addProjectsInfo(ourInfo);
	}

	ourRequest.send();
	ourInformation.send();

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

	data_reviews1 += '<img alt="" src="img/' + data[0].img + '">' + 
	'<p><span class="span_visible">' + data[0].description + 
	'</span><span class="dots">' + '...' + '</span><span class="span_hidden">' +
	'lorem ipsum' + '</span></p>' + 
	'<h3>' + data[0].name + '</h3>' + 
	'<h4>' + data[0].jobPosition.name + '</h4>';
	reviews1_data.insertAdjacentHTML('beforeend', data_reviews1);

	data_reviews2 += '<img alt="" src="img/' + data[1].img + '">' + 
	'<p><span class="span_visible">' + data[1].description + 
	'</span><span class="dots">' + '...' + '</span><span class="span_hidden">' +
	'lorem ipsum' + '</span></p>' + 
	'<h3>' + data[1].name + '</h3>' + 
	'<h4>' + data[1].jobPosition.name + '</h4>';
	reviews2_data.insertAdjacentHTML('beforeend', data_reviews2);

	data_reviews3 += '<img alt="" src="img/' + data[2].img + '">' + 
	'<p><span class="span_visible">' + data[2].description + 
	'</span><span class="dots">' + '...' + '</span><span class="span_hidden">' +
	'lorem ipsum' + '</span></p>' + 
	'<h3>' + data[2].name + '</h3>' + 
	'<h4>' + data[2].jobPosition.name + '</h4>';
	reviews3_data.insertAdjacentHTML('beforeend', data_reviews3);

	data_reviews4 += '<img alt="" src="img/' + data[3].img + '">' + 
	'<p><span class="span_visible">' + data[3].description + 
	'</span><span class="dots">' + '...' + '</span><span class="span_hidden">' +
	'lorem ipsum' + '</span></p>' + 
	'<h3>' + data[3].name + '</h3>' + 
	'<h4>' + data[3].jobPosition.name + '</h4>';
	reviews4_data.insertAdjacentHTML('beforeend', data_reviews4);

	data_reviews5 += '<img alt="" src="img/' + data[4].img + '">' + 
	'<p><span class="span_visible">' + data[4].description + 
	'</span><span class="dots">' + '...' + '</span><span class="span_hidden">' +
	'lorem ipsum' + '</span></p>' + 
	'<h3>' + data[4].name + '</h3>' + 
	'<h4>' + data[4].jobPosition.name + '</h4>';
	reviews5_data.insertAdjacentHTML('beforeend', data_reviews5);

	data_reviews6 += '<img alt="" src="img/' + data[5].img + '">' + 
	'<p><span class="span_visible">' + data[5].description + 
	'</span><span class="dots">' + '...' + '</span><span class="span_hidden">' +
	'lorem ipsum' + '</span></p>' + 
	'<h3>' + data[5].name + '</h3>' + 
	'<h4>' + data[5].jobPosition.name + '</h4>';
	reviews6_data.insertAdjacentHTML('beforeend', data_reviews6);

	data_reviews7 += '<img alt="" src="img/' + data[6].img + '">' + 
	'<p><span class="span_visible">' + data[6].description + 
	'</span><span class="dots">' + '...' + '</span><span class="span_hidden">' +
	'lorem ipsum' + '</span></p>' + 
	'<h3>' + data[6].name + '</h3>' + 
	'<h4>' + data[6].jobPosition.name + '</h4>';
	reviews7_data.insertAdjacentHTML('beforeend', data_reviews7);

	data_reviews8 += '<img alt="" src="img/' + data[7].img + '">' + 
	'<p><span class="span_visible">' + data[7].description + 
	'</span><span class="dots">' + '...' + '</span><span class="span_hidden">' +
	'lorem ipsum' + '</span></p>' + 
	'<h3>' + data[7].name + '</h3>' + 
	'<h4>' + data[7].jobPosition.name + '</h4>';
	reviews8_data.insertAdjacentHTML('beforeend', data_reviews8);

	data_reviews9 += '<img alt="" src="img/' + data[8].img + '">' + 
	'<p><span class="span_visible">' + data[8].description + 
	'</span><span class="dots">' + '...' + '</span><span class="span_hidden">' +
	'lorem ipsum' + '</span></p>' + 
	'<h3>' + data[8].name + '</h3>' + 
	'<h4>' + data[8].jobPosition.name + '</h4>';
	reviews9_data.insertAdjacentHTML('beforeend', data_reviews9);
};

function addProjectsInfo(date){
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

	info_project1 += '<h5>' + date[0].name + '</h5>' +
	'<h6><img src="img/' + date[0].img + '" alt=""><span>' + 
	date[0].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + date[0].description + '</p>' + 
	'<p>Sponsored link</p>';
	project1_info.insertAdjacentHTML('beforeend', info_project1);

	info_project2 += '<h5>' + date[1].name + '</h5>' +
	'<h6><img src="img/' + date[1].img + '" alt=""><span>' + 
	date[1].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + date[1].description + '</p>' + 
	'<p>Sponsored link</p>';
	project2_info.insertAdjacentHTML('beforeend', info_project2);

	info_project3 += '<h5>' + date[2].name + '</h5>' +
	'<h6><img src="img/' + date[2].img + '" alt=""><span>' + 
	date[2].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + date[2].description + '</p>' + 
	'<p>Sponsored link</p>';
	project3_info.insertAdjacentHTML('beforeend', info_project3);

	info_project4 += '<h5>' + date[3].name + '</h5>' +
	'<h6><img src="img/' + date[3].img + '" alt=""><span>' + 
	date[3].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + date[3].description + '</p>' + 
	'<p>Sponsored link</p>';
	project4_info.insertAdjacentHTML('beforeend', info_project4);

	info_project5 += '<h5>' + date[4].name + '</h5>' +
	'<h6><img src="img/' + date[4].img + '" alt=""><span>' + 
	date[4].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + date[4].description + '</p>' + 
	'<p>Sponsored link</p>';
	project5_info.insertAdjacentHTML('beforeend', info_project5);

	info_project5 += '<h5>' + date[4].name + '</h5>' +
	'<h6><img src="img/' + date[4].img + '" alt=""><span>' + 
	date[4].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + date[4].description + '</p>' + 
	'<p>Sponsored link</p>';
	project5_info.insertAdjacentHTML('beforeend', info_project5);

	info_project6 += '<h5>' + date[5].name + '</h5>' +
	'<h6><img src="img/' + date[5].img + '" alt=""><span>' + 
	date[5].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + date[5].description + '</p>' + 
	'<p>Sponsored link</p>';
	project6_info.insertAdjacentHTML('beforeend', info_project6);

	info_project7 += '<h5>' + date[6].name + '</h5>' +
	'<h6><img src="img/' + date[6].img + '" alt=""><span>' + 
	date[6].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + date[6].description + '</p>' + 
	'<p>Sponsored link</p>';
	project7_info.insertAdjacentHTML('beforeend', info_project7);

	info_project8 += '<h5>' + date[7].name + '</h5>' +
	'<h6><img src="img/' + date[7].img + '" alt=""><span>' + 
	date[7].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + date[7].description + '</p>' + 
	'<p>Sponsored link</p>';
	project8_info.insertAdjacentHTML('beforeend', info_project8);

	info_project9 += '<h5>' + date[8].name + '</h5>' +
	'<h6><img src="img/' + date[8].img + '" alt=""><span>' + 
	date[8].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + date[8].description + '</p>' + 
	'<p>Sponsored link</p>';
	project9_info.insertAdjacentHTML('beforeend', info_project9);

	info_project10 += '<h5>' + date[9].name + '</h5>' +
	'<h6><img src="img/' + date[9].img + '" alt=""><span>' + 
	date[9].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + date[9].description + '</p>' + 
	'<p>Sponsored link</p>';
	project10_info.insertAdjacentHTML('beforeend', info_project10);

	info_project11 += '<h5>' + date[10].name + '</h5>' +
	'<h6><img src="img/' + date[10].img + '" alt=""><span>' + 
	date[10].shortDescription + '</span></h6>' + 
	'<div class="both"></div>' +
	'<p>' + date[10].description + '</p>' + 
	'<p>Sponsored link</p>';
	project11_info.insertAdjacentHTML('beforeend', info_project11);

};
