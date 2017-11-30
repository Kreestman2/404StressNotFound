function Song(name, musician) {
        this.name = name;
        this.musician = musician;
		this.cover = "cover1.jpg";
		this.disliked = false;
    };  
	
	//airports.push(new Song(name.value,musician.value));

function Playlist(time) {
	this.playlist = [];
	this.time = time;
}

function randomizePlaylist(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


function resetPlaylist(){
	console.log("In playlist reset");
	var i = 0;
	var array = require('electron').remote.getGlobal('userPlaylist').Playlist.playlist;
	while(i < array.length)
	{
		console.log("I: " + i + ", length: " + array.length);
		if(array[i].disliked == true) {
			console.log("Removing: " + i + ", name: " + array[i].name);
			array.splice(i, 1);
		}
		else{
			i++;
		}
	}
	if (array.length == 0)
		window.location.href = "./mymusic.html";
	require('electron').remote.getGlobal('userPlaylist').Playlist.playlist = randomizePlaylist(array);
	console.log("About to remake playlist");
	makeUL(require('electron').remote.getGlobal('userPlaylist').Playlist.playlist);	
}

function makeUL(array) {
    // Create the list element:
    var list = document.getElementById('playlist');
	while (list.firstChild) {
		list.removeChild(list.firstChild);
	}
    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        //item.appendChild(document.createTextNode(array[i].name));
		item.setAttribute("song", array[i].name);
		item.setAttribute("cover", array[i].cover);
		item.setAttribute("musician", array[i].musician);
		item.textContent = array[i].name.substring(0,array[i].name.length-4);
		console.log(item.getAttribute('song'));
		if (i == 0)
			item.setAttribute("class", "active");
        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}


//document.getElementById('foo').appendChild(makeUL(options[0]));
//var options = [
//        set0 = ['Option 1','Option 2'],
//        set1 = ['First Option','Second Option','Third Option']
//    ];