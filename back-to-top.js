// JavaScript Document
jQuery(document).ready(function(){
	var offset = 200;
	var duration = 500;
	jQuery(window).scroll(function(){
		if(jQuery(this).scrollTop() > offset ){
			jQuery('.back-to-top').fadeIn(duration);
		}else{
			jQuery('.back-to-top').fadeOut(duration);
		}
	});
	
	jQuery('back-to-top').click(function(event){
		event.preventDefault();
		jQuery('html,body').animate({scrollTop:0},duration);
		return false;
	})
});

/*var backToTop = {
            init: function () {
                $('html, body').append('<a href="" id="backToTop" data-role="button" data-icon="arrow-u" data-theme="b">Back to top</a>');
                $('#backToTop').click(backToTop.click);
                $(window).bind('scrollstart', backToTop.scrollStart);
                $(window).bind('scrollstop', backToTop.scrollStop);
                $('body').trigger('create');
            },
            click: function () {
                $('html, body').animate({scrollTop: 0}, 800);
            },
            scrollStart: function () {
                $('#backToTop').hide();
            },
            scrollStop: function () {
                var windowHeight = $(window).height();
                if (window.pageYOffset > windowHeight) {
                    $('#backToTop').fadeIn('slow');
                }
            }
        };

        $('#backToTopDemoPage').live('pageinit', function (event, ui) {
            backToTop.init();
        });
*/