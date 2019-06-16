
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
// $(document).ready(function(){ 
// 	$('.photo').masonry({
// // указываем элемент-контейнер в котором расположены блоки для динамической верстки
// 	  itemSelector: '.photo:after',
// // указываем класс элемента являющегося блоком в нашей сетке
//           singleMode: false,
// // true - если у вас все блоки одинаковой ширины
// 	  isResizable: true,
// // перестраивает блоки при изменении размеров окна
// 	  isAnimated: true,
// // анимируем перестроение блоков
//           animationOptions: { 
// 	      queue: false, 
// 	      duration: 500 
// 	  }
// // опции анимации - очередь и продолжительность анимации
// 	}); 
//   });