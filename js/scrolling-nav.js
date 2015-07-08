//jQuery to collapse the navbar on scroll
// $(window).scroll(function() {
//     if ($(".navbar").offset().top > 50) {
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     } else {
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// });

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        if($anchor.attr('href') == "#page-top"){
            var offset = 100;
        }
        // else if($anchor.attr('href') == "#about"){
        //    var offset = 80;
        // }
        else{
            var offset = 80;
        }
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - offset
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    // Closes the Responsive Menu on Menu Item Click
    // $('.navbar-collapse ul li a').click(function() {
    //     $('.navbar-toggle:visible').click();
    // });
});
// $(function() {
//     $('body').on('click', '.page-scroll a', function(event) {
//         var $anchor = $(this);
//         $('html, body').stop().animate({
//             scrollTop: $($anchor.attr('href')).offset().top
//         }, 1500, 'easeInOutExpo');
//         event.preventDefault();
//     });
// }); 

