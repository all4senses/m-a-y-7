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
            
            /**/
            $(".slides").each(function (index, value) {
                console.log(index, "index");
                console.log(value, "value");
                console.log(this, 'this');
                console.log($(this), '$this');
                
                //var vertical = $(this).attr('data-slidesdirection');
                //var visible_num = $(this).attr('data-slidesvisiblenum');
                //var step_num = $(this).attr('data-slidesstepnum');
                
                
                var vertical = ($(this).attr('data-slidesdirection') == 'vertical') ? true :  false;
                var visible_num = ($(this).attr('data-slidesvisiblenum') == null) ? 1 : $(this).attr('data-slidesvisiblenum');
                var step_num = ($(this).attr('data-slidesstepnum') == null) ? 1 : $(this).attr('data-slidesstepnum');
                
                console.log($(this).attr('data-slidesdirection'), '$this data-slidesdirection');
                console.log($(this).attr('data-slidesstepnum'), '$this data-slidesstepnum');
                console.log($(this).attr('data-slidesvisiblenum'), '$this data-slidesvisiblenum');
                
                
                console.log(vertical, 'vertical');
                console.log(visible_num, 'visible_num');
                console.log(step_num, 'step_num');
                
                
                $(this).slick({
                    // Mobile view
                    dots: false,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    adaptiveHeight: true,
                    responsive: [
                        {
                            // Full view
                            breakpoint: 768,
                            settings: {
                                slidesToShow: parseInt("1"),//visible_num, //4,
                                slidesToScroll: parseInt("1"), ///step_num, //1,
                                vertical: vertical, //true,
                                verticalSwiping: true,
                                //adaptiveHeight: true,//false,
                                //centerMode: true,
                            }
                        }
                    ]
                });
                
             
            });

            /**/


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
