var words = [];
words[0] = ['Budding','Accomplished']; 
words[1] = ['Curious','Certain']; 
words[2] = ['Realistic','Idealistic']; 
words[3] = ['Practicle','Imaginative'];

// function random_sort () {
//       return (0.5 - Math.random() );
// }
// words.sort(random_sort);

var i = 0,
	n = words.length;

$("#forward").data('dir', 1);
$("#back").data('dir', -1);

$("#forward, #back").on('click', function() {
	i = (i + $(this).data('dir') + n) % n;
	$("#input").hide().html(words[i][0]).fadeIn(200);
	$("#input2").hide().html(words[i][1]).fadeIn(200);
});

$("#flip").on('click', function() {
	$("#input").toggleClass('switchout push');
	$("#input2").toggleClass('switchout push');
});

$("#back").trigger('click'); //initialize


var arent = [],
	are = [];

$("#no").on('click', function() {
	var lastArent;
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
	$('#arent').append('<li>' + lastArent + '</li>');
});

   

$("#yes").on('click', function() {
	var lastAre;
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
	$('#are').append('<li>' + lastAre + '</li>');
});


