function formatState (state) {
  if (!state.id) { return state.text; }
  var $state = $(
    '<span><img src="img/flag/' +  state.element.value.toLowerCase() + 
    '.png" class="img-flag" /> ' + 
    state.text +     '</span>'
    );
  return $state;
};

$(document).ready(function() {
  $('.js-example-basic-single.flag').select2({
    minimumResultsForSearch: -1,
    templateResult: formatState
  });
  $('.js-example-basic-single.currency').select2({
    minimumResultsForSearch: -1
  });

  $('.js-example-basic-single.length').select2({
    minimumResultsForSearch: -1
  });


  // DataTabless
  var table  = $('#example').DataTable( {
    "dom": 'rtp'

  } );
  $('.visible-container label').on( 'click', function (e) {
    var column = table.column( $(this).prev().attr('id').slice(11) );
    // console.log($(this).prev().attr('id').slice(11));
    column.visible( ! column.visible() );

  } );

  $('.length').on( 'change', function () {
    var value = $(this).val()
    table.page.len( value ).draw();
  } );

  $('.search').on( 'keyup', function () {
    var value = $(this).val()
    table.search( value ).draw();
  } );

  $('#datePicker1, #datePicker2').daterangepicker({
    "ranges": {
      'Today': [moment(), moment()],
      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days': [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month': [moment().startOf('month'), moment().endOf('month')],
      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    "locale": {
        "format": "MMM D, YYYY",
        "separator": " - ",
        "applyLabel": "Apply",
        "cancelLabel": "Cancel",
        "fromLabel": "From",
        "toLabel": "To",
        "customRangeLabel": "Custom",
        "weekLabel": "W",
        "daysOfWeek": [
            "Su",
            "Mo",
            "Tu",
            "We",
            "Th",
            "Fr",
            "Sa"
        ],
        "monthNames": [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        "firstDay": 1
    },
    "alwaysShowCalendars": true,
    "startDate": "01/27/2018",
    "endDate": "02/02/2018",
    "opens": "left"
  }, function(start, end, label) {
    console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
  });

  //ui helper
  $( ".search" ).on('keyup', function() {
    var input = $(".search")
    var val = input.val();
    val.length > 0 && val != "Default text" ? input.addClass('active') : input.removeClass('active')
    var hasClass = input.hasClass("active")
  });

  $('.search-close').on('click', function() {
    table.search( '' ).draw();
    $(".search").val('').removeClass('active');
  })

  $('.datepicker').on('click', function() {
    $(this).toggleClass('active')
  })

  $('.datepicker').on('hide.daterangepicker', function() {
    $(this).toggleClass('active')
    console.log(123);
  })

  $('.visible').on('click', function() {
    $(this).toggleClass('active')
    $('.visible-container').toggleClass('active')
  })
});






