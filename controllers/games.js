//im missing something here where i need to set the $http for the controller, and what the point of the dependency is in this scenario
//rewatch the last 2 chapters of videos and duplicate for this, setting up some buttons and tables
//create some forms for adding data as well, those won't be published but good practice for inputting and saving user data
//bonus: create a script that mass-uploads data from a CSV into the database, watch the website dynamically display it
var angular = require('angular');
(function (){
	var app = angular.module('games', []);
	app.directive('gamesList', ['$http', function($http){
		return{
			restrict: 'E',
			templateUrl : '../views/games.html',
			controller: function(){
				var games = this;
				games.games = [];
				$http.get('/games.json').then(function(data){
					gamess = data;
				});		
			},
			controllerAs : 'gamesCtrl';
		}
	}]);
});