(function ($) {

    Drupal.behaviors.may_home_parallax = {
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
            
            $(".slides:not(.slick-initialized)").each(function (index, value) {
                
                console.log($(this),'$(this)');
                
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
                });
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
                    slick.$list[0].attributes.style = 'height: auto;';
                    console.log(slick.$list[0].attributes.style, 'st after');
                });
                
                console.log($(this).find('.slick-list').attr('style'), 'style before');
                $(this).find('.slick-list').attr('style','height: auto;');
                
                
                sl.slick('reinit');
                
                
                
                $(this).parent().find('.slick-next').click();
                $(this).parent().find('.slick-prev').click();
                
                console.log($(this).find('.slick-list').attr('style'), 'style after');
                
            });
            
            
            console.log($(this), 'this');
            
//            console.log($(this)[0].children[0].attributes['style'], 'attr style before');
//            console.log($(this)[0].children[0].attributes['style'].nodeValue, 'attr 2 style before');
//            
//            console.log($(this).find('.slick-list').attr('style'), 'style before');
//            $(this).find('.slick-list').attr('style','height: auto;');
//
//            console.log($(this).find('.slick-list').attr('style'), 'style fafter');
            
            //$('.slides').slickLightbox({
            $('article').slickLightbox({
                src: 'data-original', // 'src',
                itemSelector: 'img[data-original]'
            });

            $(".slides-arrow.first").click(function () {
                $(this).parent().find('.slick-prev').click();
            });
            $(".slides-arrow.second").click(function () {
                $(this).parent().find('.slick-next').click();
            });

//      $('.flexslider').flexslider({
//        animation: "slide",
//        directionNav: false
//      });

        }
    };

}(jQuery));
