var app = angular.module("todoApp",[]);

app.controller("TodoCtrl", TodoCtrl);

function TodoCtrl() {
	this.editMode = false;
	this.TODOs = [
		"Learn angular",
		"Learn to fly",
		"Try to fly"
	];

	this.addNewTODO = function(){
		this.TODOs.push(this.newTODO);
		this.newTODO = "";
	}

	this.triggerEditMode = function(){
		this.editMode = !this.editMode;
	}
	this.deleteTODO = function(index){
		this.TODOs.splice(index, 1);

	}
}