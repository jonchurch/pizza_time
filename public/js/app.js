$(document).ready(function(){
	var _start = $('#start');
	var _break = $('#break');
	var _minLeft = $('#minutes-left');
	var _minRight = $('#minutes-right');
	var _secLeft = $('#seconds-left');
	var _secRight = $('#seconds-right');
	var breakCount= 0;

	_start.on('click', startCountdown);
	_break.on('click', breakStart);


	function startCountdown(){
		//start it from 25:00
		_start.attr('disabled', true);
		_start.addClass('disabled');
		//I need to associate a number with these id's somehow..
		//_.removeClass('em-' + )


	}

	function breakStart(){
		//start break from 5:00, unless it is the third break
		_break.attr('disabled', true);
		_break.addClass('disabled');

		//start break countdown
		startCountdown();
		
	}

})

