	<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package rendcokids
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		<div class="site-info footer-wrap">

					<!--End mc_embed_signup-->

		<div class="footer-right">
			<?php if (get_theme_mod('footer_link_text') != '' && get_theme_mod('footer_link_url') != '') {
				echo '<a href="' . get_theme_mod('footer_link_url') . '" target="_blank" rel="nofollow" class="footer-link"><h3>' . get_theme_mod('footer_link_text') . '</h3></a>';
		 	}?>
			<?php if (get_theme_mod('rendcokids_footer_socials') != false) {?>
			<div class="footer-socials socials-wrap">
				<?php get_template_part('template-parts/socials');?>
			</div>
			<?php }?>
			<div class="footer-text">
				<?php
					$year =  date('Y');
				if (get_theme_mod('rendcokids_footer_text') != '') {

					echo '<p>&copy; ' .  $year . ' ' . get_theme_mod('rendcokids_footer_text');
				}
				if (get_theme_mod('rendcokids_footer_text') != '') {
					echo '<p class="ekf-link">an <a href="http://evankerrickford.com" rel="nofollow" target="_blank">evankerrickford.com</a> site.';
				}
				?>
			</div>
		</div>
		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
