//im missing something here where i need to set the $http for the controller, and what the point of the dependency is in this scenario
//rewatch the last 2 chapters of videos and duplicate for this, setting up some buttons and tables
//create some forms for adding data as well, those won't be published but good practice for inputting and saving user data
//bonus: create a script that mass-uploads data from a CSV into the database, watch the website dynamically display it
var angular = require('angular');
(function (){
	var app = angular.module('characters', []);
	app.directive('characterList', ['$http', function($http){
		return{
			restrict: 'E',
			templateUrl : '../views/characters.html',
			controller: function(){
				var gameCharacters = this;
				gameCharacters.characters = [];
				$http.get('/characters.json', {apiKey: 'game'}).then(function(data){
					gameCharacters.characters = data;
				});		
			},
			controllerAs : 'charactersCtrl';
		}
	}]);
});