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
$('.radio-btn[name=payment1]').on('change',function(e){
    var value=$('.radio-btn[name=payment1]:checked').val();
    console.log(value);
    if (value=='paypal') {
     var hasclass= $('.paypal-form').hasClass("fadein");
    //  alert("paypal fadein: "+hasclass);
     if(hasclass){
         console.log("paypal: inside");
         $('.card-form').removeClass('fadeout');
         $('.paypal-form').removeClass('fadein');
         $('.card-form').addClass('fadein');
         $('.paypal-form').addClass('fadeout');
     }else{
         $('.card-form').addClass('fadein');
         $('.paypal-form').addClass('fadeout');
     }


      
    } else if(value=='mastercard') {
     var hasclass= $('.card-form').hasClass("fadein");
     console.log("master: "+hasclass);
    //  alert("master fadein: "+hasclass);
     if(hasclass){
         console.log("master: inside");
         $('.card-form').removeClass('fadein');
         $('.paypal-form').removeClass('fadeout');
         $('.paypal-form').addClass('fadein');
         $('.card-form').addClass('fadeout');
     }else{
         $('.paypal-form').addClass('fadein');
         $('.card-form').addClass('fadeout');
     }
     
      
    }
 });