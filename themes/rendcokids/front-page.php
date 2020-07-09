<?php
/**
 * The template for displaying the front page pages
 *
 * This is the template that displays the front page.
 *
 * @package rendcokids
 */

get_header();
?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
      <?php get_template_part('template-parts/front', 'music');?>
      <?php get_template_part('template-parts/front', 'signup');?>
      <?php get_template_part('template-parts/front', 'video');?>
      <?php get_template_part('template-parts/front', 'store');?>
      <?php get_template_part('template-parts/front', 'chords');?>
      <?php get_template_part('template-parts/front', 'blog');?>


		</main><!-- #main -->
	</div><!-- #primary -->

<?php

get_footer();
