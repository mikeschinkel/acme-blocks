<?php
namespace Acme\Blocks;
/**
 * @var Hero $hero
 */
?>
<div class="<?php $hero->the_namespaced_name(); ?>">
	<h3><?php $hero->the_header(); ?></h3>
	<p><?php $hero->the_subheader(); ?></p>
</div>