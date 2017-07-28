if (/^new-record|edit-record/.test(window.location.hash.substring(1))) {
  if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) {
    window.location = 'fulcrumapp://' + window.location.hash.substring(1);
  } else {
    if (/^new-record/.test(window.location.hash.substring(1))) {
      window.location = 'https://web.fulcrumapp.com/records/new' + window.location.hash.substring(11);
    } else if (/^edit-record/.test(window.location.hash.substring(1))) {
      var urlParams = {};
      var parts = window.location.hash.substring(13).split("&");
      for (var i = 0; i < parts.length; i++) {
        var nv = parts[i].split('=');
        if (!nv[0]) continue;
        urlParams[nv[0]] = nv[1] || true;
      }
      window.location = 'https://web.fulcrumapp.com/records/' + urlParams.record_id + window.location.hash.substring(12) + '&mode=edit';
    }
  }
}
