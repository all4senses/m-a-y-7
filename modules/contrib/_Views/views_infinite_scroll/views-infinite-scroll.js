(function ($) {
  "use strict";

  var $window = $(window);

  // The threshold for how far to the bottom you should reach before reloading.
  var scroll_threshold = 200;
  var vis_index = 0;

  /**
   * Insert a views infinite scroll view into the document after AJAX.
   *
   * @param {object} $new_view The new view coming from the server.
   */
  $.fn.infiniteScrollInsertView = function ($new_view) {
    console.log('+++ infiniteScrollInsertView started');
    var $existing_view = this;
    console.log($existing_view, '$existing_view');
    var $existing_content = $existing_view.find('.view-content').children();
    console.log($existing_content, '$existing_content');
    $new_view.find('.view-content').prepend($existing_content);
    $existing_view.replaceWith($new_view);
    $(document).trigger('infiniteScrollComplete', [$new_view, $existing_content]);
    
    console.log($existing_view, '$existing_view changed');
    $('.slides.slick-initialized').slick('reinit');
    
    
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
    
    
    console.log('---- infiniteScrollInsertView finished');
  };

  /**
   * Handle the automatic paging based on the scroll amount.
   */
  Drupal.behaviors.views_infinite_scroll_automatic = {
    attach : function(context, settings) {

      var settings = settings.views_infinite_scroll;
      var loadingImg = '<div class="views_infinite_scroll-ajax-loader"><img src="' + settings.img_path + '" alt="loading..."/></div>';

      $('.pager--infinite-scroll.pager--infinite-scroll-auto', context).once().each(function() {
        var $pager = $(this);
        $pager.find('.pager__item').hide();
        if ($pager.find('.pager__item a').length) {
          $pager.append(loadingImg);
        }
        $window.bind('scroll.views_infinite_scroll_' + vis_index, function() {
          if (window.innerHeight + window.pageYOffset > $pager.offset().top - scroll_threshold) {
            $pager.find('.pager__item a').click();
            $window.unbind('scroll.views_infinite_scroll_' + vis_index);
          }
        });
        vis_index++;
      });

    }
  };

})(jQuery);
