/**
 * Elham Amouhadi
 */
$(document).ready(function(){
   $('.resumeCircle img').mouseenter(function(){
           $(this).toggleClass('rotate');
   }) ;
    $('.resumeCircle img').mouseleave(function(){
        $(this).toggleClass('rotate');
    }) ;


    $('.circle').mouseenter(function(){
        $(this).toggleClass('scaleCircle');
    }) ;

    $('.circle').mouseleave(function(){
        $(this).toggleClass('scaleCircle');
    });

    $('.imageWork').mouseenter(function(){
        $(this).toggleClass('scaleCircle');
    }) ;
    $('.imageWork').mouseleave(function(){
        $(this).toggleClass('scaleCircle');
    });

    setHeights();
    /**
     * ------------------------------------------------------
     *  Smooth Scroll
     * ------------------------------------------------------
     */
    $('a.smooth-scroll').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        e.preventDefault();
    });

    /**
     * -----------------------------------------------------
     * Add active class to li
     * -----------------------------------------------------
     */
    $('li').click(function(){
        $('li').removeClass('active');
        $(this).addClass('active');

    })

});


function setHeights() {
    $('main').css('height','unset')
    var headerHeight = $('header').height()
    var footerHeight = $('footer').height()
    var mainDefultHeight = $('main').height()
    var candidateHeight = window.innerHeight - ( headerHeight + footerHeight )
    if( candidateHeight > mainDefultHeight ) {
        $('main').css('height', candidateHeight)
    }
}
