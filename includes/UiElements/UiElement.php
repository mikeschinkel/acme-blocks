<?php

namespace Acme\UiElements;

use ReflectionClass;
use Exception;

/**
 * Class UiElement
 * @package Acme\UiElements
 */
class UiElement {

	/**
	 * @var string
	 */
	private $_id;

	/**
	 * @return string
	 */
	function html_id():string {
		do {
		    if ( isset( $this->_id ) ) {
		    	break;
		    }
			$this->_id = sprintf( '_%d', time() );
		} while ( false );
		return $this->_id;
	}

	/**
	 * @return array
	 */
	function properties(): array {
		return get_object_vars( $this );
	}

	/**
	 *
	 */
	function the_style_html() {
		echo sprintf( "<style type=\"text/css\">\n%s\n</style>",
			trim( $this->_load_css() )
		);
	}

	/**
	 * @return string
	 */
	function css_filepath():string {
		$format = str_replace( '/', DIRECTORY_SEPARATOR, '%s/style/%s.css.php' );
		return sprintf( $format,
			dirname( $this->instance_filepath() ),
			$this->base_class_name()
		);
	}

	/**
	 * @return string|string[]|null
	 */
	protected function _load_css():?string {
		do {
			$css = null;
			if ( ! is_file( $filepath = $this->css_filepath() ) ) {
				trigger_error( sprintf( "missing %s", $filepath ) );
			}
			ob_start();
			require $filepath;
			$css = sprintf( "\n%s", ob_get_clean() );
			$html_id = $this->html_id();
			$css = str_replace( "\n#", sprintf( "\n#%s#", $html_id ), $css );
			$css = str_replace( "\n.", sprintf( "\n#%s.", $html_id ), $css );
			foreach( $this->properties() as $object ) {
				if ( ! is_object( $object ) ) {
					continue;
				}
				if ( ! method_exists( $object, $func = 'the_style_html' ) ) {
					continue;
				}
				$css .= $object->_load_css();
			}
		} while ( false );
		return $css;
	}

	/**
	 * @param callable $html_func
	 *
	 * @return string
	 */
	protected function _the_html( callable $html_func ):string {
		ob_start();
		$html = (string)$html_func();
		$html .= ob_get_clean();
		$html = preg_replace( '#(^<[a-z-0-9]+)#',
			sprintf( '$1 id="%s"', $this->html_id() ),
			$html
		);
		return $html;
	}

	/**
	 * @return string
	 */
	function base_class_name(): string {
		return substr( strrchr( static::class, "\\" ), 1 );
	}

	/**
	 * @return string
	 */
	function instance_filepath():string {
		try {
			$reflector = new ReflectionClass( $this );
		} catch (Exception $exception) {
			trigger_error($exception->getMessage());
			die();
		}
		return $reflector->getFileName();
	}

}
