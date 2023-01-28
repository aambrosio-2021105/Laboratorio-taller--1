// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "fade",
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a"),

    controlNav: 'thumbnails',

  });
});
$(window).load(function() {
  $('.flexslider2').flexslider({
    animation: "fade",
    animationLoop: false,
    itemWidth: 1,
    itemMargin: 1,
    minItems: 1,
    maxItems: 5
  });
});
