<?php

/**
 * @file
 * Template file for generic images inserted via the Insert module.
 *
 * Available variables:
 * - $item: The complete item being inserted.
 * - $url: The URL to the image.
 * - $class: A set of classes assigned to this image (if any).
 * - $width: The width of the image.
 * - $height: The height of the image.
 *
 * Note that ALT and Title fields should not be filled in here, instead they
 * should use placeholders that will be updated through JavaScript when the
 * image is inserted.
 *
 * Available placeholders:
 * - __alt__: The ALT text, intended for use in the <img> tag.
 * - __title__: The Title text, intended for use in the <img> tag.
 * - __description__: A description of the image, sometimes used as a caption.
 * - __filename__: The file name.
 * - __[token]_or_filename__: Any of the above tokens if available, otherwise
 *   use the file's name. i.e. __title_or_filename__.
 */

// a4s fix to add using custom attributes in img tags while inserting to the body
$additional_fields = NULL;

foreach (imagefield_attributes_get_all_attributes_names(TRUE) as $additional_field_name => $additional_field) {
    $additional_fields .= ' ' . $additional_field_name . '="__' . $additional_field_name . '__"';
}
?>
<img src="<?php print $url ?>" width="<?php print $width ?>" height="<?php print $height ?>" <?php print $additional_fields ?> alt="__alt__" title="__title__" <?php print $class ? 'class="' . $class . '" ' : '' ?>/>