$(document).ready(function(){
    $('.banner_slider_otr').slick({
        infinite: true,
        dots:true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
    });
  });

  $(document).ready(function(){
    $('.showcase_bottom_slider').slick({
    });
  });

  $(document).ready(function(){
    $('.video_slider_content').slick({
      arrows:false,
      autoplay:true,
      autoplaySpeed:2000,
    });
  });

  $(document).ready(function() {
    $('.popup-video').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
  
      fixedContentPos: false
    });
  });