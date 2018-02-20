$(document).ready(function () {

    //horizontal roulette
  for (i = 0; i < 6; i++) {
    $(".list li").clone().appendTo(".list");
  }
  $('.button').click(function () {
    $('.window').css({
      right: "0"
    })
    $('.list li.active').remove();
    function selfRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var x = selfRandom(10, 70);
    $('.list li:eq('+x+')').addClass('active').find('.remained').text('Ваш приз');

    $width = $('.roulette-block .window .list li').width()
    $('.window').animate({
      right: ((x*$width)-$width-5)
    }, {
      duration: 6000,
      complete: function() {
        $('#discount').modal('show');
      }
    });


  });

  //initialize lightslider
  $('.light-slider').lightSlider({
    auto:true,
    item:4,
    slideMargin:0,
    pager: false,
    loop: true,
    pause: 1000,
    pauseOnHover: true,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        item: 1
      }
    }
    ]
  });


  //parallas for gift
  $(window).scroll(function(){
    var st = $(this).scrollTop();

    $(".gift-1").css({
      "transform" : "translate(0%, -" + st /2 + "%"
    })
    $(".gift-2").css({
      "transform" : "translate(0%, -" + st /4 + "%"
    })
  });

  //show modal after complete ajax request
  // $('#complete').modal('show')


});