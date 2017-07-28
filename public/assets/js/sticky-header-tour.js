(function ($) {

    $.fn.stickySidebar = function (options) {

        var config = $.extend({
            headerSelector: '#masthead',
            navSelector: '.main-headline',
            contentSelector: '.content',
            scrollerSelector: '#scroller',
            preSelector: '.pre-localnav',
            includedSelector: '.included',
            sliderSelector: '.cost-slider',
            plansSelector: '.plans-container',
            faqSelector: '.faq',
            auxSelector: '.aux',
            footerSelector: '.support',
            sidebarTopMargin: 0,
            footerThreshold: 360
        }, options);

        var fixSidebr = function () {

            var sidebarSelector = $(this);
            var viewportHeight = $(window).height();
            var viewportWidth = $(window).width();
            var documentHeight = $(document).height();
            var headerHeight = $(config.headerSelector).outerHeight();
            var navHeight = $(config.navSelector).outerHeight();
            var sidebarHeight = sidebarSelector.outerHeight();
            var contentHeight = $(config.contentSelector).outerHeight();
            var scrollerHeight = $(config.scrollerSelector).outerHeight();
            var preHeight = $(config.preSelector).outerHeight();
            var includedHeight = $(config.includedSelector).outerHeight();
            var sliderHeight = $(config.sliderSelector).outerHeight();
            var plansHeight = $(config.plansSelector).outerHeight();
            var faqHeight = $(config.faqSelector).outerHeight();
            var auxHeight = $(config.auxSelector).outerHeight();
            var footerHeight = $(config.footerSelector).outerHeight();
            var scroll_top = $(window).scrollTop();
            var fixPosition = contentHeight - sidebarHeight;
            var breakingPoint1 = headerHeight + scrollerHeight + preHeight;
            var breakingPoint2 = documentHeight - auxHeight - 250;

            // calculate
            if ((contentHeight > sidebarHeight) && (viewportHeight > sidebarHeight)) {

                if (scroll_top < breakingPoint1) {

                    sidebarSelector.removeClass('sticky');
                    $(".build").removeClass('sticky');

                } else if ((scroll_top >= breakingPoint1) && (scroll_top < breakingPoint2)) {

                    sidebarSelector.addClass('sticky').css('top', config.sidebarTopMargin);
                    $(".build").addClass('sticky');

                } else {

                    var negative = breakingPoint2 - scroll_top;
                    sidebarSelector.addClass('sticky').css('top', negative);

                }

            }


        /**
         * Copyright 2012, Digital Fusion
         * Licensed under the MIT license.
         * http://teamdf.com/jquery-plugins/license/
         *
         * @author Sam Sehnert
         * @desc A small plugin that checks whether elements are within
         *     the user visible viewport of a web browser.
         *     only accounts for vertical position, not horizontal.
         */
      
        $.fn.visible = function(partial) {
          
            var $t            = $(this),
                $w            = $(window),
                viewTop       = $w.scrollTop(),
                viewBottom    = viewTop + $w.height(),
                _top          = $t.offset().top,
                _bottom       = _top + $t.height(),
                compareTop    = partial === true ? _bottom : _top,
                compareBottom = partial === true ? _top : _bottom;
          
          return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
      
        };
    
        $(window).scroll(function(event) {
          
          $(".step").each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
              el.addClass("test"); 
            } 
          });
          
        });
    
        };

        return this.each(function () {
            $(window).on('scroll', $.proxy(fixSidebr, this));
            $(window).on('resize', $.proxy(fixSidebr, this))
            $.proxy(fixSidebr, this)();
        });


    };

}(jQuery));