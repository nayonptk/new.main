(function($) {
	"use strict";
// Main Menu	
$(".mobile-manu").slicknav();


// Client Review slider	
$(".client-reviews-slide ").owlCarousel({		
		loop: true,
		items: 1,
	//	autoplay:true,
		responsive:{ 
			0:{ items:1

			},

			600:{ 
					items:1
			},
			750:{ 
					items:1
			},

		}	
});
// Header Menu	
$(".header-manu").click(function(){
	  $(".mobile-manu").toggle(1000);
	  
		return false
	 
});

$(document).on('click', 'ul.mobile-manu li a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500);
        event.preventDefault();
    });

	
})(jQuery)
