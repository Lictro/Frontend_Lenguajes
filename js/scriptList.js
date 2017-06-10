var app = angular.module("app", []);

var users = [{
		name: "Luis"
	},{
		name: "Andres"
	},{
		name: "Carol"
	},{
		name: "Yadira"
	}];

var rooms=[{
		name: "Room 1"
	},{
		name: "Room 2"
	},{
		name: "Room 0"
	},{
		name: "Room 5"
	}];	

function addRoom(){
	var newRoom = document.getElementById("nameRoom").value
	console.log(rooms[0].name)
	rooms[0].name = "G"
	rooms.push({name: newRoom})
}	

app.controller("ListController", ["$scope",function($scope){
	$scope.users = users;

	$scope.rooms = rooms;
}]);