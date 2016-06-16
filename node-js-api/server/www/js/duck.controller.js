angular.module('duckController', []).controller('duckController', ['$scope', 'Ducks',
function ($scope, Ducks) {

	$scope.loading = true;
	$scope.ducks = [];

	$scope.init = function(){
		// Call function every second
		setInterval(updateDucks, 1000);
	};

	$scope.createDuck = function(){
		Ducks.createDuck($scope.newDuckName)
		.success(function(data) {
			// Do stuff
		})
		.error(function(error) {
			alert("Error creating duck");
		});
	};

	$scope.deleteDuck = function(duck){
		Ducks.deleteDuck(duck)
		.error(function(error) {
			alert("Error creating duck");
		});
	};

	// Update the list of ducks
	function updateDucks(){
		$scope.loading = true;
		Ducks.getDucks()
			.success(function (data) {
			$scope.ducks = data;
			$scope.loading = false;
		});
	}

}]);
