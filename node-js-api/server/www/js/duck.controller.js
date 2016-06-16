angular.module('duckController', []).controller('duckController', ['$scope', 'Ducks',
function ($scope, Ducks) {

	$scope.loading = true;
	$scope.ducks = [];

	$scope.init = function(){
		// Call function every second
		setInterval(updateDucks, 1000);
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
