$(document).ready(function()
{
	$( '#tabs' ).tabs();
	
	queryRooms();
	setInterval(queryRooms, 5000);
	
	$("#reserve").click(reserve);
});

function queryRooms()
{
	var xhr = new XMLHttpRequest();
	//xhr.open("GET", "http://jsonpwrapper.com/?urls%5B%5D=http%3A%2F%2Foccupied.dptechnics.com%2Fapi%2Fallroomstatus", true);
	xhr.open("GET", "http://www.corsproxy.com/occupied.dptechnics.com/api/allroomstatus", true);
	//xhr.open("GET", "https://jsonp.nodejitsu.com/?callback=myCallback&url=http://occupied.dptechnics.com/api/allroomstatus", true);
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
		$(this).find(".status").html("Reserveer");
	},
	function(){
		$(this).find(".status").html("");
	});
	
	$(".status").click(openReservationPage);
}

function openReservationPage()
{
	$("header > h1").html("Reservation");
	$("#roomtable").hide();
	$("#reservation").show();
}

function reserve()
{
	$("header > h1").html("Rooms");
	$("#reservation").hide();
	$("#roomtable").show();
}