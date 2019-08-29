<section id="chords" class="chord-section">
  
<a href="<?php the_field('chord_file');?>" download>
    <?php $chordimg = get_field('chord_image')['id'];
    imgwrap($chordimg, false, '1000');
    ?>
</a>
</section>