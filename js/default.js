// ========== Banner Slider
$('#banner_slider').owlCarousel({
    margin:0,
    items: 1,
    dots:true,
    nav:true,
    navText : ["<span class='fa fa-angle-left'></span>","<span class='fa fa-angle-right'></span>"], 
    loop:true,
    smartSpeed:2000,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsiveClass:true, 
    responsive: {
        300: {
            nav:false,
            dots:true,
        },
        700: {
            nav:true,
            dots:false,
        }
    }
});
// ========== Thumbnail Slider
/*$('#more').owlCarousel({
    dots: false,
    nav: false,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    loop: true,
    margin: 10,
    items: 4,
    responsiveClass: true,
    thumbs:false,
    responsive: {
      200: {
        items:2,
      },
      400: {
        items:3,
      },
      501: {
        items:4,
      },
    }
});*/