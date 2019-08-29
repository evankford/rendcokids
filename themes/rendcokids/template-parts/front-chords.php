<section id="chords" class="chord-section">
  
<a href="<?php the_field('chord_link');?>" target="_blank" rel="nofollow">
    <?php $chordimg = get_field('chord_image')['id'];
    imgwrap($chordimg, false, '1000');
    ?>
</a>
</section>