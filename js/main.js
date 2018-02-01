
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
  $('.toggle-vis').on( 'click', function (e) {
    var column = table.column( $(this).attr('data-column') );
    console.log(column);
    column.visible( ! column.visible() );

  } );

  $('.toggle-length').on( 'click', function () {
    table.page.len( 25 ).draw();
  } );

  $('#myInput').on( 'keyup', function () {
    table.search( this.value ).draw();
  } );
});








