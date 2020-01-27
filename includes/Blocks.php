<?php

namespace Acme;

use Acme\Blocks\Block;
use AcmeBlocks;

class Blocks {
	const script_dependencies = 'script_dependencies';
	const editor_dependencies = 'editor_dependencies';
	const frontend_dependencies = 'frontend_dependencies';
	const script_in_footer = 'script_in_footer';
	const block_args = 'block_args';

	const BLOCKS_NAMESPACE = 'acme';

	const PHP_FILENAME = 'index.php';
	const JS_FILENAME = 'index.js';

	private static $_script_dependencies = array();

	/**
	 *
	 */
	static function load() {
		foreach ( scandir( self::blocks_dir() ) as $block_name ) {
			if ( '.' === $block_name[ 0 ] ) {
				continue;
			}
			$block = new Block( $block_name );
			$block->load();
		}

		add_action('admin_enqueue_scripts', [ self::class, '_admin_enqueue_scripts' ] );

	}


	static function _admin_enqueue_scripts() {
		self::enqueue_script( true );
	}


	static function register( string $block_name, $args = array() ) {
		$args = wp_parse_args( $args, array(
			self::editor_dependencies   => [],
			self::frontend_dependencies => [],
			self::script_in_footer      => true,
			self::block_args            => [],
		) );

		$editor_style_dependencies = array_unique( array_merge(
			$args[ self::editor_dependencies ],
			array(
				'wp-edit-blocks',
			)
		) );

		$style_dependencies = array_unique( array_merge(
			$args[ self::frontend_dependencies ],
			array(
				'wp-edit-blocks',
			)
		) );

		$block = new Block( $block_name );

		$block_args = array_merge( $args[ self::block_args ], array(
			'editor_script'  => self::script_handle(),
			'editor_style'  => $block->get_style_handle( 'editor' ),
			'style'         => $block->get_style_handle( 'frontend' ),
		) );

		register_block_type( $block->namespaced_name(), $block_args );

		$block->register_style( 'editor', 'editor.css', $editor_style_dependencies );
		$block->register_style( 'frontend', 'style.css', $style_dependencies );

	}

	static function blocks_dir(): string {
		return sprintf( '%s/src/blocks', AcmeBlocks::DIR );
	}

	/**
	 * @param string $block_name
	 *
	 * @return string
	 */
	static function script_handle(): string {
		return sprintf( '%s-script', Blocks::BLOCKS_NAMESPACE );
	}

	/**
	 * @param
	 * @param array $dependencies
	 * @param bool $in_footer
	 */
	static function enqueue_script( bool $in_footer = true ) {
		$asset_file = include( self::get_filepath( 'build/index.asset.php' ) );
		wp_enqueue_script(
			self::script_handle(),
			self::get_script_url( Blocks::JS_FILENAME ),
			$asset_file['dependencies'],
			$asset_file['version'],
			$in_footer
		);
	}

	/**
	 *
	 */
	static function get_script_url( string $filepath ): string {
		$block_dir = AcmeBlocks::DIR;
		$url       = plugins_url( basename( $filepath ), "{$block_dir}/build/." );

		return $url;
	}


	/**
	 *
	 */
	static function get_filepath( string $filename ): string {
		return sprintf( '%s/%s',
			AcmeBlocks::DIR,
			$filename
		);
	}

}
