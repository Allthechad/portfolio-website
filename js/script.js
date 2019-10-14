console.log("Hello World")

function myNavtoggle() {
    var x = document.getElementById("myNavtoggle");
    if (x.className === "navtoggle") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  $(function() {
    // $('a[href*=#]:not([href=#])').click(function() { change to below
    // ref: https://github.com/jquery/jquery/issues/2885
    $('a[href*=\\#]:not([href=\\#])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 7000);
          return false;
        }
      }
    });
  });