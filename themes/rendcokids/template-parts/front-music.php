<section id="music" class="music-section">
  <div class="clouds">
    <img src="<?php echo get_stylesheet_directory_uri();?>/images/cloud1.svg">
    <img src="<?php echo get_stylesheet_directory_uri();?>/images/cloud2.svg">
    <img src="<?php echo get_stylesheet_directory_uri();?>/images/cloud3.svg">
  </div>
  
        <div class="music-decorations">
          <div class="decoration--boy"><img data-aos-delay="400" data-aos="fade-left" src="<?php echo get_stylesheet_directory_uri();?>/images/boy.svg" ></div>
         
          <div class="decoration--penguin"><img data-aos="fade-right" data-aos-delay="500" src="<?php echo get_stylesheet_directory_uri();?>/images/penguin.svg" ></div>
        </div>
        <div class="section-inner">
          <h2 data-aos="fade-up"><?php the_field('album_header');?></h2>

          <div data-aos="fade-up" data-aos-delay="200"  class="album-img-wrap">
            
          <?php $album_img = get_field('album_cover')['id'];
          imgwrap($album_img, false, '750w');
          ?>
          </div>
          <div class="button-wrap" data-aos="fade-up" data-aos-delay="200">   
            <div class="music-button button-lite">
              <?php $music_button = get_field('album_button');?>
              <span class="button-item"><?php echo $music_button['button_text'];?></span>
              <div class="button-links">
                <?php foreach ($music_button['links'] as $link) {
                  echo '<a target="_blank" rel="nofollow" class="button-link__inner button-lite" href="' . $link['url'] . '"><i class="' . $link['icon'] . '"></i> ' . $link['text'] . '</a>';
                }?>
              </div>
            </div>
          </div>
        </div>
      </section>