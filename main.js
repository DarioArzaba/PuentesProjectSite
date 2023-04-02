$(document).ready(function(){


    $(this).scrollTop(0);
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();

        /*Change Top Nav Bar Color after 50 px of Scrolling*/
        
        if ( scroll >50 ) { 
            $("#MainNav").css("background-color", "white");
            $("#NavTitle").css("font-size", "14px");
            $(".MenuItem").css("color", "black");
            $(".MenuItem").hover(function(){
                $(this).css("color", "#953a7c");
                }, function(){
                $(this).css("color", "black");
            });
        } else if (scroll < 50) {
            $("#MainNav").css("border-bottom", "1px solid rgba(242, 242, 242, 0.4)");
            $("Nav").css("background-color", "transparent");
            $("#NavTitle").css("font-size", "18px");
            $(".MenuItem").css("color", "rgba(255,255,255,.7)");
            $(".MenuItem").hover(function(){
                $(this).css("color", "white");
                }, function(){
                $(this).css("color", "rgba(255,255,255,.7)");
            });
        }

        /*Bounce Icons. Reminder: Factor in Portfolio Space Later.*/
        if (scroll > 1100) {
            $("#Facebook").addClass("animation");$("#Github").addClass("animation");$("#Twitter").addClass("animation");
        }
        if (scroll > 1400) {
            $("#Soundcloud").addClass("animation");$("#Donate").addClass("animation");$("#SubmitStory").addClass("animation");
        }
 
    });

    /*Semi-Smooth Scrolling for Main Botton without Jquery Easing Plugin*/
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({scrollTop: target.offset().top-40}, 900 );
          return false;
        }
     }});

});
