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
          if (!is_array($images) || empty($images)) {
            echo '<div>No results</div>';
          }
          else {
            //dpm($images,'$images');
            $out = '';
            foreach($images as $image) {
              $imageinfo = getimagesize($image->uri);
              $i_aspect = $imageinfo[1]/$imageinfo[0]; // h/w
              //$out .= '<div class="item"><img class="item-img" style="float:left;" width="300" src="' . str_replace('public://', '/f/', $image->uri) . '"/></div>';
              //$out .= '<div class="masonry-item"><img class="masonry-item-img" style="float:left;" src="' . str_replace('public://', '/f/', $image->uri) . '"/></div>';
              //$out .= '<li class="masonry-item"><img class="masonry-item-img" src="' . str_replace('public://', '/f/', $image->uri) . '"/></li>';
              
              ////$out .= '<div class="masonry-item"><img data-iaspect="' . $i_aspect . '" ' . $imageinfo[3] . ' class="masonry-item-img" src="' . str_replace('public://', '/f/', $image->uri) . '"/></div>';
              $out .= '<div class="masonry-item">'
                      . '<img data-iaspect="' . $i_aspect . '" ' . $imageinfo[3] . ' class="masonry-item-img" data-original="' . str_replace('public://', '/f/', $image->uri) . '"/>'
                      . '<div class="info">'
                        . '<div class="link">' . l('>', 'node/' . $image->nid) . '</div>'
                      . '<div>'
                    . '</div>';
              
              
            }
            $out = '<div class="masonry-items grid" id="grid">' . $out . '</div>';
            //$out = '<ul class="masonry-items grid effect-7" id="grid">' . $out . '</ul>';
          }

          echo $out;      
        ?>

        <div class="footer">
        </div>
    
  </article>
  <div class="col-s"></div>  
</div>  