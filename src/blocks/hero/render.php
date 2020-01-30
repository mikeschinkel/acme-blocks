<?php
namespace Acme\Blocks;
/**
 * @var Hero $hero
 */
?>
<div class="wrapper <?php $hero->the_class_attr(); ?>">
	<h3><?php $hero->the_header(); ?></h3>
	<p><?php $hero->the_subheader_html(); ?></p>
	<p><?php $hero->the_promotion_html(); ?></p>
</div>
