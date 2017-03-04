var reviews1_data = document.getElementById('reviews1_data');
var reviews2_data = document.getElementById('reviews2_data');
var reviews3_data = document.getElementById('reviews3_data');
var reviews4_data = document.getElementById('reviews4_data');
var reviews5_data = document.getElementById('reviews5_data');
var reviews6_data = document.getElementById('reviews6_data');
var reviews7_data = document.getElementById('reviews7_data');
var reviews8_data = document.getElementById('reviews8_data');
var reviews9_data = document.getElementById('reviews9_data');



$(document).ready(function(){
	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'http://62.80.173.67:8888/dev-studio/api/internshipfeedbacks');
	ourRequest.onload = function(){
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
	}
	ourRequest.send();
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
