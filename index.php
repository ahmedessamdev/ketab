<?php get_header(); ?>
<div id="nav-container">
			<?php 
	            wp_nav_menu( array( 
					'menu'			 => 'top-menu',
					'menu_class'	 => 'nav-list',
					'menu_id'		 => 'top-menu-list',
					'container'		 => 'nav',
		            'theme_location' => 'top-menu',
					'link_before'	 => '<span class="sub-menu-item">',
					'link_after'	 => '</span>',
					'depth'          => 2,
	            ) ); 

            ?>
			
	<div id="social-icons">
		
	</div>
</div>
<div id="content-container">
	<div id="content">
		<article>
		<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		<h4 class="post-title"><a href="<?php the_permalink(); ?>" rel="bookmark" title="<?php the_title_attribute(); ?>"><?php the_title(); ?></a></h4>
		<ul class="post-meta">
			<li>
				<span class="dashicons dashicons-admin-users"></span>
				<a><?php the_date(); ?><?php the_content( __("more...") ); ?></p>

			</li>
			<li>
				<span class="dashicons dashicons-format-chat"></span>
				<a href="<?php comments_link() ?>"><?php comments_number(); ?></a>
			</li>
			<li>
				<span class="dashicons dashicons-portfolio"></span>
				<?php the_category( ', ' ); ?></p>

			</li>
		</ul>
		<br>
		
		<hr>
		<?php endwhile;?>
		<?php endif; ?>
		</article>
	</div> <!-- #content -->
	<?php get_sidebar(); ?>
	<?php get_footer(); ?>
