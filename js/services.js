angular.module('apiService', [])
	.factory('Data', ['$http', function($http) {
		return {
			getFilterGroups : function() {
				return $http.get('/api/filters');
			},
			createFilterGroup : function(data) {
				return $http.post('/api/filter', data);
			},
			updateFilterGroup : function (data) {
				return $http.post('/api/updateFilter/', data);
			},
			deleteFilterGroup : function(id) {
				return $http.delete('/api/filter/' + id);
			}
		}
	}]);
