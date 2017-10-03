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

$(document).ready(function() {
  $('#sidr-button').sidr();

  var machine = $('.slot').slotMachine({
    active  : 0,
    delay : 500
  });

  // function onComplete(active){
  //   switch(this.element[0].id){
  //     case 'machine1':
  //     $("#machine1Result").text("Index: "+this.active);
  //     break;
  //     case 'machine2':
  //     $("#machine2Result").text("Index: "+this.active);
  //     break;
  //     case 'machine3':
  //     $("#machine3Result").text("Index: "+this.active);
  //     break;
  //   }
  // }
  function onStopCallback(active) {
    console.log(active);
  }

  $('.spin').on('click', function() {
    console.log(123);
    // machine.prev()
    machine.shuffle(5, onStopCallback)
  })

   //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 4000,
  });

  $('.counter').counterUp({
    delay: 10,
    time: 1000
});

});
