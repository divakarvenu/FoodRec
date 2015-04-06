
foodModule.controller('editFoodController', function($scope,$state,$stateParams,Notes,localStorageService){

	$scope.Food = Notes.get({id:$stateParams.id});

	console.log($scope.Food.foodname);

		$scope.editFood = function() {
	$scope.Food.$save(function () {
		$state.go('Food');
	});
}

})
