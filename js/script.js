$(document).ready(function(){

	var slickIsActive = false;

	checkSlider();

	$(window).on('resize', function(){
		checkSlider();
	});

	function checkSlider(){
		if( $(window).width() < 1200 ) {
			if( slickIsActive === false ) {
				$('#slider').slick({
					autoplay: true,
				});
				slickIsActive = true;
			}
		}
		else {
			if( slickIsActive === true ) {
				$('#slider').slick('unslick');
				slickIsActive = false;
			}
			
		}
	}
	
	var burgerBtn =$('.j-nav-toggle');
	var mobileNav =$('.j-mobile-nav');
	var isShown = false;

	burgerBtn.on('click', function() {
		if(!isShown){
			mobileNav.toggleClass('is-open')
			mobileNav.slideDown();
			isShown = true;
		} else {
			mobileNav.slideUp();
			isShown = false;
		}
	});

	$(window).on('resze', function(){
		if (window.matchMedia("(min-width: 1200px)").matches) {
			mobileNav.show();
			isShown = true;
			console.log('show');
		} else {
			mobileNav.hide();
			isShown = false;
			console.log('hide');
		}
	});

});