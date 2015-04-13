
foodModule.controller('editFoodController', function($scope,$state,$stateParams,Notes,localStorageService){


	if(localStorageService.get('user')){
		console.log('works');
		console.log(localStorageService.get('user'));
	}
	else{
		console.log('nt working');
		$state.go('home');
	}



//editing the food using stateparms

	$scope.Food = Notes.get({id:$stateParams.id});
	 console.log($scope.Food.foodname);
		$scope.editFood = function() {
	 $scope.Food.$save(function () {
		$state.go('Food');
	});
}

})
