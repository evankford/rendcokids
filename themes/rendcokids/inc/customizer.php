<?php
/**
 * rendcokids Theme Customizer
 *
 * @package rendcokids
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function rendcokids_customize_register( $wp_customize ) {
	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	if ( isset( $wp_customize->selective_refresh ) ) {
		$wp_customize->selective_refresh->add_partial( 'blogname', array(
			'selector'        => '.site-title a',
			'render_callback' => 'rendcokids_customize_partial_blogname',
		) );
		$wp_customize->selective_refresh->add_partial( 'blogdescription', array(
			'selector'        => '.site-description',
			'render_callback' => 'rendcokids_customize_partial_blogdescription',
		) );
  }
  
   //STYLES
  $wp_customize->add_section('rendcokids_theme_styles', array(
    'title' => 'Theme Styles',
    'priority'  => 1,
    'description' => 'Custom for this site, update theme style options.'
  ));

  //LOGO
  $wp_customize->add_setting('rendcokids_header_logo');
  $wp_customize->add_control(
    new WP_Customize_Image_Control(
      $wp_customize,
      'rendcokids_header_logo',
      array(
          'label'      => __( 'Upload a logo', 'rendcokids' ),
          'section'    => 'rendcokids_theme_styles',
          'settings'   => 'rendcokids_header_logo' 
      )
    )
  );
  /////////////////////
  /////INFO 
  /////////////////////

  $wp_customize->add_section('rendcokids_theme_info', array(
    'title' => 'General Info',
    'priority'  => 1,
    'description' => 'General info (social links, contact info, etc).'
  ));

  //////////
  //Socials
  //////////
  $wp_customize->add_setting('fb_url');
  $wp_customize->add_setting('tw_url');
  $wp_customize->add_setting('insta_url');
  $wp_customize->add_setting('youtube_url');
  $wp_customize->add_setting('spotify_url');
  $wp_customize->add_setting('apple_url');
  $wp_customize->add_setting('amazon_url');
  
  $wp_customize->add_control(
    'fb_url_control',
    array(
        'label'      => __( 'Facebook URL', 'rendcokids' ),
        'section'    => 'rendcokids_theme_info',
        'settings'   => 'fb_url',
        'type'       => 'url'
    )
  );
  $wp_customize->add_control(
    'tw_url_control',
    array(
        'label'      => __( 'Twitter URL', 'rendcokids' ),
        'section'    => 'rendcokids_theme_info',
        'settings'   => 'tw_url',
        'type'       => 'url'
    )
  );
  $wp_customize->add_control(
    'insta_url_control',
    array(
        'label'      => __( 'Instagram URL', 'rendcokids' ),
        'section'    => 'rendcokids_theme_info',
        'settings'   => 'insta_url',
        'type'       => 'url'
    )
  );
  $wp_customize->add_control(
    'youtube_url_control',
    array(
        'label'      => __( 'Youtube URL', 'rendcokids' ),
        'section'    => 'rendcokids_theme_info',
        'settings'   => 'youtube_url',
        'type'       => 'url'
    )
  );
  $wp_customize->add_control(
    'spotify_url_control',
    array(
        'label'      => __( 'Spotify URL', 'rendcokids' ),
        'section'    => 'rendcokids_theme_info',
        'settings'   => 'spotify_url',
        'type'       => 'url'
    )
  );
  $wp_customize->add_control(
    'apple_url_control',
    array(
        'label'      => __( 'Apple URL', 'rendcokids' ),
        'section'    => 'rendcokids_theme_info',
        'settings'   => 'apple_url',
        'type'       => 'url'
    )
  );
  $wp_customize->add_control(
    'amazon_url_control',
    array(
        'label'      => __( 'Amazon URL', 'rendcokids' ),
        'section'    => 'rendcokids_theme_info',
        'settings'   => 'amazon_url',
        'type'       => 'url'
    )
  );
  
  ////////////////////
  ///////FOOTER
  ////////////////////

  $wp_customize->add_section('rendcokids_footer', array(
    'title' => 'Footer',
    'priority'  => 1,
    'description' => 'Footer options.'
  ));

  $wp_customize->add_setting('rendcokids_footer_text');
  $wp_customize->add_setting('rendcokids_show_ekf');
  $wp_customize->add_setting('rendcokids_footer_menu');
  $wp_customize->add_setting('rendcokids_footer_socials');

  
  
  $wp_customize->add_control(
    'rendcokids_footer_text_ctrl',
    array(
        'label'      => __( 'Footer After Text (after copyright)', 'rendcokids' ),
        'section'    => 'rendcokids_footer',
        'settings'   => 'rendcokids_footer_text' 
    )
  );
  
  $wp_customize->add_control(
    'rendcokids_footer_ekf_ctrl',
    array(
        'label'      => __( 'Show EKF Link?', 'rendcokids' ),
        'section'    => 'rendcokids_footer',
        'settings'   => 'rendcokids_show_ekf',
        'type'      => 'checkbox'
    )
  );
  
  $wp_customize->add_setting('footer_link_text');
  $wp_customize->add_setting('footer_link_url');

  $wp_customize->add_control(
    'footer_link_text_control',
    array(
        'label'      => __( 'Footer Link Text', 'rendcokids' ),
        'section'    => 'rendcokids_footer',
        'settings'   => 'footer_link_text',
        'type'       => 'text'
    )
  );
  $wp_customize->add_control(
    'footer_link_url_control',
    array(
        'label'      => __( 'Footer Link URL', 'rendcokids' ),
        'section'    => 'rendcokids_footer',
        'settings'   => 'footer_link_url',
        'type'       => 'url'
    )
  );
  
  $wp_customize->add_control(
    'rendcokids_footer_menu_ctrl',
    array(
        'label'      => __( 'Show Footer menu', 'rendcokids' ),
        'section'    => 'rendcokids_footer',
        'settings'   => 'rendcokids_footer_menu',
        'type'      => 'checkbox'
    )
  );
  
  $wp_customize->add_control(
    'rendcokids_footer_socials_ctrl',
    array(
        'label'      => __( 'Show Footer Socials?', 'rendcokids' ),
        'section'    => 'rendcokids_footer',
        'settings'   => 'rendcokids_footer_socials',
        'type'      => 'checkbox'
    )
  );
}
add_action( 'customize_register', 'rendcokids_customize_register' );

/**
 * Render the site title for the selective refresh partial.
 *
 * @return void
 */
function rendcokids_customize_partial_blogname() {
	bloginfo( 'name' );
}

/**
 * Render the site tagline for the selective refresh partial.
 *
 * @return void
 */
function rendcokids_customize_partial_blogdescription() {
	bloginfo( 'description' );
}

/**
 * Binds JS handlers to make Theme Customizer preview reload changes asynchronously.
 */
function rendcokids_customize_preview_js() {
	wp_enqueue_script( 'rendcokids-customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20151215', true );
}
add_action( 'customize_preview_init', 'rendcokids_customize_preview_js' );


