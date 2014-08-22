////////// MASONRY


$('ol').isotope({ 
  itemSelector: '.item',
  layoutMode: 'masonry',
  masonry: {
    columnWidth: 10
  }
});

////////// END MASONRY

$(".item-toggler").click(function() {
  toggleItems($(this).attr('href'));
});

$('#filter').keyup(function(){
  var val = $(this).val();

  if(val.length > 3)
    filterItems(val);
});

function clearFilter() {
  $('#filter').val('');
  filterItems('');
}

function filterItems(filter) {
  if(filter == '') {
    $('.item').show();
    return;
  }

  $('.item').each(function(i, el){
    el = $(el);
    if(el.text().toLowerCase().indexOf(filter) < 0) {
      el.hide();
    }
    else {
      el.show();
    }
  })
}

function toggleItems(hash) {

  clearFilter();
  $('nav li.active').removeClass('active');

  switch(hash) {
    case '#selling' :
        $('.item-unchecked').hide();
        $('.item-checked').show();
        $('nav li.selling').addClass('active');
        break;
    case '#maybe' :
        $('.item-unchecked').show();
        $('.item-checked').hide();
        $('nav li.maybe').addClass('active');
        break;
    default :
        $('.item-unchecked').show();
        $('.item-checked').show();
        $('nav li.all').addClass('active');
  }
}

toggleItems(window.location.hash);