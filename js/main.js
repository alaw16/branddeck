var words = [];
words[0] = ['Accomplished','Budding']; 
words[1] = ['Certain','Curious']; 
words[2] = ['Realistic','Idealistic']; 
words[3] = ['Practical','Imaginative'];
words[4] = ['Dependable','Surprising'];
words[5] = ['Formal','Casual'];
words[6] = ['Disciplined','Relaxed'];
words[7] = ['Calm','Energetic'];
words[8] = ['Serious','Fun'];
words[9] = ['Vintage','Modern'];
words[10] = ['Timeless','Current'];
words[11] = ['Free','Secure'];
words[12] = ['Pessimistic','Optimistic'];
words[13] = ['Reserved','Welcoming'];
words[14] = ['Professional','Playful'];
words[15] = ['Trusted','Cutting-Edge'];
words[16] = ['Wise','Geeky'];
words[17] = ['Everyday','Momentous'];
words[18] = ['Simple','Complex'];
words[19] = ['Scholarly','Savvy'];
words[20] = ['Technical','Intuitive'];
words[21] = ['Bold','Quiet'];
words[22] = ['Respectful','Cheeky'];
words[23] = ['Brash','Humble'];
words[24] = ['Refined','Raw'];
words[25] = ['Steady','Dynamic'];
words[26] = ['Focused','Multifaceted'];
words[27] = ['Subtle','Vibrant'];
words[28] = ['Sophisticated','Wide-Eyed'];
words[29] = ['Conventional','Experimental'];
words[30] = ['Standardized','Crafted'];
words[31] = ['Industrial','Organic'];
words[32] = ['Effortless','Rigorous'];
words[33] = ['Mass-market','Niche'];
words[34] = ['Aggressive','Laid-back'];
words[35] = ['Austere','Glamorous'];
words[36] = ['Best-In-Class','Ordinary'];
words[37] = ['Opinionated','Open-Minded'];
words[38] = ['Rugged','Graceful'];
words[39] = ['Rational','Radical'];
words[40] = ['Traditional','Progressive'];
words[41] = ['High-End','Basic'];
words[42] = ['Nostalgic','Futuristic'];
words[43] = ['Sincere','Clever'];
words[44] = ['Big','Small'];
words[45] = ['Artistic','Scientific'];
words[46] = ['Analytical','Emotional'];
words[47] = ['Mysterious','Relatable'];
words[48] = ['Daring','Adventurous'];
words[49] = ['Exclusive','Approachable'];

function random_sort () {
      return (0.5 - Math.random() );
}
words.sort(random_sort);

var i = 0,
	n = words.length;

var updateLength = function() {
	var newLength = words.length;
	return newLength;
};

$("#forward").data('dir', 1);
$("#back").data('dir', -1);

$("#forward, #back").on('click', function() {
	if (n !== 0) {
		i = (i + $(this).data('dir') + n) % n;
		$("#input").hide().html(words[i][0]).fadeIn(200);
		$("#input2").hide().html(words[i][1]).fadeIn(200);
	}
});

$("body").on('keyup', function(e) {
	if ((e.keyCode === 39) && (n !== 0)) {
		$( "#forward" ).trigger( "click" );
	}
});
$("body").on('keyup', function(e) {
	if ((e.keyCode === 37) && (n !== 0)) {
		$( "#back" ).trigger( "click" );
	}
});

$("#back").trigger('click'); //initialize


var arent = [],
	are = [];

var flip = function(){
	$("#input").toggleClass('switchout push');
	$("#input2").toggleClass('switchout push');
};

var no = function() {
		var lastArent;
		var opp = $('.switchout').text();
		//removing the current index value from the array
		words.splice(i,1);
		//push content of main > p to arent
		arent.push($('.push').text());
		//append text of span to li
		if (arent.length < 1) {
	    	lastArent = arent[0];
		}else {
		    lastArent = arent[arent.length-1];
		}
		$('#arent').append('<li class="scale" data-opposite="' + opp + '" onclick="deleteListItem(this)">' + lastArent + '</li>');

		n = updateLength(); //update length of n
		
		if (n === 0) {
			$("#input").hide().html('Complete!').fadeIn(200);
			$("#input2").hide().html('Complete!').fadeIn(200);
		}	
		//if end of word array, start from beginning
		else if (i >= (n-1)) {
			i=0;
			$("#input").hide().html(words[0][0]).fadeIn(200);
			$("#input2").hide().html(words[0][1]).fadeIn(200);
		}
		// else, go to next word
		else {
			$("#input").hide().html(words[i][0]).fadeIn(200);
			$("#input2").hide().html(words[i][1]).fadeIn(200);
		}
};

var yes = function() {
	var lastAre;
	var opp = $('.switchout').text();
	//removing the current index value from the array
	words.splice(i,1);
	//push content of main > p to arent
	are.push($('.push').text());
	//append text of span to li
	if (are.length < 1) {
    	lastAre = are[0];
	}else {
	    lastAre = are[are.length-1];
	}
	$('#are').append('<li data-opposite="' + opp + '" onclick="deleteListItem(this)">' + lastAre + '</li>');

	n = updateLength(); //update length of n

	if (n === 0) {
			$("#input").hide().html('Complete!').fadeIn(200);
			$("#input2").hide().html('Complete!').fadeIn(200);
		}
	//if end of word array, start from beginning
	else if (i >= (n-1)) {
		i=0;
		$("#input").hide().html(words[0][0]).fadeIn(200);
		$("#input2").hide().html(words[0][1]).fadeIn(200);
	}
	// else, go to next word
	else {
		$("#input").hide().html(words[i][0]).fadeIn(200);
		$("#input2").hide().html(words[i][1]).fadeIn(200);
	}
};



//FLIP ADJECTIVE
$("#flip").on('click', function() {
	flip();
});
$("body").on('keyup', function(e) {
	if (e.keyCode === 32) {
		flip();
	}
});
//ADD TO ARENT
$("#no").on('click', function() {
	if (n !== 0){
		no();
	}	
});
$("body").on('keyup', function(e) {
	if ((e.keyCode === 40) && (n !== 0)) {
		no();
	}
});
//ADD TO ARE
$("#yes").on('click', function() {
	if (n !== 0) {
		yes();
	}
});
$("body").on('keyup', function(e) {
	if ((e.keyCode === 38) && (n !== 0)) {
		yes();
	}
});

//Let's Go!
$("#start").on('click', function() {
	var input = $('#introtext input').val();
	if (input.length > 0) {
	$('#brandname').append('<span>' + input + '<i> is</i>' + '</span>').text();
	$('#intro').fadeOut(500);
	$('#brandname').css('color', '#fff');
	} else {
	$('#brandname').append('<span>' + input + '<i> is</i>' + '</span>').text();
	$('#intro').fadeOut(500);
	$('#brandname').css('color', '#111');
	}
});

$(document).keypress(function(e) {
    if(e.which === 13) {
        var input = $('#introtext input').val();
		if (input.length > 0) {
			$('#brandname').append('<span>' + input + '<i> is</i>' + '</span>').text();
			$('#intro').fadeOut(500);
			$('#brandname').css('color', '#fff');
			} else {
			$('#brandname').append('<span>' + input + '<i> is</i>' + '</span>').text();
			$('#intro').fadeOut(500);
			$('#brandname').css('color', '#111');
		}
    }
});

//delete Are/Aren't Items
var deleteListItem = function(currentLi){
	var content = $(currentLi).html();
	var flipSide = $(currentLi).data('opposite');
	$(currentLi).remove();
	words.push([content, flipSide]);
	n = updateLength();
};

//instructions counter
var instructionsCounter = 0;
var iconPressed = false;

$("body").on('keyup', function(e) {
	if ((e.keyCode === 37) || (e.keyCode === 38) || (e.keyCode === 39) || (e.keyCode === 40)) {
		instructionsCounter++;
	}
	if (instructionsCounter > 8) {
		$('#instructions ul, #downbutton').addClass('down');
	}
});

$('#instruction-icon').on('click', function() {
	iconPressed = true;
	$('#instructions ul, #downbutton').toggleClass('down');
});

$(document).ready(function() {

	var wordcontainer = document.getElementById("#are");
	var isScrolledToBottom = wordcontainer.scrollHeight - wordcontainer.clientHeight <= wordcontainer.scrollTop + 1;

	if(isScrolledToBottom) {
	    wordcontainer.scrollTop = wordcontainer.scrollHeight - wordcontainer.clientHeight;
	}

});

