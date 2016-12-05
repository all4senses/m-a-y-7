(function ($) {

    Drupal.behaviors.may_masonry = {
        attach: function (context, settings) {

            console.log('may_masonry.....');
            
            var $grid = $('.masonry-items').masonry({
                // options...
                itemSelector: '.masonry-item',
                //columnWidth: 200,
                columnWidth: '.masonry-item',
                gutter: 10,
            });
            
            
            
            
//            // init Masonry
//            var $grid = $('.grid').masonry({
//              // options...
//            });
            // layout Masonry after each image loads
            $grid.imagesLoaded().progress( function() {
                $grid.masonry('layout');
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

