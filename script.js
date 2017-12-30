$(document).ready(function() {
  var waypoint = new Waypoint({
    element: document.getElementById('waypoint'),
    handler: function() {
      $('#row-with-navbar').toggleClass('sticky');
    }
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    if(/^#/.test(this.href) !== true) {
      var target = $(this.hash);
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  $('.js-animation-1').waypoint(function() {
    $('.js-animation-1').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js-animation-2').waypoint(function() {
    $('.js-animation-2').addClass('animated fadeInUp');
  }, {
    offset: '50%'
  });

  $('.js-animation-3').waypoint(function() {
    $('.js-animation-3').addClass('animated fadeIn');
  }, {
    offset: '50%'
  });

  $('.js-animation-4').waypoint(function() {
    $('.js-animation-4').addClass('animated pulse');
  }, {
    offset: '50%'
  });

});