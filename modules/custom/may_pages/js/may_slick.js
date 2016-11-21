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
            
            $(".slides:not(.slick-initialized)"/*, context*/).each(function (index, value) {
                
                //console.log($(this),'$(this)');
                
                var vertical = ($(this).attr('data-slidesdirection') == 'vertical') ? true :  false;
                var visible_num = ($(this).attr('data-slidesvisiblenum') == null) ? 1 : parseInt($(this).attr('data-slidesvisiblenum'));
                var step_num = ($(this).attr('data-slidesstepnum') == null) ? 1 : parseInt($(this).attr('data-slidesstepnum'));
                var infinite = ($(this).attr('data-slidesinfinite') == 'true') ? true :  false;
                
                var sl = $(this).slick({
                    // Mobile view
                    dots: false,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    adaptiveHeight: true,
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
                }).addClass('slides-just-added');
                
                //$(this).addClass('slides-just-added');
                
                console.log('sl', sl);
                console.log('this', $(this));
                
                var article_class = $(this).parent().parent().parent().parent().parent().attr('class');
                console.log('article_classes: ', article_class);
                
                //sl.slick('reinit');
                //$('.slides').resize();
             
               
            });
           
           
           console.log('slides not slicked: ', $(".slides:not(.slick-initialized)"));
           
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

            
            
            var reinit_processing = false;
         
            $(window).on('scroll.checkSlides touchmove.checkSlides', function() {
                    
                    if (reinit_processing) {
                        return;
                    }
                    
                    reinit_processing = true;
                    var height, completed = true;
                    console.log('scroll...');
                    
                    $('.slides-just-added').each(function(){
                        console.log('testing just-added for correct slick...');
                        height = $(this).height();
                        if (height > 70) {
                            $(this).removeClass('slides-just-added');
                        }
                        else {
                            console.log(height, ' - too small');
                            completed = false;
                            $(this).slick('unslick');
                            $(this).slick('reinit');
//                            $(this).resize();
//                            $(this).parent().find('.slick-next').click();
//                            $(this).parent().find('.slick-prev').click();
//                            $('.slick-next').click();
                            height = $(this).height();
                            console.log(height, ' - after trial.');
//                            if (height < 70) {
//                                console.log($(this), 'this, bad');
//                            }
                            
                        }
                        
                        
                    });
                    if (completed) {
                        $(window).off('scroll.checkSlides touchmove.checkSlides');
                        console.log('completed');
                    }
                    else {
                        console.log('not completed');
                    }
                    
                    //console.log($('.slides-just-added').height(), "$('slides-just-added').height()");
                    
                    reinit_processing = false;
                    
          }); // End of $(window).on('scroll.checkSlides touchmove.checkSlides', function() {
         
          
          
        } // End of Attach
    }; // End of Behavior

}(jQuery));

