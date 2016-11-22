/*
(function ($) {
    console.log('event reg');
	  $.each(['show', 'hide'], function (i, ev) {
	    var el = $.fn[ev];
	    $.fn[ev] = function () {
	      this.trigger(ev);
	      return el.apply(this, arguments);
	    };
	  });
})(jQuery);
*/


(function ($) {

    Drupal.behaviors.may_slick = {
        attach: function (context, settings) {

            console.log('may_slick.....');

            /*
             $(".slides").slick({
                dots: false,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                adaptiveHeight: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,//4,
                            slidesToScroll: 1,
                            vertical: true,
                            verticalSwiping: true,
                            adaptiveHeight: false,
                        }
                    }
                ]
             });
             */
            
            $("article .slides-wrapper .slides:not(.slick-initialized)", context).each(function (index, value) {
                
                //console.log($(this),'$(this)');
                // On Init Slick
                $(this).on('init', function(event, slick){
                  console.log('on init: ', event, '. slick: ', slick);
                });

                var vertical = ($(this).attr('data-slidesdirection') == 'vertical') ? true :  false;
                var visible_num = ($(this).attr('data-slidesvisiblenum') == null) ? 1 : parseInt($(this).attr('data-slidesvisiblenum'));
                var step_num = ($(this).attr('data-slidesstepnum') == null) ? 1 : parseInt($(this).attr('data-slidesstepnum'));
                var infinite = ($(this).attr('data-slidesinfinite') == 'true') ? true :  false;
                
                var sl = $(this).slick({
                    // Mobile view
                    dots: false,
                    infinite: true,//false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    adaptiveHeight: true,
                    //lazyLoad: 'ondemand', //'progressive',
                    responsive: [
                        {
                            // Full view, on res 768px or more
                            breakpoint: 768,
                            settings: {
                                slidesToShow: visible_num, //4,
                                slidesToScroll: step_num, //1,
                                vertical: vertical, //true,
                                infinite: infinite,
                                verticalSwiping: vertical,
                                //adaptiveHeight: true,//false,
                                //centerMode: true,
                            }
                        }
                    ]
                });
                
                //sl.slick('reinit');
                
                /*
                sl.slick('slickGoTo', 1);
                sl.slick('slickGoTo', 0);
                //xxx.slick('slickNext');
                //xxx.slick('slickPrev');
             
                
                
                sl.on('beforeChange', function(event, slick, currentSlide, nextSlide){
                    console.log(event, 'event');
                    console.log(nextSlide, 'nextSlide');
                });
                
                sl.on('init', function(event, slick){
                    console.log(event, 'event');
                    console.log(slick, 'slick');
                });
                
                sl.on('reInit', function(event, slick){
                    console.log(event, 'event');
                    console.log(slick, 'slick');
                    console.log(slick.$list[0].attributes.style, 'st before');
                    slick.$list[0].attributes.style = 'height: 333px;';
                    slick.$nextArrow.click();

                    console.log(slick.$list[0].attributes.style, 'st after');
                });
                
                
                console.log($(this).find('.slick-list').attr('style'), 'style before');
                $(this).find('.slick-list').attr('style','height: auto;');
                
                
                
                
                
                
                $(this).parent().find('.slick-next').click();
                $(this).parent().find('.slick-prev').click();
                
                console.log($(this).find('.slick-list').attr('style'), 'style after');
                */
               
               $(this).addClass('slidesJustAdded');
               
               if ($(this).hasClass('slick-initialized')) {
                   console.log('INITIALIZED!!!...');
               }
               else {
                   console.log('NOT INITIALIZED!!!...');
                   $(this).addClass('PROBLEMS');
               }
               
               
               
            });
            
            /*
            console.log($(this), 'this');
            
//            console.log($(this)[0].children[0].attributes['style'], 'attr style before');
//            console.log($(this)[0].children[0].attributes['style'].nodeValue, 'attr 2 style before');
//            
//            console.log($(this).find('.slick-list').attr('style'), 'style before');
//            $(this).find('.slick-list').attr('style','height: auto;');
//
//            console.log($(this).find('.slick-list').attr('style'), 'style fafter');
            */
           
           $("article:not(.slick_lightbox) .slides-arrow.first").click(function () {
                $(this).parent().find('.slick-prev').click();
            });
            $("article:not(.slick_lightbox) .slides-arrow.second").click(function () {
                $(this).parent().find('.slick-next').click();
            });
            //$('.slides').slickLightbox({
            $('article:not(.slick_lightbox)').slickLightbox({
                src: 'data-original', // 'src',
                itemSelector: 'img[data-original]'
            }).addClass('slick_lightbox');

            
            

//      $('.flexslider').flexslider({
//        animation: "slide",
//        directionNav: false
//      });


            /*
            $('.slick-next').click();
            $('.slick-prev').click();
            $('.slides').slick('slickNext');
            $('.slides').slick('slickPrev');

            $('.slides').resize();
            
            $('.slides').slick('reinit');
            
            
            
            
            $(".views-row").on('show', function () {
                console.log('on show views-row...');
            });
            */
            
            
            

//$.each(['show', 'hide'], function (i, ev) {
//	    var el = $.fn[ev];
//	    $.fn[ev] = function () {
//	      this.trigger(ev);
//	      return el.apply(this, arguments);
//	    };
//	  });
          
          /*
          $('.views-row').on('show', function() {
                    console.log('.views-row is now visible');
          });
        
          $('.views-row').on('infiniteScrollComplete', function() {
                    console.log('.views-row is now infiniteScrollComplete');
          });
          */
          
          
          /*
          $('body').on('mousemove', function() {
                    console.log('mouseMove...');
                    $('body').off('mousemove');
                    console.log($('.slidesJustAdded').height(), "$('slidesJustAdded').height() in mouse");
          });
          */
         
         var reinit_processing = false;
         
          $(window).on('scroll.checkSlides touchmove.checkSlides', function() {
                    
                    if (reinit_processing) {
                        return;
                    }
                    
                    reinit_processing = true;
                    var height, completed = true;
                    console.log('scroll...');
                    
                    $('.slidesJustAdded').each(function(){
                        height = $(this).height();
                        if (height > 70) {
                            $(this).removeClass('slidesJustAdded');
                        }
                        else {
                            console.log(height, ' - too small');
                            completed = false;
                            
                            //$(this).slick('unslick');
                            //$(this).slick('reinit');
                            $(this).slick('unslick').slick('reinit');
                            
//                            $(this).resize();
//                            $(this).parent().find('.slick-next').click();
//                            $(this).parent().find('.slick-prev').click();
//                            $('.slick-next').click();
                            height = $(this).height();
                            console.log(height, ' - after trial.');
                            if (height < 70) {
                                console.log($(this), 'this, bad');
                            }
                            
                        }
                        
                        
                    });
                    if (completed) {
                        $(window).off('scroll.checkSlides touchmove.checkSlides');
                        console.log('completed');
                    }
                    else {
                        console.log('not completed');
                    }
                    
                    //console.log($('.slidesJustAdded').height(), "$('slidesJustAdded').height()");
                    
                    //$('body').off('scroll');
                    
                    reinit_processing = false;
          });
         
          
          
        }
    };

}(jQuery));

