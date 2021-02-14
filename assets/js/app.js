
/**  
* @author: Dedaldino Daniel
* @description: Events With jQuery And VanillaJs
* @licence: MIT
*
*/

//** Loader **//
$(function(){

    menu = $('nav ul');

    $('#toggle-btn').on('click', function(e){
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(this).width();
        if(w > 580 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('nav li').on('click', function(){
        var w = $(window).width();
        if(w < 580 ){
            menu.slideToggle();
        }
    });

    $('.open-menu').height($(window).height());

    
    //** Portfolio Section **//
    $('.portfolio-list ul li').click(function(){
        $('.portfolio-list ul li').removeClass('active-portfolio');
        $(this).addClass('active-portfolio');
        
    });

    $('#popup-btnClose').click(function(){
        $('.popup').css({
            "visibility":"hidden",
            "opacity":"0"
        });
        $('.popup-inner').css({
            "bottom":"-100vw",
            "right":"-100vh"
        });
    });

    $('.popup-btn-closed').click(function(){
        $('.popup').css({
            "visibility":"hidden",
            "opacity":"0"
        });
        $('.popup-inner').css({
            "bottom":"-100vw",
            "right":"-100vh"
        });
    });

    $('.box-info i').click(function(){
        $('.popup').css({
            "visibility":"visible",
            "opacity":"1"
        });
        $('.popup-inner').css({
            "bottom":"0",
            "right":"0",
            "transform":"rotate(0)"
        });
    })

});

//** ScrollTop Animate **//
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event){
        if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname){    
            var target = $(this.hash);
            target = target.length ? target : $('[name=' +this.hash.slice(1) + ']');
    
            if(target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function(){
                    var $target = $(target);
                    $target.focus();
                    if($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    }
                });
            }
        }
    });
