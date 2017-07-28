(function ($) {

    $.fn.stickySidebar = function (options) {

        var config = $.extend({
            headerSelector: '#masthead',
            navSelector: '.main-headline',
            contentSelector: '.content',
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
            var includedHeight = $(config.includedSelector).outerHeight();
            var sliderHeight = $(config.sliderSelector).outerHeight();
            var plansHeight = $(config.plansSelector).outerHeight();
            var faqHeight = $(config.faqSelector).outerHeight();
            var auxHeight = $(config.auxSelector).outerHeight();
            var footerHeight = $(config.footerSelector).outerHeight();
            var scroll_top = $(window).scrollTop();
            var fixPosition = contentHeight - sidebarHeight;
            var breakingPoint1 = headerHeight + navHeight + includedHeight + sliderHeight + plansHeight + faqHeight;
            var breakingPoint2 = documentHeight - auxHeight - 650;

            // calculate
            if ((contentHeight > sidebarHeight) && (viewportHeight > sidebarHeight)) {

                if (scroll_top < breakingPoint1) {

                    sidebarSelector.removeClass('sticky');
                    $(".main").removeClass('sticky');

                } else if ((scroll_top >= breakingPoint1) && (scroll_top < breakingPoint2)) {

                    sidebarSelector.addClass('sticky').css('top', config.sidebarTopMargin);
                    $(".main").addClass('sticky');

                } else {

                    var negative = breakingPoint2 - scroll_top;
                    sidebarSelector.addClass('sticky').css('top', negative);

                }

            }
        };

        return this.each(function () {
            $(window).on('scroll', $.proxy(fixSidebr, this));
            $(window).on('resize', $.proxy(fixSidebr, this))
            $.proxy(fixSidebr, this)();
        });

    };

}(jQuery));