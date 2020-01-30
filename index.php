<?php

use Acme\Blocks;

class AcmeBlocks {

	const DIR = __DIR__;

	/**
	 *
	 */
	static function on_load() {
		$format = str_replace( '/', DIRECTORY_SEPARATOR, '%s/vendor/autoload.php' );
		require sprintf( $format, __DIR__ );
		add_action( 'init', [ self::class, '_init'] );

		Blocks::load();

	}

	static function _init() {
		wp_deregister_script('heartbeat');
	}


}
AcmeBlocks::on_load();
