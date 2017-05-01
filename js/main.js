/*
 * JS File for : Ketab theme
 * Author      : Ahmed Essam
 */

var isSlide = false;
var breakPoint = 950;


/* MENU CODE */
jQuery( document ).ready( function( $ ) {
    // If desktop, create animated window
    if ( $( window ) .width() > breakPoint ) {
	createMenuSlide();
	isSlide = true;
    }

    $( window ).on('resize', function() {
	// Remove animated window if width is reduced
	if ( $( this ).width() <= breakPoint && isSlide == true) {
	    // Remove handlers
	    $( '#top-menu' ).children().off();
	    $( '#top-menu .nav-list' ).off();
	    isSlide = false;
	} else if ($( this ).width() > breakPoint && isSlide == false) {
	    // Recreate animated menu
	    createMenuSlide();
	    isSlide = true;
	}
    });

    // Create sliding menu
    function createMenuSlide() {
	$( '#top-menu' ).children().mouseenter(function() {
    	    // Reset: stop any events in the other top menu items
    	    $( '#top-menu .sub-menu' ).stop( false, true ).hide();
    	    $( '#top-menu' ).children().removeClass( "keep-hover" );
    	    $( this ).addClass( "keep-hover" );
    	    // Select the sub menu items under this top menu item 
    	    // (global as we will need it)
    	    ketabSubmenu = $( this ).children(":nth-child(2)");
    	    // Minimum width of links of the submenu = width the top menu item
    	    ketabSubmenu.children().css({ 
    		"min-width" : $(this).innerWidth() + 'px'
    	    });
    	    // Get the auto width of the submenu
    	    var links_auto_width = ketabSubmenu.innerWidth();
    	    ketabSubmenu.css({
    		position : 'absolute',
    		top      : $( this ).offset().top + 
    		    $( this ).outerHeight() + 'px',
    		// if the auto width of the submenu items is larger then the 
    		// top menu item then move the submenu to the right
    		right     : $( this ).offset().right - 
    		    (links_auto_width - $( this ).innerWidth()) + 'px',
    		zIndex   : 1000
    	    });
    	    ketabSubmenu.stop().slideDown( 600 );
    	    ketabSubmenu.mouseleave(function() {
    		ketabSubmenu.slideUp( 600 );;
    		// Remove the hovered state from the top menu
    		ketabSubmenu.parent().
    		    removeClass("keep-hover");
    	    });
	})

	$( '#top-menu .nav-list' ).mouseleave(function() {
	    ketabSubmenu.slideUp( 600 );;
	    // Remove the hovered state from the top menu
	    $( '#top-menu .menu-item-has-children' ).
		removeClass("keep-hover");
	});
    }
});
