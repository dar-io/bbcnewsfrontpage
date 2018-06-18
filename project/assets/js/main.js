

$(document).keypress(function(e) {
  var key = e.which;
  if (key == 49) {
      // if the user pressed 't':
      $("body").toggleClass("see_also_1");
      $("body").removeClass("see_also_0 see_also_2 see_also_3 see_also_4 see_also_5 see_also_6 on-now--opt_2 on-now--opt_3 on-now--opt_4");
      $("body").toggleClass("on-now--opt_1");
  };
  if (key == 50) {
      // if the user pressed 't':
      $("body").toggleClass("see_also_2");
      $("body").toggleClass("on-now--opt_2");
      $("body").removeClass("see_also_0 see_also_1 see_also_3 see_also_4 see_also_5 see_also_6 on-now--opt_1 on-now--opt_3 on-now--opt_4");
  };

  if (key == 51) {
      // if the user pressed 't':
      $("body").toggleClass("see_also_3");
      $("body").toggleClass("on-now--opt_3");
      $("body").removeClass("see_also_0 see_also_1 see_also_2 see_also_4 see_also_5 see_also_6 on-now--opt_2 on-now--opt_1 on-now--opt_4");
  };
  if (key == 52) {
      // if the user pressed 't':
      $("body").toggleClass("see_also_4");
      $("body").toggleClass("on-now--opt_4");
      $("body").removeClass("see_also_0 see_also_1 see_also_2 see_also_3 see_also_5 see_also_6 see_also_5 see_also_6 on-now--opt_2 on-now--opt_3 on-now--opt_1");
  };
  if (key == 53) {
      // if the user pressed 't':
      $("body").toggleClass("see_also_5");
      $("body").toggleClass("on-now--opt_5");
      $("body").removeClass("see_also_0 see_also_1 see_also_2 see_also_3 see_also_4 see_also_6");
  };
  if (key == 54) {
      // if the user pressed 't':
      $("body").toggleClass("see_also_6");
      $("body").toggleClass("on-now--opt_6");
      $("body").removeClass("see_also_0 see_also_1 see_also_2 see_also_3 see_also_4 see_also_5");
  };
  if (key == 48) {
      // if the user pressed 't':
      $("body").toggleClass("see_also_0");
      $("body").removeClass("see_also_1 see_also_2 see_also_3 see_also_4 see_also_5 see_also_6");
  };
  if (key == 57) {
      // if the user pressed 't':
      $("body").toggleClass("headline_top");

  };
  if (key == 56) {
      // if the user pressed 't':
      $(".max--wrap").toggleClass("max--inverted");

  };
  if (key == 55) {
      // if the user pressed 't':
      $(".max__item--0 .promo").toggleClass("no-live-promo");
      $("body").toggleClass("hide-live-promo");
  };
  if (key == 65) {
      // if the user pressed 'a':
      $(".boron--wrap").toggleClass("bbccom_hpu, bbccom_mpu");

  };
});


$(document).ready(function($){

  $('.layoutOptions').change(function(){
     var s = $(this);
     var name = s.attr('name');
      // $('.'+name).removeClass().addClass(name+' '+s.find(':selected').text().toLowerCase());
       $('.'+name).removeClass().addClass(name+' '+s.find(':selected').val());

  });

  $('.toggleClass').change(function(){
     var s = $(this);
     var name = s.attr('name');
        $('.'+name).toggleClass(s.find(':selected').val());
  });
});


//slideshow

$(document).ready(function(){
  var $prev = $('.previous');
  var $next = $('.next');
  var mode = "auto";
  $prev.on({
    click: function(e){
      e.preventDefault();
      mode = "manual";
      showPreviousImage();
    }
  });
  $next.on({
    click: function(e){
      e.preventDefault();
      mode = "manual";
      showNextImage();

    }
  });

  setInterval(function(){
    if(mode==="auto"){
      showNextImage();
    }
  },5000);

  function showNextImage(){
      var $actEl = $('.active');
      var $nextEl = $actEl.next('.slide');
      if($nextEl.length){
        $actEl.removeClass('active');
        $nextEl.addClass('active');
      }else{
        $actEl.removeClass('active');
        $('.slide:first-child').addClass('active');
      }
  }

  function showPreviousImage(){
      var $actEl = $('.active');
      var $prevEl = $actEl.prev('.slide');
      if($prevEl.length){
        $actEl.removeClass('active');
        $prevEl.addClass('active');
      }else{
        $actEl.removeClass('active');
        $('.slide.last').addClass('active');
      }
  }
});



// hover link

 // $('.at-links-faux-block-link ').hover(
 //        function(){ $(this).addClass('at-links-faux-block-link--hover') },
 //        function(){ $(this).removeClass('at-links-faux-block-link--hover') }
 // )



  $(document).ready(function(){

    $(".button a.btn-close").click(function(){
        $(".overlay").fadeToggle(200);

    });
    $(".button a.btn-open").click(function(){
        $(".overlay").fadeToggle(200);
    });

    // $('.has-modal').addClass('is-blurred');

    // $('.toggleModal').on('click', function (event) {
    //   event.preventDefault();
    //
    //   $('.modal').toggleClass('is-active');
    //   $('body').toggleClass('is-blurred');
    // });

    // if ($.cookie('keeperpass') == "uxd01") {
    //   $('.modal').toggleClass('is-active');
    //   $('.has-modal').toggleClass('is-blurred');
    //
    // }
});

// $("#js-rotating").Morphist({
//     // The entrance animation type (In).
//     animateIn: "fadeInDown",
//     // The exit animation type (Out). Refer to Animate.css for a list of available animations.
//     animateOut: "fadeOutDown",
//     // The delay between the changing of each object in milliseconds.
//     speed: 20000,
//     complete: function () {
//         // Called after the entrance animation is executed.
//
//     }
// });
// $('#js-rotating').animate({height:$('#js-rotating').content().outerHeight()});


//Limit Number of characters summary



// $(".promo__summary").text(function(index, currentText) {
//   return currentText
//            .split(' ', 17) //create array of the first four words
//            .join(' ')+'.';    //join the array with spaces
// });




// some improvements on the modal suggested by @iammarkoradak
