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
		<div class="footer-left">
			<img src="<?php echo get_stylesheet_directory_uri();?>/images/whale.svg" alt="" class="whale">
			<?php 
				if (get_field('email_signup', 'option')['header']) {
					echo '<h3 class="footer-header">' . get_field('email_signup', 'option')['header'] . '</h3>';
				}
				if (get_field('email_signup', 'option')['content']) {
					echo '<h5 class="footer-text">' . get_field('email_signup', 'option')['content'] . '</h5>';
				}?>
				<!-- Begin Mailchimp Signup Form -->
					<link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
					<style type="text/css">
						#mc_embed_signup{background:transparent; clear:left; font:14px futura-pt, Helvetica,Arial,sans-serif; width:100%;}
						/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
							We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */

					</style>
					<div id="mc_embed_signup">
					<form action="https://rendcollective.us10.list-manage.com/subscribe/post?u=fa941764de5830349644b1460&amp;id=ffdadcc5b6" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
							<div id="mc_embed_signup_scroll">
						<div class="input-group">
							
							<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
								<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
								<div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_7e27c8f8d7069d7722d689068_4791332240" tabindex="-1" value=""></div>
						</div>
							<div class="clear input-group" ><input type="submit" class="button purple" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
							</div>
					</form>
					</div>

					<!--End mc_embed_signup-->
				
			<?php if (get_theme_mod('rendcokids_footer_menu') != false) {?>
				<nav class="footer-menu">
					<?php
							//Get main menu (Desktop)
							wp_nav_menu(array(
								'theme_location' => 'menu-1'
							));
						?>

				</nav>
			<?php }?>
			
		</div>
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
