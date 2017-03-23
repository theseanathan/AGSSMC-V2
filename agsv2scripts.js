$(document).ready(function(){


	//Changes the entire frontpage description box height when window resizes
	var descriptionTextHeight = $("#frontpage-description").height()
	var descBox = $("#desc-box");

	$(window).resize(function(){
		descriptionTextHeight = $("#frontpage-description").height()
		descBox.height(descriptionTextHeight);
	})

	$(function(){
        var $window = $(window);
		var scrollTime = 0.7;
		var scrollDistance = 240;

		$window.on("mousewheel DOMMouseScroll", function(event){
			event.preventDefault();	
			var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
			var scrollTop = $window.scrollTop();
			var finalScroll = scrollTop - parseInt(delta*scrollDistance);
			TweenMax.to($window, scrollTime, {
				scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 5							
			});
		});
	});

	$('#bottom-contact').click(function(){
		$('#contact-pop-up').css("display","block");
		$("#contact-pop-up").animate({opacity:"1"});
	});

	$('#close-button').click(function(){
		$("#contact-pop-up").animate({opacity:"0"});
		$('#contact-pop-up').css("display","none");
	});
});	