$(".about-button").click(function(){
  $('html, body').animate({
    scrollTop: $("#about").offset().top
  }, 750);
});

$(".portfolio-button").click(function(){
  $('html, body').animate({
    scrollTop: $("#projects").offset().top
  }, 750);
});

$(".resume-button").click(function(){
  $('html, body').animate({
    scrollTop: $("#resume").offset().top
  }, 750);
});

$(function() {
   $("#one").addClass("progress-bar-csharp");
});

$(function() {
   $("#two").addClass("progress-bar-javascript");
});

$(function() {
   $("#three").addClass("progress-bar-swift");
});

$(document).ready(function(){
  var zindex = 10;

  $("div.card").click(function(e){
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true
    }

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show")
        .removeClass("show");

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards")
          .removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this)
          .css({zIndex: zindex})
          .addClass("show");

      }

      zindex++;

    } else {
      // no cards in view
      $("div.cards")
        .addClass("showing");
      $(this)
        .css({zIndex:zindex})
        .addClass("show");

      zindex++;
    }

  });
});
