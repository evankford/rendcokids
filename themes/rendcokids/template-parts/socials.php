<?php 
	if (filter_var(get_theme_mod('fb_url'), FILTER_VALIDATE_URL) !== false) {
		echo '<a class="icon social-icon" href="'. get_theme_mod('fb_url') . '" target="_blank" rel="nofollow"><i class="fab fa-facebook-f" aria-fallback="On Facebook"></i></a>';
	}
	if (filter_var(get_theme_mod('tw_url'), FILTER_VALIDATE_URL) !== false) {
		echo '<a class="icon social-icon" href="'. get_theme_mod('tw_url') . '" target="_blank" rel="nofollow"><i class="fab fa-twitter" aria-fallback="On Twitter"></i></a>';
	}
	if (filter_var(get_theme_mod('insta_url'), FILTER_VALIDATE_URL) !== false) {
		echo '<a class="icon social-icon" href="'. get_theme_mod('insta_url') . '" target="_blank" rel="nofollow"><i class="fab fa-instagram" aria-fallback="On Instagram"></i></a>';
	}
	if (filter_var(get_theme_mod('youtube_url'), FILTER_VALIDATE_URL) !== false) {
		echo '<a class="icon social-icon" href="'. get_theme_mod('youtube_url') . '" target="_blank" rel="nofollow"><i class="fab fa-youtube" aria-fallback="On Youtube"></i></a>';
	}
	if (filter_var(get_theme_mod('spotify_url'), FILTER_VALIDATE_URL) !== false) {
		echo '<a class="icon social-icon" href="'. get_theme_mod('spotify_url') . '" target="_blank" rel="nofollow"><i class="fab fa-spotify" aria-fallback="On Spotify"></i></a>';
	}
	if (filter_var(get_theme_mod('apple_url'), FILTER_VALIDATE_URL) !== false) {
		echo '<a class="icon social-icon" href="'. get_theme_mod('apple_url') . '" target="_blank" rel="nofollow"><i class="fab fa-apple" aria-fallback="On Apple Music"></i></a>';
	}
	if (filter_var(get_theme_mod('amazon_url'), FILTER_VALIDATE_URL) !== false) {
		echo '<a class="icon social-icon" href="'. get_theme_mod('amazon_url') . '" target="_blank" rel="nofollow"><i class="fab fa-amazon" aria-fallback="On Amazon"></i></a>';
	}
?>