function closest (num, arr) {
    var curr = arr[0];
    var diff = Math.abs (num - curr);
    for (var val = 0; val < arr.length; val++) {
        var newdiff = Math.abs (num - arr[val]);
        if (newdiff < diff) {
            diff = newdiff;
            curr = arr[val];
        }
    }
    return curr;
}

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
           
           
            //Prepare data for slick-lightbox
            var w_width = jQuery(window).width();
            var w_height = jQuery(window).height();
            
            var sicklightfull, current_size_url, closest_style_width, newWidth, newHeight;
            
            $('.masonry-items img').each(function(index, value){
                
                
                // Find out and set a current more appropriate size image url
                //console.log();
                
                closest_style_width = closest($(this).parent().width(), Drupal.settings.slick_lightbox_source_data.sizes);
                current_size_url = '/f/styles/' + closest_style_width + '/public' + $(this).attr('data-originalpath');
                $(this).attr('data-original', current_size_url);
                
                
                // Find out and set an image url for full screen slick lightbox slideshow
                var i_aspect = $(this).attr('data-iaspect');
            
                if (w_height/w_width >= i_aspect) {
                    newHeight = Math.floor(w_width * i_aspect);
                    newWidth = newHeight * i_aspect;
                }
                else {
                    newWidth = Math.floor(w_height * (1/i_aspect));
                }
                closest_style_width = closest(newWidth - 70, Drupal.settings.slick_lightbox_source_data.sizes);
                
                sicklightfull = '/f/styles/' + closest_style_width + '/public' + $(this).attr('data-originalpath');
                $(this).attr('data-sicklightfull', sicklightfull);
            });
            
            
            
            
            
            
            // Add images lazy load
            $('.masonry-item img').addClass('not-loaded');
            $('.masonry-item img.not-loaded').lazyload({
                effect: 'fadeIn',
                load: function() {
                    // Disable trigger on this image
                    $(this).removeClass("not-loaded");
                    //$container.isotope('reload');
                    $grid.masonry('layout');
                    //$(this).addClass("loaded");
                    
                    
                }
            });
            
            
            jQuery('.masonry-items').slickLightbox({
                src: 'data-sicklightfull', // 'src',
                itemSelector: 'img[data-sicklightfull]'
            }).addClass('slick_lightbox');

          
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

