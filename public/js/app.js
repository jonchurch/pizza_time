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
            emojiTime(minNum, secNum);


        }, 1000);

    }

    function breakStart() {
        //start break from 5:00, unless it is the third break
        _break.attr('disabled', true);
        _break.addClass('disabled');

        //start break countdown
        startCountdown();

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
    return function (x) {
      return function (g) {
        return x ? [x, g && ' ' + g || '', ' ', xs].join('') : xs;
      };
    };
  };
  var iter = function iter(str) {
    return function (i) {
      return function (x) {
        return function (r) {
          if (x === '000' && r.length === 0) return str;
          return iter(cons(str)(fmt(x))(g[i]))(i + 1)(grp(r))(rem(r));
        };
      };
    };
  };
  return iter('')(0)(grp(String(n)))(rem(String(n)));
};

console.log(toWords(25));


});
