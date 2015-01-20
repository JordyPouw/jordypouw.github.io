/**
 * PathLoader.js v1.0.0 - http://www.codrops.com.
 */
( function( window ) {
	
	'use strict';

	function PathLoader( el ) {
		this.el = el;
		// Clear stroke.
		this.el.style.strokeDasharray = this.el.style.strokeDashoffset = this.el.getTotalLength();
	}

	PathLoader.prototype._draw = function( val ) {
		this.el.style.strokeDashoffset = this.el.getTotalLength() * ( 0.2 - val );
	};

	PathLoader.prototype.setProgress = function( val, callback ) {
		this._draw(val);
		if( callback && typeof callback === 'function' ) {
			// Give it a time (ideally the same like the transition time) so that the last progress increment animation is still visible.
			setTimeout( callback, 200 );
		}
	};

	PathLoader.prototype.setProgressFn = function( fn ) {
		if( typeof fn === 'function' ) { fn( this ); }
	};

	// Add to global namespace.
	window.PathLoader = PathLoader;

})( window );


/**
 * Loading screen.
 */
(function() {
	if (on_index && document.referrer === null || document.referrer.indexOf(window.location.hostname) < 0) {
		var loadingScreen = function() {

			var support = { animations : Modernizr.cssanimations },
					container = document.querySelector('.page__container'),
					header = container.querySelector('.page__preheader'),
					loader = new PathLoader(document.querySelector('.loader--circle')),
					animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
					// Animation end event name.
					animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

			function init() {
				var onEndInitialAnimation = function() {
					if( support.animations ) {
						this.removeEventListener( animEndEventName, onEndInitialAnimation );
					}

					startLoading();
				};

				// Disable scrolling.
				window.addEventListener( 'scroll', noscroll );

				// Initial animation.
				classie.add( container, 'loading' );

				if( support.animations ) {
					container.addEventListener( animEndEventName, onEndInitialAnimation );
				}
				else {
					onEndInitialAnimation();
				}
			}

			function startLoading() {
				// Simulate loading something.
				var simulationFn = function(instance) {
					var progress = 0,
						interval = setInterval( function() {
							progress = Math.min( progress + Math.random() * 0.1, 0.2 );

							instance.setProgress( progress );

							// Reached the end.
							if( progress === 0.2 ) {
								classie.remove( container, 'loading' );
								classie.add( container, 'loaded' );
								clearInterval( interval );

								var onEndHeaderAnimation = function(ev) {
									if( support.animations ) {
										if( ev.target !== header ) return;
										this.removeEventListener( animEndEventName, onEndHeaderAnimation );
									}

									classie.add( document.body, 'layout-switch' );
									window.removeEventListener( 'scroll', noscroll );
								};

								if( support.animations ) {
									header.addEventListener( animEndEventName, onEndHeaderAnimation );
								}
								else {
									onEndHeaderAnimation();
								}
							}
						}, 80 );
				};

				loader.setProgressFn( simulationFn );
			}
			
			function noscroll() {
				window.scrollTo( 0, 0 );
			}

			init();
		};
		loadingScreen();
	}
	else if (on_index) {
		var preheaderElement = document.querySelector('.page__preheader');
		preheaderElement.parentNode.removeChild(preheaderElement);
		
		var homepageTitle = document.querySelector('.page__header h1');
		homepageTitle.style.display='block';
	}
})();
