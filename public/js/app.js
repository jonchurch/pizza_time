$(document).ready(function(){
	var _start = $('#start');
	var _break = $('#break');
	var _min-left = $('#minutes-left');
	var _min-right = $('#minutes-right');
	var breakCount= 0;

	_start.on('click', startCountdown);
	_break.on('click', breakStart);


	function startCountdown(){
		//start it from 25:00
		_start.attr('disabled', true);
		_start.addClass('disabled');


	}

	function breakStart(){
		//start break from 5:00, unless it is the third break
		_break.attr('disabled', true);
		_break.addClass('disabled');
		
	}

})
