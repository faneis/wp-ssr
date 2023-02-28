<?php

	$recent_posts = wp_get_recent_posts( array(
		'numberposts' => $attributes['quantity'],
		'post_status' => 'publish',
	) );

	if ( count( $recent_posts ) === 0 ) {
		return 'No posts';
	}

	?>
	<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php
		foreach ( $recent_posts as $post) {
			?>
			<p>
				<?php
					echo sprintf(
						'<a class="latest-post" href="%1$s">%2$s</a>',
						esc_url( get_permalink( $post['ID'] ) ),
						esc_html( get_the_title( $post['ID'] ) )
					);
				?>
			</p>
			<?php
		}
	?>
	</div>
