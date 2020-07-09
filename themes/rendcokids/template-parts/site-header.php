<header id="site-header" class="header">
  <div class="header-logo-outer">

          <?php if (get_field('header_icon', 'option')) {
            echo '<a href="/">';
            imgwrap(get_field('header_icon', 'option')['id']);
            echo '</a>';
          }?>
  </div>
  <div class="header-menu">
    <?php wp_nav_menu([ 'theme_location' => 'menu_1']);?>
  </div>
</header>