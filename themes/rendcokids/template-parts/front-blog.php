  <section id="blog" class="blog-section">
    <div class="blog-inner section-inner">
      <div class="blog-item">
        <div class="blog-item__image" data-aos="fade-in"><?php $imgid = get_field('blog_image')['id']; imgwrap($imgid, true, '1200w'); ?>
        </div>
        <div class="blog-item__content">
          <h5 class="label" data-aos="fade-up">From the Blog</h5>
          <h2 class="blog-item__title" data-aos="fade-up" data-aos-delay="100"><?php the_field('blog_header');?></h2>
          <hr>
          <div class="blog-item__text" data-aos="fade-up" data-aos-delay="200"><?php the_field('blog_excerpt');?></p>
          <div data-aos="fade-up" data-aos-delay="300" class="button-wrap">
              <a href="<?php the_field('blog_link');?>" target="_blank" rel="nofollow" class="button">Read More</a>
          </div>
        </div>
      </div>
    </div>
    
    <div class="blog-insta">
    
      <h2>On Instagram</h2>
      <div class="insta-wrap">
      <script src="https://apps.elfsight.com/p/platform.js" defer></script>
<div class="elfsight-app-11803a70-0bb9-4d0f-87c0-153ace9805af"></div></div>
<div class="button-wrap">
  
  <a href="https://instagram.com/rendcokids" class="button"><i class="fab fa-instagram"></i> Follow</a>
</div>
    </div>
  </section>