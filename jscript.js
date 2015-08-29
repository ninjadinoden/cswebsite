$(document).ready(function(){
    $('#logo')
        .mouseover(function() {
            var src = $(this).attr("src").replace("logo1.png", "logo2.png");
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("logo2.png", "logo1.png");
            $(this).attr("src", src);
        });
  $('.bxslider').bxSlider();
});
