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
        //disable the start button
        _start.attr('disabled', true);
        _start.addClass('disabled');
        //I need to associate a number with these id's somehow..
        //_.removeClass('em-' + )

        //start timer from 25:00
        var minNum = 25;
        var secNum = 0;

        var countinterval = setInterval(function() {

            //update emoji first so we get the 25:00
            emojiTime(minNum, secNum);
            if (secNum === 0 && minNum === 0) {
                breakBtn.removeClass('disabled');
                breakBtn.removeAttr('disabled');
                clearInterval(countinterval);
                return;
            }

            if (secNum === 0) {
                //if secNum at zero, change seconds to 59 and reduce min by 1
                minNum -= 1;
                secNum = 59;
            } else {
                if (secNum <= 10) {
                    //if secNum is 10, set left sec to zero, reduce secNum by 1
                    secNum -= 1;
                } else {
                    //reduce secNum by 1
                    secNum -= 1;
                }
            }
        }, 1000); //end setInterval

    } //end startCountdown

    function breakStart() {
        //start break from 5:00, unless it is the third break
        _break.attr('disabled', true);
        _break.addClass('disabled');

        //start break countdown
        startCountdown();

    }

    function emojiTime(mins, sec) {
        //split mins and sec supplied into arrays of digits
        var min_arr = digiSplit(mins),
            sec_arr = digiSplit(sec);

        if (sec_arr.length < 2) {
            //make sure that there are two digits in sec array
            sec_arr.push('0');
        }

        updateClass(min_arr, sec_arr);


    }



    //end $.document

    /*
     * function: digiSplit(num){}
     * P@Number num  (59)
     * R@Array output  [5,9]
     * Splits numbers into digits! 
     */
    function digiSplit(number) {
        var output = [],
            sNumber = number.toString();

        for (var i = 0, len = sNumber.length; i < len; i += 1) {
            output.push(+sNumber.charAt(i));
        }
        return output;
    }

   var wildcard = function emWildcard(index, css) {
        return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
    }

    function updateClass(mins, secs) {
        for (i = 0; i < 2; i++) {
            //clear the em-number class
            _minLeft.removeClass(wildcard);
            _minRight.removeClass(wildcard);
            _secLeft.removeClass(wildcard);
            _secRight.removeClass(wildcard);
            //add correct em-number class to each digit
            _minLeft.addClass('em-' + mins[i]);
            console.log('em-' + mins[i]);
            console.log('em-' +secs[i]);
            //Woops! I changed my html to not have min_left etc anymore, need to fix that!

        }



        //From SA Author: naomik http://stackoverflow.com/questions/14766951/convert-digits-into-words-with-javascript
        var toWords = function toWords(n) {
            if (n == 0) return 'zero';
            var a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
            var b = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
            var g = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'];
            var grp = function grp(n) {
                return ('000' + n).substr(-3);
            };
            var rem = function rem(n) {
                return n.substr(0, n.length - 3);
            };
            var fmt = function fmt(_ref) {
                var h = _ref[0];
                var t = _ref[1];
                var o = _ref[2];

                return [Number(h) === 0 ? '' : a[h] + ' hundred ', Number(o) === 0 ? b[t] : b[t] && b[t] + '-' || '', a[t + o] || a[o]].join('');
            };
            var cons = function cons(xs) {
                return function(x) {
                    return function(g) {
                        return x ? [x, g && ' ' + g || '', ' ', xs].join('') : xs;
                    };
                };
            };
            var iter = function iter(str) {
                return function(i) {
                    return function(x) {
                        return function(r) {
                            if (x === '000' && r.length === 0) return str;
                            return iter(cons(str)(fmt(x))(g[i]))(i + 1)(grp(r))(rem(r));
                        };
                    };
                };
            };
            return iter('')(0)(grp(String(n)))(rem(String(n)));
        };



    }
});
