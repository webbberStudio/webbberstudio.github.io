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
  $('[data-toggle="tooltip"]').tooltip();

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
  $('.js-example-basic-multiple.length').select2({
    minimumResultsForSearch: -1,
    containerCssClass: 'multiple'
  });
  $('.js-example-basic-single.actions').select2({
    minimumResultsForSearch: -1,
    templateResult: formatState2,
    dropdownCssClass: 'icons'
  });
  


  // DataTabless
  var table1  = $('#example').DataTable( {
    fixedHeader: true,
    "dom": 'prtp',
    'order': [[ 2, "asc" ]],
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
    },{
      "targets": [6,7,8,9,10,11,12,13,14,15,16],
      'className': 'pl-1 pr-1'
    },{
      "targets": [3],
      'className': 'pl-1 pr-0'
    }]

  } );
  var table2  = $('#filter-compaigns1').DataTable( {
    "dom": 'rtp',
    "pagingType": 'simple_numbers',
    'order': [[ 1, "asc" ]],
    "columnDefs":  [
    { "width": "30", "targets": 0 },
    {
      "targets": [0, 3],
      "orderable": false, 
    },
    {
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
  var table3  = $('#filter-compaigns2').DataTable( {
    "dom": 'rtp',
    "pagingType": 'simple',
    'order': [[ 1, "asc" ]],
    "columnDefs":  [
    {  "targets": 0, "width": "30px" },
    {
      "targets": [0],
      "orderable": false, 
    },
    {
      "targets": [0, 1],
      'className': 'pl-1'
    },
    
    {
      "targets": [1],
      'className': 'px-0'
    },
    {
      "targets": [0,1],
      'className': 'pl-0 pr-2'
    }]

  } )
  $('.visible-container label').on( 'click', function (e) {
    var val = $(this).prev().attr('id').slice(11);
    val = parseInt(val) + 1;
    var column = table1.column( val );
    console.log($(this).prev().attr('id').slice(11));
    column.visible( ! column.visible() );

  } );

  $('[data-change-legth1]').on( 'change', function () {
    var value = $(this).val()
    table1.page.len( value ).draw();
  } );

  $('[data-search-table-main]').on( 'keyup', function () {
    var value = $(this).val()
    table1.search( value ).draw();
  } );

  $('[data-change-legth3]').on( 'change', function () {
    var value = $(this).val()
    table3.page.len( value ).draw();
  } );

  $('[data-search-campaigns-filter-right]').on( 'keyup', function () {
    var value = $(this).val()
    table3.search( value ).draw();
  } );

  $('[data-change-legth2]').on( 'change', function () {
    var value = $(this).val()
    table2.page.len( value ).draw();
  } );

  $('[data-search-campaigns-filter-left]').on( 'keyup', function () {
    var value = $(this).val()
    table2.search( value ).draw();
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
    "linkedCalendars": false,
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
    //"startDate": "01/27/2018",
    //"endDate": "02/02/2018",
    "opens": "left"
  }, function(start, end, label) {
    console.log("New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD') + ' (predefined range: ' + label + ')");
  });

  //ui helper
  $( ".search" ).on('keyup', function() {
    var input = $(this)
    var val = input.val();
    val.length > 0 && val != "Default text" ? input.addClass('active') : input.removeClass('active')
    var hasClass = input.hasClass("active")
  });

  $('[data-search-table-main] + .search-close').on('click', function() {
    table1.search( '' ).draw();
    $(this).prev().val('').removeClass('active');
  })

  $('[data-search-campaigns-filter-left] + .search-close').on('click', function() {
    table2.search( '' ).draw();
    $(this).prev().val('').removeClass('active');
  })

  $('[data-search-campaigns-filter-right] + .search-close').on('click', function() {
    table3.search( '' ).draw();
    $(this).prev().val('').removeClass('active');
  })

  $('.datepicker').on('click', function() {
    $(this).toggleClass('active')
  })

  $('.datepicker').on('hide.daterangepicker', function() {
    $(this).toggleClass('active');
  })

  $('.visible').on('click', function() {
    $(this).toggleClass('active')
    $('.visible-container').toggleClass('active')
  })

  //campaigns
  $('[data-filter-campaigns-btn]').on('click', function () {
    $(this).toggleClass('active')
    $('[data-campaigns-filter-container]').toggleClass('active')
  })

  $('[data-filter-btn]').on('click', function () {
    $(this).toggleClass('active')
    $('[data-filter-container]').toggleClass('active')
  })

  $('[data-campaigns-filter-container] .close').on('click', function() {
    $('[data-filter-campaigns-btn]').toggleClass('active')
    $(this).parents('[data-campaigns-filter-container]').toggleClass('active')
  })

  $('[data-filter-container] .close').on('click', function() {
    $('[data-filter-btn]').toggleClass('active')
    $(this).parents('[data-filter-container]').toggleClass('active')
  })
  
  $('.wrapper_searchterms').css({opacity: 1})
});






