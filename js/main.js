function formatState (state) {
  if (!state.id) { return state.text; }
  var $state = $(
    '<span><img src="img/flag/' +  state.element.value.toLowerCase() + 
    '.png" class="img-flag" /> ' + 
    state.text +     '</span>'
    );
  return $state;
};

function formatState2 (state) {
  if (!state.id) { return state.text; }
  var $state = $(
    '<span><img src="img/selected_icon/' +  state.element.dataset.icon + 
    '.png" class="img-flag" /> ' + 
    state.text +     '</span>'
    );
  return $state;
};
function formatStateCircle (state) {
  if (state.id == 1) {
    return $(
      '<span><span class="round enabled"></span>' + 
      state.text + '</span>'
      );
  }
  if (state.id == 2) {
    return $(
      '<span><span class="round paused"></span>' + 
      state.text + '</span>'
      );
  }
  if (state.id == 3) {
    return $(
      '<span><span class="round archived"></span>' + 
      state.text + '</span>'
      );
  }
};

$(document).ready(function() {
  $('.table-edited-value input').on('focus', function() {
    $(this).parent().after('<div class="table-edited-value-holder"></div>');
    $(this).parent().addClass('active');
  });

  $('.table-edited-value button').on('focus', function() {
    $(this).parent().removeClass('active');
  });

  $('.js-example-basic-single.state').select2({
    dropdownAutoWidth: 1,
    minimumResultsForSearch: -1,
    templateResult: formatStateCircle
  });
  //

  $('.js-example-basic-single.table').select2({
    dropdownAutoWidth: 1,
    minimumResultsForSearch: -1
  });
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
  $('.fast-date').select2({
    minimumResultsForSearch: -1
  });

  $('.js-example-basic-single.actions').select2({
    minimumResultsForSearch: -1,
    templateResult: formatState2,
    dropdownCssClass: 'icons'
  });
  


  // DataTabless
  var table  = $('#example').DataTable( {
    "dom": 'prtp',
    "pagingType": 'simple_numbers',
    "columnDefs":  [{
      "targets": [0, 1, 7, 17],
      "orderable": false, 
      'className': 'pl-1'
    },
    {
      "targets": [1],
      'className': 'px-0'
    },
    {
      "targets": [2],
      'className': 'pl-0'
    },
    {
      "targets": [3],
      'className': 'pl-1 pr-0'
    }]

  } );
  var table  = $('#example1').DataTable( {
    "dom": 'rtp',
    "pagingType": 'simple_numbers',
    "columnDefs":  [{
      "targets": [0, 1, 2, 3],
      'className': 'pl-1'
    },
    {
      "targets": [1],
      'className': 'px-0'
    },
    {
      "targets": [2],
      'className': 'pl-0'
    },
    {
      "targets": [3],
      'className': 'pl-1 pr-0'
    },
    {
      "targets": [0,1,2,3],
      'className': 'pl-0 pr-2'
    }]

  } )
  $('.visible-container label').on( 'click', function (e) {
    var val = $(this).prev().attr('id').slice(11);
    val = parseInt(val) + 1;
    var column = table.column( val );
    console.log($(this).prev().attr('id').slice(11));
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

  //datapicker
  $('#datePicker2').daterangepicker({
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






