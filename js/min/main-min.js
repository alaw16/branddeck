var words=[];words[0]=["Budding","Accomplished"],words[1]=["Curious","Certain"],words[2]=["Realistic","Idealistic"],words[3]=["Practicle","Imaginative"];var i=0,n=words.length,updateLength=function(){var i=words.length;return i};$("#forward").data("dir",1),$("#back").data("dir",-1),$("#forward, #back").on("click",function(){i=(i+$(this).data("dir")+n)%n,$("#input").hide().html(words[i][0]).fadeIn(200),$("#input2").hide().html(words[i][1]).fadeIn(200)}),$("#flip").on("click",function(){$("#input").toggleClass("switchout push"),$("#input2").toggleClass("switchout push")}),$("#back").trigger("click");var arent=[],are=[];$("#no").on("click keyup",function(t){if(37===t.keyCode||"click"===t.type){var e;words.splice(i,1),arent.push($(".push").text()),e=arent.length<1?arent[0]:arent[arent.length-1],$("#arent").append("<li>"+e+"</li>"),n=updateLength(),i>=n-1?(i=0,$("#input").hide().html(words[0][0]).fadeIn(200),$("#input2").hide().html(words[0][1]).fadeIn(200)):($("#input").hide().html(words[i][0]).fadeIn(200),$("#input2").hide().html(words[i][1]).fadeIn(200))}}),$("#yes").on("click",function(){var t;words.splice(i,1),are.push($(".push").text()),t=are.length<1?are[0]:are[are.length-1],$("#are").append("<li>"+t+"</li>"),n=updateLength(),i>=n-1?(i=0,$("#input").hide().html(words[0][0]).fadeIn(200),$("#input2").hide().html(words[0][1]).fadeIn(200)):($("#input").hide().html(words[i][0]).fadeIn(200),$("#input2").hide().html(words[i][1]).fadeIn(200))});