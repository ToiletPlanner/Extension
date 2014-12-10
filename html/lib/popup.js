var rooms = [];

$(document).ready(function()
{
	$( '#tabs' ).tabs();
	
	queryRooms();
	setInterval(queryRooms, 5000);
});

function queryRooms()
{
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://www.corsproxy.com/occupied.dptechnics.com/api/allroomstatus", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			// JSON.parse does not evaluate the attacker's scripts.
			console.log(xhr.responseText);
			rooms = JSON.parse(xhr.responseText);
			renderRooms();
		}
	}
	xhr.send();
}

/*function queryRooms()
{
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://www.corsproxy.com/occupied.dptechnics.com/api/room", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			// JSON.parse does not evaluate the attacker's scripts.
			console.log(xhr.responseText);
			rooms = JSON.parse(xhr.responseText);
			for (var i = 0; i < rooms.length; i++) {
				queryRoomData(i);
			}
			renderRooms();
		}
	}
	xhr.send();
}

function queryRoomData(id) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://www.corsproxy.com/occupied.dptechnics.com/api/roomstatus/" + rooms[id].id, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			rooms[id].status = JSON.parse(xhr.responseText)[0];
		}
	}
	xhr.send();
}*/

function renderRooms()
{
	target = $("#rooms");
	target.empty();
	rooms.forEach( function(room) {
		target.append('<tr><td class="name">' + room.roomname + ' <div class="status status_' + room.status + '"></div></td></tr>');
	});
}