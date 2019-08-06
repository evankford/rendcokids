<header id="site-header" class="header">
  <div class="header-logo-outer">
    
          <?php if (get_field('header_icon', 'option')) {
            echo '<a href="/">';
            imgwrap(get_field('header_icon', 'option')['id']);
            echo '</a>';
          }?>
  </div>
  <div class="header-menu">
    <?php $headermenu =  get_field('header_links', 'option');
    foreach ($headermenu as $link) {
      echo '<a class="underline" href="' . $link['link'] . '" target="_blank" rel="nofollow">' . $link['link_text'] .'</a>';
    }?>
  </div>
</header>