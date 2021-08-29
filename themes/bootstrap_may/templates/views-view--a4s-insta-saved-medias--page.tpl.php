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
      
      //dpm($variables['view']->result, 'view->result');
      
      $out = '';
      foreach($variables['view']->result as $media) {
        
        foreach ($media as $key => $value) {
          // a4s_insta_own_accounts_saved_medias_display_url
          $new_key = str_replace('a4s_insta_own_accounts_saved_medias_', '', $key);
          $media->{$new_key} = $value;
          //unset($media->{$key});
        }
        
        
        //$media->image_path_original = str_replace('public://', '/f/', $image->uri);
        
        $media->image_path_original = $media->display_url;
        list(, $media->image_path_public) = explode('/f/', $media->image_path_original);
        //$media->image_path_original = str_replace('/f/', 'f/', $media->image_path_original);
        
        
        $media->extra_data = !empty($media->extra_data) ? json_decode($media->extra_data, TRUE) : [];
        
        if (!empty($media->extra_data['i_asp'])) {
          $media->i_aspect = $media->extra_data['i_asp'];
          $media->i_dimensions_str = $media->extra_data['i_dim'];
          $media->i_maincolor = !empty($media->extra_data['i_col']) ? $media->extra_data['i_col'] : NULL;
        }
        else {
          
          // '/f/insta_media/santiagopgm_BkTzi1JBD5t.jpg';
          $url = str_replace('/f/', 'public://', $media->display_url);
          $url = drupal_realpath($url);
          $imageinfo = getimagesize($url);

          $media->i_aspect = $imageinfo[1]/$imageinfo[0]; // h/w
          $media->i_dimensions_str = $imageinfo[3];
          
          
          
          // Get the main color of the image
          /*
          $closest_style_width = '350';
          $sourceImage = 'f/styles/' . $closest_style_width . '/public/' . $media->image_path_public;
          if (!file_exists($sourceImage)) {
            // If styled file does not yet exist, use the original file.
            $sourceImage = 'f/' . $media->image_path_public;
            //dpm('Not existed styled image, used original one for fid: ' . $image->fid);
          }
          else {
            //dpm('Used styled (small) image one for fid: ' . $image->fid);
          }

          //$dominantColor = ColorThief::getColor($sourceImage);
          $dominantColor = \ColorThief\ColorThief::getColor($sourceImage);

          if(!empty($dominantColor)) {
            $hex = '#' . sprintf('%02x', $dominantColor[0]) . sprintf('%02x', $dominantColor[1]) . sprintf('%02x', $dominantColor[2]);
            $media->i_maincolor = $hex;

            // Save just found color to DB.
            // ...
            // ...
            
            
          } // End of if(!empty($dominantColor)) {
          else {
            //dpm('Error creating maincolor for fid: ' . $image->fid . '... using the default one');
            //Set a default color.
            $media->i_maincolor = 'rgb(219, 212, 209)';
          }
          */
          
          
          
          // Save just found image attributes to DB.
          $media->extra_data['i_asp'] = $media->i_aspect;
          $media->extra_data['i_dim'] = $media->i_dimensions_str;
          $media->extra_data['i_col'] = !empty($media->i_maincolor) ? $media->i_maincolor : '';
          
          db_update('a4s_insta_own_accounts_saved_medias')
            ->fields(array(
              'extra_data' => json_encode($media->extra_data),
            ))
          ->condition('mid', $media->mid)
          ->execute();

        } // End of if (empty($image->extra_data)) {

      
        if (empty($media->i_maincolor)) {
          $media->i_maincolor = 'rgb(219, 212, 209)';
        }
      
       
        
        //data-original will be refined in js according to the current picture size
        $out .= '<div class="masonry-item" style="background:' . $media->i_maincolor . ';">'
                //. '<img data-originalpath="/' . $media->image_path_public . '" data-iaspect="' . $media->i_aspect . '" ' . $media->i_dimensions_str . ' class="masonry-item-img" data-original="' . $media->image_path_original . '"/>'
                . '<img '
                      . 'data-originalpath="/' . $media->image_path_public . '" '
                      . 'data-original="' . $media->image_path_original . '"'
                      . 'data-saveoriginal="' . $media->image_path_original . '"'
                      . 'data-iaspect="' . $media->i_aspect . '" ' 
                      . 'data-mediacaption="' . "<a href='#'>" . $media->media_caption . '</a>" '
                . $media->i_dimensions_str 
                      . ' class="masonry-item-img" '
                      
                . '/>'
                . '<div class="info">'
                  //. '<div class="link">' . l('Пx', 'node/' . $media->nid, array('attributes' => array('title' =>  'Открыть проект: ' . $media->title, 'target' => '_blank'))) . '</div>'
                  ////. '<div class="link">' . l('Пx', $media->display_url, array('attributes' => array('title' =>  'Открыть проект: ' . $media->shortcode, 'target' => '_blank'))) . '</div>'
                  . '<div class="link">' . l('S', $media->display_url, array('attributes' => array('title' =>  'Show: ' . $media->media_caption/*, 'target' => '_blank'*/))) . '</div>'
                  . '<div class="link">' . l('O', $_GET['q'], array('query' => array('owner_username' => $media->owner_username), 'attributes' => array('title' =>  'Owner: ' . $media->owner_username/*, 'target' => '_blank'*/))) . '</div>'
                  . '<div class="link">' . l('In', 'https://www.instagram.com/p/' . $media->shortcode, array('absolute' => TRUE, 'attributes' => array('title' =>  'Instagram page: ' . $media->shortcode, 'target' => '_blank'))) . '</div>'
                  
                . '</div>'
                . '<div class="owner">' . $media->owner_username . '</div>'
              . '</div>';
      }
      $out = '<div class="masonry-items grid" id="grid">' . $out . '</div>';
      
      print $out;
      
      
      
      // Original standsrd views output
      // We don't need it anymore
      //print '<div style="margin-top: 40px">' . $rows . '</div>'; 
      
      
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
