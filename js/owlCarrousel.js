window.onload = function() {
  if (screen.width < 500)
  {
    console.log("Carrousel active now");
    $(document).ready(function(){
      $('.owl-carousel').owlCarousel({
        margin: 10,
        loop: false,
        dots: false,
        autoWidth: false,
        items: 1
      });
    });
  }
}