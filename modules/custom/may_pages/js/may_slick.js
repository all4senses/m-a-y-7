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
          
          
          
          $('body').on('mousemove', function() {
                    console.log('mouseMove...');
                    $('body').off('mousemove');
                    console.log($('.slidesJustAdded').height(), "$('slidesJustAdded').height() in mouse");
          });
        
          $(window).on('scroll', function() {
                    var height;
                    console.log('scroll...');
                    $('.slidesJustAdded').each(function(){
                        height = $(this).height();
                        console.log(height, 'height');
                    });
                    //console.log($('.slidesJustAdded').height(), "$('slidesJustAdded').height()");
                    
                    //$('body').off('scroll');
          });
        }
    };

}(jQuery));

