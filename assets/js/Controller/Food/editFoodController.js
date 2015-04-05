
foodModule.controller('editFoodController', function($scope,$state,$stateParams,Notes,localStorageService){

	$scope.scratch = Notes.get({id:$stateParams.id});

	console.log($scope.scratch.foodname);

		$scope.editFood = function() {
	$scope.scratch.$save(function () {
		$state.go('scratchpad');
	});
}

})
