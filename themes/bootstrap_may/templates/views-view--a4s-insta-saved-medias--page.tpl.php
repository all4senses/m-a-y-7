<?php

/**
 * @file
 * Main view template.
 *
 * Variables available:
 * - $classes_array: An array of classes determined in
 *   template_preprocess_views_view(). Default classes are:
 *     .view
 *     .view-[css_name]
 *     .view-id-[view_name]
 *     .view-display-id-[display_name]
 *     .view-dom-id-[dom_id]
 * - $classes: A string version of $classes_array for use in the class attribute
 * - $css_name: A css-safe version of the view name.
 * - $css_class: The user-specified classes names, if any
 * - $header: The view header
 * - $footer: The view footer
 * - $rows: The results of the view query, if any
 * - $empty: The empty text to display if the view is empty
 * - $pager: The pager next/prev links to display, if any
 * - $exposed: Exposed widget form/info to display
 * - $feed_icon: Feed icon to display, if any
 * - $more: A link to view more, if any
 *
 * @ingroup views_templates
 */
dpm($variables['view']->result, 'view->result');
?>
<div class="<?php print $classes; ?>">
  <?php print render($title_prefix); ?>
  <?php if ($title): ?>
    <?php print $title; ?>
  <?php endif; ?>
  <?php print render($title_suffix); ?>
  <?php if ($header): ?>
    <div class="view-header">
      <?php print $header; ?>
    </div>
  <?php endif; ?>

  <?php if ($exposed): ?>
    <div class="view-filters">
      <?php print $exposed; ?>
    </div>
  <?php endif; ?>

  <?php if ($attachment_before): ?>
    <div class="attachment attachment-before">
      <?php print $attachment_before; ?>
    </div>
  <?php endif; ?>

  <?php if ($rows): ?>
    <div class="view-content">
      <?php 
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      $out = '';
      foreach($variables['view']->result as $media) {
        
        //$imageinfo = getimagesize($image->uri);
        
        // '/f/insta_media/santiagopgm_BkTzi1JBD5t.jpg';
        $url = str_replace('/f/', 'public://', $media->display_url);
        $url =  drupal_realpath($url);
        $imageinfo = getimagesize($url);
        
        $media->i_aspect = $imageinfo[1]/$imageinfo[0]; // h/w
        $media->i_dimensions_str = $imageinfo[3];

        //$media->image_path_original = str_replace('public://', '/f/', $image->uri);
        //list(, $media->image_path_public) = explode('/f/', $media->image_path_original);
        
        //data-original will be refined in js according to the current picture size
        $out .= '<div class="masonry-item" style="background:' . $media->i_maincolor . ';">'
                //. '<img data-originalpath="/' . $media->image_path_public . '" data-iaspect="' . $media->i_aspect . '" ' . $media->i_dimensions_str . ' class="masonry-item-img" data-original="' . $media->image_path_original . '"/>'
                . '<img '
                      //. 'data-originalpath="/' . $media->image_path_public . '" '
                      . 'data-originalpath="/' . $media->display_url . '" '
                      //. 'data-original="' . $media->image_path_original . '"'
                      . 'data-original="' . $media->display_url . '"'
                      . 'data-iaspect="' . $media->i_aspect . '" ' 
                      . $media->i_dimensions_str 
                      . ' class="masonry-item-img" '
                      
                . '/>'
                . '<div class="info">'
                  //. '<div class="link">' . l('Пx', 'node/' . $media->nid, array('attributes' => array('title' =>  'Открыть проект: ' . $media->title, 'target' => '_blank'))) . '</div>'
                  . '<div class="link">' . l('Пx', 'node/' . 1, array('attributes' => array('title' =>  'Открыть проект: ' . $media->shortcode, 'target' => '_blank'))) . '</div>'
                . '</div>'
              . '</div>';
      }
      $out = '<div class="masonry-items grid" id="grid">' . $out . '</div>';
      
      
      
      print '<div style="margin-top: 40px">' . $rows . '</div>'; 
      
      
      ?>
    </div>
  <?php elseif ($empty): ?>
    <div class="view-empty">
      <?php print $empty; ?>
    </div>
  <?php endif; ?>

  <?php if ($pager): ?>
    <?php print $pager; ?>
  <?php endif; ?>

  <?php if ($attachment_after): ?>
    <div class="attachment attachment-after">
      <?php print $attachment_after; ?>
    </div>
  <?php endif; ?>

  <?php if ($more): ?>
    <?php print $more; ?>
  <?php endif; ?>

  <?php if ($footer): ?>
    <div class="view-footer">
      <?php print $footer; ?>
    </div>
  <?php endif; ?>

  <?php if ($feed_icon): ?>
    <div class="feed-icon">
      <?php print $feed_icon; ?>
    </div>
  <?php endif; ?>

</div><?php /* class view */ ?>
