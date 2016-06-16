angular.module('duckService', []).factory('Ducks', ['$http', function($http) {

	return {
		getDucks : function() {
			return $http.get('/api/ducks');
		}
	}

}]);
