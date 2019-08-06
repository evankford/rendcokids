<section id="video" class="video-section">
  <div class="clouds">
    <img src="<?php echo get_stylesheet_directory_uri();?>/images/cloud1.svg">
    <img src="<?php echo get_stylesheet_directory_uri();?>/images/cloud2.svg">
    <img src="<?php echo get_stylesheet_directory_uri();?>/images/cloud3.svg">
  </div>
  
  <div class="section-inner">
    <div class="video-header section-header">
      
      <img data-aos="fade-right" data-aos-delay="400" alt="lion and boy walking together" src="<?php echo get_stylesheet_directory_uri();?>/images/lionandboy.svg">
        <h1 data-aos="fade-up"><?php the_field('video_header');?></h1>
            
    </div>
    <div class="video-widget">
      <?php preg_match("#(?<=v=)[a-zA-Z0-9-]+(?=&)|(?<=v\/)[^&\n]+(?=\?)|(?<=v=)[^&\n]+|(?<=youtu.be/)[^&\n]+#", get_field('featured_video'), $matches);
      $featvidid = $matches[0];?>
      <a href="<?php echo get_field('featured_video');?>" data-type="youtube" class="featured-video lightbox" data-id="<?php echo $featvidid;?>" >
        <div class="featured-video-bg">
          <?php $featimg = get_field('featured_video_image');
          imgwrap($featimg['id'], true, '1200w');?>
          <div class="video-player_wrap" data-player-id="player--front" data-video-url="<?php echo get_field('featured_video');?>">
            <div class="player-wrap ">
              <div id="player--front"></div>
            </div>`
          </div>
        </div>
        <div class="featured-video-content">
          <h2><?php the_field('featured_video_text');?></h2>
          <div class="button purple">Watch Now</div>
        </div>  
      
      </a>
      <div class="vidlist">
        <?php foreach (get_field('more_videos') as $video) {
          preg_match("#(?<=v=)[a-zA-Z0-9-]+(?=&)|(?<=v\/)[^&\n]+(?=\?)|(?<=v=)[^&\n]+|(?<=youtu.be/)[^&\n]+#", $video['url'], $matches);
          $vidid = $matches[0];?>
          <a href="<?php echo $video['url'];?>" data-type="youtube" class="video-item lightbox" data-id="<?php echo $vidid;?>" >
            <div class="video-bg">
               <?php $vidimg = imgwrap($video['thumbnail']['id'], true, '600w');?>
            </div>
            <h4 class="video-text"><?php echo $video['text'];?></h4>
            <div href="" class="button tiny purple">watch</div>
          </a>
        <?php }?>
      
      </div>
    </div>
    <div class="button-wrap" data-aos="fade-up" data-aos-delay="300">
      <a href="<?php the_field('video_button_url');?>" class="underline"><?php the_field('video_button_label');?></a>
      
    </div>
</div>
</section>