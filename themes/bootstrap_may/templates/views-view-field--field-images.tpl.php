<?php

/**
 * @file
 * This template is used to print a single field in a view.
 *
 * It is not actually used in default Views, as this is registered as a theme
 * function which has better performance. For single overrides, the template is
 * perfectly okay.
 *
 * Variables available:
 * - $view: The view object
 * - $field: The field handler object that can process the input
 * - $row: The raw SQL result that can be used
 * - $output: The processed output that will normally be used.
 *
 * When fetching output from the $row, this construct should be used:
 * $data = $row->{$field->field_alias}
 *
 * The above will guarantee that you'll always get the correct data,
 * regardless of any changes in the aliasing that might happen if
 * the view is modified.
 */

//dpm($row, '$row');
//dpm($field, '$field');
//dpm($output, '$output');

$filter = (object) array(
 'settings' => NULL,
'format' => 'full_html',
'module' => 'image_resize_filter',
'name' => 'image_resize_filter',
'weight' => '-45',
'status' => 1,
'title' => 'Image resize filter',
);
$filter->settings = array(
      'link' => '',
      'link_class' => '',
      'link_rel' => '', 
      'image_locations' => array(
         'local' => 'local',
         'remote' => 0,
       ), 
    );

//dpm($filter, '$filter');

$output = image_resize_filter_process_filter($output, $filter);
?>
<?php print $output; ?>
