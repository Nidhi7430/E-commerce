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

  $(document).ready(function(){
    $('.collection_slider_main').slick({
      slidesToShow:3,
    });
  });

  $(document).ready(function(){
	
    $('ul.tabs li').click(function(){
      var tab_id = $(this).attr('data-tab');
  
      $('ul.tabs li').removeClass('current');
      $('.collection_slider').removeClass('current');
  
      $(this).addClass('current');
      $("#"+tab_id).addClass('current');
    })
  
  })