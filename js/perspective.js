(function($) {

var onScroll = function(event) {
    var scrollPerc = Math.floor($(document).scrollTop() /
                                ($(document).height() - $(window).height()) *
                                 100);

    $('.near').css('text-shadow', '0 0 ' + Math.round(scrollPerc / 5) + 'px rgba(0, 0, 0, 1)');
    $('.middle').css('text-shadow', '0 0 ' + Math.round(Math.abs(-3 * scrollPerc / 25 + 6)) + 'px rgba(0, 0, 0, 1)');
    $('.far').css('text-shadow', '0 0 ' + Math.round(scrollPerc / -10 + 10) + 'px rgba(0, 0, 0, 1)');
};

$(document).ready(function() {
    $(document).scroll(onScroll);
});

})(jQuery);

// vim: set et fenc=utf-8 sts=4 sw=4 ts=8 : 
