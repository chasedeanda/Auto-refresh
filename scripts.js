$(document).ready(function(){

	$(".closeOptions").click(function(){
		$(".pop-out").slideUp();
		$(".pop-down").slideDown();
	});

	$(".pop-down").click(function(){
		$(".pop-down").slideUp();
		$(".pop-out").slideDown();
	});

	var refreshPage = function(url, time){
		time = parseInt(time);
		time = time*60;
		$('iframe').remove();
		$('<iframe />');
	    $('<iframe />', {
	    	id: 'frame',
	        src: url,
	        class: 'height100 col-md-12 col-xs-12'
	    }).appendTo($(".iframe_container"));
	    setTimer(time, url);
	}

	$('#submitTime').submit(function(event){
	    event.preventDefault();
	    $(this).find('button').html('<span class="glyphicon glyphicon-refresh" style="margin-right:10px"></span>Restart Timer');
	    refreshPage($("#refreshUrl").val(), $("#refreshRate").val());

	});
	var timer;
	var setTimer = function(seconds, url){
		clearInterval(timer);
		$(".remainingTime").fadeIn('fast');
		var minutes, repeatTime = seconds;
		timer = setInterval( function() {
	        seconds--;
	        minutes = Math.floor(seconds/60);

	        if(seconds > 60) {   
	        	if(minutes === 1){
	        		$('.timeLabel').text('').text(" minute.");
	        	}
	        	else{
	        		$('.timeLabel').text('').text(" minutes.");
	        	}
	        	$('.remaining').text('').text(minutes);
	        	$('.timeLabel').hide().show(0);
	        	$('.remaining').hide().show(0);
	        }
	        else{
	        	if(seconds === 1){
	        		$('.timeLabel').text('').text(" second.");
	        	}
	        	else{
	        		$('.timeLabel').text('').text(" seconds.");
	        	}
	        	$('.remaining').text('').text(seconds);
	        	$('.timeLabel').hide().show(0);
	        	$('.remaining').hide().show(0);
	        }       
	        if (seconds === 0) {  
	        	clearInterval(timer)  
	        	$("#RefreshDing").trigger('play');
	        	$("#frame").attr('src', url);
	        	setTimer(repeatTime, url);     
	        }           
    	}, 1000 );
	}
});

