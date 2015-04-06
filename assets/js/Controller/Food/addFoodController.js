foodModule.controller('addFoodController', function($scope,$state,Notes){

	$scope.Food = new Notes();

	$scope.addFood = function() {
		console.log("done");
		$scope.Food.$save(function () {
			$state.go('Food');
		});

	}
})
