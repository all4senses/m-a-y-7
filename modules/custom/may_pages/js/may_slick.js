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
            
            
            
            $("article .slides-wrapper .slides:not(.slick-initialized)", context)
                .on('init', function(event, slick){
                    console.log('on init obj: ', slick.$slider[0].className);
                    //console.log('--->Event: ', event, '. ---> Slick: ', slick);
                    $(this).parent().addClass('slick-initialized-parent');

                    // Doesn't work.
                    //slick.$slider.slick('slickSetOption', "responsive", [{ breakpoint: 768, settings: {slidesToShow: 9} }], true);

                    var vertical = ($(this).attr('data-slidesdirection') == 'vertical') ? true :  false;
                    var visible_num = ($(this).attr('data-slidesvisiblenum') == null) ? 1 : parseInt($(this).attr('data-slidesvisiblenum'));
                    var step_num = ($(this).attr('data-slidesstepnum') == null) ? 1 : parseInt($(this).attr('data-slidesstepnum'));
                    var infinite = ($(this).attr('data-slidesinfinite') == 'true') ? true :  false;

                    console.log('vertical: ', vertical, ', visible_num: ', visible_num, ', step_num: ', step_num, ', infinite: ', infinite ? 'true' : 'false');
                    
                    slick.breakpointSettings[768] = {
                        slidesToShow: visible_num,
                        slidesToScroll: step_num,
                        vertical: vertical,
                        infinite: infinite,
                        verticalSwiping: vertical,
                    };
                    
                   
//                    slick.breakpointSettings[768].slidesToShow = visible_num;
//                    slick.breakpointSettings[768].slidesToScroll = step_num;
//                    slick.breakpointSettings[768].vertical = vertical;
//                    slick.breakpointSettings[768].infinite = infinite;
//                    slick.breakpointSettings[768].verticalSwiping = vertical;
                                        
                    slick.options.responsive[0].settings.slidesToShow = visible_num;
                    slick.options.responsive[0].settings.slidesToScroll = step_num;
                    slick.options.responsive[0].settings.vertical = vertical;
                    slick.options.responsive[0].settings.infinite = infinite;
                    slick.options.responsive[0].settings.verticalSwiping = vertical;

                    
                    //console.log('$(this): ', $(this));
//                    if ($(this).hasClass('p2-12 s1')) {
//                        jQuery('.slides.p2-12.s1').slick('slickSetOption', 'responsive', [{ breakpoint: 768, settings: {slidesToShow: 2, vertical: true} }], true);
//                    }
                    //$(this).slick('slickSetOption', 'responsive', [{ breakpoint: 768, settings: {slidesToShow: visible_num, } }], true);
                    console.log('+++> Slick: ', slick);
                    //$(this).slick('unload').slick('reinit');

                })
                .slick({
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
                                slidesToShow: 1, 
                                slidesToScroll: 1,
                                vertical: false,
                                infinite: true,
                                verticalSwiping: false,
                                //adaptiveHeight: true,
                                //centerMode: true,
                            }
                        }
                    ]
                })
                .addClass('slidesJustAdded');
                
            
            
            
            
            // Works!!! Via each...
            /*
            $("article .slides-wrapper .slides:not(.slick-initialized)", context).each(function (index, value) {
                
                //console.log($(this),'$(this)');
                // On Init Slick
                $(this).on('init', function(event, slick){
                  console.log('on init: ', event, '. slick: ', slick);
                  $(this).parent().addClass('slick-initialized-parent');
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
                                slidesToShow: ($(this).attr('data-slidesvisiblenum') == null) ? 1 : parseInt($(this).attr('data-slidesvisiblenum')), //visible_num, //4,
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
                
               $(this).addClass('slidesJustAdded');
               
               if ($(this).hasClass('slick-initialized')) {
                   console.log('INITIALIZED!!!...');
               }
               else {
                   console.log('NOT INITIALIZED!!!...');
                   $(this).addClass('PROBLEMS');
               }
                 
            });
            */
            
            
            /*
            sl.on('reInit', function(event, slick){
                console.log(event, 'event');
                console.log(slick, 'slick');
                console.log(slick.$list[0].attributes.style, 'st before');
                slick.$list[0].attributes.style = 'height: 333px;';
                slick.$nextArrow.click();
            });
            */
               

            
            /*
            
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



            
        /*
          $.each(['show', 'hide'], function (i, ev) {
	    var el = $.fn[ev];
	    $.fn[ev] = function () {
	      this.trigger(ev);
	      return el.apply(this, arguments);
	    };
	  });
          
          
          $('.views-row').on('show', function() {
                    console.log('.views-row is now visible');
          });
        */
       
        /*
          $('.views-row').on('infiniteScrollComplete', function() {
                    console.log('.views-row is now infiniteScrollComplete');
          });
        */
          
        $(".views-row").on('load', function () {
            console.log('on LOAD views-row...');
        });

            
        var reinit_processing = false;
        $(window).on('scroll.checkSlides touchmove.checkSlides', function() {
                    
                    if (reinit_processing) {
                        return;
                    }
                    
                    reinit_processing = true;
                    var height, completed = true;
                    console.log('scroll...');
                    
                    $('.slidesJustAdded').each(function(){
//                        if (!$(this).hasClass('slick-initialized')){
//                            console.log('Just added wasnt slick initialized. Reinit...');
//                            $(this).slick('unslick').slick('reinit');
//                        }
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

