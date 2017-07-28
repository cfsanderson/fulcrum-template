$(function() {
  $('#gallery .add-button').click(function(e) {
    $('#gallery .add-button').fadeOut();
  });

  $('.app-fields .app-field').click(function(e) {
    next = $(this).next();
    if (!next.is(":empty")) {
      next.slideToggle();
    }
  });
});
