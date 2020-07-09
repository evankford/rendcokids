<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package rendcokids
 */

get_header();
?>

	<div id="primary" class="content-area">
  <?php
    $header = get_field('header');
  ?>
    <header>
    <div class="header__background">
      <img src="<?php $haader('img')?>" alt="">
    </div>
    <div class="header__content">
    <?php

    if ($header['intro'] != null) {
      echo "<h3 class=\"label\">{$header['intro']}</h3>";
    }
    if ($header['title'] != null) {
      echo "<h1 class=\"label\">{$header['title']}</h1>";
    }
    if ($header['subtitle'] != null) {
      echo "<h3 class=\"label\">{$header['subtitle']}</h3>";
    }?>

    </div>

    </header>
		<main id="main" class="site-main devotionals-main">

    <?php foreach (get_field('devotionals') as $devotional) :?>
      <a target="_blank" href="<?php echo $devotional['file']?>" class="devotional-item" >
      <?php

      if ($devotional['image'] != null){
        echo "div class=\"devotional-item__bg\">
            <img src=\"{$devotional['img']}\">
          </div>";
            }
            ?>
          <div class="devotional-item__content">
          <?php
          $content = $devotional['content'];

          if ($content['intro'] != null) {
            echo "<h4 class=\"label\">{$content['intro']}</h4>";
          }
          if ($content['title'] != null) {
            echo "<h2 class=\"title\">{$content['title']}</h2>";
          }
          if ($content['subtitle'] != null) {
            echo "<h4 class=\"label\">{$content['subtitle']}</h4>";
          }
          if ($content['button_text'] != null) {
            echo "<div class=\"button\">{$content['button_text']}</div>";
          }
      ?>
          </div>
	    </a>

    <?php endforeach;?>
		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_footer();
