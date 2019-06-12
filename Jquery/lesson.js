
$(document).ready(function(){
	jQuery('.cases-slider').owlCarousel({
	    items:1,
	    lazyLoad:true,
	   	loop:true,
	    margin:10,
	});
	jQuery('.license-slider').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1024:{
	            items:5
	        }
	    }
	})
	jQuery('.photo-slider').owlCarousel({
	    loop:true,
	    nav:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1024:{
	            items:4
	        }
	    }
	})
	carouselService();
});
function carouselService() {
    $('.photo-slider .item').each(function() {
        var t = $(this),
        w = t.outerWidth();
        $('.photo-slider .item .item-image').css('min-height', w);
    });
}