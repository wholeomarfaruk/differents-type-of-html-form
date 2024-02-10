$(document).ready(function(){
    $(window).bind("scroll", function() {
        //your code placeholder
          //clear all active class
    $('.payment-details').removeClass('active');
    //add active class to timeline
    $(".payment-details").withinviewport().each(function() {
         $('.payment-details').addClass('active');
    });
    });
    
  });
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();

    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
};
$(window).on('resize scroll', function() {
    if ($('.payment-details').isInViewport()) {
        // do something
        $('.payment-details').addClass('active');
    } else {
        // do something else
    }
});