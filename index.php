<?php

use Acme\Blocks;

class AcmeBlocks {

	const DIR = __DIR__;

	/**
	 *
	 */
	static function on_load() {

		require __DIR__ . '/vendor/autoload.php';
		add_action( 'init', [ self::class, '_init'] );

		Blocks::load();

	}

	static function _init() {
		wp_deregister_script('heartbeat');
	}


}
AcmeBlocks::on_load();
