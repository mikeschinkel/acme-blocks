<?php

namespace Acme\Blocks;

use Acme\Blocks;
use Acme\UiElements\UiElement;

class Block extends UiElement {

	private $_block_name;

	function __construct( string $block_name ) {
		$this->_block_name = strtolower( $block_name );
	}

	/**
	 * @param
	 *
	 * @return string
	 */
	function get_style_handle( string $slug ): string {
		return sprintf( '%s-%s-style',
			$this->namespaced_handle(),
			$slug
		);
	}

	/**
	 * @param
	 * @param string $slug
	 * @param string $filename
	 * @param array $dependencies
	 */
	function register_style( string $slug, string $filename, array $dependencies = array() ) {
		wp_register_style(
			$this->get_style_handle( $slug ),
			$this->get_url( $filename ),
			$dependencies,
			$this->get_filetime( $filename )
		);
	}

	/**
	 *
	 */
	function get_url( string $filepath ): string {
		$block_dir = $this->dir();
		$url       = plugins_url( basename( $filepath ), "{$block_dir}/." );

		return $url;
	}


	/**
	 *
	 */
	function get_filepath( string $filename ): string {
		$format = str_replace( '/', DIRECTORY_SEPARATOR, '%s/%s' );
		return sprintf( $format,
			$this->dir(),
			$filename
		);
	}

	/**
	 *
	 */
	function get_filetime( string $filename ): string {
		return filemtime( $this->get_filepath( $filename ) );
	}

	/**
	 *
	 */
	function php_filepath(): string {
		return $this->get_filepath( Blocks::PHP_FILENAME );
	}

	/**
	 *
	 */
	function the_class_attr() {
		echo esc_attr( $this->namespaced_name() );
	}

	/**
	 *
	 */
	function the_namespaced_name() {
		echo esc_attr( $this->namespaced_name() );
	}

	/**
	 *
	 */
	function namespaced_name(): string {
		return sprintf( '%s/%s',
			Blocks::BLOCKS_NAMESPACE,
			$this->_block_name
		);
	}

	/**
	 *
	 */
	function namespaced_handle(): string {
		return sprintf( '%s-%s',
			Blocks::BLOCKS_NAMESPACE,
			$this->_block_name
		);
	}
	/**
	 *
	 */
	function dir(): string {
		$format = str_replace( '/', DIRECTORY_SEPARATOR, '%s/%s' );
		return sprintf( $format,
			Blocks::blocks_dir(),
			$this->_block_name
		);
	}

	function load():bool {
		do {
			$loaded = false;
			$filepath = $this->php_filepath();
			if ( !is_file( $filepath ) ) {
				trigger_error(sprintf('block entry point %s does not exist', $filepath ));
				break;
			}
			require $filepath;
			$loaded = true;
		} while ( false );
		return $loaded;
	}
}

