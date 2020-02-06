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
  
  
  $(window).scroll(function(){
  
    if($(window).scrollTop()>30){
      $('nav').addClass('bg');
      $('.brand-logo').addClass('bg2');
      $('nav ul a').addClass('bg2');
    }else{
      $('nav').removeClass('bg');
      $('.brand-logo').removeClass('bg2');
      $('nav ul a').removeClass('bg2');
    }
  });
  
  
  
  