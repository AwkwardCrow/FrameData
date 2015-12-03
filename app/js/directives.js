var framedataDirectives = angular.module('framedataDirectives', []);


module.directive("gameButton", ['Game', function(Game){
	return{
		restrict: "A",
		scope: {
			
		}
		link: function(scope, element, attrs){
			element.bind("click", function(){
				
			});
		}
	}
}])