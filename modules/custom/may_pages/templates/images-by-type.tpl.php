<?php
/**
 * @file
 * 
 *
*/
?>

<div class="images-by-type">
  <div class="col-s"></div>  
  <article class="clearfix">
  
        <header>
          
          <?php /* 
          //if ($page) { 
          if ($view_mode == 'full') { 
          // If it's a Full page (a node itself or even on a Views list page)
          ?>
            <div class="caption-block">
              <div class="proj">Проект <span class="proj-num"><?php echo $node->field_project_id['und'][0]['value']; ?></span> <span class="proj-year"><?php echo $node->field_project_year['und'][0]['value']; ?>г.</span>
              <div class="proj-type">Тип проекта: <?php echo token_replace('[node:field_project_types]', array('node' => $node)); ?></div>
              </div>
                <?php print render($title_prefix); ?>
                  <?php $title_tag = empty($node->view) ? 'h1' : 'h2'; ?>
                  <?php echo '<' . $title_tag .  ' ' . $title_attributes . '>' . $node->field_title_themed['und'][0]['value'] . '</' . $title_tag . '>'; ?>
                <?php print render($title_suffix); ?>
              <div class="type-n-address"><?php echo $node->field_type_and_address['und'][0]['value']; ?></div>
            </div>
          <?php
            } 
            else {
              // If it's asimple teaser
              print '<h2 ' . $title_attributes . '><a href="' . $node_url .'">' . $node->title .'</a></h2>';  
            }
            
            */
          ?>
            
            
          <?php
          /*
          if (!empty($node->title)) {
            if (!$page) { 
              // Teaser.
              print '<h2 ' . $title_attributes . '><a href="' . $node_url .'">' . $node->title .'</a></h2>';
            }
            elseif (empty($node->field_separate_title['und'][0]['value'])) {
              print '<h1 ' . $title_attributes . '>' . $node->title .'</h1>';
            }
          }
          */
          ?>
          
        </header>

        <?php
          
          $form_filter = drupal_get_form('may_pages_filterPictures_form');
          echo drupal_render($form_filter);
          
          $out = '';
          $args = arg(); $get = $_GET; unset($get['q']);
          if (empty(arg(2)) && empty(arg(3)) && empty($get)) {
            $out = '<div>' . t('Пожалуйста, задайте условия поиска...') . '</div>';
          }
          elseif (!is_array($images) || empty($images)) {
            $out = '<div>' . t('Ничего не найдено...') . '</div>';
          }
          else {
            
            foreach($images as $image) {
//              $imageinfo = getimagesize($image->uri);
//              $i_aspect = $imageinfo[1]/$imageinfo[0]; // h/w
//              
//              $image_path = str_replace('public://', '/f/', $image->uri);
//              list(,$original_path) = explode('/f/', $image_path);
              
//              if (!isset($image->color_hex) || empty($image->color_hex)) {
//                $image->color_hex = 'rgb(219, 212, 209)';
//              }
              
              //data-original will be refined in js according to the current picture size
              $out .= '<div class="masonry-item" style="background:' . $image->i_maincolor . ';">'
                      . '<img data-originalpath="/' . $image->image_path_public . '" data-iaspect="' . $image->i_aspect . '" ' . $image->i_dimensions_str . ' class="masonry-item-img" data-original="' . $image->image_path_original . '"/>'
                      . '<div class="info">'
                        . '<div class="link">' . l('П', 'node/' . $image->nid, array('attributes' => array('title' =>  'Открыть проект: ' . $image->title, 'target' => '_blank'))) . '</div>'
                      . '</div>'
                    . '</div>';
              
              
            }
            $out = '<div class="masonry-items grid" id="grid">' . $out . '</div>';
            
          }

          echo $out;      
        ?>

        <div class="footer">
        </div>
    
  </article>
  <div class="col-s"></div>  
</div>  
