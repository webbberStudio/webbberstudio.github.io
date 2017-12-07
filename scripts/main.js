$(document).ready(function() {
  $('#sertificates').lightSlider({
        // gallery:true,
        item:1,
        loop:true,
        slideMargin:0,
        enableDrag: false,
        currentPagerPosition:'left',
        onSliderLoad: function(el) {
          el.lightGallery({
            selector: '#sertificates .lslide'
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
});