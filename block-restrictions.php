<?php
/**
 * Plugin Name: Block Restrictions
 * Description: Beschränkt erlaubte Blöcke basierend auf dem zugewiesenen Block-Stil.
 * Version: 1.0
 * Author: ulrich.digital
 * Author URI: https://ulrich.digital/
 */

function block_restrictions_enqueue_assets() {
    wp_enqueue_script(
        'block-restrictions-editor',
        plugin_dir_url( __FILE__ ) . 'build/index.js',
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-compose', 'wp-hooks', 'wp-block-editor' ),
        filemtime( plugin_dir_path( __FILE__ ) . 'build/index.js' ),
        true
    );
}
add_action( 'enqueue_block_editor_assets', 'block_restrictions_enqueue_assets' );
