(function ($) {

    Drupal.behaviors.may_masonry = {
        attach: function (context, settings) {

            console.log('may_masonry.....');
            
            var $grid = $('.masonry-items').masonry({
                // options...
                itemSelector: '.masonry-item',
                //columnWidth: 200,
                columnWidth: '.masonry-item',
                gutter: 5,
            });
            
            
            
            
//            // init Masonry
//            var $grid = $('.grid').masonry({
//              // options...
//            });
            // layout Masonry after each image loads
            $grid.imagesLoaded().progress( function() {
                $grid.masonry('layout');
            });
            
            /*
            new AnimOnScroll( document.getElementById( 'grid' ), {
                    minDuration : 0.4,
                    maxDuration : 0.7,
                    viewportFactor : 0.2
            } );
            */
           
            //$('.masonry-item img').addClass('not-loaded');
            $('.masonry-item img.not-loaded').lazyload({
//                effect: 'fadeIn',
//                load: function() {
//                    // Disable trigger on this image
//                    $(this).removeClass("not-loaded");
//                    //$container.isotope('reload');
//                    $grid.masonry('layout');
//                }
            });

          
        } // End of Attach
    }; // End of Behavior

}(jQuery));




//jQuery(document).ready(function($){
//	console.log('may_masonry 2.....');
//        jQuery('.masonry-items').masonry({
//            // options...
//            itemSelector: '.masonry-item',
//            columnWidth: 200
//        });
//});

