
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll >= 300) {
          $(".stickyHeader").addClass("isVisible");
      }
      else
      $(".stickyHeader").removeClass("isVisible");

      var scrollBottom = $(window).scrollTop() + $(window).height();

      if (scrollBottom >= 90) {
          $(".subscribeModal").addClass("isVisible");
      }
      else
      $(".subscribeModal").removeClass("isVisible");
  });
  
