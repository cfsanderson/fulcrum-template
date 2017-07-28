var handled = false;

window.GallerySlug = null;

function updateGalleryButtons(event, slug) {
  $('.use-app').html('Add This App to (' + event.data.name + ')');
  $('.use-app').attr('href', 'https://web.fulcrumapp.com/galleries/' + slug + '/use');
  $('.use-app').click(function(ev) {
    if (handled) {
      ev.preventDefault();
      return false;
    }

    handled = true;

    $('.use-app').html('Loading your app...');
    $('.use-app').addClass('disabled');
  });
}

function updateNavigationButtonsFromSession(event) {
  $('.registration #nav-cta').hide();
  $('.registration #sign-in a').html('Fulcrum Dashboard');
  $('.registration #sign-in a').attr('href', 'https://web.fulcrumapp.com');
  $('.registration #sign-in').addClass('logged-in');
  $('.registration #sign-in').css('margin-right', '0');
  $('.registration #sign-in a').append('<img src="/assets/img/icon-fulcrum-dashboard.png" alt="Fulcrum Dashboard" />');
}

function onMessage(event) {
  if (event.origin.indexOf('web.fulcrumapp.com') > -1) {
    if (event.data.session) {
      updateNavigationButtonsFromSession(event);

      if (window.GallerySlug) {
        updateGalleryButtons(event, window.GallerySlug);
      }
    }

    $('.registration').show();
  }
}

if (window.addEventListener) {
  window.addEventListener('message', onMessage, false)
} else {
  window.attachEvent('message', onMessage)
}

$(function() {
  var iframe = document.createElement('iframe');

  iframe.src = 'https://web.fulcrumapp.com/session/check';
  iframe.style.display = 'none';

  document.body.appendChild(iframe);
});
