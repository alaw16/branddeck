var words = [];
words[0] = ['Budding','Accomplished']; 
words[1] = ['Curious','Certain']; 
words[2] = ['Realistic','Idealistic']; 
words[3] = ['Practical','Imaginative'];

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
	if (e.keyCode === 16) {
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

var deleteListItem = function(currentLi){
	var content = $(currentLi).html();
	var flipSide = $(currentLi).data('opposite');
	$(currentLi).remove();
	words.push([content, flipSide]);
	n = updateLength();
};


$('body').keyup(function() {
	setTimeout(
        function() {
            $('#instructions ul').addClass('down');
        },
        15000);
});


