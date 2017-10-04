$(document).ready(function(){
	$(document).on('click', '.btn_header', function(){
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			$("#header").addClass('active');
			$("#content").addClass('active');
		} else {
			$(this).removeClass('active');
			$("#header").removeClass('active');
			$("#content").removeClass('active');
		}
	});

	$("#slider .main_slider").vegas({
		timer: false,
		delay: 7000,
		transition: [ 'fade', 'zoomOut'],
		transitionDuration: 2000,
    slides: [
      { src: "images/slider.jpg" },
      { src: "images/slider_1.jpg" }
    ]
	});
});