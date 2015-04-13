foodModule.controller('addFoodController', function($scope,$state,Notes,localStorageService){


	if(localStorageService.get('user')){
		console.log('works')
		console.log(localStorageService.get('user'));
	}
	else{
		console.log('nt working');
		$state.go('home');
	}



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
