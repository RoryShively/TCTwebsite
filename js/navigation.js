  $(document).ready(function() {

    $("#band-nav").click(function() {
      $(".toggle").attr("style", "display:none;");
      $("#band").attr("style", "display:block;");
      $(".navbar a").attr("style", "color:whitesmoke;");
      $("#band-nav").attr("style", "color:tomato;");
      $(".navbar-collapse").collapse('hide');
    });

    $("#show-nav").click(function() {
      $(".toggle").attr("style", "display:none;");
      $("#show").attr("style", "display:block;");
      $(".navbar a").attr("style", "color:whitesmoke;");
      $("#show-nav").attr("style", "color:tomato;");
      $(".navbar-collapse").collapse('hide');
    });

    $("#media-nav").click(function() {
      $(".toggle").attr("style", "display:none;");
      $("#media").attr("style", "display:block;");
      $(".navbar a").attr("style", "color:whitesmoke;");
      $("#media-nav").attr("style", "color:tomato;");
      $(".navbar-collapse").collapse('hide');
    });

    $("#contact-nav").click(function() {
      $(".toggle").attr("style", "display:none;");
      $("#contact").attr("style", "display:block;");
      $(".navbar a").attr("style", "color:whitesmoke;");
      $("#contact-nav").attr("style", "color:tomato;");
      $(".navbar-collapse").collapse('hide');
    });

  });