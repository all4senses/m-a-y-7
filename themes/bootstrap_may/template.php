<?php

/**
 * @file
 * The primary PHP file for this theme.
 */

/**
 * Implements hook_preprocess_page().
 */
function bootstrap_may_preprocess_page(&$variables) {

  $variables['navbar_classes_array'][] = 'cd-auto-hide-header';
  $variables['container_class'] .= ' cd-main-content sub-nav-hero';

  if ($variables['is_front']) {

    /*
      //drupal_add_js('sites/all/libraries/jquery.plugins/_parallax/scrolly/jquery.scrolly.js');

      drupal_add_js('sites/all/libraries/jquery.plugins/_parallax/jquery-data-parallax---kasparsj---a4s/jquery.requestAnimationFrame.min.js');
      drupal_add_js('sites/all/libraries/jquery.plugins/_parallax/jquery-data-parallax---kasparsj---a4s/jquery.data-parallaxx---a4s.js');
      drupal_add_js('sites/all/libraries/jquery.plugins/_parallax/jquery-data-parallax---kasparsj---a4s/jquery.easing.1.3.plus_one_argument.js');

      drupal_add_js('sites/all/libraries/jquery.plugins/_parallax/jquery.parallax-scroll---gsgd/js/jquery.parallax-scroll---a4s.js');


      $path_to_custom_js = drupal_get_path('module', 'may_pages') . '/js/';
      drupal_add_js($path_to_custom_js . 'may_home_parallax.js');
     */
  }

  
  /*
  drupal_add_js('sites/all/libraries/jquery.plugins/_sliders/slick/slick.js');
  drupal_add_css('sites/all/libraries/jquery.plugins/_sliders/slick/slick.css', array('weight' => 99, 'group' => 200));
  drupal_add_css('sites/all/libraries/jquery.plugins/_sliders/slick/slick-theme.css', array('weight' => 99, 'group' => 200));

  drupal_add_js('sites/all/libraries/jquery.plugins/_sliders/slick-lightbox/dist/slick-lightbox.min.js');
  drupal_add_css('sites/all/libraries/jquery.plugins/_sliders/slick-lightbox/dist/slick-lightbox.css', array('weight' => 99, 'group' => 200));

  $path_to_custom_js = drupal_get_path('module', 'may_pages') . '/js/';
  drupal_add_js($path_to_custom_js . 'may_slick.js');
  */
}

function bootstrap_may_preprocess_node(&$variables) {

  //dpm('in bootstrap_may_preprocess_node');
  //dpm(array_keys($variables), '$variables keys in bootstrap_may_preprocess_node');

  
    static $custom_pages_css_added;
    if ($variables['type'] == 'project' && !$custom_pages_css_added) {
      //dpm($variables, '$variables in bootstrap_may_preprocess_node');
      //dpr($variables['theme_hook_suggestions']);
      $custom_pages_css_added = TRUE;
      $project_custom_css = path_to_theme() . '/css/projects.css';
      //dpm('added ' . $project_custom_css);
      drupal_add_css($project_custom_css, array('weight' => 99, 'group' => 200));
      
      // Add Googele fonts
      $google_fonts = array('Tangerine', 'Marck Script');
      $google_fonts = trim(implode('|', $google_fonts));
      drupal_add_css('//fonts.googleapis.com/css?family=' . $google_fonts, array(
        'group' => CSS_THEME,
        'type' => 'external',
        'weight' => -1,
        'preprocess' => FALSE,
        )
      ); 
      

      drupal_add_js('sites/all/libraries/jquery.plugins/_sliders/slick/slick.js');
      drupal_add_css('sites/all/libraries/jquery.plugins/_sliders/slick/slick.css', array('weight' => 99, 'group' => 200));
      drupal_add_css('sites/all/libraries/jquery.plugins/_sliders/slick/slick-theme.css', array('weight' => 99, 'group' => 200));

      
      
//      drupal_add_js('sites/all/libraries/jquery.plugins/_sliders/lightslider/src/js/lightslider.js');
//      drupal_add_css('sites/all/libraries/jquery.plugins/_sliders/lightslider/src/css/lightslider.css', array('weight' => 99, 'group' => 200));
      
      
//      drupal_add_js('sites/all/libraries/jquery.plugins/_sliders/slider-pro/dist/js/jquery.sliderPro.min.js');
//      drupal_add_css('sites/all/libraries/jquery.plugins/_sliders/slider-pro/dist/css/slider-pro.min.css', array('weight' => 99, 'group' => 200));
      
//      drupal_add_js('sites/all/libraries/jquery.plugins/_sliders/swiper/dist/js/swiper.min.js');
//      drupal_add_css('sites/all/libraries/jquery.plugins/_sliders/swiper/dist/css/swiper.min.css', array('weight' => 99, 'group' => 200));
      
      
      drupal_add_js('sites/all/libraries/jquery.plugins/_sliders/slick-lightbox/dist/slick-lightbox.min.js');
      drupal_add_css('sites/all/libraries/jquery.plugins/_sliders/slick-lightbox/dist/slick-lightbox.css', array('weight' => 99, 'group' => 200));

      
      
      
      $path_to_custom_js = drupal_get_path('module', 'may_pages') . '/js/';
      drupal_add_js($path_to_custom_js . 'may_slick.js');
//      drupal_add_js($path_to_custom_js . 'may_slider.js');
      
    }
   
}

/**
 *
 * @param array $variables
 */
function bootstrap_may_process_html(&$variables) {
  // Remove Query Strings from CSS filenames (CacheBuster)
  //$variables['styles'] = preg_replace('/.css\?.*"/','.css"', $variables['styles']);
  $variables['styles'] = preg_replace('/style_custom.css\?.*"/', 'style_custom.css"', $variables['styles']);
}

/**
 *
 * @param type $variables
 */
function bootstrap_may_preprocess_html(&$variables) {
  //dpm($variables, '$variables in bootstrap_may_preprocess_html');
}
