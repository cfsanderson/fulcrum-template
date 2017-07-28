function handleHashChange() {
  var tab = location.hash.substring(1);

  switch (tab) {
    case 'ios': {
      $('.tab-ios').addClass('active');
      $('.tab-android').removeClass('active');
      $('.tab-web').removeClass('active');

      $('.content-ios').show();
      $('.content-android').hide();
      $('.content-web').hide();

      break;
    }
    case 'android': {
      $('.tab-ios').removeClass('active');
      $('.tab-android').addClass('active');
      $('.tab-web').removeClass('active');

      $('.content-ios').hide();
      $('.content-android').show();
      $('.content-web').hide();

      break;
    }
    case 'web': {
      $('.tab-ios').removeClass('active');
      $('.tab-android').removeClass('active');
      $('.tab-web').addClass('active');

      $('.content-ios').hide();
      $('.content-android').hide();
      $('.content-web').show();

      break;
    }
  }
}

window.addEventListener('hashchange', handleHashChange, false);

$(function() {
  if (!window.location.hash) {
    window.location.hash = 'ios';
  }

  handleHashChange();
});

