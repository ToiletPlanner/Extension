$(document).ready(function()
{
	$( '#tabs' ).tabs();
	
	queryRooms();
	//setInterval(queryRooms, 5000);
	
	/*$("tr").hover(
	function(){
		console.log($(this).find(".status"));
		$(this).find(".status").html("Reserveer");
	},
	function(){
		$(this).find(".status").html("");
	});*/
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
			renderRooms(rooms);
		}
	}
	xhr.send();
}

function renderRooms(rooms)
{
	target = $("#rooms");
	target.empty();
	rooms.forEach( function(room) {
		target.append('<tr><td class="name">' + room.roomname + ' <div class="status status_' + room.status + '"></div></td></tr>');
	});
	
	$("tr").hover(
	function(){
		console.log($(this).find(".status"));
		$(this).find(".status").html("Reserveer");
	},
	function(){
		$(this).find(".status").html("");
	});
}