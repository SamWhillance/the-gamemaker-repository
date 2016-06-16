angular.module('duckService', []).factory('Ducks', ['$http', function($http) {

	return {
		getDucks: function() {
			return $http.get('/api/ducks');
		},
		createDuck: function(duckName) {
			return $http.post('/api/duck', { name: duckName });
		},
		deleteDuck: function(duck) {
			console.log("Deleting duck", duck);
			return $http.delete('/api/duck/'+duck._id);
		}
	}

}]);
