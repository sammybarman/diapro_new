$(document).ready(function(){
  $('.sidenav').sidenav({
    edge: 'right'
  });
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy({
    scrollOffset: 100,
    throttle: 10
  });
  $('.materialboxed').materialbox();
  $('.fixed-action-btn').floatingActionButton();
  $('.tap-target').tapTarget();
  $('.tooltipped').tooltip();
  $('.carousel').carousel();
});

// $('.dropdown-trigger').dropdown({
//   coverTrigger: false,
//   hover: true,
//   constrainWidth: false
// });

// $('.carousel.carousel-slider').carousel({
//   fullWidth: true,
//   indicators: true
// });
// var autoplay = true;
// setInterval(function() { if(autoplay) $('.carousel.carousel-slider').carousel('next'); }, 2000);
// $('.carousel.carousel-slider').hover(function(){ autoplay = false; },function(){ autoplay = true; });

var top1 = $('#sec1').offset().top - 200;

$(window).scroll(function(){

  if($(window).scrollTop()>top1){
    $('nav').addClass('bg');
    $('.brand-logo').addClass('bg2');
    $('nav ul a').addClass('bg2');
  }else{
    $('nav').removeClass('bg');
    $('.brand-logo').removeClass('bg2');
    $('nav ul a').removeClass('bg2');
  }
});

$(function () {
  $('#WAButton').floatingWhatsApp({
      phone: '+919831077320', //WhatsApp Business phone number
      headerTitle: 'Chat with us on WhatsApp!', //Popup Title
      popupMessage: 'Hello, how can we help you?', //Popup Message
      showPopup: true, //Enables popup display
      buttonImage: '<img src="static/img/whatsapp.svg" />', //Button Image
      //headerColor: 'crimson', //Custom header color
      //backgroundColor: 'crimson', //Custom background button color
      position: "right" //Position: left | right

  });
});


