jQuery(function(){
  var max = 5 * 60;
  var $stopwatch = $('button.btn-default');
  $stopwatch.text('05:00');
  var duration = 0;
  setInterval(function() {
    duration++;
    var min = Math.floor((max - duration) / 60);
    var sec = Math.round((max - duration) % 60);
    if (min === 0 && sec === 0) {
      location.href = 'http://www.recruit-mp.co.jp/career_engineer/';
    }
    if (min < 10) {
      min = '0' + min;
    }
    if (sec < 10) {
      sec = '0' + sec;
    }
    $stopwatch.text(min + ':' + sec);
  }, 1000);

  var len = $('.roulette img').length;
  var stopped = [];
  function getStopImageNumber() {
    for (;;) {
      var stopImageNumber = Math.floor((Math.random() * 1000)) % len;
      if (stopped.indexOf(stopImageNumber) === -1) {
        stopped.push(stopImageNumber);
        return stopImageNumber;
      }
    }
  }
  // initialize!
  var option = {
    speed : 10,
    duration : 5,
    stopImageNumber : getStopImageNumber(),
  }
  $('div.roulette').roulette(option);

  // START!
  $('.start').click(function(){
    if (stopped.length === len) {
      location.href = 'http://www.recruit-mp.co.jp/career_engineer/';
      return;
    }
    $('div.roulette').roulette('start');
  });

  // STOP!
  $('.stop').click(function(){
    option.stopImageNumber = getStopImageNumber();
    $('div.roulette').roulette('stop', option);
  });
});
