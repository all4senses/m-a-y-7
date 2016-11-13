(function ($) {

    Drupal.behaviors.may_home_parallax = {
        attach: function (context, settings) {

            console.log('may_slick.....');

            /*
             $(".slides").slick({
                dots: false,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                mobileFirst: true,
                adaptiveHeight: true,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1,
                            vertical: true,
                            verticalSwiping: true,
                            adaptiveHeight: false,
                        }
                    }
                ]
             });
             */
            $(".slides").each(function (index, value) {
                console.log(index, "index");
                console.log(value, "value");
                console.log(this, 'this');
                console.log($(this), '$this');
                
                console.log($(this).attr('data-slidesdirection'), '$this data-slidesdirection');
                console.log($(this).attr('data-slidesstepnum'), '$this data-slidesstepnum');
                console.log($(this).attr('data-slidesvisiblenum'), '$this data-slidesvisiblenum');
                
                
                $(this).slick({
                    dots: false,
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                    adaptiveHeight: true,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 4,
                                slidesToScroll: 1,
                                vertical: true,
                                verticalSwiping: true,
                                adaptiveHeight: false,
                            }
                        }
                    ]
                });
                
             
            });




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
