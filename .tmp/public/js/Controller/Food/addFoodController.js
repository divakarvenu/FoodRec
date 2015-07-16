foodModule.controller('addFoodController', function($scope,$state,$filter,Notes,localStorageService){


	if(localStorageService.get('user')){
		$scope.user=localStorageService.get('user');
		console.log($scope.user);
	}
	else{
		$state.go('home');
	}



//Adding food with the association
	$scope.Task = new Notes();
// 	console.log($scope.Food);
  $scope.Task.owner=localStorageService.get('user').id;
	$scope.addFood = function() {
		$scope.Task.taskapproval='pending';
	//	$scope.Task.taskdate=$filter('date')(	$scope.Task.taskdate,'yyyy-MM-dd');
		//console.log($scope.Task.taskdate);
		$scope.Task.$save(function () {
			$state.go('Food');
		});

	}
})
