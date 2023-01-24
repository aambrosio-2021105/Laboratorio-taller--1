// Can also be used with $(document).ready()
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a")
  });
});
$(window).load(function() {
  $('.flexslider2').flexslider({
    animation: "slide",
    animationLoop: false,
    itemWidth: 1,
    itemMargin: 1,
    minItems: 1,
    maxItems: 5
  });
});