jQuery(function(){
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
