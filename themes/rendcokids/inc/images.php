<?php

add_theme_support('post-thumbnails');


//Here's how you can add custom sizes
// add_image_size('internal-thumbnail', 1400, 452);


////IMAGE SIZES
add_image_size('300w', 300);
add_image_size('450w', 300);
add_image_size('600w', 600);
add_image_size('750w', 600);
add_image_size('900w', 900);
add_image_size('1200w', 1200);
add_image_size('1500w', 1500);
add_image_size('1800w', 1800);
add_image_size('2100w', 2100);
add_image_size('21400w', 2100);
	
function get_imgset($id, $max=false) {
	$sizes = array('300w','450w', '600w', '750w','900w', '1200w', '1500w', '1800w', '2100w', '2400w');
	$toreturn = '';
	$i = 0;
	foreach ($sizes as $size) {
		$comma = ', ';
		if ($i == 0) {
			$comma = '';
		}
		if ($i <= count($sizes)) {
			$src = wp_get_attachment_image_src($id, $size, false)[0];
			$toreturn .= $comma .  $src . ' ' . $sizes[$i + 1];
			$i++;
			if ($size == $max) {
				break;
			}
		}
  } 
	return $toreturn;
}

function imgwrap($imageid, $isbg = false, $maxsize = false) {
	$img = wp_get_attachment_image_src($imageid, '300w');
	// echo $img[1];
	// echo $img[2];
	$imgratio = ($img[2] / $img[1])*100;
  $fallback_size = '1200w';
  $big_size = $maxsize;
	if ($maxsize != false) {
    $fallback_size = $maxsize;
    $big_size = 'full';
	}
	$style= 'style="padding-bottom: '. $imgratio . '%;"';
	$bg = '';
	if ($isbg) { 
		$bg = ' bg ' ;
		$style = '';
	}
	
	echo '<div class="respimg-wrap ' . $bg  . '" ' . $style . '>';
	echo '<img alt=" ' . get_post_meta( $imageid, '_wp_attachment_image_alt', true ) . '" class="respimg lazyload" src="' . wp_get_attachment_image_src($imageid, $fallback_size, false)[0] . '" data-srcset="' . get_imgset($imageid, $fallback_size) . '">';
	echo '</div>';

}

function vidimg($imageid, $mp4src= false, $webmsrc = false, $isbg = false) {
	echo '<div class="vidimg-outer">';
	$img = wp_get_attachment_image_src($imageid, '300w');
	// echo $img[1];
	// echo $img[2];
	$imgratio = ($img[2] / $img[1])*100;
	$style= 'style="padding-bottom: '. $imgratio . '%;"';
	if ($isbg) { 
		$bg = ' bg' ;
		$style = '';
	}
	
	echo '<div class="respimg-wrap ' . $bg  . '" ' . $style . '>';
	echo '<img class="respimg lazyload" src="' . wp_get_attachment_image_src($imageid, '1200w', false)[0] . '" data-srcset="' . get_imgset($imageid) . '">';
	if ($mp4src) :?>
	<div class="bgvideo-wrap loading">
		<video poster="<?php echo wp_get_attachment_image_src($imageid, '1200w', false)[0];?>" playsinline muted autoplay loop>
				<source src="<?php echo $webmsrc;?>" type="video/webm">
				<source src="<?php echo $mp4src;?>" type="video/mp4">
		</video>
	</div>
	<script>
	
	</script>
	<?php 
	endif;
	echo '</div><!--close vidimg-outer-->';
	echo '</div>';
}
