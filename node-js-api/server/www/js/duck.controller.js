angular.module('duckController', []).controller('duckController', ['$scope', 'Ducks', function ($scope, Ducks) {

	$scope.loading = true;
	$scope.ducks = [];

	$scope.init = function(){
		Ducks.getDucks().success(function(data){
			updateDucks(data);
		});
	};

	$scope.createDuck = function(){
		Ducks.createDuck($scope.newDuckName)
		.success(function(data) {
			alert("Duck created");
			updateDucks(data);
		})
		.error(function(error) {
			alert("Error creating duck");
		});
	};

	$scope.updateDuck = function(duck, newName){
		Ducks.updateDuck(duck, newName)
		.success(function(data){
			updateDucks(data);
		})
		.error(function(error) {
			alert("Error updating duck");
		});
	};

	$scope.deleteDuck = function(duck){
		Ducks.deleteDuck(duck)
		.success(function(data){
			updateDucks(data);
		})
		.error(function(error) {
			alert("Error creating duck");
		});
	};

	// Update the list of ducks
	function updateDucks(listOfDucks){
		$scope.ducks = listOfDucks;
	}

}]);
