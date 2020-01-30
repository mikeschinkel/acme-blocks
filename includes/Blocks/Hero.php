<?php

namespace Acme\Blocks;

use Acme\Components\Promotion;

class Hero extends Block {

	/**
	 * @var Promotion
	 */
	private $_promotion;

	function __construct( array $args = array() ) {
		parent::__construct( self::class );
		$this->_header    = $args[ 'header' ] ?? null;
		$this->_subheader = $args[ 'subheader' ] ?? null;
		$args = array_intersect_key( $args, ['discount'=>null]);
		$this->_promotion = new Promotion($args);
	}

	private $_header;
	private $_subheader;

	function the_header() {
		echo esc_html( $this->_header );
	}

	function the_header_html() {
		echo wp_kses_post( $this->_header );
	}

	function the_subheader() {
		echo esc_html( $this->_subheader );
	}

	function the_subheader_html() {
		echo wp_kses_post( $this->_subheader );
	}

	function the_promotion_html() {
		echo $this->_promotion->the_component_html();
	}

	function header(): string {
		return $this->_header;
	}

	function subheader(): string {
		return $this->_subheader;
	}

	function properties(): array {
		return array_merge(
			parent::properties(),
			get_object_vars( $this )
		);
	}
}