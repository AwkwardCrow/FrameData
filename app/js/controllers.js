'use strict';

/* Controllers */

var framedataControllers = angular.module('framedataControllers', []);

framedataControllers.controller('GameListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('../data/games.json').success(function(data) {
      console.log("getting games");
      $scope.games = data;
      $scope.isCollapsed = false;
    });
  }]);

framedataControllers.controller('CharactersCtrl', ['$scope', '$stateParams', '$http',
  function($scope, $stateParams, $http){
    $http.get('../data/characters.json')
    .success(function(data){
      console.log("getting characters");
      console.log($stateParams);
      $scope.characters = [];
      angular.forEach(data, function(character){
        if(character.gameid == $stateParams.gameID)
          $scope.characters.push(character);
      });
      
      if($scope.characters.length==0)
        $scope.characters.push({name: "Coming Soon", health: "Coming Soon"})
      
      });
      
    //});
  }]);

framedataControllers.controller('MovesCtrl', ['$scope', '$stateParams', '$http',
  function($scope, $stateParams, $http){
    $http.get('../data/moves.json')
    .success(function(data){
      //console.log(data);
      console.log($stateParams);
      $scope.moves = [];
      angular.forEach(data, function(moves){
        if(moves.characterid == $stateParams.characterID)
          $scope.moves.push(moves);
      });
      
      //if($scope.moves.length==0)
        //$scope.moves.push({name: "Coming Soon", health: "Coming Soon"})
      
      });
      
    //});
  }]);