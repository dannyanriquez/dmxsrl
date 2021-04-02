/*FUNCIONES PARA COUNTER UP*/


$(document).ready(function() {

    $('.counter').each(function () {
    $(this).prop('Counter',0).animate({
    Counter: $(this).text()
    }, {
    duration: 10000,
    easing: 'swing',
    step: function (now) {
    $(this).text(Math.ceil(now));
    }
    });
    });
    
});

/*FUNCIONES DEL CAROUSEL*/

    $( document ).ready(function() {
        $('.leftmenutrigger').on('click', function(e) {
        $('.side-nav').toggleClass("open");
        e.preventDefault();
       });
   });
   $('#myCarousel').carousel({
    interval: 3000,
 })
    
/*FUNCIONES DEL MENU HEADER*/

 $(document).ready(function () {
    $('.navbar-light .dmenu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).slideUp(105)
        });
    });

    /*BOTON IR ARRIBA*/ 
    $(document).ready(function(){ //Hacia arriba
        irArriba();
      });
      
      function irArriba(){
        $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },100); });
        $(window).scroll(function(){
          if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
        });
        $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
      }