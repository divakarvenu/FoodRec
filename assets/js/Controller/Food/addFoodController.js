foodModule.controller('addFoodController', function($scope,$state,Notes,localStorageService){


//Adding food with the association
	$scope.Food = new Notes();
  $scope.Food.owner=localStorageService.get('user').id;
	$scope.addFood = function() {
		console.log("done");
		$scope.Food.$save(function () {
			$state.go('Food');
		});

	}
})
