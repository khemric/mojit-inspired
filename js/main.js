$(document).ready(function(){
// Carousel
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin:10,
    items:1,
    autoplay:true
  });

  // CSSMap;
  $("#map-continents").CSSMap({
    "size": 1280,
    "mapStyle": "vintage",
    "tooltips": "floating-top-center",
    "responsive": "auto",
    "tapOnce": true,
  });
  // END OF THE CSSMap;


});

$( document ).ready(function() {
   $(".burger-button").click(function(){
     $(".burger-button").toggleClass("active");
     $(".burger-menu").slideToggle();
   });
});
