$(document).ready(function() {
  $('#sertificates1').lightSlider({
        // gallery:true,
        item:1,
        loop:true,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
          el.lightGallery({
            selector: '#sertificates1 .lslide'
          });
        }   
      });

  $('#clients1').lightSlider({
        // gallery:true,
        item:1,
        loop:true,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
          el.lightGallery({
            selector: '#clients1 .lslide'
          });
        }   
      });

  $('#clients2').lightSlider({
        // gallery:true,
        item:1,
        loop:true,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
          el.lightGallery({
            selector: '#clients2 .lslide'
          });
        }   
      });

  $('#thanks1').lightSlider({
        // gallery:true,
        item:1,
        loop:true,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
          el.lightGallery({
            selector: '#thanks1 .lslide'
          });
        }   
      });

  $('#thanks2').lightSlider({
        // gallery:true,
        item:1,
        loop:true,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
          el.lightGallery({
            selector: '#thanks2 .lslide'
          });
        }   
      });

  $('#myModal').modal('toggle')

  new WOW().init();

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  $('#nav-icon0,#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
    $('.mobile-nav').toggleClass('open')
  });

  $('.mobile-nav li a').on('click', function() {
    $(this).parent().parent().parent().removeClass('show')
    $('#nav-icon3').toggleClass('open');
    $('.mobile-nav').toggleClass('open');
  })
});

$.fn.extend({
  animateCss: function (animationName, callback) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
      if (callback) {
        callback();
      }
    });
    return this;
  }
});