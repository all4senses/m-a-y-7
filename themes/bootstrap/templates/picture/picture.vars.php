<?php
/**
 * @file
 * Stub file for "picture" theme hook [pre]process functions.
 */

/**
 * Pre-processes variables for the "picture" theme hook.
 *
 * See theme function for list of available variables.
 *
 * @see theme_picture()
 *
 * @ingroup theme_preprocess
 */
function bootstrap_preprocess_picture(&$variables) {
  // Add responsiveness, if necessary.
  if ($shape = bootstrap_setting('image_responsive')) {
    //a4s fix/patch
    
    if (empty($variables['attributes']['class'])) {
      $variables['attributes']['class'] = array();
    }
    elseif (!is_array($variables['attributes']['class'])) {
      $variables['attributes']['class'] = array($variables['attributes']['class']);
    }
    $variables['attributes']['class'][] = 'img-responsive';
  }
}
