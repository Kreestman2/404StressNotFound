function Song(name, musician) {
        this.name = name;
        this.musician = musician;
		this.cover = "cover1.jpg";
    };  
	
	//airports.push(new Song(name.value,musician.value));

function Playlist(time) {
	this.playlist = [];
	this.time = time;
}
	
function makeUL(array) {
    // Create the list element:
    var list = document.getElementById('playlist');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        //item.appendChild(document.createTextNode(array[i].name));
		item.setAttribute("song", array[i].name);
		item.setAttribute("cover", array[i].cover);
		item.setAttribute("musician", array[i].musician);
		item.textContent = array[i].name.substring(0,array[i].name.length-3);
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