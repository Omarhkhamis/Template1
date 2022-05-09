/*global $, */

$(function () {
    
    'use strict';
    
    //adjust header height
    var myHeader = $('.header'),
        mySlider = $('.bxslider');
        
        myHeader.height($(window).height());
    $(window).resize(function () {
       myHeader.height($(window).height());
         mySlider.each(function (){
      $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2 );
    }); 
        });
    
    // add active class to links
    
    $('.links li a').click(function () {
       $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    // adjust Bxslider list Item center
    
    mySlider.each(function (){
      $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2 );
    });
    
    mySlider.bxSlider({
        pager: false
        });
    
    //smooth scroll to div
    
     $('.links li a').click(function () {
        $('html, body').animate({
            
            scrollTop: $('#' + $(this).data('value')).offset().top
            
            }, 1000);
     });
     
     // Our Auto Slider Code
     
        (function autoSlider() {
           
           $('.slider .active').each(function() {
               
               if (!$(this).is(':last-child')) {
                   $(this).delay(3000).fadeOut(1000, function () {
                       
                       $(this).removeClass('active').next().addClass('active').fadeIn();
                        
                        autoSlider();
                   });                    
                                               
               } else {
                    $(this).delay(3000).fadeOut(1000, function () {
                        
                        $(this).removeClass('active');
                        
                        $('.slider div').eq(0).addClass('active').fadeIn();
                        
                        autoSlider();
                    });
               }
   
           });
           
        }());
     
            // Trigger MixitUp
            
        $('#container').mixItUp();
        
        //adjust shuffle links
        
        $('.shuffle li').click(function () {
           $(this).addClass('selected').siblings().removeClass('selected');
        });
        
        // Trigger Nice Scroll
        $("body").niceScroll({
            
            cursorcolor:"#1abc9c",
            cursorwidth: '10px',
            cursorborder: '0px'
            });
});