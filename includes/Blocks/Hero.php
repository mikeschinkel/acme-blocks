<?php

namespace Acme\Blocks;

class Hero extends Block {
	function __construct( array $args = array() ) {
		parent::__construct( self::class );
		$this->_header = $args[ 'header' ] ?? null;
		$this->_subheader = $args[ 'subheader' ] ?? null;
	}

	private $_header;
	private $_subheader;
	function the_header() {
		echo wp_kses_post( $this->_header );
	}
	function the_subheader() {
		echo wp_kses_post( $this->_subheader );
	}
	function header():string {
		return $this->_header;
	}
	function subheader():string {
		return $this->_subheader;
	}
}
