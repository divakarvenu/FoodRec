foodModule.controller('addScratchController', function($scope,$state,Notes){

	$scope.scratch = new Notes();

	$scope.addFood = function() {
		console.log("done");
		$scope.scratch.$save(function () {
			$state.go('scratchpad');
		});

	}
})
