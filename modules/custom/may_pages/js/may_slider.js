(function ($) {

    Drupal.behaviors.may_slider = {
        attach: function (context, settings) {

            console.log('may_slider.....');
            
            /*
            jQuery( '.slides' ).sliderPro({
                    width: '300px',
                    height: '300px',
                    visibleSize: '100%',
                    //forceSize: 'fullWidth',
                    autoSlideSize: true,
                    orientation: 'vertical',
            });
            */


            /*
            jQuery(".slides ul").lightSlider({
                loop:false,
		//autoWidth: true,
                keyPress:true,
                verticalHeight:'100%',
                vertical:true,
		responsive : [
                    {
                        breakpoint:800,
                        settings: {
                            item:1,
                            slideMove:1,
                            //slideMargin:6,
                            //vertical:true,
                          }
                    },
                    {
                        breakpoint:480,
                        settings: {
                            item:1,
                            slideMove:1,
                            //vertical:true,
                          }
                    }
                ]

            });
            
            var slider = jQuery(".slides").lightSlider();
            slider.destroy();
            
            var slider = jQuery(".slides").lightSlider();
            slider.refresh();
          */
          
        } // End of Attach
    }; // End of Behavior

}(jQuery));

