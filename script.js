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
});