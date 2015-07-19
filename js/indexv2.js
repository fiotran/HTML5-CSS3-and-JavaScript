$( document ).ready(function() {
    $('[class|="read"]').click(function(){
    	var selectedRead = $(this).attr('class').split('-');
    	var readType = selectedRead[1];
    	var readType = readType.split(' ')[0];
    	slideOption(event, readType);
    });

    function slideOption(event, readType){
        event.preventDefault();
	    if (readType === 'more') {   
	        $('.read-more').hide();
	        $("#show-this-on-click").slideDown();
	        $(".read-less").show();
	    } else if (readType === 'less') { 
	    	$('.read-less').hide();
	        $("#show-this-on-click").slideUp();
	        $(".read-more").show();
	    } else {
	    	$('.read-learn').hide();
	        $('.read-learn + span').slideDown();
	    }
    }

});