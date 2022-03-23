// JavaScript Document

$(document).ready(function() {

    function description(_this) {
        var index = $(_this).attr('data-id');

         if( ($("#desc"+index).is(":visible")) ){
			 /* do nothing*/
        }
        else{
        $('div.description').hide('fast');
		$('div.description[data-id="'+index+'"]').show('fast');
		var audio = new Audio('sound/product_sound.mp3');
		audio.volume = 0.2;
		audio.play();
		window.dispatchEvent(new Event('resize'));
        }     
    }

    $('button[data-id]').click(function() {
		description(this);
		
    });

});

	/*function descriptionP1() {
	  var div = document.getElementById("desc1");
	  var cache1 = document.getElementById("desc2");
	  var cache2 = document.getElementById("desc3");
	 	  console.log(cache1.style);
	  if (cache1.style.display == "block") {
		$(cache1).toggle('slow');
		$(div).toggle('slow');
	  }
	  else if (cache2.style.display == "block") {
		$(cache2).toggle('slow');
		$(div).toggle('slow');
	  }
	  else{
	  	$(div).toggle('slow');
	  }
	   window.dispatchEvent(new Event('resize')); 
	}


	function descriptionP2() {
	  var div = document.getElementById("desc2");
	  var cache1 = document.getElementById("desc1");
	  var cache2 = document.getElementById("desc3");
	  console.log(cache1.style);
	  if (cache1.style.display == "block") {
		$(cache1).toggle('slow');
		$(div).toggle('slow');
	  }
	  else if (cache2.style.display == "block") {
		$(cache2).toggle('slow');
		$(div).toggle('slow');
	  }
	  else{
	  	$(div).toggle('slow');
	  }
	   window.dispatchEvent(new Event('resize')); 
	}

	function descriptionP3() {
	  var div = document.getElementById("desc3");
	  var cache1 = document.getElementById("desc1");
	  var cache2 = document.getElementById("desc2");
	  if (cache1.style.display == "block") {
		$(cache1).toggle('slow');
		$(div).toggle('slow');
	  }
	  else if (cache2.style.display == "block") {
		$(cache2).toggle('slow');
		$(div).toggle('slow');
	  }
	  else{
	  	$(div).toggle('slow');
	  }
	   window.dispatchEvent(new Event('resize')); 
	}*/