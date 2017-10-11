(function ($) {

  // Drupal.behaviors.top5Main = {
  //   attach: function (context, settings) {

    $("#sidr-button").click(function() {
      $("#sidr-button").toggleClass('open');
    });

    $(".view-mainpage-mc .views-row").mouseover(function() {
      $(".view-mainpage-mc").addClass('hover');
    });
    $(".view-mainpage-mc .views-row").mouseout(function() {
      $(".view-mainpage-mc").removeClass('hover');
    });

    $( "#sidr-wrapper-0" ).prepend( '<a class="name navbar-brand" href="/" title="Главная">top5krd</a>' );
    $( "#sidr-wrapper-0" ).append( '<a class="social" target="_blank" href="http://vk.com/top5krd"></a>' );

    var $viewsContent = $("div.view-mc-page-static .view-content");

    $("div.view-mc-page-static .views-row").mouseover(function () {
      $viewsContent.find(".views-field").removeClass('vis');
      $(this).find(".views-field-field-mcs-photo-active").addClass('vis');
      $mcList = $viewsContent.find(".views-row");
      var leftChildren = true;
      for (var i = 0; i < $mcList.length; i++) {
        if (this == $mcList[i]) {
          leftChildren = false;
        }
        else {
          if (leftChildren) {
            $($mcList[i]).find(".views-field-field-mcs-photo-right").addClass('vis');
          }
          else {
            $($mcList[i]).find(".views-field-field-mcs-photo-left").addClass('vis');
          }
        }
      }
    });

    $("div.view-mc-page-static .views-row").mouseout(function () {
      $viewsContent.find(".views-field").removeClass('vis');
    });
  //   }
  // };

})(jQuery);

//animateCss
$.fn.extend({
  animateCss: function (animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
    });
    return this;
  }
});

$(document).ready(function() {
  $('#sidr-button').sidr();

  let machine;
  let leadpick;
  let award;
  let count = 3;

  function onStopCallback(active) {
    // console.log(active);
    let fixNumber = active + 2
    let awardText = $('.slot.active ul li:nth-child('+fixNumber+')').text()

    $('.award').val(awardText);
  }

  $('.machine-lever-end').on('click', function() {

    leadpick = $('.slots').attr('data-available');
    if (typeof leadpick !== typeof undefined && leadpick !== false) {

      console.log(count);
      console.log(parseInt(count));
      if(parseInt(count) < 2) {
        $('.dblock-3 .leading').attr('disabled', 'disabled')
      }
      if(parseInt(count) < 1) {
        $('.count').parent().animateCss('shake');
      } else {
        machine.shuffle(5, onStopCallback);
        count -= 1;
        $('.count').text(count)
      }
      
    } else {
      $('.dblock-3 .leading').animateCss('shake');
    }

  })

  
  $('.dblock-3 .dbtn').on('click', function() {
    award = $('.award').val();
    console.log(award);
    if (typeof leadpick !== typeof undefined && leadpick !== false && typeof award !== typeof undefined && award !== false && award !== '') {
      console.log('award');
    } else {
      console.log('noaward');
    }
  })

  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });


  $('.dblock-3 select').on('change', function() {
    let dataVal = $(this).val() - 1;

    if(typeof machine !== 'undefined') {
      machine.destroy();
    }
    if (dataVal + 1) {
      $('.slots').attr('data-available', '1');
    }

    let wrap = $('.discounts');
    wrap.children().removeClass('active');
    wrap.children().eq(dataVal).addClass('active');

    machine = $('.slots .slot.active ul').slotMachine({
      delay : 500
    });

  })

});

