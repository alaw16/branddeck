var words = [];
words[0] = ['Budding','Accomplished']; 
words[1] = ['Curious','Certain']; 
words[2] = ['Realistic','Idealistic']; 
words[3] = ['Practical','Imaginative'];

// function random_sort () {
//       return (0.5 - Math.random() );
// }
// words.sort(random_sort);

var i = 0,
	n = words.length;

var updateLength = function() {
	var newLength = words.length;
	return newLength;
};

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

<<<<<<< HEAD
<<<<<<< HEAD
var flip = function(){
	$("#input").toggleClass('switchout push');
	$("#input2").toggleClass('switchout push');
};

// var no = function() {
// $("body").on('click keyup', function(e) {
// 	if (e.keyCode == 37) {
// 		var lastArent;
// 		//removing the current index value from the array
// 		words.splice(i,1);
// 		//push content of main > p to arent
// 		arent.push($('.push').text());

// 		var opp = $('.switchout').text();
// 		//append text of span to li
// 		if (arent.length < 1) {
// 	    	lastArent = arent[0];
// 		}else {
// 		    lastArent = arent[arent.length-1];
// 		}
// 		$('#arent').append('<li data-opposite="' + opp + '" onclick="deleteListItem(this)">' + lastArent + '</li>');

// 		n = updateLength(); //update length of n

// 		//if end of word array, start from beginning
// 		if (i >= (n-1)) {
// 			i=0;
// 			$("#input").hide().html(words[0][0]).fadeIn(200);
// 			$("#input2").hide().html(words[0][1]).fadeIn(200);
// 		}
// 		// else, go to next word
// 		else {
// 			$("#input").hide().html(words[i][0]).fadeIn(200);
// 			$("#input2").hide().html(words[i][1]).fadeIn(200);
// 		}
// 	}
// });
=======
=======
>>>>>>> parent of 4fab323... throw up
$("#no").on('click keyup', function(e) {
	if (e.keyCode === 37 || e.type === 'click') {
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

		n = updateLength(); //update length of n

		//if end of word array, start from beginning
		if (i >= (n-1)) {
			i=0;
			$("#input").hide().html(words[0][0]).fadeIn(200);
			$("#input2").hide().html(words[0][1]).fadeIn(200);
		}
		// else, go to next word
		else {
			$("#input").hide().html(words[i][0]).fadeIn(200);
			$("#input2").hide().html(words[i][1]).fadeIn(200);
		}
	}
});

   
<<<<<<< HEAD
>>>>>>> parent of 4fab323... throw up
=======
>>>>>>> parent of 4fab323... throw up

$("#yes").on('click', function() {
	var lastAre;
	//removing the current index value from the array
	words.splice(i,1);
	//push content of main > p to arent
	are.push($('.push').text());

	//flipside var
	var opp = $('.switchout').text();
	//append text of span to li
	if (are.length < 1) {
    	lastAre = are[0];
	}else {
	    lastAre = are[are.length-1];
	}
	$('#are').append('<li data-opposite="' + opp + '" onclick="deleteListItem(this)">' + lastAre + '</li>');

	n = updateLength(); //update length of n

	//if end of word array, start from beginning
	if (i >= (n-1)) {
		i=0;
		$("#input").hide().html(words[0][0]).fadeIn(200);
		$("#input2").hide().html(words[0][1]).fadeIn(200);
	}
	// else, go to next word
	else {
		$("#input").hide().html(words[i][0]).fadeIn(200);
		$("#input2").hide().html(words[i][1]).fadeIn(200);
	}
});
<<<<<<< HEAD

deleteListItem = function(currentLi){
	var content = $(currentLi).html();
	var flipSide = $(currentLi).data('opposite');
	$(currentLi).remove();
	words.push([content, flipSide]);
	n = updateLength();
};
=======
>>>>>>> parent of 4fab323... throw up


