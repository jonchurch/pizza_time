$(document).ready(function() {
    var _start = $('#start');
    var _break = $('#break');
    var _minLeft = $('#minutes-left');
    var _minRight = $('#minutes-right');
    var _secLeft = $('#seconds-left');
    var _secRight = $('#seconds-right');
    var breakCount = 0;

    _start.on('click', startCountdown);
    _break.on('click', breakStart);


    function startCountdown() {
        
        _start.attr('disabled', true);
        _start.addClass('disabled');
        //I need to associate a number with these id's somehow..
        //_.removeClass('em-' + )

        //start timer from 25:00
        var minsNum = 25;
        var secNum = 0;

        var countinterval = setInterval(function() {

            if (secNum === 0 && minsNum === 0) {
                breakBtn.removeClass('disabled');
                breakBtn.removeAttr('disabled');
                clearInterval(countinterval);
                return;
            }

            if (secNum === 0) {
                //if secNum at zero, change seconds to 59 and reduce mins by 1
                minNum - 1;
                secNum = 59;
            } else {
                if (secNum <= 10) {
                    //if secNum is 10, set left sec to zero, reduce secNum by 1
                    secNum - 1;
                } else {
                    //reduce secNum by 1
                    secNum - 1;
                }
            }


        }, 1000);

    }

    function breakStart() {
        //start break from 5:00, unless it is the third break
        _break.attr('disabled', true);
        _break.addClass('disabled');

        //start break countdown
        startCountdown();

    }

});
