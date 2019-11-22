<?php
/**
 * The template for displaying the footer.
 *
 * @package QOD_Starter_Theme
 */

?>

			</div><!-- #content -->

			

			<footer id="colophon" class="site-footer" role="contentinfo">
			
				<div class="site-info">
					<nav id="site-navigation" class="main-navigation" role="navigation">
								
						<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
							
					<div class="powered">
								<a  href="<?php echo esc_url( "https://www.linkedin.com/in/michal-prokop-b4994617" ); ?>"><?php printf( esc_html( 'Proudly powered by Michal Prokop' ), 'WordPress' ); ?></a>
							</nav><!-- #site-navigation -->
					</div>		
					
				  </div><!-- .site-info -->
			</footer><!-- #colophon -->
		</div><!-- #page -->

		<?php wp_footer(); ?>

	</body>
</html>
