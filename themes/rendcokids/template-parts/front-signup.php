<div class="front-signup" data-aos="slide-in-left" data-aos-delay="600">
  <div class="front-signup__inner">
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
  </div>
</div>
