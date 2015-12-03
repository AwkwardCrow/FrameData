// app.js
var framedataApp = angular.module('framedataApp', ['ui.router', 'framedataControllers']);

framedataApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/games');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('games', {
            url: '/games',
            templateUrl: '../views/games.html',
            controller: 'GameListCtrl'
        })
        .state('games.characters',{
            url: '/characters',
            templateUrl: '../views/characters.html',
            controller: 'CharactersCtrl'
        })
        .state('moves',{
            url: '/moves/:characterID',
            templateUrl: '../views/moves.html',
            controller: 'MovesCtrl'
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit       
        });
        
});
