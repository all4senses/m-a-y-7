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
            
                console.log('i_aspect: ', i_aspect);
                if (w_height/w_width >= i_aspect) {
                    newHeight = Math.floor(w_width * i_aspect);
                    newWidth = newHeight * i_aspect;
                    console.log('1 newWidth: ', newWidth);
                }
                else {
                    newWidth = Math.floor(w_height * (1/i_aspect));
                    console.log('2 newWidth: ', newWidth);
                }
                //closest_style_width = closest(newWidth - 70, Drupal.settings.slick_lightbox_source_data.sizes);
                closest_style_width = closest(newWidth, Drupal.settings.slick_lightbox_source_data.sizes);
                console.log('closest_style_width: ', closest_style_width);
                
                sicklightfull = '/f/styles/' + closest_style_width + '/public' + $(this).attr('data-originalpath');
                $(this).attr('data-sicklightfull', sicklightfull);
            });
            
            
            
            
            
            
            // Add images lazy load
            $('.masonry-item img').addClass('not-loaded');
            $('.masonry-item img.not-loaded').lazyload({
                effect: 'fadeIn',
                //placeholder: 'data:image/jpeg;base64,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',
                placeholder: 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==',
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

