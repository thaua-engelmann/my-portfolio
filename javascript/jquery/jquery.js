// ******************** Adding RubberBand animation to titles ******************** //
$('.title span').hover(function() {
    $(this).addClass('animated');
});

$('.title span').bind("webkitAnimationEnd mozAnimationEnd animationend", function() {
    $(this).removeClass('animated');
})

// ******************** Adding RubberBand animation to others elements ******************** //
$('.menu-btn, .music-toggle, a.next, a.previous').hover(function() {
    $(this).removeClass('animate__bounceInRight');
    $(this).removeClass('animate__bounceInLeft');
    $(this).addClass('animate__rubberBand');
})

$('.menu-btn, .music-toggle, a.next, a.previous').bind("webkitAnimationEnd mozAnimationEnd animationend", function() {
    $(this).removeClass('animate__rubberBand');
})


setTimeout(function() {
    $('.pre-loader').toggleClass('loaded');
}, 1500);