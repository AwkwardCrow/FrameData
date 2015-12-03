//im missing something here where i need to set the $http for the controller, and what the point of the dependency is in this scenario
//rewatch the last 2 chapters of videos and duplicate for this, setting up some buttons and tables
//create some forms for adding data as well, those won't be published but good practice for inputting and saving user data
//bonus: create a script that mass-uploads data from a CSV into the database, watch the website dynamically display it
var angular = require('angular');
(function (){
	var app = angular.module('moves', []);
	app.directive('movesList', ['$http', function($http){
		return{
			restrict: 'E',
			templateUrl : '../views/moves.html',
			controller: function(){
				var charMoves = this;
				charMoves.moves = [];
				$http.get('/moves.json', {apiKey: 'character'}).then(function(data){
					charMoves.moves = data;
				});		
			},
			controllerAs : 'movesCtrl';
		}
	}]);
});