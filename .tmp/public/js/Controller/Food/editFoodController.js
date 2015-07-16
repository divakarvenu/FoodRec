
foodModule.controller('editFoodController', function($scope,$state,$stateParams,Notes,localStorageService){


	if(localStorageService.get('user')){
		$scope.user=localStorageService.get('user');
	}
	else{
		console.log('nt working');
		$state.go('home');
	}



//editing the food using stateparms

	$scope.Task = Notes.get({id:$stateParams.id});
		$scope.editFood = function() {
	 $scope.Task.$save(function () {
		$state.go('Food');
	});
}

})
