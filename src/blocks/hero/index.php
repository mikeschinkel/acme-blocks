<?php

namespace Acme\Blocks;

use Acme\Blocks;

add_action( 'init',  function() {
	Blocks::register( 'hero', array(
		Blocks::block_args => array(
			'render_callback' => function ( $attributes, $content ) {
				$hero = new Hero( $attributes );
				ob_start();
				require( __DIR__ . '/render.php' );
				return ob_get_clean();
			},
		),
	) );
});

