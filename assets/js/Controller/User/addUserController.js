foodModule.controller('addUserController', function($scope,$state,User,Login,localStorageService){

	$scope.user = new User();
	$scope.user.password=Math.random().toString(36).substring(7);
	$scope.addUser = function() {
		$scope.user.$save(function () {
			$state.go('Food');
		});
		localStorageService.set('user', $scope.user);
	}
	$scope.signIn=function(){
		console.log('Sign in function works');
		console.log($scope.user.signemail);
		$scope.signuser=Login.query({email:$scope.user.signemail}).$promise.then(function(todos) {
			$scope.todos = todos;
}, function(errResponse) {
   console.log('error');
});

	console.log($scope.todos);

	}

})
