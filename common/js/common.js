var width01     = $(window).width();
var height01    = $(window).height();

$(document).ready(function(){
	$(document).on('click', '.btn_header', function(){
		if(!$(this).hasClass('active')){
			$(this).addClass('active');
			$("#header").addClass('active');
			$("#content").addClass('active');
			$("#footer").addClass('active');
            $('body').css('overflow', 'hidden');
		} else {
			$(this).removeClass('active');
			$("#header").removeClass('active');
			$("#content").removeClass('active');
			$("#footer").removeClass('active');
            $('body').css('overflow', '');
		}
	});

    var _height = $(window).height();
    $('#slider').css('height', _height);

	//------gallery detail tab & Slider-----
    if( $('.gallery_dtl').length > 0 ){
        gallery_tab();
        height_slider();
        $(window).resize(function() {
            if(width01 < 767){
                width01     = $(window).width();
                setTimeout(function(){
                    $('.gallery_dtl_tab .right .bx-wrapper').css('width',width01);
                    $('.gallery_dtl_tab .right .bx-wrapper').find('img').css('height',width01);
                },500)
            }
        }).resize();
    }
    
    get_link();
    // scroll();
    if($('.scroll').length > 0){
        $('.scroll').perfectScrollbar();
    }
});

function gallery_tab(){
    jQuery('.dtl_list li a').on('click', function(e)  {
        var currentAttr = jQuery(this).attr('href');
        // Show/Hide Tabs
        jQuery('.gallery_dtl_tab ' + currentAttr).fadeIn(400).siblings().hide();
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
        e.preventDefault();
        //--call height slider when click---
        var slider01 = jQuery('.gallery_dtl_tab ' + currentAttr).find('.bxslider');
        var bxpager01 = jQuery('.gallery_dtl_tab ' + currentAttr).find('.bx-pager');
        //---when click call bxslider---
        setTimeout(function(){
            height_slider();
            jQuery(slider01).bxSlider({
                pagerCustom: bxpager01,
                infiniteLoop: false,
                hideControlOnEnd: true
            });
        },400)
    });
    jQuery('#tab01 .bxslider').bxSlider({
        pagerCustom: '#tab01 .bx-pager',
        infiniteLoop: false,
        hideControlOnEnd: true
    });
}

function height_slider(){
    var hei01 = $('.content_block').height() - 40;
    setTimeout(function(){
        $('.gallery_dtl_tab .bx-wrapper').css('width',hei01);
        $('.gallery_dtl_tab .bx-wrapper img').css('height',hei01);
    },300)
}

function get_link(){
    //--------------------
    var link01 = window.location.href ;
    var last = link01.substring(link01.lastIndexOf("#") + 1, link01.length);
    $('.dtl_list li a').parent('li').removeClass('active');
    $('.dtl_list li a').each(function(){
        var link02 = $(this).attr('href');
        var text01 = link02.substring(link02.lastIndexOf("#") + 1, link02.length);
        //alert(text01);
        if(last == text01){
            $(this).parent('li').addClass('active');
            jQuery('.gallery_dtl_tab ' + link02).fadeIn(400).siblings().hide();
            var slider02 = jQuery('.gallery_dtl_tab ' + link02).find('.bxslider');
            var bxpager02 = jQuery('.gallery_dtl_tab ' + link02).find('.bx-pager');
            jQuery(slider02).bxSlider({
                pagerCustom: bxpager02,
                infiniteLoop: false,
                hideControlOnEnd: true
            });
        }
    })
}