<?php

namespace Acme\Components;

class Promotion extends Component {

	private $_discount;

	function __construct($args = array()) {
		$args = wp_parse_args($args, array(
			'discount' => 30,
		));
		$this->_discount = $args['discount'];
	}

	function the_component_html() {
		return $this->_the_html(function() {
			echo "<div class=\"wrapper\">Take {$this->_discount}% off!</div>";
		});
	}
}

