$(document).ready(function()
{
	$( '#tabs' ).tabs();
	$("#reserve").click(reserve);
	
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