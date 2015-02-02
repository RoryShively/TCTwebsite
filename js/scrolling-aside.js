$().ready(function() {
    var $scrollingDiv = $("#right-colomn");
    var $leftcolheight = $("#left-colomn").height();
    var $rightcolheight = $("#right-colomn").height();

    var $leftfromtop = $("#left-colomn").offset().top;
    var $rightfromtop = $("#right-colomn").offset().top;

    var $window = $(window);
    
    var $scroll = $window.scrollTop()
    var $start = ($leftfromtop - 92)
    // alert($leftfromtop);
    // alert($rightfromtop);
    // alert($leftfrombottom);
    // alert($rightfrombottom);
    $document = $(document)



    $document.scroll(function() {
      var $document = $(document);
      var $scroll = $document.scrollTop();
      var $leftfromtop = $("#left-colomn").offset().top;
      var $start = ($leftfromtop - 92);
      var $leftcolheight = $("#left-colomn").height();
      var $rightcolheight = $("#right-colomn").height();
      var $stop = ($start + $leftcolheight - $rightcolheight);
      var $viewport = window.innerWidth || $(window).width();
      
      console.log($leftcolheight);


          if (($scroll > $start) && ($scroll < $stop) && ($viewport > 650)) {
              $('#right-colomn').addClass('fixed');
          } 
            else {
              $('#right-colomn').removeClass('fixed');
          }

          if(($scroll > $stop) && ($viewport > 650) && ($leftcolheight > 500)) {
            $('#right-colomn').addClass('fixed-bottom');
            $('#right-colomn').css("top", ($stop + 86));
          }
            else {
              $('#right-colomn').removeClass('fixed-bottom');
              $('#right-colomn').css("top", "14%");
          }

          if(($leftcolheight <= 500)) {
            $('#right-colomn').css("position", "relative");
            $('#right-colomn').removeClass('fixed');
            $('#right-colomn').removeClass('fixed-bottom');
          }
         
      });
          
              
});