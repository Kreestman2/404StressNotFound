var audio;
var currSong = 0;
/*$.getScript("./playlistToUL.js", function() {

   alert("Script loaded but not necessarily executed.");

});)*/
//Hide Pause
$('#pause').hide();
require('electron').remote.getGlobal('userPlaylist').Playlist.playlist = randomizePlaylist(require('electron').remote.getGlobal('userPlaylist').Playlist.playlist);
initAudio($('#playlist li:first-child'));

function initAudio(element){
	var song = element.attr('song');
	var title = element.text();
	var cover = element.attr('cover');
	var artist = element.attr('musician');
	//Create audio object
	audio = new Audio('Music/'+ song);
	
	//Insert audio info
	$('.artist').text(artist);
	$('.title').text(title);
	
	//Insert song cover
	$('img.cover').attr('src','Images/covers/'+cover);
	
	$('#playlist li').removeClass('active');
	element.addClass('active');
	audio.play();
	$('#play').hide();
	$('#pause').show();
	showDuration();
}

//Play button
$('#play').click(function(){
	audio.play();
	$('#play').hide();
	$('#pause').show();
	showDuration();
});

//Pause button
$('#pause').click(function(){
	audio.pause();
	$('#play').show();
	$('#pause').hide();
});

//Stop button
$('#stop').click(function(){
	audio.pause();
	$('#play').show();
	$('#pause').hide();
	audio.currentTime = 0;
});

//Next button
$('#next').click(function(){
	audio.pause();
	var next = $('#playlist li.active').next();
	//ADD DISLIKE FUNCTIONALITY HER
	require('electron').remote.getGlobal('userPlaylist').Playlist.playlist[currSong].disliked = true;
	console.log("Disliking song " + require('electron').remote.getGlobal('userPlaylist').Playlist.playlist[currSong].name + " at pos " + currSong);
	currSong++;
	if(next.length == 0){
		next = $('#playlist li:first-child');
		//RESET PLAYLIST CODE GOES HERE
		console.log("Resetting playlist");
		resetPlaylist();
		currSong = 0;
	}
	initAudio(next);
	audio.play();
	showDuration();
});

//Prev button - get rid of?
/*$('#prev').click(function(){
	audio.pause();
	var prev = $('#playlist li.active').prev();
	if(prev.length == 0){
		prev = $('#playlist li:last-child');
	}
	initAudio(prev);
	audio.play();
	showDuration();
});*/

//Playlist song click
/*$('#playlist li').click(function(){
	audio.pause();
	initAudio($(this));
	$('#play').hide();
	$('#pause').show();
	audio.play();
	showDuration();
});*/

//Volume control
$('#volume').change(function(){
	audio.volume = parseFloat(this.value / 10);
});

//Time/Duration
function showDuration(){
	$(audio).bind('timeupdate',function(){
		//Get hours and minutes
		var s = parseInt(audio.currentTime % 60);
		var m = parseInt(audio.currentTime / 60) % 60;
		if(s < 10){
			s = '0'+s;
		}
		$('#duration').html(m + ':'+ s);
		var value = 0;
		if(audio.currentTime > 0){
			value = Math.floor((100 / audio.duration) * audio.currentTime);
		}
		$('#progress').css('width',value+'%');
		
		audio.onended = function() {
			var next = $('#playlist li.active').next();
			currSong++;
			if(next.length == 0){
				next = $('#playlist li:first-child');
				//RESET PLAYLIST CODE GOES HERE
				console.log("Resetting playlist");
				resetPlaylist();
				currSong = 0;
				initAudio($('#playlist li:first-child'));
			}
			else{
				console.log("Hitting next");
				initAudio(next);
			}
			console.log("Now playing " + require('electron').remote.getGlobal('userPlaylist').Playlist.playlist[currSong].name + " at pos " + currSong);

			audio.play();
			showDuration();
		};
	});
}


// Get the modal
var modal = document.getElementById('openModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
timeout();
function timeout(){
	if (require('electron').remote.getGlobal('userPlaylist').Playlist.time > 0){
		setTimeout(function(){
			console.log("Should block now");
			modal.style.display = "block";
		}, (require('electron').remote.getGlobal('userPlaylist').Playlist.time * 60000)); //change to require('electron').remote.getGlobal('userPlaylist').Playlist.time
	}
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function closeModal(){
	console.log("Should close now");
	modal.style.display = "none";
	timeout();
}

function changePage(){
	console.log("Should switch now");
	window.location.href = "./mymusic.html";
}