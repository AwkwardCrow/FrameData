var app = angular.module('FrameData', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('home', {
		url: '/',
		views: {
			'': {templateUrl: './index.html'},
			'games@home':{templateUrl: '../views/games.html'},
			'characters@home':{templateUrl: '../views/characters.html'},
			'moves@home':{templateUrl:'../views.moves.html'}
		}
	});
});

app.controller('MainCtrl', [
'$scope', 
'$window',

function($scope, $window){
  $scope.gamesView = $window.gamesView;
  $scope.charactersView = $window.charactersView;
  $scope.movesView = $window.movesView;
}]);
