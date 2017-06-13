$(document).ready(function() {
	$('.slider').slick({  
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows:true,
	  dots:true,
	});
	$('.slider-catalog').slick({  
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  arrows:true  
	});

	 $('.product-slider-big').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  fade:true,
	  arrows: false,
	  asNavFor: '.product-slider__small'
	});

	$('.product-slider__small').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  asNavFor: '.product-slider-big',
	 focusOnSelect: true,
	  dots: false,
	});
	$('.side-bar__item-head').on('click', function () {
		if($(this).parent('.side-bar__item').hasClass('active')){
			$(this).parent('.side-bar__item').removeClass('active');			
		}
		else{
			$('.side-bar__item').removeClass('active');
			$(this).parent('.side-bar__item').addClass('active');			
		}
	});
	$(function(){

		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			step: 5,
			max: 400,
			values: [ 15, 400 ],
			slide: function( event, ui ) {
				$('.result-left').html(  ui.values[ 0 ]  );
				$('.result-right').html( ui.values[ 1 ] );
			}
		});	

	});
});	